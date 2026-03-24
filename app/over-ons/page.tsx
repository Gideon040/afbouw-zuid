import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Maak kennis met Jordy en Renzo, de vakmannen achter AfbouwZuid. Eén aanspreekpunt voor al uw stuc- en afbouwwerk in Zuid-Nederland.",
  alternates: { canonical: "https://afbouwzuid.nl/over-ons" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://afbouwzuid.nl" },
    { "@type": "ListItem", position: 2, name: "Over Ons", item: "https://afbouwzuid.nl/over-ons" },
  ],
};

export default function OverOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="/hero-stukadoors-nieuwbouw.webp"
            alt=""
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 via-dark-navy/30 to-transparent" />
        </div>
        <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-6">
              Over AfbouwZuid
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-white uppercase tracking-tight leading-[0.9] mb-8">
              Twee vakmannen, één missie
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8">
              Jordy en Renzo bundelden hun krachten om klanten in Zuid-Nederland
              één aanspreekpunt te bieden voor het complete afbouwtraject.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/offerte"
                className="skew-btn bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block"
              >
                <span>Neem contact op</span>
              </Link>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20">
                <span className="text-star-gold font-bold">4.9★</span>
                <span className="text-white text-xs uppercase tracking-widest font-bold">
                  Google Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white/90 backdrop-blur-xl p-8 flex-1 border-l-4 border-primary">
              <h3 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-2">
                Jordy
              </h3>
              <p className="text-on-surface-variant text-sm mb-1">Schilderspecialist</p>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <div className="bg-white/90 backdrop-blur-xl p-8 flex-1 border-l-4 border-dark-navy">
              <h3 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-2">
                Renzo
              </h3>
              <p className="text-on-surface-variant text-sm mb-1">Stucadoor &amp; Specialist</p>
              <div className="w-8 h-0.5 bg-dark-navy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="bg-white py-12 border-y border-surface-container-low">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "handshake", label: "ÉÉN AANSPREEKPUNT", sub: "Voor al uw afbouwwerk" },
            { icon: "workspace_premium", label: "VAKMANSCHAP", sub: "10+ jaar ervaring" },
            { icon: "verified", label: "KWALITEITSGARANTIE", sub: "Op al ons werk" },
          ].map((t) => (
            <div key={t.label} className="flex items-center space-x-4">
              <span className="material-symbols-outlined text-primary text-3xl">{t.icon}</span>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider">{t.label}</p>
                <p className="text-[11px] text-outline uppercase font-medium">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. HET VERHAAL ── */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                Ons verhaal
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-8">
                Hoe het begon
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Jordy groeide op met een kwast in zijn hand. Na jaren ervaring
                  in het schildersvak bouwde hij een solide reputatie op als
                  specialist in ambachtelijk schilderwerk — van strakke
                  latexwanden tot perfect afgelakte kozijnen.
                </p>
                <p>
                  Renzo daarentegen vond zijn passie in het stucwerk. Als
                  ervaren stucadoor weet hij als geen ander hoe je muren
                  spiegelglad krijgt en plafonds naadloos afwerkt. Van
                  traditioneel stucwerk tot moderne dunpleister — hij beheerst
                  het allemaal.
                </p>
                <p>
                  Tijdens diverse projecten merkten ze steeds hetzelfde probleem:
                  klanten moesten met te veel verschillende partijen werken.
                  Stucadoor, schilder, vloerenlegger — iedereen een apart
                  aanspreekpunt, aparte planning, aparte facturen.
                </p>
                <div className="border-l-4 border-primary pl-6 py-2">
                  <p className="text-dark-navy font-medium text-lg italic">
                    &ldquo;Bundel de krachten en bied klanten alles onder één dak. Zo ontstond AfbouwZuid.&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 mt-10">
                <Link
                  href="/offerte"
                  className="skew-btn bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block"
                >
                  <span>Meer weten</span>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black font-headline">9.7</span>
                  <div className="flex flex-col">
                    <div className="flex text-star-gold text-[10px]">★★★★★</div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
                      Klantscore
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[4/5] hero-clip overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="/nieuwbouw-casco-stucwerk.webp"
                  alt="Jordy en Renzo aan het werk"
                />
              </div>
              <div className="absolute bottom-8 -left-4 bg-dark-navy p-8 z-20 hidden md:block shadow-xl">
                <span className="text-white font-headline font-black text-5xl uppercase leading-none block">
                  2x
                </span>
                <span className="text-primary text-xs uppercase tracking-widest font-bold">
                  Vakmanschap
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TRUST TICKER ── */}
      <div className="bg-dark-navy py-6 overflow-hidden whitespace-nowrap border-y border-white/5">
        <div className="flex animate-marquee gap-12 text-white/90 font-headline font-bold uppercase tracking-[0.3em] text-xs items-center">
          <span>Stucwerk ◆ Schilderwerk ◆ Latexspuiten ◆ Vloeren ◆ Trappen ◆ Dunpleister ◆ Renovlies ◆ SPACK Spuitwerk</span>
          <span>Stucwerk ◆ Schilderwerk ◆ Latexspuiten ◆ Vloeren ◆ Trappen ◆ Dunpleister ◆ Renovlies ◆ SPACK Spuitwerk</span>
          <span>Stucwerk ◆ Schilderwerk ◆ Latexspuiten ◆ Vloeren ◆ Trappen ◆ Dunpleister ◆ Renovlies ◆ SPACK Spuitwerk</span>
        </div>
      </div>

      {/* ── 5. TWEE SPECIALISTEN ── */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                Het team
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none">
                Twee specialisten
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Twee vakmensen met elk hun eigen specialisme, maar met dezelfde
                standaard: perfectie in elke vierkante meter.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Jordy */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/dienst-ambachtelijk-schilderwerk.webp"
                  alt="Jordy — Schilderspecialist"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">
                  Schilderspecialist
                </span>
                <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter mb-4">
                  Jordy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-sm">
                  &ldquo;Een mooi resultaat begint bij de juiste voorbereiding.
                  Ik neem de tijd om het vakwerk te leveren waar uw woning om
                  vraagt.&rdquo;
                </p>
                <div className="flex gap-3">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                    Schilderwerk
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                    Latexspuiten
                  </span>
                </div>
              </div>
            </div>

            {/* Renzo */}
            <div className="group relative overflow-hidden md:mt-16">
              <div className="aspect-[3/4] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="/dienst-dunpleister-closeup.webp"
                  alt="Renzo — Stucadoor"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">
                  Stucadoor &amp; Specialist
                </span>
                <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter mb-4">
                  Renzo
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-sm">
                  &ldquo;Stucwerk is een ambacht. Elke wand verdient de aandacht
                  om tot in de perfectie afgewerkt te worden.&rdquo;
                </p>
                <div className="flex gap-3">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                    Stucwerk
                  </span>
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
                    Dunpleister
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WAAROM AFBOUWZUID ── */}
      <section className="relative py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/echt-renovatie-slaapkamer-gestuct.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark-navy/85" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">
              Onze belofte
            </span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none">
              Waarom AfbouwZuid
            </h2>
          </div>
          <div className="divide-y divide-white/15">
            {[
              {
                icon: "handshake",
                title: "Eén aanspreekpunt",
                desc: "Geen gedoe met meerdere aannemers. Wij regelen het complete afbouwtraject van A tot Z.",
              },
              {
                icon: "join_inner",
                title: "Naadloze aansluiting",
                desc: "Stucwerk, schilderwerk en vloeren sluiten perfect op elkaar aan. Dat ziet u in het eindresultaat.",
              },
              {
                icon: "verified",
                title: "Kwaliteitsgarantie",
                desc: "Twee specialisten die elkaars werk controleren. Het resultaat: een afwerking waar u jaren plezier van heeft.",
              },
              {
                icon: "schedule",
                title: "Efficiënte planning",
                desc: "Eén planning voor alle werkzaamheden. Geen wachttijden tussen verschillende vakmensen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="py-8 md:py-12 md:grid md:grid-cols-12 md:gap-8 group hover:bg-white/5 px-8 -mx-8 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-0 md:contents">
                  <span className="material-symbols-outlined text-white/70 text-2xl md:text-3xl md:col-span-1">
                    {item.icon}
                  </span>
                  <h3 className="font-headline font-bold uppercase tracking-widest text-white text-sm md:text-base md:col-span-3">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed md:col-span-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WERKWIJZE ── */}
      <section className="py-32 bg-surface-container-low overflow-hidden relative">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">
              Hoe wij werken
            </span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-8">
              Van eerste contact tot oplevering
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-xl">
              Bij AfbouwZuid werken we volgens een helder proces. Zo weet u altijd waar u aan toe bent — geen verrassingen, alleen vakwerk.
            </p>
            <Link
              href="/offerte"
              className="skew-btn bg-dark-navy text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block"
            >
              <span>Afspraak plannen</span>
            </Link>
          </div>
          <div className="space-y-12">
            {[
              {
                n: "01",
                title: "Kennismaking & Inmeting",
                desc: "We komen bij u langs, bekijken de situatie en bespreken uw wensen. Vrijblijvend en zonder verplichtingen.",
              },
              {
                n: "02",
                title: "Offerte op Maat",
                desc: "Binnen 24 uur ontvangt u een gedetailleerde, transparante offerte. Geen verborgen kosten.",
              },
              {
                n: "03",
                title: "Vakkundige Uitvoering",
                desc: "Ons team gaat aan de slag met oog voor detail. We houden u op de hoogte van elke stap.",
              },
              {
                n: "04",
                title: "Oplevering & Nazorg",
                desc: "Pas als u 100% tevreden bent, is het project klaar. Met garantie op al ons werk.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-8 group">
                <span className="text-5xl font-headline font-black text-outline-variant transition-colors group-hover:text-primary leading-none">
                  {step.n}
                </span>
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-[-12deg] translate-x-1/2 -z-0" />
      </section>

      {/* ── 8. CTA ── */}
      <section className="relative py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/echt-slaapkamer-greige-wand.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark-navy/80" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="bg-primary p-12 md:p-20 shadow-2xl relative skew-x-[-4deg]">
              <div className="skew-x-[4deg]">
                <h2 className="text-4xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-8 leading-none">
                  Klaar voor een perfecte afwerking?
                </h2>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">
                  Vraag binnen 2 minuten een vrijblijvende offerte aan voor uw
                  project. Wij reageren doorgaans binnen 24 uur.
                </p>
                <Link
                  href="/offerte"
                  className="skew-btn bg-white text-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm inline-block"
                >
                  <span>Offerte aanvragen</span>
                </Link>
              </div>
            </div>
            <div className="space-y-10">
              {[
                {
                  n: "01.",
                  desc: "Binnen 24 uur een gespecificeerde prijsopgave in uw mailbox.",
                },
                {
                  n: "02.",
                  desc: "Gratis kleuradvies bij elke getekende offerte voor schilderwerk.",
                },
                {
                  n: "03.",
                  desc: "10 jaar garantie op de hechting van al ons stucwerk.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-6">
                  <span className="text-2xl font-headline font-black text-primary">
                    {item.n}
                  </span>
                  <p className="text-slate-200 font-medium">{item.desc}</p>
                </div>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex text-star-gold">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="text-sm text-slate-300">
                  Beoordeeld met een <strong className="text-white">9.7</strong> op basis van 240+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
