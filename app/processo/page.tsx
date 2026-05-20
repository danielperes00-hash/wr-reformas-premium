import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessContent from "@/components/process/ProcessContent";

export const metadata: Metadata = {
  title: "Nosso Processo | 4WM Reformas",
  description: "Entenda como a 4WM Reformas trabalha: 6 etapas estruturadas para garantir qualidade, prazo e transparência em cada obra.",
};

export default function ProcessoPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title="Como"
        titleAccent="Trabalhamos"
        subtitle="Um processo estruturado em 6 etapas que garante transparência, qualidade e prazo em cada obra. Você sempre sabe o que está acontecendo."
        imageSrc="/images/about.jpg"
        imageAlt="Detalhes arquitetônicos premium — 4WM Reformas"
        imagePosition="center 30%"
      />
      <ProcessContent />
    </>
  );
}
