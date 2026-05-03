export const FPS_TO_MS = 0.3048;
export const MS_TO_FPS = 1 / FPS_TO_MS;
export const INCH_TO_CM = 2.54;
export const YARD_TO_M = 0.9144;
export const MPH_TO_MS = 0.44704;
export const HPA_TO_INHG = 0.029529983071445;
export const KG_M3_TO_LB_FT3 = 0.0624279605761;
export function fpsToMs(value) {
    return value * FPS_TO_MS;
}
export function msToFps(value) {
    return value * MS_TO_FPS;
}
export function inchToCm(value) {
    return value * INCH_TO_CM;
}
export function cmToInch(value) {
    return value / INCH_TO_CM;
}
export function yardToM(value) {
    return value * YARD_TO_M;
}
export function mToYard(value) {
    return value / YARD_TO_M;
}
export function mphToMs(value) {
    return value * MPH_TO_MS;
}
export function msToMph(value) {
    return value / MPH_TO_MS;
}
export function hPaToInHg(value) {
    return value * HPA_TO_INHG;
}
export function inHgToHPa(value) {
    return value / HPA_TO_INHG;
}
export function kgM3ToLbFt3(value) {
    return value * KG_M3_TO_LB_FT3;
}
export function roundTo(value, decimals = 1) {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}
export function cmToMrad(cm, distanceM) {
    if (distanceM <= 0)
        return 0;
    return (cm / 100) / distanceM * 1000;
}
export function cmToMoa(cm, distanceM) {
    if (distanceM <= 0)
        return 0;
    const radians = (cm / 100) / distanceM;
    return radians * (180 / Math.PI) * 60;
}
export function formatSigned(value, decimals = 1) {
    const rounded = roundTo(value, decimals).toFixed(decimals);
    if (Math.abs(Number(rounded)) === 0)
        return "±0";
    return Number(rounded) > 0 ? `+${rounded}` : rounded;
}
//# sourceMappingURL=units.js.map