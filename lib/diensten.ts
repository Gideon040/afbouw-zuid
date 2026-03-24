export interface DienstItem {
  title: string;
  slug: string;
  desc: string;
  category: string;
  categorySlug: string;
  icon: string;
  heroImage: string;
  detailImage: string;
  bgImage: string;
  excerpt: string;
  body: string[];
  benefits: { title: string; desc: string; icon: string }[];
  steps: { title: string; desc: string }[];
  pricing: { label: string; price: string }[];
  pricingNote: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const categories = {
  "wand-plafond": {
    label: "Wand & Plafond",
    href: "/diensten/wand-plafond",
    icon: "format_paint",
  },
  schilderwerk: {
    label: "Schilderwerk",
    href: "/diensten/schilderwerk",
    icon: "brush",
  },
  traprenovatie: {
    label: "Traprenovatie",
    href: "/diensten/traprenovatie",
    icon: "stairs",
  },
  vloerbedekking: {
    label: "Vloerbedekking",
    href: "/diensten/vloerbedekking",
    icon: "grid_view",
  },
};

export const diensten: DienstItem[] = [
  {
    title: "Traditioneel Stucwerk",
    slug: "traditioneel-stucwerk",
    desc: "Sausklaar & sierpleister",
    category: "Wand & Plafond Afwerking",
    categorySlug: "wand-plafond",
    icon: "texture",
    heroImage: "/echt-nieuwbouw-woonkamer-gestuct.webp",
    detailImage: "/nieuwbouw-casco-stucwerk.webp",
    bgImage: "/echt-hal-gestuct-bouwlamp.webp",
    excerpt: "Spiegelgladde wanden en plafonds die de perfecte basis vormen voor elk interieur. Sausklaar of sierpleister — altijd vakwerk.",
    body: [
      "Traditioneel stucwerk is het ambachtelijk vlakmaken van muren en plafonds met behulp van gipsmortel. Dit proces wordt volledig met de hand uitgevoerd door onze ervaren vakmensen, wat zorgt voor een ongekende precisie.",
      "Of het nu gaat om het herstellen van oude muren in een renovatieproject of het realiseren van een strakke, moderne look in een nieuwbouwwoning — traditioneel stucwerk vormt de perfecte basis voor elke verdere wandafwerking.",
    ],
    benefits: [
      { title: "Tijdloos & duurzaam", desc: "Cementgebonden stucwerk gaat generaties mee en wordt alleen maar mooier met de tijd.", icon: "diamond" },
      { title: "Perfecte basis", desc: "Een spiegelgladde ondergrond voor verf, behang of sierpleister. Geen compromissen.", icon: "auto_awesome" },
      { title: "Elk project", desc: "Van nieuwbouw appartementen tot monumentale panden — traditioneel stucwerk past overal.", icon: "apartment" },
    ],
    steps: [
      { title: "Voorbereiding", desc: "Afplakken van vloeren en kozijnen en het aanbrengen van de juiste primer voor optimale hechting." },
      { title: "Gips aanbrengen", desc: "De gipsmortel wordt handmatig en gelijkmatig verdeeld over de wanden door onze meester-stukadoors." },
      { title: "Recht trekken", desc: "Met reien en messen wordt het gips volledig waterpas en strak getrokken voor een naadloos resultaat." },
      { title: "Afwerken", desc: "Na het aantrekken volgt het sponzen en pleisteren tot de wand spiegelglad is (sausklaar)." },
    ],
    pricing: [
      { label: "Wandafwerking (Sausklaar)", price: "vanaf € 18,- / m²" },
      { label: "Plafondafwerking (Sausklaar)", price: "vanaf € 22,- / m²" },
      { label: "Sierpleister", price: "vanaf € 25,- / m²" },
    ],
    pricingNote: "Prijzen zijn indicatief en afhankelijk van de ondergrond, bereikbaarheid en omvang. Voor woningen ouder dan 2 jaar geldt vaak 9% BTW.",
    faqs: [
      { q: "Hoe lang duurt het stucen van een woonkamer?", a: "Gemiddeld 2 tot 4 dagen, afhankelijk van de grootte en de staat van de muren. Houd rekening met een droogtijd van circa 1mm per dag." },
      { q: "Wat is het verschil tussen raapwerk en pleisterwerk?", a: "Raapwerk wordt gebruikt voor zeer scheve muren (lagen van 7mm tot 5cm). Pleisterwerk is een dunnere afwerklaag voor spiegelgladde wanden." },
      { q: "Moet ik de muren voorbereiden?", a: "Wij vragen u enkel om de ruimte leeg te maken. Wij zorgen voor voorstrijk, afplakken en reiniging na afloop." },
      { q: "Is traditioneel stucwerk geschikt voor de badkamer?", a: "Ja, mits er een cementgebonden stucmortel wordt gebruikt. Voor natte ruimtes adviseren wij speciale waterdichte afwerkingen." },
      { q: "Wanneer kan ik de muren laten schilderen?", a: "De muren moeten volledig droog zijn (egaal witte kleur). Gemiddeld adviseren wij minimaal 2 weken te wachten." },
    ],
    relatedSlugs: ["spack-spuitwerk", "dunpleister", "renovlies-behang"],
  },
  {
    title: "SPACK Spuitwerk",
    slug: "spack-spuitwerk",
    desc: "Fijne structuur",
    category: "Wand & Plafond Afwerking",
    categorySlug: "wand-plafond",
    icon: "format_paint",
    heroImage: "/dienst-spack-spuitwerk.webp",
    detailImage: "/plafonds-strak-wit-woonkamer.webp",
    bgImage: "/echt-renovatie-zolder-gestuct.webp",
    excerpt: "Moderne spuittechniek voor een fijn, egaal structuureffect. Snel aangebracht, prachtig resultaat.",
    body: [
      "SPACK spuitwerk is een snelle en voordelige methode voor een mooie, egale korrelstructuur op uw wanden en plafonds. Het materiaal wordt met speciale apparatuur aangebracht.",
      "Ideaal voor nieuwbouwwoningen waar u snel een strak resultaat wilt. Beschikbaar in verschillende structuren en elke gewenste RAL-kleur.",
    ],
    benefits: [
      { title: "Snel klaar", desc: "Een gemiddelde woning kan binnen 1-2 dagen volledig worden voorzien van spackspuitwerk.", icon: "speed" },
      { title: "Voordelig", desc: "Aanzienlijk voordeliger dan traditioneel stucwerk met een prachtig eindresultaat.", icon: "savings" },
      { title: "Kleur naar keuze", desc: "Direct in elke gewenste kleur aan te brengen, geen extra sauswerk nodig.", icon: "palette" },
    ],
    steps: [
      { title: "Ondergrond controleren", desc: "We controleren de wanden op hechtbaarheid en brengen indien nodig een voorstrijk aan." },
      { title: "Afplakken", desc: "Alle kozijnen, vloeren en stopcontacten worden zorgvuldig afgedekt." },
      { title: "Spuiten", desc: "Met professionele apparatuur brengen we de spacklaag egaal aan in de gewenste structuur." },
      { title: "Controle", desc: "Na droging controleren we het resultaat en corrigeren we eventuele onvolkomenheden." },
    ],
    pricing: [
      { label: "Spackspuitwerk wanden", price: "vanaf € 8,- / m²" },
      { label: "Spackspuitwerk plafonds", price: "vanaf € 10,- / m²" },
      { label: "Inclusief materiaal", price: "in elke RAL-kleur" },
    ],
    pricingNote: "Prijzen inclusief materiaal en arbeid. Afhankelijk van de ondergrond en gewenste structuur.",
    faqs: [
      { q: "Wat is het verschil tussen spackspuitwerk en stucwerk?", a: "Spackspuitwerk heeft een subtiele korrelstructuur, stucwerk is volledig glad. Spackspuitwerk is sneller en voordeliger." },
      { q: "Kan ik de kleur later veranderen?", a: "Ja, spackspuitwerk kan gewoon overgeschilderd worden met reguliere muurverf." },
      { q: "Hoe lang moet spackspuitwerk drogen?", a: "Gemiddeld 24 uur. Daarna kunt u de ruimte weer normaal gebruiken." },
    ],
    relatedSlugs: ["traditioneel-stucwerk", "dunpleister", "latex-spuiten"],
  },
  {
    title: "Dunpleister",
    slug: "dunpleister",
    desc: "Ultradunne afwerklaag",
    category: "Wand & Plafond Afwerking",
    categorySlug: "wand-plafond",
    icon: "brush",
    heroImage: "/dienst-dunpleister-closeup.webp",
    detailImage: "/wanden-terracotta-accentwand.webp",
    bgImage: "/echt-nieuwbouw-woonkamer-deuren.webp",
    excerpt: "Ultradunne afwerklaag voor een strak, modern resultaat op betonwanden. Minimale opbouw, maximale gladheid.",
    body: [
      "Dunpleister is een ultradunne afwerklaag speciaal ontwikkeld voor nieuwbouwwoningen met betonelement wanden. Met een opbouw van slechts 1-2mm behaalt u een perfect glad resultaat.",
      "Deze techniek is ideaal wanneer de wanden al redelijk vlak zijn en u een strakke, moderne uitstraling wenst zonder de dikte van traditioneel stucwerk.",
    ],
    benefits: [
      { title: "Minimale opbouw", desc: "Slechts 1-2mm dik, ideaal voor nieuwbouw waar elke centimeter telt.", icon: "straighten" },
      { title: "Snel droog", desc: "Door de dunne laag is de droogtijd aanzienlijk korter dan bij traditioneel stucwerk.", icon: "schedule" },
      { title: "Kostenefficiënt", desc: "Minder materiaal en kortere arbeidstijd resulteren in een scherpe prijs.", icon: "savings" },
    ],
    steps: [
      { title: "Inspectie", desc: "We beoordelen de betonwanden op vlakheid en hechtbaarheid." },
      { title: "Voorbehandeling", desc: "Gronden van de wanden voor optimale hechting van de dunpleisterlaag." },
      { title: "Aanbrengen", desc: "Met breed mes wordt de dunpleister egaal over het oppervlak verdeeld." },
      { title: "Afwerken", desc: "Naschuren voor een perfect glad, behangklaar of sausklaar resultaat." },
    ],
    pricing: [
      { label: "Dunpleister wanden", price: "vanaf € 12,- / m²" },
      { label: "Dunpleister plafonds", price: "vanaf € 15,- / m²" },
    ],
    pricingNote: "Speciaal geschikt voor nieuwbouwwoningen met betonelement wanden.",
    faqs: [
      { q: "Is dunpleister geschikt voor renovatie?", a: "Dunpleister is primair ontwikkeld voor vlakke ondergronden zoals beton. Bij renovatie adviseren wij vaak traditioneel stucwerk." },
      { q: "Kan ik direct behangen op dunpleister?", a: "Ja, na volledige droging is dunpleister direct behangklaar. Wij adviseren wel een voorstrijk voor optimale hechting." },
    ],
    relatedSlugs: ["traditioneel-stucwerk", "spack-spuitwerk", "renovlies-behang"],
  },
  {
    title: "(Reno)vlies Behang",
    slug: "renovlies-behang",
    desc: "Wand- en plafondherstel",
    category: "Wand & Plafond Afwerking",
    categorySlug: "wand-plafond",
    icon: "wallpaper",
    heroImage: "/dienst-renovlies-behang.webp",
    detailImage: "/echt-slaapkamer-groen-accentwand.webp",
    bgImage: "/echt-renovatie-slaapkamer-gestuct.webp",
    excerpt: "Overbrugt scheurtjes en oneffenheden voor een perfect gladde, schilderbare ondergrond. Ideaal voor renovatie.",
    body: [
      "Renovlies is een glasvezelbehang dat scheurtjes en kleine oneffenheden in wanden en plafonds overbrugt. Na het aanbrengen ontstaat een perfect gladde, schilderbare ondergrond.",
      "Vooral populair bij renovatieprojecten waar de bestaande wanden niet perfect vlak zijn. Renovlies is scheuroverbruggend en biedt een duurzaam, strak resultaat.",
    ],
    benefits: [
      { title: "Scheuroverbruggend", desc: "Overbrugt bestaande scheurtjes en voorkomt dat nieuwe scheuren zichtbaar worden.", icon: "healing" },
      { title: "Snel resultaat", desc: "Geen weken droogtijd — na het behangen kunt u direct overschilderen.", icon: "speed" },
      { title: "Ideaal voor renovatie", desc: "Perfect voor oudere woningen waar de wanden niet meer 100% vlak zijn.", icon: "home_repair_service" },
    ],
    steps: [
      { title: "Wandbeoordeling", desc: "We beoordelen de staat van de huidige wanden en adviseren over de beste aanpak." },
      { title: "Voorbewerking", desc: "Losse delen verwijderen, scheuren vullen en de wand egaliseren waar nodig." },
      { title: "Renovlies aanbrengen", desc: "Het glasvezelvlies wordt naadloos aangebracht met speciale lijm." },
      { title: "Afwerken", desc: "Na droging wordt het vlies overschilderd in de gewenste kleur." },
    ],
    pricing: [
      { label: "Renovlies wanden", price: "vanaf € 16,- / m²" },
      { label: "Renovlies plafonds", price: "vanaf € 20,- / m²" },
      { label: "Inclusief overschilderen", price: "vanaf € 22,- / m²" },
    ],
    pricingNote: "Inclusief materiaal en lijm. Overschilderen optioneel bij te boeken.",
    faqs: [
      { q: "Wat is het verschil tussen renovlies en stucwerk?", a: "Renovlies is een behang dat over de bestaande wand wordt geplakt. Stucwerk is een pleisterlaag die op de wand wordt aangebracht. Renovlies is sneller, stucwerk geeft het meest strakke resultaat." },
      { q: "Hoe lang gaat renovlies mee?", a: "Renovlies gaat minstens 20-30 jaar mee en kan meerdere keren overgeschilderd worden." },
    ],
    relatedSlugs: ["traditioneel-stucwerk", "dunpleister", "latex-spuiten"],
  },
  {
    title: "Ambachtelijk Schilderwerk",
    slug: "ambachtelijk-schilderwerk",
    desc: "Handmatig vakwerk",
    category: "Schilderwerk",
    categorySlug: "schilderwerk",
    icon: "brush",
    heroImage: "/plafonds-strak-wit-woonkamer.webp",
    detailImage: "/echt-slaapkamer-olijfgroen-accentwand.webp",
    bgImage: "/project-renovatie-groene-wand.webp",
    excerpt: "Met de hand geschilderd door ervaren vakmensen. Elk detail telt, elke hoek wordt perfect afgewerkt. Binnen en buiten.",
    body: [
      "Ambachtelijk schilderwerk is meer dan een kwast en een pot verf. Onze schilders combineren traditionele technieken met moderne materialen voor een duurzaam en esthetisch resultaat.",
      "Of het nu gaat om kozijnen, deuren, wanden of complete interieurs — wij werken uitsluitend met topmerken zoals Sikkens en Sigma voor een langdurig mooi resultaat.",
    ],
    benefits: [
      { title: "Vakmanschap", desc: "Elke streek wordt met zorg en precisie aangebracht door ervaren schilders.", icon: "handyman" },
      { title: "Topmerken", desc: "Wij werken uitsluitend met Sikkens, Sigma en andere A-merken voor maximale duurzaamheid.", icon: "verified" },
      { title: "Binnen & buiten", desc: "Van een subtiel interieur tot weerbestendige buitenafwerking — wij doen het allemaal.", icon: "home" },
    ],
    steps: [
      { title: "Kleuradvies", desc: "Wij adviseren u over de juiste kleuren en materialen voor uw specifieke situatie." },
      { title: "Voorbereiding", desc: "Schuren, plamuren, afplakken — de basis voor een perfect eindresultaat." },
      { title: "Schilderen", desc: "Meerdere lagen met de juiste techniek voor een egaal, duurzaam resultaat." },
      { title: "Oplevering", desc: "Controle, bijwerken en netjes achterlaten. Pas als u tevreden bent, zijn wij klaar." },
    ],
    pricing: [
      { label: "Binnenschilderwerk wanden", price: "vanaf € 12,- / m²" },
      { label: "Kozijnen & deuren", price: "vanaf € 45,- / stuk" },
      { label: "Buitenschilderwerk", price: "op aanvraag" },
    ],
    pricingNote: "Prijzen afhankelijk van staat ondergrond en gekozen verfsoort.",
    faqs: [
      { q: "Welke verfmerken gebruiken jullie?", a: "Wij werken standaard met Sikkens en Sigma. Op verzoek kunnen we ook met andere merken werken." },
      { q: "Hoe lang duurt schilderwerk voor een gemiddelde kamer?", a: "Een gemiddelde kamer (incl. plafond en kozijnen) kost circa 2-3 dagen inclusief droogtijd." },
    ],
    relatedSlugs: ["latex-spuiten", "lakwerk", "spuitlakwerk"],
  },
  {
    title: "Latex Spuiten",
    slug: "latex-spuiten",
    desc: "Snelle wandafwerking",
    category: "Schilderwerk",
    categorySlug: "schilderwerk",
    icon: "format_paint",
    heroImage: "/dienst-latex-spuiten.webp",
    detailImage: "/plafonds-strak-wit-woonkamer.webp",
    bgImage: "/echt-kamer-sierpleister-accentwand.webp",
    excerpt: "Airless spuittechniek voor een perfect egaal, streeploos resultaat op grote oppervlakken. Ideaal voor nieuwbouw.",
    body: [
      "Latexspuiten is de modernste manier om grote oppervlakken egaal en strak te voorzien van kleur. Met airless spuittechniek bereiken we een resultaat dat met rollen niet haalbaar is.",
      "Vooral bij nieuwbouwwoningen is latexspuiten de ideale keuze: snel, streeploos en in elke gewenste kleur. Wij spuiten wanden en plafonds in één vloeiende beweging.",
    ],
    benefits: [
      { title: "Streeploos", desc: "Airless spuittechniek garandeert een perfect egaal resultaat zonder rolstrepen.", icon: "auto_awesome" },
      { title: "Supersnel", desc: "Een complete woning in 1-2 dagen afgewerkt. Ideaal bij nieuwbouw.", icon: "bolt" },
      { title: "Elke kleur", desc: "Beschikbaar in elke RAL- of NCS-kleur. Accentwanden in een handomdraai.", icon: "palette" },
    ],
    steps: [
      { title: "Voorbereiding", desc: "Afplakken van vloeren, kozijnen en stopcontacten met professioneel materiaal." },
      { title: "Voorbehandeling", desc: "Grondlaag aanbrengen voor optimale hechting en dekking." },
      { title: "Spuiten", desc: "Met airless apparatuur brengen we 2 dekkende lagen aan in de gewenste kleur." },
      { title: "Controle", desc: "Eindcontrole, verwijderen afplakmateriaal en netjes achterlaten." },
    ],
    pricing: [
      { label: "Latex spuiten wanden", price: "vanaf € 6,- / m²" },
      { label: "Latex spuiten plafonds", price: "vanaf € 8,- / m²" },
      { label: "Accentwand in kleur", price: "vanaf € 8,- / m²" },
    ],
    pricingNote: "Inclusief 2 lagen latex en afplakmateriaal. Voorstrijk indien nodig extra.",
    faqs: [
      { q: "Is latexspuiten beter dan rollen?", a: "Latexspuiten geeft een egaler resultaat zonder rolstrepen en is significant sneller bij grote oppervlakken." },
      { q: "Kan ik een accentwand in een andere kleur laten spuiten?", a: "Absoluut! Wij spuiten accentwanden in elke gewenste kleur zonder meerprijs op arbeid." },
    ],
    relatedSlugs: ["ambachtelijk-schilderwerk", "spack-spuitwerk", "lakwerk"],
  },
  {
    title: "Lakwerk",
    slug: "lakwerk",
    desc: "Kozijnen & deuren",
    category: "Schilderwerk",
    categorySlug: "schilderwerk",
    icon: "door_front",
    heroImage: "/dienst-ambachtelijk-schilderwerk.webp",
    detailImage: "/hal-gestuct-witte-trap.webp",
    bgImage: "/project-kinderkamer-peach.webp",
    excerpt: "Kozijnen, deuren en kasten krijgen een fabrieksmatige afwerking. Hoogglans of satijnmat.",
    body: [
      "Lakwerk is de kunst van het perfect afwerken van kozijnen, deuren, kasten en ander houtwerk. Wij brengen lak aan met de hand voor een duurzame, strakke finish.",
      "Of u nu kiest voor hoogglans of satijnmat — wij garanderen een resultaat dat jarenlang mooi blijft. Met de juiste voorbereiding en topkwaliteit lakken.",
    ],
    benefits: [
      { title: "Fabrieksmatig", desc: "Een afwerking zo strak alsof het uit de fabriek komt, maar dan op locatie.", icon: "precision_manufacturing" },
      { title: "Duurzaam", desc: "Hoogwaardige lakken die jarenlang bescherming bieden tegen slijtage.", icon: "shield" },
      { title: "Elke afwerking", desc: "Van hoogglans tot zijdemat — wij leveren de finish die bij uw interieur past.", icon: "tune" },
    ],
    steps: [
      { title: "Inspectie", desc: "Beoordeling van het bestaande houtwerk op staat en hechtbaarheid." },
      { title: "Schuren & plamuren", desc: "Zorgvuldig voorbereiden voor een perfect gladde ondergrond." },
      { title: "Grondverf", desc: "Aanbrengen van de juiste primer voor optimale hechting en dekking." },
      { title: "Aflakken", desc: "Minimaal 2 lagen toplaag voor een duurzaam, strak eindresultaat." },
    ],
    pricing: [
      { label: "Deur lakken (per stuk)", price: "vanaf € 95,-" },
      { label: "Kozijn lakken (per stuk)", price: "vanaf € 65,-" },
      { label: "Keukenkasten", price: "op aanvraag" },
    ],
    pricingNote: "Prijzen afhankelijk van formaat, staat en gekozen laksysteem.",
    faqs: [
      { q: "Wat is het verschil tussen lakwerk en spuitlakwerk?", a: "Lakwerk wordt met de hand aangebracht (kwast/roller), spuitlakwerk met een spuitpistool voor een nog gladder resultaat." },
      { q: "Hoe lang duurt het lakken van alle deuren in een woning?", a: "Voor een gemiddelde woning met 8-10 deuren rekent u op 3-4 werkdagen inclusief droogtijd." },
    ],
    relatedSlugs: ["spuitlakwerk", "ambachtelijk-schilderwerk", "latex-spuiten"],
  },
  {
    title: "Spuitlakwerk",
    slug: "spuitlakwerk",
    desc: "Strakke lakafwerking",
    category: "Schilderwerk",
    categorySlug: "schilderwerk",
    icon: "spray",
    heroImage: "/echt-nieuwbouw-woonkamer-deuren.webp",
    detailImage: "/project-nieuwbouw-oplevering.webp",
    bgImage: "/echt-slaapkamer-greige-wand.webp",
    excerpt: "Kozijnen, deuren, keukens en kasten krijgen een fabrieksmatige afwerking door middel van spuittechniek.",
    body: [
      "Spuitlakwerk levert de meest strakke lakafwerking die mogelijk is. Door het lakken met een professioneel spuitpistool ontstaat een resultaat zonder kwaststrepen.",
      "Ideaal voor keukens, kasten, deuren en kozijnen die een fabrieksmatige uitstraling verdienen. Wij werken op locatie of nemen onderdelen mee naar onze werkplaats.",
    ],
    benefits: [
      { title: "Ultra strak", desc: "Geen kwaststrepen, geen rolstructuur — alleen een perfect gladde laklaag.", icon: "auto_awesome" },
      { title: "Fabriekskwaliteit", desc: "Een resultaat dat niet te onderscheiden is van een fabrieksafwerking.", icon: "precision_manufacturing" },
      { title: "Keukens & kasten", desc: "Geef uw bestaande keuken een compleet nieuw leven voor een fractie van de prijs.", icon: "kitchen" },
    ],
    steps: [
      { title: "Demontage", desc: "Waar mogelijk demonteren wij deuren en fronten voor het beste resultaat." },
      { title: "Voorbehandeling", desc: "Ontvetten, schuren, plamuren en gronden voor perfecte hechting." },
      { title: "Spuitlakken", desc: "In onze werkplaats of op locatie brengen we meerdere lagen spuitlak aan." },
      { title: "Montage & controle", desc: "Terugplaatsen, bijwerken en opleveren. 100% tevredenheidsgarantie." },
    ],
    pricing: [
      { label: "Deur spuitlakken", price: "vanaf € 125,-" },
      { label: "Keukenfronten", price: "vanaf € 85,- / front" },
      { label: "Complete keuken", price: "op aanvraag" },
    ],
    pricingNote: "Inclusief voorbehandeling en grondverf. Exacte prijs na inmeting.",
    faqs: [
      { q: "Kunnen jullie mijn bestaande keuken spuitlakken?", a: "Ja! Wij kunnen vrijwel elke keuken een compleet nieuw uiterlijk geven door de fronten te spuitlakken. Veel voordeliger dan een nieuwe keuken." },
      { q: "Hoe lang duurt het spuitlakken van een keuken?", a: "Gemiddeld 3-5 werkdagen inclusief demontage, voorbewerking, spuitlakken en montage." },
    ],
    relatedSlugs: ["lakwerk", "ambachtelijk-schilderwerk", "latex-spuiten"],
  },
  {
    title: "Trap Schilderen",
    slug: "trap-schilderen",
    desc: "Complete traprenovatie",
    category: "Traprenovatie",
    categorySlug: "traprenovatie",
    icon: "stairs",
    heroImage: "/dienst-trap-schilderen.webp",
    detailImage: "/trappen-witte-dichte-trap.webp",
    bgImage: "/hal-gestuct-witte-trap.webp",
    excerpt: "Geef uw trap een compleet nieuw leven met een professionele schilder- of renovatiebeurt.",
    body: [
      "Een trap is het visitekaartje van uw woning. Wij renoveren en schilderen trappen met oog voor detail en duurzaamheid. Van een klassieke witte trap tot een modern design.",
      "Wij werken met slijtvaste lakken en verven die speciaal ontwikkeld zijn voor intensief gebruik. Het resultaat: een trap die er jarenlang als nieuw uitziet.",
    ],
    benefits: [
      { title: "Complete renovatie", desc: "Van kaal hout tot een volledig afgewerkte, strakke trap in elke gewenste kleur.", icon: "construction" },
      { title: "Slijtvast", desc: "Speciale trapverven en -lakken die bestand zijn tegen intensief dagelijks gebruik.", icon: "shield" },
      { title: "Minimale overlast", desc: "Wij werken in fasen zodat u tijdens de renovatie gewoon van uw trap gebruik kunt maken.", icon: "schedule" },
    ],
    steps: [
      { title: "Inspectie", desc: "Beoordeling van de huidige staat en bespreking van uw wensen qua kleur en stijl." },
      { title: "Voorbereiding", desc: "Schuren, ontvetten en eventueel repareren van beschadigingen in het hout." },
      { title: "Schilderen/lakken", desc: "Meerdere lagen slijtvaste verf of lak aanbrengen voor een duurzaam resultaat." },
      { title: "Droging & gebruik", desc: "Na volledige droging is uw trap weer klaar voor dagelijks gebruik." },
    ],
    pricing: [
      { label: "Rechte trap schilderen", price: "vanaf € 450,-" },
      { label: "Draaitrap schilderen", price: "vanaf € 650,-" },
      { label: "Trap + balustrade", price: "op aanvraag" },
    ],
    pricingNote: "Prijzen voor een standaard trap (13-15 treden). Inclusief materiaal en arbeid.",
    faqs: [
      { q: "Hoe lang duurt een traprenovatie?", a: "Gemiddeld 2-3 dagen. Wij werken in fasen zodat u de trap tussendoor kunt gebruiken." },
      { q: "Welke kleuren zijn mogelijk?", a: "Elke kleur is mogelijk. Populaire keuzes zijn wit met houten treden, volledig wit, of antraciet." },
    ],
    relatedSlugs: ["ambachtelijk-schilderwerk", "lakwerk", "spuitlakwerk"],
  },
  {
    title: "Vloerbedekking",
    slug: "vloerbedekking",
    desc: "Professioneel gelegd",
    category: "Vloerbedekking",
    categorySlug: "vloerbedekking",
    icon: "grid_view",
    heroImage: "/vloeren-visgraat-parket.webp",
    detailImage: "/project-badkamer-betonstuc.webp",
    bgImage: "/echt-renovatie-kamer-rolluiken.webp",
    excerpt: "PVC, laminaat, tapijt of een houten vloer — professioneel gelegd en afgewerkt door onze vakmensen.",
    body: [
      "Een mooie vloer maakt uw interieur compleet. Wij leggen alle soorten vloerbedekking: van luxe PVC en duurzaam laminaat tot warm tapijt en massief houten vloeren.",
      "Onze vloerenleggers zijn ervaren specialisten die zorgen voor een naadloos resultaat. Inclusief egaliseren, ondervloer en plinten — alles wordt tot in detail afgewerkt.",
    ],
    benefits: [
      { title: "Alle vloerrtypen", desc: "PVC, laminaat, tapijt, houten vloeren — wij leggen het allemaal professioneel.", icon: "layers" },
      { title: "Complete service", desc: "Inclusief egaliseren, ondervloer, plinten en afwerking. U hoeft niets zelf te regelen.", icon: "check_circle" },
      { title: "Showroom", desc: "Bekijk en voel de materialen in onze showroom voor u een keuze maakt.", icon: "storefront" },
    ],
    steps: [
      { title: "Advies & keuze", desc: "In onze showroom of bij u thuis bespreken we de mogelijkheden en materialen." },
      { title: "Inmeten", desc: "Wij meten de ruimtes nauwkeurig in voor een exacte materiaalberekening." },
      { title: "Vloer leggen", desc: "Egaliseren, ondervloer plaatsen en de vloer professioneel leggen." },
      { title: "Afwerken", desc: "Plinten, overgangsprofielen en randafwerking voor een compleet resultaat." },
    ],
    pricing: [
      { label: "PVC vloer leggen", price: "vanaf € 22,- / m²" },
      { label: "Laminaat leggen", price: "vanaf € 18,- / m²" },
      { label: "Tapijt leggen", price: "vanaf € 12,- / m²" },
    ],
    pricingNote: "Exclusief materiaalkosten. Inclusief egalisatie en ondervloer waar nodig.",
    faqs: [
      { q: "Welke vloer past het beste bij een nieuwbouwwoning?", a: "PVC is momenteel de populairste keuze voor nieuwbouw: waterbestendig, onderhoudsarm en beschikbaar in vele designs." },
      { q: "Moeten de vloeren eerst geëgaliseerd worden?", a: "In de meeste gevallen wel. Wij controleren dit tijdens de inmeting en nemen het mee in de offerte." },
    ],
    relatedSlugs: ["trap-schilderen", "traditioneel-stucwerk", "latex-spuiten"],
  },
];

export function getDienst(slug: string): DienstItem | undefined {
  return diensten.find((d) => d.slug === slug);
}

export function getRelatedDiensten(slugs: string[]): DienstItem[] {
  return slugs.map((s) => diensten.find((d) => d.slug === s)).filter(Boolean) as DienstItem[];
}
