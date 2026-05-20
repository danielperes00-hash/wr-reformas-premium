import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "4WM Reformas | Reformas de Alto Padrão no Rio de Janeiro e Niterói",
  description:
    "Especialistas em reformas residenciais e corporativas de alto padrão no Rio de Janeiro e Niterói. Mais de 15 anos transformando espaços com excelência e sofisticação. Solicite seu orçamento gratuito.",
  keywords:
    "reformas Rio de Janeiro, reformas Niterói, reforma residencial RJ, reforma corporativa Rio de Janeiro, reforma alto padrão Niterói, reformas Ipanema, reformas Leblon, reformas Barra da Tijuca, reforma banheiro RJ, reforma cozinha Rio de Janeiro, pintura, drywall, piso, impermeabilização RJ",
  openGraph: {
    title: "4WM Reformas | Rio de Janeiro e Niterói",
    description:
      "Reformas residenciais e corporativas de alto padrão no Rio de Janeiro e Niterói. Excelência, prazo e sofisticação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-obsidian text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "4WM Reformas",
              description:
                "Empresa especializada em reformas residenciais e corporativas de alto padrão no Rio de Janeiro e Niterói.",
              url: "https://4wmreformas.com.br",
              telephone: "+55-21-96010-4648",
              email: "daniel@wrsolucoesemreforma.com.br",
              areaServed: [
                { "@type": "City", name: "Rio de Janeiro" },
                { "@type": "City", name: "Niterói" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rio de Janeiro",
                addressRegion: "RJ",
                addressCountry: "BR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              sameAs: [],
            }),
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
