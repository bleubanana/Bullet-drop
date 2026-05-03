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
export declare function stabilityStatus(sg: number): StabilityStatus;
export declare function calculateMillerStability(input: StabilityInput): StabilityResult;
