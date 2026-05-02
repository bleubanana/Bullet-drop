export type DragModel = "G1";
export type ConfidenceLevel = "manufacturer-published" | "measured-third-party" | "derived" | "legacy-estimate";
export type MeasurementMethod = "published" | "measured" | "interpolated" | "derived" | "legacy";
export type SourceKind = "manufacturer" | "chronograph" | "secondary" | "calculator" | "legacy" | "documentation";
export type Source = {
    id: string;
    title: string;
    publisher: string;
    url?: string;
    sourceKind: SourceKind;
    retrievedAt: string;
    notes?: string;
};
export type SourcedValue<T> = {
    value: T;
    unit: string;
    confidence: ConfidenceLevel;
    method: MeasurementMethod;
    sourceRefs: string[];
    notes?: string;
};
export type Caliber = {
    id: string;
    label: string;
    color: string;
    glow: string;
    notes?: string;
};
export type AmmunitionLoad = {
    id: string;
    caliberId: string;
    manufacturer: string;
    productName: string;
    productNumber?: string;
    displayName: string;
    bulletWeightGr: number;
    bulletType: string;
    nominalMuzzleVelocity: SourcedValue<number>;
    ballisticCoefficientG1: SourcedValue<number>;
    notes: string[];
};
export type BarrelVelocityPoint = {
    barrelLengthIn: number;
    velocityFps: number;
    confidence: ConfidenceLevel;
    method: MeasurementMethod;
    sourceRefs: string[];
    notes?: string;
};
export type BarrelVelocityProfile = {
    loadId: string;
    points: BarrelVelocityPoint[];
    notes?: string;
};
export type AtmosphereInput = {
    temperatureC: number;
    pressureHPa: number;
};
export type AtmosphereState = AtmosphereInput & {
    airDensityKgM3: number;
    speedOfSoundMs: number;
};
export type SolverInput = {
    muzzleVelocityMs: number;
    ballisticCoefficientG1: number;
    distancesM: number[];
    atmosphere: AtmosphereState;
    timeStepS?: number;
};
export type RawTrajectory = {
    distanceM: number;
    boreDropCm: number;
    timeOfFlightS: number;
    velocityMs: number;
};
export type TrajectoryPoint = RawTrajectory & {
    dropCm: number;
    dropMrad: number;
    dropMoa: number;
    windDriftCm: number;
    windDriftMrad: number;
    windDriftMoa: number;
    mach: number;
};
export type CalculationInput = {
    muzzleVelocityMs: number;
    ballisticCoefficientG1: number;
    distancesM: number[];
    zeroM: number;
    sightHeightCm: number;
    atmosphere: AtmosphereState;
    windSpeedMs: number;
    windValueFactor: number;
};
