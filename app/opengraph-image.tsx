import { ImageResponse } from "next/og";
import { company } from "@/content/site";

export const alt = `${company.shortName} — MEP & building-services contracting in Dubai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time. Uses only inline styles (ImageResponse supports a
// flexbox subset of CSS) and no external fonts or assets.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b2239",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* ImageResponse can't read CSS custom properties, so this is a
              literal hex — must stay in sync with --orange in globals.css
              (sampled from the real logo; see DESIGN.md). */}
          <div style={{ width: "72px", height: "8px", backgroundColor: "#e55225" }} />
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: "76px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            MEP &amp; building-services contracting in Dubai
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "34px", color: "#c4cdd6" }}>
            {company.legalName}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "14px",
              fontSize: "24px",
              color: "#a9b2bc",
            }}
          >
            Trade licence {company.tradeLicence} · Dubai Chamber{" "}
            {company.chamberMembership} · Al Quoz Industrial First
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
