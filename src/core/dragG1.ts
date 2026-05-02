const G1_TABLE: Array<readonly [mach: number, coefficient: number]> = [
  [0, 0.2629], [0.05, 0.2558], [0.1, 0.2487], [0.15, 0.2413], [0.2, 0.2335],
  [0.25, 0.2259], [0.3, 0.2177], [0.35, 0.2093], [0.4, 0.2006], [0.45, 0.1913],
  [0.5, 0.182], [0.55, 0.173], [0.6, 0.1684], [0.65, 0.1679], [0.7, 0.17],
  [0.75, 0.1806], [0.8, 0.1945], [0.85, 0.2155], [0.9, 0.2395], [0.95, 0.2728],
  [1, 0.3049], [1.05, 0.3733], [1.1, 0.4064], [1.15, 0.4132], [1.2, 0.3945],
  [1.25, 0.3782], [1.3, 0.3617], [1.4, 0.3349], [1.5, 0.3149], [1.6, 0.2999],
  [1.8, 0.2742], [2, 0.2547], [2.2, 0.2407], [2.4, 0.2297], [2.6, 0.22],
  [2.8, 0.2118], [3, 0.2048]
];

export function g1DragCoefficient(mach: number): number {
  const first = G1_TABLE[0];
  const last = G1_TABLE[G1_TABLE.length - 1];
  if (!first || !last) throw new Error("G1 table is empty");
  if (mach <= first[0]) return first[1];

  for (let i = 1; i < G1_TABLE.length; i += 1) {
    const previous = G1_TABLE[i - 1];
    const current = G1_TABLE[i];
    if (!previous || !current) continue;
    if (mach <= current[0]) {
      const fraction = (mach - previous[0]) / (current[0] - previous[0]);
      return previous[1] + fraction * (current[1] - previous[1]);
    }
  }

  return last[1];
}
