import Image from "next/image";

import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

export function Authority() {
  const authority = (siteContent as {
    authority?: {
      partners?: string[];
      proof?: string[];
    };
  }).authority;
  const partners = authority?.partners ?? [];
  const proofItems = authority?.proof ?? [];

  return (
    <section id="experiencia" className="section-shell">
      <SectionTitle
        eyebrow="Parceiros e autoridade"
        title="Credibilidade que aparece no ecossistema, no metodo e na experiencia entregue."
        description="A percepcao de valor e reforcada por linguagem institucional, repertorio de mercado e uma arquitetura de programa desenhada para decisores."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="panel p-7">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div key={partner} className="flex min-h-28 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-center">
                <span className="display-title text-xl uppercase tracking-[0.18em] text-slate-200">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel overflow-hidden p-7">
          <div className="relative min-h-full">
            <div className="absolute inset-x-0 top-0 h-24 rounded-full bg-electric/20 blur-3xl" />
            <Image
              src="/campus-grid.svg"
              alt="Padrao visual abstrato"
              width={480}
              height={420}
              className="absolute right-0 top-0 hidden w-48 opacity-60 lg:block"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.28em] text-electric">Prova institucional</p>
              <div className="mt-5 space-y-4">
                {proofItems.map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
