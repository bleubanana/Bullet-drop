import { calculateAtmosphere } from "./core/atmosphere.js";
import { calculateTrajectory } from "./core/trajectory.js";
import type { AmmunitionLoad, BarrelVelocityPoint, ConfidenceLevel, TrajectoryPoint } from "./core/types.js";
import {
  cmToInch,
  fpsToMs,
  formatSigned,
  hPaToInHg,
  inHgToHPa,
  inchToCm,
  kgM3ToLbFt3,
  mToYard,
  mphToMs,
  msToFps,
  msToMph,
  roundTo,
  yardToM
} from "./core/units.js";
import { AMMUNITION, ammunitionById, ammunitionForCaliber, CALIBERS, caliberById, profileByLoadId, sourceById, SOURCES } from "./data/index.js";

const APP_VERSION = "1.4.3";
const DISTANCE_MARK_VALUES = [25, 50, 100, 150, 200, 300] as const;
const ZERO_MARK_VALUES = [25, 50, 100, 150, 200] as const;
const WEATHER_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

const I18N = {
  sv: {
    appEyebrow: "KÄLLSPÅRAD BALLISTIK",
    title: "BULLET DROP",
    titleSub: "REFERENSGUIDE",
    subtitle: "Kulfall & vindavdrift med explicit datakvalitet, källor och osäkerhetsklassning.",
    atmosphere: "ATMOSFÄR",
    language: "Språk",
    units: "Enheter",
    metric: "Metrisk",
    imperial: "Imperial",
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
    showLinear: "Visa linjärt",
    showAngular: "Visa vinkel",
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
    fullWind: "Full value",
    localWeather: "Platsväder",
    useLocalWeather: "Hämta platsväder",
    weatherIdle: "ISA-standard används tills platsväder hämtas.",
    weatherLoading: "Hämtar position och väder…",
    weatherReady: "Platsväder används",
    weatherDenied: "Platsåtkomst nekades — manuella värden används.",
    weatherUnavailable: "Platsväder är inte tillgängligt i denna webbläsare.",
    weatherError: "Kunde inte hämta platsväder — manuella värden används.",
    weatherSource: "Open-Meteo"
  },
  en: {
    appEyebrow: "SOURCE-TRACKED BALLISTICS",
    title: "BULLET DROP",
    titleSub: "REFERENCE GUIDE",
    subtitle: "Bullet drop and wind drift with explicit data quality, sources and uncertainty classification.",
    atmosphere: "ATMOSPHERE",
    language: "Language",
    units: "Units",
    metric: "Metric",
    imperial: "Imperial",
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
    showLinear: "Show linear",
    showAngular: "Show angular",
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
    fullWind: "Full value",
    localWeather: "Local weather",
    useLocalWeather: "Use local weather",
    weatherIdle: "ISA standard is used until local weather is loaded.",
    weatherLoading: "Getting position and weather…",
    weatherReady: "Local weather is active",
    weatherDenied: "Location access denied — manual values are used.",
    weatherUnavailable: "Local weather is not available in this browser.",
    weatherError: "Could not load local weather — manual values are used.",
    weatherSource: "Open-Meteo"
  }
} as const;

type Language = keyof typeof I18N;
type ThemeMode = "light" | "dark" | "system";
type UnitSystem = "metric" | "imperial";
type WindOptionId = "no" | "half" | "full";
type WeatherStatus = "idle" | "loading" | "ready" | "denied" | "unavailable" | "error";

type DistanceMark = {
  displayValue: number;
  distanceM: number;
  label: string;
};

const WIND_OPTIONS: Array<{ id: WindOptionId; label: string; factor: number; descKey: "noWind" | "halfWind" | "fullWind" }> = [
  { id: "no", label: "0°", factor: 0, descKey: "noWind" },
  { id: "half", label: "45°", factor: 0.5, descKey: "halfWind" },
  { id: "full", label: "90°", factor: 1, descKey: "fullWind" }
];

type State = {
  language: Language;
  unitSystem: UnitSystem;
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
  showAngular: boolean;
  weatherStatus: WeatherStatus;
  weatherMessage: string | null;
};

type BarrelCalculation = {
  barrel: BarrelVelocityPoint;
  points: TrajectoryPoint[];
};

type OpenMeteoResponse = {
  current?: {
    time?: string;
    temperature_2m?: number;
    surface_pressure?: number;
    pressure_msl?: number;
  };
};

function safeGetStorage(key: string): string | null {
  try {
    return window.localStorage?.getItem(key) ?? null;
  } catch {
    return null;
  }
}

function safeSetStorage(key: string, value: string): void {
  try {
    window.localStorage?.setItem(key, value);
  } catch {
    // Storage may be blocked in private mode, file:// previews or strict browser policies.
  }
}

function getSystemDarkPreference(): boolean {
  try {
    return typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)").matches : true;
  } catch {
    return true;
  }
}

function getColorSchemeMediaQuery(): MediaQueryList | null {
  try {
    return typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  } catch {
    return null;
  }
}

function readLanguage(): Language {
  const stored = safeGetStorage("language");
  return stored === "en" || stored === "sv" ? stored : "sv";
}

function readThemeMode(): ThemeMode {
  const stored = safeGetStorage("themeMode");
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "dark";
}

function readUnitSystem(): UnitSystem {
  const stored = safeGetStorage("unitSystem");
  return stored === "imperial" || stored === "metric" ? stored : "metric";
}

const initialUnitSystem = readUnitSystem();

const state: State = {
  language: readLanguage(),
  unitSystem: initialUnitSystem,
  themeMode: readThemeMode(),
  systemDark: getSystemDarkPreference(),
  caliberId: "22lr",
  loadId: "cci-standard-velocity-35",
  zeroM: initialUnitSystem === "imperial" ? yardToM(25) : 25,
  sightHeightCm: 2.5,
  temperatureC: 15,
  pressureHPa: 1013.25,
  windSpeedMs: 0,
  windOptionId: "full",
  showAngular: false,
  weatherStatus: "idle",
  weatherMessage: null
};

const root = document.getElementById("app");
if (!root) throw new Error("Missing #app element");
const appRoot: HTMLElement = root;

const mediaQuery = getColorSchemeMediaQuery();
if (mediaQuery) {
  const onThemePreferenceChange = (event: MediaQueryListEvent | MediaQueryList) => {
    state.systemDark = event.matches;
    applyPreferences();
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", onThemePreferenceChange);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(onThemePreferenceChange);
  }
}

function t(key: keyof typeof I18N.sv): string {
  return I18N[state.language][key];
}

function setState(patch: Partial<State>): void {
  Object.assign(state, patch);
  const loads = ammunitionForCaliber(state.caliberId);
  if (!loads.some(load => load.id === state.loadId)) {
    state.loadId = loads[0]?.id ?? AMMUNITION[0]?.id ?? "";
  }
  safeSetStorage("language", state.language);
  safeSetStorage("themeMode", state.themeMode);
  safeSetStorage("unitSystem", state.unitSystem);
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
  document.body.classList.toggle("units-imperial", state.unitSystem === "imperial");
  document.body.classList.toggle("units-metric", state.unitSystem === "metric");
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

function distanceMarks(): DistanceMark[] {
  return DISTANCE_MARK_VALUES.map(value => {
    const distanceM = state.unitSystem === "imperial" ? yardToM(value) : value;
    const unit = state.unitSystem === "imperial" ? "yd" : "m";
    return { displayValue: value, distanceM, label: `${value} ${unit}` };
  });
}

function zeroMarks(): DistanceMark[] {
  return ZERO_MARK_VALUES.map(value => {
    const distanceM = state.unitSystem === "imperial" ? yardToM(value) : value;
    const unit = state.unitSystem === "imperial" ? "yd" : "m";
    return { displayValue: value, distanceM, label: `${value} ${unit}` };
  });
}

function sameDistance(a: number, b: number): boolean {
  return Math.abs(a - b) < 0.05;
}

function formatBarrelLengthHtml(inches: number): string {
  const cm = roundTo(inchToCm(inches), 1).toFixed(1);
  if (state.unitSystem === "metric") return `${cm} cm<br><span>${inches}&quot;</span>`;
  return `${inches}&quot;<br><span>${cm} cm</span>`;
}

function formatVelocityTextFromFps(fps: number): string {
  if (state.unitSystem === "metric") return `${Math.round(fpsToMs(fps))} m/s`;
  return `${Math.round(fps)} fps`;
}

function formatVelocityHtmlFromFps(fps: number): string {
  const ms = Math.round(fpsToMs(fps));
  const roundedFps = Math.round(fps);
  if (state.unitSystem === "metric") return `<strong>${ms}</strong> m/s<br><span>${roundedFps} fps</span>`;
  return `<strong>${roundedFps}</strong> fps<br><span>${ms} m/s</span>`;
}

function sourcedVelocityToFps(value: number, unit: string): number {
  return unit.toLowerCase().includes("m/s") ? msToFps(value) : value;
}

function formatSourcedVelocityHtml(value: number, unit: string): string {
  const fps = sourcedVelocityToFps(value, unit);
  const primary = formatVelocityTextFromFps(fps);
  const sourceText = `${value} ${unit}`;
  return `${escapeHtml(primary)}<br><span>${escapeHtml(sourceText)}</span>`;
}

function formatTemperature(valueC: number): string {
  if (state.unitSystem === "imperial") return `${Math.round(valueC * 9 / 5 + 32)}°F`;
  return `${roundTo(valueC, 1)}°C`;
}

function formatPressure(valueHPa: number): string {
  if (state.unitSystem === "imperial") return `${roundTo(hPaToInHg(valueHPa), 2).toFixed(2)} inHg`;
  return `${roundTo(valueHPa, 0).toFixed(0)} hPa`;
}

function formatWindSpeed(valueMs: number): string {
  if (state.unitSystem === "imperial") return `${roundTo(msToMph(valueMs), 1)} mph`;
  return `${roundTo(valueMs, 1)} m/s`;
}

function formatAirDensity(valueKgM3: number): string {
  if (state.unitSystem === "imperial") return `${kgM3ToLbFt3(valueKgM3).toFixed(3)} lb/ft³`;
  return `${valueKgM3.toFixed(3)} kg/m³`;
}

function formatSoundSpeed(valueMs: number): string {
  if (state.unitSystem === "imperial") return `${Math.round(msToFps(valueMs))} ft/s`;
  return `${Math.round(valueMs)} m/s`;
}

function formatLinearDrop(dropCm: number): string {
  if (state.unitSystem === "imperial") return `${formatSigned(cmToInch(dropCm), 2)} in`;
  return `${formatSigned(dropCm, 1)} cm`;
}

function formatAngularDrop(point: TrajectoryPoint): string {
  if (state.unitSystem === "imperial") return `${formatSigned(point.dropMoa, 2)} moa`;
  return `${formatSigned(point.dropMrad, 2)} mrad`;
}

function formatDropCell(point: TrajectoryPoint, isZero: boolean): { primary: string; secondary: string } {
  if (isZero) {
    return {
      primary: "±0",
      secondary: state.showAngular ? formatLinearDrop(0) : (state.unitSystem === "imperial" ? "0.00 moa" : "0.00 mrad")
    };
  }
  const linear = formatLinearDrop(point.dropCm);
  const angular = formatAngularDrop(point);
  return state.showAngular ? { primary: angular, secondary: linear } : { primary: linear, secondary: angular };
}

function formatWindCell(point: TrajectoryPoint): { primary: string; secondary: string } {
  const linear = state.unitSystem === "imperial"
    ? `${roundTo(cmToInch(point.windDriftCm), 2).toFixed(2)} in`
    : `${roundTo(point.windDriftCm, 1).toFixed(1)} cm`;
  const angular = state.unitSystem === "imperial"
    ? `${roundTo(point.windDriftMoa, 2).toFixed(2)} moa`
    : `${roundTo(point.windDriftMrad, 2).toFixed(2)} mrad`;
  if (point.windDriftCm === 0) return { primary: "±0", secondary: angular };
  return { primary: linear, secondary: angular };
}

function unitAwareDropLegend(): string[] {
  if (state.unitSystem === "imperial") return ["±0–2 in", "2–10 in", "10–30 in", ">30 in"];
  return ["±0–5 cm", "5–25 cm", "25–75 cm", ">75 cm"];
}

function calculateForSelectedLoad(): BarrelCalculation[] {
  const load = ammunitionById(state.loadId);
  const profile = profileByLoadId(load.id);
  const atmosphere = calculateAtmosphere({ temperatureC: state.temperatureC, pressureHPa: state.pressureHPa });
  const windOption = activeWindOption();
  const distancesM = distanceMarks().map(mark => mark.distanceM);

  return profile.points.map(barrel => ({
    barrel,
    points: calculateTrajectory({
      muzzleVelocityMs: fpsToMs(barrel.velocityFps),
      ballisticCoefficientG1: load.ballisticCoefficientG1.value,
      distancesM,
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
  const units: Array<{ id: UnitSystem; label: string }> = [
    { id: "metric", label: t("metric") },
    { id: "imperial", label: t("imperial") }
  ];
  const unitButtons = units.map(unit => `
    <button class="pref-chip ${state.unitSystem === unit.id ? "active" : ""}" data-unit-system="${unit.id}">${escapeHtml(unit.label)}</button>
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
      <div class="pref-group"><span>${t("units")}</span>${unitButtons}</div>
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

function renderNumberControl(label: string, id: string, value: string, min: number, max: number, step: number, unit: string): string {
  return `
    <label class="control">
      <span>${escapeHtml(label)}</span>
      <div class="input-row">
        <input id="${escapeHtml(id)}" type="number" min="${min}" max="${max}" step="${step}" value="${escapeHtml(value)}" />
        <em>${escapeHtml(unit)}</em>
      </div>
    </label>
  `;
}

function renderZeroButtons(): string {
  return zeroMarks().map(mark => `
    <button class="chip ${sameDistance(mark.distanceM, state.zeroM) ? "active" : ""}" data-zero-m="${mark.distanceM}">${mark.label}</button>
  `).join("");
}

function renderSightPresets(): string {
  const presets = [
    { label: t("pistol"), valueCm: 2.5 },
    { label: t("scope"), valueCm: 3.8 },
    { label: t("arIrons"), valueCm: 6.3 }
  ];
  return presets.map(preset => {
    const display = state.unitSystem === "imperial" ? `${roundTo(cmToInch(preset.valueCm), 2)} in` : `${preset.valueCm.toFixed(1)} cm`;
    return `<button class="mini-chip" data-sight-cm="${preset.valueCm}">${escapeHtml(preset.label)} ${display}</button>`;
  }).join("");
}

function renderWindButtons(): string {
  return WIND_OPTIONS.map(option => `
    <button class="chip ${option.id === state.windOptionId ? "active" : ""}" data-wind-option="${option.id}">
      ${option.label}<small>${escapeHtml(t(option.descKey))}</small>
    </button>
  `).join("");
}

function renderDropTable(caliberColor: string, calculations: BarrelCalculation[]): string {
  const marks = distanceMarks();
  const legend = unitAwareDropLegend();
  return `
    <section class="panel table-panel">
      <div class="panel-head">
        <div>
          <h2>${t("calculatedData")}</h2>
          <p>${t("calculatedHelp")}</p>
        </div>
        <button id="toggleUnits" class="ghost-button">${state.showAngular ? t("showLinear") : t("showAngular")}</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("barrel")}</th>
              <th>MV</th>
              <th>${t("source")}</th>
              ${marks.map(mark => `<th class="${sameDistance(mark.distanceM, state.zeroM) ? "zero-col" : ""}">${mark.label}${sameDistance(mark.distanceM, state.zeroM) ? " ◉" : ""}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${calculations.map(calc => `
              <tr>
                <td class="barrel">${formatBarrelLengthHtml(calc.barrel.barrelLengthIn)}</td>
                <td>${formatVelocityHtmlFromFps(calc.barrel.velocityFps)}</td>
                <td><span class="${confidenceClass(calc.barrel.confidence)}">${confidenceLabel(calc.barrel.confidence)}</span></td>
                ${calc.points.map((point, index) => {
                  const mark = marks[index];
                  const isZero = mark ? sameDistance(mark.distanceM, state.zeroM) : sameDistance(point.distanceM, state.zeroM);
                  const display = formatDropCell(point, isZero);
                  return `<td class="${isZero ? "zero-col" : ""}"><strong class="${dropClass(point.dropCm)}">${display.primary}</strong><small>${display.secondary}</small></td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      <div class="legend" style="--accent:${caliberColor}">
        <span><i class="dot good"></i> ${legend[0]}</span>
        <span><i class="dot warn"></i> ${legend[1]}</span>
        <span><i class="dot hot"></i> ${legend[2]}</span>
        <span><i class="dot danger"></i> ${legend[3]}</span>
      </div>
    </section>
  `;
}

function renderWindTable(calculations: BarrelCalculation[]): string {
  const windOption = activeWindOption();
  if (state.windSpeedMs <= 0 || windOption.factor <= 0) return "";
  const marks = distanceMarks();
  return `
    <section class="panel table-panel wind-panel">
      <div class="panel-head">
        <div>
          <h2>${t("windDrift")}</h2>
          <p>${t("windHelpPrefix")}: ${formatWindSpeed(state.windSpeedMs)} · ${windOption.label} · ${escapeHtml(t(windOption.descKey))}.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("barrel")}</th>
              <th>MV</th>
              ${marks.map(mark => `<th>${mark.label}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${calculations.map(calc => `
              <tr>
                <td class="barrel">${formatBarrelLengthHtml(calc.barrel.barrelLengthIn)}</td>
                <td>${formatVelocityTextFromFps(calc.barrel.velocityFps)}</td>
                ${calc.points.map(point => {
                  const display = formatWindCell(point);
                  return `<td><strong class="${driftClass(point.windDriftCm)}">${display.primary}</strong><small>${display.secondary}</small></td>`;
                }).join("")}
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
          <strong>${formatSourcedVelocityHtml(mv.value, mv.unit)}</strong>
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
            <span>${formatBarrelLengthHtml(point.barrelLengthIn)}</span>
            <strong>${formatVelocityTextFromFps(point.velocityFps)}</strong>
            <em>${state.unitSystem === "metric" ? `${Math.round(point.velocityFps)} fps` : `${Math.round(fpsToMs(point.velocityFps))} m/s`}</em>
            <small class="${confidenceClass(point.confidence)}">${confidenceLabel(point.confidence)}</small>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderCribCard(load: AmmunitionLoad, calculations: BarrelCalculation[], caliberColor: string): string {
  const marks = distanceMarks();
  const zeroLabel = zeroMarks().find(mark => sameDistance(mark.distanceM, state.zeroM))?.label ?? `${roundTo(state.zeroM, 1)} m`;
  const sightLabel = state.unitSystem === "imperial" ? `${roundTo(cmToInch(state.sightHeightCm), 2)} in` : `${state.sightHeightCm.toFixed(1)} cm`;
  return `
    <section id="crib" class="panel crib-panel">
      <div class="panel-head">
        <div>
          <h2>${t("cribCard")}</h2>
          <p>${escapeHtml(load.displayName)} · ${t("zero")} ${zeroLabel} · ${t("sightHeight")} ${sightLabel}</p>
        </div>
        <button id="printCrib" class="accent-button" style="--accent:${caliberColor}">${t("print")}</button>
      </div>
      <div class="crib-grid">
        ${calculations.slice(0, 6).map(calc => `
          <article class="crib-card">
            <h3>${formatBarrelLengthHtml(calc.barrel.barrelLengthIn)} · ${formatVelocityTextFromFps(calc.barrel.velocityFps)}</h3>
            ${calc.points.map((point, index) => `
              <div><span>${marks[index]?.label ?? `${roundTo(point.distanceM, 1)} m`}</span><strong>${sameDistance(point.distanceM, state.zeroM) ? "±0" : formatLinearDrop(point.dropCm)}</strong></div>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function weatherStatusText(): string {
  switch (state.weatherStatus) {
    case "loading": return t("weatherLoading");
    case "ready": return state.weatherMessage ? `${t("weatherReady")} · ${state.weatherMessage}` : t("weatherReady");
    case "denied": return t("weatherDenied");
    case "unavailable": return t("weatherUnavailable");
    case "error": return t("weatherError");
    case "idle": return t("weatherIdle");
  }
}

function renderWeatherControl(): string {
  const disabled = state.weatherStatus === "loading" ? "disabled" : "";
  return `
    <div class="weather-block">
      <span class="weather-status weather-${state.weatherStatus}">${weatherStatusText()}</span>
      <button id="weatherButton" class="ghost-button weather-button" ${disabled}>${t("useLocalWeather")}</button>
    </div>
  `;
}

function render(): void {
  const caliber = caliberById(state.caliberId);
  const load = ammunitionById(state.loadId);
  const atmosphere = calculateAtmosphere({ temperatureC: state.temperatureC, pressureHPa: state.pressureHPa });
  const calculations = calculateForSelectedLoad();

  const sightInputValue = state.unitSystem === "imperial" ? roundTo(cmToInch(state.sightHeightCm), 2).toString() : roundTo(state.sightHeightCm, 1).toString();
  const tempInputValue = state.unitSystem === "imperial" ? Math.round(state.temperatureC * 9 / 5 + 32).toString() : roundTo(state.temperatureC, 1).toString();
  const pressureInputValue = state.unitSystem === "imperial" ? hPaToInHg(state.pressureHPa).toFixed(2) : roundTo(state.pressureHPa, 0).toString();
  const windInputValue = state.unitSystem === "imperial" ? roundTo(msToMph(state.windSpeedMs), 1).toString() : roundTo(state.windSpeedMs, 1).toString();
  const sightUnit = state.unitSystem === "imperial" ? "in" : "cm";
  const tempUnit = state.unitSystem === "imperial" ? "°F" : "°C";
  const pressureUnit = state.unitSystem === "imperial" ? "inHg" : "hPa";
  const windUnit = state.unitSystem === "imperial" ? "mph" : "m/s";

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
          <strong>${formatTemperature(state.temperatureC)} · ${formatPressure(state.pressureHPa)}</strong>
          <em>ρ ${formatAirDensity(atmosphere.airDensityKgM3)} · ${formatSoundSpeed(atmosphere.speedOfSoundMs)}</em>
          ${renderWeatherControl()}
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
        ${renderNumberControl(t("sightHeight"), "sightInput", sightInputValue, 0, state.unitSystem === "imperial" ? 5 : 12, state.unitSystem === "imperial" ? 0.05 : 0.1, sightUnit)}
        <div class="control presets">
          <span>${t("sightPresets")}</span>
          <div class="chip-row">${renderSightPresets()}</div>
        </div>
        ${renderNumberControl(t("temperature"), "tempInput", tempInputValue, state.unitSystem === "imperial" ? -22 : -30, state.unitSystem === "imperial" ? 113 : 45, 1, tempUnit)}
        ${renderNumberControl(t("pressure"), "pressureInput", pressureInputValue, state.unitSystem === "imperial" ? 25.1 : 850, state.unitSystem === "imperial" ? 31.9 : 1080, state.unitSystem === "imperial" ? 0.01 : 1, pressureUnit)}
        ${renderNumberControl(t("wind"), "windInput", windInputValue, 0, state.unitSystem === "imperial" ? 56 : 25, state.unitSystem === "imperial" ? 1 : 0.5, windUnit)}
        <div class="control wind-control">
          <span>${t("windAngle")}</span>
          <div class="chip-row">${renderWindButtons()}</div>
        </div>
      </section>

      <section class="load-summary" style="--accent:${caliber.color}">
        <div>
          <p class="eyebrow">${t("selected")}</p>
          <h2>${escapeHtml(caliber.label)} · ${escapeHtml(load.displayName)}</h2>
          <p>${load.bulletWeightGr} gr · ${escapeHtml(load.bulletType)} · BC ${load.ballisticCoefficientG1.value.toFixed(3)} G1 · ${t("nominalMv")} ${formatVelocityTextFromFps(sourcedVelocityToFps(load.nominalMuzzleVelocity.value, load.nominalMuzzleVelocity.unit))}</p>
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

  document.querySelectorAll<HTMLButtonElement>("[data-unit-system]").forEach(button => {
    button.addEventListener("click", () => {
      const nextUnitSystem = (button.dataset.unitSystem as UnitSystem | undefined) ?? state.unitSystem;
      if (nextUnitSystem === state.unitSystem) return;
      setState({ unitSystem: nextUnitSystem, zeroM: nextUnitSystem === "imperial" ? yardToM(25) : 25 });
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-theme-mode]").forEach(button => {
    button.addEventListener("click", () => setState({ themeMode: (button.dataset.themeMode as ThemeMode | undefined) ?? state.themeMode }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-caliber]").forEach(button => {
    button.addEventListener("click", () => setState({ caliberId: button.dataset.caliber ?? state.caliberId }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-zero-m]").forEach(button => {
    button.addEventListener("click", () => setState({ zeroM: Number(button.dataset.zeroM) }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-sight-cm]").forEach(button => {
    button.addEventListener("click", () => setState({ sightHeightCm: Number(button.dataset.sightCm) }));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-wind-option]").forEach(button => {
    button.addEventListener("click", () => setState({ windOptionId: (button.dataset.windOption as WindOptionId | undefined) ?? state.windOptionId }));
  });

  const loadSelect = document.getElementById("loadSelect") as HTMLSelectElement | null;
  loadSelect?.addEventListener("change", () => setState({ loadId: loadSelect.value }));

  const sightInput = document.getElementById("sightInput") as HTMLInputElement | null;
  sightInput?.addEventListener("change", () => {
    const value = Number(sightInput.value);
    setState({ sightHeightCm: state.unitSystem === "imperial" ? inchToCm(value) : value });
  });

  const tempInput = document.getElementById("tempInput") as HTMLInputElement | null;
  tempInput?.addEventListener("change", () => {
    const value = Number(tempInput.value);
    setState({ temperatureC: state.unitSystem === "imperial" ? (value - 32) * 5 / 9 : value, weatherStatus: "idle", weatherMessage: null });
  });

  const pressureInput = document.getElementById("pressureInput") as HTMLInputElement | null;
  pressureInput?.addEventListener("change", () => {
    const value = Number(pressureInput.value);
    setState({ pressureHPa: state.unitSystem === "imperial" ? inHgToHPa(value) : value, weatherStatus: "idle", weatherMessage: null });
  });

  const windInput = document.getElementById("windInput") as HTMLInputElement | null;
  windInput?.addEventListener("change", () => {
    const value = Number(windInput.value);
    setState({ windSpeedMs: state.unitSystem === "imperial" ? mphToMs(value) : value });
  });

  document.getElementById("toggleUnits")?.addEventListener("click", () => setState({ showAngular: !state.showAngular }));
  document.getElementById("printCrib")?.addEventListener("click", () => window.print());
  document.getElementById("weatherButton")?.addEventListener("click", () => requestLocalWeather());
}

let weatherRequestCounter = 0;

function requestLocalWeather(): void {
  if (!("geolocation" in navigator)) {
    setState({ weatherStatus: "unavailable", weatherMessage: null });
    return;
  }

  const requestId = weatherRequestCounter + 1;
  weatherRequestCounter = requestId;
  setState({ weatherStatus: "loading", weatherMessage: null });

  navigator.geolocation.getCurrentPosition(
    position => {
      void fetchLocalWeather(position, requestId);
    },
    error => {
      if (requestId !== weatherRequestCounter) return;
      setState({ weatherStatus: error.code === error.PERMISSION_DENIED ? "denied" : "error", weatherMessage: null });
    },
    { enableHighAccuracy: false, maximumAge: 10 * 60 * 1000, timeout: 8000 }
  );
}

async function fetchLocalWeather(position: GeolocationPosition, requestId: number): Promise<void> {
  try {
    const params = new URLSearchParams({
      latitude: position.coords.latitude.toFixed(5),
      longitude: position.coords.longitude.toFixed(5),
      current: "temperature_2m,surface_pressure",
      temperature_unit: "celsius",
      wind_speed_unit: "ms",
      timezone: "auto",
      forecast_days: "1"
    });
    const response = await fetch(`${WEATHER_ENDPOINT}?${params.toString()}`);
    if (!response.ok) throw new Error(`Weather request failed: ${response.status}`);
    const data = await response.json() as OpenMeteoResponse;
    const temp = data.current?.temperature_2m;
    const pressure = data.current?.surface_pressure ?? data.current?.pressure_msl;
    if (typeof temp !== "number" || typeof pressure !== "number") throw new Error("Weather response missing temperature or pressure");
    if (requestId !== weatherRequestCounter) return;
    const weatherTime = data.current?.time ? `${t("weatherSource")} ${data.current.time.replace("T", " ")}` : t("weatherSource");
    setState({
      temperatureC: roundTo(temp, 1),
      pressureHPa: roundTo(pressure, 0),
      weatherStatus: "ready",
      weatherMessage: weatherTime
    });
  } catch (error) {
    console.warn("Local weather lookup failed", error);
    if (requestId !== weatherRequestCounter) return;
    setState({ weatherStatus: "error", weatherMessage: null });
  }
}

function renderFatalError(error: unknown): void {
  console.error("Bullet Drop failed to start", error);
  const message = error instanceof Error ? error.message : String(error);
  appRoot.innerHTML = `
    <div class="shell fatal-shell">
      <section class="panel fatal-panel">
        <p class="eyebrow">BULLET DROP · STARTFEL</p>
        <h1>Sidan kunde inte starta</h1>
        <p>Detta är ett skyddsnät som visar fel i stället för en svart sida.</p>
        <pre>${escapeHtml(message)}</pre>
        <p class="muted">Prova hård omladdning: Ctrl+F5. Om problemet kvarstår, kontrollera att <code>assets/main.js</code> och <code>assets/styles.css</code> finns på samma nivå som <code>index.html</code>.</p>
      </section>
    </div>
  `;
}

try {
  applyPreferences();
  render();

  window.addEventListener("load", () => {
    requestLocalWeather();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw-js.js").catch(error => {
        console.warn("Service worker registration failed", error);
      });
    }
  });
} catch (error) {
  renderFatalError(error);
}

export const __appVersion = APP_VERSION;
export const __defaultState = state;
export const __calculateForSelectedLoad = calculateForSelectedLoad;
export const __msToFps = msToFps;
export const __mToYard = mToYard;
