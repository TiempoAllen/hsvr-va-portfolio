# VA Portfolio — one-page landing site

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4.

## Run it

Put this folder at `C:\Users\allen\Documents\NextJS\va-portfolio`, then:

```bash
cd C:\Users\allen\Documents\NextJS\va-portfolio
npm install
npm run dev
```

Open http://localhost:3000

To publish: push to GitHub and import the repo on Vercel. No environment variables needed.

## Change the content

All copy lives in **`data/site.ts`** — name, email, calendar link, services,
rates, testimonials, FAQ. You should not need to open a component to make the
site yours. Three things to swap before it goes live:

1. `profile.email` and `profile.calendarUrl` (currently a placeholder Calendly URL)
2. `testimonials` — these are written as examples, replace them with real quotes
3. `packages` prices — placeholders, set your own

## Colours

Sampled from the reference swatch and defined once in `app/globals.css`:

| Token | Hex | Used for |
| --- | --- | --- |
| `hot` | `#FE81D4` | buttons, accents, checkmarks |
| `rose` | `#FAACBF` | gradient washes |
| `blush` | `#FBC3C1` | gradient washes |
| `cream` | `#FFEABB` | tool chips, featured card, footer text |
| `ink` | `#3A1B33` | text, borders, footer background |
| `paper` | `#FFF8F3` | page background |

Use them as normal Tailwind utilities: `bg-hot`, `text-ink-soft`, `border-ink/10`.

## Structure

```
app/
  layout.tsx      fonts + metadata
  page.tsx        section order
  globals.css     palette, fonts, keyframes
components/
  Nav, Hero, DaySwitch, Services, Proof, Process, Packages, Contact, Footer, Mark
data/
  site.ts         all copy
```

`DaySwitch` is the interactive piece in the hero — the same Monday shown before
and after delegating. `Contact` opens the visitor's mail client with the message
pre-filled, so there's no backend to host. If you'd rather collect submissions,
swap the `openEmail` handler for a Formspree or Resend endpoint.

Fonts load from Google Fonts via `<link>` in `app/layout.tsx`: Bricolage
Grotesque (headlines), Inter (body), JetBrains Mono (labels).
