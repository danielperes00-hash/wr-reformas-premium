"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative py-16 md:py-32 bg-obsidian overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(201,169,110,0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.04) 0%, transparent 50%)
          `,
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold opacity-60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
              Vamos Começar?
            </span>
            <div className="h-px w-10 bg-gold opacity-60" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream mb-5 md:mb-6 leading-tight">
            Transforme seu
            <br />
            <span className="italic text-gold">espaço hoje</span>
          </h2>

          <p className="text-silver text-base md:text-lg font-light max-w-xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Atendemos Rio de Janeiro e Niterói. Agende uma visita técnica
            gratuita e receba um orçamento detalhado sem compromisso em até 48 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 md:mb-12 w-full sm:w-auto"
          >
            <Link
              href="https://wa.me/5521960104648?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20técnica%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-3 text-sm w-full sm:w-auto justify-center"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Visita Gratuita
            </Link>
            <Link href="/contato" className="btn-outline inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
              Preencher Formulário
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-center">
            {[
              { icon: "🏆", text: "15+ anos de mercado" },
              { icon: "✅", text: "800+ obras entregues" },
              { icon: "🛡️", text: "Garantia de 12 meses" },
              { icon: "📋", text: "Orçamento sem surpresas" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-silver/60 text-xs">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
