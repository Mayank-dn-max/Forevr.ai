"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plug, ScanSearch, GitBranch, FlaskConical } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect",
    desc: "Auto-instruments every span with zero config.",
    position: "below" as const,
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Discover",
    desc: "6 detectors surface anomalies in real-time.",
    position: "above" as const,
  },
  {
    icon: GitBranch,
    number: "03",
    title: "Root Cause",
    desc: "Causal metadata maps exactly what broke.",
    position: "below" as const,
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "Ship",
    desc: "Validate against production history before deploy.",
    position: "above" as const,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-5"
            style={{
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#818cf8",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            From broken agent to fix deployed.
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            A closed loop — no scattered tooling, no manual steps.
          </p>
        </motion.div>

        {/* ── Desktop horizontal flow ── */}
        <div ref={ref} className="hidden md:block">
          <div className="relative flex items-center" style={{ height: "260px" }}>

            {/* Glowing line — full width, pinned to vertical center */}
            <div
              className="absolute left-0 right-0"
              style={{ top: "50%", height: "1px", background: "rgba(99,102,241,0.12)", zIndex: 0 }}
            />
            <motion.div
              className="absolute left-0 right-0 origin-left"
              style={{
                top: "50%",
                height: "1px",
                background: "linear-gradient(to right, #6366f1, rgba(99,102,241,0.6), rgba(99,102,241,0.2))",
                boxShadow: "0 0 8px 2px rgba(99,102,241,0.35)",
                zIndex: 0,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
            />

            {/* START Node */}
            <motion.div
              className="relative z-10 shrink-0 flex items-center justify-center"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="absolute -top-8 text-[10px] font-bold tracking-widest uppercase" style={{ color: "#818cf8" }}>
                Start
              </div>
              <motion.div
                className="absolute rounded-full"
                style={{ width: "28px", height: "28px", border: "1px solid rgba(99,102,241,0.35)" }}
                animate={inView ? { scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] } : {}}
                transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="w-[14px] h-[14px] rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #a5b4fc, #6366f1)",
                  boxShadow: "0 0 12px rgba(99,102,241,0.6), 0 0 4px rgba(99,102,241,0.9)",
                }}
              />
            </motion.div>

            {/* 4 step nodes — each flex-1 so they fill space evenly */}
            {steps.map((step, i) => {
              const delay = 0.35 + i * 0.2;
              const isAbove = step.position === "above";
              return (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center h-full"
                  style={{ flex: 1 }}
                >
                  {/* ABOVE content */}
                  <motion.div
                    className="flex flex-col items-center justify-end"
                    style={{ flex: 1, paddingBottom: "14px" }}
                    initial={{ opacity: 0, y: isAbove ? 10 : 0 }}
                    animate={inView ? { opacity: isAbove ? 1 : 0, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: delay + 0.15 }}
                  >
                    {isAbove && <StepContent step={step} />}
                  </motion.div>

                  {/* Dot on the line */}
                  <motion.div
                    className="relative shrink-0 flex items-center justify-center"
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <motion.div
                      className="absolute rounded-full"
                      style={{ width: "28px", height: "28px", border: "1px solid rgba(99,102,241,0.35)" }}
                      animate={inView ? { scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] } : {}}
                      transition={{ duration: 2.5, delay: delay + 0.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div
                      className="w-[14px] h-[14px] rounded-full"
                      style={{
                        background: "radial-gradient(circle at 35% 35%, #a5b4fc, #6366f1)",
                        boxShadow: "0 0 12px rgba(99,102,241,0.6), 0 0 4px rgba(99,102,241,0.9)",
                      }}
                    />
                  </motion.div>

                  {/* BELOW content */}
                  <motion.div
                    className="flex flex-col items-center justify-start"
                    style={{ flex: 1, paddingTop: "14px" }}
                    initial={{ opacity: 0, y: !isAbove ? -10 : 0 }}
                    animate={inView ? { opacity: !isAbove ? 1 : 0, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: delay + 0.15 }}
                  >
                    {!isAbove && <StepContent step={step} />}
                  </motion.div>
                </div>
              );
            })}

            {/* END Node */}
            <motion.div
              className="relative z-10 shrink-0 flex items-center justify-center"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + steps.length * 0.2 + 0.15, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="absolute -top-8 text-[10px] font-bold tracking-widest uppercase text-[#22c55e]">
                Fixed
              </div>
              <motion.div
                className="absolute rounded-full"
                style={{ width: "28px", height: "28px", border: "1px solid rgba(34,197,94,0.35)" }}
                animate={inView ? { scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] } : {}}
                transition={{ duration: 2.5, delay: 0.35 + steps.length * 0.2 + 0.65, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="w-[14px] h-[14px] rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #86efac, #22c55e)",
                  boxShadow: "0 0 12px rgba(34,197,94,0.6), 0 0 4px rgba(34,197,94,0.9)",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* ── Mobile vertical fallback ── */}
        <div className="flex md:hidden flex-col gap-6">
          {steps.map((step, i) => {
            const delay = 0.3 + i * 0.15;
            return (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #a5b4fc, #6366f1)",
                      boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                    }}
                  />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[32px]" style={{ background: "rgba(99,102,241,0.2)" }} />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold" style={{ color: "rgba(99,102,241,0.55)" }}>
                    {step.number}
                  </span>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepContent({ step }: { step: typeof steps[0] }) {
  return (
    <div className="flex flex-col items-center text-center gap-1 w-[120px]">
      <span className="text-[10px] font-bold font-mono" style={{ color: "rgba(99,102,241,0.55)" }}>
        {step.number}
      </span>
      <p className="text-sm font-semibold text-white leading-tight">{step.title}</p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
        {step.desc}
      </p>
    </div>
  );
}
