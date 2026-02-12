"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <h2 className="mb-8 text-xl font-semibold text-subtext">Built with</h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-full border border-surface bg-mantle px-4 py-2 text-sm font-medium text-text transition-colors hover:border-blue/40 hover:bg-blue/5"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
