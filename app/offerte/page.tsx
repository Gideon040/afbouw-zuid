"use client";

import { useState } from "react";
import Link from "next/link";

type BuildType = "nieuwbouw" | "renovatie" | null;
type ContactPref = "telefoon" | "email" | null;

export default function OffertePage() {
  const [buildType, setBuildType] = useState<BuildType>(null);
  const [services, setServices] = useState<string[]>([]);
  const [contactPref, setContactPref] = useState<ContactPref>(null);

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-28 pb-10 md:pb-16 px-6 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="inline-block px-4 py-1 bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase skew-btn mb-4 md:mb-6">
            <span className="skew-btn-content inline-block">Offerte Aanvragen</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface uppercase leading-none mb-4 md:mb-6">
            Vraag gratis een<br /><span className="text-primary">offerte aan</span>
          </h1>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Vul onderstaand formulier in en ontvang binnen 24 uur een vrijblijvende prijsopgave op maat. Geen verrassingen, transparante tarieven.
          </p>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="pb-16 md:pb-32 bg-surface px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">

          {/* ── FORM ── */}
          <form className="space-y-16" action="https://formspree.io/f/mnjoajqz" method="POST">
            <input type="hidden" name="_subject" value="Offerte aanvraag" />
            <input type="hidden" name="bouwtype" value={buildType || ""} />
            <input type="hidden" name="diensten" value={services.join(", ")} />
            <input type="hidden" name="contactvoorkeur" value={contactPref || ""} />

            {/* BOUWTYPE */}
            <div>
              <h2 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm mb-2">Type bouw</h2>
              <p className="text-sm text-on-surface-variant mb-6">Selecteer het type project</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {([
                  { key: "nieuwbouw" as const, icon: "apartment", label: "Nieuwbouw", sub: "Woning jonger dan 2 jaar" },
                  { key: "renovatie" as const, icon: "home_repair_service", label: "Renovatie", sub: "Woning ouder dan 2 jaar" },
                ]).map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setBuildType(t.key)}
                    className={`p-6 text-left transition-all flex items-start gap-4 ${
                      buildType === t.key
                        ? "border-2 border-primary bg-primary/5"
                        : "border-2 border-outline-variant/50 hover:border-outline-variant"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-2xl mt-0.5 ${buildType === t.key ? "text-primary" : "text-outline"}`}>
                      {t.icon}
                    </span>
                    <div>
                      <span className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm block">{t.label}</span>
                      <span className="text-xs text-on-surface-variant">{t.sub}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* DIENSTEN */}
            <div>
              <h2 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm mb-2">Gewenste diensten</h2>
              <p className="text-sm text-on-surface-variant mb-6">Selecteer één of meerdere diensten</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { key: "wanden", icon: "texture", label: "Wanden" },
                  { key: "plafonds", icon: "roofing", label: "Plafonds" },
                  { key: "vloeren", icon: "grid_view", label: "Vloeren" },
                  { key: "trappen", icon: "stairs", label: "Trappen" },
                ].map((s) => {
                  const active = services.includes(s.key);
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => toggleService(s.key)}
                      className={`p-6 text-center transition-all flex flex-col items-center gap-3 ${
                        active
                          ? "border-2 border-primary bg-primary/5"
                          : "border-2 border-outline-variant/50 hover:border-outline-variant"
                      }`}
                    >
                      <span className={`material-symbols-outlined text-3xl ${active ? "text-primary" : "text-outline"}`}>
                        {s.icon}
                      </span>
                      <span className="font-headline font-bold uppercase tracking-widest text-dark-navy text-xs">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTACTGEGEVENS */}
            <div>
              <h2 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm mb-2">Uw gegevens</h2>
              <p className="text-sm text-on-surface-variant mb-6">Hoe kunnen wij u bereiken?</p>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Naam *</label>
                    <input
                      name="naam"
                      className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">E-mailadres *</label>
                    <input
                      name="email"
                      className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Telefoonnummer *</label>
                    <input
                      name="telefoon"
                      className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors"
                      type="tel"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Locatie / Plaats *</label>
                    <input
                      name="locatie"
                      className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input type="checkbox" id="bouwtekeningen" name="bouwtekeningen" value="ja" className="w-4 h-4 accent-primary" />
                  <label htmlFor="bouwtekeningen" className="text-sm text-on-surface-variant">Ik heb bouwtekeningen beschikbaar</label>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant block mb-2">Aanvullende informatie</label>
                  <textarea
                    name="bericht"
                    className="w-full border-0 border-b-2 border-outline-variant bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-colors resize-none"
                    rows={4}
                    placeholder="Beschrijf uw project, wensen of specifieke vragen..."
                  />
                </div>
              </div>
            </div>

            {/* CONTACTVOORKEUR */}
            <div>
              <h2 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm mb-2">Contactvoorkeur</h2>
              <p className="text-sm text-on-surface-variant mb-6">Hoe nemen wij bij voorkeur contact op?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {([
                  { key: "telefoon" as const, icon: "call", label: "Telefonisch" },
                  { key: "email" as const, icon: "mail", label: "Per e-mail" },
                ]).map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setContactPref(c.key)}
                    className={`p-6 text-left transition-all flex items-center gap-4 ${
                      contactPref === c.key
                        ? "border-2 border-primary bg-primary/5"
                        : "border-2 border-outline-variant/50 hover:border-outline-variant"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-2xl ${contactPref === c.key ? "text-primary" : "text-outline"}`}>
                      {c.icon}
                    </span>
                    <span className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="skew-btn bg-primary text-white px-12 py-5 font-headline font-bold uppercase tracking-widest text-sm"
            >
              <span className="flex items-center gap-3">
                Offerte aanvragen
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </button>
          </form>

          {/* ── SIDEBAR ── */}
          <div className="lg:sticky lg:top-32 space-y-6">
            {/* Review badge */}
            <div className="bg-white p-8 border-t-4 border-star-gold">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-black font-headline text-dark-navy">9.7</span>
                <div className="h-10 w-[1px] bg-outline-variant" />
                <div>
                  <div className="flex text-star-gold text-sm">★★★★★</div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">240+ reviews</span>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant italic leading-relaxed">
                &ldquo;Super snelle service en fijne communicatie. Binnen een week was alles perfect afgewerkt.&rdquo;
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-dark-navy mt-3">— Marlie S</p>
            </div>

            {/* Contact info */}
            <div className="bg-dark-navy p-8 text-white">
              <h3 className="font-headline font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <div>
                    <p className="text-sm text-slate-400">Telefoon</p>
                    <a href="tel:0638903004" className="text-sm text-white hover:text-primary transition-colors">06-38903004</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <div>
                    <p className="text-sm text-slate-400">E-mail</p>
                    <a href="mailto:info@afbouwzuid.nl" className="text-sm text-white hover:text-primary transition-colors">info@afbouwzuid.nl</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                  <div>
                    <p className="text-sm text-slate-400">Adres</p>
                    <p className="text-sm text-white">Jacob van Campenweg 25, Eindhoven</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Openingstijden */}
            <div className="bg-white p-8 border-l-4 border-primary">
              <h3 className="font-headline font-bold uppercase tracking-widest text-dark-navy text-sm mb-4">Openingstijden</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Maandag – Vrijdag</span>
                  <span className="font-bold text-dark-navy">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Zaterdag</span>
                  <span className="font-bold text-dark-navy">Op afspraak</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Zondag</span>
                  <span className="font-bold text-dark-navy">Gesloten</span>
                </div>
              </div>
            </div>

            {/* Garanties */}
            <div className="bg-surface-container-low p-8">
              <div className="space-y-4">
                {[
                  { icon: "schedule", text: "Reactie binnen 24 uur" },
                  { icon: "payments", text: "Vrijblijvend & gratis" },
                  { icon: "workspace_premium", text: "100% tevredenheidsgarantie" },
                ].map((g) => (
                  <div key={g.text} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-lg">{g.icon}</span>
                    <span className="text-sm font-bold text-dark-navy">{g.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 md:py-32 bg-surface-container-low">
        <div className="container mx-auto px-6 md:px-8">
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
                <Link href="#form-top" className="skew-btn bg-white text-primary px-6 py-3 font-headline font-bold uppercase tracking-widest text-xs self-start inline-block">
                  <span>Vul het formulier in</span>
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

      {/* ── FAQ ── */}
      <section className="py-16 md:py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs block mb-4">Veelgestelde vragen</span>
          <h2 className="text-4xl font-headline font-black text-dark-navy uppercase tracking-tighter mb-12">Over onze offertes</h2>
          <div className="space-y-6">
            {[
              { q: "Hoe snel ontvang ik mijn offerte?", a: "Wij streven ernaar om binnen 24 uur na ontvangst van uw aanvraag een gedetailleerde offerte te versturen. Bij grotere projecten plannen we eerst een gratis inmeting op locatie." },
              { q: "Is de offerte echt vrijblijvend?", a: "Ja, 100% vrijblijvend. U zit nergens aan vast en er zijn geen kosten verbonden aan het aanvragen van een offerte." },
              { q: "Moet ik bouwtekeningen aanleveren?", a: "Dat hoeft niet, maar het helpt ons wel om de oppervlaktes nauwkeurig te berekenen. Zonder tekeningen plannen we een gratis inmeting bij u op locatie." },
              { q: "Zijn jullie prijzen inclusief BTW?", a: "Voor woningen ouder dan 2 jaar geldt vaak het verlaagde BTW-tarief van 9%. In onze offertes specificeren wij dit altijd duidelijk." },
              { q: "Kan ik een offerte krijgen voor meerdere diensten tegelijk?", a: "Absoluut! Juist bij het combineren van diensten kunnen wij een scherp totaalpakket aanbieden. Eén aanspreekpunt, één planning en een aantrekkelijke totaalprijs." },
            ].map((faq, i) => (
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
      </section>
    </>
  );
}
