import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Serviços | 4WM Reformas",
  description: "Conheça todos os serviços da 4WM Reformas: reforma residencial, corporativa, banheiro, cozinha, pintura, drywall, piso, impermeabilização e muito mais.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title="Nossos"
        titleAccent="Serviços"
        subtitle="Cobertura completa para toda necessidade da sua obra. Do planejamento à entrega, com garantia técnica e equipe especializada."
        imageSrc="/images/services.jpg"
        imageAlt="Interiores modernos de alto padrão — 4WM Reformas"
        imagePosition="center"
      />
      <ServicesContent />
    </>
  );
}
