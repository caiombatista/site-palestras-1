"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Programa", href: "#programa" },
  { label: "Cursos/Trilhas", href: "#trilhas" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "FAQ", href: "#faq" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-base/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/konxa-logo-sem-bg.png"
            alt="Simbolo da Konxa"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <Image
            src="/nome-konxa.png"
            alt="Nome Konxa"
            width={148}
            height={30}
            className="h-5 w-auto object-contain sm:h-6"
            priority
          />
         </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="#contato" className="primary-button">
            Contrate uma palestra
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-panel/95 px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-text"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="#contato" className="primary-button mt-2 text-center" onClick={() => setOpen(false)}>
              Entre em contato
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
