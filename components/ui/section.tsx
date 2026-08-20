import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-28 lg:py-32",
        bordered && "border-t border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-[0.975rem] leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
