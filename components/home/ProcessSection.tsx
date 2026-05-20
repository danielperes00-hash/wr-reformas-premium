"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Visita Técnica Gratuita",
    desc: "Nossa equipe visita o local para entender o espaço, necessidades e oportunidades. Sem compromisso.",
  },
  {
    number: "02",
    title: "Orçamento Detalhado",
    desc: "Em até 48h, enviamos um orçamento completo com memória descritiva, materiais e cronograma.",
  },
  {
    number: "03",
    title: "Projeto e Planejamento",
    desc: "Desenvolvemos o projeto executivo com planta baixa, especificações técnicas e detalhamento 3D.",
  },
  {
    number: "04",
    title: "Execução com Supervisão",
    desc: "Execução com equipe própria treinada, gestão diária e relatórios semanais de andamento.",
  },
  {
    number: "05",
    title: "Vistoria e Entrega",
    desc: "Realizamos vistoria técnica final com checklist detalhado antes da entrega das chaves.",
  },
  {
    number: "06",
    title: "Pós-obra e Garantia",
    desc: "Suporte pós-obra por 12 meses e garantia técnica em todos os serviços executados.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-28 bg-graphite relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5"
        style={{
          background: "linear-gradient(270deg, rgba(201,169,110,0.4) 0%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
                Metodologia
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-6">
              Como
              <br />
              <span className="italic text-gold">Trabalhamos</span>
            </h2>
            <p className="text-silver font-light leading-relaxed mb-8">
              Um processo estruturado em 6 etapas que garante transparência,
              qualidade e prazo em cada obra que realizamos.
            </p>
            <div className="flex items-center gap-4 p-5 border border-gold/10 bg-graphite-mid">
              <div className="text-gold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-cream text-sm font-medium mb-1">Garantia de Prazo</div>
                <div className="text-silver text-xs font-light">
                  Multa contratual por atraso injustificado
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-8 mb-10 last:mb-0"
              >
                {/* Number circle */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full border border-gold/30 bg-graphite flex items-center justify-center">
                    <span className="font-display text-sm font-semibold text-gold">{step.number}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="pt-3 pb-8">
                  <h3 className="font-display text-xl text-cream font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-silver text-sm font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
