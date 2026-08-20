import {
  Briefcase,
  Cloud,
  Network,
  LineChart,
  FileCheck,
  UserRound,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

type UseCase = {
  category: string;
  icon: LucideIcon;
  question: string;
  angles: string[];
  tension: string;
};

const USE_CASES: UseCase[] = [
  {
    category: "Business",
    icon: Briefcase,
    question: "Should we raise funding or bootstrap?",
    angles: ["Finance", "Strategy", "Risk", "Market"],
    tension: "Dilution cost versus the speed of capturing the window.",
  },
  {
    category: "Technology",
    icon: Cloud,
    question: "AWS, GCP or Azure?",
    angles: ["Technology", "Finance", "Security", "Operations"],
    tension: "Discount depth versus the cost of leaving later.",
  },
  {
    category: "Architecture",
    icon: Network,
    question: "Microservices or monolith?",
    angles: ["Technology", "Operations", "Risk", "Strategy"],
    tension: "Your team topology versus the scaling story you tell.",
  },
  {
    category: "Investment",
    icon: LineChart,
    question: "What are the downside risks?",
    angles: ["Risk", "Market", "Finance", "Legal"],
    tension: "Modelled downside versus correlated failure.",
  },
  {
    category: "Procurement",
    icon: FileCheck,
    question: "Which vendor should we choose?",
    angles: ["Legal", "Security", "Finance", "Operations"],
    tension: "Lowest bid versus total switching cost.",
  },
  {
    category: "Career",
    icon: UserRound,
    question: "Should I accept this offer?",
    angles: ["Finance", "Strategy", "Risk", "Market"],
    tension: "Compensation today versus option value in three years.",
  },
  {
    category: "Strategy",
    icon: Globe,
    question: "Which market should we enter first?",
    angles: ["Market", "Competition", "Operations", "Legal"],
    tension: "Revenue size versus what it costs to serve.",
  },
  {
    category: "Product",
    icon: Layers,
    question: "Which feature should we build?",
    angles: ["Customer", "Market", "Technology", "Strategy"],
    tension: "The loudest request versus the largest lift.",
  },
];

export function UseCases() {
  return (
    <Section id="use-cases">
      <div className="container-page">
        <SectionHeader
          eyebrow="Use cases"
          title="The questions worth arguing about."
          description="Anything with a real trade-off, a real cost of being wrong, and more than one defensible answer."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:mt-16 sm:grid-cols-2 xl:grid-cols-4">
          {USE_CASES.map((u, i) => (
            <Reveal
              as="li"
              key={u.question}
              delay={Math.min(i, 7) * 0.04}
              className="group flex flex-col bg-card p-5 transition-colors duration-300 hover:bg-subtle sm:p-6"
            >
              <div className="flex items-center gap-2.5">
                <u.icon
                  className="h-3.5 w-3.5 text-muted transition-colors duration-300 group-hover:text-accent"
                  aria-hidden="true"
                />
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  {u.category}
                </span>
              </div>

              <h3 className="mt-4 text-[1.0625rem] font-medium leading-snug tracking-[-0.015em]">
                {u.question}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {u.angles.map((angle) => (
                  <li
                    key={angle}
                    className="rounded-md border border-border px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted"
                  >
                    {angle}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-5 text-[0.8125rem] leading-relaxed text-muted">
                <span className="text-foreground/80">Tension:</span> {u.tension}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
