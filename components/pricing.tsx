import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  price: string;
  period?: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "£0",
    blurb: "For exploring decisions.",
    features: ["5 analyses / month", "Basic perspectives", "Decision history"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "£24",
    period: "/ month",
    blurb: "For individuals.",
    features: [
      "Unlimited analyses",
      "Advanced perspectives",
      "Research",
      "Blind-spot detection",
      "Decision graphs",
      "Document analysis",
      "Decision history",
    ],
    cta: "Start Pro",
    featured: true,
  },
  {
    name: "Business",
    price: "Custom",
    blurb: "For teams.",
    features: [
      "Shared workspaces",
      "Private knowledge",
      "Custom agents",
      "Enterprise models",
      "SSO",
      "Audit logs",
      "API",
      "Advanced security",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="container-page">
        <SectionHeader
          eyebrow="Pricing"
          title="Straightforward pricing."
          description="Start free. Move up when the decisions get expensive enough to be worth arguing about."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="flex">
              <div
                className={cn(
                  "flex w-full flex-col rounded-xl border bg-card p-6 sm:p-7",
                  tier.featured
                    ? "border-accent/50 shadow-[0_24px_70px_-60px_var(--accent)]"
                    : "border-border",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
                    {tier.name}
                  </h3>
                  {tier.featured ? (
                    <span className="rounded-full border border-accent/40 bg-accent-soft px-2.5 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.14em] text-accent">
                      Most used
                    </span>
                  ) : null}
                </div>

                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-[-0.03em]">
                    {tier.price}
                  </span>
                  {tier.period ? (
                    <span className="text-sm text-muted">{tier.period}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-[0.875rem] text-muted">{tier.blurb}</p>

                <ButtonLink
                  href="#cta"
                  size="md"
                  variant={tier.featured ? "primary" : "secondary"}
                  className="mt-6 w-full"
                >
                  {tier.cta}
                </ButtonLink>

                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[0.875rem]">
                      <Check
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          tier.featured ? "text-accent" : "text-muted",
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.8125rem] text-muted">
            Prices exclude VAT. Annual billing available on Pro and Business.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
