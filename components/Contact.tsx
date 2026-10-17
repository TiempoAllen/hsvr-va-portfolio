import { profile } from "@/data/site";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1160px] px-6 pb-10 pt-28">
        <p className="font-script text-4xl text-rose">so, what&apos;s eating your week?</p>
        <h2 className="mt-2 max-w-[860px] font-display text-[clamp(40px,6.5vw,84px)] font-extrabold leading-[0.98] tracking-[-0.045em] text-cream">
          Let&apos;s hand some of it to me.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={profile.emailUrl}
            className="inline-flex min-h-[52px] items-center rounded-[14px] border-2 border-cream bg-cream px-7 font-semibold text-ink shadow-[4px_4px_0_0_var(--color-hot)] transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-lg underline underline-offset-[5px] hover:text-cream"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-24 flex flex-wrap justify-between gap-4 border-t border-plum-line pt-6 text-sm text-mist">
          <span>
            © {new Date().getFullYear()} {profile.name} · {profile.role}
          </span>
          <span className="flex gap-6">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="text-paper hover:text-cream">
                {s.label}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
