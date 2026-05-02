import assert from "node:assert/strict";
import { calculateAtmosphere } from "../assets/core/atmosphere.js";
import { calculateTrajectory } from "../assets/core/trajectory.js";
import { cmToMoa, cmToMrad, fpsToMs, msToFps } from "../assets/core/units.js";
import { AMMUNITION, ammunitionById, BARREL_PROFILES, CALIBERS, profileByLoadId, SOURCES } from "../assets/data/index.js";

const approx = (actual, expected, tolerance, message) => {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${message}: expected ${expected} ± ${tolerance}, got ${actual}`);
};

function testUnits() {
  approx(fpsToMs(1070), 326.136, 0.001, "fpsToMs converts 1070 fps");
  approx(msToFps(321), 1053.15, 0.01, "msToFps converts 321 m/s");
  approx(cmToMrad(10, 100), 1, 0.0001, "10 cm at 100 m is 1 mrad");
  approx(cmToMoa(2.9089, 100), 1, 0.01, "2.9089 cm at 100 m is about 1 MOA");
}

function testAtmosphere() {
  const atmosphere = calculateAtmosphere({ temperatureC: 15, pressureHPa: 1013.25 });
  approx(atmosphere.airDensityKgM3, 1.225, 0.002, "ISA sea-level density");
  approx(atmosphere.speedOfSoundMs, 340.3, 0.5, "Speed of sound at 15 C");
  const cold = calculateAtmosphere({ temperatureC: -10, pressureHPa: 1013.25 });
  assert.ok(cold.airDensityKgM3 > atmosphere.airDensityKgM3, "Cold air should be denser at constant pressure");
  assert.ok(cold.speedOfSoundMs < atmosphere.speedOfSoundMs, "Cold air should have lower speed of sound");
}

function testTrajectoryZeroing() {
  const load = ammunitionById("cci-standard-velocity-35");
  const profile = profileByLoadId(load.id);
  const sixteen = profile.points.find(point => point.barrelLengthIn === 16);
  assert.ok(sixteen, "16 inch profile exists");
  const results = calculateTrajectory({
    muzzleVelocityMs: fpsToMs(sixteen.velocityFps),
    ballisticCoefficientG1: load.ballisticCoefficientG1.value,
    distancesM: [25, 50, 100, 200, 300],
    zeroM: 25,
    sightHeightCm: 2.5,
    atmosphere: calculateAtmosphere({ temperatureC: 15, pressureHPa: 1013.25 }),
    windSpeedMs: 4,
    windValueFactor: 1
  });

  const byDistance = Object.fromEntries(results.map(point => [point.distanceM, point]));
  approx(byDistance[25].dropCm, 0, 0.0001, "Zero distance drop");
  assert.ok(byDistance[50].dropCm < 0, "50 m should be below LOS for .22 LR 25 m zero");
  assert.ok(byDistance[100].dropCm < byDistance[50].dropCm, "Drop increases in magnitude with distance");
  assert.ok(byDistance[300].dropCm < byDistance[200].dropCm, "Longer distance has more negative drop");
  assert.ok(byDistance[100].windDriftCm > byDistance[50].windDriftCm, "Wind drift grows with distance");
  assert.ok(byDistance[100].timeOfFlightS > byDistance[50].timeOfFlightS, "TOF grows with distance");
}

function testDataIntegrity() {
  const sourceIds = new Set(SOURCES.map(source => source.id));
  assert.equal(sourceIds.size, SOURCES.length, "Source IDs must be unique");
  const loadIds = new Set(AMMUNITION.map(load => load.id));
  assert.equal(loadIds.size, AMMUNITION.length, "Ammunition IDs must be unique");
  const caliberIds = new Set(CALIBERS.map(caliber => caliber.id));

  for (const load of AMMUNITION) {
    assert.ok(caliberIds.has(load.caliberId), `${load.id} references a known caliber`);
    assert.ok(load.displayName.length > 0, `${load.id} has displayName`);
    assert.ok(load.nominalMuzzleVelocity.value > 0, `${load.id} has positive MV`);
    assert.ok(load.ballisticCoefficientG1.value > 0, `${load.id} has positive BC`);
    for (const ref of [...load.nominalMuzzleVelocity.sourceRefs, ...load.ballisticCoefficientG1.sourceRefs]) {
      assert.ok(sourceIds.has(ref), `${load.id} references known source ${ref}`);
    }
  }

  for (const profile of BARREL_PROFILES) {
    assert.ok(loadIds.has(profile.loadId), `${profile.loadId} profile references known load`);
    assert.ok(profile.points.length > 0, `${profile.loadId} has profile points`);
    let lastLength = 0;
    for (const point of profile.points) {
      assert.ok(point.barrelLengthIn > lastLength, `${profile.loadId} barrel lengths sorted`);
      assert.ok(point.velocityFps > 500 && point.velocityFps < 4000, `${profile.loadId} plausible velocity`);
      for (const ref of point.sourceRefs) {
        assert.ok(sourceIds.has(ref), `${profile.loadId} references known source ${ref}`);
      }
      lastLength = point.barrelLengthIn;
    }
  }

  for (const load of AMMUNITION) {
    assert.doesNotThrow(() => profileByLoadId(load.id), `${load.id} has barrel profile`);
  }
}

for (const test of [testUnits, testAtmosphere, testTrajectoryZeroing, testDataIntegrity]) {
  test();
  console.log(`OK ${test.name}`);
}

console.log("All tests passed.");
