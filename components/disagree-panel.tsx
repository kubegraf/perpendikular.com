"use client";

import { Check, X, Eye, GitBranch } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ConfidenceBar } from "@/components/ui/confidence-bar";

const FOR = ["Scalability", "Portability", "Ecosystem"];
const AGAINST = ["Operational complexity", "Hiring cost", "Premature infrastructure"];

export function DisagreePanel() {
  return (
    <Section id="how-it-works">
      <div className="container-page">
        <SectionHeader
          eyebrow="The difference"
          title="Make AI disagree with you."
          description="Most AI systems optimize for giving you an answer. Perpendikular is designed to question it."
        />

        <div className="mt-12 grid items-stretch gap-4 lg:mt-16 lg:grid-cols-[1fr_auto_1.35fr] lg:gap-0">
          {/* ---- Traditional AI ---- */}
          <Reveal className="flex">
            <div className="card-surface flex w-full flex-col opacity-90">
              <div className="border-b border-border px-5 py-3">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted">
                  Traditional AI
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    User
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed">
                    “Is Kubernetes right for my startup?”
                  </p>
                </div>
                <div className="border-t border-border pt-5">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    AI
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    “Yes. Kubernetes provides scalability, portability and a mature
                    ecosystem for containerised workloads…”
                  </p>
                  <div className="mt-5 space-y-2" aria-hidden="true">
                    <div className="h-2 w-full rounded-full bg-border" />
                    <div className="h-2 w-11/12 rounded-full bg-border" />
                    <div className="h-2 w-7/12 rounded-full bg-border" />
                  </div>
                </div>
                <p className="mt-auto pt-5 text-[0.75rem] leading-relaxed text-muted">
                  One perspective. No opposing case. No assumptions surfaced. Nothing
                  you can defend in a room full of people.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ---- Divider ---- */}
          <div className="flex items-center justify-center lg:w-24 lg:flex-col">
            <span className="hidden h-full w-px bg-border lg:block" aria-hidden="true" />
            <span className="my-0 shrink-0 bg-background px-3 py-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted lg:my-3">
              versus
            </span>
            <span className="hidden h-full w-px bg-border lg:block" aria-hidden="true" />
          </div>

          {/* ---- Perpendikular ---- */}
          <Reveal delay={0.08} className="flex">
            <div className="card-surface flex w-full flex-col shadow-[0_30px_80px_-50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-foreground">
                  Perpendikular
                </span>
                <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted xs:inline">
                  6 perspectives · 2 challenged
                </span>
              </div>

              <div className="grid gap-px bg-border sm:grid-cols-2">
                <div className="bg-card p-5 sm:p-6">
                  <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-signal-for">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> For
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {FOR.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.875rem]">
                        <span
                          className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-signal-for"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card p-5 sm:p-6">
                  <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-signal-against">
                    <X className="h-3.5 w-3.5" aria-hidden="true" /> Against
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {AGAINST.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.875rem]">
                        <span
                          className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-signal-against"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
                <div className="bg-card p-5 sm:p-6">
                  <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" /> Blind spot
                  </p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed">
                    Your team has no Kubernetes operator experience.
                  </p>
                </div>
                <div className="bg-card p-5 sm:p-6">
                  <p className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    <GitBranch className="h-3.5 w-3.5" aria-hidden="true" /> Alternative
                  </p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed">
                    Start with managed containers.
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-border p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                <div className="shrink-0">
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    Confidence
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-[-0.02em]">
                    <CountUp to={81} suffix="%" />
                  </p>
                </div>
                <ConfidenceBar value={81} className="flex-1" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
