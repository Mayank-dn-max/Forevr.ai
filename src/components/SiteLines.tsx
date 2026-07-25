"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "sdk-preview", "intelligence", "how-it-works", "final-cta"];

export default function SiteLines() {
  const [pageHeight, setPageHeight] = useState(4000);
  const [nodeTops, setNodeTops] = useState<number[]>([]);

  useEffect(() => {
    const update = () => {
      setPageHeight(document.documentElement.scrollHeight);

      const tops = SECTION_IDS.flatMap((id) => {
        const el = document.getElementById(id);
        if (!el) return [];
        return [el.getBoundingClientRect().top + window.scrollY];
      });
      // also add the very bottom of the page
      tops.push(document.documentElement.scrollHeight - 1);
      setNodeTops(tops);
    };

    // small delay so all sections have rendered
    const t = setTimeout(update, 200);
    const ro = new ResizeObserver(update);
    ro.observe(document.body);
    return () => {
      clearTimeout(t);
      ro.disconnect();
    };
  }, []);

  const Line = ({ side }: { side: "left" | "right" }) => (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        [side]: 0,
        width: "160px",
        background: "#0C0C12",
        borderRight: side === "left" ? "1px solid rgba(255,255,255,0.05)" : "none",
        borderLeft: side === "right" ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      {nodeTops.map((top, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top,
            [side === "left" ? "right" : "left"]: "-2px",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "rgba(99,102,241,0.35)",
            transform: "translateY(-50%)",
          }}
        />
      ))}
    </div>
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      style={{ zIndex: 1 }}
    >
      <Line side="left" />
      <Line side="right" />
    </div>
  );
}
