import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/data/site";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="programa" className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.26em] text-muted">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_20px_rgba(255,122,24,0.9)]" />
            {hero.eyebrow}
          </div>

          <div className="space-y-6">
            <h1 className="display-title max-w-4xl text-5xl uppercase leading-[0.95] text-text sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {hero.badges.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="#contato" className="primary-button text-center">
              {hero.primaryCta}
            </Link>
            <Link href="#trilhas" className="secondary-button text-center">
              {hero.secondaryCta}
            </Link>
          </div>

          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            {hero.metrics.map((metric) => (
              <div key={metric.value} className="panel p-5">
                <p className="display-title text-2xl uppercase text-text">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-electric/30 blur-3xl" />
          <div className="absolute inset-x-16 bottom-8 h-28 rounded-full bg-neon/20 blur-3xl" />
          <div className="panel relative overflow-hidden p-6 shadow-orange lg:p-8">
            <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(104,240,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,122,24,0.18),transparent_28%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
                <span>Future-ready leadership</span>
                <Image
                  src="/nome-konxa.png"
                  alt="Konxa"
                  width={120}
                  height={24}
                  className="h-4 w-auto object-contain opacity-85"
                />
              </div>
              <Image
                src="/hero-orb.svg"
                alt="Ilustracao abstrata futurista"
                width={720}
                height={720}
                className="mx-auto w-full max-w-md animate-float"
                priority
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-electric">Foco</p>
                  <p className="mt-3 text-lg font-semibold text-text">
                    Lideranca preparada para decidir em cenarios de aceleracao tecnologica.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-neon">Entrega</p>
                  <p className="mt-3 text-lg font-semibold text-text">
                    Conteudo autoral com sensacao de instituicao premium e aplicacao imediata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
