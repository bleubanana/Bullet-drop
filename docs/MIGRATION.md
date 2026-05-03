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

## v1.4.5 cache/update handling

Added service-worker update detection with an in-app reload banner. When a new service worker has installed and is waiting, the app shows "Ny version finns / New version available". Selecting reload sends `SKIP_WAITING` to the waiting worker and reloads after `controllerchange`, so users do not remain on stale cached assets after future releases.

The app also calls `registration.update()` on load and then once per hour while open. Open-Meteo responses are still excluded from service-worker caching.
