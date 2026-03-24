import { SectionTitle } from "@/components/SectionTitle";
import { siteContent } from "@/data/site";

export function FAQ() {
  return (
    <section id="faq" className="section-shell">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas frequentes para acelerar a decisao."
        description="Uma visao direta sobre formatos, duracao e desenho dos programas."
      />

      <div className="mt-12 space-y-4">
        {siteContent.faq.map((item) => (
          <details
            key={item.question}
            className="panel group overflow-hidden p-0 open:border-electric/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-text">
              {item.question}
              <span className="text-2xl text-electric transition group-open:rotate-45">+</span>
            </summary>
            <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-muted">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
