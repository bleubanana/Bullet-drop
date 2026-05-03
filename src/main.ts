import { calculateAtmosphere } from "./core/atmosphere.js";
import { calculateTrajectory } from "./core/trajectory.js";
import type { AmmunitionLoad, BarrelVelocityPoint, ConfidenceLevel, TrajectoryPoint } from "./core/types.js";
import { fpsToMs, formatSigned, msToFps, roundTo } from "./core/units.js";
import { AMMUNITION, ammunitionById, ammunitionForCaliber, CALIBERS, caliberById, profileByLoadId, sourceById, SOURCES } from "./data/index.js";

const APP_VERSION = "1.4.1";
const DISTANCES_M = [25, 50, 100, 150, 200, 300];
const ZERO_OPTIONS_M = [25, 50, 100, 150, 200];

const I18N = {
  sv: {
    appEyebrow: "KÄLLSPÅRAD BALLISTIK",
    title: "BULLET DROP",
    titleSub: "REFERENSGUIDE",
    subtitle: "Kulfall & vindavdrift med explicit datakvalitet, källor och osäkerhetsklassning.",
    atmosphere: "ATMOSFÄR",
    language: "Språk",
    theme: "Tema",
    light: "Ljust",
    dark: "Mörkt",
    system: "System",
    load: "Laddning",
    zero: "Nollning",
    sightHeight: "Sikthöjd över pipa",
    sightPresets: "Snabbval sikthöjd",
    pistol: "Pistol",
    scope: "Kikare",
    arIrons: "AR-järn",
    temperature: "Temperatur",
    pressure: "Lufttryck",
    wind: "Vind",
    windAngle: "Vindvinkel",
    calculatedData: "■ BERÄKNAD DATA",
    calculatedHelp: "Kulfall relativt siktlinje. Nollningskolumnen markeras med ◉.",
    showCm: "Visa cm",
    showMrad: "Visa MRAD",
    barrel: "Pipa",
    source: "Källa",
    windDrift: "■ VINDAVDRIFT",
    windHelpPrefix: "Approximation via lag-regel",
    selected: "VALD RAD",
    showSources: "Visa källor",
    dataQuality: "Datakvalitet",
    nominalMv: "Nominal MV",
    bc: "BC",
    barrelData: "Pipdata",
    publishedMeasured: "publicerad/mätt",
    sourcesForLoad: "Källor för vald laddning",
    comments: "Kommentarer",
    muzzleVelocity: "Utgångshastighet — vald laddning",
    mvHelp: "Varje rad visar metod och källklassning.",
    cribCard: "SNABBKORT",
    print: "Skriv ut",
    notes: "OBSERVERA",
    sourceCatalog: "Källkatalog",
    catalogText: "källposter finns i datamodellen. Endast relevanta källor för vald laddning visas öppet ovan.",
    footerLeft: "G1 numerisk integration · spårbar data",
    footerRight: "tacticaljunkyard.com",
    note1: "Kulfall beräknas relativt siktlinje med sikthöjd och vald nollning.",
    note2: "G1-drag använder numerisk integration; vind är separat approximation via lag-regel.",
    note3: "Temperatur påverkar både lufttäthet och ljudhastighet/Mach.",
    note4: "Alla piplängdsvärden ska verifieras med din ammunition, ditt vapen och din nollning.",
    high: "Hög",
    medium: "Medel",
    limited: "Begränsad",
    low: "Låg",
    highDetail: "Majoriteten av kritiska värden har tillverkar- eller mätt källa.",
    mediumDetail: "Blandning av mätta, publicerade och härledda värden.",
    limitedDetail: "Flera viktiga värden är härledda och bör verifieras.",
    lowDetail: "Estimat dominerar; använd främst som struktur/referens.",
    manufacturer: "Tillverkare",
    measured: "Mätt 3:e part",
    derived: "Härledd",
    estimate: "Estimat",
    noWind: "Medvind/motvind",
    halfWind: "Half value",
    fullWind: "Full value"
  },
  en: {
    appEyebrow: "SOURCE-TRACKED BALLISTICS",
    title: "BULLET DROP",
    titleSub: "REFERENCE GUIDE",
    subtitle: "Bullet drop and wind drift with explicit data quality, sources and uncertainty classification.",
    atmosphere: "ATMOSPHERE",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    load: "Load",
    zero: "Zero",
    sightHeight: "Sight height above bore",
    sightPresets: "Sight height presets",
    pistol: "Pistol",
    scope: "Scope",
    arIrons: "AR irons",
    temperature: "Temperature",
    pressure: "Pressure",
    wind: "Wind",
    windAngle: "Wind angle",
    calculatedData: "■ CALCULATED DATA",
    calculatedHelp: "Drop relative to line of sight. The zero column is marked with ◉.",
    showCm: "Show cm",
    showMrad: "Show MRAD",
    barrel: "Barrel",
    source: "Source",
    windDrift: "■ WIND DRIFT",
    windHelpPrefix: "Lag-rule approximation",
    selected: "SELECTED ROW",
    showSources: "Show sources",
    dataQuality: "Data quality",
    nominalMv: "Nominal MV",
    bc: "BC",
    barrelData: "Barrel data",
    publishedMeasured: "published/measured",
    sourcesForLoad: "Sources for selected load",
    comments: "Comments",
    muzzleVelocity: "Muzzle velocity — selected load",
    mvHelp: "Each row shows method and source confidence.",
    cribCard: "CRIB CARD",
    print: "Print",
    notes: "NOTES",
    sourceCatalog: "Source catalog",
    catalogText: "source records exist in the data model. Only selected-load sources are expanded above.",
    footerLeft: "G1 numerical integration · traceable data",
    footerRight: "tacticaljunkyard.com",
    note1: "Drop is calculated relative to line of sight with sight height and selected zero.",
    note2: "G1 drag uses numerical integration; wind is a separate lag-rule approximation.",
    note3: "Temperature affects both air density and speed of sound/Mach.",
    note4: "Always verify barrel-length values with your ammunition, firearm and zero.",
    high: "High",
    medium: "Medium",
    limited: "Limited",
    low: "Low",
    highDetail: "Most critical values have manufacturer or measured sources.",
    mediumDetail: "Mixed measured, published and derived values.",
    limitedDetail: "Several important values are derived and should be verified.",
    lowDetail: "Estimates dominate; use primarily as structure/reference.",
    manufacturer: "Manufacturer",
    measured: "Measured 3rd party",
    derived: "Derived",
    estimate: "Estimate",
    noWind: "Tail/head wind",
    halfWind: "Half value",
    fullWind: "Full value"
  }
} as const;

type Language = keyof typeof I18N;
type ThemeMode = "light" | "dark" | "system";
type WindOptionId = "no" | "half" | "full";

const WIND_OPTIONS: Array<{ id: WindOptionId; label: string; factor: number; descKey: "noWind" | "halfWind" | "fullWind" }> = [
  { id: "no", label: "0°", factor: 0, descKey: "noWind" },
  { id: "half", label: "45°", factor: 0.5, descKey: "halfWind" },
  { id: "full", label: "90°", factor: 1, descKey: "fullWind" }
];

type State = {
  language: Language;
  themeMode: ThemeMode;
  systemDark: boolean;
  caliberId: string;
  loadId: string;
  zeroM: number;
  sightHeightCm: number;
  temperatureC: number;
  pressureHPa: number;
  windSpeedMs: number;
  windOptionId: WindOptionId;
  showMrad: boolean;
};

type BarrelCalculation = {
  barrel: BarrelVelocityPoint;
  points: TrajectoryPoint[];
};

function readLanguage(): Language {
  const stored = localStorage.getItem("language");
  return stored === "en" || stored === "sv" ? stored : "sv";
}

function readThemeMode(): ThemeMode {
  const stored = localStorage.getItem("themeMode");
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
}

const state: State = {
  language: readLanguage(),
  themeMode: readThemeMode(),
  systemDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  caliberId: "22lr",
  loadId: "cci-standard-velocity-35",
  zeroM: 25,
  sightHeightCm: 2.5,
  temperatureC: 15,
  pressureHPa: 1013.25,
  windSpeedMs: 0,
  windOptionId: "full",
  showMrad: false
};

const root = document.getElementById("app");
if (!root) throw new Error("Missing #app element");
const appRoot: HTMLElement = root;

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
mediaQuery.addEventListener("change", event => {
  state.systemDark = event.matches;
  applyPreferences();
});

function t(key: keyof typeof I18N.sv): string {
  return I18N[state.language][key];
}

function setState(patch: Partial<State>): void {
  Object.assign(state, patch);
  const loads = ammunitionForCaliber(state.caliberId);
  if (!loads.some(load => load.id === state.loadId)) {
    state.loadId = loads[0]?.id ?? AMMUNITION[0]?.id ?? "";
  }
  localStorage.setItem("language", state.language);
  localStorage.setItem("themeMode", state.themeMode);
  applyPreferences();
  render();
}

function isDarkTheme(): boolean {
  return state.themeMode === "dark" || (state.themeMode === "system" && state.systemDark);
}

function applyPreferences(): void {
  const dark = isDarkTheme();
  document.documentElement.lang = state.language;
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  document.body.classList.toggle("theme-light", !dark);
  document.body.classList.toggle("theme-dark", dark);
  document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", dark ? "#080b10" : "#f8fafc");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function confidenceLabel(level: ConfidenceLevel): string {
  switch (level) {
    case "manufacturer-published": return t("manufacturer");
    case "measured-third-party": return t("measured");
    case "derived": return t("derived");
    case "legacy-estimate": return t("estimate");
  }
}

function confidenceScore(level: ConfidenceLevel): number {
  switch (level) {
    case "manufacturer-published": return 4;
    case "measured-third-party": return 3;
    case "derived": return 2;
    case "legacy-estimate": return 1;
  }
}

function confidenceClass(level: ConfidenceLevel): string {
  return `confidence confidence-${level}`;
}

function dropClass(value: number): string {
  const abs = Math.abs(value);
  if (abs === 0) return "drop-green";
  if (abs <= 5) return "drop-green";
  if (abs <= 25) return "drop-yellow";
  if (abs <= 75) return "drop-orange";
  return "drop-red";
}

function driftClass(value: number): string {
  const abs = Math.abs(value);
  if (abs === 0) return "wind-muted";
  if (abs <= 5) return "wind-cyan";
  if (abs <= 20) return "wind-blue";
  if (abs <= 50) return "wind-violet";
  return "wind-purple";
}

function activeWindOption(): typeof WIND_OPTIONS[number] {
  return WIND_OPTIONS.find(option => option.id === state.windOptionId) ?? WIND_OPTIONS[WIND_OPTIONS.length - 1]!;
}

function calculateForSelectedLoad(): BarrelCalculation[] {
  const load = ammunitionById(state.loadId);
  const profile = profileByLoadId(load.id);
  const atmosphere = calculateAtmosphere({ temperatureC: state.temperatureC, pressureHPa: state.pressureHPa });
  const windOption = activeWindOption();

  return profile.points.map(barrel => ({
    barrel,
    points: calculateTrajectory({
      muzzleVelocityMs: fpsToMs(barrel.velocityFps),
      ballisticCoefficientG1: load.ballisticCoefficientG1.value,
      distancesM: DISTANCES_M,
      zeroM: state.zeroM,
      sightHeightCm: state.sightHeightCm,
      atmosphere,
      windSpeedMs: state.windSpeedMs,
      windValueFactor: windOption.factor
    })
  }));
}

function dataQualitySummary(load: AmmunitionLoad): { score: number; label: string; detail: string } {
  const profile = profileByLoadId(load.id);
  const scores = [
    confidenceScore(load.nominalMuzzleVelocity.confidence),
    confidenceScore(load.ballisticCoefficientG1.confidence),
    ...profile.points.map(point => confidenceScore(point.confidence))
  ];
  const average = scores.reduce((sum, item) => sum + item, 0) / scores.length;
  if (average >= 3.5) return { score: average, label: t("high"), detail: t("highDetail") };
  if (average >= 2.5) return { score: average, label: t("medium"), detail: t("mediumDetail") };
  if (average >= 1.8) return { score: average, label: t("limited"), detail: t("limitedDetail") };
  return { score: average, label: t("low"), detail: t("lowDetail") };
}

function renderPreferenceBar(): string {
  const langButtons = (["sv", "en"] as Language[]).map(language => `
    <button class="pref-chip ${state.language === language ? "active" : ""}" data-language="${language}">${language.toUpperCase()}</button>
  `).join("");
  const themes: Array<{ id: ThemeMode; label: string }> = [
    { id: "light", label: t("light") },
    { id: "dark", label: t("dark") },
    { id: "system", label: t("system") }
  ];
  const themeButtons = themes.map(theme => `
    <button class="pref-chip ${state.themeMode === theme.id ? "active" : ""}" data-theme-mode="${theme.id}">${escapeHtml(theme.label)}</button>
  `).join("");
  return `
    <div class="pref-bar">
      <div class="pref-group"><span>${t("language")}</span>${langButtons}</div>
      <div class="pref-group"><span>${t("theme")}</span>${themeButtons}</div>
    </div>
  `;
}

function renderCaliberTabs(): string {
  return CALIBERS.map(caliber => `
    <button class="tab ${caliber.id === state.caliberId ? "active" : ""}" data-caliber="${escapeHtml(caliber.id)}" style="--accent:${caliber.color};--glow:${caliber.glow}">
      ${escapeHtml(caliber.label)}
    </button>
  `).join("");
}

function renderLoadOptions(): string {
  return ammunitionForCaliber(state.caliberId).map(load => `
    <option value="${escapeHtml(load.id)}" ${load.id === state.loadId ? "selected" : ""}>
      ${escapeHtml(load.displayName)}
    </option>
  `).join("");
}

function renderNumberControl(label: string, id: string, value: number, min: number, max: number, step: number, unit: string): string {
  return `
    <label class="control">
      <span>${escapeHtml(label)}</span>
      <div class="input-row">
        <input id="${escapeHtml(id)}" type="number" min="${min}" max="${max}" step="${step}" value="${value}" />
        <em>${escapeHtml(unit)}</em>
      </div>
    </label>
  `;
}

function renderZeroButtons(): string {
  return ZERO_OPTIONS_M.map(zero => `
    <button class="chip ${zero === state.zeroM ? "active" : ""}" data-zero="${zero}">${zero} m</button>
  `).join("");
}

function renderSightPresets(): string {
  const presets = [
    { label: t("pistol"), value: 2.5 },
    { label: t("scope"), value: 3.8 },
    { label: t("arIrons"), value: 6.3 }
  ];
  return presets.map(preset => `
    <button class="mini-chip" data-sight="${preset.value}">${escapeHtml(preset.label)} ${preset.value.toFixed(1)}</button>
  `).join("");
}

function renderWindButtons(): string {
  return WIND_OPTIONS.map(option => `
    <button class="chip ${option.id === state.windOptionId ? "active" : ""}" data-wind-option="${option.id}">
      ${option.label}<small>${escapeHtml(t(option.descKey))}</small>
    </button>
  `).join("");
}

function renderDropTable(caliberColor: string, calculations: BarrelCalculation[]): string {
  const unitHeader = state.showMrad ? "DROP / MRAD" : "DROP / CM";
  return `
    <section class="panel table-panel">
      <div class="panel-head">
        <div>
          <h2>${t("calculatedData")}</h2>
          <p>${t("calculatedHelp")}</p>
        </div>
        <button id="toggleUnits" class="ghost-button">${state.showMrad ? t("showCm") : t("showMrad")}</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("barrel")}</th>
              <th>MV</th>
              <th>${t("source")}</th>
              ${DISTANCES_M.map(distance => `<th class="${distance === state.zeroM ? "zero-col" : ""}">${distance} m${distance === state.zeroM ? " ◉" : ""}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${calculations.map(calc => `
              <tr>
                <td class="barrel">${calc.barrel.barrelLengthIn}&quot;</td>
                <td><strong>${Math.round(calc.barrel.velocityFps)}</strong> fps<br><span>${Math.round(fpsToMs(calc.barrel.velocityFps))} m/s</span></td>
                <td><span class="${confidenceClass(calc.barrel.confidence)}">${confidenceLabel(calc.barrel.confidence)}</span></td>
                ${calc.points.map(point => {
                  const value = state.showMrad ? point.dropMrad : point.dropCm;
                  const display = point.distanceM === state.zeroM ? "±0" : formatSigned(value, state.showMrad ? 2 : 1);
                  const sub = state.showMrad ? `${formatSigned(point.dropCm, 1)} cm` : `${formatSigned(point.dropMrad, 2)} mrad`;
                  return `<td class="${point.distanceM === state.zeroM ? "zero-col" : ""}"><strong class="${dropClass(point.dropCm)}">${display}</strong><small>${sub}</small></td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="legend" style="--accent:${caliberColor}">
        <span><i class="dot good"></i> ±0–5 cm</span>
        <span><i class="dot warn"></i> 5–25 cm</span>
        <span><i class="dot hot"></i> 25–75 cm</span>
        <span><i class="dot danger"></i> &gt;75 cm</span>
      </div>
      <span class="sr-only">${unitHeader}</span>
    </section>
  `;
}

function renderWindTable(calculations: BarrelCalculation[]): string {
  const windOption = activeWindOption();
  if (state.windSpeedMs <= 0 || windOption.factor <= 0) return "";
  return `
    <section class="panel table-panel wind-panel">
      <div class="panel-head">
        <div>
          <h2>${t("windDrift")}</h2>
          <p>${t("windHelpPrefix")}: ${state.windSpeedMs} m/s · ${windOption.label} · ${escapeHtml(t(windOption.descKey))}.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("barrel")}</th>
              <th>MV</th>
              ${DISTANCES_M.map(distance => `<th>${distance} m</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${calculations.map(calc => `
              <tr>
                <td class="barrel">${calc.barrel.barrelLengthIn}&quot;</td>
                <td>${Math.round(calc.barrel.velocityFps)} fps</td>
                ${calc.points.map(point => `
                  <td><strong class="${driftClass(point.windDriftCm)}">${point.windDriftCm === 0 ? "±0" : roundTo(point.windDriftCm, 1).toFixed(1)}</strong><small>${roundTo(point.windDriftMrad, 2).toFixed(2)} mrad</small></td>
                `).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSourceLink(sourceId: string): string {
  const source = sourceById(sourceId);
  if (!source) return `<span class="source-missing">${escapeHtml(sourceId)}</span>`;
  const title = `${source.publisher}: ${source.title}`;
  if (!source.url) return `<span title="${escapeHtml(source.notes ?? "")}">${escapeHtml(title)}</span>`;
  return `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer" title="${escapeHtml(source.notes ?? "")}">${escapeHtml(title)}</a>`;
}

function renderDataAudit(load: AmmunitionLoad): string {
  const profile = profileByLoadId(load.id);
  const usedSourceIds = new Set<string>([
    ...load.nominalMuzzleVelocity.sourceRefs,
    ...load.ballisticCoefficientG1.sourceRefs,
    ...profile.points.flatMap(point => point.sourceRefs)
  ]);
  const quality = dataQualitySummary(load);
  const bc = load.ballisticCoefficientG1;
  const mv = load.nominalMuzzleVelocity;
  const measuredCount = profile.points.filter(point => point.confidence === "measured-third-party" || point.confidence === "manufacturer-published").length;

  return `
    <aside class="panel audit-panel">
      <div class="audit-top">
        <div>
          <h2>${t("dataQuality")}: ${quality.label}</h2>
          <p>${quality.detail}</p>
        </div>
        <div class="quality-meter" title="${quality.score.toFixed(2)} / 4">
          <strong>${quality.score.toFixed(1)}</strong><span>/4</span>
        </div>
      </div>

      <div class="audit-grid">
        <div>
          <span class="audit-label">${t("nominalMv")}</span>
          <strong>${mv.value} ${mv.unit}</strong>
          <em class="${confidenceClass(mv.confidence)}">${confidenceLabel(mv.confidence)}</em>
        </div>
        <div>
          <span class="audit-label">${t("bc")}</span>
          <strong>${bc.value.toFixed(3)} ${bc.unit}</strong>
          <em class="${confidenceClass(bc.confidence)}">${confidenceLabel(bc.confidence)}</em>
        </div>
        <div>
          <span class="audit-label">${t("barrelData")}</span>
          <strong>${measuredCount}/${profile.points.length}</strong>
          <em>${t("publishedMeasured")}</em>
        </div>
      </div>

      <details open>
        <summary>${t("sourcesForLoad")}</summary>
        <ul class="source-list">
          ${[...usedSourceIds].map(sourceId => `<li>${renderSourceLink(sourceId)}</li>`).join("")}
        </ul>
      </details>

      <details>
        <summary>${t("comments")}</summary>
        <ul class="notes-list">
          ${load.notes.map(note => `<li>${escapeHtml(note)}</li>`).join("")}
          ${profile.notes ? `<li>${escapeHtml(profile.notes)}</li>` : ""}
        </ul>
      </details>
    </aside>
  `;
}

function renderMuzzleVelocityPanel(load: AmmunitionLoad): string {
  const profile = profileByLoadId(load.id);
  return `
    <section class="panel mv-panel">
      <div class="panel-head compact">
        <h2>${t("muzzleVelocity")}</h2>
        <p>${t("mvHelp")}</p>
      </div>
      <div class="mv-grid">
        ${profile.points.map(point => `
          <div class="mv-card">
            <span>${point.barrelLengthIn}&quot;</span>
            <strong>${Math.round(point.velocityFps)} fps</strong>
            <em>${Math.round(fpsToMs(point.velocityFps))} m/s</em>
            <small class="${confidenceClass(point.confidence)}">${confidenceLabel(point.confidence)}</small>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCribCard(load: AmmunitionLoad, calculations: BarrelCalculation[], caliberColor: string): string {
  return `
    <section id="crib" class="panel crib-panel">
      <div class="panel-head">
        <div>
          <h2>${t("cribCard")}</h2>
          <p>${escapeHtml(load.displayName)} · ${t("zero")} ${state.zeroM} m · ${t("sightHeight")} ${state.sightHeightCm.toFixed(1)} cm</p>
        </div>
        <button id="printCrib" class="accent-button" style="--accent:${caliberColor}">${t("print")}</button>
      </div>
      <div class="crib-grid">
        ${calculations.slice(0, 6).map(calc => `
          <article class="crib-card">
            <h3>${calc.barrel.barrelLengthIn}&quot; · ${Math.round(calc.barrel.velocityFps)} fps</h3>
            ${calc.points.map(point => `
              <div><span>${point.distanceM} m</span><strong>${point.distanceM === state.zeroM ? "±0" : formatSigned(point.dropCm, 1)} cm</strong></div>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function render(): void {
  const caliber = caliberById(state.caliberId);
  const load = ammunitionById(state.loadId);
  const atmosphere = calculateAtmosphere({ temperatureC: state.temperatureC, pressureHPa: state.pressureHPa });
  const calculations = calculateForSelectedLoad();

  appRoot.innerHTML = `
    <div class="shell" style="--accent:${caliber.color};--glow:${caliber.glow}">
      ${renderPreferenceBar()}
      <header class="hero">
        <div class="hero-copy">
          <p class="eyebrow">${t("appEyebrow")} · v${APP_VERSION}</p>
          <h1>${t("title")} <span>${t("titleSub")}</span></h1>
          <p class="subtitle">${t("subtitle")}</p>
        </div>
        <div class="hero-card">
          <span>${t("atmosphere")}</span>
          <strong>${state.temperatureC}°C · ${state.pressureHPa} hPa</strong>
          <em>ρ ${atmosphere.airDensityKgM3.toFixed(3)} kg/m³ · ${Math.round(atmosphere.speedOfSoundMs)} m/s</em>
        </div>
      </header>

      <nav class="tabs" aria-label="Kaliber">
        ${renderCaliberTabs()}
      </nav>

      <section class="panel controls-panel">
        <div class="control wide">
          <span>${t("load")}</span>
          <select id="loadSelect">${renderLoadOptions()}</select>
        </div>
        <div class="control zero-control">
          <span>${t("zero")}</span>
          <div class="chip-row">${renderZeroButtons()}</div>
        </div>
        ${renderNumberControl(t("sightHeight"), "sightInput", state.sightHeightCm, 0, 12, 0.1, "cm")}
        <div class="control presets">
          <span>${t("sightPresets")}</span>
          <div class="chip-row">${renderSightPresets()}</div>
        </div>
        ${renderNumberControl(t("temperature"), "tempInput", state.temperatureC, -30, 45, 1, "°C")}
        ${renderNumberControl(t("pressure"), "pressureInput", state.pressureHPa, 850, 1080, 1, "hPa")}
        ${renderNumberControl(t("wind"), "windInput", state.windSpeedMs, 0, 25, 0.5, "m/s")}
        <div class="control wind-control">
          <span>${t("windAngle")}</span>
          <div class="chip-row">${renderWindButtons()}</div>
        </div>
      </section>

      <section class="load-summary" style="--accent:${caliber.color}">
        <div>
          <p class="eyebrow">${t("selected")}</p>
          <h2>${escapeHtml(caliber.label)} · ${escapeHtml(load.displayName)}</h2>
          <p>${load.bulletWeightGr} gr · ${escapeHtml(load.bulletType)} · BC ${load.ballisticCoefficientG1.value.toFixed(3)} G1 · ${t("nominalMv")} ${load.nominalMuzzleVelocity.value} ${load.nominalMuzzleVelocity.unit}</p>
        </div>
        <a href="#audit" class="accent-link">${t("showSources")}</a>
      </section>

      <div class="main-grid">
        <div class="stack">
          ${renderDropTable(caliber.color, calculations)}
          ${renderWindTable(calculations)}
          ${renderMuzzleVelocityPanel(load)}
          ${renderCribCard(load, calculations, caliber.color)}
        </div>
        <div id="audit" class="stack side-stack">
          ${renderDataAudit(load)}
          <section class="panel notes-panel">
            <h2>${t("notes")}</h2>
            <ul>
              <li>${t("note1")}</li>
              <li>${t("note2")}</li>
              <li>${t("note3")}</li>
              <li>${t("note4")}</li>
            </ul>
          </section>
          <section class="panel source-catalog">
            <h2>${t("sourceCatalog")}</h2>
            <p>${SOURCES.length} ${t("catalogText")}</p>
          </section>
        </div>
      </div>

      <footer class="footer">
        <span>${t("footerLeft")} · cache ${APP_VERSION}</span>
        <span>${t("footerRight")}</span>
      </footer>
    </div>
  `;

  bindEvents();
}

function bindEvents(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-language]").forEach(button => {
    button.addEventListener("click", () => setState({ language: (button.dataset.language as Language | undefined) ?? state.language }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-theme-mode]").forEach(button => {
    button.addEventListener("click", () => setState({ themeMode: (button.dataset.themeMode as ThemeMode | undefined) ?? state.themeMode }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-caliber]").forEach(button => {
    button.addEventListener("click", () => setState({ caliberId: button.dataset.caliber ?? state.caliberId }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-zero]").forEach(button => {
    button.addEventListener("click", () => setState({ zeroM: Number(button.dataset.zero) }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-sight]").forEach(button => {
    button.addEventListener("click", () => setState({ sightHeightCm: Number(button.dataset.sight) }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-wind-option]").forEach(button => {
    button.addEventListener("click", () => setState({ windOptionId: (button.dataset.windOption as WindOptionId | undefined) ?? state.windOptionId }));
  });

  const loadSelect = document.getElementById("loadSelect") as HTMLSelectElement | null;
  loadSelect?.addEventListener("change", () => setState({ loadId: loadSelect.value }));

  const sightInput = document.getElementById("sightInput") as HTMLInputElement | null;
  sightInput?.addEventListener("change", () => setState({ sightHeightCm: Number(sightInput.value) }));

  const tempInput = document.getElementById("tempInput") as HTMLInputElement | null;
  tempInput?.addEventListener("change", () => setState({ temperatureC: Number(tempInput.value) }));

  const pressureInput = document.getElementById("pressureInput") as HTMLInputElement | null;
  pressureInput?.addEventListener("change", () => setState({ pressureHPa: Number(pressureInput.value) }));

  const windInput = document.getElementById("windInput") as HTMLInputElement | null;
  windInput?.addEventListener("change", () => setState({ windSpeedMs: Number(windInput.value) }));

  document.getElementById("toggleUnits")?.addEventListener("click", () => setState({ showMrad: !state.showMrad }));
  document.getElementById("printCrib")?.addEventListener("click", () => window.print());
}

applyPreferences();
render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw-js.js").catch(error => {
      console.warn("Service worker registration failed", error);
    });
  });
}

export const __appVersion = APP_VERSION;
export const __defaultState = state;
export const __calculateForSelectedLoad = calculateForSelectedLoad;
export const __msToFps = msToFps;
