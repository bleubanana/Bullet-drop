import type { AmmunitionLoad } from "../core/types.js";
export declare const AMMUNITION: AmmunitionLoad[];
export declare function ammunitionById(id: string): AmmunitionLoad;
export declare function ammunitionForCaliber(caliberId: string): AmmunitionLoad[];
