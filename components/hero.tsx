import { ArrowRight, Play } from "lucide-react";
import { DecisionMap } from "@/components/decision-map";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* structural grid, faded at the edges */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[36rem]"
        style={{
          maskImage: "radial-gradient(70% 60% at 50% 20%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 20%, #000 0%, transparent 100%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              Decision intelligence
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
              AI that sees every angle.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Perpendikular challenges assumptions, explores opposing perspectives,
              detects blind spots, and turns complex questions into decisions you can
              defend.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="#cta" size="lg" className="w-full sm:w-auto">
                Analyze a decision
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#how-it-works"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                See how it works
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              Multiple perspectives. Independent analysis. One clearer decision.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={28} className="mt-14 sm:mt-16 lg:mt-20">
          <DecisionMap />
        </Reveal>
      </div>

      <div className="container-page relative mt-16 sm:mt-24">
        <div className="border-y border-border py-8 text-center sm:py-10">
          <p className="text-lg font-medium tracking-[-0.02em] sm:text-2xl">
            Don’t just ask AI for an answer.{" "}
            <span className="text-muted">Ask it to challenge you.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
