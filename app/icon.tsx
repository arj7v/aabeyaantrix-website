import { ImageResponse } from "next/og";

// Branded favicon: an "A" monogram, orange on navy. Placeholder until the real
// logo file is supplied (see DESIGN.md / BRIEF Section 0 — logo TODO).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b2239",
          color: "#e8501f",
          fontSize: 44,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        A
      </div>
    ),
    { ...size },
  );
}
