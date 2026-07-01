"use client";

import Image from "next/image";

import { motion } from "framer-motion";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export function EventCard({
  title,
  date,
  description,
  image,
}: EventCardProps) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
    >

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-black/30" />

      </div>

      <div className="p-8">

        <p className="text-[#c8a96b] font-semibold">
          {date}
        </p>

        <h3 className="mt-4 text-2xl font-bold text-[#1d2b53]">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          {description}
        </p>

        <button className="mt-6 text-[#1d2b53] font-semibold hover:text-[#c8a96b] transition">

          Ver detalhes →

        </button>

      </div>

    </motion.div>

  );

}