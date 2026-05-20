import Link from "next/link";

const services = [
  "Reforma Residencial",
  "Reforma Corporativa",
  "Reforma de Banheiro",
  "Reforma de Cozinha",
  "Piso e Revestimento",
  "Drywall",
  "Pintura",
  "Impermeabilização",
];

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/processo", label: "Como Trabalhamos" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-display text-3xl font-semibold tracking-widest text-cream">4WM</div>
              <div className="text-[9px] tracking-[0.35em] text-gold uppercase font-light">
                Reformas
              </div>
            </div>
            <p className="text-silver text-sm leading-relaxed mb-6 font-light">
              Há mais de 15 anos transformando espaços com excelência, precisão e sofisticação.
              Sua reforma merece o melhor.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink
                href="https://wa.me/5521982162480"
                label="WhatsApp"
              >
                <WhatsAppIcon />
              </SocialLink>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver text-sm hover:text-gold transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/servicos"
                    className="text-silver text-sm hover:text-gold transition-colors duration-300 font-light"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <ContactItem label="WhatsApp">
                <Link
                  href="https://wa.me/5521982162480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver text-sm hover:text-gold transition-colors font-light"
                >
                  (21) 98216-2480
                </Link>
              </ContactItem>
              <ContactItem label="E-mail">
                <Link
                  href="mailto:contato@wrreformas.com.br"
                  className="text-silver text-sm hover:text-gold transition-colors font-light"
                >
                  contato@wrreformas.com.br
                </Link>
              </ContactItem>
              <ContactItem label="Endereço">
                <span className="text-silver text-sm font-light">
                  São Paulo, SP — Brasil
                </span>
              </ContactItem>
              <ContactItem label="Horário">
                <span className="text-silver text-sm font-light">
                  Seg–Sex: 8h às 18h<br />Sáb: 8h às 13h
                </span>
              </ContactItem>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xs tracking-wide font-light">
            © {new Date().getFullYear()} 4WM Reformas. Todos os direitos reservados.
          </p>
          <p className="text-stone text-xs tracking-wide font-light">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-silver hover:text-gold hover:border-gold/50 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.15em] text-gold/60 uppercase mb-1">{label}</div>
      {children}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
