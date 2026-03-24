import Image from "next/image";

import abstractLinesBackground from "../abstract_lines_final.png";
import contactPortrait from "../foto caio.jpg";
import { siteContent } from "@/data/site";

export default function Home() {
  const heroBandPlainStyle = {
    background: "#f0f5f9",
  };

  const introStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(17, 31, 46, 0.38) 0%, rgba(17, 31, 46, 0.18) 100%), url(${abstractLinesBackground.src})`,
  };

  return (
    <main>
      <header className="site-header">
        <div className="site-shell site-header__inner">
          <a className="brand" href="#top">
            {siteContent.brand.name}
          </a>
          <nav className="site-nav" aria-label="Primaria">
            <a href="#palestras">Palestras</a>
            <a href="#sobre">Sobre</a>
            <a href="#formatos">Produtos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <section className="intro-hero" id="top" style={introStyle}>
        <div className="site-shell intro-hero__shell">
          <div className="intro-hero__frame">
            <p className="intro-hero__eyebrow">
              Palestras <span className="eyebrow-separator">|</span> Estratégia{" "}
              <span className="eyebrow-separator">|</span> Mentoria{" "}
              <span className="eyebrow-separator">|</span> Treinamento de Lideranças
            </p>

            <div className="intro-hero__name" aria-label="Caio Batista">
              <span className="intro-hero__name-strong">Caio</span>
              <span className="intro-hero__name-light">Batista</span>
            </div>

            <a
              className="intro-hero__scroll"
              href="#overview"
              aria-label="Ver mais do site"
            >
              <span className="intro-hero__scroll-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="hero-band" id="overview" style={heroBandPlainStyle}>
        <div className="hero site-shell">
          <div className="hero-copy hero-copy--full">
            <div className="hero-title" aria-label="Temas centrais">
              <ul className="hero-title-list">
                {siteContent.hero.titleLines.map((item, index) => (
                  <li
                    className={`hero-title-item hero-title-item--${index + 1}`}
                    key={item}
                  >
                    <Image
                      src="/seta2-transparent.png"
                      alt=""
                      width={42}
                      height={18}
                      className="hero-title-arrow"
                      aria-hidden="true"
                    />
                    <span>{item.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-title-closing" aria-label="Fechamento da mensagem">
                {siteContent.hero.titleClosing.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>
            <p className="lead">{siteContent.hero.description}</p>

            <ul className="hero-highlights" aria-label="Diferenciais de abordagem">
              {siteContent.hero.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                {siteContent.hero.primaryCta}
              </a>
              <a className="button button-secondary" href="#palestras">
                {siteContent.hero.secondaryCta}
              </a>
            </div>

            <div className="quick-links">
              <a className="text-link" href="#publicos">
                Para quem é
              </a>
              <a className="text-link" href="#formatos">
                Formatos
              </a>
              <a
                className="text-link external-link"
                href={siteContent.contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Perfil completo
              </a>
              <a className="text-link" href="#contato">
                Falar com Caio
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="content-gradient">
        <section className="section site-shell" id="publicos">
          <div className="section-intro">
            <h2>Mais do que uma palestra, uma intervenção para mover o que está parado.</h2>
            <p>
              Quando há excesso de discussão, baixa clareza, liderança
              desalinhada ou estratégia parada no papel, a proposta é transformar
              conversa em movimento.
            </p>
          </div>

        </section>

        <section className="section site-shell" id="palestras">
          <div className="section-intro">
            <p className="kicker">Palestras para mover o que está travado</p>
            <h2>
              Temas pensados para empresas e lideranças que precisam ganhar
              clareza, alinhar decisões e acelerar a execução do que realmente
              importa.
            </h2>
          </div>

          <div className="columns">
            {siteContent.talks.map((talk) => (
              <article className="entry talk-card" key={talk.slug}>
                {talk.category ? <p className="entry-meta">{talk.category}</p> : null}
                <h3>{talk.title}</h3>
                <p className="talk-subtitle">{talk.subtitle}</p>
                <p>{talk.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section site-shell" id="sobre">
          <div className="section-intro">
            <h2>{siteContent.about.title}</h2>
          </div>

          {siteContent.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="quote-grid" aria-label="Frases de posicionamento">
            {siteContent.quotes.map((quote) => (
              <blockquote className="quote-card" key={quote}>
                <p>{quote}</p>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section site-shell" id="formatos">
          <div className="section-intro">
            <p className="kicker">Produtos</p>
          </div>

          <div className="columns columns-two">
            {siteContent.formats.map((format) => (
              <article className="entry" key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section site-shell final-panel" id="contato">
          <div className="final-panel__grid">
            <div className="final-panel__content">
              <div className="section-intro">
                <p className="kicker">Contato</p>
                <h2 className="final-panel__title">{siteContent.finalCta.title}</h2>
                <p>{siteContent.finalCta.description}</p>
              </div>

              <a className="contact-link" href={`mailto:${siteContent.contact.email}`}>
                {siteContent.contact.email}
              </a>

              <div className="contact-actions">
                <a
                  className="text-link external-link contact-social-link"
                  href={siteContent.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-link external-link contact-social-link"
                  href={siteContent.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="final-panel__portrait">
              <div className="final-panel__portrait-frame">
                <Image
                  src={contactPortrait}
                  alt="Caio Batista"
                  fill
                  sizes="(max-width: 980px) 100vw, 38vw"
                  className="final-panel__portrait-image"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer site-shell">
          <p>{siteContent.brand.name}</p>
        </footer>
      </div>
    </main>
  );
}
