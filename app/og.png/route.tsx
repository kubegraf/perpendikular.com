import { ImageResponse } from "next/og";

// A route rather than the opengraph-image convention: a static export names
// the file after the route, and social scrapers need the .png extension.
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };

const FG = "#edeff3";
const MUTED = "#8b909b";
const ACCENT = "#6b8afb";
const BORDER = "#1f232b";

/** The mark, composed from primitives so it renders identically in Satori. */
function Mark({ scale = 1 }: { scale?: number }) {
  const s = (n: number) => n * scale;
  return (
    <div style={{ display: "flex", position: "relative", width: s(64), height: s(64) }}>
      <div style={{ position: "absolute", left: s(30.6), top: s(4), width: s(3.5), height: s(20), background: FG, borderRadius: s(2) }} />
      <div style={{ position: "absolute", left: s(40), top: s(30.6), width: s(20), height: s(3.5), background: FG, borderRadius: s(2) }} />
      <div style={{ position: "absolute", left: s(9), top: s(45), width: s(22), height: s(3.5), background: FG, borderRadius: s(2), transform: "rotate(-45deg)" }} />
      <div style={{ position: "absolute", left: s(25.6), top: s(25.6), width: s(13), height: s(13), background: ACCENT, borderRadius: s(13) }} />
    </div>
  );
}

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090b",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Mark scale={0.95} />
          <div style={{ fontSize: 30, color: FG, letterSpacing: 5, fontWeight: 600 }}>
            PERPENDIKULAR
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ fontSize: 22, color: MUTED, letterSpacing: 6 }}>
            DECISION INTELLIGENCE
          </div>
          <div style={{ fontSize: 82, color: FG, fontWeight: 600, letterSpacing: -2, lineHeight: 1.05 }}>
            AI that sees every angle.
          </div>
          <div style={{ fontSize: 27, color: MUTED, maxWidth: 860, lineHeight: 1.4 }}>
            Multiple perspectives. Independent analysis. One clearer decision.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: `1px solid ${BORDER}`, paddingTop: 28 }}>
          {["3 CONTRADICTIONS", "5 ASSUMPTIONS CHALLENGED", "CONFIDENCE 87%"].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                border: `1px solid ${BORDER}`,
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 20,
                color: MUTED,
                letterSpacing: 1.5,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
