"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";

export function HeroSection() {

  return (

    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#1d2b53] via-[#0f1b40] to-[#011025]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(200,169,107,0.08),_transparent_30%)] opacity-90" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-5xl px-6 text-center text-white"
      >

        <p className="text-[#c8a96b] uppercase tracking-[0.4em] font-semibold">

          Bem-vindo à

        </p>

        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">

          Caminho da Fé

        </h1>

        <p className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">

          Um lugar para fortalecer sua fé,
          encontrar esperança e viver uma caminhada
          mais próxima de Deus todos os dias.

        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

          <Button href="/agenda">
            Ver programação
          </Button>

          <Button
            href="/oracao"
            variant="secondary"
          >
            Pedido de oração
          </Button>

        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70 text-3xl"
      >

        ↓

      </motion.div>

    </section>

  );

}