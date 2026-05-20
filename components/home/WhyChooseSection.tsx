"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: <AwardIcon />,
    title: "15+ Anos de Mercado",
    desc: "Sólida trajetória com centenas de obras entregues e reputação construída na excelência.",
  },
  {
    icon: <TeamIcon />,
    title: "Equipe Própria e Treinada",
    desc: "Profissionais certificados, sem terceiros desconhecidos. Total controle de qualidade.",
  },
  {
    icon: <ShieldIcon />,
    title: "Garantia Técnica",
    desc: "12 meses de garantia em todos os serviços, com suporte pós-obra rápido e eficiente.",
  },
  {
    icon: <ClockIcon />,
    title: "Respeito ao Prazo",
    desc: "Cronograma firme com multa contratual por atraso. Sua obra no dia prometido.",
  },
  {
    icon: <TransparentIcon />,
    title: "Transparência Total",
    desc: "Orçamento fixo sem surpresas, relatórios semanais e acesso à obra a qualquer momento.",
  },
  {
    icon: <StarIcon />,
    title: "Materiais de Alto Padrão",
    desc: "Parcerias com fornecedores premium que garantem qualidade e durabilidade superiores.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-28 bg-obsidian relative overflow-hidden">
      {/* Background text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <div className="font-display text-[20vw] font-bold text-white/[0.012] whitespace-nowrap">
          QUALIDADE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Nossos Diferenciais
            </span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-5">
            Por que escolher a{" "}
            <span className="italic text-gold">WR Reformas?</span>
          </h2>
          <p className="text-silver max-w-xl mx-auto font-light leading-relaxed">
            Mais do que uma empresa de reformas — somos parceiros na transformação
            do seu espaço com padrão premium e confiança garantida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-graphite p-10 group hover:bg-graphite-mid transition-colors duration-300"
            >
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl text-cream font-medium mb-3">
                {reason.title}
              </h3>
              <p className="text-silver text-sm font-light leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
function TeamIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}
function TransparentIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
    </svg>
  );
}
