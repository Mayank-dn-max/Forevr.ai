"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-24 px-6"
      style={{ background: "#000" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative mx-auto max-w-2xl"
      >
        {/* Bordered box */}
        <div
          className="relative flex flex-col items-center"
          style={{ border: "1px solid rgba(124,58,237,0.35)" }}
        >
          {/* Dot pattern fill */}
          <DotPattern
            width={5}
            height={5}
            cx={1}
            cy={1}
            cr={0.8}
            className="fill-indigo-500/[0.07]"
          />

          {/* Corner accents — purple squares */}
          <div className="absolute -left-[3px] -top-[3px] h-[5px] w-[5px]" style={{ background: "#7c3aed" }} />
          <div className="absolute -right-[3px] -top-[3px] h-[5px] w-[5px]" style={{ background: "#7c3aed" }} />
          <div className="absolute -left-[3px] -bottom-[3px] h-[5px] w-[5px]" style={{ background: "#7c3aed" }} />
          <div className="absolute -right-[3px] -bottom-[3px] h-[5px] w-[5px]" style={{ background: "#7c3aed" }} />

          {/* Inner radial fade so edges stay dark */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, #000 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 py-12 md:py-16">
            {/* Logo mark */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                boxShadow: "0 0 40px rgba(124,58,237,0.35)",
              }}
            >
              <Zap size={24} className="text-white" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Stop guessing.<br />Start knowing.
            </h2>

            <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: "rgba(255,255,255,0.45)" }}>
              Install in 30 seconds. Find your first unknown failure in minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="flex items-center gap-2 bg-white text-black font-medium rounded-lg px-7 py-3 text-sm hover:bg-white/90 transition-all active:scale-[0.98]"
              >
                Get to know more
                <ArrowRight size={14} />
              </a>
            </div>

            <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              No credit card required · Open source core
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
