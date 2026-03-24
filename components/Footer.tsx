import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="bg-dark-navy py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-primary origin-left -skew-y-[2deg]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="AfbouwZuid" className="h-5 brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Uw partner voor hoogwaardige afbouwprojecten. Van stucwerk tot complete interieurtransformaties.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">phone</span>
                <a href="tel:0638903004" className="hover:text-white transition-colors">06-38903004</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">mail</span>
                <a href="mailto:info@afbouwzuid.nl" className="hover:text-white transition-colors">info@afbouwzuid.nl</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">location_on</span>
                <span>Jacob van Campenweg 25, Eindhoven</span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-headline font-bold uppercase tracking-widest mb-8 text-xs">Menu</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/over-ons">Over ons</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/nieuwbouw">Nieuwbouw</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/renovatie">Renovatie</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/offerte">Offerte aanvragen</Link></li>
            </ul>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-headline font-bold uppercase tracking-widest mb-8 text-xs">Diensten</h4>
            <ul className="space-y-4">
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/diensten/traditioneel-stucwerk">Stucwerk</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/diensten/ambachtelijk-schilderwerk">Schilderwerk</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/diensten/vloerbedekking">Vloeren</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/diensten/trap-schilderen">Traprenovatie</Link></li>
              <li><Link className="text-slate-400 hover:text-white transition-all text-sm block hover:translate-x-1" href="/diensten/latex-spuiten">Latex spuiten</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} AfbouwZuid. Alle rechten voorbehouden.
          </p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/31638903004"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}
