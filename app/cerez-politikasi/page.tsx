import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { yasalSayfaIcerikleri } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "BGC Group çerez yaklaşımına ilişkin geçici bilgilendirme metni.",
};

export default function CerezPolitikasiPage() {
  const icerik = yasalSayfaIcerikleri["cerez-politikasi"];

  return <PolicyPageTemplate {...icerik} />;
}
