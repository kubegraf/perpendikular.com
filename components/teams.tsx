import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const FEATURES = [
  "Shared decision workspaces",
  "Team perspectives",
  "Decision history",
  "Evidence trails",
  "Auditability",
  "Private knowledge",
  "Custom perspectives",
  "Enterprise security",
  "SSO",
  "Role-based access",
  "API access",
];

export function Teams() {
  return (
    <Section id="teams">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">For teams</p>
              <h2 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
                Turn scattered opinions into structured decisions.
              </h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-muted sm:text-lg">
                Most teams already hold every perspective they need — spread across
                threads, documents and meetings nobody can reconstruct afterwards.
                Perpendikular gives that reasoning one place to live, and one shape.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8">
                <ButtonLink href="#cta" size="lg" className="w-full sm:w-auto">
                  Talk to Perpendikular
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                  Deployed in your region · Your data stays yours
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <ul className="grid gap-x-8 gap-y-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 sm:gap-x-px">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3 bg-card px-5 py-3.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[0.875rem]">{feature}</span>
                </li>
              ))}
              <li className="hidden bg-card sm:block" aria-hidden="true" />
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
