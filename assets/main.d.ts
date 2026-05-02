import type { BarrelVelocityPoint, TrajectoryPoint } from "./core/types.js";
import { msToFps } from "./core/units.js";
declare const WIND_OPTIONS: readonly [{
    readonly id: "no";
    readonly label: "0°";
    readonly factor: 0;
    readonly desc: "Medvind/motvind";
}, {
    readonly id: "half";
    readonly label: "45°";
    readonly factor: 0.5;
    readonly desc: "Half value";
}, {
    readonly id: "full";
    readonly label: "90°";
    readonly factor: 1;
    readonly desc: "Full value";
}];
type WindOptionId = typeof WIND_OPTIONS[number]["id"];
type State = {
    caliberId: string;
    loadId: string;
    zeroM: number;
    sightHeightCm: number;
    temperatureC: number;
    pressureHPa: number;
    windSpeedMs: number;
    windOptionId: WindOptionId;
    showMrad: boolean;
};
type BarrelCalculation = {
    barrel: BarrelVelocityPoint;
    points: TrajectoryPoint[];
};
declare function calculateForSelectedLoad(): BarrelCalculation[];
export declare const __appVersion = "1.4.0";
export declare const __defaultState: State;
export declare const __calculateForSelectedLoad: typeof calculateForSelectedLoad;
export declare const __msToFps: typeof msToFps;
export {};
