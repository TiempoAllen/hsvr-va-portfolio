import { offers } from "@/data/site";

export default function Offers() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-[620px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          What I can take off your plate
        </h2>
        <p className="font-script text-[28px] text-pink-ink">pick one lane, or both ↓</p>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, i) => {
          const social = offer.lane === "Social";
          return (
            <li
              key={offer.title}
              className={`rounded-[22px] border-2 border-ink p-7 ${social ? "bg-paper" : "bg-cream"}`}
            >
              <div className="flex items-start justify-between">
                <span
                  aria-hidden="true"
                  className="font-script text-[64px] leading-[0.8] text-pink-ink"
                >
                  {i + 1}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${social ? "bg-petal" : "bg-paper"}`}
                >
                  {offer.lane}
                </span>
              </div>
              <h3 className="mb-1.5 mt-5 font-display text-[22px] font-extrabold tracking-[-0.02em]">
                {offer.title}
              </h3>
              <p className={social ? "text-ink-soft" : "text-ink-warm"}>{offer.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
