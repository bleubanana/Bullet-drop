import type { Caliber } from "../core/types.js";

export const CALIBERS: Caliber[] = [
  { id: "22lr", label: ".22 LR", color: "#a78bfa", glow: "#a78bfa55", notes: "Rimfire. Piplängd och lot kan påverka hastighet kraftigt." },
  { id: "9x19", label: "9×19 mm", color: "#f59e0b", glow: "#f59e0b55", notes: "Pistol/PCC-referenser; vind och drop bör ses som grova referenser." },
  { id: "223rem", label: ".223 / 5.56 ref", color: "#0ea5e9", glow: "#0ea5e955", notes: "Blandar .223 Rem och 5.56-referensprofiler; kontrollera kammare/laddning." },
  { id: "308win", label: ".308 Win", color: "#22c55e", glow: "#22c55e55" },
  { id: "65cm", label: "6,5 Creedmoor", color: "#f97316", glow: "#f9731655" }
];

export function caliberById(id: string): Caliber {
  const caliber = CALIBERS.find(item => item.id === id);
  if (!caliber) throw new Error(`Unknown caliber: ${id}`);
  return caliber;
}
