"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Fernanda Oliveira",
    role: "Proprietária — Cobertura Ipanema, Rio de Janeiro",
    text: "A 4WM Reformas superou todas as expectativas. O projeto foi executado com um nível de cuidado e precisão que eu nunca tinha visto. Entregaram antes do prazo e dentro do orçamento. Recomendo com toda convicção.",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "CEO — Grupo Mendes Incorporações",
    text: "Contratamos a 4WM Reformas para a reforma de nosso escritório no Centro do Rio. Trabalho impecável, equipe altamente profissional e comunicação excelente durante todo o processo. O resultado ficou digno de revista de arquitetura.",
    rating: 5,
  },
  {
    name: "Camila Ferreira",
    role: "Arquiteta de Interiores",
    text: "Como arquiteta, sou extremamente exigente com a execução. A 4WM Reformas é a única empresa que indico para meus clientes premium. Eles entendem detalhes técnicos, respeitam o projeto e têm acabamento de alto padrão.",
    rating: 5,
  },
  {
    name: "Paulo Andrade",
    role: "Diretor — Clínica Andrade Saúde",
    text: "Reforma completa da clínica em 35 dias, com a operação praticamente sem interrupção. Planejamento excelente, equipe discreta e resultado final muito acima do esperado. Parceria consolidada.",
    rating: 5,
  },
  {
    name: "Ana Lima",
    role: "Proprietária — Casa Barra da Tijuca, Rio de Janeiro",
    text: "Reforma de 450m² da nossa casa, um projeto desafiador. A 4WM Reformas gerenciou tudo com maestria: 8 tipos de serviços simultaneamente, materiais importados, prazo respeitado. Simplesmente excelente.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-16 md:py-28 bg-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold opacity-60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
              Clientes
            </span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream">
            O que dizem sobre{" "}
            <span className="italic text-gold">nós</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main testimonial */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="testimonial-card rounded-xl p-6 md:p-10 h-full flex flex-col"
              >
                {/* Quote mark */}
                <div className="font-display text-8xl text-gold/15 leading-none mb-6 -mt-4 select-none">
                  &ldquo;
                </div>

                <p className="font-display text-xl md:text-2xl lg:text-3xl text-cream font-light leading-relaxed italic mb-8 md:mb-10 flex-1">
                  {testimonials[active].text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c9a96e">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-cream font-medium text-sm">{testimonials[active].name}</div>
                    <div className="text-gold/60 text-xs font-light mt-1">{testimonials[active].role}</div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full border border-gold/20 text-silver hover:text-gold hover:border-gold/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full border border-gold/20 text-silver hover:text-gold hover:border-gold/50 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar list */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`text-left p-5 rounded-lg border transition-all duration-300 ${
                  i === active
                    ? "border-gold/40 bg-gold/5"
                    : "border-gold/10 bg-graphite-mid hover:border-gold/20"
                }`}
              >
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} width="10" height="10" viewBox="0 0 24 24" fill={i === active ? "#c9a96e" : "#666"}>
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
                    </svg>
                  ))}
                </div>
                <div className={`text-sm font-medium mb-1 ${i === active ? "text-cream" : "text-silver"}`}>
                  {t.name}
                </div>
                <div className="text-[11px] text-gold/50 font-light">{t.role}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${
                i === active ? "w-8 bg-gold" : "w-4 bg-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
