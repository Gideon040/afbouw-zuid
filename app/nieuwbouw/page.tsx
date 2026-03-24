import Link from "next/link";
import { diensten } from "@/lib/diensten";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nieuwbouw Afbouw",
  description: "Compleet afbouwwerk voor uw nieuwbouwwoning. Stucwerk, schilderwerk, vloeren en traprenovatie in Brabant & Limburg.",
  alternates: { canonical: "https://afbouwzuid.nl/nieuwbouw" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://afbouwzuid.nl" },
    { "@type": "ListItem", position: 2, name: "Nieuwbouw", item: "https://afbouwzuid.nl/nieuwbouw" },
  ],
};

export default function NieuwbouwPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── 1. HERO ── */}
      <section className="pt-28 pb-12 md:pb-20 px-6 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-5 md:space-y-6">
            <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase skew-btn">
              <span className="skew-btn-content inline-block">Nieuwbouw Afbouw</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface uppercase leading-none">
              Compleet<br /><span className="text-primary">Afbouwwerk</span>
            </h1>

            <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Van het eerste stucwerk tot de laatste verflaag en het leggen van de vloer. Eén vakkundig team voor een perfect afgewerkte nieuwbouwwoning.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="/offerte" className="skew-btn bg-primary text-white px-6 md:px-8 py-3 md:py-4 shadow-xl shadow-primary/20 inline-block">
                <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-xs md:text-sm">Gratis offerte</span>
              </Link>
              <Link href="/#projecten" className="skew-btn border-2 border-dark-navy text-dark-navy px-6 md:px-8 py-3 md:py-4 inline-block">
                <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-xs md:text-sm">Bekijk projecten</span>
              </Link>
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <div className="flex text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="font-bold text-on-surface">9.7</span>
              <span className="text-outline text-sm">klanttevredenheid op basis van 240+ reviews</span>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/3] bg-surface-container-highest hero-clip overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nieuwbouw-casco-stucwerk.webp" alt="Nieuwbouw afbouwwerk" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST TICKER ── */}
      <div className="bg-dark-navy py-6 overflow-hidden whitespace-nowrap border-y border-white/5">
        <div className="flex animate-marquee gap-12 text-white/90 font-headline font-bold uppercase tracking-[0.3em] text-xs items-center">
          <span>Nieuwbouw ◆ Stucwerk ◆ Schilderwerk ◆ Vloeren ◆ Plafonds ◆ Trappen ◆ Spuitwerk ◆ Lakwerk</span>
          <span>Nieuwbouw ◆ Stucwerk ◆ Schilderwerk ◆ Vloeren ◆ Plafonds ◆ Trappen ◆ Spuitwerk ◆ Lakwerk</span>
          <span>Nieuwbouw ◆ Stucwerk ◆ Schilderwerk ◆ Vloeren ◆ Plafonds ◆ Trappen ◆ Spuitwerk ◆ Lakwerk</span>
        </div>
      </div>

      {/* ── 3. INTRO ── */}
      <section className="py-16 md:py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Nieuwbouw Specialist</span>
              <h2 className="text-3xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-6 md:mb-8">
                Uw nieuwbouwwoning perfect afgewerkt
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Een nieuwbouwwoning is een blanco canvas. Bij AfbouwZuid maken we daar een thuis van. Van strakke wanden en plafonds tot een prachtige vloer en een perfect geschilderde trap — wij leveren compleet afbouwwerk uit één hand. Geen gedoe met meerdere aannemers, maar één vast team dat uw woning van casco tot woonklaar afwerkt.
              </p>
              <div className="flex items-center gap-8">
                <Link href="/offerte" className="skew-btn border-2 border-dark-navy text-dark-navy px-8 py-3 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                  <span>Vrijblijvend advies</span>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black font-headline">200+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Nieuwbouw<br />projecten</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[280px] gap-2 md:gap-3 px-2 md:px-3 mt-12 md:mt-20" style={{ gridAutoFlow: "dense" }}>
            {(() => { const d = [...diensten]; [d[5], d[9]] = [d[9], d[5]]; return d; })().map((dienst, i) => {
              const isLarge = i === 0 || i === 4;
              return (
                <Link
                  key={dienst.slug}
                  href={`/diensten/${dienst.slug}`}
                  className={`relative overflow-hidden group ${isLarge ? "col-span-2 row-span-2" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={dienst.heroImage} alt={dienst.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 block mb-1">{dienst.category}</span>
                    <h3 className={`font-headline font-bold uppercase tracking-widest text-white ${isLarge ? "text-2xl md:text-3xl tracking-tighter mb-3" : "text-sm"}`}>{dienst.title}</h3>
                    {isLarge && (
                      <p className="text-white/60 text-sm leading-relaxed max-w-md hidden md:block">{dienst.excerpt}</p>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-100">
                    <span className="material-symbols-outlined text-white text-sm">arrow_forward</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* ── 5. WERKWIJZE ── */}
      <section className="py-16 md:py-32 bg-surface-container-low overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Werkwijze</span>
            <h2 className="text-3xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-6 md:mb-8">
              Van casco tot woonklaar in 4 stappen
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
              Onze beproefde werkwijze zorgt voor een soepel verloop van elk nieuwbouw afbouwproject. Eén aanspreekpunt, heldere planning, geen verrassingen.
            </p>
            <Link href="/offerte" className="skew-btn bg-primary text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block">
              <span>Plan een kennismaking</span>
            </Link>
          </div>
          <div className="space-y-12">
            {[
              { n: "01", title: "Kennismaking", desc: "Wij komen bij u langs om de woning te bekijken, uw wensen te bespreken en een plan op maat te maken." },
              { n: "02", title: "Plan & Offerte", desc: "U ontvangt een gedetailleerde offerte met een heldere planning. Geen verrassingen, transparante prijzen." },
              { n: "03", title: "Uitvoering", desc: "Ons vaste team gaat aan de slag. Stucwerk, schilderwerk, vloeren en meer — allemaal strak op elkaar afgestemd." },
              { n: "04", title: "Oplevering", desc: "Samen lopen we de woning door. Pas als u 100% tevreden bent, is het project voor ons afgerond." },
            ].map((step) => (
              <div key={step.n} className="flex gap-8 group">
                <span className="text-5xl font-headline font-black text-outline-variant transition-colors group-hover:text-primary leading-none">{step.n}</span>
                <div>
                  <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-2">{step.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-[-12deg] translate-x-1/2 -z-0" />
      </section>

      {/* ── 6. CTA ── */}
      <section className="relative py-32 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-stukadoors-nieuwbouw.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark-navy/80" />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="bg-primary p-8 md:p-24 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-white/20" />
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Nieuwbouw woning laten afwerken?
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Vraag binnen 2 minuten een vrijblijvende offerte aan voor uw nieuwbouwproject. Wij reageren doorgaans binnen 24 uur.
              </p>
              <Link href="/offerte" className="skew-btn bg-white text-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Offerte aanvragen</span>
              </Link>
            </div>
            <div className="space-y-10">
              {[
                { n: "01.", desc: "Binnen 24 uur een gespecificeerde prijsopgave in uw mailbox." },
                { n: "02.", desc: "Eén vast team voor stucwerk, schilderwerk, vloeren en meer." },
                { n: "03.", desc: "10 jaar garantie op de hechting van al ons stucwerk." },
              ].map((item) => (
                <div key={item.n} className="flex gap-6">
                  <span className="text-2xl font-headline font-black text-sky-400">{item.n}</span>
                  <p className="text-slate-200 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
