import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerte Aanvragen",
  description:
    "Vraag vrijblijvend een offerte aan voor uw afbouwproject. Stucwerk, schilderwerk, vloeren en traprenovatie. Binnen 24 uur reactie.",
  alternates: { canonical: "https://afbouwzuid.nl/offerte" },
};

export default function OfferteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
