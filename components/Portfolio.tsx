import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

export function Portfolio() {
  return (
    <section id="trilhas" className="section-shell">
      <SectionTitle
        eyebrow="Sobre o Caio"
        title="Palestras e programas desenhados para quem lidera transformacoes de verdade."
        description="O portfolio organiza temas que conectam repertorio estrategico, profundidade tecnica e leitura contemporanea de mercado."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {siteContent.portfolioGroups.map((group) => (
          <article key={group.title} className="panel group p-7">
            <div className="flex h-full flex-col">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-electric">Grupo tematico</p>
                <h3 className="mt-4 text-2xl font-semibold text-text">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{group.description}</p>
              </div>
              <div className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 transition duration-300 group-hover:border-electric/40"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a href="#contato" className="mt-6 inline-flex text-sm font-semibold text-cyan transition hover:text-white">
                Saiba mais
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
