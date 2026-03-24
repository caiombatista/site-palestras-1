import { siteContent } from "@/data/site";

export function FinalProject() {
  return (
    <section className="px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 lg:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan">Projeto final transformador</p>
            <h3 className="display-title mt-4 text-3xl uppercase text-text lg:text-5xl">
              {siteContent.finalProject.title}
            </h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              {siteContent.finalProject.description}
            </p>
            <a href="#contato" className="primary-button mt-8 inline-flex">
              {siteContent.finalProject.cta}
            </a>
          </div>
          <div className="relative min-h-[320px] overflow-hidden lg:border-l lg:border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(57,166,255,0.25),transparent_28%),radial-gradient(circle_at_bottom,rgba(255,122,24,0.22),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-grid bg-[size:30px_30px] opacity-40" />
            <div className="relative flex h-full items-end p-8 lg:p-10">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.28em] text-neon">Entrega esperada</p>
                <p className="mt-3 text-xl font-semibold text-text">
                  Uma iniciativa defendivel diante do mercado e capaz de continuar gerando valor apos a formacao.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
