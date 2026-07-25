"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-md flex items-center justify-center text-accent-primary">
              <Logo size={60} />
            </div>
            <span className="text-white font-semibold text-xl tracking-tight">Forevr</span>
          </a>


          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div
            className="absolute right-0 top-0 h-full w-64 flex flex-col pt-20 px-6 gap-4"
            style={{ background: "rgba(10,10,10,0.98)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >

          </div>
        </div>
      )}
    </>
  );
}
