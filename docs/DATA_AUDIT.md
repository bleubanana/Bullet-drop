# Data audit

## Syfte

Den här rebuilden gör datan mer pålitlig genom att inte behandla alla siffror som lika säkra. Datan är uppdelad i källspårade fält med metod och confidence per värde.

## Confidence-nivåer

| Nivå | Användning |
|---|---|
| `manufacturer-published` | Publicerad av tillverkare, till exempel katalog eller produktblad. |
| `measured-third-party` | Mätt av etablerad tredje part, till exempel cut-down/kronograftest. |
| `derived` | Härledd från publicerade värden, interpolation eller dokumenterad antagandemodell. |
| `legacy-estimate` | Reserverad nivå för framtida importer av äldre estimat. Ska undvikas i det källspårade datasetet. |

## Viktigaste förbättringar

### .22 LR

Den tidigare breda subsonic-raden är ersatt med en specifik CCI-referensrad. CCI Standard Velocity och Mini-Mag har produktnummer och manufacturer-published MV. Mini-Mag 40 gr CPRN har piplängdsdata från BBTI.

### 9×19 mm

9 mm-profilerna visar nu de faktiska BBTI-punkterna för 13, 16, 17 och 18 tum. De är inte utjämnade till en stigande kurva eftersom källtabellen visar platåer och hastighetssänkningar i längre pipor beroende på laddning.

### BC-värden

BC är fortfarande det område som kräver mest datarensning. Där produktnivå-BC inte är verifierad är värdet markerat som `derived` och källan `bc-validation-note` används. Det gör osäkerheten synlig i UI:t i stället för att gömma den.

### Piplängder

Piplängdsprofilerna är inte längre anonyma. Varje punkt har metod:

- `published`
- `measured`
- `interpolated`
- `derived`
- `legacy`

## Rekommenderade nästa datasteg

1. Ersätt alla kvarvarande `derived`-BC med produkt- eller kulnivåkälla.
2. Lägg till exakta lot-/testpipa-/instrumentuppgifter där tillverkare eller kronografkälla publicerar det.
3. Lägg till separata referensfall mot externa kalkylatorer med exakt samma input.
4. Lägg till fler produktnivåprofiler för 9 mm och .22 LR när en exakt SKU-matchad piplängdskälla finns.
