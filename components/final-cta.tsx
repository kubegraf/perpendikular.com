import { ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-border">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0"
        style={{
          maskImage: "radial-gradient(60% 70% at 50% 50%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(60% 70% at 50% 50%, #000 0%, transparent 100%)",
        }}
      />
      <div className="container-page relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <LogoMark className="mx-auto h-9 w-9 text-foreground" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-8 text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Before you make the decision, challenge it.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Bring Perpendikular your hardest questions. We’ll look at them from
              every angle.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex justify-center">
              <ButtonLink href="#top" size="lg" className="w-full sm:w-auto">
                Analyze your first decision
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-5 text-[0.8125rem] text-muted">No credit card required.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
