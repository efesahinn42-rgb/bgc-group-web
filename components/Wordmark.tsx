type WordmarkProps = {
  className?: string;
};

export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--color-champagne-strong)] bg-white/80 shadow-[0_14px_34px_rgba(20,32,57,0.08)]">
        <span className="font-serif text-base font-semibold tracking-[0.28em] text-[color:var(--color-navy)]">
          BGC
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-serif text-[1.15rem] font-semibold tracking-[0.22em] text-[color:var(--color-navy)]">
          BGC GROUP
        </span>
        <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[color:var(--color-muted)]">
          Premium Kurumsal Yapı
        </span>
      </div>
    </div>
  );
}
