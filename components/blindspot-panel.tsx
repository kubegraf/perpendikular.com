import { ArrowRight, ScanEye } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

const BLIND_SPOTS = [
  {
    index: "01",
    title: "Your CAC assumption is based on a small sample.",
    detail: "42 data points across 6 weeks, all from one channel. Confidence interval is wider than the decision margin.",
  },
  {
    index: "02",
    title: "Your competitor analysis excludes indirect alternatives.",
    detail: "Three of the five accounts you lost last quarter chose spreadsheets or an internal build, not a competitor.",
  },
  {
    index: "03",
    title: "Your architecture assumes 10× growth before product-market fit.",
    detail: "The capacity plan front-loads cost against a growth curve no evidence in the analysis supports yet.",
  },
];

export function BlindspotPanel() {
  return (
    <Section id="blind-spots">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-4">Blind spots</p>
              <h2 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
                See what you didn’t think to ask.
              </h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-muted sm:text-lg">
                The dangerous part of a decision is rarely the question you asked. It is
                the one that never came up.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                <ScanEye className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium">3 blind spots found</span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ButtonLink href="#cta" variant="secondary" size="md" className="mt-6">
                Explore blind spots
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>

          <ol className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
            {BLIND_SPOTS.map((spot, i) => (
              <Reveal
                as="li"
                key={spot.index}
                delay={i * 0.08}
                className="group flex gap-5 bg-card p-5 transition-colors duration-300 hover:bg-subtle sm:gap-7 sm:p-7"
              >
                <span
                  className="font-mono text-[0.6875rem] tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-accent"
                  aria-hidden="true"
                >
                  {spot.index}
                </span>
                <span className="min-w-0">
                  <span className="block text-[1.0625rem] font-medium leading-snug tracking-[-0.01em] sm:text-lg">
                    {spot.title}
                  </span>
                  <span className="mt-2.5 block text-[0.875rem] leading-relaxed text-muted">
                    {spot.detail}
                  </span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
