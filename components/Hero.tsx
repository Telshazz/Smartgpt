"use client";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <Logo />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mt-8 mb-4 text-white"
      >
        SmartGPT Internship Program
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-white max-w-2xl"
      >
        Join us in shaping the future of AI and technology
      </motion.p>
    </section>
  );
}