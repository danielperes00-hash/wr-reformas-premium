"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Cobertura Ipanema",
    category: "Residencial",
    area: "280m²",
    image: "/images/portfolio-living.jpg",
    imageAlt: "Sala de estar luxuosa — Cobertura Ipanema Rio de Janeiro",
    accent: "Reforma completa + decoração integrada",
    size: "lg",
    position: "center",
  },
  {
    title: "Clínica Médica Barra",
    category: "Corporativo",
    area: "160m²",
    image: "/images/portfolio-lobby.jpg",
    imageAlt: "Recepção corporativa — Clínica Médica Barra da Tijuca",
    accent: "Projeto do zero em 35 dias",
    size: "sm",
    position: "center",
  },
  {
    title: "Banheiro Master Icaraí",
    category: "Banheiro",
    area: "18m²",
    image: "/images/portfolio-bathroom.jpg",
    imageAlt: "Banheiro master com mármore — Icaraí Niterói",
    accent: "Mármore travertino + box infinito",
    size: "sm",
    position: "center",
  },
  {
    title: "Escritório Centro RJ",
    category: "Corporativo",
    area: "420m²",
    image: "/images/portfolio-office.jpg",
    imageAlt: "Escritório moderno — Centro Rio de Janeiro",
    accent: "Reforma open space em 50 dias",
    size: "sm",
    position: "center",
  },
  {
    title: "Casa Barra da Tijuca",
    category: "Residencial",
    area: "550m²",
    image: "/images/portfolio-bedroom.jpg",
    imageAlt: "Quarto de casal elegante — Casa Barra da Tijuca",
    accent: "Reforma total estrutural e acabamento",
    size: "lg",
    position: "center top",
  },
  {
    title: "Cozinha Gourmet Leblon",
    category: "Cozinha",
    area: "32m²",
    image: "/images/portfolio-kitchen.jpg",
    imageAlt: "Cozinha gourmet — Leblon Rio de Janeiro",
    accent: "Ilha central + iluminação técnica",
    size: "sm",
    position: "center",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
                Projetos Realizados
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-cream">
              Nosso <span className="italic text-gold">Portfólio</span>
            </h2>
          </div>
          <Link href="/portfolio" className="btn-outline inline-flex items-center gap-2 self-start md:self-auto">
            Ver Todos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`portfolio-card relative rounded-lg overflow-hidden border border-gold/5 hover:border-gold/20 transition-colors duration-500 group ${
                project.size === "lg" ? "md:row-span-2" : ""
              }`}
              style={{ minHeight: project.size === "lg" ? "clamp(260px, 40vw, 500px)" : "clamp(220px, 30vw, 260px)" }}
            >
              {/* Real image */}
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="portfolio-img object-cover"
                style={{ objectPosition: project.position }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Permanent dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/10 to-transparent" />

              {/* Hover overlay */}
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-transparent" />

              {/* Always-visible content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="text-[10px] tracking-[0.25em] text-gold uppercase mb-1">
                  {project.category} · {project.area}
                </div>
                <h3 className="font-display text-xl text-cream font-medium mb-1">
                  {project.title}
                </h3>
                <p className="text-silver/70 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.accent}
                </p>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[9px] tracking-[0.2em] bg-obsidian/70 backdrop-blur-sm border border-gold/25 text-gold px-3 py-1 uppercase">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
