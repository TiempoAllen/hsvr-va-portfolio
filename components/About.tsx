import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto flex max-w-[1160px] flex-wrap gap-x-[72px] gap-y-8 px-6 py-24">
        <div className="flex-[1_1_280px]">
          <p className="origin-left -rotate-3 font-script text-[44px] leading-none text-pink-ink">
            a little about me
          </p>
          <h2 className="mt-5 font-display text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.035em]">
            {about.heading}
          </h2>
        </div>

        <div className="min-w-0 flex-[2_1_480px] text-lg leading-relaxed">
          {about.paragraphs.map((text, i) => (
            <p key={i} className={i > 0 ? "mt-5" : ""}>
              {text}
            </p>
          ))}

          <ul className="mt-8 flex flex-wrap gap-2.5 text-sm">
            <li className="rounded-full border-[1.5px] border-ink bg-ink px-3.5 py-2 font-semibold text-paper">
              {about.highlight}
            </li>
            {about.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border-[1.5px] border-ink bg-paper px-3.5 py-2 font-medium"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
