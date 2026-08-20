"use client";

import { useState } from "react";
import { ArrowUpRight, Clock3, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Status = "open" | "reviewed";

type DecisionRecord = {
  title: string;
  confidence: number;
  date: string;
  perspectives: number;
  status: Status;
  outcome: string;
};

const DECISIONS: DecisionRecord[] = [
  { title: "Launch in UK", confidence: 87, date: "12 Feb", perspectives: 8, status: "reviewed", outcome: "Outcome: on track" },
  { title: "Choose GCP", confidence: 79, date: "04 Feb", perspectives: 6, status: "open", outcome: "Review in 41 days" },
  { title: "Hire engineer #4", confidence: 72, date: "28 Jan", perspectives: 5, status: "reviewed", outcome: "Outcome: recorded" },
  { title: "Open US market", confidence: 61, date: "19 Jan", perspectives: 8, status: "open", outcome: "Revisit — assumption expired" },
];

const FILTERS: Array<{ id: "all" | Status; label: string }> = [
  { id: "all", label: "All" },
  { id: "open", label: "Open" },
  { id: "reviewed", label: "Reviewed" },
];

export function DecisionHistory() {
  const [filter, setFilter] = useState<"all" | Status>("all");
  const rows = DECISIONS.filter((d) => filter === "all" || d.status === filter);

  return (
    <Section id="history">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow mb-4">Decision history</p>
              <h2 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
                Still explainable months later.
              </h2>
              <p className="mt-5 text-[0.975rem] leading-relaxed text-muted sm:text-lg">
                Every analysis is kept whole — the question, the perspectives, the
                objections and the confidence at the time. Reopen a decision, see what
                you believed, and compare it against what actually happened.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="card-surface overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
                <h3 className="text-sm font-medium">Your decisions</h3>
                <div
                  role="tablist"
                  aria-label="Filter decisions"
                  className="flex items-center gap-1 rounded-lg border border-border p-0.5"
                >
                  {FILTERS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={filter === f.id}
                      onClick={() => setFilter(f.id)}
                      className={cn(
                        "rounded-md px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] transition-colors",
                        filter === f.id
                          ? "bg-subtle text-foreground"
                          : "text-muted hover:text-foreground",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <ul className="divide-y divide-border">
                {rows.map((d) => (
                  <li key={d.title}>
                    <a
                      href="#cta"
                      className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-subtle sm:px-5 sm:py-5"
                    >
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-[0.9375rem] font-medium">
                            {d.title}
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted">
                          <span>{d.date}</span>
                          <span aria-hidden="true">·</span>
                          <span>{d.perspectives} perspectives</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 normal-case tracking-normal">
                            {d.status === "reviewed" ? (
                              <CheckCircle2 className="h-3 w-3 text-signal-for" aria-hidden="true" />
                            ) : (
                              <Clock3 className="h-3 w-3" aria-hidden="true" />
                            )}
                            {d.outcome}
                          </span>
                        </span>
                      </span>

                      <span className="flex shrink-0 items-center gap-3">
                        <span
                          className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-border sm:block"
                          aria-hidden="true"
                        >
                          <span
                            className="block h-full rounded-full bg-accent"
                            style={{ width: `${d.confidence}%` }}
                          />
                        </span>
                        <span className="w-[6.5rem] text-right text-[0.75rem] text-muted">
                          <span className="font-medium text-foreground tabular-nums">
                            {d.confidence}%
                          </span>{" "}
                          confidence
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border px-4 py-3 sm:px-5">
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                  Showing {rows.length} of {DECISIONS.length} · outcomes compared automatically
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
