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
    },
    {
        id: "sb-22lr-club-sb22a",
        caliberId: "22lr",
        manufacturer: "Sellier & Bellot",
        productName: "Club",
        productNumber: "SB22A / V355297",
        displayName: "40 gr LRN / S&B Club SB22A",
        bulletWeightGr: 40,
        bulletType: "LRN",
        nominalMuzzleVelocity: { value: 1070, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "S&B rimfire table lists SB22A Club at 1070 fps." },
        ballisticCoefficientG1: { value: 0.110, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "Manufacturer catalog G1 BC." },
        notes: ["Specific S&B Club product row; barrel profile is manufacturer nominal plus derived short/long context."]
    },
    {
        id: "sb-22lr-hv-sb22b",
        caliberId: "22lr",
        manufacturer: "Sellier & Bellot",
        productName: "High Velocity",
        productNumber: "SB22B",
        displayName: "40 gr LRN / S&B High Velocity SB22B",
        bulletWeightGr: 40,
        bulletType: "LRN",
        nominalMuzzleVelocity: { value: 1235, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "S&B rimfire table lists SB22B at 1235 fps." },
        ballisticCoefficientG1: { value: 0.100, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "Manufacturer catalog G1 BC." },
        notes: ["Specific S&B high-velocity product row; not chronographed per barrel length in this dataset."]
    },
    {
        id: "sb-22lr-subsonic-sb22sub",
        caliberId: "22lr",
        manufacturer: "Sellier & Bellot",
        productName: "Subsonic",
        productNumber: "SB22SUB / V355272",
        displayName: "40 gr LRN / S&B Subsonic SB22SUB",
        bulletWeightGr: 40,
        bulletType: "LRN",
        nominalMuzzleVelocity: { value: 1020, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "S&B rimfire table lists SB22SUB at 1020 fps." },
        ballisticCoefficientG1: { value: 0.110, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-22lr-2022-catalog"], notes: "Manufacturer catalog G1 BC." },
        notes: ["Specific S&B subsonic product row."]
    },
    {
        id: "cci-quiet-semi-auto-975cc",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Quiet-22 Semi-Auto",
        productNumber: "975CC",
        displayName: "45 gr RN / CCI Quiet-22 Semi-Auto #975CC",
        bulletWeightGr: 45,
        bulletType: "RN",
        nominalMuzzleVelocity: { value: 835, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-quiet-semi-auto-975-page"], notes: "CCI catalog row lists Quiet-22 Semi-Auto #975CC at 835 fps." },
        ballisticCoefficientG1: { value: 0.140, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["bc-validation-note"], notes: "Estimated class-level BC for 45 gr low-velocity .22 LR RN pending primary BC source." },
        notes: ["Low-velocity semi-auto-oriented .22 LR row; BC is still estimated."]
    },
    {
        id: "cci-quiet-22-960",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Quiet-22",
        productNumber: "960",
        displayName: "40 gr LRN / CCI Quiet-22 #960",
        bulletWeightGr: 40,
        bulletType: "LRN",
        nominalMuzzleVelocity: { value: 710, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-quiet-22-960-page"], notes: "CCI catalog row lists Quiet-22 #960 at 710 fps." },
        ballisticCoefficientG1: { value: 0.110, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["bc-validation-note"], notes: "Estimated BC; use caution at longer ranges." },
        notes: ["Very low velocity row; not suitable to treat like standard .22 LR trajectory without validation."]
    },
    {
        id: "cci-stinger-50",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "Stinger",
        productNumber: "50",
        displayName: "32 gr CPHP / CCI Stinger #50",
        bulletWeightGr: 32,
        bulletType: "CPHP",
        nominalMuzzleVelocity: { value: 1640, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-2026-catalog", "cci-stinger-50-page"], notes: "CCI catalog row lists Stinger #50 at 1640 fps." },
        ballisticCoefficientG1: { value: 0.084, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["bc-validation-note"], notes: "Light hyper-velocity .22 LR BC estimate pending product-level BC source." },
        notes: ["Hyper-velocity .22 LR row; derived piplängdspunkter are intentionally marked lower-confidence."]
    },
    {
        id: "cci-suppressor-957",
        caliberId: "22lr",
        manufacturer: "CCI",
        productName: "22 Suppressor",
        productNumber: "957",
        displayName: "45 gr HP / CCI 22 Suppressor #957",
        bulletWeightGr: 45,
        bulletType: "HP",
        nominalMuzzleVelocity: { value: 970, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["cci-suppressor-957-page"], notes: "CCI suppressor-class references list the 45 gr suppressor load at about 970 fps." },
        ballisticCoefficientG1: { value: 0.140, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["bc-validation-note"], notes: "Estimated class-level BC pending product BC source." },
        notes: ["Suppressor/subsonic-class load; verify in your barrel if used for dope."]
    },
    {
        id: "aguila-22-sss-60gr",
        caliberId: "22lr",
        manufacturer: "Aguila",
        productName: "Sniper Subsonic Long Rifle",
        productNumber: "1B220112",
        displayName: "60 gr LSP / Aguila Sniper Subsonic",
        bulletWeightGr: 60,
        bulletType: "Lead Solid Point",
        nominalMuzzleVelocity: { value: 950, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["aguila-22-sss-page"], notes: "Aguila catalog row lists 60 gr at 950 fps and recommends 20 inch barrels or longer." },
        ballisticCoefficientG1: { value: 0.160, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["bc-validation-note"], notes: "Estimated heavy .22 LR BC pending product-level BC source." },
        notes: ["Heavy 60 gr .22 LR SSS row; stability requires appropriate twist and should be field-verified."]
    },
    {
        id: "sb-9mm-115-fmj-v310452",
        caliberId: "9x19",
        manufacturer: "Sellier & Bellot",
        productName: "9 mm Luger FMJ 115 gr",
        productNumber: "V310452 / SB9A",
        displayName: "115 gr FMJ / S&B V310452",
        bulletWeightGr: 115,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 390, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-115-fmj-290", "sb-9mm-list"], notes: "S&B page lists V0 390 m/s from a 150 mm test barrel." },
        ballisticCoefficientG1: { value: 0.116, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-115-fmj-290"], notes: "Manufacturer G1 BC." },
        notes: ["Manufacturer test-barrel row; PCC-length profile is derived from BBTI 9 mm behavior, not directly measured for this SKU."]
    },
    {
        id: "sb-9mm-124-fmj-v310492",
        caliberId: "9x19",
        manufacturer: "Sellier & Bellot",
        productName: "9 mm Luger FMJ 124 gr",
        productNumber: "V310492 / SB9B",
        displayName: "124 gr FMJ / S&B V310492",
        bulletWeightGr: 124,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 1181, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-124-fmj-289-pdf", "sb-9mm-list"], notes: "S&B datasheet lists 1181 fps from a 6 inch test barrel." },
        ballisticCoefficientG1: { value: 0.152, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-124-fmj-289-pdf"], notes: "Manufacturer G1 BC." },
        notes: ["Manufacturer BC/MV row; PCC-length points are derived and marked as such."]
    },
    {
        id: "sb-9mm-115-jhp-v310422",
        caliberId: "9x19",
        manufacturer: "Sellier & Bellot",
        productName: "9 mm Luger JHP 115 gr",
        productNumber: "V310422 / SB9C",
        displayName: "115 gr JHP / S&B V310422",
        bulletWeightGr: 115,
        bulletType: "JHP",
        nominalMuzzleVelocity: { value: 377, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-jhp-list"], notes: "S&B list shows 115 gr JHP at V0 377 m/s." },
        ballisticCoefficientG1: { value: 0.115, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-jhp-list"], notes: "S&B datasheet/page data for 115 gr JHP gives G1 about 0.115." },
        notes: ["Added from S&B pistol-cartridge data; piplängdspunkter are derived."]
    },
    {
        id: "sb-9mm-124-jhp-v312182",
        caliberId: "9x19",
        manufacturer: "Sellier & Bellot",
        productName: "9 mm Luger JHP 124 gr",
        productNumber: "V312182 / SB9D",
        displayName: "124 gr JHP / S&B V312182",
        bulletWeightGr: 124,
        bulletType: "JHP",
        nominalMuzzleVelocity: { value: 366, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-9mm-jhp-list"], notes: "S&B list shows 124 gr JHP at V0 366 m/s." },
        ballisticCoefficientG1: { value: 0.150, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["sb-9mm-jhp-list", "bc-validation-note"], notes: "Class-level 124 gr JHP estimate pending product-specific BC page capture." },
        notes: ["Manufacturer MV row; BC and long-barrel profile need later validation."]
    },
    {
        id: "geco-9mm-fmjfn-154gr",
        caliberId: "9x19",
        manufacturer: "GECO",
        productName: "Full Metal Jacket Flat Nose 10.0 g",
        productNumber: "2317708",
        displayName: "154 gr FMJ FN / GECO 10.0 g",
        bulletWeightGr: 154,
        bulletType: "FMJ FN",
        nominalMuzzleVelocity: { value: 300, unit: "m/s", confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmjfn-154", "bc-validation-note"], notes: "Product identity is manufacturer-published; exact velocity was not available in the crawled page extract, so this is a conservative subsonic-class placeholder to be replaced with product-sheet data." },
        ballisticCoefficientG1: { value: 0.170, unit: "G1", confidence: "derived", method: "derived", sourceRefs: ["geco-9mm-fmjfn-154", "bc-validation-note"], notes: "Estimated BC for a heavy 154 gr flat-nose 9 mm bullet." },
        notes: ["Placeholder row: product source is real, but MV/BC must be verified from GECO datasheet before authoritative use."]
    },
    {
        id: "geco-9mm-fmj-124gr-8g",
        caliberId: "9x19",
        manufacturer: "GECO",
        productName: "Full Metal Jacket 8.0 g",
        productNumber: "2431562",
        displayName: "124 gr FMJ / GECO 8.0 g",
        bulletWeightGr: 124,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 360, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["geco-9mm-fmj-124-8g"], notes: "GECO product page lists V0 360 m/s from a 125 mm barrel." },
        ballisticCoefficientG1: { value: 0.128, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["geco-9mm-fmj-124-8g"], notes: "Manufacturer BC." },
        notes: ["Product-level GECO FMJ row with manufacturer BC/MV; PCC profile is derived."]
    },
    {
        id: "sb-223-fmj-55-v341862",
        caliberId: "223rem",
        manufacturer: "Sellier & Bellot",
        productName: "223 Rem FMJ 55 gr",
        productNumber: "V341862",
        displayName: "55 gr FMJ / S&B V341862",
        bulletWeightGr: 55,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 1006, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-223-fmj-55-180"], notes: "S&B page lists V0 1006 m/s from a 600 mm test barrel." },
        ballisticCoefficientG1: { value: 0.259, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-223-fmj-55-180"], notes: "Manufacturer G1 BC." },
        notes: ["Product-level S&B .223 reference; barrel profile includes manufacturer point and derived shorter lengths."]
    },
    {
        id: "ggg-223-gpr12-62-fmj",
        caliberId: "223rem",
        manufacturer: "GGG",
        productName: ".223 Rem GPR12",
        productNumber: "GPR12",
        displayName: "62 gr FMJ / GGG GPR12",
        bulletWeightGr: 62,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 950, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr12"], notes: "GGG page lists 950 m/s from a 508 mm / 20 inch CIP barrel." },
        ballisticCoefficientG1: { value: 0.298, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr12"], notes: "Manufacturer BC." },
        notes: ["Strong product-level GGG row."]
    },
    {
        id: "ggg-223-gpr14-77-hpbt",
        caliberId: "223rem",
        manufacturer: "GGG",
        productName: ".223 Rem GPR14",
        productNumber: "GPR14",
        displayName: "77 gr HPBT / GGG GPR14",
        bulletWeightGr: 77,
        bulletType: "HPBT",
        nominalMuzzleVelocity: { value: 855, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr14"], notes: "GGG page lists 855 m/s from a 600 mm CIP barrel." },
        ballisticCoefficientG1: { value: 0.362, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-223-gpr14"], notes: "Manufacturer BC." },
        notes: ["Product-level heavy .223 reference."]
    },
    {
        id: "sb-65cm-fmjbt-140-v341602",
        caliberId: "65cm",
        manufacturer: "Sellier & Bellot",
        productName: "6.5 Creedmoor FMJBT 140 gr",
        productNumber: "V341602",
        displayName: "140 gr FMJBT / S&B V341602",
        bulletWeightGr: 140,
        bulletType: "FMJBT",
        nominalMuzzleVelocity: { value: 810, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-65cm-fmjbt-140-560"], notes: "S&B catalog row lists V0 810 m/s from 550 mm test barrel." },
        ballisticCoefficientG1: { value: 0.491, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-65cm-fmjbt-140-560"], notes: "Manufacturer G1 BC." },
        notes: ["Product-level 6.5 Creedmoor FMJBT training row."]
    },
    {
        id: "sb-308-fmj-147-sb308a",
        caliberId: "308win",
        manufacturer: "Sellier & Bellot",
        productName: "308 Win FMJ 147 gr",
        productNumber: "SB308A / detail 145",
        displayName: "147 gr FMJ / S&B SB308A",
        bulletWeightGr: 147,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 2789, unit: "fps", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-147-145"], notes: "S&B page lists 2789 fps from 23.5 inch test barrel." },
        ballisticCoefficientG1: { value: 0.407, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-147-145"], notes: "Manufacturer G1 BC." },
        notes: ["Specific S&B .308 FMJ row; better source match than generic Winchester 147 reference."]
    },
    {
        id: "sb-308-fmj-180-sb308b",
        caliberId: "308win",
        manufacturer: "Sellier & Bellot",
        productName: "308 Win FMJ 180 gr",
        productNumber: "SB308B / detail 144",
        displayName: "180 gr FMJ / S&B SB308B",
        bulletWeightGr: 180,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 735, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-180-144"], notes: "S&B page lists V0 735 m/s from 600 mm test barrel." },
        ballisticCoefficientG1: { value: 0.498, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["sb-308-fmj-180-144"], notes: "Manufacturer G1 BC." },
        notes: ["Specific S&B heavy FMJ row."]
    },
    {
        id: "ggg-308-gpx11-147-fmj",
        caliberId: "308win",
        manufacturer: "GGG",
        productName: ".308 Win GPX11",
        productNumber: "GPX11",
        displayName: "147 gr FMJ / GGG GPX11",
        bulletWeightGr: 147,
        bulletType: "FMJ",
        nominalMuzzleVelocity: { value: 823, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx11"], notes: "GGG page lists mean velocity 823 m/s from 568 mm test barrel; its range table also lists V0 842 m/s." },
        ballisticCoefficientG1: { value: 0.401, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx11"], notes: "Manufacturer BC." },
        notes: ["GGG page contains both mean velocity and V0 table; nominal MV uses stated mean velocity to avoid overstating."]
    },
    {
        id: "ggg-308-gpx14-165-sbt",
        caliberId: "308win",
        manufacturer: "GGG",
        productName: ".308 Win GPX14 For Hunting",
        productNumber: "GPX14",
        displayName: "165 gr SBT / GGG GPX14",
        bulletWeightGr: 165,
        bulletType: "SBT",
        nominalMuzzleVelocity: { value: 805, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx14"], notes: "GGG page lists 805 m/s from 600 mm CIP barrel." },
        ballisticCoefficientG1: { value: 0.404, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx14"], notes: "Manufacturer BC." },
        notes: ["Hunting SBT load with product-level GGG source."]
    },
    {
        id: "ggg-308-gpx19-180-sbt",
        caliberId: "308win",
        manufacturer: "GGG",
        productName: ".308 Win GPX19 For Hunting",
        productNumber: "GPX19",
        displayName: "180 gr SBT / GGG GPX19",
        bulletWeightGr: 180,
        bulletType: "SBT",
        nominalMuzzleVelocity: { value: 780, unit: "m/s", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx19"], notes: "GGG page lists 780 m/s from 600 mm CIP barrel." },
        ballisticCoefficientG1: { value: 0.506, unit: "G1", confidence: "manufacturer-published", method: "published", sourceRefs: ["ggg-308-gpx19"], notes: "Manufacturer BC." },
        notes: ["Hunting SBT load with product-level GGG source."]
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