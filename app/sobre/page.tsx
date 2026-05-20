import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "Sobre Nós | 4WM Reformas",
  description: "Conheça a história, missão e equipe da 4WM Reformas. Mais de 15 anos transformando espaços com excelência.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa História"
        title="Sobre a"
        titleAccent="4WM Reformas"
        subtitle="Há mais de 15 anos transformando espaços com excelência, dedicação e o mais alto padrão de qualidade."
        imageSrc="/images/about.jpg"
        imageAlt="Escadaria moderna com mármore — 4WM Reformas"
        imagePosition="center top"
      />
      <AboutContent />
    </>
  );
}
