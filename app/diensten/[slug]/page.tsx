import Link from "next/link";
import { notFound } from "next/navigation";
import { diensten, getDienst, getRelatedDiensten } from "@/lib/diensten";
import type { Metadata } from "next";

export function generateStaticParams() {
  return diensten.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dienst = getDienst(params.slug);
  if (!dienst) return {};
  return {
    title: `${dienst.title} | AfbouwZuid`,
    description: dienst.excerpt,
    alternates: { canonical: `https://afbouwzuid.nl/diensten/${dienst.slug}` },
  };
}

export default function DienstPage({ params }: { params: { slug: string } }) {
  const dienst = getDienst(params.slug);
  if (!dienst) notFound();

  const related = getRelatedDiensten(dienst.relatedSlugs);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: dienst.title,
    description: dienst.excerpt,
    provider: {
      "@type": "LocalBusiness",
      name: "AfbouwZuid",
      url: "https://afbouwzuid.nl",
    },
    areaServed: [
      { "@type": "State", name: "Noord-Brabant" },
      { "@type": "State", name: "Limburg" },
    ],
    url: `https://afbouwzuid.nl/diensten/${dienst.slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dienst.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://afbouwzuid.nl" },
      { "@type": "ListItem", position: 2, name: "Diensten", item: "https://afbouwzuid.nl/diensten" },
      { "@type": "ListItem", position: 3, name: dienst.title, item: `https://afbouwzuid.nl/diensten/${dienst.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── 1. HERO ── */}
      <section className="min-h-[560px] pt-28 pb-20 px-8 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase skew-btn">
            <span className="skew-btn-content inline-block">{dienst.category}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-surface uppercase leading-none">
            {dienst.title.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? word : <><br /><span className="text-primary">{word}</span></>}
              </span>
            ))}
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">{dienst.excerpt}</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/offerte" className="skew-btn bg-primary text-white px-8 py-4 shadow-xl shadow-primary/20 inline-block">
              <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-sm">GRATIS OFFERTE</span>
            </Link>
            <Link href="/#projecten" className="skew-btn border-2 border-dark-navy text-dark-navy px-8 py-4 inline-block">
              <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-sm">BEKIJK PROJECTEN</span>
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
            <img src={dienst.heroImage} alt={dienst.title} className="w-full h-full object-cover" />
          </div>
        </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="bg-white py-12 border-y border-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "straighten", label: "GRATIS INMETING", sub: "Advies op locatie" },
            { icon: "payments", label: "VASTE PRIJS", sub: "Geen verrassingen" },
            { icon: "workspace_premium", label: "100% GARANTIE", sub: "Op al ons werk" },
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

      {/* ── 3. EXPLAINER ── */}
      <section className="py-32 bg-white px-8 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-extrabold font-headline text-on-surface uppercase tracking-tight">
              Wat is {dienst.title.toLowerCase()}?
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              {dienst.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="pt-4 border-l-4 border-primary pl-6">
              <p className="italic text-on-surface font-medium text-xl">&ldquo;Kwaliteit zit in de details die je niet ziet, maar wel voelt in de sfeer van de ruimte.&rdquo;</p>
            </div>
            <div className="pt-6">
              <Link href="/offerte" className="skew-btn bg-primary text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm inline-block">
                <span>Gratis offerte aanvragen</span>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <span className="text-sm text-on-surface-variant">Beoordeeld met een <strong className="text-on-surface">9.7</strong> op basis van 240+ reviews</span>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="bg-surface-container-low aspect-[4/5] skew-x-[-2deg] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={dienst.detailImage} alt={`${dienst.title} detail`} className="w-full h-full object-cover scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BENEFITS ── */}
      <section className="relative py-32 px-8 md:px-16 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={dienst.bgImage}
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-dark-navy/85" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {dienst.benefits.map((b) => (
            <div key={b.title} className="space-y-4">
              <span className="material-symbols-outlined text-white/70 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{b.icon}</span>
              <h3 className="text-xl font-black font-headline uppercase tracking-widest text-white">{b.title}</h3>
              <p className="text-slate-300 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. WERKWIJZE ── */}
      <section className="py-32 bg-white px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold font-headline text-on-surface uppercase tracking-tight mb-16">ONZE WERKWIJZE</h2>
            <div className="space-y-16 relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-surface-container-high" />
              {dienst.steps.map((step, i) => (
                <div key={i} className="relative flex items-start space-x-12">
                  <div className="bg-primary text-white w-12 h-12 flex items-center justify-center font-bold text-xl skew-btn z-10 shrink-0">
                    <span className="skew-btn-content">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-widest mb-2">{step.title}</h4>
                    <p className="text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 h-[600px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dienst.detailImage} alt="Werkwijze" className="w-full h-full object-cover hero-clip" />
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY ── */}
      <section className="py-32 bg-dark-navy text-white px-8 md:px-16 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline uppercase tracking-tighter text-center mb-16">HET RESULTAAT SPREEKT VOOR ZICH</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 h-96 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="/echt-kamer-sierpleister-accentwand.webp" alt="Resultaat keuken" />
            </div>
            <div className="h-96 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="/echt-slaapkamer-groen-accentwand.webp" alt="Resultaat slaapkamer" />
            </div>
            <div className="h-96 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="/hal-gestuct-witte-trap.webp" alt="Resultaat hal" />
            </div>
          </div>
          <div className="mt-12 md:max-w-lg mx-auto bg-white p-8 text-on-surface skew-x-[-4deg]">
            <div className="skew-x-[4deg]">
              <div className="flex text-tertiary mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-lg italic font-medium mb-4 leading-relaxed">&ldquo;AfbouwZuid heeft onze hele benedenverdieping gestuct. Het resultaat is echt waanzinnig strak, we hoefden bijna niet meer te schuren voor het sausen.&rdquo;</p>
              <p className="font-bold uppercase tracking-widest text-sm">— FAMILIE DE VRIES, EINDHOVEN</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent" />
      </section>

      {/* ── 7. PRICING ── */}
      <section className="py-32 bg-white px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-20">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold font-headline text-on-surface uppercase tracking-tight mb-8">TRANSPARANTE TARIEVEN</h2>
            <p className="text-on-surface-variant mb-12">{dienst.pricingNote}</p>
            <div className="border-t border-surface-container-high">
              {dienst.pricing.map((p) => (
                <div key={p.label} className="py-6 flex justify-between items-center border-b border-surface-container-high hover:bg-surface transition-colors px-4">
                  <span className="font-bold text-lg">{p.label}</span>
                  <span className="text-primary font-black text-xl">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-primary p-12 text-white skew-x-[-4deg]">
              <div className="skew-x-[4deg] space-y-6">
                <h3 className="text-3xl font-black font-headline uppercase leading-none">EXACTE PRIJS WETEN VOOR UW PROJECT?</h3>
                <p className="text-white/80">Vraag binnen 2 minuten een vrijblijvende offerte aan en ontvang binnen 24 uur een voorstel op maat.</p>
                <Link href="/offerte" className="skew-btn bg-white text-primary px-8 py-4 w-full block text-center">
                  <span className="skew-btn-content inline-block font-bold tracking-widest uppercase text-sm">BEREKEN UW PRIJS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RELATED SERVICES ── */}
      <section className="py-32 bg-surface px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-black font-headline uppercase tracking-widest text-center mb-16">Andere afwerkingen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <Link key={r.slug} href={`/diensten/${r.slug}`} className={`relative aspect-[3/4] overflow-hidden group ${i === 1 ? "md:mt-12" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.heroImage} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-headline font-bold uppercase tracking-widest text-sm text-white">{r.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section className="py-32 bg-surface px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Veelgestelde vragen</span>
            <h2 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter mb-12">Alles wat u wilt weten</h2>
            <div className="space-y-6">
              {dienst.faqs.map((faq, i) => (
                <details key={i} className="group border-b border-outline-variant pb-6 cursor-pointer" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                    <h4 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm">{faq.q}</h4>
                    <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
                </details>
              ))}
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

      {/* ── 10. REVIEWS ── */}
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

      {/* ── 11. CONTACT CTA ── */}
      <section id="contact" className="py-32 bg-surface overflow-hidden px-8 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Contact</span>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-dark-navy uppercase tracking-tighter leading-none mb-12">Neem contact met ons op</h2>
            <form action="https://formspree.io/f/mnjoajqz" method="POST" className="space-y-8">
              <input type="hidden" name="_subject" value="Contactformulier Dienst" />
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
              <h3 className="text-2xl font-headline font-black uppercase tracking-widest mb-8">Bedrijfsinformatie</h3>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="text-sm text-slate-400">Jacob van Campenweg 25<br />5624 CD Eindhoven</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">phone</span>
                  <p className="text-sm text-slate-400">06-38903004</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p className="text-sm text-slate-400">info@afbouwzuid.nl</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <p className="text-sm text-slate-400">Ma – Vr: 08:00 – 17:00<br />Za – Zo: Gesloten</p>
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
