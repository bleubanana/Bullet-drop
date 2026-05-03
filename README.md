# Bullet Drop Referensguide

Källspårad referensguide för kulfall, vindavdrift och ammunitionsdata.

## Vad som ändrats i v1.4.8

- Ballistikmotorn är separerad från UI:t.
- Ammunitionsdata ligger i en källspårad datamodell.
- Varje kritiskt värde har `confidence`, `method` och `sourceRefs`.
- 9 mm-profilerna visar faktiska BBTI-punkter även när längre pipor tappar hastighet.
- Språkval är tillbaka: svenska och engelska.
- Enhetsval är tillagt: metriskt är default, imperial kan väljas i toppbaren.
- Temaval är tillbaka: ljust, mörkt och system.
- Appen försöker hämta platsväder via webbläsarens geolocation och Open-Meteo för temperatur, lokalt lufttryck, vindhastighet och vindriktning.
- Atmosfärsmodellen justerar både luftdensitet och ljudhastighet efter temperatur.
- Vindhastighet kan förifyllas från platsväder. Vindriktning visas som meteorologisk riktning, men skjutvinkel måste väljas manuellt eftersom appen inte känner skjutriktningen.
- Vind visas som approximation via lag-regel, inte som full 3D-lösning.
- Appen använder inte längre browser-Babel eller CDN-React.
- Fler produktnivåreferenser har lagts till för .22 LR, 9×19, .223 Rem, .308 Win och 6.5 Creedmoor.
- S&B-, GGG-, GECO-, CCI- och Aguila-rader har lagts till med `manufacturer-published` där värdena kunde verifieras.
- En testsvit verifierar enheter, atmosfär, nollning och dataintegritet.
- Manifest och iOS-meta-taggar är justerade för installation som webbapp via Safari / Lägg till på hemskärmen.

## Lokal körning

```bash
npm install
npm test
npm run dev
```

`npm run dev` bygger TypeScript till `assets/` och startar en enkel statisk server på port 5173.

## Produktionsmodell

Repo:t är fortfarande statiskt och kan hostas direkt från GitHub Pages eftersom root-`index.html` läser byggda filer från `assets/`.

När du ändrar TypeScript-källor måste du köra:

```bash
npm run build
```

och committa uppdaterade filer i `assets/`.

## Viktiga antaganden

Detta är en referenskalkylator, inte ett ersättningsvärde för praktisk verifiering. Faktiskt träffläge påverkas av ammunitionens lot, pipa, kronograferad hastighet, sikthöjd, nollning, temperatur, lufttryck och skyttens system. Platsväder kräver HTTPS/localhost och att användaren godkänner platsåtkomst; annars används manuella/ISA-värden.

## Datakvalitet

Datamodellen skiljer på:

- `manufacturer-published`
- `measured-third-party`
- `derived`
- `legacy-estimate`

Härledda rader finns kvar för kontinuitet men visas tydligt med lägre datakvalitet.


## v1.4.8 — Twist stability and Coriolis

Adds an advanced Miller SG stability indicator using twist rate, bullet length, MV, temperature and pressure. Adds optional Coriolis correction with latitude and direction of fire. Coriolis is shown as a separate correction table and is disabled by default to avoid implying false precision for normal short-range use.
