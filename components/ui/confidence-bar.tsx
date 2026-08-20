"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function ConfidenceBar({
  value,
  className,
  label,
}: {
  value: number;
  className?: string;
  label?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("w-full", className)}>
      {label ? (
        <div className="mb-2 flex items-baseline justify-between">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
            {label}
          </span>
          <span className="font-mono text-[0.6875rem] text-muted">{value}%</span>
        </div>
      ) : null}
      <div
        className="relative h-1.5 w-full overflow-hidden rounded-full bg-border"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? "Confidence"}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-accent"
          initial={reduced ? false : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={reduced ? { width: `${value}%` } : undefined}
        />
      </div>
    </div>
  );
}
