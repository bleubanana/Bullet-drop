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
            sourceRefs: ["cci-2026-catalog", "cci-older-ballistic-chart"],
            notes: "CCI lists Standard Velocity #35 as 40 gr LRN at 1070 fps rifle muzzle velocity and estimated 940 fps handgun velocity."
        },
        ballisticCoefficientG1: {
            value: 0.120,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Conservative .22 LR standard-velocity G1 estimate pending product-level BC validation."
        },
        notes: ["Tillverkar-MV är produktspårad. BC och piplängdsprofil är markerade som härledda tills bättre produktdata finns."]
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
            sourceRefs: ["cci-2026-catalog"],
            notes: "CCI lists Mini-Mag #30 as 40 gr CPRN at 1235 fps rifle muzzle velocity and estimated 1060 fps handgun velocity."
        },
        ballisticCoefficientG1: {
            value: 0.130,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Single-value G1 estimate; validate before treating as authoritative."
        },
        notes: ["BBTI-piplängdspunkter finns för CCI Mini-Mag 40 gr CPRN och visas som mätta tredje parts-data."]
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
            sourceRefs: ["cci-2026-catalog"],
            notes: "CCI catalog row for Mini-Mag HP #31 lists 36 gr CPHP at 1260 fps rifle muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.125,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Approximate .22 LR CPHP BC pending product-level source validation."
        },
        notes: ["High-velocity .22 LR profile. Piplängdsvärdena är härledda kring publicerad MV."]
    },
    {
        id: "cci-sub-sonic-hp-56",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Sub-Sonic HP",
        productNumber: "56",
        displayName: "40 gr LHP / CCI Sub-Sonic HP #56",
        bulletWeightGr: 40,
        bulletType: "LHP",
        nominalMuzzleVelocity: {
            value: 1050,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["cci-older-ballistic-chart", "cci-2026-catalog"],
            notes: "CCI Sub-Sonic HP is mapped as a 40 gr hollow-point class around 1050 fps. Verify current part-number packaging when updating the data row."
        },
        ballisticCoefficientG1: {
            value: 0.120,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Estimated G1 value; exact product BC remains a data gap."
        },
        notes: ["Ersätter den tidigare breda Eley/SK/CCI-raden med en specifik CCI subsonic-referens."]
    },
    {
        id: "federal-9mm-115-jhp-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "9BP 115 gr JHP / BBTI reference",
        productNumber: "9BP",
        displayName: "115 gr JHP / Federal 9BP + BBTI ref",
        bulletWeightGr: 115,
        bulletType: "JHP",
        nominalMuzzleVelocity: {
            value: 1180,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-9bp-le"],
            notes: "Federal 9BP row lists 1180 fps from a 4 inch test barrel. BBTI's Federal 115 gr JHP row is used for the barrel-length profile and may not be the exact same SKU/lot."
        },
        ballisticCoefficientG1: {
            value: 0.120,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-9bp-le"],
            notes: "Manufacturer-published G1 BC for Federal 9BP 115 gr JHP."
        },
        notes: ["BBTI visar topp/platå runt PCC-längder och sänkning från 17 till 18 tum. Tabellen behåller uppmätta punkter utan utjämning."]
    },
    {
        id: "federal-9mm-124-hydrashok-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "Tactical Hydra-Shok 124 gr / BBTI reference",
        productNumber: "P9HS1G1",
        displayName: "124 gr JHP / Federal Hydra-Shok + BBTI ref",
        bulletWeightGr: 124,
        bulletType: "Hydra-Shok JHP",
        nominalMuzzleVelocity: {
            value: 1120,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-p9hs1g1-le"],
            notes: "Federal P9HS1G1 row lists 1120 fps from a 4 inch test barrel. BBTI measured its Federal 124 gr Hydra-Shok row independently."
        },
        ballisticCoefficientG1: {
            value: 0.150,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-p9hs1g1-le"],
            notes: "Manufacturer-published G1 BC for Federal Tactical Hydra-Shok 124 gr."
        },
        notes: ["13–18 tum visas som faktiska BBTI-punkter; 18 tum är lägre än 16 och 17 tum i källtabellen."]
    },
    {
        id: "federal-9mm-147-hydrashok-bbti",
        caliberId: "9x19",
        manufacturer: "Federal",
        productName: "147 gr Hydra-Shok / HST class reference",
        productNumber: "P9HST2 / 9MS context",
        displayName: "147 gr JHP / Federal 147 gr + BBTI ref",
        bulletWeightGr: 147,
        bulletType: "JHP / Hydra-Shok class",
        nominalMuzzleVelocity: {
            value: 1000,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-p9hst2-le", "federal-9ms-le"],
            notes: "Federal 147 gr HST/JHP rows list 1000 fps from a 4 inch test barrel. BBTI measured a Federal 147 gr Hydra-Shok row; this is a class-matched, not exact-SKU, mapping."
        },
        ballisticCoefficientG1: {
            value: 0.200,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-p9hst2-le", "federal-9ms-le"],
            notes: "Manufacturer-published G1 BC for Federal 147 gr 9 mm JHP/HST rows."
        },
        notes: ["Subsonic-class 9 mm/PCC reference. BBTI profile is non-monotonic across 13–18 tum."]
    },
    {
        id: "speer-9mm-124-gold-dot-sb-bbti",
        caliberId: "9x19",
        manufacturer: "Speer",
        productName: "Gold Dot Short Barrel 124 gr +P / BBTI reference",
        productNumber: "23611GD",
        displayName: "124 gr +P JHP / Speer Gold Dot SB + BBTI ref",
        bulletWeightGr: 124,
        bulletType: "Gold Dot JHP +P",
        nominalMuzzleVelocity: {
            value: 1150,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["vista-speer-gold-dot-short-barrel-124"],
            notes: "Speer short-barrel row is used for product identity and nominal velocity context. BBTI measured its Speer 124 gr Gold Dot Short Barrel row independently."
        },
        ballisticCoefficientG1: {
            value: 0.134,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["vista-speer-gold-dot-124", "vista-speer-gold-dot-124-p", "bc-validation-note"],
            notes: "Mapped from Speer 124 gr Gold Dot class BC references; confirm exact Short Barrel BC when Speer publishes product-specific value."
        },
        notes: ["Extra 9 mm/PCC rad med faktisk BBTI-piplängdstabell. 14–18 tum visar platå/små variationer, inte en linjär ökning."]
    },
    {
        id: "federal-xm193-55-fmj-ref",
        caliberId: "223rem",
        manufacturer: "Federal / XM193 class",
        productName: "55 gr FMJ 5.56 reference",
        displayName: "55 gr FMJ / Federal XM193 ref",
        bulletWeightGr: 55,
        bulletType: "FMJ",
        nominalMuzzleVelocity: {
            value: 3306,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"],
            notes: "20 inch value from RifleShooter/FirearmWiki barrel-length reference."
        },
        ballisticCoefficientG1: {
            value: 0.243,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Generic 55 gr FMJ G1 estimate pending exact projectile source."
        },
        notes: ["5.56/.223 referensrad; kontrollera faktisk patron, kammare och trycknivå."]
    },
    {
        id: "winchester-m855-62-ref",
        caliberId: "223rem",
        manufacturer: "Winchester / M855 class",
        productName: "62 gr M855 reference",
        displayName: "62 gr SS109/M855 / Winchester ref",
        bulletWeightGr: 62,
        bulletType: "FMJ penetrator",
        nominalMuzzleVelocity: {
            value: 3097,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["rifleshooter-223-cutdown", "firearmwiki-556"],
            notes: "20 inch M855 value from RifleShooter/FirearmWiki barrel-length reference."
        },
        ballisticCoefficientG1: {
            value: 0.307,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Generic M855/SS109 BC; exact projectile and velocity band vary."
        },
        notes: ["M855/SS109 varierar tydligt med tillverkare och pipa."]
    },
    {
        id: "federal-gm223m3-77-smk-ref",
        caliberId: "223rem",
        manufacturer: "Federal / Sierra",
        productName: "Gold Medal 77 gr Sierra MatchKing BTHP",
        productNumber: "GM223M3",
        displayName: "77 gr SMK / Federal Gold Medal GM223M3",
        bulletWeightGr: 77,
        bulletType: "SMK BTHP",
        nominalMuzzleVelocity: {
            value: 2720,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog row for GM223M3 lists 77 gr Sierra MatchKing BTHP with 2720 fps nominal velocity."
        },
        ballisticCoefficientG1: {
            value: 0.372,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog single-value G1 BC for GM223M3."
        },
        notes: ["Produkt-MV och BC är starkare källsatta; piplängdsprofilen är fortfarande härledd."]
    },
    {
        id: "winchester-308-147-fmj-cutdown-ref",
        caliberId: "308win",
        manufacturer: "Winchester / RifleShooter reference",
        productName: "147 gr FMJ cut-down reference",
        displayName: "147 gr FMJ / Winchester cut-down ref",
        bulletWeightGr: 147,
        bulletType: "FMJBT",
        nominalMuzzleVelocity: {
            value: 2804,
            unit: "fps",
            confidence: "measured-third-party",
            method: "measured",
            sourceRefs: ["rifleshooter-308-summary"],
            notes: "20 inch Winchester 147 FMJ value from RifleShooter .308 cut-down summary."
        },
        ballisticCoefficientG1: {
            value: 0.393,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["bc-validation-note"],
            notes: "Generic M80/FMJBT class BC estimate; exact bullet BC not source-matched."
        },
        notes: ["Velocity row is measured by RifleShooter; BC remains class-level."]
    },
    {
        id: "federal-gm308m-168-smk-ref",
        caliberId: "308win",
        manufacturer: "Federal / Sierra",
        productName: "Gold Medal 168 gr Sierra MatchKing BTHP",
        productNumber: "GM308M",
        displayName: "168 gr SMK / Federal Gold Medal GM308M",
        bulletWeightGr: 168,
        bulletType: "SMK BTHP",
        nominalMuzzleVelocity: {
            value: 2650,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog", "rifleshooter-308-168-gm"],
            notes: "Federal catalog lists the factory row; RifleShooter provides measured barrel-length data for this cartridge family."
        },
        ballisticCoefficientG1: {
            value: 0.462,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog G1 BC for GM308M."
        },
        notes: ["One of the stronger .308 rows: manufacturer product data plus cartridge-specific cut-down context."]
    },
    {
        id: "federal-gm308m2-175-smk-ref",
        caliberId: "308win",
        manufacturer: "Federal / Sierra",
        productName: "Gold Medal 175 gr Sierra MatchKing BTHP",
        productNumber: "GM308M2",
        displayName: "175 gr SMK / Federal Gold Medal GM308M2",
        bulletWeightGr: 175,
        bulletType: "SMK BTHP",
        nominalMuzzleVelocity: {
            value: 2600,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog row for GM308M2 lists 2600 fps nominal velocity."
        },
        ballisticCoefficientG1: {
            value: 0.505,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog G1 BC for GM308M2."
        },
        notes: ["Product MV/BC are source-tracked; barrel-length profile is derived from .308 cut-down context."]
    },
    {
        id: "generic-65cm-123-eldm-estimate",
        caliberId: "65cm",
        manufacturer: "Generic / 6.5 mm class",
        productName: "123 gr ELD-M class estimate",
        displayName: "123 gr OTM / ELD-M class estimate",
        bulletWeightGr: 123,
        bulletType: "ELD-M / OTM",
        nominalMuzzleVelocity: {
            value: 2907,
            unit: "fps",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["waffenlager-65cm-bullet-table", "derived-barrel-note"],
            notes: "Class-level 24 inch value pending product-specific factory mapping."
        },
        ballisticCoefficientG1: {
            value: 0.510,
            unit: "G1",
            confidence: "derived",
            method: "derived",
            sourceRefs: ["waffenlager-65cm-bullet-table", "bc-validation-note"],
            notes: "Secondary/component-table class value; treat as lower-confidence."
        },
        notes: ["Indicative lighter 6.5 Creedmoor row only; not a product-level factory load yet."]
    },
    {
        id: "federal-gm65crd1-140-smk-ref",
        caliberId: "65cm",
        manufacturer: "Federal / Sierra",
        productName: "Gold Medal 140 gr Sierra MatchKing BTHP",
        productNumber: "GM65CRD1",
        displayName: "140 gr SMK / Federal Gold Medal GM65CRD1",
        bulletWeightGr: 140,
        bulletType: "SMK BTHP",
        nominalMuzzleVelocity: {
            value: 2675,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog row for GM65CRD1 lists 2675 fps nominal velocity."
        },
        ballisticCoefficientG1: {
            value: 0.535,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["federal-2025-catalog"],
            notes: "Federal catalog G1 BC for the 140 gr Sierra MatchKing row."
        },
        notes: ["Product data is source-tracked; barrel-length profile is derived using 6.5 Creedmoor cut-down context."]
    },
    {
        id: "hornady-65cm-147-eldm-tap-81505",
        caliberId: "65cm",
        manufacturer: "Hornady",
        productName: "147 gr ELD Match TAP Precision",
        productNumber: "81505",
        displayName: "147 gr ELD-M / Hornady TAP #81505",
        bulletWeightGr: 147,
        bulletType: "ELD-M",
        nominalMuzzleVelocity: {
            value: 2655,
            unit: "fps",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["hornady-65cm-147-tap"],
            notes: "Hornady TAP Precision #81505 data sheet lists 2655 fps muzzle velocity."
        },
        ballisticCoefficientG1: {
            value: 0.697,
            unit: "G1",
            confidence: "manufacturer-published",
            method: "published",
            sourceRefs: ["hornady-65cm-147-tap", "hornady-65cm-147-load-data"],
            notes: "Hornady lists G1 BC .697 and G7 BC .351 for 147 gr ELD Match."
        },
        notes: ["Strong 6.5 CM row: manufacturer BC/MV plus RifleShooter barrel-length context."]
    }
];
export function ammunitionById(id) {
    const load = AMMUNITION.find(item => item.id === id);
    if (!load)
        throw new Error(`Unknown ammunition load: ${id}`);
    return load;
}
export function ammunitionForCaliber(caliberId) {
    return AMMUNITION.filter(item => item.caliberId === caliberId);
}
//# sourceMappingURL=ammunition.js.map