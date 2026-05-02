import type { AtmosphereInput, AtmosphereState } from "./types.js";

const SPECIFIC_GAS_CONSTANT_DRY_AIR = 287.05287;
const GAMMA_DRY_AIR = 1.4;
const KELVIN_OFFSET = 273.15;

export const ISA_STANDARD: AtmosphereInput = {
  temperatureC: 15,
  pressureHPa: 1013.25
};

export function calculateAtmosphere(input: AtmosphereInput): AtmosphereState {
  const temperatureK = input.temperatureC + KELVIN_OFFSET;
  const pressurePa = input.pressureHPa * 100;
  return {
    ...input,
    airDensityKgM3: pressurePa / (SPECIFIC_GAS_CONSTANT_DRY_AIR * temperatureK),
    speedOfSoundMs: Math.sqrt(GAMMA_DRY_AIR * SPECIFIC_GAS_CONSTANT_DRY_AIR * temperatureK)
  };
}
