import Link from "next/link";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AfbouwZuid",
  image: "https://afbouwzuid.nl/logo.png",
  url: "https://afbouwzuid.nl",
  telephone: "+31-6-38903004",
  email: "info@afbouwzuid.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jacob van Campenweg 25",
    addressLocality: "Eindhoven",
    postalCode: "5624 CD",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4416,
    longitude: 5.4697,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "State", name: "Noord-Brabant" },
    { "@type": "State", name: "Limburg" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.7",
    bestRating: "10",
    ratingCount: "240",
  },
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* ── 1. HERO ── */}
      <section className="relative min-h-[100svh] md:min-h-[560px] pt-32 pb-12 md:pb-20 px-6 md:px-16 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src="/hero-stukadoors-nieuwbouw.webp"
            alt="Stukadoors aan het werk in nieuwbouw"
          />
          <div className="absolute inset-0 bg-dark-navy/60" />
        </div>
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-12 w-full">
          <div className="flex-1 space-y-5 md:space-y-6">
            <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase skew-btn">
              <span className="skew-btn-content inline-block">Stuc- &amp; Afbouwwerk</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold font-headline tracking-tighter text-white uppercase leading-none">
              Topkwaliteit<br /><span className="text-white/60">afbouwwerk</span>
            </h1>

            <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Vakmanschap in stucwerk, schilderwerk, vloeren en meer. Compleet en stijlvol, voor nieuwbouw én renovatie.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <Link href="/offerte" className="skew-btn bg-primary text-white px-6 md:px-8 py-3 md:py-4 shadow-xl shadow-primary/20 inline-block">
                <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-xs md:text-sm">Gratis offerte</span>
              </Link>
              <Link href="/#projecten" className="skew-btn border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 inline-block">
                <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-xs md:text-sm">Bekijk projecten</span>
              </Link>
            </div>

            <div className="flex items-center space-x-2 pt-2 md:pt-4">
              <div className="flex text-star-gold">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="font-bold text-white text-sm">9.7</span>
              <span className="text-white/50 text-xs md:text-sm">klanttevredenheid · 240+ reviews</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col md:flex-row gap-6 flex-shrink-0">
            <div className="bg-white/90 backdrop-blur-xl p-8 border-l-4 border-primary">
              <h3 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-4">Direct aan de slag?</h3>
              <Link href="/offerte" className="skew-btn bg-primary text-on-primary w-full py-4 font-headline font-bold uppercase tracking-widest text-sm block text-center">
                <span>Offerte aanvragen</span>
              </Link>
            </div>
            <div className="bg-white/90 backdrop-blur-xl p-8 border-l-4 border-dark-navy">
              <h3 className="font-headline font-bold uppercase tracking-widest text-dark-navy mb-4">Persoonlijk advies</h3>
              <Link href="/offerte" className="skew-btn bg-dark-navy text-white w-full py-4 font-headline font-bold uppercase tracking-widest text-sm block text-center">
                <span>Afspraak plannen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ── */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-24">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Meubels &amp; Interieur</span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-8">
                Vakmanschap in stucwerk, vloeren en meer
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Bij AfbouwZuid geloven we dat een woning pas echt een thuis wordt door de details. Onze passie ligt in het creëren van strakke wanden, naadloze plafonds en karaktervolle vloeren die jarenlang meegaan.
              </p>
              <Link href="/over-ons" className="skew-btn border-2 border-dark-navy text-dark-navy px-8 py-3 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Meer over ons</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 perspective-grid">
            {[
              { label: "Wanden", img: "/wanden-terracotta-accentwand.webp" },
              { label: "Plafonds", img: "/plafonds-strak-wit-woonkamer.webp", offset: true },
              { label: "Vloeren", img: "/vloeren-visgraat-parket.webp" },
              { label: "Trappen", img: "/trappen-witte-dichte-trap.webp", offset: true },
            ].map((item) => (
              <div key={item.label} className={`relative aspect-[3/4] overflow-hidden group ${item.offset ? "mt-12" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <div className="bg-white p-8 shadow-[0_20px_50px_rgba(11,22,40,0.05)] border-t-4 border-star-gold flex items-center gap-6">
              <div className="text-4xl font-black font-headline text-dark-navy">9.7</div>
              <div className="h-10 w-[1px] bg-outline-variant" />
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">200+ Reviews van tevreden klanten</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. TRUST TICKER ── */}
      <div className="bg-dark-navy py-6 overflow-hidden whitespace-nowrap border-y border-white/5">
        <div className="flex animate-marquee gap-12 text-white/90 font-headline font-bold uppercase tracking-[0.3em] text-xs items-center">
          <span>Nieuwbouw ◆ Renovatie ◆ Wandafwerking ◆ Plafonds ◆ Vloeren ◆ Trappen ◆ Stucwerk ◆ Schilderwerk</span>
          <span>Nieuwbouw ◆ Renovatie ◆ Wandafwerking ◆ Plafonds ◆ Vloeren ◆ Trappen ◆ Stucwerk ◆ Schilderwerk</span>
          <span>Nieuwbouw ◆ Renovatie ◆ Wandafwerking ◆ Plafonds ◆ Vloeren ◆ Trappen ◆ Stucwerk ◆ Schilderwerk</span>
        </div>
      </div>

      {/* ── 5. NIEUWBOUW vs RENOVATIE ── */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/nieuwbouw" className="group relative overflow-hidden aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/nieuwbouw-casco-stucwerk.webp" alt="Nieuwbouw" />
            <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-dark-navy/40 transition-colors" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-5xl font-headline font-black text-white uppercase tracking-tighter mb-4">Nieuwbouw</h3>
              <div className="w-12 h-1 bg-primary transform group-hover:w-24 transition-all" />
            </div>
          </Link>
          <Link href="/renovatie" className="group relative overflow-hidden aspect-square md:mt-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/echt-renovatie-kamer-rolluiken.webp" alt="Renovatie" />
            <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-dark-navy/40 transition-colors" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-5xl font-headline font-black text-white uppercase tracking-tighter mb-4">Renovatie</h3>
              <div className="w-12 h-1 bg-primary transform group-hover:w-24 transition-all" />
            </div>
          </Link>
        </div>
      </section>

      {/* ── 6. CTA - PLAN ADVIESGESPREK ── */}
      <section id="werkwijze" className="py-32 bg-surface-container-low overflow-hidden relative">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Persoonlijk Contact</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-8">
              Zullen we uw plannen bespreken?
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-xl">
              Een afspraak is bij ons altijd vrijblijvend. We luisteren naar uw wensen, bekijken de mogelijkheden en geven u een eerlijk advies over de beste afwerking voor uw ruimte.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/offerte" className="skew-btn bg-dark-navy text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Afspraak plannen</span>
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black font-headline">9.7</span>
                <div className="flex flex-col">
                  <div className="flex text-star-gold text-[10px]">★★★★★</div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Klantscore</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12">
            {[
              { n: "01", title: "Transparante Werkwijze", desc: "Geen verrassingen achteraf. We werken met een heldere planning en duidelijke afspraken." },
              { n: "02", title: "Eerlijke Prijsstelling", desc: "Hoogwaardige afwerking voor een realistische prijs. Wij geloven in duurzame kwaliteit." },
              { n: "03", title: "Oog voor Detail", desc: "Wij zijn pas tevreden als elke hoek perfect is afgewerkt en u 100% tevreden bent." },
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

      {/* ── 7. DIENSTEN - STUCWERK ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/echt-nieuwbouw-woonkamer-gestuct.webp"
          alt=""
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-navy/85" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="mb-16">
            <span className="text-sky-400 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Onze Expertise</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter leading-none">Stucwerk van de hoogste plank</h2>
          </div>
          <div className="divide-y divide-white/15">
            {[
              { icon: "texture", title: "Traditioneel Stucwerk", desc: "Dé basis voor elke woning. Wij zorgen voor spiegelgladde wanden en plafonds die perfect behangklaar of sausklaar zijn.", slug: "traditioneel-stucwerk" },
              { icon: "format_paint", title: "SPACK Spuitwerk", desc: "Een snelle en voordelige methode voor een mooie korrelstructuur op uw wanden en plafonds in elke gewenste kleur.", slug: "spack-spuitwerk" },
              { icon: "brush", title: "Dunpleister", desc: "De ideale oplossing voor nieuwbouwwoningen om snel en efficiënt een strak resultaat te behalen op betonwanden.", slug: "dunpleister" },
              { icon: "wallpaper", title: "Renovlies", desc: "De perfecte combinatie tussen behang en stucwerk. Scheuroverbruggend en naadloos voor een tijdloze uitstraling.", slug: "renovlies-behang" },
            ].map((s) => (
              <Link key={s.slug} href={`/diensten/${s.slug}`} className="py-8 md:py-12 block md:grid md:grid-cols-12 md:gap-8 group hover:bg-white/5 px-8 -mx-8 transition-colors">
                <div className="flex items-center gap-3 mb-3 md:mb-0 md:contents">
                  <span className="material-symbols-outlined text-white/70 text-2xl md:text-3xl md:col-span-1">{s.icon}</span>
                  <h3 className="font-headline font-bold uppercase tracking-widest text-white text-sm md:text-base md:col-span-3">{s.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-3 md:mb-0 md:col-span-6">{s.desc}</p>
                <div className="md:col-span-2 flex md:justify-end">
                  <span className="text-sky-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Bekijk meer <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DIENSTEN - SCHILDERWERK ── */}
      <section className="bg-surface-container-low">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover absolute inset-0" src="/dienst-ambachtelijk-schilderwerk.webp" alt="Schilderwerk" />
            <div className="absolute inset-0 bg-dark-navy/10" />
          </div>
          <div className="p-16 md:p-24 flex flex-col justify-center">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Service 01</span>
            <h3 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter mb-6">Ambachtelijk Schilderwerk</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">Wij combineren traditionele technieken met moderne materialen voor een duurzaam en esthetisch resultaat. Of het nu gaat om kozijnen, deuren of wanden.</p>
            <div className="flex gap-4">
              <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">Binnen</span>
              <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">Buiten</span>
            </div>
          </div>
          <div className="order-last lg:order-none p-16 md:p-24 flex flex-col justify-center lg:text-right lg:items-end">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Service 02</span>
            <h3 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter mb-6">Latexspuiten</h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">De modernste manier om grote oppervlakken egaal en strak te voorzien van kleur. Sneller en strakker dan traditioneel rollen.</p>
            <div className="flex gap-4 lg:flex-row-reverse">
              <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">High-End</span>
              <span className="bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">Snelheid</span>
            </div>
          </div>
          <div className="relative min-h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover absolute inset-0" src="/dienst-latex-spuiten.webp" alt="Latexspuiten" />
            <div className="absolute inset-0 bg-dark-navy/10" />
          </div>
        </div>
      </section>

      {/* ── 9. OVERIGE DIENSTEN - VLOER & TRAP ── */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative h-[600px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/vloeren-visgraat-parket.webp" alt="Vloerbedekking" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-2">Vloerbedekking</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-sm">Van PVC tot tapijt, wij zorgen voor een perfect gelegde vloer die past bij uw interieur.</p>
              <Link href="/diensten/vloerbedekking" className="skew-btn bg-white text-dark-navy px-8 py-3 font-headline font-bold uppercase tracking-widest text-xs inline-block">
                <span>Ontdek vloeren</span>
              </Link>
            </div>
          </div>
          <div className="group relative h-[600px] overflow-hidden md:mt-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/dienst-trap-schilderen.webp" alt="Traprenovatie" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter mb-2">Traprenovatie</h3>
              <p className="text-slate-300 text-sm mb-6 max-w-sm">Geef uw trap een tweede leven met onze duurzame en stijlvolle renovatieoplossingen.</p>
              <Link href="/diensten/trap-schilderen" className="skew-btn bg-white text-dark-navy px-8 py-3 font-headline font-bold uppercase tracking-widest text-xs inline-block">
                <span>Ontdek trappen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. ALLES ONDER ÉÉN DAK ── */}
      <section id="over-ons" className="py-32 bg-surface-container overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Onze Missie</span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-8">
                Alles onder één dak voor uw afwerking
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Waarom werken met verschillende partijen als het ook met één kan? Bij AfbouwZuid regelen we het hele proces, van het eerste stucwerk tot de laatste laag verf en het leggen van de vloer. Eén aanspreekpunt, één planning en één resultaat: Perfectie.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-dark-navy">Eén aanspreekpunt voor alle werkzaamheden</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold text-dark-navy">Naadloze aansluiting van verschillende disciplines</span>
                </div>
              </div>
              <Link href="/offerte" className="skew-btn bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Ontdek alles in één afwerking</span>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 border-t-8 border-l-8 border-primary/20 -z-0" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl" src="/echt-kamer-sierpleister-accentwand.webp" alt="Interieur afwerking" />
              <div className="absolute bottom-12 -right-12 bg-dark-navy p-12 z-20 hidden md:block">
                <span className="text-white font-headline font-black text-6xl uppercase leading-none block">100%</span>
                <span className="text-primary text-xs uppercase tracking-widest font-bold">Ontzorgd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. PROJECTEN ── */}
      <section id="projecten" className="py-32 bg-surface overflow-hidden">
        <div className="container mx-auto px-8 flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none">Realisaties</h2>
          </div>
          <a className="hidden md:flex items-center gap-4 group" href="#">
            <span className="text-xs font-bold uppercase tracking-widest text-dark-navy">Bekijk alle projecten</span>
            <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </a>
        </div>
        <div className="container mx-auto px-8 flex flex-col md:flex-row gap-6">
          {[
            { label: "Modern Appartement", city: "Veghel", h: "h-[500px]", mt: "", img: "/project-nieuwbouw-oplevering.webp" },
            { label: "Luxe Villa", city: "Breda", h: "h-[600px]", mt: "md:-mt-12", img: "/project-renovatie-groene-wand.webp" },
            { label: "Historisch Pand", city: "Wageningen", h: "h-[450px]", mt: "", img: "/project-badkamer-betonstuc.webp" },
            { label: "Modern Woonhuis", city: "Helmond", h: "h-[550px]", mt: "md:-mt-6", img: "/project-kinderkamer-peach.webp" },
          ].map((p) => (
            <div key={p.city} className={`flex-1 group cursor-pointer ${p.h} overflow-hidden relative ${p.mt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={p.img} alt={p.city} />
              <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-dark-navy/0 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold mb-2">{p.label}</p>
                <h4 className="text-2xl font-headline font-bold text-white uppercase tracking-widest">{p.city}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12. REVIEWS ── */}
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-1">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-7xl font-headline font-black text-dark-navy">9.7</span>
                <div className="flex text-star-gold">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm uppercase tracking-[0.3em] font-bold">Gebaseerd op 234 klantbeoordelingen</p>
            </div>
            <div className="lg:col-span-1">
              <p className="text-xl text-dark-navy italic leading-relaxed font-medium">
                &ldquo;Zeer deskundige vakschilder die onze nieuwbouw woning in Vlijmen volledig heeft voorzien van vliesbehang, en een prachtige kleur verf.&rdquo;
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-4">— S B</p>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-primary p-8 shadow-xl flex flex-col justify-between h-full">
                <h4 className="text-white font-headline font-bold uppercase tracking-widest text-lg mb-4">Weten wat de kosten zijn?</h4>
                <Link href="/offerte" className="skew-btn bg-white text-primary px-6 py-3 font-headline font-bold uppercase tracking-widest text-xs self-start inline-block">
                  <span>Vraag offerte</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Alexis Barron", text: "\"Deze mannen hadden 2 dagen tijd om een hele flat te behangen en het plafond te schilderen. Het ziet er echt super uit. Fijne samenwerking met goede communicatie!!\"" },
              { name: "Marlie S", text: "\"Dichte trap boven en onder laten schilderen inclusief kitwerk. Super snelle service (1 week na aanvraag was het al af). Fijne communicatie vooraf. Vriendelijk personeel en netjes gewerkt.\"" },
              { name: "Peter Visser", text: "\"Binnenschilderwerk: 120 m² wanden; 40 m² plafonds. Flexibel, mooi gespoten. Eerlijk over fout met verfmix en goed opgelost!\"" },
              { name: "Frans Flagge", text: "\"Jordy heeft samen met Bryan goed werk afgeleverd. Ze konden snel schakelen door de slimme manier van plannen.\"" },
            ].map((r) => (
              <div key={r.name} className="bg-white p-8 border-b-2 border-outline-variant">
                <div className="flex text-star-gold text-sm mb-4">★★★★★</div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{r.text}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-dark-navy">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. PARTNER LOGOS ── */}
      <section className="py-24 bg-surface border-y border-outline-variant/20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all">
            {["SENSE", "UZIN", "PPC", "BOONSTOPPEL", "SIKA", "FESTOOL"].map((brand) => (
              <div key={brand} className="text-center font-black text-2xl font-headline tracking-tighter">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. CTA - OFFERTE ── */}
      <section className="relative py-32 overflow-hidden">
        {/* Background image */}
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
            <div className="bg-primary p-12 md:p-24 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-white/20" />
              <h2 className="text-4xl md:text-5xl font-headline font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Klaar voor een perfecte afwerking?
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Vraag binnen 2 minuten een vrijblijvende offerte aan voor uw project. Wij reageren doorgaans binnen 24 uur.
              </p>
              <Link href="/offerte" className="skew-btn bg-white text-primary px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Offerte aanvragen</span>
              </Link>
            </div>
            <div className="space-y-10">
              {[
                { n: "01.", desc: "Binnen 24 uur een gespecificeerde prijsopgave in uw mailbox." },
                { n: "02.", desc: "Gratis kleuradvies bij elke getekende offerte voor schilderwerk." },
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

      {/* ── 15. FAQ ── */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Veelgestelde vragen</span>
            <h2 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter mb-12">Alles wat u wilt weten</h2>
            <div className="space-y-6">
              <details className="group border-b border-outline-variant pb-6 cursor-pointer" open>
                <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                  <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm">Wat is de gemiddelde droogtijd van stucwerk?</h4>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">De droogtijd hangt af van de dikte en de omgevingstemperatuur. Gemiddeld rekenen we 1 mm per dag bij een temperatuur van 20 graden en goede ventilatie.</p>
              </details>
              <details className="group border-b border-outline-variant pb-6 cursor-pointer">
                <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                  <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm">Werken jullie ook buiten de regio?</h4>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Hoewel wij voornamelijk actief zijn in Zuid-Nederland, nemen wij grotere projecten door heel het land aan. Neem contact op voor de mogelijkheden.</p>
              </details>
              <details className="group border-b border-outline-variant pb-6 cursor-pointer">
                <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                  <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm">Zijn jullie prijzen inclusief BTW?</h4>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">Voor woningen ouder dan 2 jaar geldt vaak het verlaagde BTW-tarief van 9%. In onze offertes specificeren wij dit altijd duidelijk.</p>
              </details>
            </div>
          </div>
          <div>
            <div className="bg-surface-container-low p-12 border-l-8 border-dark-navy">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-24 h-24 object-cover mb-8 filter grayscale" src="/hero-stukadoors-nieuwbouw.webp" alt="Consultant" />
              <h4 className="text-2xl font-headline font-black text-dark-navy uppercase tracking-widest mb-2">Hulp nodig?</h4>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">&ldquo;Ik beantwoord graag al uw vragen over onze diensten en help u bij het maken van de juiste keuze voor uw woning.&rdquo;</p>
              <div className="space-y-4">
                <Link href="/offerte" className="skew-btn border-2 border-dark-navy text-dark-navy w-full py-4 font-headline font-bold uppercase tracking-widest text-xs block text-center">
                  <span>Meer weten</span>
                </Link>
                <Link href="/offerte" className="skew-btn bg-primary text-on-primary w-full py-4 font-headline font-bold uppercase tracking-widest text-xs block text-center">
                  <span>Gratis offerte</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. BLOG / ARTIKELEN — tijdelijk uitgeschakeld
      <section className="py-32 bg-surface-container-low">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Inspiratie &amp; Tips</span>
              <h2 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none">Laatste Artikelen</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { tag: "Nieuwbouw", title: "Trends in wandafwerking voor 2024", img: "/echt-slaapkamer-groen-accentwand.webp" },
              { tag: "Blog", title: "Hoe bereidt u uw woning voor op stucwerk?", img: "/echt-renovatie-slaapkamer-gestuct.webp" },
              { tag: "Trends", title: "PVC of Gietvloer: De voor- en nadelen", img: "/echt-slaapkamer-olijfgroen-accentwand.webp" },
              { tag: "Onderhoud", title: "Tips voor het onderhoud van uw schilderwerk", img: "/echt-renovatie-zolder-gestuct.webp" },
            ].map((article) => (
              <div key={article.title} className="group cursor-pointer">
                <div className="h-64 overflow-hidden mb-6">
                  <img className="w-full h-full object-cover transition-transform group-hover:scale-110" src={article.img} alt={article.title} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">{article.tag}</span>
                <h4 className="font-headline font-bold text-dark-navy uppercase tracking-widest text-sm leading-tight group-hover:text-primary transition-colors">{article.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ── 17. CONTACT ── */}
      <section id="contact" className="py-32 bg-surface overflow-hidden">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Contact</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-12">Neem contact met ons op</h2>
            <form action="https://formspree.io/f/mnjoajqz" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Contactformulier Homepage" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Naam</label>
                  <input name="naam" className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors" type="text" required />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Telefoon</label>
                  <input name="telefoon" className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors" type="tel" required />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Bericht</label>
                <textarea name="bericht" className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors resize-none" rows={4} />
              </div>
              <button type="submit" className="skew-btn bg-primary text-on-primary px-12 py-4 font-headline font-bold uppercase tracking-widest text-sm">
                <span>Versturen</span>
              </button>
            </form>
          </div>
          <div className="relative">
            <div className="bg-dark-navy p-12 text-white relative z-10">
              <h3 className="text-2xl font-headline font-black uppercase tracking-widest mb-8">Contact</h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">phone</span>
                  <p className="text-sm text-slate-400">06-38903004</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p className="text-sm text-slate-400">info@afbouwzuid.nl</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="text-sm text-slate-400">Jacob van Campenweg 25<br />5624CD Eindhoven</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full aspect-square object-cover" src="/echt-hal-gestuct-bouwlamp.webp" alt="Showroom 1" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full aspect-square object-cover" src="/hal-gestuct-witte-trap.webp" alt="Showroom 2" />
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-full h-full border-b-8 border-r-8 border-primary/10 -z-0" />
          </div>
        </div>
      </section>
    </>
  );
}
