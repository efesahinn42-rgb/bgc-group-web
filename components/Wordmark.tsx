type WordmarkProps = {
  className?: string;
  acikTon?: boolean;
};

export default function Wordmark({
  className = "",
  acikTon = false,
}: WordmarkProps) {
  const anaRenk = acikTon ? "text-white" : "text-[var(--color-brand)]";
  const ikincilRenk = acikTon ? "text-white/60" : "text-[var(--color-muted)]";
  const kutuSinir = acikTon
    ? "border-white/[0.15] bg-white/10"
    : "border-[var(--color-border)] bg-white";

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${kutuSinir}`}
      >
        <span className={`text-sm font-extrabold tracking-[0.22em] ${anaRenk}`}>
          BGC
        </span>
      </div>

      <div className="flex flex-col">
        <span
          className={`text-[1.05rem] font-extrabold uppercase tracking-[0.14em] ${anaRenk}`}
        >
          BGC Group
        </span>
        <span
          className={`text-[0.68rem] uppercase tracking-[0.28em] ${ikincilRenk}`}
        >
          Tek Çatı Uzmanlık
        </span>
      </div>
    </div>
  );
}
