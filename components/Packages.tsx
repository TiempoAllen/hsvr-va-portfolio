import { packages } from "@/data/site";

export default function Packages() {
  return (
    <section id="rates" className="bg-petal">
      <div className="mx-auto max-w-[1160px] px-6 py-24">
        <p className="font-script text-[32px] text-pink-ink">simple monthly rates</p>
        <h2 className="mb-2 mt-1 font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Retainers, not hourly guessing.
        </h2>
        <p className="mb-10 text-ink-soft">
          In USD. Starts with a paid 5-day trial week. Two weeks&apos; notice, no penalty.
        </p>

        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {packages.map((plan) => {
            const muted = plan.featured ? "text-ink-warm" : "text-ink-soft";
            return (
              <article
                key={plan.name}
                className={`flex flex-col rounded-[22px] border-2 border-ink p-7 ${
                  plan.featured ? "bg-cream shadow-[6px_6px_0_0_var(--color-ink)]" : "bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-2.5">
                  <h3 className="font-display text-[22px] font-extrabold">{plan.name}</h3>
                  {plan.featured && (
                    <span className="font-script text-[22px] text-pink-ink">best value!</span>
                  )}
                </div>
                <p className={`mb-[18px] mt-0.5 text-sm ${muted}`}>{plan.hours}</p>
                <p className="font-display text-[44px] font-extrabold leading-none tracking-[-0.03em]">
                  {plan.price}
                  <span className={`font-body text-[15px] font-normal tracking-normal ${muted}`}>
                    {" "}/mo, from
                  </span>
                </p>
                {plan.badge && (
                  <p className="mt-2.5 self-start rounded-full bg-ink px-3 py-1 text-[13px] font-semibold text-paper">
                    {plan.badge}
                  </p>
                )}
                <p className={`mt-[18px] text-[15px] ${muted}`}>{plan.includes}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
