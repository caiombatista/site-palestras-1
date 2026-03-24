import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

export function Locations() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Unidades e formatos"
        title="Capilaridade para atender eventos, escolas corporativas e programas especiais."
        description="Presenca fisica, experiencia hibrida e operacao remota com o mesmo padrao de design, conducao e percepcao premium."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {siteContent.locations.map((location) => (
          <article key={location.city} className="panel overflow-hidden">
            <div className="h-40 bg-[radial-gradient(circle_at_top_right,rgba(57,166,255,0.4),transparent_30%),linear-gradient(135deg,rgba(255,122,24,0.25),rgba(7,12,30,0.1))]" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan">{location.mode}</p>
              <h3 className="mt-3 text-2xl font-semibold text-text">{location.city}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{location.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
