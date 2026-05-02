# Data audit

## Syfte

Den här rebuilden gör datan mer pålitlig genom att inte behandla alla siffror som lika säkra. Datan är nu uppdelad i källspårade fält med metod och confidence per värde.

## Confidence-nivåer

| Nivå | Användning |
|---|---|
| `manufacturer-published` | Publicerad av tillverkare, till exempel katalog eller produktblad. |
| `measured-third-party` | Mätt av etablerad tredje part, till exempel cut-down/kronograftest. |
| `derived` | Härledd från publicerade värden, interpolation eller dokumenterad antagandemodell. |
| `legacy-estimate` | Värde från tidigare hårdkodad tabell eller generiskt estimat. Ska ersättas. |

## Viktigaste förbättringar

### .22 LR

Den tidigare breda raden `Subsonic (Eley·SK·CCI)` är ersatt med en specifik CCI-rad. CCI Standard Velocity och Mini-Mag har produktnummer och manufacturer-published MV. Mini-Mag 40 gr CPRN har piplängdsdata från BBTI.

### BC-värden

BC är det område som fortfarande kräver mest datarensning. Där produktnivå-BC inte är säkert verifierad är värdet markerat som `derived` eller `legacy-estimate` och källan `bc-legacy-note` används.

### Piplängder

Piplängdsprofilerna är inte längre anonyma. Varje punkt har metod:

- `published`
- `measured`
- `interpolated`
- `derived`
- `legacy`

## Rekommenderade nästa datasteg

1. Ersätt alla `legacy-estimate`-BC med produkt- eller kulnivåkälla.
2. Extrahera exakta RifleShooter-tabellrader för .308 och 6.5 Creedmoor i stället för att blanda source-level och legacy-data.
3. Lägg till lot/testbarrel där tillverkaren publicerar det.
4. Lägg till en separat `validation/referenceCases.ts` för jämförelse mot externa kalkylatorer med samma input.
