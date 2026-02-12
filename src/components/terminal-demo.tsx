"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { TERMINAL_LINES } from "@/lib/constants";

export function TerminalDemo() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          See it in action
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          AI agents run in isolated workspaces while you keep coding. No
          context-switching required.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <div className="overflow-hidden rounded-2xl border border-surface glow-gradient">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-surface bg-mantle px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red/80" />
            <div className="h-3 w-3 rounded-full bg-yellow/80" />
            <div className="h-3 w-3 rounded-full bg-green/80" />
            <span className="ml-3 text-xs text-subtext font-mono">
              divergence — feat/auth
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-base p-5 font-mono text-sm leading-relaxed">
            {TERMINAL_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="min-h-[1.5em]"
              >
                {line.prompt && (
                  <span className="text-lavender">~ </span>
                )}
                {line.prompt && line.text === "" ? (
                  <span className="inline-block w-2 h-4 bg-text/70 cursor-blink align-text-bottom" />
                ) : (
                  <span
                    className={
                      line.prompt
                        ? "text-text"
                        : "color" in line && line.color === "green"
                          ? "text-green"
                          : "color" in line && line.color === "blue"
                            ? "text-blue"
                            : "text-subtext"
                    }
                  >
                    {line.text}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
