"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    console.log("Sending email:", { title, body });
    alert("Message sent successfully!");
    setTitle("");
    setBody("");
  };

  return (
    <section id="contact" className="pt-40 pb-24 relative" style={{ background: "#000" }}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's connect
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(255,255,255,0.4)" }}>
            Have questions or want to see a custom demo? Send us a message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium text-white/80">Subject Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's this about?"
                required
                className="w-full bg-black border border-accent-primary/40 rounded-none px-4 py-5 text-white placeholder-white/20 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(124,58,237,0.6)] shadow-[0_0_10px_rgba(124,58,237,0.15)] transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="body" className="text-sm font-medium text-white/80">Message Body</label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Tell us what you're working on..."
                required
                rows={8}
                className="w-full bg-black border border-accent-primary/40 rounded-none px-4 py-5 text-white placeholder-white/20 focus:outline-none focus:border-accent-primary focus:shadow-[0_0_20px_rgba(124,58,237,0.6)] shadow-[0_0_10px_rgba(124,58,237,0.15)] transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-accent-primary hover:bg-accent-secondary hover:shadow-[0_0_25px_rgba(124,58,237,0.8)] text-white font-bold tracking-widest rounded-none px-6 py-5 transition-all duration-300 active:scale-[0.99]"
            >
              SEND
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
