import { postingPlan, profile } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-16 px-6 pb-28 pt-16"
    >
      <div className="min-w-0 flex-[1_1_520px]">
        <p className="font-script text-[32px] leading-tight text-pink-ink">
          Hi, I&apos;m {profile.firstName} —
        </p>
        <h1 className="mt-3 font-display text-[clamp(52px,8vw,104px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
          Virtual
          <br />
          Assistant
        </h1>
        <svg
          aria-hidden="true"
          width="300"
          height="22"
          viewBox="0 0 300 22"
          fill="none"
          className="mt-2.5 block max-w-full"
        >
          <path
            d="M3 14c40-9 80-10 120-5s80 7 120 0 40-6 54-4"
            className="stroke-hot"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <p className="mt-7 max-w-[500px] text-[19px] leading-relaxed">{profile.tagline}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={profile.calendarUrl}
            className="inline-flex min-h-[52px] items-center rounded-[14px] border-2 border-ink bg-cream px-7 font-semibold shadow-sticker transition-transform hover:-translate-y-0.5"
          >
            Book a discovery call
          </a>
          <a
            href="#work"
            className="inline-flex min-h-[52px] items-center px-2 font-semibold underline underline-offset-[5px] hover:text-pink-ink"
          >
            See my work
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full min-w-0 flex-[0_1_420px]">
        <svg
          aria-hidden="true"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          className="absolute -right-2.5 -top-5"
        >
          <path
            d="M22 2c2 12 8 18 20 20-12 2-18 8-20 20-2-12-8-18-20-20 12-2 18-8 20-20z"
            className="fill-ink"
          />
        </svg>

        <div className="rounded-[28px] border-2 border-ink bg-petal p-6 shadow-sticker-lg">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="font-display text-xl font-extrabold tracking-[-0.02em]">
              This week&apos;s posting plan
            </h2>
            <span className="font-script text-[22px] text-pink-ink">all set by Monday</span>
          </div>

          <ul className="flex flex-col gap-2 text-sm">
            {postingPlan.map((row, i) => (
              <li
                key={row.day}
                className={`flex items-center gap-2.5 rounded-[14px] border-[1.5px] border-ink bg-paper px-3 py-2.5 ${
                  i === postingPlan.length - 1 ? "border-dashed" : ""
                }`}
              >
                <strong className="w-[34px] shrink-0">{row.day}</strong>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    row.platform === "TikTok" ? "bg-ink text-paper" : "bg-hot"
                  }`}
                >
                  {row.platform}
                </span>
                <span className="min-w-0 flex-1">{row.format}</span>
                <span className="font-semibold">{row.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center rounded-[14px] border-2 border-ink bg-paper px-3.5 py-2 text-sm font-semibold shadow-sticker-sm">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-open" />
            {profile.availability}
          </span>
          <span className="inline-flex items-center rounded-full bg-ink px-3.5 py-2 text-[13px] font-medium text-paper">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
