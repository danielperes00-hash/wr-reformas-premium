import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfólio de Reformas no Rio de Janeiro e Niterói | 4WM Reformas",
  description: "Projetos de reforma residencial e corporativa de alto padrão realizados no Rio de Janeiro e Niterói. Ipanema, Leblon, Barra da Tijuca, Icaraí e mais.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos Realizados"
        title="Nosso"
        titleAccent="Portfólio"
        subtitle="Projetos realizados em Ipanema, Leblon, Barra da Tijuca, Icaraí e mais. Conheça as transformações que orgulham nossa trajetória no Rio de Janeiro e Niterói."
        imageSrc="/images/portfolio.jpg"
        imageAlt="Sala de estar luxuosa — 4WM Reformas"
        imagePosition="center"
      />
      <PortfolioContent />
    </>
  );
}
