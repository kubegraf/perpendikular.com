"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const LOOP = [
  { label: "Decision", detail: "What was chosen, and under which constraints." },
  { label: "Reasoning", detail: "The perspectives, objections and evidence behind it." },
  { label: "Action", detail: "What was actually shipped, signed or spent." },
  { label: "Outcome", detail: "What happened, measured against the original claim." },
  { label: "Learning", detail: "Which assumptions held — and which never do here." },
];

export function Moat() {
  const reduced = useReducedMotion();

  return (
    <Section id="moat">
      <div className="container-page">
        <SectionHeader
          eyebrow="The long-term moat"
          title="Decisions become intelligence."
          description="Every decision has context, assumptions, evidence, reasoning and outcomes. Perpendikular turns those decision records into organizational intelligence — so the same mistake stops being available to make twice."
        />

        <div className="mt-12 sm:mt-16">
          <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {LOOP.map((step, i) => (
              <Reveal
                as="li"
                key={step.label}
                delay={i * 0.07}
                className="relative bg-card p-5 sm:p-6"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.14em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-medium tracking-[-0.01em]">
                  {step.label}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                  {step.detail}
                </p>
              </Reveal>
            ))}
          </ol>

          {/* feedback loop */}
          <div className="relative mt-0 hidden lg:block" aria-hidden="true">
            <svg viewBox="0 0 1000 96" className="h-auto w-full">
              <defs>
                <marker
                  id="pk-arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 10 5 0 10z" fill="currentColor" />
                </marker>
              </defs>
              <motion.path
                d="M900 0 C900 44 900 56 840 56 L160 56 C100 56 100 44 100 0"
                fill="none"
                stroke="currentColor"
                className="text-border-strong"
                strokeWidth={1}
                strokeDasharray="4 5"
                markerEnd="url(#pk-arrow)"
                initial={reduced ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <p className="absolute inset-x-0 bottom-0 text-center font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              Learning re-enters the next decision
            </p>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:mt-6">
              {[
                ["Institutional memory", "The reasoning survives the people who left."],
                ["Calibration", "Confidence gets scored against real outcomes over time."],
                ["Compounding", "Each decision makes the next one cheaper to defend."],
              ].map(([title, detail]) => (
                <div key={title} className="bg-card p-5 sm:p-6">
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">{detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
