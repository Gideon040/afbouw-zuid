import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afbouwzuid.nl"),
  title: {
    default: "AfbouwZuid | Premium Stuc- en Afbouwwerk",
    template: "%s | AfbouwZuid",
  },
  description:
    "Complete afbouw voor nieuwbouw en renovatie in Brabant & Limburg. Stucwerk, schilderwerk, vloeren en traprenovatie door vakmensen.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "AfbouwZuid",
    title: "AfbouwZuid | Premium Stuc- en Afbouwwerk",
    description:
      "Complete afbouw voor nieuwbouw en renovatie in Brabant & Limburg. Stucwerk, schilderwerk, vloeren en traprenovatie door vakmensen.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://afbouwzuid.nl",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AfbouwZuid",
  url: "https://afbouwzuid.nl",
  logo: "https://afbouwzuid.nl/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+31-6-38903004",
    contactType: "customer service",
    availableLanguage: "Dutch",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jacob van Campenweg 25",
    addressLocality: "Eindhoven",
    postalCode: "5624 CD",
    addressCountry: "NL",
  },
  sameAs: [
    "https://instagram.com/afbouwzuid",
    "https://facebook.com/afbouwzuid",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-16 lg:pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
