"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const traces = [
  { time: "Jun 12, 04:13 PM", input: "Summarize Q2 earnings report",      output: "Revenue grew 18% YoY, driven by...",    model: "gpt-4o",        latency: "1.24s", cost: "$0.0082", success: 100, fail: false },
  { time: "Jun 12, 04:13 PM", input: "Draft reply to client complaint",   output: "Thank you for reaching out. We...",    model: "gpt-4o",        latency: "1.61s", cost: "$0.0094", success: 100, fail: false },
  { time: "Jun 12, 04:13 PM", input: "Classify support ticket #4821",     output: "Category: Billing / Priority: High",   model: "gpt-4o-mini",   latency: "0.38s", cost: "$0.0011", success: 100, fail: false },
  { time: "Jun 12, 04:13 PM", input: "Extract entities from contract",    output: "Parties: Acme Corp, Vertex Ltd...",    model: "gpt-4o",        latency: "2.07s", cost: "$0.0143", success: 100, fail: false },
  { time: "Jun 12, 04:12 PM", input: "Translate document to Spanish",     output: "Error: context_length_exceeded",       model: "gpt-4o-mini",   latency: "0.19s", cost: "$0.0004", success: 0,   fail: true  },
  { time: "Jun 12, 04:12 PM", input: "Generate product description",      output: "Introducing the next generation of...", model: "gpt-4o",       latency: "1.43s", cost: "$0.0077", success: 100, fail: false },
  { time: "Jun 12, 04:11 PM", input: "Validate JSON schema input",        output: "Schema valid / 3 fields mapped",       model: "gpt-3.5-turbo", latency: "0.52s", cost: "$0.0006", success: 100, fail: false },
  { time: "Jun 12, 04:11 PM", input: "Summarize legal clause 4.2",        output: "Clause limits liability to direct...", model: "gpt-4o",        latency: "1.88s", cost: "$0.0119", success: 100, fail: false },
  { time: "Jun 12, 04:10 PM", input: "Detect PII in user message",        output: "Found: email, phone / redacted",       model: "gpt-4o-mini",   latency: "0.44s", cost: "$0.0013", success: 100, fail: false },
  { time: "Jun 12, 04:10 PM", input: "Score resume against job desc",     output: "Match: 74% / Missing: Python, AWS",   model: "gpt-4o",        latency: "1.72s", cost: "$0.0098", success: 100, fail: false },
  { time: "Jun 12, 04:09 PM", input: "Analyze sentiment of reviews",      output: "Positive: 68% / Negative: 12%...",    model: "gpt-4o-mini",   latency: "0.61s", cost: "$0.0018", success: 80,  fail: false },
  { time: "Jun 12, 04:09 PM", input: "Rewrite email in formal tone",      output: "Dear Mr. Chen, I hope this finds...", model: "gpt-4o",        latency: "1.33s", cost: "$0.0071", success: 100, fail: false },
  { time: "Jun 12, 04:08 PM", input: "Build SQL from natural language",   output: "SELECT id, revenue FROM orders...",   model: "gpt-4o",        latency: "1.09s", cost: "$0.0065", success: 100, fail: false },
  { time: "Jun 12, 04:08 PM", input: "Flag anomalies in spend data",      output: "Error: rate_limit / retry in 20s",    model: "gpt-4o-mini",   latency: "0.07s", cost: "—",       success: 0,   fail: true  },
];

type NavItem = {
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
};

const navItems: { section: string; items: NavItem[] }[] = [
  { section: "ANALYTICS", items: [{ label: "Overview", icon: "⊞" }, { label: "Traces", icon: "▦", active: true }, { label: "Sessions", icon: "◉" }] },
  { section: "EVALUATION", items: [{ label: "Insights", icon: "⊕", badge: "1" }, { label: "Datasets", icon: "▣" }, { label: "Evals", icon: "⚖" }] },
];

function DashboardMockup() {
  return (
    <div
      className="w-full flex"
      style={{
        background: "#ffffff",
        height: "420px",
      }}
    >
      {/* Sidebar */}
      <div
        className="flex flex-col shrink-0 w-48"
        style={{ borderRight: "1px solid #e5e7eb", background: "#fff" }}
      >
        {/* Logo */}
        <div className="px-4 py-3.5" style={{ borderBottom: "1px solid #f3f4f6" }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-teal-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">F</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 leading-tight">Forevr</p>
              <p className="text-[10px] text-gray-400 leading-tight">Agent Observability</p>
            </div>
          </div>
          <div
            className="mt-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
            style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            LIVE · 2s
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 px-2 py-3 flex flex-col gap-4 overflow-hidden">
          {navItems.map((group) => (
            <div key={group.section}>
              <p className="text-[9px] font-semibold tracking-widest px-2 mb-1" style={{ color: "#9ca3af" }}>{group.section}</p>
              {group.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between px-2 py-1.5 rounded-md mb-0.5"
                  style={{
                    background: item.active ? "#eff6ff" : "transparent",
                    cursor: "default",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: item.active ? "#3b82f6" : "#6b7280" }}>{item.icon}</span>
                    <span className="text-xs font-medium" style={{ color: item.active ? "#1d4ed8" : "#374151" }}>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: "#fee2e2", color: "#dc2626" }}>
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="px-3 py-3 border-t border-gray-100 grid grid-cols-2 gap-x-2 gap-y-1.5">
          {[["TRACES", "44", "#6366f1"], ["SUCCESS", "98%", "#16a34a"], ["AVG LATENCY", "0.27s", "#374151"], ["TOTAL COST", "$0.0056", "#374151"]].map(([label, val, color]) => (
            <div key={label}>
              <p className="text-[8px] tracking-wider" style={{ color: "#9ca3af" }}>{label}</p>
              <p className="text-[11px] font-bold" style={{ color }}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0" style={{ background: "#fff" }}>
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5 gap-3 shrink-0"
          style={{ borderBottom: "1px solid #f3f4f6" }}
        >
          <div className="flex items-center gap-1 text-xs" style={{ color: "#9ca3af" }}>
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-semibold text-gray-800">Traces</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="text-[10px] px-2.5 py-1 rounded-md font-medium"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb", color: "#6b7280" }}
            >
              Jun 12, 2025
            </div>
            <div
              className="text-[10px] px-2.5 py-1 rounded-md font-medium"
              style={{ background: "#f9fafb", border: "1px solid #e5e7eb", color: "#6b7280" }}
            >
              ↓ Export
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div
          className="flex items-center justify-between px-4 py-2 shrink-0 gap-3"
          style={{ borderBottom: "1px solid #f3f4f6" }}
        >
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px]"
              style={{ border: "1px solid #e5e7eb", color: "#9ca3af", background: "#fafafa" }}
            >
              🔍 Search traces...
            </div>
            {[{ l: "All", active: true }, { l: "✓ Success" }, { l: "✗ Failed" }, { l: "↻ Running" }].map((t) => (
              <div
                key={t.l}
                className="text-[10px] px-2.5 py-1 rounded-md font-medium"
                style={{
                  background: t.active ? "#f3f4f6" : "transparent",
                  color: t.active ? "#111827" : "#6b7280",
                  border: t.active ? "1px solid #e5e7eb" : "1px solid transparent",
                }}
              >
                {t.l}
              </div>
            ))}
          </div>
          <span className="text-[10px] font-medium" style={{ color: "#9ca3af" }}>44 traces</span>
        </div>

        {/* Table header */}
        <div
          className="grid px-4 py-1.5 shrink-0"
          style={{
            gridTemplateColumns: "130px 1fr 1fr 90px 65px 65px 80px",
            borderBottom: "1px solid #f3f4f6",
            background: "#fafafa",
          }}
        >
          {["TIMESTAMP", "INPUT", "OUTPUT", "MODEL", "LATENCY", "COST", "SUCCESS RATE"].map((h) => (
            <span key={h} className="text-[9px] font-semibold tracking-wider" style={{ color: "#9ca3af" }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        <div className="flex-1 overflow-hidden">
          {traces.map((row, i) => (
            <div
              key={i}
              className="grid px-4 py-1.5"
              style={{
                gridTemplateColumns: "130px 1fr 1fr 90px 65px 65px 80px",
                borderBottom: "1px solid #f9fafb",
                background: row.fail ? "#fff5f5" : "transparent",
              }}
            >
              <span className="text-[10px] font-mono truncate" style={{ color: "#9ca3af" }}>{row.time}</span>
              <span className="text-[10px] font-mono truncate pr-2" style={{ color: "#374151" }}>{row.input}</span>
              <span className="text-[10px] font-mono truncate pr-2" style={{ color: "#9ca3af" }}>{row.output}</span>
              <div className="flex items-center gap-1">
                {row.model !== "—" && (
                  <span className="text-[9px] px-1 rounded" style={{ background: "#f3f4f6", color: "#6b7280" }}>+</span>
                )}
                <span className="text-[10px] font-mono truncate" style={{ color: "#6b7280" }}>{row.model}</span>
              </div>
              <span className="text-[10px] font-mono" style={{ color: "#6b7280" }}>{row.latency}</span>
              <span className="text-[10px] font-mono" style={{ color: "#6b7280" }}>{row.cost}</span>
              <span
                className="text-[10px] font-mono font-bold"
                style={{ color: row.success === 100 ? "#16a34a" : row.success === 0 ? "#dc2626" : "#d97706" }}
              >
                {row.success}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center pt-14" style={{ overflow: "visible" }}>
      {/* Background glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-12 max-w-4xl mx-auto"
      >
        {/* Announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" as const }}
          className="pill mb-8 cursor-pointer hover:border-white/20 transition-colors group"
        >
          <span className="text-accent-secondary text-xs">✦</span>
          <span>Introducing Forevr</span>
          <ArrowRight size={12} className="text-white/40 group-hover:text-white/70 transition-colors" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" as const }}
          className="text-6xl sm:text-7xl md:text-[5.5rem] font-bold tracking-tight leading-[1.03] gradient-text whitespace-nowrap"
        >
          Know what&apos;s wrong<br />before your users do.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
          className="mt-6 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Auto-discover failures, trace root causes, and validate agent quality —
          without writing a single eval first.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" as const }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="/contact"
            className="flex items-center gap-2 bg-white text-black font-medium rounded-lg px-6 py-2.5 text-sm hover:bg-white/90 transition-all active:scale-[0.98]"
          >
            Get to know more
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </motion.div>

      {/* Dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" as const }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          overflow: "visible",
          zIndex: 10,
        }}
      >
        {/* Layer 1 — ambient glow, behind everything */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "140%",
            height: "100%",
            background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(100,80,220,0.28) 0%, rgba(99,102,241,0.10) 45%, transparent 75%)",
            filter: "blur(100px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Layer 2 — dashboard (in-flow, defines the containing block height) */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}
        >
          <DashboardMockup />
        </div>

        {/* Layer 3 — bottom fade, sits ON TOP of the image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "24px",
            right: "24px",
            height: "45%",
            zIndex: 2,
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 65%, rgb(0,0,0) 100%)",
            pointerEvents: "none",
            borderRadius: "0 0 12px 12px",
          }}
        />
      </motion.div>


    </section>
  );
}
