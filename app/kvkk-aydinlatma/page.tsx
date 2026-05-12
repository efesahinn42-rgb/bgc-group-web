import PolicyPageTemplate from "@/components/PolicyPageTemplate";
import { yasalSayfaIcerikleri } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma",
  description: "BGC Group KVKK yaklaşımına ilişkin geçici bilgilendirme metni.",
};

export default function KvkkAydinlatmaPage() {
  const icerik = yasalSayfaIcerikleri["kvkk-aydinlatma"];

  return <PolicyPageTemplate {...icerik} />;
}
