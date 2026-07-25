"use client";

import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-bg-secondary py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Quote Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl text-text-secondary font-serif leading-none -mb-4 select-none"
        >
          &ldquo;
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-text-primary font-light italic leading-relaxed"
        >
          I was digging through 10,000 traces in Langfuse manually. Forevr
          found 3 failure patterns I didn&apos;t know existed in the first day.
        </motion.blockquote>

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-sm text-text-muted mt-6"
        >
          — AI Engineer, Series B Startup
        </motion.p>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-xs text-text-muted uppercase tracking-wider mb-4">
            Trusted by teams at
          </p>
          <div className="flex justify-center gap-8 items-center flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-20 h-6 bg-bg-elevated rounded-sm opacity-50"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
