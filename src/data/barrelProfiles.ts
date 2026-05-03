import type { BarrelVelocityProfile } from "../core/types.js";

export const BARREL_PROFILES: BarrelVelocityProfile[] = [
  {
    loadId: "cci-standard-velocity-35",
    notes: "Derived from manufacturer nominal MV and .22 LR barrel-length context; verify with chronograph for a specific rifle.",
    points: [
      { barrelLengthIn: 4, velocityFps: 919, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 6, velocityFps: 1001, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1053, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1050, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1040, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] }
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
    notes: "Derived from manufacturer nominal MV and .22 LR barrel-length behavior. Needs exact CCI Mini-Mag HP chronograph mapping.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1165, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 6, velocityFps: 1230, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1289, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1283, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1266, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "cci-sub-sonic-hp-56",
    notes: "Specific CCI subsonic load replacing the old generic Eley/SK/CCI row. Barrel values are derived around the 1050 fps manufacturer MV.",
    points: [
      { barrelLengthIn: 4, velocityFps: 940, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 6, velocityFps: 980, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1050, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart"] },
      { barrelLengthIn: 18, velocityFps: 1045, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1040, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart", "derived-barrel-note"] }
    ]
  },

  {
    loadId: "federal-9mm-115-jhp-bbti",
    notes: "Measured BBTI row. 13–18 inch values are retained as measured; they show a local peak and a drop at 18 inches rather than a monotonic PCC curve.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1094, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling", "federal-9bp-le"] },
      { barrelLengthIn: 8, velocityFps: 1234, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 10, velocityFps: 1253, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 13, velocityFps: 1281, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 14, velocityFps: 1295, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 15, velocityFps: 1304, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 16, velocityFps: 1295, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 17, velocityFps: 1320, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 18, velocityFps: 1297, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] }
    ]
  },
  {
    loadId: "federal-9mm-124-hydrashok-bbti",
    notes: "Measured BBTI row. The 18 inch value is lower than the 14–17 inch plateau, matching the source table.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1061, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling", "federal-p9hs1g1-le"] },
      { barrelLengthIn: 8, velocityFps: 1180, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 10, velocityFps: 1211, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 13, velocityFps: 1237, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 14, velocityFps: 1241, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 15, velocityFps: 1244, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 16, velocityFps: 1243, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 17, velocityFps: 1250, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 18, velocityFps: 1231, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] }
    ]
  },
  {
    loadId: "federal-9mm-147-hydrashok-bbti",
    notes: "Measured BBTI row. 13, 16, 17 and 18 inch rows are retained to expose non-monotonic long-barrel behavior.",
    points: [
      { barrelLengthIn: 4, velocityFps: 951, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling", "federal-p9hst2-le", "federal-9ms-le"] },
      { barrelLengthIn: 8, velocityFps: 1047, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 10, velocityFps: 1067, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 13, velocityFps: 1081, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 14, velocityFps: 1090, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 15, velocityFps: 1090, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 16, velocityFps: 1073, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 17, velocityFps: 1096, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 18, velocityFps: 1083, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] }
    ]
  },
  {
    loadId: "speer-9mm-124-gold-dot-sb-bbti",
    notes: "Measured BBTI row for Speer 124 gr Gold Dot Short Barrel. The source table has a plateau/variation from 13 to 18 inches; the values are not smoothed.",
    points: [
      { barrelLengthIn: 4, velocityFps: 1203, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling", "vista-speer-gold-dot-short-barrel-124"] },
      { barrelLengthIn: 8, velocityFps: 1329, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 10, velocityFps: 1338, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 13, velocityFps: 1378, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 14, velocityFps: 1390, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 15, velocityFps: 1375, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 16, velocityFps: 1379, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 17, velocityFps: 1400, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] },
      { barrelLengthIn: 18, velocityFps: 1395, confidence: "measured-third-party", method: "measured", sourceRefs: ["bbti-9mm", "bbti-9mm-rifling"] }
    ]
  },

  {
    loadId: "federal-xm193-55-fmj-ref",
    notes: "5.56 reference values; 14.5 inch row is interpolated between source rows.",
    points: [
      { barrelLengthIn: 8, velocityFps: 2520, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 11, velocityFps: 2834, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 14.5, velocityFps: 3069, confidence: "derived", method: "interpolated", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556", "derived-barrel-note"] },
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
      { barrelLengthIn: 14.5, velocityFps: 2845, confidence: "derived", method: "interpolated", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556", "derived-barrel-note"] },
      { barrelLengthIn: 16.5, velocityFps: 2992, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 18, velocityFps: 3052, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] },
      { barrelLengthIn: 20, velocityFps: 3097, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"] }
    ]
  },
  {
    loadId: "federal-gm223m3-77-smk-ref",
    notes: "Derived from Federal GM223M3 24 inch published velocity and .223/5.56 barrel-length context. Product MV/BC are manufacturer-published; barrel profile is not yet product-measured.",
    points: [
      { barrelLengthIn: 8, velocityFps: 2260, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 11, velocityFps: 2385, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 14.5, velocityFps: 2480, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 2520, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 2570, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2620, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-223-cutdown", "derived-barrel-note"] }
    ]
  },

  {
    loadId: "winchester-308-147-fmj-cutdown-ref",
    notes: "RifleShooter summary table for Winchester 147 FMJ. 13.5 inch row is extrapolated below the measured 16.5 inch row.",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2608, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 16.5, velocityFps: 2682, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-summary"] },
      { barrelLengthIn: 18, velocityFps: 2739, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-summary"] },
      { barrelLengthIn: 20, velocityFps: 2804, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-summary"] }
    ]
  },
  {
    loadId: "federal-gm308m-168-smk-ref",
    notes: "Federal GM308M cartridge-specific RifleShooter cut-down test. 13.5 inch row is extrapolated below source range.",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2403, confidence: "derived", method: "derived", sourceRefs: ["rifleshooter-308-168-gm", "derived-barrel-note"] },
      { barrelLengthIn: 16.5, velocityFps: 2466, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-168-gm"] },
      { barrelLengthIn: 18, velocityFps: 2523, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-168-gm"] },
      { barrelLengthIn: 20, velocityFps: 2565, confidence: "measured-third-party", method: "measured", sourceRefs: ["rifleshooter-308-168-gm"] }
    ]
  },
  {
    loadId: "federal-gm308m2-175-smk-ref",
    notes: "Derived from Federal GM308M2 24 inch manufacturer MV and RifleShooter .308 loss-rate context. Replace with a 175 gr cut-down source when mapped.",
    points: [
      { barrelLengthIn: 13.5, velocityFps: 2381, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 16.5, velocityFps: 2444, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 2475, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2516, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 24, velocityFps: 2600, confidence: "manufacturer-published", method: "published", sourceRefs: ["federal-2025-catalog"] }
    ]
  },

  {
    loadId: "generic-65cm-123-eldm-estimate",
    notes: "Class-level 123 gr 6.5 CM reference retained pending exact factory product mapping.",
    points: [
      { barrelLengthIn: 18, velocityFps: 2772, confidence: "derived", method: "derived", sourceRefs: ["waffenlager-65cm-bullet-table", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2818, confidence: "derived", method: "derived", sourceRefs: ["waffenlager-65cm-bullet-table", "derived-barrel-note"] },
      { barrelLengthIn: 22, velocityFps: 2861, confidence: "derived", method: "derived", sourceRefs: ["waffenlager-65cm-bullet-table", "derived-barrel-note"] },
      { barrelLengthIn: 24, velocityFps: 2907, confidence: "derived", method: "derived", sourceRefs: ["waffenlager-65cm-bullet-table", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "federal-gm65crd1-140-smk-ref",
    notes: "Derived from Federal GM65CRD1 24 inch manufacturer MV using 6.5 Creedmoor barrel-length context.",
    points: [
      { barrelLengthIn: 18, velocityFps: 2516, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2569, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 22, velocityFps: 2622, confidence: "derived", method: "derived", sourceRefs: ["federal-2025-catalog", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 24, velocityFps: 2675, confidence: "manufacturer-published", method: "published", sourceRefs: ["federal-2025-catalog"] }
    ]
  },
  {
    loadId: "hornady-65cm-147-eldm-tap-81505",
    notes: "Derived from Hornady 2655 fps nominal data and RifleShooter's 6.5 CM cut-down context.",
    points: [
      { barrelLengthIn: 18, velocityFps: 2499, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2551, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 22, velocityFps: 2603, confidence: "derived", method: "derived", sourceRefs: ["hornady-65cm-147-tap", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 24, velocityFps: 2655, confidence: "manufacturer-published", method: "published", sourceRefs: ["hornady-65cm-147-tap"] }
    ]
  }
  ,
  {
    loadId: "sb-22lr-club-sb22a",
    notes: "S&B manufacturer nominal row plus conservative derived .22 LR barrel context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1000, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1070, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"] },
      { barrelLengthIn: 18, velocityFps: 1065, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1060, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-22lr-hv-sb22b",
    notes: "S&B manufacturer nominal row plus conservative derived high-velocity .22 LR barrel context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1120, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1235, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"] },
      { barrelLengthIn: 18, velocityFps: 1225, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1215, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-22lr-subsonic-sb22sub",
    notes: "S&B manufacturer nominal row plus conservative derived subsonic .22 LR barrel context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 960, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1020, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"] },
      { barrelLengthIn: 18, velocityFps: 1015, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 1010, confidence: "derived", method: "derived", sourceRefs: ["sb-22lr-2022-catalog", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "cci-quiet-semi-auto-975cc",
    notes: "Manufacturer nominal velocity retained; shorter barrel rows are derived placeholders.",
    points: [
      { barrelLengthIn: 4, velocityFps: 760, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-quiet-semi-auto-975-page", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 835, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-quiet-semi-auto-975-page"] }
    ]
  },
  {
    loadId: "cci-quiet-22-960",
    notes: "Very low velocity manufacturer row. Long barrels may reduce velocity; use chronograph validation.",
    points: [
      { barrelLengthIn: 16, velocityFps: 710, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-quiet-22-960-page"] }
    ]
  },
  {
    loadId: "cci-stinger-50",
    notes: "Manufacturer nominal row plus derived context for hyper-velocity .22 LR.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1375, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-stinger-50-page", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1640, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-stinger-50-page"] },
      { barrelLengthIn: 20, velocityFps: 1650, confidence: "derived", method: "derived", sourceRefs: ["cci-2026-catalog", "cci-stinger-50-page", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "cci-suppressor-957",
    notes: "Manufacturer/product references indicate 45 gr suppressor-class load around 970 fps.",
    points: [
      { barrelLengthIn: 16, velocityFps: 970, confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-suppressor-957-page"] }
    ]
  },
  {
    loadId: "aguila-22-sss-60gr",
    notes: "Aguila recommends 20 inch barrels or longer for this heavy 60 gr SSS load.",
    points: [
      { barrelLengthIn: 20, velocityFps: 950, confidence: "manufacturer-published", method: "published", sourceRefs: ["aguila-22-sss-page"] }
    ]
  },

  {
    loadId: "sb-9mm-115-fmj-v310452",
    notes: "Manufacturer 150 mm test barrel row plus derived PCC-length context; not direct S&B PCC chronograph data.",
    points: [
      { barrelLengthIn: 5.9, velocityFps: 1279, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-115-fmj-290"] },
      { barrelLengthIn: 10, velocityFps: 1375, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-115-fmj-290", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1410, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-115-fmj-290", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1400, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-115-fmj-290", "bbti-9mm", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-9mm-124-fmj-v310492",
    notes: "Manufacturer 6 inch test barrel row plus derived PCC-length context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1181, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-124-fmj-289-pdf"] },
      { barrelLengthIn: 10, velocityFps: 1245, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-124-fmj-289-pdf", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1275, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-124-fmj-289-pdf", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1265, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-124-fmj-289-pdf", "bbti-9mm", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-9mm-115-jhp-v310422",
    notes: "Manufacturer MV row plus derived 9 mm barrel context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1237, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-jhp-list"] },
      { barrelLengthIn: 16, velocityFps: 1340, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-jhp-list", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1325, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-jhp-list", "bbti-9mm", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-9mm-124-jhp-v312182",
    notes: "Manufacturer MV row plus derived 9 mm barrel context.",
    points: [
      { barrelLengthIn: 6, velocityFps: 1201, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-jhp-list"] },
      { barrelLengthIn: 16, velocityFps: 1290, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-jhp-list", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1278, confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-jhp-list", "bbti-9mm", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "geco-9mm-fmjfn-154gr",
    notes: "Placeholder heavy 9 mm FMJ-FN row; replace when GECO velocity/BC are verified from datasheet.",
    points: [
      { barrelLengthIn: 5.9, velocityFps: 984, confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmjfn-154", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "geco-9mm-fmj-124gr-8g",
    notes: "Manufacturer 125 mm barrel row plus derived PCC context.",
    points: [
      { barrelLengthIn: 4.9, velocityFps: 1181, confidence: "manufacturer-published", method: "published", sourceRefs: ["geco-9mm-fmj-124-8g"] },
      { barrelLengthIn: 10, velocityFps: 1240, confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmj-124-8g", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 16, velocityFps: 1270, confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmj-124-8g", "bbti-9mm", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 1260, confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmj-124-8g", "bbti-9mm", "derived-barrel-note"] }
    ]
  },

  {
    loadId: "sb-223-fmj-55-v341862",
    notes: "Manufacturer 600 mm row plus derived shorter-barrel context from .223 cut-down data.",
    points: [
      { barrelLengthIn: 16, velocityFps: 3090, confidence: "derived", method: "derived", sourceRefs: ["sb-223-fmj-55-180", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 3260, confidence: "derived", method: "derived", sourceRefs: ["sb-223-fmj-55-180", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 23.6, velocityFps: 3301, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-223-fmj-55-180"] }
    ]
  },
  {
    loadId: "ggg-223-gpr12-62-fmj",
    notes: "Manufacturer 508 mm / 20 inch point from GGG; no smoothing needed for that point.",
    points: [
      { barrelLengthIn: 16, velocityFps: 2990, confidence: "derived", method: "derived", sourceRefs: ["ggg-223-gpr12", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 3117, confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr12"] }
    ]
  },
  {
    loadId: "ggg-223-gpr14-77-hpbt",
    notes: "Manufacturer 600 mm point plus derived shorter-barrel context.",
    points: [
      { barrelLengthIn: 16, velocityFps: 2675, confidence: "derived", method: "derived", sourceRefs: ["ggg-223-gpr14", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2760, confidence: "derived", method: "derived", sourceRefs: ["ggg-223-gpr14", "rifleshooter-223-cutdown", "derived-barrel-note"] },
      { barrelLengthIn: 23.6, velocityFps: 2805, confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr14"] }
    ]
  },
  {
    loadId: "sb-65cm-fmjbt-140-v341602",
    notes: "Manufacturer 550 mm point plus derived 18/20/24 inch context using 6.5 Creedmoor cut-down rates.",
    points: [
      { barrelLengthIn: 18, velocityFps: 2570, confidence: "derived", method: "derived", sourceRefs: ["sb-65cm-fmjbt-140-560", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2620, confidence: "derived", method: "derived", sourceRefs: ["sb-65cm-fmjbt-140-560", "rifleshooter-65cm-2019", "derived-barrel-note"] },
      { barrelLengthIn: 21.7, velocityFps: 2657, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-65cm-fmjbt-140-560"] },
      { barrelLengthIn: 24, velocityFps: 2715, confidence: "derived", method: "derived", sourceRefs: ["sb-65cm-fmjbt-140-560", "rifleshooter-65cm-2019", "derived-barrel-note"] }
    ]
  },
  {
    loadId: "sb-308-fmj-147-sb308a",
    notes: "Manufacturer 23.5 inch point plus derived shorter .308 barrel context.",
    points: [
      { barrelLengthIn: 16.5, velocityFps: 2630, confidence: "derived", method: "derived", sourceRefs: ["sb-308-fmj-147-145", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 18, velocityFps: 2670, confidence: "derived", method: "derived", sourceRefs: ["sb-308-fmj-147-145", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2720, confidence: "derived", method: "derived", sourceRefs: ["sb-308-fmj-147-145", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 23.5, velocityFps: 2789, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-147-145"] }
    ]
  },
  {
    loadId: "sb-308-fmj-180-sb308b",
    notes: "Manufacturer 600 mm point plus derived shorter .308 barrel context.",
    points: [
      { barrelLengthIn: 16.5, velocityFps: 2260, confidence: "derived", method: "derived", sourceRefs: ["sb-308-fmj-180-144", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2340, confidence: "derived", method: "derived", sourceRefs: ["sb-308-fmj-180-144", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 23.6, velocityFps: 2411, confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-180-144"] }
    ]
  },
  {
    loadId: "ggg-308-gpx11-147-fmj",
    notes: "Manufacturer 568 mm mean-velocity point; V0 table value differs, see source note.",
    points: [
      { barrelLengthIn: 16.5, velocityFps: 2580, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx11", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2665, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx11", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 22.36, velocityFps: 2700, confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx11"] }
    ]
  },
  {
    loadId: "ggg-308-gpx14-165-sbt",
    notes: "Manufacturer 600 mm point plus derived shorter .308 barrel context.",
    points: [
      { barrelLengthIn: 16.5, velocityFps: 2520, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx14", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2595, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx14", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 23.6, velocityFps: 2641, confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx14"] }
    ]
  },
  {
    loadId: "ggg-308-gpx19-180-sbt",
    notes: "Manufacturer 600 mm point plus derived shorter .308 barrel context.",
    points: [
      { barrelLengthIn: 16.5, velocityFps: 2440, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx19", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 20, velocityFps: 2510, confidence: "derived", method: "derived", sourceRefs: ["ggg-308-gpx19", "rifleshooter-308-summary", "derived-barrel-note"] },
      { barrelLengthIn: 23.6, velocityFps: 2559, confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx19"] }
    ]
  }
];

export function profileByLoadId(loadId: string): BarrelVelocityProfile {
  const profile = BARREL_PROFILES.find(item => item.loadId === loadId);
  if (!profile) throw new Error(`Missing barrel profile for load: ${loadId}`);
  return profile;
}
