import { roundTo } from "./units.js";
const EARTH_ANGULAR_RATE_RAD_S = 7.2921159e-5;
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}
export function calculateCoriolisCorrection(input) {
    if (!Number.isFinite(input.latitudeDeg) || !Number.isFinite(input.directionOfFireDeg)) {
        return { horizontalRightCm: 0, verticalCm: 0 };
    }
    if (input.distanceM <= 0 || input.timeOfFlightS <= 0)
        return { horizontalRightCm: 0, verticalCm: 0 };
    const latitudeRad = degToRad(input.latitudeDeg);
    const directionRad = degToRad(input.directionOfFireDeg);
    const rangeTimeTerm = EARTH_ANGULAR_RATE_RAD_S * input.distanceM * input.timeOfFlightS * 100;
    return {
        horizontalRightCm: roundTo(rangeTimeTerm * Math.sin(latitudeRad), 1),
        verticalCm: roundTo(rangeTimeTerm * Math.cos(latitudeRad) * Math.sin(directionRad), 1)
    };
}
//# sourceMappingURL=coriolis.js.map