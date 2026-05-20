import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Serviços de Reforma no Rio de Janeiro e Niterói | 4WM Reformas",
  description: "Reforma residencial e corporativa de alto padrão no Rio de Janeiro e Niterói. Banheiro, cozinha, pintura, drywall, piso, impermeabilização e gestão completa de obras. Orçamento grátis.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        title="Nossos"
        titleAccent="Serviços"
        subtitle="Reformas residenciais e corporativas de alto padrão no Rio de Janeiro e Niterói. Do planejamento à entrega, com garantia técnica e equipe especializada."
        imageSrc="/images/services.jpg"
        imageAlt="Interiores modernos de alto padrão — 4WM Reformas"
        imagePosition="center"
      />
      <ServicesContent />
    </>
  );
}
