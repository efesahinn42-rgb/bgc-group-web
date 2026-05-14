import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <Link
      href="/#iletisim-danismani"
      aria-label="İletişim alanına git"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white text-[var(--color-brand)] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-0.5 hover:text-[var(--color-brand-soft)]"
    >
      <MessageSquareText className="h-5 w-5" strokeWidth={1.9} />
    </Link>
  );
}
