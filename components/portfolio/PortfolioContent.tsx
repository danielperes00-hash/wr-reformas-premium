"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["Todos", "Residencial", "Corporativo", "Banheiro", "Cozinha"];

const projects = [
  {
    title: "Cobertura Ipanema",
    category: "Residencial",
    area: "280m²",
    duration: "60 dias",
    year: "2024",
    desc: "Reforma completa de cobertura duplex em Ipanema com integração de ambientes, mármore carrara nos banheiros e acabamentos italianos.",
    image: "/images/portfolio-living.jpg",
    imageAlt: "Sala de estar luxuosa — Cobertura Ipanema Rio de Janeiro",
    highlights: ["Pé-direito duplo", "Ilha gourmet", "Closet planejado"],
  },
  {
    title: "Escritório Centro RJ",
    category: "Corporativo",
    area: "420m²",
    duration: "50 dias",
    year: "2024",
    desc: "Reforma de escritório open space no Centro do Rio de Janeiro para empresa de tecnologia com salas de reunião em vidro e acabamento industrial.",
    image: "/images/portfolio-office.jpg",
    imageAlt: "Escritório moderno open space — Centro Rio de Janeiro",
    highlights: ["50 postos de trabalho", "6 salas de reunião", "Auditório 30 pessoas"],
  },
  {
    title: "Banheiro Master Icaraí",
    category: "Banheiro",
    area: "22m²",
    duration: "25 dias",
    year: "2024",
    desc: "Banheiro master em Icaraí, Niterói, com mármore travertino, banheira de imersão, box infinito e iluminação LED embutida.",
    image: "/images/portfolio-bathroom.jpg",
    imageAlt: "Banheiro master com mármore — Icaraí Niterói",
    highlights: ["Mármore travertino", "Banheira de imersão", "Aquecimento de piso"],
  },
  {
    title: "Casa Barra da Tijuca",
    category: "Residencial",
    area: "550m²",
    duration: "90 dias",
    year: "2023",
    desc: "Reforma total de residência de alto padrão na Barra da Tijuca, transformada de construção dos anos 80 em arquitetura contemporânea com piscina renovada.",
    image: "/images/portfolio-living2.jpg",
    imageAlt: "Residência contemporânea — Casa Barra da Tijuca Rio de Janeiro",
    highlights: ["Fachada renovada", "Piscina revestida", "7 banheiros"],
  },
  {
    title: "Clínica Botafogo Saúde",
    category: "Corporativo",
    area: "200m²",
    duration: "35 dias",
    year: "2023",
    desc: "Reforma completa de clínica médica em Botafogo com 12 consultórios, recepção premium e conformidade com normas sanitárias.",
    image: "/images/portfolio-lobby.jpg",
    imageAlt: "Recepção corporativa premium — Clínica Botafogo Rio de Janeiro",
    highlights: ["12 consultórios", "Normas ANVISA", "Sem interrupção"],
  },
  {
    title: "Cozinha Gourmet Leblon",
    category: "Cozinha",
    area: "35m²",
    duration: "30 dias",
    year: "2023",
    desc: "Cozinha gourmet integrada no Leblon com ilha central em quartzo, armários italianos e iluminação técnica direcionada.",
    image: "/images/portfolio-kitchen.jpg",
    imageAlt: "Cozinha gourmet com ilha em quartzo — Leblon Rio de Janeiro",
    highlights: ["Ilha em quartzo", "Armários italianos", "Exaustão industrial"],
  },
  {
    title: "Apartamento Ipanema",
    category: "Residencial",
    area: "180m²",
    duration: "45 dias",
    year: "2023",
    desc: "Integração total de apartamento em Ipanema com remoção de paredes, novos revestimentos e decoração contemporânea.",
    image: "/images/portfolio-bedroom.jpg",
    imageAlt: "Quarto de casal elegante — Apartamento Ipanema Rio de Janeiro",
    highlights: ["Integração sala/jantar", "Novas hidráulicas", "Piso vinílico SPC"],
  },
  {
    title: "Escritório Niterói Centro",
    category: "Corporativo",
    area: "160m²",
    duration: "28 dias",
    year: "2022",
    desc: "Modernização de escritório no Centro de Niterói com novo layout, piso elevado técnico e sala de servidores climatizada.",
    image: "/images/portfolio-office.jpg",
    imageAlt: "Escritório moderno — Centro Niterói",
    highlights: ["Piso elevado", "Sala de TI", "CFTV integrado"],
  },
  {
    title: "Suíte Master São Conrado",
    category: "Banheiro",
    area: "18m²",
    duration: "20 dias",
    year: "2022",
    desc: "Banheiro de suíte em São Conrado com revestimento em porcelanato 120x60, chuveiro com controle digital e iluminação cênica.",
    image: "/images/portfolio-bathroom2.jpg",
    imageAlt: "Banheiro suíte luxuosa — São Conrado Rio de Janeiro",
    highlights: ["Porcelanato 120x60", "Ducha digital", "Iluminação cênica"],
  },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = projects.filter(
    (p) => activeCategory === "Todos" || p.category === activeCategory
  );

  return (
    <div className="bg-obsidian py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-full border ${
                activeCategory === cat
                  ? "bg-gold text-obsidian border-gold"
                  : "border-gold/20 text-silver hover:border-gold/40 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="portfolio-card group rounded-xl overflow-hidden border border-gold/5 hover:border-gold/20 transition-colors duration-500"
              >
                {/* Real image */}
                <div className="portfolio-img relative" style={{ height: "260px" }}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />

                  {/* Hover description */}
                  <div className="portfolio-overlay absolute inset-0 flex items-end p-5">
                    <p className="text-silver/90 text-xs font-light leading-relaxed">{project.desc}</p>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] tracking-[0.2em] bg-obsidian/70 backdrop-blur-sm border border-gold/30 text-gold px-3 py-1 uppercase">
                      {project.category}
                    </span>
                  </div>
                  {/* Year */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[9px] tracking-[0.15em] text-silver/50 font-light">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-graphite p-6">
                  <h3 className="font-display text-xl text-cream font-medium mb-2">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 mb-4">
                    <div>
                      <div className="text-[9px] tracking-[0.2em] text-gold/50 uppercase mb-0.5">Área</div>
                      <div className="text-silver text-xs font-light">{project.area}</div>
                    </div>
                    <div>
                      <div className="text-[9px] tracking-[0.2em] text-gold/50 uppercase mb-0.5">Prazo</div>
                      <div className="text-silver text-xs font-light">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[9px] tracking-[0.1em] text-gold/60 bg-gold/5 border border-gold/10 px-2.5 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-silver font-light mb-6 text-lg font-display italic">
            Quer ver o seu projeto aqui?
          </p>
          <Link
            href="https://wa.me/5521982162480?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20projeto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            Solicitar Orçamento Gratuito
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
