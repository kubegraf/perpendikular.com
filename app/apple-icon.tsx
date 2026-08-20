import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#08090b",
        }}
      >
        <div style={{ position: "absolute", left: 85.5, top: 30, width: 9, height: 46, background: "#edeff3", borderRadius: 5 }} />
        <div style={{ position: "absolute", left: 104, top: 85.5, width: 46, height: 9, background: "#edeff3", borderRadius: 5 }} />
        <div style={{ position: "absolute", left: 27, top: 121, width: 52, height: 9, background: "#edeff3", borderRadius: 5, transform: "rotate(-45deg)" }} />
        <div style={{ position: "absolute", left: 71, top: 71, width: 38, height: 38, background: "#6b8afb", borderRadius: 38 }} />
      </div>
    ),
    size,
  );
}
