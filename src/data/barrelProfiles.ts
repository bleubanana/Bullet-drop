import type { BarrelVelocityProfile } from "../core/types.js";

export const BARREL_PROFILES: BarrelVelocityProfile[] = [
  {
    loadId: "cci-standard-velocity-35",
    notes: "Derived from manufacturer nominal MV and previous v1.3.1 profile; verify with chronograph for a specific rifle.",
    points: [
      { barrelLengthIn: 4, velocityFps: 919, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 6, velocityFps: 1001, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 1053, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 1050, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 1040, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] }
    ]
  },
  {
    loadId: "cci-mini-mag-30",
    notes: "BBTI cut-down chronograph values for CCI 40 gr CPRN Mini-Mag. No interpolation shown except omitted barrel lengths.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1014, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-22lr"] },
      { barrelLengthIn: 6, velocityFps: 1101, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-22lr"] },
      { barrelLengthIn: 16, velocityFps: 1207, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-22lr"] },
      { barrelLengthIn: 18, velocityFps: 1212, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-22lr"] }
    ]
  },
  {
    loadId: "cci-mini-mag-hp-31",
    notes: "Piplängdsprofilen är en dokumenterad uppskattning; nominal MV är manufacturer-published.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1165, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 6, velocityFps: 1230, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 1289, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 1283, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 1266, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog", "legacy-v131"] }
    ]
  },
  {
    loadId: "cci-sub-sonic-shp-74",
    notes: "Specific CCI subsonic load replacing the old generic Eley/SK/CCI row. Barrel values are derived around the 1050 fps manufacturer MV.",
    points: [
      { barrelLengthIn: 4, velocityFps: 940, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog"] },
      { barrelLengthIn: 6, velocityFps: 980, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog"] },
      { barrelLengthIn: 16, velocityFps: 1050, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2025-catalog"] },
      { barrelLengthIn: 18, velocityFps: 1045, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog"] },
      { barrelLengthIn: 20, velocityFps: 1040, confidence: "derived", method: "derived", sourceRefs: ["cci-2025-catalog"] }
    ]
  },

  {
    loadId: "federal-9mm-115-jhp-bbti",
    points: [
      { barrelLengthIn: 4, velocityFps: 1094, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 8, velocityFps: 1234, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 10, velocityFps: 1253, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 16, velocityFps: 1295, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 18, velocityFps: 1297, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] }
    ]
  },
  {
    loadId: "federal-9mm-124-hydrashok-bbti",
    points: [
      { barrelLengthIn: 4, velocityFps: 1061, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 8, velocityFps: 1180, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 10, velocityFps: 1211, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 16, velocityFps: 1243, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 18, velocityFps: 1231, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] }
    ]
  },
  {
    loadId: "federal-9mm-147-hydrashok-bbti",
    points: [
      { barrelLengthIn: 4, velocityFps: 951, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 8, velocityFps: 1047, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 10, velocityFps: 1067, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 16, velocityFps: 1073, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] },
      { barrelLengthIn: 18, velocityFps: 1083, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm"] }
    ]
  },

  {
    loadId: "federal-xm193-55-fmj-ref",
    notes: "5.56 reference values; 14.5 inch row is interpolated between 14 and 16.5 inch source rows.",
    points: [
      { barrelLengthIn: 8, velocityFps: 2520, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 11, velocityFps: 2834, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 14.5, velocityFps: 3069, confidence: "derived", method: "interpolated", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 16.5, velocityFps: 3187, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 18, velocityFps: 3202, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 20, velocityFps: 3306, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] }
    ]
  },
  {
    loadId: "winchester-m855-62-ref",
    notes: "5.56 M855 reference values; 14.5 inch row is interpolated.",
    points: [
      { barrelLengthIn: 8, velocityFps: 2296, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 11, velocityFps: 2579, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 14.5, velocityFps: 2845, confidence: "derived", method: "interpolated", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 16.5, velocityFps: 2992, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 18, velocityFps: 3052, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 20, velocityFps: 3097, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] }
    ]
  },
  {
    loadId: "sierra-77-smk-otm-legacy",
    points: [
      { barrelLengthIn: 8, velocityFps: 2349, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 11, velocityFps: 2500, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 14.5, velocityFps: 2651, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 2749, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 2799, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2851, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] }
    ]
  },

  {
    loadId: "generic-308-147-m80-legacy",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2559, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 2612, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 2654, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2697, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] }
    ]
  },
  {
    loadId: "federal-gm308m-168-smk-ref",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2464, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-168-gm", "legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 2513, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-168-gm", "legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 2556, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-168-gm", "legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2598, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-168-gm", "legacy-v131"] }
    ]
  },
  {
    loadId: "generic-308-175-smk-legacy",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2418, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 16, velocityFps: 2474, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 18, velocityFps: 2516, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2562, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] }
    ]
  },

  {
    loadId: "generic-65cm-123-eldm-legacy",
    points: [
      { barrelLengthIn: 18, velocityFps: 2772, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2818, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 22, velocityFps: 2861, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] },
      { barrelLengthIn: 24, velocityFps: 2907, confidence: "legacy-estimate", method: "legacy", sourceRefs: ["legacy-v131"] }
    ]
  },
  {
    loadId: "hornady-65cm-140-american-gunner-ref",
    points: [
      { barrelLengthIn: 18, velocityFps: 2516, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-65cm-2019", "legacy-v131"] },
      { barrelLengthIn: 20, velocityFps: 2562, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-65cm-2019", "legacy-v131"] },
      { barrelLengthIn: 22, velocityFps: 2605, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-65cm-2019", "legacy-v131"] },
      { barrelLengthIn: 24, velocityFps: 2651, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-65cm-2019", "legacy-v131"] }
    ]
  },
  {
    loadId: "hornady-65cm-147-eldm-tap-81505",
    notes: "Derived from Hornady 2655 fps nominal data and RifleShooter's 6.5 CM cut-down context.",
    points: [
      { barrelLengthIn: 18, velocityFps: 2499, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019"] },
      { barrelLengthIn: 20, velocityFps: 2551, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019"] },
      { barrelLengthIn: 22, velocityFps: 2603, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019"] },
      { barrelLengthIn: 24, velocityFps: 2655, confidence: "manufacturer-published", method: "published", sourceRefs: ["hornady-65cm-147-tap"] }
    ]
  }
];

export function profileByLoadId(loadId: string): BarrelVelocityProfile {
  const profile = BARREL_PROFILES.find(item => item.loadId === loadId);
  if (!profile) throw new Error(`Missing barrel profile for load: ${loadId}`);
  return profile;
}
