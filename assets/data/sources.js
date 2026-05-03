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
    }
];
export function sourceById(id) {
    return SOURCES.find(source => source.id === id);
}
//# sourceMappingURL=sources.js.map