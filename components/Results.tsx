import Image from "next/image";
import { results } from "@/data/site";

function Shot({
  shot,
  className = "",
  sizes,
}: {
  shot: (typeof results.screenshots)[keyof typeof results.screenshots];
  className?: string;
  sizes: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[22px] border-2 border-ink bg-white shadow-sticker ${className}`}
    >
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt}
        sizes={sizes}
        className="h-auto w-full"
      />
    </figure>
  );
}

export default function Results() {
  const { insights, followers, views } = results.screenshots;

  return (
    <section id="results" className="mx-auto max-w-[1160px] px-6 pb-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-script text-[32px] text-pink-ink">receipts, not promises</p>
          <h2 className="mt-1 max-w-[620px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            The numbers so far
          </h2>
        </div>
        <p className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper">
          Client account · {results.period}
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-8">
        <div className="min-w-0 flex-[1_1_520px]">
          <dl className="grid gap-4 sm:grid-cols-2">
            {results.stats.map((s) => (
              <div key={s.label} className="rounded-[22px] border-2 border-ink bg-petal p-6">
                <dt className="font-display text-[clamp(32px,4vw,44px)] font-extrabold leading-none tracking-[-0.03em]">
                  {s.value}
                </dt>
                <dd className="mt-2">
                  <span className="block font-medium">{s.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-open">{s.change}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid grid-cols-2 items-start gap-4">
            <Shot shot={followers} sizes="(min-width: 1024px) 260px, 45vw" />
            <Shot shot={views} sizes="(min-width: 1024px) 260px, 45vw" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[340px] flex-[0_1_340px]">
          <Shot shot={insights} sizes="340px" className="rounded-[32px] border-[3px] shadow-sticker-lg" />
          <p className="mt-4 text-center font-script text-2xl text-pink-ink">
            straight from Instagram Insights
          </p>
        </div>
      </div>
    </section>
  );
}
