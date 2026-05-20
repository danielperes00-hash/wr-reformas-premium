import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfólio | 4WM Reformas",
  description: "Conheça os projetos realizados pela 4WM Reformas. Reformas residenciais e corporativas premium em São Paulo.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos Realizados"
        title="Nosso"
        titleAccent="Portfólio"
        subtitle="Cada projeto é único. Conheça algumas das transformações que orgulham nossa trajetória de mais de 15 anos."
        imageSrc="/images/portfolio.jpg"
        imageAlt="Sala de estar luxuosa — 4WM Reformas"
        imagePosition="center"
      />
      <PortfolioContent />
    </>
  );
}
