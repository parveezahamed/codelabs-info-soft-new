import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt =
  `${site.name} — Technology consulting, IT services & digital product delivery`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #060608 0%, #0a1514 42%, #060608 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#5eead4",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: 28,
            fontWeight: 600,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.08,
            maxWidth: 920,
            letterSpacing: "-0.02em",
          }}
        >
          Scalable digital solutions
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          {site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
