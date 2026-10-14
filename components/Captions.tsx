import { captions, dmSample } from "@/data/site";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col rounded-[22px] border-2 border-ink bg-paper p-6">{children}</article>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 border-t-[1.5px] border-dashed border-ink pt-3.5 font-script text-2xl">{children}</p>
  );
}

export default function Captions() {
  return (
    <section className="mx-auto max-w-[1160px] px-6 py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-[600px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Writing in your voice
        </h2>
        <p className="font-script text-[28px] text-pink-ink">you edit, you don&apos;t draft</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {captions.map((c) => (
          <Card key={c.label}>
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  c.platform === "TikTok" ? "bg-ink text-paper" : "bg-hot"
                }`}
              >
                {c.platform}
              </span>
              <span className="text-sm font-semibold">{c.kind}</span>
            </div>

            {"hook" in c && (
              <div className="mt-[18px] rounded-[14px] bg-ink px-4 py-3.5 text-paper">
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-rose">
                  On-screen hook · first 3 seconds
                </p>
                <p className="mt-1.5 font-display text-xl font-extrabold leading-tight">{c.hook}</p>
              </div>
            )}

            <p className="mt-[18px] flex-1 whitespace-pre-line">{c.body}</p>
            <p className="mt-3.5 text-sm font-medium text-pink-ink">{c.tags}</p>
            <Label>{c.label}</Label>
          </Card>
        ))}

        <Card>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border-[1.5px] border-ink bg-cream px-2.5 py-0.5 text-xs font-semibold">
              DM
            </span>
            <span className="text-sm font-semibold">Reply from the playbook</span>
          </div>
          <div className="mt-[18px] flex flex-1 flex-col gap-2.5 text-[15px]">
            <p className="max-w-[80%] self-start rounded-[16px_16px_16px_4px] bg-[#f3e6ea] px-3.5 py-2.5">
              {dmSample.question}
            </p>
            <p className="max-w-[85%] self-end whitespace-pre-line rounded-[16px_16px_4px_16px] border-[1.5px] border-ink bg-petal px-3.5 py-2.5">
              {dmSample.reply}
            </p>
          </div>
          <p className="mt-3.5 text-sm font-medium text-pink-ink">{dmSample.outcome}</p>
          <Label>{dmSample.label}</Label>
        </Card>
      </div>
    </section>
  );
}
