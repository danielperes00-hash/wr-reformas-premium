"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: <HomeIcon />,
    title: "Reforma Residencial",
    desc: "Transformação completa do seu lar com materiais premium e acabamento de alto padrão.",
  },
  {
    icon: <BuildingIcon />,
    title: "Reforma Corporativa",
    desc: "Espaços corporativos que transmitem profissionalismo e elevam a imagem da sua empresa.",
  },
  {
    icon: <BathroomIcon />,
    title: "Reforma de Banheiro",
    desc: "Banheiros com design sofisticado, funcionalidade e materiais nobres.",
  },
  {
    icon: <KitchenIcon />,
    title: "Reforma de Cozinha",
    desc: "Cozinhas modernas e funcionais com os mais altos padrões de execução.",
  },
  {
    icon: <PaintIcon />,
    title: "Pintura",
    desc: "Pintura técnica e decorativa para interiores e exteriores com preparação impecável.",
  },
  {
    icon: <DrywallIcon />,
    title: "Drywall",
    desc: "Divisórias, forros e sancas em drywall com precisão e rapidez.",
  },
  {
    icon: <FloorIcon />,
    title: "Piso e Revestimento",
    desc: "Instalação de pisos e revestimentos de alta qualidade com acabamento perfeito.",
  },
  {
    icon: <FacadeIcon />,
    title: "Pintura de Fachada",
    desc: "Restauração e pintura de fachadas que valorizam o imóvel e protegem a estrutura.",
  },
  {
    icon: <WaterIcon />,
    title: "Impermeabilização",
    desc: "Soluções definitivas contra infiltrações e umidade em lajes, terraços e porões.",
  },
  {
    icon: <BrickIcon />,
    title: "Alvenaria",
    desc: "Construção e demolição de paredes, reforço estrutural e regularização.",
  },
  {
    icon: <ElectricIcon />,
    title: "Elétrica e Hidráulica",
    desc: "Instalações elétricas e hidráulicas dentro das normas técnicas, com segurança total.",
  },
  {
    icon: <ManageIcon />,
    title: "Gestão Completa da Obra",
    desc: "Gerenciamos todo o processo — do projeto à entrega — com transparência total.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
              Especialidades
            </span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream mb-5">
            Nossos <span className="italic text-gold">Serviços</span>
          </h2>
          <p className="text-silver max-w-xl mx-auto font-light leading-relaxed">
            Cobertura completa para toda necessidade da sua obra no Rio de Janeiro
            e Niterói — do planejamento à entrega com garantia técnica.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gold/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="service-card bg-graphite p-6 md:p-8 group cursor-pointer"
            >
              <div className="text-gold mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {service.icon}
              </div>
              <h3 className="font-display text-xl text-cream font-medium mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-silver text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/servicos" className="btn-outline inline-flex items-center gap-2">
            Ver Todos os Serviços
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Icons
function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="15" rx="1" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" strokeWidth="2" />
    </svg>
  );
}
function BathroomIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4z" />
      <path d="M4 12V6a2 2 0 012-2h2v4" />
      <line x1="8" y1="20" x2="8" y2="22" />
      <line x1="16" y1="20" x2="16" y2="22" />
    </svg>
  );
}
function KitchenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="7" width="20" height="14" rx="1" />
      <path d="M16 3h2v4h-2z" />
      <path d="M2 11h20" />
      <circle cx="8" cy="15" r="2" />
    </svg>
  );
}
function PaintIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 16.1A5 5 0 015.5 8H11V3h2v5h5.5a5 5 0 013.5 8.1" />
      <path d="M2 21h20" />
    </svg>
  );
}
function DrywallIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}
function FloorIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 20h20M2 16h20M2 12h20" />
      <rect x="3" y="3" width="8" height="8" />
      <rect x="13" y="3" width="8" height="8" />
    </svg>
  );
}
function FacadeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="3" width="20" height="18" rx="1" />
      <path d="M8 21V13h8v8" />
      <path d="M2 8h20" />
      <circle cx="12" cy="5.5" r="1" />
    </svg>
  );
}
function WaterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2l-7 10a7 7 0 1014 0L12 2z" />
    </svg>
  );
}
function BrickIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="4" width="20" height="5" />
      <rect x="2" y="11" width="20" height="5" />
      <rect x="2" y="18" width="20" height="4" />
      <line x1="7" y1="4" x2="7" y2="9" />
      <line x1="17" y1="11" x2="17" y2="16" />
    </svg>
  );
}
function ElectricIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );
}
function ManageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
