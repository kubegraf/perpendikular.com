"use client";

import { AlertTriangle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const CLAIMS = [
  {
    source: "Finance",
    claim: "“US launch has better revenue potential.”",
    detail: "Larger addressable spend, higher contract values.",
  },
  {
    source: "Operations",
    claim: "“UK launch has lower operational complexity.”",
    detail: "Single jurisdiction, one support timezone, no state-level variance.",
  },
  {
    source: "Market analysis",
    claim: "“US acquisition costs are significantly higher.”",
    detail: "Paid channels are 2.4× more expensive in the target segment.",
  },
];

/** Three independent claims, converging on the point where they break. */
function ConvergenceGraph() {
  const reduced = useReducedMotion();
  const paths = [
    "M200 4 C200 70 600 60 600 128",
    "M600 4 L600 128",
    "M1000 4 C1000 70 600 60 600 128",
  ];

  return (
    <svg
      viewBox="0 0 1200 150"
      className="h-auto w-full"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          className="text-border-strong"
          strokeWidth={1.1}
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
        />
      ))}
      <motion.circle
        cx="600"
        cy="132"
        r="5"
        fill="var(--signal-conflict)"
        initial={reduced ? false : { opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.9 }}
      />
    </svg>
  );
}

export function ContradictionPanel() {
  return (
    <Section id="contradictions">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contradiction engine"
          title="Find where the story breaks."
          description="Perpendikular compares independent perspectives against each other and flags the places where their conclusions cannot all be true at once."
        />

        <div className="mt-12 sm:mt-16">
          <ul className="grid gap-4 md:grid-cols-3">
            {CLAIMS.map((c, i) => (
              <Reveal as="li" key={c.source} delay={i * 0.08} className="flex">
                <div className="card-surface flex w-full flex-col p-5 sm:p-6">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {c.source} says
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed">{c.claim}</p>
                  <p className="mt-auto pt-4 text-[0.8125rem] leading-relaxed text-muted">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <ConvergenceGraph />

          <Reveal delay={0.1}>
            <div
              className="rounded-xl border p-5 sm:p-7"
              style={{
                borderColor: "color-mix(in srgb, var(--signal-conflict) 40%, var(--border))",
                background: "color-mix(in srgb, var(--signal-conflict) 5%, var(--card))",
              }}
            >
              <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-signal-conflict">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                Contradiction detected
              </p>
              <p className="mt-4 max-w-3xl text-[1.0625rem] leading-relaxed tracking-[-0.01em] sm:text-xl">
                Revenue potential is higher in the US, but the assumed acquisition
                economics may invalidate the advantage.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-4">
                {[
                  ["Perspectives in conflict", "3"],
                  ["Severity", "High"],
                  ["Resolvable with evidence", "Yes"],
                  ["Affects recommendation", "Directly"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.6875rem] leading-tight text-muted">{label}</dt>
                    <dd className="mt-1 text-sm font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              2 further contradictions found · Legal ↔ Technology · Customer ↔ Competition
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
