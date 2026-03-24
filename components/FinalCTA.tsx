import { siteContent } from "@/data/site";

export function FinalCTA() {
  return (
    <section id="contato" className="px-5 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(57,166,255,0.16),rgba(255,122,24,0.14),rgba(6,8,22,0.92))] shadow-orange">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 lg:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan">CTA final</p>
            <h2 className="display-title mt-4 text-4xl uppercase text-text lg:text-6xl">
              Assuma seu papel de protagonista no futuro dos negocios e da tecnologia.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/85">
              Se a sua organizacao precisa elevar o nivel da conversa sobre IA, transformacao digital e lideranca contemporanea, este e o momento de iniciar uma experiencia sob medida com Caio Batista.
            </p>
            <div className="mt-8 space-y-3 text-sm text-slate-200/80">
              <p>{siteContent.contact.email}</p>
              <p>{siteContent.contact.phone}</p>
              <a href={siteContent.contact.linkedin} className="inline-flex text-cyan transition hover:text-white">
                LinkedIn profissional
              </a>
            </div>
          </div>

          <div className="bg-black/20 p-8 lg:border-l lg:border-white/10 lg:p-12">
            <form className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Nome</span>
                <input type="text" className="form-input" placeholder="Seu nome" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">E-mail</span>
                <input type="email" className="form-input" placeholder="voce@empresa.com" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Telefone</span>
                <input type="tel" className="form-input" placeholder="+55" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-200">Area de interesse</span>
                <select className="form-input">
                  <option>Palestra executiva</option>
                  <option>Workshop in company</option>
                  <option>Trilha de formacao</option>
                  <option>Mentoria avancada</option>
                </select>
              </label>
              <button type="submit" className="primary-button w-full justify-center">
                Solicitar contato
              </button>
              <p className="text-xs leading-6 text-slate-300/70">
                Estrutura preparada para integrar CRM, automacao ou formulario real em uma etapa posterior.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
