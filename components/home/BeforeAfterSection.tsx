"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Apartamento Jardins",
    area: "180m²",
    duration: "45 dias",
    beforeBg: "linear-gradient(135deg, #1a1410 0%, #2d2318 40%, #1a1410 100%)",
    afterBg: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 40%, #0a0a0a 100%)",
    beforeLabel: "Estado original degradado",
    afterLabel: "Acabamento premium entregue",
  },
  {
    title: "Escritório Paulista",
    area: "320m²",
    duration: "60 dias",
    beforeBg: "linear-gradient(135deg, #151210 0%, #241e18 40%, #151210 100%)",
    afterBg: "linear-gradient(135deg, #080808 0%, #141414 40%, #0a0a0a 100%)",
    beforeLabel: "Espaço desorganizado",
    afterLabel: "Ambiente corporativo moderno",
  },
  {
    title: "Casa Morumbi",
    area: "450m²",
    duration: "90 dias",
    beforeBg: "linear-gradient(135deg, #18140e 0%, #2a2010 40%, #18140e 100%)",
    afterBg: "linear-gradient(135deg, #0a0a0a 0%, #161616 40%, #0a0a0a 100%)",
    beforeLabel: "Construção dos anos 80",
    afterLabel: "Residência contemporânea",
  },
];

function BeforeAfterSlider({
  beforeBg,
  afterBg,
  beforeLabel,
  afterLabel,
}: {
  beforeBg: string;
  afterBg: string;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-72 md:h-96 overflow-hidden cursor-col-resize select-none"
      onMouseDown={(e) => { dragging.current = true; updatePosition(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePosition(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After (full) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: afterBg }}
      >
        <div className="text-center">
          <div className="text-gold/30 font-display text-6xl font-light mb-2">Depois</div>
          <div
            className="w-16 h-16 mx-auto rounded-full border border-gold/20 flex items-center justify-center"
            style={{ background: "rgba(201,169,110,0.05)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.5)" strokeWidth="1">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-xs tracking-[0.2em] text-gold/60 uppercase">
          {afterLabel}
        </div>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: beforeBg }}
        >
          <div className="text-center">
            <div className="text-gold/20 font-display text-6xl font-light mb-2">Antes</div>
            <div
              className="w-16 h-16 mx-auto rounded-full border border-gold/10 flex items-center justify-center"
              style={{ background: "rgba(201,169,110,0.03)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-xs tracking-[0.2em] text-gold/40 uppercase">
            {beforeLabel}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-gold/80 z-10 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-gold/20">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2.5">
            <path d="M5 12h14M9 8l-4 4 4 4M15 8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-graphite">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold opacity-60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
              Transformações Reais
            </span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-5">
            Antes <span className="italic text-gold">&amp;</span> Depois
          </h2>
          <p className="text-silver max-w-xl mx-auto font-light leading-relaxed">
            Deslize para ver a transformação que entregamos em cada projeto.
          </p>
        </motion.div>

        {/* Project tabs */}
        <div className="flex gap-1 mb-8 bg-graphite-mid p-1 rounded-lg w-fit mx-auto">
          {projects.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-md ${
                active === i ? "bg-gold text-obsidian" : "text-silver hover:text-cream"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Slider */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden border border-gold/10"
        >
          <BeforeAfterSlider
            beforeBg={projects[active].beforeBg}
            afterBg={projects[active].afterBg}
            beforeLabel={projects[active].beforeLabel}
            afterLabel={projects[active].afterLabel}
          />
          <div className="bg-graphite-mid px-8 py-5 flex flex-wrap gap-6 items-center">
            <div>
              <div className="text-[10px] tracking-[0.2em] text-gold/60 uppercase mb-1">Projeto</div>
              <div className="text-cream font-display text-lg font-medium">{projects[active].title}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] text-gold/60 uppercase mb-1">Área</div>
              <div className="text-cream font-medium">{projects[active].area}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] text-gold/60 uppercase mb-1">Prazo</div>
              <div className="text-cream font-medium">{projects[active].duration}</div>
            </div>
            <div className="ml-auto">
              <span className="inline-flex items-center gap-2 text-xs text-gold/70 italic">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M9 8l-4 4 4 4" />
                </svg>
                Arraste para comparar
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
