import { platformStats, platforms } from "@/data/site";

export default function Platforms() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1160px] px-6 py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[640px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Instagram and TikTok, handled.
          </h2>
          <p className="font-script text-[28px] text-rose">where I spend most of my days</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {platforms.map((p) => {
            const dot = p.name === "TikTok" ? "bg-cream" : "bg-hot";
            return (
              <article
                key={p.name}
                className="rounded-[26px] border-[1.5px] border-plum-line bg-plum p-8"
              >
                <span className={`inline-block rounded-full px-3 py-1 text-[13px] font-semibold text-ink ${dot}`}>
                  {p.name}
                </span>
                <h3 className="mb-5 mt-4 font-display text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em]">
                  {p.title}
                </h3>
                <ul className="flex flex-col gap-3 text-[#f3e3ec]">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className={`mt-[9px] h-2 w-2 shrink-0 rounded-full ${dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <dl className="mt-5 grid gap-5 sm:grid-cols-3">
          {platformStats.map((s) => (
            <div key={s.label} className="rounded-[20px] border-[1.5px] border-plum-line px-6 py-[22px]">
              <dt className="font-display text-[32px] font-extrabold leading-none text-cream">{s.value}</dt>
              <dd className="mt-2 text-sm text-mist">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
