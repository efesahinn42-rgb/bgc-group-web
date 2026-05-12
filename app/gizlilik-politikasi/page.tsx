import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { yasalSayfaIcerikleri } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "BGC Group gizlilik yaklaşımına ilişkin geçici bilgilendirme metni.",
};

export default function GizlilikPolitikasiPage() {
  const icerik = yasalSayfaIcerikleri["gizlilik-politikasi"];

  return <PolicyPageTemplate {...icerik} />;
}
