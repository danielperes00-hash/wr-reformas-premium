"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  "Reforma Residencial",
  "Reforma Corporativa",
  "Reforma de Banheiro",
  "Reforma de Cozinha",
  "Pintura",
  "Drywall",
  "Piso e Revestimento",
  "Pintura de Fachada",
  "Impermeabilização",
  "Alvenaria",
  "Elétrica e Hidráulica",
  "Gestão Completa da Obra",
  "Outro",
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de solicitar um orçamento.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Telefone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Serviço:* ${form.service}\n` +
      `*Área aprox.:* ${form.area}\n` +
      `*Mensagem:* ${form.message}`
    );
    window.open(`https://wa.me/5521960104648?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-obsidian py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="space-y-10">
              {/* Contact cards */}
              <ContactCard
                icon={<WhatsAppIcon />}
                title="WhatsApp"
                label="Resposta imediata"
                value="(21) 96010-4648"
                href="https://wa.me/5521960104648"
              />
              <ContactCard
                icon={<PhoneIcon />}
                title="Telefone"
                label="Seg–Sex, 8h às 18h"
                value="(21) 96010-4648"
                href="tel:+5521960104648"
              />
              <ContactCard
                icon={<EmailIcon />}
                title="E-mail"
                label="Resposta em até 2h úteis"
                value="daniel@wrsolucoesemreforma.com.br"
                href="mailto:daniel@wrsolucoesemreforma.com.br"
              />
              <ContactCard
                icon={<LocationIcon />}
                title="Atendimento"
                label="Área de cobertura"
                value="Rio de Janeiro e Niterói"
                href="#"
              />
            </div>

            {/* Business hours */}
            <div className="mt-8 md:mt-12 p-6 md:p-8 border border-gold/10 bg-graphite">
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-5">Horário de Funcionamento</div>
              <div className="space-y-3">
                {[
                  ["Segunda a Sexta", "08:00 – 18:00"],
                  ["Sábado", "08:00 – 13:00"],
                  ["Domingo e Feriados", "Fechado"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-silver font-light">{day}</span>
                    <span className="text-cream font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Redes Sociais</div>
              <div className="flex gap-3">
                <SocialBtn href="#" label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="#" label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </SocialBtn>
                <SocialBtn href="#" label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialBtn>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="border border-gold/10 bg-graphite p-6 md:p-10 rounded-xl">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-cream font-medium mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-silver font-light mb-8">
                    Você será redirecionado ao WhatsApp. Nossa equipe responderá em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-display text-3xl text-cream font-light mb-2">
                      Solicitar <span className="italic text-gold">Orçamento</span>
                    </h2>
                    <p className="text-silver text-sm font-light">
                      Preencha o formulário e receba seu orçamento em até 48h.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Nome completo *" required>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Seu nome"
                          className="form-input"
                        />
                      </FormField>
                      <FormField label="WhatsApp *" required>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="(21) 96010-4648"
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    <FormField label="E-mail">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="form-input"
                      />
                    </FormField>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Serviço desejado *" required>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="form-input"
                        >
                          <option value="">Selecione...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </FormField>
                      <FormField label="Área aproximada">
                        <input
                          type="text"
                          name="area"
                          value={form.area}
                          onChange={handleChange}
                          placeholder="Ex: 80m²"
                          className="form-input"
                        />
                      </FormField>
                    </div>

                    <FormField label="Descreva seu projeto">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Conte-nos mais sobre o seu projeto, prazo desejado e outras informações relevantes..."
                        className="form-input resize-none"
                      />
                    </FormField>

                    <div className="pt-2">
                      <button type="submit" className="btn-gold w-full text-center justify-center flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Enviar pelo WhatsApp
                      </button>
                      <p className="text-silver/40 text-xs text-center mt-3 font-light">
                        Ao enviar, você será redirecionado ao WhatsApp com as informações preenchidas.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.2em] text-gold/60 uppercase mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactCard({ icon, title, label, value, href }: {
  icon: React.ReactNode;
  title: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-start gap-5 group"
    >
      <div className="w-12 h-12 rounded-full border border-gold/20 group-hover:border-gold/50 flex items-center justify-center text-gold shrink-0 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-[0.2em] text-gold/50 uppercase mb-1">{title}</div>
        <div className="text-cream font-medium text-sm group-hover:text-gold transition-colors duration-300 mb-0.5">{value}</div>
        <div className="text-silver/50 text-xs font-light">{label}</div>
      </div>
    </Link>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full border border-gold/20 hover:border-gold/50 text-silver hover:text-gold flex items-center justify-center transition-all duration-300"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.94a19.79 19.79 0 01-3.07-8.67A2 2 0 012.4 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-.84a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
