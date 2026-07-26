"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Plug, Eye, Bell } from "lucide-react";

const frameworks = [
  { name: "LangChain", color: "#34d399" },
  { name: "LangGraph", color: "#60a5fa" },
  { name: "CrewAI", color: "#f472b6" },
  { name: "OpenAI Agents", color: "#a78bfa" },
  { name: "Anthropic", color: "#fb923c" },
  { name: "Custom Agents", color: "rgba(255,255,255,0.35)" },
];

const steps = [
  {
    icon: Plug,
    label: "Connect",
    detail: "Point Forevr at your agent. No config files, no wrappers, no boilerplate.",
  },
  {
    icon: Eye,
    label: "Observe",
    detail: "Every span, tool call, LLM request and decision is captured automatically.",
  },
  {
    icon: Bell,
    label: "Detect",
    detail: "Failures surface in real-time before your users ever notice them.",
  },
];

const perks = [
  "No config files or YAML",
  "Works in async and multi-agent pipelines",
  "Zero framework lock-in — switch anytime",
  "Production-ready from day one",
];

export default function SDKPreview() {
  return (
    <section id="integration" className="py-20 lg:py-28" style={{ background: "#000" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
            style={{ border: "1px solid rgba(99,102,241,0.3)", color: "#818cf8", background: "rgba(99,102,241,0.08)" }}
          >
            WORKS WITH YOUR STACK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Connect your agent. See everything.
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            No configuration files. No manual instrumentation. Just connect and start observing —
            across every framework your team uses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Framework grid + perks */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Framework compatibility */}
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Compatible frameworks
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {frameworks.map((fw, i) => (
                  <motion.div
                    key={fw.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: fw.color }} />
                    <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {fw.name}
                    </span>
                    <CheckCircle2 size={12} className="ml-auto shrink-0" style={{ color: "rgba(255,255,255,0.2)" }} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}
                  >
                    <CheckCircle2 size={11} style={{ color: "#818cf8" }} />
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{perk}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — 3-step flow visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                  className="flex gap-4 p-5 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
                    >
                      <step.icon size={18} style={{ color: "#818cf8" }} />
                    </div>
                    <span className="text-[10px] font-bold font-mono" style={{ color: "rgba(99,102,241,0.5)" }}>
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                      {step.detail}
                    </p>
                  </div>

                  <ArrowRight
                    size={14}
                    className="ml-auto self-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "#818cf8" }}
                  />
                </motion.div>

                {/* Connector between steps */}
                {i < steps.length - 1 && (
                  <div
                    className="ml-[20px] w-px h-4 my-0.5"
                    style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.3), rgba(99,102,241,0.05))" }}
                  />
                )}
              </div>
            ))}

            {/* Bottom tag */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-2 text-center py-3 rounded-xl"
              style={{ background: "rgba(99,102,241,0.05)", border: "1px dashed rgba(99,102,241,0.2)" }}
            >
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                Average time from connection to first insight:&nbsp;
                <span className="font-semibold" style={{ color: "#818cf8" }}>under 5 minutes</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
