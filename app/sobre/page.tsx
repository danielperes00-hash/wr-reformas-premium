import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "Sobre Nós | WR Reformas & Soluções",
  description: "Conheça a história, missão e equipe da WR Reformas & Soluções. Mais de 15 anos transformando espaços com excelência.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa História"
        title="Sobre a"
        titleAccent="WR Reformas"
        subtitle="Há mais de 15 anos transformando espaços com excelência, dedicação e o mais alto padrão de qualidade."
        imageSrc="/images/about.jpg"
        imageAlt="Escadaria moderna com mármore — WR Reformas"
        imagePosition="center top"
      />
      <AboutContent />
    </>
  );
}
