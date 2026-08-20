import {
  FileText,
  ListChecks,
  Gauge,
  Link2,
  GitCompareArrows,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ConfidenceBar } from "@/components/ui/confidence-bar";

const RECORDED: Array<{ label: string; icon: LucideIcon; detail: string }> = [
  { label: "Evidence", icon: FileText, detail: "Every claim bound to what supports it." },
  { label: "Assumptions", icon: ListChecks, detail: "Stated plainly, marked verified or not." },
  { label: "Confidence", icon: Gauge, detail: "Derived from evidence, not from tone." },
  { label: "Sources", icon: Link2, detail: "Traceable, dated, and rated for strength." },
  { label: "Contradictions", icon: GitCompareArrows, detail: "Kept visible instead of averaged away." },
  { label: "Risk factors", icon: ShieldAlert, detail: "Ranked by likelihood and blast radius." },
];

const READOUT = [
  { label: "Evidence strength", value: "Strong", tone: "for" as const },
  { label: "Contradictions", value: "3", tone: "conflict" as const },
  { label: "Unverified assumptions", value: "2", tone: "against" as const },
  { label: "Risk level", value: "Medium", tone: "against" as const },
];

const toneClass = {
  for: "text-signal-for",
  against: "text-signal-against",
  conflict: "text-signal-conflict",
};

export function EvidencePanel() {
  return (
    <Section id="evidence">
      <div className="container-page">
        <SectionHeader
          eyebrow="Evidence & confidence"
          title="Know why you believe the answer."
          description="A confident sentence is not a reason. Every Perpendikular output carries the working underneath it — and tells you where it is thin."
        />

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {RECORDED.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                delay={i * 0.05}
                className="bg-card p-5 sm:p-6"
              >
                <item.icon className="h-4 w-4 text-muted" aria-hidden="true" />
                <h3 className="mt-4 text-sm font-medium">{item.label}</h3>
                <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="card-surface overflow-hidden">
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3 sm:px-6">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted">
                  Decision readout
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  UK first
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                      Confidence
                    </p>
                    <p className="mt-1.5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                      <CountUp to={87} suffix="%" />
                    </p>
                  </div>
                  <p className="max-w-[14rem] text-right text-[0.75rem] leading-relaxed text-muted">
                    Bounded by 2 unverified assumptions and 1 high-severity contradiction.
                  </p>
                </div>
                <ConfidenceBar value={87} className="mt-5" />
              </div>

              <dl className="grid grid-cols-2 gap-px border-t border-border bg-border">
                {READOUT.map((row) => (
                  <div key={row.label} className="bg-card px-5 py-4 sm:px-6 sm:py-5">
                    <dt className="text-[0.6875rem] leading-tight text-muted">{row.label}</dt>
                    <dd className={`mt-1.5 text-lg font-semibold tracking-[-0.02em] ${toneClass[row.tone]}`}>
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-3 border-t border-border p-5 sm:p-6">
                <ConfidenceBar value={92} label="Market evidence" />
                <ConfidenceBar value={74} label="Finance evidence" />
                <ConfidenceBar value={58} label="Customer evidence" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
