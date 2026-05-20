"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Excelência", desc: "Cada detalhe importa. Entregamos o melhor em cada etapa da obra." },
  { title: "Integridade", desc: "Transparência total no processo, orçamento e execução." },
  { title: "Inovação", desc: "Técnicas modernas aliadas à experiência de mais de 15 anos." },
  { title: "Compromisso", desc: "Prazos e qualidade são promessas que cumprimos com contrato." },
];

const team = [
  {
    name: "Wagner Rodrigues",
    role: "Fundador & Diretor Técnico",
    exp: "20 anos de experiência",
    bg: "linear-gradient(135deg, #1a1207, #2d2010)",
  },
  {
    name: "Roberto Silva",
    role: "Gerente de Obras",
    exp: "15 anos de experiência",
    bg: "linear-gradient(135deg, #0d0d14, #14141f)",
  },
  {
    name: "Mariana Costa",
    role: "Coordenadora de Projetos",
    exp: "12 anos de experiência",
    bg: "linear-gradient(135deg, #0a1210, #141f1c)",
  },
  {
    name: "Fernando Lopes",
    role: "Engenheiro Civil",
    exp: "18 anos de experiência",
    bg: "linear-gradient(135deg, #100d08, #1f180d)",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-obsidian">
      {/* Story Section */}
      <section className="py-14 md:py-24 border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-gold opacity-60" />
                <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Nossa Origem</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">
                Uma história de{" "}
                <span className="italic text-gold">dedicação</span>
              </h2>
              <div className="space-y-5 text-silver font-light leading-relaxed">
                <p>
                  Fundada em 2009 por Wagner Rodrigues, a 4WM Reformas nasceu no Rio de
                  Janeiro de uma convicção simples: o mercado precisava de uma empresa que
                  unisse técnica impecável com atendimento de luxo.
                </p>
                <p>
                  Ao longo de mais de 15 anos, construímos uma reputação sólida no Rio de
                  Janeiro e Niterói: mais de 800 obras entregues em bairros como Ipanema,
                  Leblon, Barra da Tijuca e Icaraí, com 98% de satisfação dos clientes.
                </p>
                <p>
                  Nossa missão é transformar espaços comuns em ambientes extraordinários,
                  sempre respeitando o sonho e o investimento de cada cliente carioca e niteroiense.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Real photo */}
              <div className="rounded-xl overflow-hidden border border-gold/10 relative" style={{ height: "480px" }}>
                <Image
                  src="/images/about-staircase.jpg"
                  alt="Escadaria moderna com mármore — elegância e qualidade 4WM Reformas"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-4 left-4 bg-graphite border border-gold/20 p-4 md:p-6 rounded-lg">
                <div className="font-display text-4xl font-semibold text-gold mb-1">800+</div>
                <div className="text-silver text-xs tracking-[0.15em] uppercase font-light">Obras Realizadas</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-24 bg-graphite border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Valores</span>
              <div className="h-px w-10 bg-gold opacity-60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              O que nos <span className="italic text-gold">guia</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-graphite p-6 md:p-10 text-center"
              >
                <div className="font-display text-5xl font-light text-gold/20 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl text-cream font-medium mb-3">{v.title}</h3>
                <p className="text-silver text-sm font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 md:py-24 bg-obsidian border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Time</span>
              <div className="h-px w-10 bg-gold opacity-60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Nossa <span className="italic text-gold">Equipe</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div
                  className="rounded-xl overflow-hidden border border-gold/10 group-hover:border-gold/30 transition-colors duration-300 mb-4"
                  style={{ height: "260px", background: member.bg }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      backgroundImage: "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  >
                    <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(201,169,110,0.4)" strokeWidth="1">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg text-cream font-medium mb-1">{member.name}</h3>
                <div className="text-gold text-xs tracking-[0.15em] uppercase mb-1">{member.role}</div>
                <div className="text-silver text-xs font-light">{member.exp}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-graphite">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-5">
              Pronto para transformar{" "}
              <span className="italic text-gold">seu espaço?</span>
            </h2>
            <p className="text-silver font-light mb-8">
              Agende uma visita técnica gratuita com nossa equipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="https://wa.me/5521960104648"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Falar no WhatsApp
              </Link>
              <Link href="/contato" className="btn-outline inline-flex items-center justify-center gap-2">
                Enviar Mensagem
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
