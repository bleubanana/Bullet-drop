import { calculateAtmosphere } from "./core/atmosphere.js";
import { calculateTrajectory } from "./core/trajectory.js";
import type { AmmunitionLoad, BarrelVelocityPoint, ConfidenceLevel, TrajectoryPoint } from "./core/types.js";
import { fpsToMs, formatSigned, msToFps, roundTo } from "./core/units.js";
import { AMMUNITION, ammunitionById, ammunitionForCaliber, BARREL_PROFILES, CALIBERS, caliberById, profileByLoadId, sourceById, SOURCES } from "./data/index.js";

const APP_VERSION = "1.4.0";
const DISTANCES_M = [25, 50, 100, 150, 200, 300];
const ZERO_OPTIONS_M = [25, 50, 100, 150, 200];
const WIND_OPTIONS = [
  { id: "no", label: "0°", factor: 0, desc: "Medvind/motvind" },
  { id: "half", label: "45°", factor: 0.5, desc: "Half value" },
  { id: "full", label: "90°", factor: 1, desc: "Full value" }
] as const;

type WindOptionId = typeof WIND_OPTIONS[number]["id"];

type State = {
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

const state: State = {
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

function setState(patch: Partial<State>): void {
  Object.assign(state, patch);
  const loads = ammunitionForCaliber(state.caliberId);
  if (!loads.some(load => load.id === state.loadId)) {
    state.loadId = loads[0]?.id ?? AMMUNITION[0]?.id ?? "";
  }
  render();
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
    case "manufacturer-published": return "Tillverkare";
    case "measured-third-party": return "Mätt 3:e part";
    case "derived": return "Härledd";
    case "legacy-estimate": return "Legacy/estimat";
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
  return WIND_OPTIONS.find(option => option.id === state.windOptionId) ?? WIND_OPTIONS[2];
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
  if (average >= 3.5) return { score: average, label: "Hög", detail: "Majoriteten av kritiska värden har tillverkar- eller mätt källa." };
  if (average >= 2.5) return { score: average, label: "Medel", detail: "Blandning av mätta, publicerade och härledda värden." };
  if (average >= 1.8) return { score: average, label: "Begränsad", detail: "Flera viktiga värden är härledda och bör verifieras." };
  return { score: average, label: "Låg", detail: "Legacy-estimat dominerar; använd främst som struktur/referens." };
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
    { label: "Pistol", value: 2.5 },
    { label: "Kikare", value: 3.8 },
    { label: "AR-järn", value: 6.3 }
  ];
  return presets.map(preset => `
    <button class="mini-chip" data-sight="${preset.value}">${preset.label} ${preset.value.toFixed(1)}</button>
  `).join("");
}

function renderWindButtons(): string {
  return WIND_OPTIONS.map(option => `
    <button class="chip ${option.id === state.windOptionId ? "active" : ""}" data-wind-option="${option.id}">
      ${option.label}<small>${option.desc}</small>
    </button>
  `).join("");
}

function renderDropTable(caliberColor: string, calculations: BarrelCalculation[]): string {
  const unitHeader = state.showMrad ? "DROP / MRAD" : "DROP / CM";
  return `
    <section class="panel table-panel">
      <div class="panel-head">
        <div>
          <h2>■ BERÄKNAD DATA</h2>
          <p>Kulfall relativt siktlinje. Nollningskolumnen markeras med ◉.</p>
        </div>
        <button id="toggleUnits" class="ghost-button">${state.showMrad ? "Visa cm" : "Visa MRAD"}</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pipa</th>
              <th>MV</th>
              <th>Källa</th>
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
    </section>
  `;
}

function renderWindTable(calculations: BarrelCalculation[]): string {
  if (state.windSpeedMs <= 0 || activeWindOption().factor <= 0) return "";
  return `
    <section class="panel table-panel wind-panel">
      <div class="panel-head">
        <div>
          <h2>■ VINDAVDRIFT</h2>
          <p>Approximation via lag-regel: ${state.windSpeedMs} m/s · ${activeWindOption().label} · ${activeWindOption().desc}.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pipa</th>
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
          <h2>Datakvalitet: ${quality.label}</h2>
          <p>${quality.detail}</p>
        </div>
        <div class="quality-meter" title="Snittpoäng ${quality.score.toFixed(2)} av 4">
          <strong>${quality.score.toFixed(1)}</strong><span>/4</span>
        </div>
      </div>

      <div class="audit-grid">
        <div>
          <span class="audit-label">Nominal MV</span>
          <strong>${mv.value} ${mv.unit}</strong>
          <em class="${confidenceClass(mv.confidence)}">${confidenceLabel(mv.confidence)}</em>
        </div>
        <div>
          <span class="audit-label">BC</span>
          <strong>${bc.value.toFixed(3)} ${bc.unit}</strong>
          <em class="${confidenceClass(bc.confidence)}">${confidenceLabel(bc.confidence)}</em>
        </div>
        <div>
          <span class="audit-label">Pipdata</span>
          <strong>${measuredCount}/${profile.points.length}</strong>
          <em>publicerad/mätt</em>
        </div>
      </div>

      <details open>
        <summary>Källor för vald laddning</summary>
        <ul class="source-list">
          ${[...usedSourceIds].map(sourceId => `<li>${renderSourceLink(sourceId)}</li>`).join("")}
        </ul>
      </details>

      <details>
        <summary>Kommentarer</summary>
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
        <h2>Utgångshastighet — vald laddning</h2>
        <p>Varje rad visar metod och källklassning.</p>
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
          <h2>SNABBKORT</h2>
          <p>${escapeHtml(load.displayName)} · Zero ${state.zeroM} m · Sikthöjd ${state.sightHeightCm.toFixed(1)} cm</p>
        </div>
        <button id="printCrib" class="accent-button" style="--accent:${caliberColor}">Skriv ut</button>
      </div>
      <div class="crib-grid">
        ${calculations.slice(0, 4).map(calc => `
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
      <header class="hero">
        <div class="hero-copy">
          <p class="eyebrow">KÄLLSPÅRAD BALLISTIK · v${APP_VERSION}</p>
          <h1>BULLET DROP <span>REFERENSGUIDE</span></h1>
          <p class="subtitle">Kulfall & vindavdrift med explicit datakvalitet, källor och osäkerhetsklassning.</p>
        </div>
        <div class="hero-card">
          <span>ATMOSFÄR</span>
          <strong>${state.temperatureC}°C · ${state.pressureHPa} hPa</strong>
          <em>ρ ${atmosphere.airDensityKgM3.toFixed(3)} kg/m³ · ljud ${Math.round(atmosphere.speedOfSoundMs)} m/s</em>
        </div>
      </header>

      <nav class="tabs" aria-label="Kaliber">
        ${renderCaliberTabs()}
      </nav>

      <section class="panel controls-panel">
        <div class="control wide">
          <span>Laddning</span>
          <select id="loadSelect">${renderLoadOptions()}</select>
        </div>
        <div class="control zero-control">
          <span>Nollning</span>
          <div class="chip-row">${renderZeroButtons()}</div>
        </div>
        ${renderNumberControl("Sikthöjd över pipa", "sightInput", state.sightHeightCm, 0, 12, 0.1, "cm")}
        <div class="control presets">
          <span>Snabbval sikthöjd</span>
          <div class="chip-row">${renderSightPresets()}</div>
        </div>
        ${renderNumberControl("Temperatur", "tempInput", state.temperatureC, -30, 45, 1, "°C")}
        ${renderNumberControl("Lufttryck", "pressureInput", state.pressureHPa, 850, 1080, 1, "hPa")}
        ${renderNumberControl("Vind", "windInput", state.windSpeedMs, 0, 25, 0.5, "m/s")}
        <div class="control wind-control">
          <span>Vindvinkel</span>
          <div class="chip-row">${renderWindButtons()}</div>
        </div>
      </section>

      <section class="load-summary" style="--accent:${caliber.color}">
        <div>
          <p class="eyebrow">VALD RAD</p>
          <h2>${escapeHtml(caliber.label)} · ${escapeHtml(load.displayName)}</h2>
          <p>${load.bulletWeightGr} gr · ${escapeHtml(load.bulletType)} · BC ${load.ballisticCoefficientG1.value.toFixed(3)} G1 · nominal MV ${load.nominalMuzzleVelocity.value} ${load.nominalMuzzleVelocity.unit}</p>
        </div>
        <a href="#audit" class="accent-link">Visa källor</a>
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
            <h2>OBSERVERA</h2>
            <ul>
              <li>Kulfall beräknas relativt siktlinje med sikthöjd och vald nollning.</li>
              <li>G1-drag använder numerisk integration; vind är separat approximation via lag-regel.</li>
              <li>Temperatur påverkar både lufttäthet och ljudhastighet/Mach.</li>
              <li>Alla piplängdsvärden ska verifieras med din ammunition, ditt vapen och din nollning.</li>
            </ul>
          </section>
          <section class="panel source-catalog">
            <h2>Källkatalog</h2>
            <p>${SOURCES.length} källposter finns i datamodellen. Endast relevanta källor för vald laddning visas öppet ovan.</p>
          </section>
        </div>
      </div>

      <footer class="footer">
        <span>G1 numerisk integration · spårbar data · cache ${APP_VERSION}</span>
        <span>tacticaljunkyard.com</span>
      </footer>
    </div>
  `;

  bindEvents();
}

function bindEvents(): void {
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

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw-js.js").catch(error => {
      console.warn("Service worker registration failed", error);
    });
  });
}

// Light smoke-test hook for non-browser tests.
export const __appVersion = APP_VERSION;
export const __defaultState = state;
export const __calculateForSelectedLoad = calculateForSelectedLoad;
export const __msToFps = msToFps;
