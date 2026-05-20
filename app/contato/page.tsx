import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contato | 4WM Reformas",
  description: "Entre em contato com a 4WM Reformas. Solicite seu orçamento gratuito ou agende uma visita técnica.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title="Entre em"
        titleAccent="Contato"
        subtitle="Solicite um orçamento gratuito ou tire suas dúvidas. Nossa equipe responde em até 2 horas úteis."
        imageSrc="/images/contact.jpg"
        imageAlt="Lobby corporativo moderno — 4WM Reformas"
        imagePosition="center"
      />
      <ContactContent />
    </>
  );
}
