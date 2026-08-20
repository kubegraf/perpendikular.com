import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type MarkProps = SVGProps<SVGSVGElement> & {
  /** Renders the convergence node in the accent colour. Set false for pure monochrome. */
  accentNode?: boolean;
  /** Progressively draws the three vectors on mount. */
  animated?: boolean;
};

/**
 * PERPENDIKULAR mark.
 * Three vectors approach from independent directions — two perpendicular
 * axes and a third angle — and converge on a single decision point.
 */
export function LogoMark({
  accentNode = true,
  animated = false,
  className,
  ...props
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        style={
          animated
            ? {
                strokeDasharray: 14,
                strokeDashoffset: 14,
                animation: "pk-draw 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
              }
            : undefined
        }
      >
        <path d="M16 3.6V12.7" />
        <path d="M28.4 16H19.3" style={animated ? { animationDelay: "0.1s" } : undefined} />
        <path d="M5.6 26.4 13.5 18.5" style={animated ? { animationDelay: "0.2s" } : undefined} />
      </g>
      <circle
        cx="16"
        cy="16"
        r="3.2"
        fill={accentNode ? "var(--accent)" : "currentColor"}
      />
    </svg>
  );
}

/** Full lockup: mark + wordmark. Inherits colour from its container. */
export function Logo({
  className,
  markClassName,
  animated = false,
}: {
  className?: string;
  markClassName?: string;
  animated?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-foreground", className)}>
      <LogoMark animated={animated} className={cn("h-7 w-7", markClassName)} />
      <span className="text-[0.9375rem] font-semibold tracking-[0.14em] leading-none">
        PERPENDIKULAR
      </span>
    </span>
  );
}
