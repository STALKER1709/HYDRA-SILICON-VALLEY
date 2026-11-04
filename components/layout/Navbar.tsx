'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Écosystème', '#ecosystem'],
  ['Présence', '#presence'],
  ['Équipe', '#team'],
  ['Actualités', '#news'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border border-white/10 bg-hsv-emerald/90 px-5 py-3 text-white shadow-card backdrop-blur-xl sm:px-7">
        <a href="#home" aria-label="Hydra Silicon Valley, accueil" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-hsv-mint/30 bg-white/10 font-display text-lg font-bold text-hsv-mint">H</span>
          <span className="font-display text-sm font-semibold leading-tight tracking-wide sm:text-base">HYDRA <span className="block text-[10px] font-medium tracking-[.28em] text-white/55">SILICON VALLEY</span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[13px] font-medium text-white/75 transition-colors hover:text-hsv-amber">{label}</a>)}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button type="button" onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')} className="font-mono text-xs text-white/70 transition hover:text-white" aria-label="Changer de langue">{language}</button>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-hsv-amber px-5 py-3 text-xs font-bold text-hsv-charcoal shadow-soft transition hover:-translate-y-0.5 hover:bg-[#ffc15a]">Nous rejoindre <ArrowUpRight size={15} /></a>
        </div>

        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 lg:hidden" aria-expanded={open} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && <div className="mx-auto mt-2 max-w-[1440px] rounded-2xl border border-white/10 bg-hsv-emerald/95 p-5 text-white shadow-card backdrop-blur-xl lg:hidden">
        <div className="flex flex-col gap-1">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-hsv-amber">{label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-hsv-amber px-4 py-3 text-sm font-bold text-hsv-charcoal">Nous rejoindre <ArrowUpRight size={16} /></a>
          <button onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')} className="mt-2 py-2 text-left font-mono text-xs text-white/60">Langue : {language}</button>
        </div>
      </div>}
    </header>
  );
}
