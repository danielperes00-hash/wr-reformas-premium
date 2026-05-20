"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Visita Técnica Gratuita",
    subtitle: "Diagnóstico preciso do seu espaço",
    desc: "Nossa equipe técnica visita o local para realizar um diagnóstico completo: avaliação da estrutura, identificação de necessidades, levantamento de medidas e análise das melhores soluções. Sem compromisso, sem custo.",
    duration: "1–2 horas",
    deliverable: "Relatório fotográfico do diagnóstico",
    bg: "linear-gradient(135deg, #1a1207 0%, #2d2010 100%)",
    details: [
      "Visita com engenheiro ou arquiteto",
      "Análise estrutural e elétrica",
      "Levantamento dimensional completo",
      "Identificação de patologias",
      "Conversa sobre expectativas e referências",
    ],
  },
  {
    number: "02",
    title: "Orçamento Detalhado",
    subtitle: "Transparência total, sem surpresas",
    desc: "Em até 48 horas após a visita, você recebe um orçamento completo com memória descritiva, quantitativos de materiais, custo de mão de obra e cronograma de execução. Preço fixo com contrato.",
    duration: "Entrega em 48h",
    deliverable: "Orçamento + Memorial Descritivo",
    bg: "linear-gradient(135deg, #0d0d14 0%, #14141f 100%)",
    details: [
      "Quantitativos por item e serviço",
      "Especificação técnica de materiais",
      "Cronograma físico-financeiro",
      "Opções de materiais por faixa de preço",
      "Condições de pagamento flexíveis",
    ],
  },
  {
    number: "03",
    title: "Projeto Executivo",
    subtitle: "Cada detalhe planejado antes de executar",
    desc: "Antes de qualquer obra, desenvolvemos o projeto executivo completo: planta baixa atualizada, vistas e cortes, especificações técnicas, planilha de materiais e renderização 3D do resultado final.",
    duration: "5–10 dias úteis",
    deliverable: "Projeto completo em PDF + 3D",
    bg: "linear-gradient(135deg, #0a1210 0%, #141f1c 100%)",
    details: [
      "Planta baixa e demolição",
      "Planta de layout e pontos",
      "Cortes e elevações",
      "Especificações de revestimentos",
      "Perspectiva 3D dos ambientes",
    ],
  },
  {
    number: "04",
    title: "Assinatura do Contrato",
    subtitle: "Segurança jurídica para as duas partes",
    desc: "Formalizamos tudo em contrato detalhado que protege você e nossa empresa. Prazo, escopo, valores, forma de pagamento e responsabilidades — tudo registrado e assinado.",
    duration: "1 dia útil",
    deliverable: "Contrato com firma reconhecida",
    bg: "linear-gradient(135deg, #100808 0%, #1f1010 100%)",
    details: [
      "Prazo garantido em contrato",
      "Multa por atraso injustificado",
      "Escopo detalhado por item",
      "Cronograma de pagamentos",
      "Garantias técnicas previstas",
    ],
  },
  {
    number: "05",
    title: "Execução Monitorada",
    subtitle: "Obra com equipe própria e gestão diária",
    desc: "Nossa equipe inicia a obra com profissionais próprios — sem terceirização de pessoal. Você recebe relatórios semanais com fotos, pode visitar a obra a qualquer momento e tem linha direta com o gerente.",
    duration: "Conforme cronograma",
    deliverable: "Relatórios semanais com fotos",
    bg: "linear-gradient(135deg, #0d100d 0%, #141814 100%)",
    details: [
      "Equipe própria certificada",
      "Encarregado de obra dedicado",
      "Relatório semanal com fotos",
      "Acesso irrestrito ao canteiro",
      "Gestão de RDO (Registro Diário de Obra)",
    ],
  },
  {
    number: "06",
    title: "Entrega e Pós-Obra",
    subtitle: "Vistoria rigorosa e suporte garantido",
    desc: "Antes da entrega, realizamos vistoria técnica com checklist de mais de 80 itens. Após a entrega, você conta com 12 meses de garantia em todos os serviços e suporte ágil para qualquer solicitação.",
    duration: "Vistoria: 1 dia",
    deliverable: "Termo de entrega + Manual do Proprietário",
    bg: "linear-gradient(135deg, #0a0f0a 0%, #101810 100%)",
    details: [
      "Checklist de 80+ itens",
      "Teste de todas as instalações",
      "Limpeza e organização final",
      "Manual de manutenção entregue",
      "Suporte pós-obra por 12 meses",
    ],
  },
];

const faqs = [
  {
    q: "Em quanto tempo recebo o orçamento?",
    a: "Em até 48 horas após a visita técnica, você recebe o orçamento completo com memorial descritivo, cronograma e condições de pagamento.",
  },
  {
    q: "A WR Reformas usa profissionais próprios ou terceirizados?",
    a: "Utilizamos equipe própria treinada e certificada para todos os serviços. Isso garante qualidade, responsabilidade e rastreabilidade do trabalho.",
  },
  {
    q: "Posso acompanhar o andamento da obra?",
    a: "Sim. Você recebe relatórios semanais com fotos, tem acesso irrestrito ao canteiro e conta com linha direta com o gerente de obras.",
  },
  {
    q: "Qual é a garantia dos serviços?",
    a: "Todos os serviços têm garantia técnica de 12 meses. Serviços de impermeabilização têm garantia estendida de 5 a 10 anos conforme o sistema aplicado.",
  },
  {
    q: "Vocês fazem obras em apartamentos de condomínio?",
    a: "Sim. Nossa equipe conhece as normas condominiais, horários permitidos e requisitos de ART. Auxiliamos na documentação junto ao síndico.",
  },
];

export default function ProcessContent() {
  return (
    <div className="bg-obsidian">
      {/* Timeline */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-0 border border-gold/10 overflow-hidden rounded-xl"
            >
              {/* Visual */}
              <div
                className={`relative flex items-center justify-center p-12 min-h-[200px] ${i % 2 === 1 ? "lg:order-last" : ""}`}
                style={{ background: step.bg }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="text-center relative z-10">
                  <div className="font-display text-8xl font-light text-gold/15 leading-none mb-2 select-none">
                    {step.number}
                  </div>
                  <div className="text-[9px] tracking-[0.3em] text-gold/40 uppercase">
                    {step.subtitle}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-graphite p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-sm text-gold/50">{step.number}</span>
                  <div className="h-px flex-1 bg-gold/10" />
                  <span className="text-[9px] tracking-[0.2em] text-gold/50 uppercase">{step.duration}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-cream font-medium mb-3">
                  {step.title}
                </h2>
                <p className="text-silver text-sm font-light leading-relaxed mb-6">
                  {step.desc}
                </p>
                <ul className="space-y-2 mb-5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-silver text-sm font-light">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" className="shrink-0 mt-0.5">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 pt-4 border-t border-gold/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-gold/60 text-xs font-light">{step.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="bg-graphite py-20 border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold opacity-60" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Dúvidas</span>
              <div className="h-px w-10 bg-gold opacity-60" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Perguntas <span className="italic text-gold">Frequentes</span>
            </h2>
          </motion.div>

          <div className="space-y-px bg-gold/5">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-graphite-mid p-7"
              >
                <div className="flex gap-4 items-start">
                  <span className="font-display text-gold/30 text-2xl font-light shrink-0 select-none">Q</span>
                  <div>
                    <h3 className="text-cream font-medium mb-3">{faq.q}</h3>
                    <p className="text-silver text-sm font-light leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-obsidian">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-5">
              Pronto para o{" "}
              <span className="italic text-gold">primeiro passo?</span>
            </h2>
            <p className="text-silver font-light mb-8">
              Agende sua visita técnica gratuita hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5521982162480?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20técnica%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                Agendar Visita Gratuita
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
