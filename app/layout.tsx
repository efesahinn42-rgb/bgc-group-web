import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bgcgroup.com.tr"),
  title: {
    default: "BGC Group | Geleceğe Güvenle Taşır",
    template: "%s | BGC Group",
  },
  description:
    "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini ortak güven standardı altında buluşturan premium çatı markadır.",
  openGraph: {
    title: "BGC Group | Geleceğe Güvenle Taşır",
    description:
      "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini ortak güven standardı altında buluşturan premium çatı markadır.",
    url: "https://bgcgroup.com.tr",
    siteName: "BGC Group",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BGC Group | Geleceğe Güvenle Taşır",
    description:
      "BGC Group; sigorta, asistans ve kurumsal mobilite alanlarında uzmanlaşan şirketlerini ortak güven standardı altında buluşturan premium çatı markadır.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="antialiased font-sans">
        <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
