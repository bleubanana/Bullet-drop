export const SOURCES = [
    {
        id: "cci-2025-catalog",
        title: "2025 CCI Product Catalog, rimfire ballistic tables",
        publisher: "CCI Ammunition",
        url: "https://www.cci-ammunition.com/on/demandware.static/-/Library-Sites-VistaCCISharedLibrary/default/v91e820dd9e99e25799a98c3df74baf9b44b130a9/pdfDocuments/catalog/CC307_2025_CCI_Catalog_FL_WEB_singles.pdf",
        sourceKind: "manufacturer",
        retrievedAt: "2026-05-02",
        notes: "Manufacturer-published product numbers, bullet weights/styles, and muzzle/50 yd/100 yd velocities. BC values are not fully exposed in the catalog tables."
    },
    {
        id: "bbti-22lr",
        title: ".22 Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/22.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph data. BBTI notes its project has been in archive status since 2020."
    },
    {
        id: "bbti-9mm",
        title: "9mm Luger Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/9luger.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph data for selected 9 mm loads."
    },
    {
        id: "bbti-223",
        title: ".223 Rifle Results in fps",
        publisher: "Ballistics by the Inch",
        url: "https://www.ballisticsbytheinch.com/223rifle.html",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Archived barrel-length chronograph data for Remington UMC .223 loads."
    },
    {
        id: "firearmwiki-556",
        title: "5.56 Velocity by Barrel Length",
        publisher: "FirearmWiki",
        url: "https://firearmwiki.com/wiki/5.56_Velocity_by_Barrel_Length",
        sourceKind: "secondary",
        retrievedAt: "2026-05-02",
        notes: "Secondary table compiling RifleShooter.com and other data. Use lower confidence unless validated against the primary article."
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
        id: "rifleshooter-308-168-gm",
        title: ".308 Winchester barrel length and velocity: Federal 168 grain Gold Medal BTHP",
        publisher: "RifleShooter.com",
        url: "https://rifleshooter.com/2015/01/308-winchester-barrel-length-and-velocity-federal-168-grain-gold-medal-bthp/",
        sourceKind: "chronograph",
        retrievedAt: "2026-05-02",
        notes: "Cut-down chronograph test for Federal Gold Medal 168 gr MatchKing BTHP."
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
        id: "legacy-v131",
        title: "Bullet-drop v1.3.1 hard-coded dataset",
        publisher: "bleubanana/Bullet-drop",
        url: "https://github.com/bleubanana/Bullet-drop/blob/main/index.html",
        sourceKind: "legacy",
        retrievedAt: "2026-05-02",
        notes: "Previous project table retained only where a stronger primary/chronograph source has not yet been mapped field-by-field."
    },
    {
        id: "bc-legacy-note",
        title: "BC value retained pending product-level validation",
        publisher: "Bullet Drop data-audit note",
        sourceKind: "documentation",
        retrievedAt: "2026-05-02",
        notes: "BC values marked with this source are explicit estimates or legacy values and should be validated against product-level manufacturer or Doppler data."
    }
];
export function sourceById(id) {
    return SOURCES.find(source => source.id === id);
}
//# sourceMappingURL=sources.js.map