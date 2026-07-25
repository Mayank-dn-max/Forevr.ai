"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

type FeatureStatus = boolean;

interface ComparisonRow {
  feature: string;
  langfuse: FeatureStatus;
  braintrust: FeatureStatus;
  langsmith: FeatureStatus;
  traceai: FeatureStatus;
  differentiator?: boolean;
}

const data: ComparisonRow[] = [
  {
    feature: "Traces + Spans",
    langfuse: true,
    braintrust: true,
    langsmith: true,
    traceai: true,
  },
  {
    feature: "Auto Problem Detection",
    langfuse: false,
    braintrust: false,
    langsmith: false,
    traceai: true,
    differentiator: true,
  },
  {
    feature: "Causal Root Cause",
    langfuse: false,
    braintrust: false,
    langsmith: false,
    traceai: true,
    differentiator: true,
  },
  {
    feature: "LLM-as-Judge Evals",
    langfuse: true,
    braintrust: true,
    langsmith: true,
    traceai: true,
  },
  {
    feature: "Any Framework SDK",
    langfuse: true,
    braintrust: true,
    langsmith: false,
    traceai: true,
  },
  {
    feature: "Cost Tracking",
    langfuse: true,
    braintrust: true,
    langsmith: true,
    traceai: true,
  },
];

function StatusIcon({
  status,
  isTraceAI = false,
}: {
  status: boolean;
  isTraceAI?: boolean;
}) {
  if (status) {
    return (
      <Check
        size={isTraceAI ? 18 : 16}
        className={`text-functional-success ${
          isTraceAI ? "" : ""
        }`}
      />
    );
  }
  return <X size={16} className="text-functional-danger" />;
}

export default function ComparisonMatrix() {
  const columns = ["Feature", "Langfuse", "Braintrust", "LangSmith", "Forevr"];

  return (
    <section id="comparison" className="bg-bg-secondary py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="eyebrow text-text-muted text-xs tracking-wider">
            COMPETITIVE EDGE
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-text-primary max-w-2xl mx-auto">
            What others make you do manually, we do automatically.
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass rounded-xl overflow-hidden border border-border-default"
        >
          <div className="overflow-x-auto">
            {/* Header Row */}
            <div className="bg-bg-elevated px-6 py-4 grid grid-cols-5 min-w-[600px]">
              {columns.map((col, i) => (
                <div
                  key={col}
                  className={`text-xs uppercase tracking-wider text-text-muted font-medium ${
                    i === 0 ? "text-left" : "text-center"
                  } ${
                    i === 4
                      ? "text-text-primary border-l-2 border-border-hover pl-4"
                      : ""
                  }`}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {data.map((row, rowIndex) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: rowIndex * 0.05 }}
                className={`px-6 py-4 grid grid-cols-5 border-t border-black/[0.06] hover:bg-bg-elevated/50 transition-colors min-w-[600px]`}
              >
                <div className="text-sm text-text-primary font-medium">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.langfuse} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.braintrust} />
                </div>
                <div className="flex justify-center">
                  <StatusIcon status={row.langsmith} />
                </div>
                <div
                  className={`flex justify-center border-l-2 border-border-hover pl-4 ${
                    row.differentiator ? "bg-accent-dim" : ""
                  }`}
                >
                  <StatusIcon status={row.traceai} isTraceAI />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
