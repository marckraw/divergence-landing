"use client";

import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import { GradientText } from "./ui/gradient-text";
import { RELEASES_URL, REPO_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Ready to stop{" "}
          <GradientText>context-switching</GradientText>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-subtext">
          Download Divergence and give every branch its own workspace, terminal,
          and AI agent.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue to-lavender px-8 py-3.5 text-sm font-semibold text-base transition-all hover:shadow-lg hover:shadow-blue/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            Download for macOS
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-surface bg-mantle px-8 py-3.5 text-sm font-medium text-text transition-all hover:bg-surface/30 hover:border-surface-hover"
          >
            <Star className="w-4 h-4" />
            Star on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
