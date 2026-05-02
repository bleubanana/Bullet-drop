export const FPS_TO_MS = 0.3048;
export const MS_TO_FPS = 1 / FPS_TO_MS;
export const INCH_TO_CM = 2.54;
export const YARD_TO_M = 0.9144;

export function fpsToMs(value: number): number {
  return value * FPS_TO_MS;
}

export function msToFps(value: number): number {
  return value * MS_TO_FPS;
}

export function inchToCm(value: number): number {
  return value * INCH_TO_CM;
}

export function roundTo(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function cmToMrad(cm: number, distanceM: number): number {
  if (distanceM <= 0) return 0;
  return (cm / 100) / distanceM * 1000;
}

export function cmToMoa(cm: number, distanceM: number): number {
  if (distanceM <= 0) return 0;
  const radians = (cm / 100) / distanceM;
  return radians * (180 / Math.PI) * 60;
}

export function formatSigned(value: number, decimals = 1): string {
  const rounded = roundTo(value, decimals).toFixed(decimals);
  if (Math.abs(Number(rounded)) === 0) return "±0";
  return Number(rounded) > 0 ? `+${rounded}` : rounded;
}
