import { Logo } from "@/components/logo";

const COLUMNS: Array<{ title: string; links: string[] }> = [
  { title: "Product", links: ["How it works", "Use cases", "Pricing", "API"] },
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Resources", links: ["Documentation", "Research", "Blog"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

const HREFS: Record<string, string> = {
  "How it works": "#how-it-works",
  "Use cases": "#use-cases",
  Pricing: "#pricing",
};

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-muted">
              AI that sees every angle.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  {column.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href={HREFS[link] ?? "#cta"}
                        className="text-[0.875rem] text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-muted">© 2026 Perpendikular.</p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
            Decision intelligence · Built in the UK
          </p>
        </div>
      </div>
    </footer>
  );
}
