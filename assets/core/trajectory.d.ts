import type { CalculationInput, RawTrajectory, SolverInput, TrajectoryPoint } from "./types.js";
export declare function solveRawTrajectory(input: SolverInput): RawTrajectory[];
export declare function lineOfSightDropCm(raw: RawTrajectory[], distanceM: number, zeroM: number, sightHeightCm: number): number;
export declare function windDriftCm(timeOfFlightS: number, distanceM: number, muzzleVelocityMs: number, windSpeedMs: number, windValueFactor: number): number;
export declare function calculateTrajectory(input: CalculationInput): TrajectoryPoint[];
