"use client";

import { motion } from "framer-motion";

type NewsCardProps = {
  title: string;
  description: string;
  date: string;
};

export function NewsCard({
  title,
 description,
  date,
}: NewsCardProps) {

  return (

    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className="bg-[#f8f6f2] rounded-3xl p-8 border border-[#ece7dd] hover:shadow-xl transition"
    >

      <p className="text-sm text-[#c8a96b] font-semibold">
        {date}
      </p>

      <h3 className="mt-4 text-2xl font-bold text-[#1d2b53] leading-snug">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <button className="mt-6 text-[#1d2b53] font-semibold hover:text-[#c8a96b] transition">

        Ler mais →

      </button>

    </motion.article>

  );

}