# Migration till v1.4.3

## Strukturell ändring

Den tidigare single-file-versionen låg nästan helt i `index.html`. v1.4.3 delar upp projektet:

```text
src/
  core/         ballistik, atmosfär, dragmodell, units
  data/         ammunition, piplängdsprofiler, källor
  ui/           reserverat för framtida komponentisering
assets/         byggda JS/CSS-filer som GitHub Pages kan servera
```

## Funktionell ändring

- `SOUND=340` är ersatt med temperaturberoende ljudhastighet.
- Luftdensitet beräknas via ideal gas-modell med temperatur och lufttryck.
- Vindmodellen är kvar som lag-regel men märks tydligare som approximation.
- Source/audit-panelen visar exakt vilka källor som stödjer vald laddning.
- Metriska enheter är default; imperial-läget visar yards, tum, fps, mph, °F och inHg.
- Platsväder hämtas på laddning via Geolocation API + Open-Meteo om användaren godkänner platsåtkomst.

## GitHub Pages

Root-`index.html` kan fortfarande hostas statiskt. Skillnaden är att den laddar byggda moduler från `assets/`.

Efter kodändring:

```bash
npm run build
npm test
```

Committa sedan både `src/` och `assets/`.

## v1.4.6 cache/update handling

Added service-worker update detection with an in-app reload banner. When a new service worker has installed and is waiting, the app shows "Ny version finns / New version available". Selecting reload sends `SKIP_WAITING` to the waiting worker and reloads after `controllerchange`, so users do not remain on stale cached assets after future releases.

The app also calls `registration.update()` on load and then once per hour while open. Open-Meteo responses are still excluded from service-worker caching.


## v1.4.6 iPhone/mobile layout

Added mobile containment rules so wide ballistic tables scroll inside their cards instead of widening the whole page. Preference groups, caliber tabs and preset chip rows are horizontally scrollable on small screens. Long source titles and footer text now wrap safely.


## v1.4.8 — Location wind and iPhone web app support

- Local weather now requests `wind_speed_10m` and `wind_direction_10m` from Open-Meteo in addition to temperature and surface pressure.
- The wind speed field is pre-filled from local weather when permission is granted.
- Wind direction is displayed in the atmosphere card as meteorological direction. It does not automatically infer crosswind angle because the app does not know the user's firing bearing.
- Manifest now uses relative `start_url` and `scope` so GitHub Pages subfolder deployments work better.
- iOS web app meta tags and Apple touch icons are included for Safari Add to Home Screen installation.


## v1.4.8 — Twist stability and Coriolis

Adds an advanced Miller SG stability indicator using twist rate, bullet length, MV, temperature and pressure. Adds optional Coriolis correction with latitude and direction of fire. Coriolis is shown as a separate correction table and is disabled by default to avoid implying false precision for normal short-range use.
