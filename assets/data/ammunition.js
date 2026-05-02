export const AMMUNITION = [
    {
        id: "cci-standard-velocity-35",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Standard Velocity",
        productNumber: "35",
        displayName: "40 gr LRN / CCI Standard Velocity #35",
        bulletWeightGr: 40,
        bulletType: "LRN",
        nominalMuzzleVelocity: {
            value: 1070,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["cci-2025-catalog"],
            notes: "CCI catalog lists Standard Velocity #35 as 40 gr LRN with 1070 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.120,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-legacy-note"],
            notes: "Product-level BC should be verified; using a conservative .22 LR standard-velocity estimate."
        },
        notes: ["MV is manufacturer-published; piplängdsprofilen är härledd och ska verifieras med kronograf."]
    },
    {
        id: "cci-mini-mag-30",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Mini-Mag CPRN",
        productNumber: "30",
        displayName: "40 gr CPRN / CCI Mini-Mag #30",
        bulletWeightGr: 40,
        bulletType: "CPRN",
        nominalMuzzleVelocity: {
            value: 1235,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["cci-2025-catalog"],
            notes: "CCI catalog lists Mini-Mag #30 as 40 gr CPRN with 1235 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.130,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-legacy-note"],
            notes: "BC retained from the previous project table pending product-level BC validation."
        },
        notes: ["Piplängdsvärden för 4, 6, 16 och 18 tum använder BBTI-data för CCI 40 gr CPRN Mini-Mag."]
    },
    {
        id: "cci-mini-mag-hp-31",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Mini-Mag HP",
        productNumber: "31",
        displayName: "36 gr CPHP / CCI Mini-Mag HP #31",
        bulletWeightGr: 36,
        bulletType: "CPHP",
        nominalMuzzleVelocity: {
            value: 1260,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["cci-2025-catalog"],
            notes: "CCI catalog lists Mini-Mag HP #31 as 36 gr CPHP with 1260 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.125,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-legacy-note"],
            notes: "BC retained as a documented estimate pending product-level validation."
        },
        notes: ["Piplängdsprofilen är härledd från äldre projektdata och nominell CCI-hastighet."]
    },
    {
        id: "cci-sub-sonic-shp-74",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Sub-Sonic SHP",
        productNumber: "74",
        displayName: "40 gr SHP / CCI Sub-Sonic #74",
        bulletWeightGr: 40,
        bulletType: "SHP",
        nominalMuzzleVelocity: {
            value: 1050,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["cci-2025-catalog"],
            notes: "CCI catalog lists Sub-Sonic SHP #74 as 40 gr SHP with 1050 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.120,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-legacy-note"],
            notes: "BC estimate; verify against product-level source before using as authoritative data."
        },
        notes: ["Ersätter den tidigare breda etiketten Eley·SK·CCI med en specifik CCI-produkt."]
    },
    {
        id: "federal-9mm-115-jhp-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "115 gr JHP reference",
        displayName: "115 gr JHP / Federal reference",
        bulletWeightGr: 115,
        bulletType: "JHP",
        nominalMuzzleVelocity: {
            value: 1094,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["bbti-9mm"],
            notes: "BBTI 4 inch value for Federal 115 gr JHP."
        },
        ballisticCoefficientG1: {
            value: 0.135,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"],
            notes: "Legacy generic BC for 115 gr round-nose/JHP class."
        },
        notes: ["BBTI piplängdsdata är för en specifik JHP-laddning, inte en generisk FMJ."]
    },
    {
        id: "federal-9mm-124-hydrashok-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "124 gr Hydra-Shok reference",
        displayName: "124 gr JHP / Federal Hydra-Shok ref",
        bulletWeightGr: 124,
        bulletType: "JHP",
        nominalMuzzleVelocity: {
            value: 1061,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["bbti-9mm"],
            notes: "BBTI 4 inch value for Federal 124 gr Hydra-Shok JHP."
        },
        ballisticCoefficientG1: {
            value: 0.142,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Används som spårbar 124 gr referens, inte som universell 124 gr FMJ-data."]
    },
    {
        id: "federal-9mm-147-hydrashok-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "147 gr Hydra-Shok reference",
        displayName: "147 gr JHP / Federal Hydra-Shok ref",
        bulletWeightGr: 147,
        bulletType: "JHP",
        nominalMuzzleVelocity: {
            value: 951,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["bbti-9mm"],
            notes: "BBTI 4 inch value for Federal 147 gr Hydra-Shok JHP."
        },
        ballisticCoefficientG1: {
            value: 0.165,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Subsonic-class reference; actual load behavior varies by firearm and lot."]
    },
    {
        id: "federal-xm193-55-fmj-ref",
        caliberId: "223rem",
        manufacturer: "Federal",
        productName: "XM193 55 gr FMJ reference",
        displayName: "55 gr FMJ / Federal XM193 ref",
        bulletWeightGr: 55,
        bulletType: "FMJ",
        nominalMuzzleVelocity: {
            value: 3306,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"],
            notes: "20 inch Federal M193 value from RifleShooter-derived table."
        },
        ballisticCoefficientG1: {
            value: 0.243,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["5.56 NATO-reference; kontrollera alltid att profilen matchar din .223/5.56-laddning."]
    },
    {
        id: "winchester-m855-62-ref",
        caliberId: "223rem",
        manufacturer: "Winchester",
        productName: "M855 62 gr reference",
        displayName: "62 gr SS109/M855 / Winchester ref",
        bulletWeightGr: 62,
        bulletType: "FMJ penetrator",
        nominalMuzzleVelocity: {
            value: 3097,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"],
            notes: "20 inch M855 value from RifleShooter-derived table."
        },
        ballisticCoefficientG1: {
            value: 0.307,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["M855/SS109 values vary meaningfully by manufacturer and barrel."]
    },
    {
        id: "sierra-77-smk-otm-legacy",
        caliberId: "223rem",
        manufacturer: "Sierra / generic load",
        productName: "77 gr MatchKing OTM legacy reference",
        displayName: "77 gr OTM / SMK legacy ref",
        bulletWeightGr: 77,
        bulletType: "OTM",
        nominalMuzzleVelocity: {
            value: 2851,
            unit: "fps",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131"],
            notes: "20 inch value retained from previous dataset pending product-level replacement."
        },
        ballisticCoefficientG1: {
            value: 0.372,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Needs a product-level manufacturer source before being treated as high confidence."]
    },
    {
        id: "generic-308-147-m80-legacy",
        caliberId: "308win",
        manufacturer: "Generic",
        productName: "M80 147 gr FMJ legacy reference",
        displayName: "147 gr FMJ M80 / legacy ref",
        bulletWeightGr: 147,
        bulletType: "FMJBT",
        nominalMuzzleVelocity: {
            value: 2697,
            unit: "fps",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131"]
        },
        ballisticCoefficientG1: {
            value: 0.393,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Retained for continuity; replace with exact manufacturer/load data when available."]
    },
    {
        id: "federal-gm308m-168-smk-ref",
        caliberId: "308win",
        manufacturer: "Federal / Sierra",
        productName: "Gold Medal 168 gr MatchKing BTHP reference",
        displayName: "168 gr SMK HPBT / Federal GM ref",
        bulletWeightGr: 168,
        bulletType: "HPBT MatchKing",
        nominalMuzzleVelocity: {
            value: 2598,
            unit: "fps",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["rifleshooter-308-168-gm", "legacy-v131"],
            notes: "20 inch profile value aligned with the previous dataset; RifleShooter source validates the cartridge/barrel-length method."
        },
        ballisticCoefficientG1: {
            value: 0.475,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["RifleShooter source is mapped at method/source level; table should be replaced by exact row extraction in a later data-only commit."]
    },
    {
        id: "generic-308-175-smk-legacy",
        caliberId: "308win",
        manufacturer: "Sierra / generic load",
        productName: "175 gr MatchKing HPBT legacy reference",
        displayName: "175 gr SMK HPBT / legacy ref",
        bulletWeightGr: 175,
        bulletType: "HPBT MatchKing",
        nominalMuzzleVelocity: {
            value: 2562,
            unit: "fps",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131"]
        },
        ballisticCoefficientG1: {
            value: 0.505,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Retained with explicit low confidence until exact product source is added."]
    },
    {
        id: "generic-65cm-123-eldm-legacy",
        caliberId: "65cm",
        manufacturer: "Generic",
        productName: "123 gr ELD-M legacy reference",
        displayName: "123 gr OTM/ELD-M / legacy ref",
        bulletWeightGr: 123,
        bulletType: "OTM / ELD-M",
        nominalMuzzleVelocity: {
            value: 2907,
            unit: "fps",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131"]
        },
        ballisticCoefficientG1: {
            value: 0.510,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Retained for continuity; mark as low confidence in UI."]
    },
    {
        id: "hornady-65cm-140-american-gunner-ref",
        caliberId: "65cm",
        manufacturer: "Hornady / generic 140 gr class",
        productName: "140 gr class reference",
        displayName: "140 gr HPBT / 6.5 CM ref",
        bulletWeightGr: 140,
        bulletType: "HPBT / OTM",
        nominalMuzzleVelocity: {
            value: 2651,
            unit: "fps",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["rifleshooter-65cm-2019", "legacy-v131"],
            notes: "24 inch value retained from v1.3.1; RifleShooter reports 140 gr class factory load behavior by barrel length."
        },
        ballisticCoefficientG1: {
            value: 0.587,
            unit: "G1",
            confidence: "legacy-estimate",
            method: "legacy",
            sourceRefs: ["legacy-v131", "bc-legacy-note"]
        },
        notes: ["Needs exact bullet/product mapping before high-confidence status."]
    },
    {
        id: "hornady-65cm-147-eldm-tap-81505",
        caliberId: "65cm",
        manufacturer: "Hornady",
        productName: "147 gr ELD Match TAP Precision",
        productNumber: "81505",
        displayName: "147 gr ELD-M / Hornady TAP #81505",
        bulletWeightGr: 147,
        bulletType: "ELD Match",
        nominalMuzzleVelocity: {
            value: 2655,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["hornady-65cm-147-tap"],
            notes: "Hornady data sheet lists 2655 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.697,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["hornady-65cm-147-tap", "hornady-65cm-147-load-data"],
            notes: "Hornady lists G1 BC .697 for the 147 gr ELD Match bullet."
        },
        notes: ["Strongest current data row in this dataset: manufacturer MV and BC plus barrel-length context from RifleShooter."]
    }
];
export function ammunitionById(id) {
    const ammo = AMMUNITION.find(item => item.id === id);
    if (!ammo)
        throw new Error(`Unknown ammunition load: ${id}`);
    return ammo;
}
export function ammunitionForCaliber(caliberId) {
    return AMMUNITION.filter(item => item.caliberId === caliberId);
}
//# sourceMappingURL=ammunition.js.map