# Bullet Drop Referensguide

Källspårad referensguide för kulfall, vindavdrift och ammunitionsdata.

## Vad som ändrats i v1.4.2

- Ballistikmotorn är separerad från UI:t.
- Ammunitionsdata ligger i en källspårad datamodell.
- Varje kritiskt värde har `confidence`, `method` och `sourceRefs`.
- 9 mm-profilerna visar faktiska BBTI-punkter även när längre pipor tappar hastighet.
- Språkval är tillbaka: svenska och engelska.
- Enhetsval är tillagt: metriskt är default, imperial kan väljas i toppbaren.
- Temaval är tillbaka: ljust, mörkt och system.
- Appen försöker hämta platsväder via webbläsarens geolocation och Open-Meteo för temperatur och lokalt lufttryck.
- Atmosfärsmodellen justerar både luftdensitet och ljudhastighet efter temperatur.
- Vind visas som approximation via lag-regel, inte som full 3D-lösning.
- Appen använder inte längre browser-Babel eller CDN-React.
- En testsvit verifierar enheter, atmosfär, nollning och dataintegritet.

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
