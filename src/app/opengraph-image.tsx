import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "BGC Group — Filo Kiralama, Sigorta, Asistans";

export default async function Image() {
  const logoData = fs.readFileSync(
    path.join(process.cwd(), "public/images/bgc group logo_png.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070606",
        }}
      >
        <img src={logoSrc} width={480} height={480} alt="" />
        <div
          style={{
            marginTop: 12,
            fontSize: 28,
            color: "#dcdcdc",
            fontWeight: 500,
          }}
        >
          Filo Kiralama · Sigorta · Asistans Hizmetleri
        </div>
      </div>
    ),
    { ...size }
  );
}
