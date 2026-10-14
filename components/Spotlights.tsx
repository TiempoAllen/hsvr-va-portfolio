import { spotlights } from "@/data/site";

/* Stand-in feed until a real profile screenshot replaces the phone mockup */
const feedTiles = [
  "bg-ink", "bg-cream", "bg-blush",
  "bg-rose", "bg-ink", "bg-cream",
  "bg-cream", "bg-hot", "bg-ink",
];

const calendarStyles = {
  soft: "bg-petal font-medium",
  accent: "bg-hot font-semibold",
  dashed: "border-[1.5px] border-dashed border-ink",
  cream: "bg-cream font-medium",
};

function Tag({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <p className={`inline-block rounded-[10px] border-2 border-ink px-3.5 py-1.5 text-sm font-semibold ${className}`}>
      {children}
    </p>
  );
}

export default function Spotlights() {
  const { social, executive } = spotlights;

  return (
    <section id="work" className="mx-auto max-w-[1160px] px-6 pb-28">
      <h2 className="mb-6 font-script text-[44px] leading-none text-pink-ink">client spotlights</h2>

      {/* Social */}
      <article className="flex flex-wrap items-center gap-x-16 gap-y-12 rounded-[36px] bg-petal p-[clamp(28px,5vw,64px)]">
        <div className="mx-auto w-full min-w-0 max-w-[300px] flex-[0_1_300px]">
          <div
            role="img"
            aria-label={`Instagram profile mockup for ${social.handle}`}
            className="rounded-[40px] border-[3px] border-ink bg-paper p-3.5 shadow-sticker-lg"
          >
            <div className="flex items-center gap-3 px-1.5 pb-3.5 pt-2">
              <div className="h-[52px] w-[52px] shrink-0 rounded-full border-2 border-ink bg-hot" />
              <div className="flex flex-1 justify-around text-center text-[11px] leading-tight">
                <span><strong className="text-sm">[00]</strong><br />posts</span>
                <span><strong className="text-sm">[0.0k]</strong><br />followers</span>
                <span><strong className="text-sm">[00]</strong><br />following</span>
              </div>
            </div>
            <p className="mx-1.5 mb-3 text-[13px] font-semibold">{social.handle}</p>
            <div className="grid grid-cols-3 gap-[3px] overflow-hidden rounded-xl">
              {feedTiles.map((tile, i) => (
                <div key={i} className={`aspect-[4/5] ${tile}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-[1_1_420px]">
          <Tag className="bg-cream">{social.tag}</Tag>
          <h3 className="mt-5 font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            {social.title}
          </h3>
          <p className="mt-5 text-[17px] leading-relaxed">{social.text}</p>
          <dl className="mt-7 flex flex-wrap gap-3">
            {social.results.map((r) => (
              <div
                key={r.label}
                className={`flex-[1_1_140px] rounded-2xl border-2 border-ink bg-paper px-[18px] py-4 ${
                  "placeholder" in r ? "border-dashed" : ""
                }`}
              >
                <dt className="font-display text-[28px] font-extrabold leading-none">{r.value}</dt>
                <dd className="mt-1.5 text-[13px]">{r.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 font-script text-[28px] leading-tight text-pink-ink">{social.quote}</p>
        </div>
      </article>

      {/* Executive */}
      <article className="mt-10 flex flex-wrap-reverse items-center gap-x-16 gap-y-12 rounded-[36px] bg-cream p-[clamp(28px,5vw,64px)]">
        <div className="min-w-0 flex-[1_1_420px]">
          <Tag className="bg-petal">{executive.tag}</Tag>
          <h3 className="mt-5 font-display text-[clamp(28px,3.5vw,40px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            {executive.title}
          </h3>
          <p className="mt-5 text-[17px] leading-relaxed">{executive.text}</p>
          <p className="mt-7 font-script text-[28px] leading-tight text-pink-ink">{executive.quote}</p>
        </div>

        <div className="mx-auto w-full min-w-0 flex-[0_1_380px]">
          <div className="rounded-3xl border-[3px] border-ink bg-paper p-5 shadow-sticker-lg">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg font-extrabold">Monday</span>
              <span className="text-[13px] text-ink-soft">Inbox: 6 left</span>
            </div>
            <ul className="flex flex-col gap-2 text-sm">
              {executive.calendar.map((slot) => (
                <li key={slot.time} className="flex items-center gap-3">
                  <span className="w-11 shrink-0 text-ink-soft">{slot.time}</span>
                  <span className={`flex-1 rounded-[10px] px-3 py-2.5 ${calendarStyles[slot.style]}`}>
                    {slot.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
