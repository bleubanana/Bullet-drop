# Migration från v1.3.1 till v1.4.0

## Strukturell ändring

v1.3.1 låg nästan helt i `index.html`. v1.4.0 delar upp projektet:

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

## GitHub Pages

Root-`index.html` kan fortfarande hostas statiskt. Skillnaden är att den laddar byggda moduler från `assets/`.

Efter kodändring:

```bash
npm run build
npm test
```

Committa sedan både `src/` och `assets/`.
