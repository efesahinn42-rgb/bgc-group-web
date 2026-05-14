import MotionReveal from "@/components/MotionReveal";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  rozetler?: string[];
};

export default function PageBanner({
  eyebrow,
  title,
  description,
  rozetler = [],
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-white">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(65,82,186,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(31,39,72,0.06),transparent_24%)]" />

      <div className="container-shell relative py-16 sm:py-20">
        <MotionReveal className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="section-title mt-5 max-w-4xl">{title}</h1>
          <p className="lead-text mt-6 max-w-3xl">{description}</p>

          {rozetler.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {rozetler.map((rozet) => (
                <span
                  key={rozet}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-brand)]"
                >
                  {rozet}
                </span>
              ))}
            </div>
          ) : null}
        </MotionReveal>
      </div>
    </section>
  );
}
