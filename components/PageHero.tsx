"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  imageSrc,
  imageAlt = "WR Reformas",
  imagePosition = "center",
}: Props) {
  return (
    <section className="relative pt-44 pb-28 overflow-hidden bg-obsidian min-h-[520px] flex items-end">
      {/* Background */}
      {imageSrc ? (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              quality={85}
              className="object-cover"
              style={{ objectPosition: imagePosition }}
            />
            {/* Dark cinematic overlay — heavier than hero */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.88) 100%),
                  linear-gradient(to right, rgba(8,8,8,0.6) 0%, transparent 70%)
                `,
              }}
            />
            {/* Gold grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 60%, rgba(201,169,110,0.06) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 30%, rgba(201,169,110,0.03) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </>
      )}

      {/* Gold top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px origin-left z-20"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent)" }}
      />

      {/* Gold accent vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute left-8 md:left-16 top-1/3 h-20 w-px origin-top z-20"
        style={{ background: "linear-gradient(180deg, #c9a96e, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold opacity-60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-light text-cream mb-5 leading-tight">
            {title}
            <br />
            <span className="italic text-gold">{titleAccent}</span>
          </h1>
          <p className="text-silver/80 text-lg font-light max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-obsidian pointer-events-none z-10" />
    </section>
  );
}
