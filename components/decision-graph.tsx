"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Stage = {
  label: string;
  summary: string;
  sample: string;
  meta: string;
};

const STAGES: Stage[] = [
  {
    label: "Question",
    summary: "The decision is restated precisely, with its scope, timeframe and what would count as success.",
    sample: "Should we launch in the US or UK in the next two quarters?",
    meta: "Scope · 2 quarters",
  },
  {
    label: "Assumptions",
    summary: "Every belief the answer depends on is made explicit — and marked verified or unverified.",
    sample: "Assumes CAC stays within 15% of current blended cost.",
    meta: "9 total · 2 unverified",
  },
  {
    label: "Evidence",
    summary: "Each claim is bound to a source, with strength and recency recorded alongside it.",
    sample: "Channel cost benchmark, Q3, 14 comparable accounts.",
    meta: "23 sources · strong",
  },
  {
    label: "Perspectives",
    summary: "Independent analysts reason separately, without seeing each other’s conclusions.",
    sample: "Market, Finance, Legal, Technology, Customer, Competition, Risk, Strategy.",
    meta: "8 running in parallel",
  },
  {
    label: "Arguments",
    summary: "Each perspective produces a case for and a case against, not a verdict.",
    sample: "For: contract values are 2.1× higher. Against: payback extends by 7 months.",
    meta: "31 arguments",
  },
  {
    label: "Contradictions",
    summary: "Conclusions are cross-checked, and the points where they cannot all hold are surfaced.",
    sample: "Revenue advantage conflicts with assumed acquisition economics.",
    meta: "3 detected · 1 high",
  },
  {
    label: "Risks",
    summary: "Failure modes are ranked by likelihood, blast radius and how quickly you would notice.",
    sample: "State-level compliance variance delays launch by one quarter.",
    meta: "6 ranked · medium",
  },
  {
    label: "Alternatives",
    summary: "Options you did not ask about are constructed and scored on the same basis.",
    sample: "UK first, US pilot in parallel with a single enterprise design partner.",
    meta: "4 alternatives",
  },
  {
    label: "Recommendation",
    summary: "One defensible position, with the reasoning that produced it attached.",
    sample: "UK first — reversible, cheaper to learn in, protects the US entry.",
    meta: "Confidence 87%",
  },
  {
    label: "Outcome",
    summary: "The decision is recorded, then revisited against what actually happened.",
    sample: "Review scheduled at 90 days against CAC and time-to-first-contract.",
    meta: "Review in 90 days",
  },
];

export function DecisionGraph() {
  const [selected, setSelected] = useState(3);
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const isNext = e.key === "ArrowDown" || e.key === "ArrowRight";
    const isPrev = e.key === "ArrowUp" || e.key === "ArrowLeft";
    if (!isNext && !isPrev) return;
    e.preventDefault();
    const next = isNext
      ? (selected + 1) % STAGES.length
      : (selected - 1 + STAGES.length) % STAGES.length;
    setSelected(next);
    const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>("button[role='tab']");
    buttons?.[next]?.focus();
  };

  const stage = STAGES[selected];

  return (
    <Section id="decision-graph">
      <div className="container-page">
        <SectionHeader
          eyebrow="Decision graph"
          title="Every analysis becomes a structured Decision Graph."
          description="Not a wall of text. A traversable record of how the conclusion was reached — every assumption, every source, every objection, still attached to the decision months later."
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-10">
          {/* rail */}
          <div
            ref={listRef}
            role="tablist"
            aria-orientation="vertical"
            aria-label="Decision graph stages"
            onKeyDown={onKeyDown}
            className="relative"
          >
            <span
              className="absolute left-[0.4375rem] top-3 bottom-3 w-px bg-border"
              aria-hidden="true"
            />
            {/* progress rail — tracks the stage in view */}
            <motion.span
              className="absolute left-[0.4375rem] top-3 w-px origin-top bg-accent"
              style={{ height: "calc(100% - 1.5rem)" }}
              initial={reduced ? false : { scaleY: 0 }}
              animate={{ scaleY: (selected + 0.5) / STAGES.length }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            />
            <ol className="relative space-y-0.5">
              {STAGES.map((s, i) => {
                const isSelected = i === selected;
                return (
                  <li key={s.label}>
                    <button
                      type="button"
                      role="tab"
                      id={`stage-tab-${i}`}
                      aria-selected={isSelected}
                      aria-controls="stage-panel"
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setSelected(i)}
                      onMouseEnter={() => setSelected(i)}
                      className={cn(
                        "group flex w-full items-center gap-4 rounded-lg py-2 pl-0 pr-3 text-left transition-colors",
                        isSelected ? "text-foreground" : "text-muted hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 h-[0.9375rem] w-[0.9375rem] shrink-0 rounded-full border-2 transition-colors",
                          isSelected
                            ? "border-accent bg-accent"
                            : "border-border-strong bg-background group-hover:border-accent",
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em]">
                        {s.label}
                      </span>
                      <span
                        className={cn(
                          "ml-auto hidden font-mono text-[0.5625rem] uppercase tracking-[0.14em] transition-opacity sm:block",
                          isSelected ? "text-muted opacity-100" : "opacity-0",
                        )}
                      >
                        {s.meta}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* detail */}
          <Reveal delay={0.05} className="lg:sticky lg:top-28 lg:self-start">
            <div
              id="stage-panel"
              role="tabpanel"
              aria-labelledby={`stage-tab-${selected}`}
              className="card-surface flex min-h-[19rem] flex-col p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-accent">
                  Stage {String(selected + 1).padStart(2, "0")} / 10
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  {stage.meta}
                </span>
              </div>

              <motion.div
                key={stage.label}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-1 flex-col pt-6"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                  {stage.label}
                </h3>
                <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                  {stage.summary}
                </p>
                <div className="mt-auto pt-8">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    From this analysis
                  </p>
                  <p className="mt-3 border-l-2 border-accent pl-4 text-[0.9375rem] leading-relaxed">
                    {stage.sample}
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
