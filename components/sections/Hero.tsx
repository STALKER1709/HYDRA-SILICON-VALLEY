'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Globe2, Sprout, Cpu } from 'lucide-react';

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function AfricaConstellation() {
  const dots = Array.from({ length: 86 }, (_, i) => {
    const x = 105 + ((i * 37) % 190);
    const y = 20 + ((i * 53) % 330);
    return { x, y, r: i % 9 === 0 ? 2.8 : 1.4, opacity: 0.25 + (i % 5) * 0.12 };
  });

  return (
    <svg viewBox="0 0 420 410" role="img" aria-label="Illustration abstraite du continent africain en constellation" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id="africaFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A8D5BA" stopOpacity=".32" />
          <stop offset="100%" stopColor="#F5A623" stopOpacity=".08" />
        </linearGradient>
        <clipPath id="africaClip">
          <path d="M151 18 198 29 225 54 253 65 276 91 309 108 301 137 326 158 310 187 297 222 277 250 263 288 238 319 221 367 194 391 177 363 160 334 145 302 128 277 112 244 91 213 82 181 65 152 78 126 70 99 91 78 106 48 132 34Z" />
        </clipPath>
      </defs>
      <path d="M151 18 198 29 225 54 253 65 276 91 309 108 301 137 326 158 310 187 297 222 277 250 263 288 238 319 221 367 194 391 177 363 160 334 145 302 128 277 112 244 91 213 82 181 65 152 78 126 70 99 91 78 106 48 132 34Z" fill="url(#africaFill)" stroke="#A8D5BA" strokeOpacity=".62" strokeWidth="1.5" />
      <g clipPath="url(#africaClip)">
        {dots.map((dot, i) => <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill={i % 7 === 0 ? '#F5A623' : '#D8F0DF'} opacity={dot.opacity} />)}
        <path d="M72 95 154 133 226 90 303 157 247 230 174 265 123 201 204 323 280 250" fill="none" stroke="#F5A623" strokeOpacity=".45" strokeWidth="1" strokeDasharray="3 7" />
      </g>
      <path d="M151 18 198 29 225 54 253 65 276 91 309 108 301 137 326 158 310 187 297 222 277 250 263 288 238 319 221 367 194 391 177 363 160 334 145 302 128 277 112 244 91 213 82 181 65 152 78 126 70 99 91 78 106 48 132 34Z" fill="none" stroke="#D8F0DF" strokeOpacity=".5" strokeWidth="1.4" />
      <circle cx="195" cy="187" r="5" fill="#F5A623" />
      <circle cx="195" cy="187" r="15" fill="none" stroke="#F5A623" strokeOpacity=".65">
        <animate attributeName="r" values="10;24;10" dur="3.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".8;0;.8" dur="3.2s" repeatCount="indefinite" />
      </circle>
      <path d="M200 184 270 139" stroke="#F5A623" strokeWidth="1" strokeDasharray="3 4" />
      <rect x="265" y="112" width="118" height="43" rx="10" fill="#092D22" stroke="#A8D5BA" strokeOpacity=".25" />
      <text x="277" y="129" fill="#A8D5BA" fontSize="8" fontFamily="monospace" letterSpacing="1.2">SIÈGE SOCIAL</text>
      <text x="277" y="143" fill="#FFFFFF" fontSize="11" fontWeight="600">Yaoundé, CM</text>
    </svg>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative isolate min-h-[820px] overflow-hidden bg-hsv-emerald pt-36 text-white sm:min-h-[900px] sm:pt-44">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_42%,rgba(35,111,78,.58),transparent_42%),linear-gradient(118deg,#0B3D2E_0%,#092D24_52%,#1A1A1A_100%)]" />
      <div className="african-motif pointer-events-none absolute inset-0 -z-10 opacity-[.07]" />
      <div className="pointer-events-none absolute -right-40 top-24 -z-10 h-[620px] w-[620px] rounded-full border border-hsv-mint/10 [box-shadow:0_0_0_55px_rgba(168,213,186,.025),0_0_0_110px_rgba(168,213,186,.02)]" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 pb-20 lg:grid-cols-[1.04fr_.96fr] lg:px-12 lg:pb-24">
        <motion.div initial="hidden" animate="visible" variants={rise} className="relative z-10 max-w-[720px]">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-hsv-mint/25 bg-white/[.06] px-4 py-2 font-mono text-[10px] uppercase tracking-[.19em] text-hsv-mint backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-hsv-amber shadow-[0_0_12px_#F5A623]" />
            Un groupe panafricain multisectoriel
          </div>
          <h1 className="font-display text-[clamp(3.2rem,6.6vw,6.6rem)] font-semibold leading-[.99] tracking-[-.065em]">
            Enracinés en <span className="relative inline-block text-hsv-amber">Afrique<span className="absolute -bottom-2 left-0 h-[5px] w-[72%] rounded-full bg-hsv-amber/80" /></span>.<br />
            Élevés au niveau <span className="text-hsv-mint">mondial.</span>
          </h1>
          <p className="mt-8 max-w-[570px] text-base leading-8 text-white/70 sm:text-lg">
            Nous bâtissons les entreprises tech qui transforment les secteurs clés du continent.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#ecosystem" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-hsv-amber px-7 text-sm font-bold text-hsv-charcoal shadow-soft transition duration-200 hover:-translate-y-1 hover:bg-[#ffc15a]">
              Découvrir l’écosystème <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#contact" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[.04] px-7 text-sm font-semibold text-white transition duration-200 hover:border-hsv-mint/60 hover:bg-white/10">
              Nous contacter
            </a>
          </div>
          <div className="mt-16 grid max-w-[630px] grid-cols-3 border-t border-white/15 pt-6">
            <div className="pr-3"><strong className="font-display text-3xl font-semibold text-white sm:text-4xl">03</strong><span className="mt-2 block font-mono text-[9px] uppercase leading-4 tracking-[.15em] text-white/45 sm:text-[10px]">Secteurs clés</span></div>
            <div className="border-x border-white/15 px-4"><strong className="font-display text-3xl font-semibold text-white sm:text-4xl">01</strong><span className="mt-2 block font-mono text-[9px] uppercase leading-4 tracking-[.15em] text-white/45 sm:text-[10px]">Siège au Cameroun</span></div>
            <div className="pl-4"><strong className="font-display text-3xl font-semibold text-hsv-amber sm:text-4xl">∞</strong><span className="mt-2 block font-mono text-[9px] uppercase leading-4 tracking-[.15em] text-white/45 sm:text-[10px]">Ambition panafricaine</span></div>
          </div>
        </motion.div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .92, x: 28 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .95, delay: .18, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto aspect-square w-full max-w-[610px]">
          <div className="absolute inset-[8%] rounded-full border border-hsv-mint/10 bg-[radial-gradient(circle,rgba(168,213,186,.09),transparent_68%)]" />
          <div className="absolute inset-[17%] rounded-full border border-dashed border-hsv-mint/20" />
          <div className="absolute inset-[26%] rounded-full border border-hsv-amber/20" />
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_30px_80px_rgba(0,0,0,.25)]">
            <AfricaConstellation />
          </div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-0 top-[22%] rounded-2xl border border-white/10 bg-[#123F30]/80 p-4 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-hsv-mint/15 text-hsv-mint"><Cpu size={18} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-white/45">Innovation</p><p className="mt-1 text-xs font-semibold">Technologie</p></div></div>
          </motion.div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, 9, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: .5 }} className="absolute bottom-[18%] right-0 rounded-2xl border border-white/10 bg-[#123F30]/80 p-4 shadow-card backdrop-blur-xl">
            <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-hsv-amber/15 text-hsv-amber"><Sprout size={18} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-white/45">Impact</p><p className="mt-1 text-xs font-semibold">Agro & santé</p></div></div>
          </motion.div>
          <div className="absolute right-[7%] top-[12%] grid h-12 w-12 place-items-center rounded-2xl border border-hsv-mint/20 bg-white/[.07] text-hsv-mint backdrop-blur"><Globe2 size={21} /></div>
          <a href="#ecosystem" aria-label="Découvrir les secteurs" className="absolute bottom-[1%] left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/20 text-white/60 transition hover:border-hsv-amber hover:text-hsv-amber"><ArrowDown size={18} /></a>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-hsv-mint/35 to-transparent" />
    </section>
  );
}
