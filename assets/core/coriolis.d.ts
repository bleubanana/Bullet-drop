export type CoriolisInput = {
    distanceM: number;
    timeOfFlightS: number;
    latitudeDeg: number;
    directionOfFireDeg: number;
};
export type CoriolisCorrection = {
    horizontalRightCm: number;
    verticalCm: number;
};
export declare function calculateCoriolisCorrection(input: CoriolisInput): CoriolisCorrection;
