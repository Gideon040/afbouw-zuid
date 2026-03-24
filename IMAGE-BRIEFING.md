# AfbouwZuid — Image Briefing voor AI Generatie

Overzicht van alle benodigde afbeeldingen per pagina, met beschrijving, formaat en context.

---

## HOMEPAGE (`app/page.tsx`)

### 1. Hero achtergrond
- **Formaat**: Landscape, full-width (min. 1920×1080)
- **Huidige alt**: "Modern afgewerkt interieur"
- **Beschrijving**: Breed beeld van een modern, strak afgewerkt wooninterieur. Denk aan strakke witte muren, mooie vloer, lichtinval. Moet premium en professioneel ogen. Wordt gebruikt met donkere overlay (60%), dus mag gedetailleerd zijn.

### 2. Intro grid — 4 categorieën (aspect 3:4, portrait)

| # | Label | Beschrijving |
|---|-------|-------------|
| A | **Wanden** | Close-up van een strak gestucte of geschilderde wand, eventueel met roller/kwast zichtbaar. Lichte kleurtonen. |
| B | **Plafonds** | Strak wit gespoten plafond in een moderne woonkamer, van onderaf gefotografeerd of vanuit een hoek. |
| C | **Vloeren** | Mooie PVC- of gietvloer in een woonkamer/hal, warm hout-look of betonlook. |
| D | **Trappen** | Mooi geschilderde/gelakte trap (dichte trap), wit met houten treden of volledig wit. Modern interieur. |

### 3. Diensten categorieën — 2 kaarten (aspect ~3:4)

| # | Label | Beschrijving |
|---|-------|-------------|
| A | **Nieuwbouw** | Nieuwbouwwoning interieur in afbouwfase OF net opgeleverd. Strakke muren, nog vrij kaal, licht en ruimtelijk. |
| B | **Renovatie** | Renovatieproject: woning die wordt opgeknapt. Kan een voor/na-sfeer hebben, of vakman aan het werk in een bestaand huis. |

### 4. Diensten cards — 4 services (aspect ~3:4, portrait)

| # | Dienst | Beschrijving |
|---|--------|-------------|
| A | **Schilderwerk** | Vakman die binnenmuren schildert met roller of kwast. Witte/lichte verf, professionele uitstraling. |
| B | **Latexspuiten** | Latex spuitwerk in actie: spuitpistool op muur of plafond, fijne nevel zichtbaar. Werkkleding, afplakfolie. |
| C | **Vloerbedekking** | PVC vloer of tapijt wordt gelegd. Detail van handen die vloerdelen plaatsen of een afgewerkte vloer. |
| D | **Traprenovatie** | Trap die wordt gerenoveerd: schilder aan het werk op een trap, of een prachtig afgewerkte gelakte trap. |

### 5. Projecten portfolio — 4 projecten (portrait, variërende hoogtes)

| # | Project | Beschrijving |
|---|---------|-------------|
| A | **Modern Appartement — Veghel** | Strak afgewerkt modern appartement interieur. Witte muren, strakke lijnen, minimalistisch. |
| B | **Luxe Villa — Breda** | Luxe villa interieur: ruime woonkamer, hoge plafonds, premium afwerking. Warme sfeer. |
| C | **Historisch Pand — Wageningen** | Klassiek/historisch pand met gerenoveerd interieur. Combinatie oud karakter + moderne afwerking. |
| D | **Modern Woonhuis — Helmond** | Gezinswoning met modern interieur. Woonkamer of hal, strakke muren en vloer. |

### 6. Waarom AfbouwZuid — illustratie (aspect 4:5, portrait)
- **Huidige alt**: "Interieur afwerking"
- **Beschrijving**: Sfeerbeeld van een prachtig afgewerkt interieur. Detail van perfecte wandafwerking, of een ruimte waar licht mooi op de muren valt. Moet kwaliteit en vakmanschap uitstralen.

### 7. Diensten showcase achtergrond (full-width)
- **Bron**: Unsplash placeholder
- **Beschrijving**: Breed beeld van schilderwerk/stucwerk in actie OF een prachtig afgewerkte ruimte. Wordt gebruikt met overlay, dus mag druk zijn.

### 8. Consultant foto (1:1, 96×96px, wordt grayscale)
- **Huidige alt**: "Consultant"
- **Beschrijving**: Portretfoto van een vriendelijke mannelijke vakman/adviseur. Casual-professioneel, betrouwbare uitstraling. Wordt in grayscale getoond.

### 9. Blog/artikel thumbnails — 4 artikelen (landscape, ~16:9)

| # | Artikel | Beschrijving |
|---|---------|-------------|
| A | **Trends in wandafwerking** | Moderne woonkamer met opvallende wandafwerking (structuur, kleuraccent, vliesbehang). Trendy interieur. |
| B | **Voorbereiding stucwerk** | Voorbereidingsfase: muren worden voorbehandeld, primer, afplakken. Vakman aan het werk. |
| C | **PVC of Gietvloer** | Split-beeld of vergelijking: PVC vloer naast gietvloer. Of een mooie vloer in een moderne ruimte. |
| D | **Onderhoud schilderwerk** | Iemand die schilderwerk onderhoudt/bijwerkt. Lichte touch-up, onderhoudswerkzaamheden. |

### 10. Showroom — 2 foto's (1:1, vierkant)

| # | Beschrijving |
|---|-------------|
| A | Showroom met materiaalstalen: verf, stuc, vloersamples. Professioneel ingerichte presentatie. |
| B | Showroom hoek met afgewerkte voorbeeldwanden of vloerdelen. Klant of adviseur die materialen bekijkt. |

---

## DIENSTEN DETAIL PAGINA (`app/diensten/[slug]/page.tsx`)

### Per dienst — 1 hero image (wordt op 4 plekken hergebruikt)

Elke dienst-afbeelding wordt gebruikt als:
1. **Hero** (aspect 4:3, landscape)
2. **Explainer sectie** (aspect 4:5, portrait, met skew)
3. **Voordelen achtergrond** (full-width, met donkere overlay)
4. **Werkwijze sectie** (600px hoog, met hero-clip)

Dus: genereer **brede, gedetailleerde beelden** die goed werken in zowel landscape als portrait crop.

| # | Dienst | Beschrijving |
|---|--------|-------------|
| 1 | **Traditioneel Stucwerk** | Vakman die met de hand stuc aanbrengt op een muur. Troffel, stucspecie, ambachtelijk. Warme sfeer. |
| 2 | **SPACK Spuitwerk** | Spuitwerk op muren/plafonds met professionele apparatuur. Fijne structuur, egaal resultaat. |
| 3 | **Dunpleister** | Dunne pleisterlaag wordt aangebracht. Strakke, gladde afwerking. Moderne uitstraling. |
| 4 | **(Reno)vlies Behang** | Vliesbehang wordt aangebracht op muur. Behanglijm, baan wordt gladgestreken. Keurig resultaat. |
| 5 | **Ambachtelijk Schilderwerk** | Schilder die zorgvuldig kozijnen, deuren of muren schildert met kwast. Precisiewerk, ambachtelijk. |
| 6 | **Latex Spuiten** | Latex spuitpistool in actie op grote wand of plafond. Egale, matte afwerking. Professionele setting. |
| 7 | **Lakwerk** | Hoogglans of zijdeglans lakwerk op deuren/kozijnen. Detail van glad gelakt oppervlak, mooi lichtreflectie. |
| 8 | **Spuitlakwerk** | Spuitlak op meubels, deuren of kasten. Spuitcabine of afgeschermd werkgebied. Ultra-strak resultaat. |
| 9 | **Trap Schilderen** | Trap wordt geschilderd: vakman op trap bezig met schilderen/lakken. Dichte trap, wit met hout of volledig wit. |
| 10 | **Vloerbedekking** | PVC vloer of tapijt wordt vakkundig gelegd. Close-up van het legproces of een prachtig eindresultaat. |

### Gallerij — 3 vaste foto's (op elke dienstpagina hetzelfde)

| # | Alt tekst | Formaat | Beschrijving |
|---|-----------|---------|-------------|
| A | Resultaat keuken | Breed (2-koloms), h-96 | Prachtig afgewerkte keuken: strakke muren, mooie vloer, modern design. Ruimtelijk beeld. |
| B | Resultaat slaapkamer | Smal (1-kolom), h-96 | Slaapkamer met perfect gestucte/geschilderde muren. Rustgevend, strak, lichte kleuren. |
| C | Resultaat hal | Smal (1-kolom), h-96 | Hal/entree met mooie vloer en strakke wanden. Eerste indruk van een woning. |

---

## OVER ONS PAGINA (`app/over-ons/page.tsx`)

### 1. Hero achtergrond (full-width, min. 1920×1080)
- **Beschrijving**: Team aan het werk op een project, of een breed beeld van een werkplek/bouwplaats. Professionele sfeer, samenwerking. Wordt met overlay getoond.

### 2. Verhaal/oprichters foto (aspect 4:5, portrait, hero-clip)
- **Huidige alt**: "Jordy en Renzo aan het werk"
- **Beschrijving**: Twee jonge vakmannen (Jordy & Renzo) samen aan het werk. Informeel maar professioneel. Op een bouwplaats of in een woning bezig met afbouwwerk. Teamsfeer.

### 3. Teamleden — 2 portretten (aspect 3:4, portrait)

| # | Naam | Rol | Beschrijving |
|---|------|-----|-------------|
| A | **Jordy** | Schilderspecialist | Portret van een jonge mannelijke schilder. Werkkleding, zelfverzekerde blik, professioneel maar benaderbaar. |
| B | **Renzo** | Stucadoor | Portret van een jonge mannelijke stucadoor. Werkkleding, vriendelijke uitstraling, vakmanachtergrond. |

### 4. Waarom AfbouwZuid achtergrond (full-width)
- **Beschrijving**: Breed beeld van een afgewerkt project of werkplaats. Wordt met donkere overlay gebruikt. Mag detail hebben.

### 5. CTA achtergrond (full-width)
- **Beschrijving**: Inspirerend eindresultaat: prachtig afgewerkt interieur, droomwoning-sfeer. Warm licht, premium uitstraling. Donkere overlay.

---

## NAVBAR (`components/Navbar.tsx`)

### Mega dropdown achtergrond (300px breed, ~400px hoog)
- **Beschrijving**: Sfeerfoto van afbouwwerk of een mooi interieur. Wordt met gradient overlay getoond (dark-navy). Moet goed werken in een klein, smal formaat.

### Logo
- **Bestand**: `/public/logo.png`
- **Opmerking**: Bestaand logo, hoeft niet opnieuw gegenereerd.

---

## SAMENVATTING

| Categorie | Aantal beelden |
|-----------|---------------|
| Homepage hero + secties | 17 |
| Diensten hero images (10 diensten) | 10 |
| Diensten gallerij (3 vaste) | 3 |
| Over ons pagina | 5 |
| Navbar dropdown | 1 |
| **Totaal** | **~36 unieke afbeeldingen** |

### Stijlrichtlijnen voor AI generatie
- **Sfeer**: Modern, premium, professioneel, Nederlands interieur
- **Kleurpalet**: Overwegend lichte, warme tinten (wit, crème, hout). Af en toe donkerder voor contrast.
- **Stijl**: Fotorealistisch, hoge kwaliteit, goede belichting
- **Onderwerpen**: Stucwerk, schilderwerk, vloeren, trappen, nieuwbouw interieurs
- **Vermijd**: Rommelige bouwplaatsen, slechte belichting, te drukke composities
- **Resolutie**: Minimaal 1920px breed voor achtergronden, 800px voor kaarten/thumbnails
