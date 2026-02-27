"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";
import { REPO_URL } from "@/lib/constants";
import { GradientText } from "./ui/gradient-text";

interface HeroProps {
  version: string;
  downloadUrl: string;
}

export function Hero({ version, downloadUrl }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface bg-mantle px-4 py-1.5 text-sm text-subtext"
          >
            <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
            v{version} - Redesigned settings, prompt queue, and streamlined layout
          </motion.div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            One Desktop.{" "}
            <GradientText>Every Branch.</GradientText>
            <br />
            All Your Agents.
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-subtext md:text-xl">
            Stop juggling terminal windows and losing context. Divergence gives
            you branch-isolated clones, embedded terminals, and
            AI&nbsp;agent orchestration — with cross-repo automations triggered by PR merges — in one native desktop app.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={downloadUrl}
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
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>

          {/* Platform note */}
          <p className="mt-6 text-xs text-subtext/60">
            macOS only — Apple Silicon + Intel supported
          </p>
        </motion.div>
      </div>
    </section>
  );
}
