import { hPaToInHg, msToFps, roundTo } from "./units.js";

export type StabilityStatus = "unstable" | "marginal" | "acceptable" | "stable" | "high";

export type StabilityInput = {
  bulletWeightGr: number;
  bulletDiameterIn: number;
  bulletLengthIn: number;
  twistInPerTurn: number;
  muzzleVelocityMs: number;
  temperatureC: number;
  pressureHPa: number;
};

export type StabilityResult = {
  sg: number;
  rpm: number;
  status: StabilityStatus;
};

export function stabilityStatus(sg: number): StabilityStatus {
  if (sg < 1) return "unstable";
  if (sg < 1.3) return "marginal";
  if (sg < 1.5) return "acceptable";
  if (sg <= 2.0) return "stable";
  return "high";
}

export function calculateMillerStability(input: StabilityInput): StabilityResult {
  if (input.bulletWeightGr <= 0) throw new Error("Bullet weight must be positive");
  if (input.bulletDiameterIn <= 0) throw new Error("Bullet diameter must be positive");
  if (input.bulletLengthIn <= 0) throw new Error("Bullet length must be positive");
  if (input.twistInPerTurn <= 0) throw new Error("Twist must be positive");
  if (input.muzzleVelocityMs <= 0) throw new Error("Muzzle velocity must be positive");

  const velocityFps = msToFps(input.muzzleVelocityMs);
  const twistCalibersPerTurn = input.twistInPerTurn / input.bulletDiameterIn;
  const lengthCalibers = input.bulletLengthIn / input.bulletDiameterIn;
  const temperatureF = input.temperatureC * 9 / 5 + 32;
  const pressureInHg = hPaToInHg(input.pressureHPa);

  const base = (30 * input.bulletWeightGr) /
    (Math.pow(twistCalibersPerTurn, 2) * Math.pow(input.bulletDiameterIn, 3) * lengthCalibers * (1 + Math.pow(lengthCalibers, 2)));
  const velocityCorrection = Math.pow(velocityFps / 2800, 1 / 3);
  const atmosphereCorrection = ((temperatureF + 460) / (59 + 460)) * (29.92 / pressureInHg);
  const sg = base * velocityCorrection * atmosphereCorrection;
  const rpm = velocityFps * 720 / input.twistInPerTurn;

  return {
    sg: roundTo(sg, 2),
    rpm: Math.round(rpm),
    status: stabilityStatus(sg)
  };
}
