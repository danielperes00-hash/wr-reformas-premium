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
  title: "4WM Reformas | Reformas Residenciais e Corporativas Premium",
  description:
    "Transformamos espaços com excelência e sofisticação. Especialistas em reformas residenciais e corporativas em São Paulo. Solicite seu orçamento.",
  keywords:
    "reforma residencial, reforma corporativa, reforma banheiro, reforma cozinha, pintura, drywall, piso, revestimento, impermeabilização, alvenaria, elétrica, hidráulica",
  openGraph: {
    title: "4WM Reformas",
    description: "Transformamos espaços com excelência e sofisticação.",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
