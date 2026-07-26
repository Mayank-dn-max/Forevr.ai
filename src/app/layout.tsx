import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Forevr",
  description:
    "The only observability tool that finds agent failures you didn't know to look for. Auto-discovery, causal root cause, and framework-agnostic tracing.",
  openGraph: {
    title: "Forevr",
    description:
      "The only observability tool that finds agent failures you didn't know to look for. Auto-discovery, causal root cause, and framework-agnostic tracing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${dmMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans" style={{ background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
