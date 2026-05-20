"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Reforma Residencial",
    desc: "Transformação completa de apartamentos e casas. Desde a demolição até o acabamento final, nossa equipe cuida de cada detalhe para entregar o lar dos seus sonhos com precisão e elegância.",
    includes: ["Demolição e remoção de entulho", "Alvenaria e regularização", "Revestimentos e acabamentos", "Pintura completa", "Instalações elétricas e hidráulicas", "Gestão completa de materiais"],
    bg: "linear-gradient(135deg, #1a1207 0%, #2d2010 100%)",
  },
  {
    number: "02",
    title: "Reforma Corporativa",
    desc: "Espaços corporativos que transmitem credibilidade e sofisticação. Trabalhamos com planejamento executivo para minimizar interrupções na sua operação.",
    includes: ["Escritórios e salas de reunião", "Recepções e lobbies", "Ambientes open space", "Clínicas e consultórios", "Restaurantes e estabelecimentos", "Galpões e industriais"],
    bg: "linear-gradient(135deg, #0d0d14 0%, #14141f 100%)",
  },
  {
    number: "03",
    title: "Reforma de Banheiro",
    desc: "Banheiros transformados em espaços de bem-estar com materiais nobres, design contemporâneo e execução impecável. Do box molhado ao ambiente de spa.",
    includes: ["Substituição de revestimentos", "Instalação de louças e metais", "Box e divisórias em vidro", "Bancadas em mármore e quartzo", "Iluminação técnica LED", "Aquecimento de piso"],
    bg: "linear-gradient(135deg, #0a1210 0%, #141f1c 100%)",
  },
  {
    number: "04",
    title: "Reforma de Cozinha",
    desc: "Cozinhas que unem funcionalidade, beleza e praticidade. Planejamento detalhado para aproveitar cada centímetro com qualidade premium.",
    includes: ["Substituição de revestimentos e piso", "Instalação de armários planejados", "Ilha central e bancadas", "Pontos elétricos e hidráulicos", "Coifas e ventilação", "Iluminação direcionada"],
    bg: "linear-gradient(135deg, #100808 0%, #1f1010 100%)",
  },
  {
    number: "05",
    title: "Pintura Interna e Externa",
    desc: "Pintura técnica e decorativa com preparação rigorosa de superfícies. Utilizamos tintas premium de marcas consagradas para acabamento duradouro.",
    includes: ["Preparação e massa corrida", "Pintura latex premium", "Grafiato e texturizados", "Verniz e stain em madeira", "Pintura de fachada", "Caiação e cal"],
    bg: "linear-gradient(135deg, #141008 0%, #1f1810 100%)",
  },
  {
    number: "06",
    title: "Drywall",
    desc: "Divisórias, forros e sancas em drywall com execução rápida, acabamento perfeito e excelente relação custo-benefício.",
    includes: ["Divisórias simples e duplas", "Forros planos e modulares", "Sancas e tabicamentos", "Nichos e painéis", "Isolamento acústico", "Iluminação embutida"],
    bg: "linear-gradient(135deg, #0d100d 0%, #141814 100%)",
  },
  {
    number: "07",
    title: "Piso e Revestimento",
    desc: "Instalação de pisos e revestimentos de todas as categorias com rigoroso controle de nível, rejunte e arremates.",
    includes: ["Porcelanato e cerâmica", "Pedras naturais: mármore, granito", "Madeira e laminados", "Vinílico e SPC", "Pisos epóxi e cimentício", "Rodapés e soleiras"],
    bg: "linear-gradient(135deg, #0a0d12 0%, #10141c 100%)",
  },
  {
    number: "08",
    title: "Pintura e Restauração de Fachada",
    desc: "Recuperação e renovação de fachadas com técnicas especializadas que protegem a estrutura e valorizam o imóvel.",
    includes: ["Limpeza e tratamento de fissuras", "Textura e grafiato", "Selante impermeabilizante", "Pastilhas e revestimentos", "Pintura com tinta elastomérica", "Restauração de elementos arquitetônicos"],
    bg: "linear-gradient(135deg, #120f08 0%, #1e180e 100%)",
  },
  {
    number: "09",
    title: "Impermeabilização",
    desc: "Soluções definitivas contra infiltrações e umidade. Diagnóstico preciso e aplicação com materiais de alto desempenho.",
    includes: ["Lajes e terraços", "Banheiros e áreas molhadas", "Caixas d'água e piscinas", "Fundações e subsolos", "Calhas e rufos", "Garantia de 5 a 10 anos"],
    bg: "linear-gradient(135deg, #080d12 0%, #0e141c 100%)",
  },
  {
    number: "10",
    title: "Alvenaria",
    desc: "Construção e modificação de paredes com qualidade estrutural e acabamento preciso. Serviço de demolição controlada incluso.",
    includes: ["Paredes de tijolo e bloco", "Demolição controlada", "Reboco e contrapiso", "Vergas e contravergas", "Regularização de lajes", "Reforço estrutural"],
    bg: "linear-gradient(135deg, #0f0c08 0%, #181410 100%)",
  },
  {
    number: "11",
    title: "Elétrica e Hidráulica",
    desc: "Instalações elétricas e hidráulicas dentro das normas ABNT, com materiais certificados e laudos técnicos para financiamentos.",
    includes: ["Instalação e reforma elétrica", "Quadros de distribuição", "Pontos de TV, som e rede", "Troca e reforma hidráulica", "Instalação de aquecedores", "ART e laudo técnico"],
    bg: "linear-gradient(135deg, #0d0808 0%, #170e0e 100%)",
  },
  {
    number: "12",
    title: "Gestão Completa da Obra",
    desc: "Para quem quer delegar tudo. Cuidamos do projeto, aprovações, compras, execução e entrega. Você acompanha, nós gerenciamos.",
    includes: ["Projeto executivo completo", "Compra e gestão de materiais", "Cronograma detalhado", "Relatórios semanais com fotos", "Coordenação de especialistas", "Entrega com garantia contratual"],
    bg: "linear-gradient(135deg, #0a0f0a 0%, #101810 100%)",
  },
];

export default function ServicesContent() {
  return (
    <div className="bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="space-y-px bg-gold/5">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-graphite group"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left visual */}
                <div
                  className="lg:col-span-1 min-h-[180px] relative overflow-hidden"
                  style={{ background: service.bg }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-5xl font-light text-gold/15 select-none">
                      {service.number}
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-4 p-5 sm:p-8 md:p-10 grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] text-gold/60 uppercase mb-2">
                      Serviço {service.number}
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-cream font-medium mb-4">
                      {service.title}
                    </h2>
                    <p className="text-silver font-light leading-relaxed text-sm">
                      {service.desc}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] text-gold/60 uppercase mb-3">
                      Inclui
                    </div>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-silver text-sm font-light">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#c9a96e"
                            strokeWidth="1.5"
                            className="shrink-0 mt-0.5"
                          >
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-silver font-light mb-6">
            Não encontrou o que procura? Entre em contato — realizamos projetos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5521982162480?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
            </Link>
            <Link href="/contato" className="btn-outline inline-flex items-center justify-center gap-2">
              Falar com Especialista
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
