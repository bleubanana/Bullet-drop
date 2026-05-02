import { g1DragCoefficient } from "./dragG1.js";
import { cmToMoa, cmToMrad, roundTo } from "./units.js";
const GRAVITY_MS2 = 9.80665;
const G1_BC_TO_METRIC_FACTOR = 703.07;
export function solveRawTrajectory(input) {
    const distances = [...new Set(input.distancesM)].sort((a, b) => a - b);
    const maxDistance = distances[distances.length - 1] ?? 0;
    if (maxDistance <= 0)
        return [];
    if (input.muzzleVelocityMs <= 0)
        throw new Error("Muzzle velocity must be positive");
    if (input.ballisticCoefficientG1 <= 0)
        throw new Error("Ballistic coefficient must be positive");
    const dt = input.timeStepS ?? 0.0005;
    const metricBc = input.ballisticCoefficientG1 * G1_BC_TO_METRIC_FACTOR;
    let x = 0;
    let y = 0;
    let vx = input.muzzleVelocityMs;
    let vy = 0;
    let t = 0;
    let distanceIndex = 0;
    const points = [];
    while (x <= maxDistance + 1 && distanceIndex < distances.length) {
        const targetDistance = distances[distanceIndex];
        if (targetDistance === undefined)
            break;
        if (x >= targetDistance) {
            points.push({
                distanceM: targetDistance,
                boreDropCm: y * 100,
                timeOfFlightS: t,
                velocityMs: Math.sqrt(vx * vx + vy * vy)
            });
            distanceIndex += 1;
            continue;
        }
        const velocity = Math.sqrt(vx * vx + vy * vy);
        if (velocity < 5)
            break;
        const mach = velocity / input.atmosphere.speedOfSoundMs;
        const dragCoefficient = g1DragCoefficient(mach);
        const dragAcceleration = input.atmosphere.airDensityKgM3 * velocity * velocity * dragCoefficient / (2 * metricBc);
        const invVelocity = 1 / velocity;
        vx += -dragAcceleration * vx * invVelocity * dt;
        vy += (-GRAVITY_MS2 - dragAcceleration * vy * invVelocity) * dt;
        x += vx * dt;
        y += vy * dt;
        t += dt;
    }
    return points;
}
export function lineOfSightDropCm(raw, distanceM, zeroM, sightHeightCm) {
    const point = raw.find(item => item.distanceM === distanceM);
    const zeroPoint = raw.find(item => item.distanceM === zeroM);
    if (!point)
        throw new Error(`Missing trajectory point for ${distanceM} m`);
    if (!zeroPoint)
        throw new Error(`Missing zero trajectory point for ${zeroM} m`);
    const sightLineCm = sightHeightCm * (1 - distanceM / zeroM) + zeroPoint.boreDropCm * (distanceM / zeroM);
    return point.boreDropCm - sightLineCm;
}
export function windDriftCm(timeOfFlightS, distanceM, muzzleVelocityMs, windSpeedMs, windValueFactor) {
    if (windSpeedMs <= 0 || windValueFactor <= 0)
        return 0;
    const vacuumTime = distanceM / muzzleVelocityMs;
    return windSpeedMs * windValueFactor * Math.max(0, timeOfFlightS - vacuumTime) * 100;
}
export function calculateTrajectory(input) {
    const distances = [...new Set([...input.distancesM, input.zeroM])].sort((a, b) => a - b);
    const raw = solveRawTrajectory({
        muzzleVelocityMs: input.muzzleVelocityMs,
        ballisticCoefficientG1: input.ballisticCoefficientG1,
        distancesM: distances,
        atmosphere: input.atmosphere
    });
    return input.distancesM.map(distanceM => {
        const rawPoint = raw.find(point => point.distanceM === distanceM);
        if (!rawPoint)
            throw new Error(`Missing trajectory point for ${distanceM} m`);
        const dropCm = roundTo(lineOfSightDropCm(raw, distanceM, input.zeroM, input.sightHeightCm), 1);
        const driftCm = roundTo(windDriftCm(rawPoint.timeOfFlightS, distanceM, input.muzzleVelocityMs, input.windSpeedMs, input.windValueFactor), 1);
        return {
            ...rawPoint,
            dropCm,
            dropMrad: roundTo(cmToMrad(dropCm, distanceM), 2),
            dropMoa: roundTo(cmToMoa(dropCm, distanceM), 2),
            windDriftCm: driftCm,
            windDriftMrad: roundTo(cmToMrad(driftCm, distanceM), 2),
            windDriftMoa: roundTo(cmToMoa(driftCm, distanceM), 2),
            mach: roundTo(rawPoint.velocityMs / input.atmosphere.speedOfSoundMs, 2)
        };
    });
}
//# sourceMappingURL=trajectory.js.map