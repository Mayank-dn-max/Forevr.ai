"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "Do I need to write custom evaluations to find failures?",
    answer: "No. Forevr uses built-in anomaly detectors that automatically surface silent agent failures—like hallucinations, context limits, and tool misuse—without you needing to write a single manual eval.",
  },
  {
    question: "How does causal root cause analysis work?",
    answer: "When an agent fails, Forevr traces the exact sequence of events backwards. It instantly highlights the specific step, API call, or malformed context that caused the cascade, so you spend zero time digging through logs.",
  },
  {
    question: "Will this add latency to my agents in production?",
    answer: "Not at all. Forevr operates entirely asynchronously. We capture traces and telemetry in the background without blocking your critical execution paths, ensuring zero impact on user latency.",
  },
  {
    question: "Do you support custom orchestration frameworks?",
    answer: "Yes! While we offer out-of-the-box integrations for popular frameworks, our SDK is completely framework-agnostic. You can easily wrap your custom functions or send data via standard OpenTelemetry.",
  },
  {
    question: "Can I use Forevr during development?",
    answer: "Absolutely. Forevr is built for the entire lifecycle. Use it in development to catch logic flaws early, during staging to validate against production history, and in production for continuous monitoring.",
  },
  {
    question: "How do you handle sensitive user data (PII)?",
    answer: "We provide granular data scrubbing at the SDK level before data ever leaves your environment. You can easily configure rules to mask PII, secrets, and sensitive context to ensure strict compliance.",
  }
];

function FAQItem({ item, index, isOpen, toggleOpen }: { item: typeof faqs[0], index: number, isOpen: boolean, toggleOpen: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-5">
          <div 
            className="flex items-center justify-center rounded-[4px] w-7 h-7 text-[10px] font-mono font-bold transition-colors"
            style={{ 
              background: isOpen ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
              color: isOpen ? "#fff" : "rgba(255,255,255,0.6)",
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
          <span 
            className="text-base sm:text-lg font-medium transition-colors"
            style={{ color: isOpen ? "#fff" : "rgba(255,255,255,0.85)" }}
          >
            {item.question}
          </span>
        </div>
        <div 
          className="shrink-0 ml-4 transition-transform duration-300"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-4 sm:pr-12 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="py-20 lg:py-28 relative" style={{ background: "#000" }}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              index={i}
              item={item}
              isOpen={openIndex === i}
              toggleOpen={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
