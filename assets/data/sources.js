export const SOURCES = [
    {
        id: "cci-2026-catalog",
        title: "2026 CCI Product Catalog, rimfire ballistic tables",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/on/demandware.static/-/Library-Sites-VistaCCISharedLibrary/default/v91e820dd9e99e25799a98c3df74baf9b44b130a9/pdfDocuments/catalog/CC313_Catalog-2026_WEB.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer-published product numbers, bullet weights/styles and muzzle velocities for CCI rimfire loads."
    },
    {
        id: "cci-older-ballistic-chart",
        title: "CCI Ammunition Ballistic Chart",
        publisher: "CCI Ammunition / Able Ammo mirror",
        url: "https://www.ableammo.com/catalog/ammo_charts/CCI_Ammunition_Ballistic_Chart.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Older CCI ballistic chart mirror with muzzle/50/100 yd velocities and trajectory rows for Standard Velocity, Sub-Sonic HP and related .22 LR loads."
    },
    {
        id: "bbti-22lr",
        title: ".22 Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/22.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph data. BBTI states the project has been in archive status since 2020."
    },
    {
        id: "bbti-9mm",
        title: "9mm Luger Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/9luger.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph table. The 13–18 inch region is load-specific and not a simple monotonic increase."
    },
    {
        id: "bbti-9mm-rifling",
        title: "Barrel Rifling Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/rifling.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Supplemental 9 mm barrel-length/rifling data showing plateau and occasional velocity dips in longer barrels."
    },
    {
        id: "federal-2025-catalog",
        title: "2025 Federal Catalog, rifle and handgun ballistic tables",
        publisher: "Federal Premium",
        url: "https://www.federalpremium.com/on/demandware.static/-/Library-Sites-VistaFederalSharedLibrary/default/v91e820dd9e99e25799a98c3df74baf9b44b130a9/contentDocuments/catalog/FP2017_2025%20Federal%20Catalog_web.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer-published Federal rows including load numbers, bullet weights, BCs and nominal velocities."
    },
    {
        id: "federal-9bp-le",
        title: "Federal 9BP 9mm 115 gr JHP handgun detail",
        publisher: "Federal Premium Law Enforcement",
        url: "https://le.vistaoutdoor.com/ammunition/federal/handgun/details.aspx?id=525",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Federal lists 9BP as 115 gr JHP, 4 inch test barrel, G1 BC 0.12 and 1180 fps muzzle velocity."
    },
    {
        id: "federal-p9hs1g1-le",
        title: "Federal Tactical Hydra-Shok 9mm 124 gr P9HS1G1 handgun detail",
        publisher: "Federal Premium Law Enforcement",
        url: "https://le.vistaoutdoor.com/ammunition/federal/handgun/details.aspx?id=576",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Federal lists P9HS1G1 as 124 gr Hydra-Shok JHP, 4 inch test barrel, G1 BC 0.15 and 1120 fps muzzle velocity."
    },
    {
        id: "federal-9ms-le",
        title: "Federal 9MS 9mm 147 gr JHP handgun detail",
        publisher: "Federal Premium Law Enforcement",
        url: "https://le-thekineticgroup.com/ammunition/federal/handgun/details.aspx?id=527",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Federal lists 9MS as 147 gr JHP, 4 inch test barrel, G1 BC 0.20 and 1000 fps muzzle velocity."
    },
    {
        id: "federal-p9hst2-le",
        title: "Federal Tactical HST 9mm 147 gr P9HST2 handgun detail",
        publisher: "Federal Premium Law Enforcement",
        url: "https://le.vistaoutdoor.com/ammunition/federal/handgun/details.aspx?id=580",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Federal lists P9HST2 as 147 gr HST, 4 inch test barrel, G1 BC 0.20 and 1000 fps muzzle velocity."
    },
    {
        id: "bbti-223",
        title: ".223 Rifle Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/223rifle.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph data for selected Remington UMC .223 loads."
    },
    {
        id: "firearmwiki-556",
        title: "5.56 Velocity by Barrel Length",
        publisher: "FirearmWiki",
        url: "https://firearmwiki.com/wiki/5.56_Velocity_by_Barrel_Length",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Secondary table compiling RifleShooter.com and other 5.56 barrel-length data."
    },
    {
        id: "rifleshooter-223-cutdown",
        title: ".223 Remington/5.56 NATO, velocity versus barrel length",
        publisher: "RifleShooter.com",
        url: "https://rifleshooter.com/2014/04/223-remington5-56-nato-velocity-versus-barrel-length-a-man-his-chop-box-and-his-friends-rifle/",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Cut-down chronograph test with cartridge-specific tables."
    },
    {
        id: "rifleshooter-308-summary",
        title: ".308 Winchester / 7.62x51mm NATO barrel length versus velocity, 28 to 16.5 inches",
        publisher: "RifleShooter.com",
        url: "https://rifleshooter.com/2014/12/308-winchester-7-62x51mm-nato-barrel-length-versus-velocity-28-to-16-5/",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Cut-down test listing Winchester 147 FMJ, IMI 150 FMJ, Federal 168 Gold Medal and Winchester 180 PP velocities by barrel length."
    },
    {
        id: "rifleshooter-308-168-gm",
        title: ".308 Winchester barrel length and velocity: Federal 168 grain Gold Medal BTHP",
        publisher: "RifleShooter.com",
        url: "https://rifleshooter.com/2015/01/308-winchester-barrel-length-and-velocity-federal-168-grain-gold-medal-bthp/",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Cartridge-specific cut-down chronograph test for Federal GM308M 168 gr MatchKing BTHP."
    },
    {
        id: "rifleshooter-65cm-2019",
        title: "6.5 Creedmoor - Effects of Barrel Length on Velocity 2019",
        publisher: "RifleShooter.com",
        url: "https://rifleshooter.com/2019/03/6-5-creedmoor-effects-of-barrel-length-on-velocity-2019/",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Cut-down chronograph test for several factory 6.5 Creedmoor loads."
    },
    {
        id: "hornady-2026-intl-catalog",
        title: "2026 Hornady International Catalog, English version",
        publisher: "Hornady",
        url: "https://static.hornady.media/presscenter/docs/1411009257-1771261788-2026-Hornady-International-Catalog---English-version.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer catalog including Hornady 6.5 Creedmoor 140 gr ELD Match item 81500 and 147 gr ELD Match item 81501 BC rows."
    },
    {
        id: "hornady-65cm-147-tap",
        title: "6.5 Creedmoor 147 gr ELD Match TAP Precision data sheet",
        publisher: "Hornady",
        url: "https://static.hornady.media/presscenter/docs/1410995733-6-5-Creedmoor-147gr-ELD-Match-TAP-Precision1681487162.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer-published BC .697 and 2655 fps muzzle velocity for item 81505."
    },
    {
        id: "hornady-65cm-147-load-data",
        title: "6.5 Creedmoor 147 grain bullets load data",
        publisher: "Hornady",
        url: "https://static.hornady.media/site/hornady/files/load-data/6-5-creedmoor-147gr-data.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer bullet data listing 147 gr ELD Match, item 26333, G1 BC .697 and G7 BC .351."
    },
    {
        id: "waffenlager-65cm-bullet-table",
        title: "6.5 Creedmoor bullet table",
        publisher: "Waffenlager.net",
        url: "https://waffenlager.net/ammo/65_creedmoor.html",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Secondary component table for 6.5 mm bullet BCs. Used only where no primary product-level row has been mapped yet."
    },
    {
        id: "derived-barrel-note",
        title: "Derived/interpolated barrel-velocity estimate",
        publisher: "Bullet Drop data audit note",
        sourceKind: "documentation",
        retrievedAt: "2026-05-02",
        notes: "This is not an external ballistic authority. It flags values inferred from nearby measured/manufacturer rows pending exact chronograph validation."
    },
    {
        id: "bc-validation-note",
        title: "BC value requires product-level validation",
        publisher: "Bullet Drop data audit note",
        sourceKind: "documentation",
        retrievedAt: "2026-05-02",
        notes: "BC values marked with this source are explicit estimates or class-level values and should be validated against product-level manufacturer or Doppler data."
    },
    {
        id: "vista-speer-gold-dot-115",
        title: "Speer Gold Dot 9mm 115 gr part 53614 handgun detail",
        publisher: "Speer / Vista Outdoor",
        url: "https://le.vistaoutdoor.com/ammunition/speer/handgun/details.aspx?id=53614",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer detail page used for product-level BC cross-checking of 9 mm Gold Dot class data."
    },
    {
        id: "vista-speer-gold-dot-124",
        title: "Speer Gold Dot 9mm 124 gr part 53618 handgun detail",
        publisher: "Speer / Vista Outdoor",
        url: "https://le.vistaoutdoor.com/ammunition/speer/handgun/details.aspx?id=53618",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer detail page used for 124 gr Gold Dot BC cross-checking."
    },
    {
        id: "vista-speer-gold-dot-124-p",
        title: "Speer Gold Dot 9mm 124 gr +P part 53617 handgun detail",
        publisher: "Speer / Vista Outdoor",
        url: "https://le.vistaoutdoor.com/ammunition/speer/handgun/details.aspx?id=53617",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer detail page used for 124 gr +P Gold Dot velocity and BC cross-checking."
    },
    {
        id: "vista-speer-gold-dot-short-barrel-124",
        title: "Speer Gold Dot Short Barrel 9mm 124 gr +P part 23611GD detail",
        publisher: "Speer / Vista Outdoor",
        url: "https://le.vistaoutdoor.com/ammunition/speer/handgun/details.aspx?id=23611GD",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer detail page used for 124 gr +P Short Barrel nominal velocity. BBTI remains the barrel-length source for the profile."
    },
    {
        id: "vista-speer-gold-dot-147",
        title: "Speer Gold Dot 9mm 147 gr part 53619 handgun detail",
        publisher: "Speer / Vista Outdoor",
        url: "https://le.vistaoutdoor.com/ammunition/speer/handgun/details.aspx?id=53619",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer detail page used for 147 gr Gold Dot BC cross-checking."
    },
    {
        id: "bison-sierra-77-smk",
        title: "Sierra 77 gr MatchKing bullet data",
        publisher: "Bison Ballistics / Sierra Bullets data mirror",
        url: "https://bisonballistics.com/sierra-sierra-22-cal-77gr-hpbt-matchking-load-data/",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Component bullet BC data for Sierra 77 gr MatchKing. Marked secondary because it is a data mirror rather than the primary Sierra catalog."
    },
    {
        id: "sierra-168-smk-pdf",
        title: "Sierra 168 gr MatchKing HPBT product sheet",
        publisher: "Sierra Bullets",
        url: "https://www.sierrabullets.com/wp-content/uploads/2017/12/2200.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer component bullet sheet used for .308 168 gr MatchKing G1 BC validation."
    },
    {
        id: "bison-sierra-175-smk",
        title: "Sierra 175 gr MatchKing bullet data",
        publisher: "Bison Ballistics / Sierra Bullets data mirror",
        url: "https://bisonballistics.com/sierra-sierra-30-cal-175gr-hpbt-matchking-load-data/",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Component bullet BC data for Sierra 175 gr MatchKing. Marked secondary because it is a data mirror rather than the primary Sierra catalog."
    },
    {
        id: "sierra-65-140-smk-brownells",
        title: "Sierra MatchKing 6.5 mm 140 gr component bullet specification",
        publisher: "Brownells / Sierra product listing",
        url: "https://www.brownells.com/reloading/bullets/rifle-bullets/65mm-.264-diameter-140gr-hollow-point-boat-tail-100box/",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Retailer-hosted component bullet specification used only as an interim BC check for the 140 gr 6.5 mm MatchKing class row."
    },
    {
        id: "sb-223-fmj-55-180",
        title: "223 REM FMJ 55 gr V341862 detail 180",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/rifle-ammunition/rifle-ammunition-fmj/detail/180/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 55 gr FMJ, V0 1006 m/s, G1 BC 0.259, G7 BC 0.127, and 600 mm test barrel."
    },
    {
        id: "ggg-223-gpr12",
        title: "GGG .223 REM DESIGN GPR12 product page",
        publisher: "Giraites Ginkluotes Gamykla (GGG)",
        url: "https://www.ggg-ammo.lt/en/civil-ammunition/ggg-223-rem-design-gpr12-en",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 62 gr FMJ, V0 950 m/s from 508 mm CIP test barrel, and BC 0.298."
    },
    {
        id: "ggg-223-gpr14",
        title: "GGG .223 REM DESIGN GPR14 product page",
        publisher: "Giraites Ginkluotes Gamykla (GGG)",
        url: "https://www.ggg-ammo.lt/en/civil-ammunition/ggg-223-rem-design-gpr14-en",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 77 gr HPBT, V0 855 m/s from 600 mm CIP test barrel, and BC 0.362."
    },
    {
        id: "sb-65cm-fmjbt-140-560",
        title: "6.5 Creedmoor FMJBT 140 gr detail 560 / catalog row",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/rifle-ammunition/rifle-ammunition-fmj/detail/560/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Sellier & Bellot catalog data lists 6.5 Creedmoor 140 gr FMJBT V341602, V0 810 m/s, G1 BC 0.491, G7 BC 0.247, and 550 mm test barrel."
    },
    {
        id: "sb-308-fmj-147-145",
        title: "308 WIN FMJ 147 gr SB308A detail 145",
        publisher: "Sellier & Bellot",
        url: "https://www.sellierbellot.us/products/rifle-ammunition/rifle-ammunition-fmj/detail/145/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 147 gr FMJ, 2789 fps, G1 BC 0.407, G7 BC 0.204, and 23.5 inch test barrel."
    },
    {
        id: "sb-308-fmj-180-144",
        title: "308 WIN FMJ 180 gr SB308B detail 144",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/rifle-ammunition/rifle-ammunition-fmj/detail/144/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 180 gr FMJ, V0 735 m/s, G1 BC 0.498, G7 BC 0.250, and 600 mm test barrel."
    },
    {
        id: "ggg-308-gpx11",
        title: "GGG .308 WIN DESIGN GPX11 product page",
        publisher: "Giraites Ginkluotes Gamykla (GGG)",
        url: "https://www.ggg-ammo.lt/en/civil-ammunition/ggg-308-win-design-gpx11-en",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 147 gr FMJ, 823 m/s mean velocity from 568 mm CIP test barrel; the published range table also lists V0 842 m/s and BC 0.401."
    },
    {
        id: "ggg-308-gpx14",
        title: "GGG .308 WIN DESIGN GPX14 FOR HUNTING product page",
        publisher: "Giraites Ginkluotes Gamykla (GGG)",
        url: "https://www.ggg-ammo.lt/en/civil-ammunition/ggg-308-win-design-gpx14-for-hunting-en",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 165 gr SBT, V0 805 m/s from 600 mm CIP test barrel, and BC 0.404."
    },
    {
        id: "ggg-308-gpx19",
        title: "GGG .308 WIN DESIGN GPX19 FOR HUNTING product page",
        publisher: "Giraites Ginkluotes Gamykla (GGG)",
        url: "https://www.ggg-ammo.lt/en/civil-ammunition/ggg-308-win-dizainas-gpx19-for-hunting-en",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 180 gr SBT, V0 780 m/s from 600 mm CIP test barrel, and BC 0.506."
    },
    {
        id: "sb-22lr-2022-catalog",
        title: "Sellier & Bellot 2022 product annual, .22 LR rimfire table",
        publisher: "Sellier & Bellot",
        url: "https://assets.unilogcorp.com/187/ITEM/DOC/Sellier_Bellot_103221982_Catalog.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Catalog table lists SB22A Club 40 gr LRN at 1070 fps/G1 0.110, SB22B 40 gr LRN at 1235 fps/G1 0.100, and SB22SUB 40 gr LRN at 1020 fps/G1 0.110."
    },
    {
        id: "cci-standard-velocity-35-page",
        title: "CCI Standard Velocity 22 LR part 35 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/standard-velocity/6-35.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer product page for CCI Standard Velocity #35."
    },
    {
        id: "cci-sub-sonic-hp-56-page",
        title: "CCI Sub-Sonic HP 22 LR part 56 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/sub-sonic-hp/6-56.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer product page for CCI Sub-Sonic HP #56."
    },
    {
        id: "cci-mini-mag-30-page",
        title: "CCI Target Mini-Mag 22 LR part 30 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/target-mini-mag/6-30.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer product page for CCI Target Mini-Mag #30."
    },
    {
        id: "cci-quiet-semi-auto-975-page",
        title: "CCI Quiet-22 Semi-Auto 22 LR part 975CC product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/quiet-22-semi-auto/6-975CC.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "CCI catalog/product references list Quiet-22 Semi-Auto #975CC as 45 gr RN at 835 fps."
    },
    {
        id: "cci-quiet-22-960-page",
        title: "CCI Quiet-22 22 LR part 960 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/quiet-22/6-960.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "CCI catalog/product references list Quiet-22 #960 as 40 gr LRN at 710 fps."
    },
    {
        id: "cci-stinger-50-page",
        title: "CCI Stinger 22 LR part 50 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/stinger/6-50.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "CCI catalog/product references list Stinger #50 as 32 gr CPHP at 1640 fps."
    },
    {
        id: "cci-suppressor-957-page",
        title: "CCI 22 Suppressor part 957 product page",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/rimfire/cci/22-suppressor/6-957.html",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "CCI suppressor-class references list a 45 gr hollow point suppressor load around 970 fps."
    },
    {
        id: "aguila-22-sss-page",
        title: "Aguila 22 Sniper Subsonic Long Rifle product page / catalog row",
        publisher: "Aguila Ammunition",
        url: "https://www.aguilaammo.com/products/22-sniper-subsonic-long-rifle-subsonic-lead-solid-point",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Aguila catalog data lists 60 gr lead solid point, 950 fps muzzle velocity, 848 fps at 100 yd, 120 ft-lb muzzle energy, and recommends 20 inch barrels or longer."
    },
    {
        id: "sb-9mm-list",
        title: "Sellier & Bellot pistol and revolver cartridges list",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/pistol-and-revolver-ammunition/pistol-and-revolver-cartridges/list/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer list gives 9 mm Luger product numbers and V0 values for FMJ, JHP, SP and subsonic rows."
    },
    {
        id: "sb-9mm-124-fmj-289-pdf",
        title: "9 mm Luger 124 gr FMJ SB9B datasheet/detail 289",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/pistol-and-revolver-ammunition/pistol-and-revolver-cartridges/detail/289/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Datasheet lists 124 gr FMJ, 1181 fps, G1 BC 0.152, and 6 inch test barrel."
    },
    {
        id: "sb-9mm-115-fmj-290",
        title: "9 mm Luger 115 gr FMJ V310452 detail 290",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/pistol-and-revolver-ammunition/pistol-and-revolver-cartridges/detail/290/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 115 gr FMJ, V0 390 m/s, G1 BC 0.116, and 150 mm test barrel."
    },
    {
        id: "sb-9mm-jhp-list",
        title: "Sellier & Bellot 9 mm JHP rows",
        publisher: "Sellier & Bellot",
        url: "https://www.sellier-bellot.cz/en/products/pistol-and-revolver-ammunition/pistol-and-revolver-cartridges/list/",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer list includes 115 gr JHP at 377 m/s and 124 gr JHP at 366 m/s."
    },
    {
        id: "geco-9mm-fmjfn-154",
        title: "GECO 9 mm Luger Full Metal Jacket Flat Nose 10.0 g product datasheet",
        publisher: "GECO / RWS GmbH",
        url: "https://geco-ammunition.com/en/ammunition/products-overview/pistol-revolver-cartridges/geco-full-metal-jacket-flat-nose-pr/geco-9-mm-luger-full-metal-jacket-flat-nose-100g",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Product datasheet identifies the 10.0 g / 154 gr FMJ flat-nose load and 150 mm barrel; velocity/BC field availability should be rechecked on future crawls."
    },
    {
        id: "geco-9mm-fmj-124-8g",
        title: "GECO 9 mm Luger Full Metal Jacket 8.0 g product page",
        publisher: "GECO / RWS GmbH",
        url: "https://geco-ammunition.com/en/ammunition/products-overview/pistol-revolver-cartridges/geco-full-metal-jacket-pr/geco-9mm-luger-full-metal-jacket-80g",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-03",
        notes: "Manufacturer page lists 8.0 g / 124 gr FMJ, 125 mm barrel, G1 BC 0.128, and V0 360 m/s."
    }
];
export function sourceById(id) {
    return SOURCES.find(source => source.id === id);
}
//# sourceMappingURL=sources.js.map