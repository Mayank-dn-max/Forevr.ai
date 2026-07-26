"use client";

import { GitFork, Share2, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const company = [
  { title: "About Us", href: "#" },
  { title: "Careers", href: "#" },
  { title: "Brand Assets", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
];

const resources = [
  { title: "Docs", href: "#" },
  { title: "Blog", href: "#" },
  { title: "GitHub", href: "#" },
  { title: "Discord", href: "#" },
  { title: "Status", href: "#" },
];

const socialLinks = [
  { icon: <GitFork className="size-4" />, href: "#", label: "GitHub" },
  { icon: <Share2 className="size-4" />, href: "#", label: "Twitter" },
  { icon: <MessageCircle className="size-4" />, href: "#", label: "Discord" },
];

const BORDER = "rgba(124,58,237,0.2)";
const TEXT_MUTED = "rgba(255,255,255,0.35)";
const TEXT_DIM = "rgba(255,255,255,0.18)";

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#000", position: "relative" }}>
      {/* Inner wrapper — margins match the 160px SiteLines strips so borders coincide */}
      <div
        style={{
          marginLeft: "160px",
          marginRight: "160px",
          borderLeft: `2.5px solid ${BORDER}`,
          borderRight: `2.5px solid ${BORDER}`,
          borderTop: `1px solid ${BORDER}`,
          /* Subtle indigo radial glow at top-left */
          background:
            "radial-gradient(35% 60% at 20% 0%, rgba(124,58,237,0.07) 0%, transparent 100%)",
        }}
      >
        {/* Main grid */}
        <div className="grid grid-cols-6 gap-6 p-8">
          {/* Brand column — spans 4 */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 w-max">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center text-accent-primary"
              >
                <Logo size={60} />
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">Forevr</span>
            </a>

            <p className="font-mono text-sm max-w-xs leading-relaxed" style={{ color: TEXT_MUTED }}>
              AI agent observability. Auto-discover failures before your users do.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="p-1.5 rounded-md transition-colors duration-150"
                  style={{
                    border: `1px solid ${BORDER}`,
                    color: TEXT_MUTED,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = TEXT_MUTED;
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="col-span-3 md:col-span-1">
            <span className="text-xs uppercase tracking-widest block mb-3" style={{ color: TEXT_DIM }}>
              Resources
            </span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }) => (
                <a
                  key={title}
                  href={href}
                  className="py-1 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: TEXT_MUTED }}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-span-3 md:col-span-1">
            <span className="text-xs uppercase tracking-widest block mb-3" style={{ color: TEXT_DIM }}>
              Company
            </span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }) => (
                <a
                  key={title}
                  href={href}
                  className="py-1 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: TEXT_MUTED }}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="px-8 py-4"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <p className="text-center text-sm font-thin" style={{ color: TEXT_DIM }}>
            © {year} Forevr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MinimalFooter;
