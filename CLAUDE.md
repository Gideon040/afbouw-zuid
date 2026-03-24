# AfbouwZuid - Project Documentatie

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: Manrope (headlines), Inter (body) via Google Fonts
- **Icons**: Material Symbols Outlined (Google Fonts)
- **Forms**: Formspree (`https://formspree.io/f/mnjoajqz`)
- **Domain**: `https://afbouwzuid.nl`

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
```

## Project Structure
```
app/
  layout.tsx          # Root layout (Navbar + Footer + Organization JSON-LD)
  page.tsx            # Homepage (LocalBusiness JSON-LD)
  globals.css         # Global styles + Tailwind layers
  robots.ts           # robots.txt generatie
  sitemap.ts          # sitemap.xml generatie (alle 15 pagina's)
  diensten/
    [slug]/page.tsx   # Diensten detail (Service + FAQ + Breadcrumb JSON-LD)
  nieuwbouw/
    page.tsx          # Nieuwbouw landing (Breadcrumb JSON-LD)
  renovatie/
    page.tsx          # Renovatie landing (Breadcrumb JSON-LD)
  offerte/
    layout.tsx        # Offerte metadata (title, description, canonical)
    page.tsx          # Offerte formulier (client component)
  over-ons/
    page.tsx          # Over ons pagina (Breadcrumb JSON-LD)
components/
  Navbar.tsx          # Light navbar met bg-surface/95 (client component)
  Footer.tsx          # 3-kolom footer met WhatsApp FAB
lib/
  diensten.ts         # Diensten data (10 items) + types + helpers
```

## Contact
- **Telefoon**: 06-38903004
- **E-mail**: info@afbouwzuid.nl
- **Adres**: Jacob van Campenweg 25, 5624 CD Eindhoven
- **WhatsApp**: wa.me/31638903004

## SEO & Structured Data
- **robots.ts**: Genereert robots.txt met sitemap referentie
- **sitemap.ts**: Dynamische sitemap met alle 15 routes (5 static + 10 diensten)
- **Organization** JSON-LD: Root layout (globaal)
- **LocalBusiness + AggregateRating** JSON-LD: Homepage
- **Service + FAQPage + BreadcrumbList** JSON-LD: Elke diensten detail pagina
- **BreadcrumbList** JSON-LD: Nieuwbouw, Renovatie, Over ons
- **Metadata**: Elke pagina heeft title, description, canonical URL
- **Open Graph + Twitter Cards**: Geconfigureerd in root layout
- **Title template**: `%s | AfbouwZuid` (via layout metadata)

## Formulieren
Alle formulieren gebruiken Formspree (`https://formspree.io/f/mnjoajqz`) met `action` + `method="POST"`:
- **Homepage** contactformulier: naam, telefoon, bericht (subject: "Contactformulier Homepage")
- **Diensten** contactformulier: naam, telefoon, bericht (subject: "Contactformulier Dienst")
- **Offerte** formulier: bouwtype, diensten, naam, email, telefoon, locatie, bouwtekeningen, bericht, contactvoorkeur (subject: "Offerte aanvraag")

## Kleurensysteem (Material Design 3 tokens)
De app gebruikt Material Design 3 kleur-tokens, gedefinieerd in `tailwind.config.ts`:

| Token | Hex | Gebruik |
|-------|-----|---------|
| `primary` | #0058bd | CTA buttons, links, accenten |
| `dark-navy` | #0b1628 | Donkere achtergronden, headings |
| `on-surface` | #1c1c19 | Body tekst |
| `on-surface-variant` | #414755 | Secundaire tekst |
| `surface` | #fcf9f4 | Lichte achtergrond (ook navbar) |
| `surface-container-low` | #f6f3ee | Alternatieve sectie-achtergrond |
| `outline` | #717786 | Subtiele tekst |
| `outline-variant` | #c1c6d7 | Borders |
| `star-gold` | #F5A623 | Sterren ratings |
| `tertiary` | #805200 | Sterren in diensten-pagina |

Backwards-compatible `az-*` prefix is ook beschikbaar (az-blue, az-navy, etc.).

## Conventies

### Font families
- `font-headline` / `font-display` → Manrope (headings, labels)
- `font-body` → Inter (paragrafen, UI)

### Skew button pattern
```tsx
<button className="skew-btn bg-primary text-on-primary px-6 py-2">
  <span>Button tekst</span>
</button>
```
De `.skew-btn` class past `skewX(-12deg)` toe, de child `<span>` krijgt automatisch `skewX(12deg)` terug. Hover vergroot de skew naar -15deg.

### Afbeeldingen
Native `<img>` tags met `eslint-disable` comments i.p.v. Next.js `<Image>` component.

### Secties
- Secties gebruiken `py-32` als standaard verticale padding
- `container mx-auto px-8` voor content-breedte
- Achtergrondkleuren alterneren: `bg-surface`, `bg-white`, `bg-surface-container-low`, `bg-dark-navy`

### Typografie
- Headings: `font-headline font-black uppercase tracking-tighter`
- Labels/subtitles: `text-primary font-bold uppercase tracking-[0.3em] text-xs`
- Body: `text-on-surface-variant leading-relaxed`

### Navbar
- Light theme: `bg-surface/95` met `backdrop-blur-md`
- Top bar: `bg-dark-navy` met contactinfo en social links
- Mega dropdown: `bg-surface` met diensten per categorie
- Mobile menu: `bg-surface`

### Hero sectie (homepage)
- Full-screen op mobile (`min-h-[100svh]`), content onderaan (`flex items-end`)
- Achtergrondafbeelding met `bg-dark-navy/60` overlay
- Responsive text sizes (`text-4xl md:text-7xl`)
- CTA-kaarten verborgen op mobile (`hidden md:flex`)

### Reviews
Reviews op homepage (sectie 12) en diensten-pagina's (sectie 10) gebruiken echte klantreviews:
- **Featured quote**: S B (vliesbehang + verf)
- **4 review cards**: Alexis Barron, Marlie S, Peter Visser, Frans Flagge
- Alle reviews zijn 5-sterren met `text-star-gold`

## Diensten Data
Alle diensten-data staat in `lib/diensten.ts`. Elke dienst heeft:
- Basis info (title, slug, category, icon)
- Content (excerpt, body paragraphs)
- Benefits (3 items met icon, title, desc)
- Steps/werkwijze (4 stappen)
- Pricing (2-3 items)
- FAQs (2-5 items)
- Related slugs (3 gerelateerde diensten)
