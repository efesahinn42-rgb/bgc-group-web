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
    <section className="relative overflow-hidden pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_top_left,rgba(202,170,112,0.18),transparent_40%),radial-gradient(circle_at_top_right,rgba(19,32,57,0.09),transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <MotionReveal className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--color-gold-deep)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-[color:var(--color-navy)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
            {description}
          </p>

          {rozetler.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {rozetler.map((rozet) => (
                <span
                  key={rozet}
                  className="rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-medium text-[color:var(--color-navy)] shadow-[0_10px_30px_rgba(20,32,57,0.05)]"
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
