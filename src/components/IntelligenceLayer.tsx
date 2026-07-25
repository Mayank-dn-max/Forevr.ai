"use client";

import { motion } from "framer-motion";
import { Search, GitBranch, Activity, BarChart3, BellRing } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        borderColor: "rgba(99,102,241,0.45)",
        boxShadow: "0 0 0 1px rgba(99,102,241,0.15), 0 0 32px rgba(99,102,241,0.18), 0 0 80px rgba(99,102,241,0.07)",
      }}
      transition={{ duration: 0.2 }}
      className={`rounded-2xl p-6 ${className}`}
      style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {children}
    </motion.div>
  );
}

export default function IntelligenceLayer() {
  return (
    <section id="intelligence" className="py-20 lg:py-28" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-4"
            style={{ border: "1px solid rgba(99,102,241,0.3)", color: "#818cf8", background: "rgba(99,102,241,0.08)" }}
          >
            WHY FOREVR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
            The only observability tool that finds failures you didn&apos;t know to look for.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Card 1 — Auto-Discovery (2 cols) */}
          <Card className="md:col-span-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <Search size={16} className="text-accent-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Auto-Discovery Engine</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              6 real-time detectors analyze every trace window. No manual queries.
              No pre-defined thresholds. The system learns your baseline and surfaces
              anomalies automatically.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { label: "Latency Spikes", desc: ">1.5× baseline" },
                { label: "Error Clusters", desc: "grouped by signature" },
                { label: "Cost Anomalies", desc: "per-phase regressions" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                  <span className="text-white/70">{item.label}</span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>— {item.desc}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 2 — Causal Root Cause (row-span-2) */}
          <Card className="md:row-span-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <GitBranch size={16} className="text-accent-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Causal Root Cause</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Every span carries <code className="text-white/70 text-xs">caused_by</code>, <code className="text-white/70 text-xs">trigger</code>, and <code className="text-white/70 text-xs">relation</code> fields.
              Trace why a retry happened, not just that it happened.
            </p>

            {/* Causal chain diagram */}
            <div className="mt-6 flex flex-col gap-2 items-center">
              {[
                { label: "web_search", accent: false },
                { connector: "caused_by" },
                { label: "retry", accent: true },
                { connector: "trigger" },
                { label: "validate", accent: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  {"label" in item ? (
                    <div
                      className="w-full text-center text-xs font-mono px-3 py-2 rounded-lg"
                      style={{
                        background: item.accent ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.04)",
                        border: item.accent ? "1px solid rgba(99,102,241,0.3)" : "1px solid rgba(255,255,255,0.07)",
                        color: item.accent ? "#818cf8" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {item.label}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-0.5 py-1">
                      <div className="w-px h-3" style={{ background: "rgba(255,255,255,0.12)" }} />
                      <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>{item.connector}</span>
                      <div className="w-px h-3" style={{ background: "rgba(255,255,255,0.12)" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Card 3 — Execution Semantics (2 cols) */}
          <Card className="md:col-span-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <Activity size={16} className="text-accent-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Execution Semantics</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Labels like{" "}
              <code className="text-white/70 text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.07)" }}>degraded_phase</code>
              {" "}and{" "}
              <code className="text-white/70 text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.07)" }}>rate_limit_recovery</code>
              {" "}tell the full story, not just the status code.
            </p>
          </Card>

          {/* Card 4 — Cost Tracking (2 cols) */}
          <Card className="md:col-span-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <BarChart3 size={16} className="text-accent-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Hierarchical Cost Tracking</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              See cost per phase — retrieval, processing, generation — not just per trace.
            </p>
            <div className="mt-5 flex items-end gap-2 h-16">
              {[
                { label: "Retrieval", pct: "10%", color: "rgba(255,255,255,0.12)" },
                { label: "Processing", pct: "35%", color: "rgba(99,102,241,0.35)" },
                { label: "Generation", pct: "85%", color: "#6366f1" },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 w-16">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" as const }}
                    className="w-full rounded-md"
                    style={{ background: bar.color, minHeight: "4px" }}
                  />
                  <span className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>{bar.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 5 — Proactive Alerting */}
          <Card>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}
            >
              <BellRing size={16} className="text-accent-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-white">Proactive Alerting</h3>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Get notified the moment a failure pattern emerges — smart grouping kills alert fatigue before it starts.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {[
                { dot: "#22c55e", text: "Error rate spike detected" },
                { dot: "#f59e0b", text: "Latency regression · retrieval phase" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ background: item.dot }} />
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
