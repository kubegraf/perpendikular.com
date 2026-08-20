import { siteUrl } from "@/lib/site";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PerspectiveGrid } from "@/components/perspective-grid";
import { DisagreePanel } from "@/components/disagree-panel";
import { ContradictionPanel } from "@/components/contradiction-panel";
import { BlindspotPanel } from "@/components/blindspot-panel";
import { DecisionGraph } from "@/components/decision-graph";
import { UseCases } from "@/components/use-cases";
import { EvidencePanel } from "@/components/evidence-panel";
import { DecisionHistory } from "@/components/decision-history";
import { Moat } from "@/components/moat";
import { Teams } from "@/components/teams";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Perpendikular",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      slogan: "AI that sees every angle.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Perpendikular",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A decision-intelligence platform that analyses a question from multiple independent perspectives, challenges assumptions, detects contradictions and blind spots, and produces a structured, defensible recommendation.",
      publisher: { "@id": `${siteUrl}/#organization` },
      offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "GBP" },
        { "@type": "Offer", name: "Pro", price: "24", priceCurrency: "GBP" },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <PerspectiveGrid />
        <DisagreePanel />
        <ContradictionPanel />
        <BlindspotPanel />
        <DecisionGraph />
        <UseCases />
        <EvidencePanel />
        <DecisionHistory />
        <Moat />
        <Teams />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
