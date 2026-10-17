import { profile } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#results", label: "Results" },
  { href: "#rates", label: "Rates" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-[-0.02em] text-ink"
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-7 text-[15px] font-medium">
          <ul className="hidden items-center gap-7 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-pink-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="font-semibold underline decoration-hot decoration-[3px] underline-offset-[6px] hover:text-pink-ink"
          >
            Let&apos;s talk →
          </a>
        </div>
      </nav>
    </header>
  );
}
