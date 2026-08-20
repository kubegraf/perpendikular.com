import {
  Scale,
  ShieldAlert,
  Cpu,
  Users,
  Swords,
  Target,
  TrendingUp,
  PoundSterling,
  Lock,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type Perspective = {
  label: string;
  icon: LucideIcon;
  description: string;
};

const PERSPECTIVES: Perspective[] = [
  { label: "Market", icon: TrendingUp, description: "Demand, timing, segment size and where the pull actually comes from." },
  { label: "Finance", icon: PoundSterling, description: "Unit economics, payback period, cash exposure and downside cost." },
  { label: "Technology", icon: Cpu, description: "Feasibility, delivery risk and the cost of the architecture you commit to." },
  { label: "Legal", icon: Scale, description: "Jurisdiction, contracts, liability and the regulatory load you inherit." },
  { label: "Security", icon: Lock, description: "Threat surface, data residency and the controls the decision assumes." },
  { label: "Customer", icon: Users, description: "Real willingness to pay, switching cost and stated versus revealed need." },
  { label: "Operations", icon: Settings2, description: "Who runs it on day 200, and what that complexity costs to staff." },
  { label: "Competition", icon: Swords, description: "Incumbents, indirect alternatives and the response you should expect." },
  { label: "Strategy", icon: Target, description: "Option value, reversibility and whether this compounds or constrains." },
  { label: "Risk", icon: ShieldAlert, description: "Failure modes ranked by likelihood, blast radius and time to detect." },
];

export function PerspectiveGrid() {
  return (
    <Section id="product">
      <div className="container-page">
        <SectionHeader
          eyebrow="Perspectives"
          title="One question. Every angle."
          description="Complex decisions rarely have one correct perspective. Perpendikular deliberately separates the problem into independent viewpoints before bringing them back together."
        />

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
          {PERSPECTIVES.map((p, i) => (
            <Reveal
              as="li"
              key={p.label}
              delay={Math.min(i, 9) * 0.04}
              className="group bg-card p-5 transition-colors duration-300 hover:bg-subtle sm:p-6"
            >
              <p.icon
                className="h-4 w-4 text-muted transition-colors duration-300 group-hover:text-accent"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em]">
                {p.label}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                {p.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
            Perspectives run independently — no shared context, no consensus bias.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
