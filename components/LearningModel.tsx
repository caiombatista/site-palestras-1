import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

const icons = ["01", "02", "03", "04", "05", "06"];

export function LearningModel() {
  return (
    <section id="metodologia" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionTitle
          eyebrow="Modelo de aprendizado"
          title="Uma experiencia que combina rigor, repertorio global e entrega aplicavel."
          description="A metodologia foi desenhada para gerar circulacao de ideias relevantes, conexoes de alto nivel e traducao pratica para a realidade de negocio."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.learningModel.map((item, index) => (
            <div key={item} className="panel flex min-h-40 flex-col justify-between p-6">
              <span className="display-title text-3xl text-electric">{icons[index]}</span>
              <p className="max-w-xs text-lg font-semibold leading-7 text-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
