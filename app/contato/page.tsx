import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contato | 4WM Reformas — Rio de Janeiro e Niterói",
  description: "Entre em contato com a 4WM Reformas. Atendemos Rio de Janeiro e Niterói. Solicite seu orçamento gratuito ou agende uma visita técnica sem compromisso.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title="Entre em"
        titleAccent="Contato"
        subtitle="Atendemos Rio de Janeiro e Niterói. Solicite um orçamento gratuito ou agende uma visita técnica — respondemos em até 2 horas úteis."
        imageSrc="/images/contact.jpg"
        imageAlt="Lobby corporativo moderno — 4WM Reformas"
        imagePosition="center"
      />
      <ContactContent />
    </>
  );
}
