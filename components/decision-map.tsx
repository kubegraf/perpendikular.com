"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Scale,
  ShieldAlert,
  Cpu,
  Users,
  Swords,
  Target,
  TrendingUp,
  PoundSterling,
  type LucideIcon,
} from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { cn } from "@/lib/utils";

const W = 1000;
const H = 560;
const CX = 500;
const CY = 280;

type Node = {
  id: string;
  label: string;
  note: string;
  icon: LucideIcon;
  x: number;
  y: number;
  /** anchor tells the overlay which way the label should hug the ellipse */
  align: "center" | "start" | "end";
};

/** Eight independent perspectives, evenly distributed around the question. */
const NODES: Node[] = [
  { id: "market", label: "MARKET", note: "Demand signal", icon: TrendingUp, x: 500, y: 67, align: "center" },
  { id: "finance", label: "FINANCE", note: "Unit economics", icon: PoundSterling, x: 783, y: 129, align: "start" },
  { id: "legal", label: "LEGAL", note: "Regulatory load", icon: Scale, x: 900, y: 280, align: "start" },
  { id: "technology", label: "TECHNOLOGY", note: "Delivery risk", icon: Cpu, x: 783, y: 431, align: "start" },
  { id: "customer", label: "CUSTOMER", note: "Willingness to pay", icon: Users, x: 500, y: 493, align: "center" },
  { id: "competition", label: "COMPETITION", note: "Incumbent density", icon: Swords, x: 217, y: 431, align: "end" },
  { id: "risk", label: "RISK", note: "Downside exposure", icon: ShieldAlert, x: 100, y: 280, align: "end" },
  { id: "strategy", label: "STRATEGY", note: "Compounding value", icon: Target, x: 217, y: 129, align: "end" },
];

/** Conflicting pairs surfaced by the contradiction engine. */
const CONFLICTS: Array<[string, string, number]> = [
  ["market", "finance", -70],
  ["customer", "competition", 70],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

function conflictPath(a: Node, b: Node, bulge: number) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  // Push the control point along the outward normal so the arc clears the ring.
  const nx = (-dy / len) * bulge;
  const ny = (dx / len) * bulge;
  return `M${a.x} ${a.y} Q${mx + nx} ${my + ny} ${b.x} ${b.y}`;
}

const METRICS = [
  { label: "Contradictions detected", value: 3, suffix: "" },
  { label: "Assumptions challenged", value: 5, suffix: "" },
  { label: "Confidence", value: 87, suffix: "%" },
];

export function DecisionMap() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % NODES.length), 2200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="truncate font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
            Analysis · 8 perspectives
          </span>
        </div>
        <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted sm:block">
          Decision graph · v1
        </span>
      </div>

      {/* ---------- Desktop: radial map ---------- */}
      <div className="relative hidden lg:block">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          /* the ring is inset on narrower viewports so node labels stay inside the panel */
          className="relative mx-auto w-[92%] xl:w-full"
          style={{ aspectRatio: `${W} / ${H}` }}
          role="img"
          aria-label="Decision map: the question 'Should we launch in the US or UK?' connected to eight independent perspectives — market, finance, legal, technology, customer, competition, risk and strategy — with two contradictions detected between them."
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            {/* spokes */}
            {NODES.map((node, i) => (
              <motion.line
                key={node.id}
                x1={CX}
                y1={CY}
                x2={node.x}
                y2={node.y}
                stroke="currentColor"
                className={cn(
                  "text-border-strong transition-colors duration-500",
                  active === i && "text-accent",
                )}
                strokeWidth={0.9}
                initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.08, ease: "easeOut" }}
              />
            ))}

            {/* contradiction arcs */}
            {CONFLICTS.map(([a, b, bulge]) => (
              <motion.path
                key={`${a}-${b}`}
                d={conflictPath(byId(a), byId(b), bulge)}
                fill="none"
                stroke="var(--signal-conflict)"
                strokeWidth={1.25}
                strokeDasharray="5 6"
                vectorEffect="non-scaling-stroke"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                style={reduced ? undefined : { animation: "pk-dash-flow 1.6s linear infinite" }}
              />
            ))}
          </svg>

          {/* perspective nodes */}
          {NODES.map((node, i) => (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: `${(node.x / W) * 100}%`,
                top: `${(node.y / H) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className={cn(
                  "flex items-center gap-2.5 whitespace-nowrap rounded-lg border bg-card px-3 py-2 transition-colors duration-500",
                  active === i
                    ? "border-accent/60 shadow-[0_0_0_3px_var(--accent-soft)]"
                    : "border-border",
                )}
              >
                <node.icon
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 transition-colors duration-500",
                    active === i ? "text-accent" : "text-muted",
                  )}
                  aria-hidden="true"
                />
                <div className="leading-tight">
                  <div className="font-mono text-[0.625rem] tracking-[0.14em] text-foreground">
                    {node.label}
                  </div>
                  <div className="text-[0.6875rem] text-muted">{node.note}</div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* central question */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-[min(21rem,42%)] -translate-x-1/2 -translate-y-1/2"
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-xl border border-border-strong bg-card p-5 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
              <p className="eyebrow mb-3">The question</p>
              <p className="text-[1.0625rem] font-medium leading-snug tracking-[-0.01em]">
                Should we launch in the US or UK?
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 border-t border-border pt-3">
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                  Recommended: UK first
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Mobile & tablet: vertical flow ---------- */}
      <div className="lg:hidden">
        <div className="border-b border-border px-4 py-5">
          <p className="eyebrow mb-2">The question</p>
          <p className="text-base font-medium leading-snug">
            Should we launch in the US or UK?
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {NODES.map((node, i) => (
            <motion.li
              key={node.id}
              className="flex items-center gap-3 bg-card px-4 py-3"
              initial={reduced ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border">
                <node.icon className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[0.625rem] tracking-[0.14em]">
                  {node.label}
                </span>
                <span className="block truncate text-[0.75rem] text-muted">{node.note}</span>
              </span>
              <span
                className={cn(
                  "font-mono text-[0.625rem] tracking-[0.1em]",
                  node.id === "finance" || node.id === "market"
                    ? "text-signal-conflict"
                    : "text-muted/70",
                )}
              >
                {node.id === "finance" || node.id === "market" ? "CONFLICT" : "ANALYSED"}
              </span>
            </motion.li>
          ))}
        </ul>
        <div className="border-t border-border px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
              Recommended: UK first
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Result strip ---------- */}
      <dl className="grid grid-cols-2 divide-x divide-y divide-border border-t border-border sm:grid-cols-4 sm:divide-y-0">
        {METRICS.map((m) => (
          <div key={m.label} className="px-4 py-4 sm:px-6 sm:py-5">
            <dd className="text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
              <CountUp to={m.value} suffix={m.suffix} />
            </dd>
            <dt className="mt-1 text-[0.6875rem] leading-tight text-muted sm:text-xs">
              {m.label}
            </dt>
          </div>
        ))}
        <div className="px-4 py-4 sm:px-6 sm:py-5">
          <dd className="text-xl font-semibold tracking-[-0.02em] text-accent sm:text-2xl">
            UK first
          </dd>
          <dt className="mt-1 text-[0.6875rem] leading-tight text-muted sm:text-xs">
            Recommendation
          </dt>
        </div>
      </dl>
    </div>
  );
}
