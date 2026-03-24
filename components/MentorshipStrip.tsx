import { siteContent } from "@/data/site";

export function MentorshipStrip() {
  return (
    <section className="px-5 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,122,24,0.12),rgba(57,166,255,0.12))] p-7 shadow-glow lg:p-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neon">Conheca tambem as mentorias avancadas</p>
            <h3 className="display-title mt-4 text-3xl uppercase text-text lg:text-4xl">
              Extensoes premium para publicos seniores, conselhos e liderancas em fase de escala.
            </h3>
          </div>
          <a href="#contato" className="secondary-button shrink-0 text-center">
            Montar formato sob medida
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {siteContent.executivePrograms.map((program) => (
            <div key={program} className="rounded-[1.75rem] border border-white/10 bg-black/20 px-5 py-5 text-sm font-medium text-slate-100">
              {program}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
