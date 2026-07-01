"use client";

import Link from "next/link";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const links = [
  {
    label: "Início",
    href: "/",
  },

  {
    label: "Sobre",
    href: "/sobre",
  },

  {
    label: "Agenda",
    href: "/agenda",
  },

  {
    label: "Oração",
    href: "/oracao",
  },

  {
    label: "Admin",
    href: "/admin",
  },
];

export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
      className="fixed top-0 left-0 w-full z-50 bg-[#1d2b53]/80 backdrop-blur-xl border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-wide"
        >

          Caminho da Fé

        </Link>

        <nav className="hidden md:flex items-center gap-8">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className="relative text-white font-medium hover:text-[#c8a96b] transition group"
            >

              {link.label}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#c8a96b] transition-all duration-300 group-hover:w-full" />

            </Link>

          ))}

        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >

          {isOpen ? "×" : "☰"}

        </button>

      </div>

      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#162040] border-t border-white/10"
          >

            <nav className="flex flex-col p-6 gap-6">

              {links.map((link) => (

                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-[#c8a96b] transition"
                >

                  {link.label}

                </Link>

              ))}

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>

  );

}