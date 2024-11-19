"use client";
import { Hero } from "@/components/Hero";
import { RolesSection } from "@/components/RolesSection";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <RolesSection />
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center py-8"
        >
          <div className="flex items-center justify-center gap-2 text-gray-300 hover:text-primary transition-colors">
            <Mail size={20} />
            <a href="mailto:travis@smartgptautomations.com">travis@smartgptautomations.com</a>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}