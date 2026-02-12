"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { GradientText } from "./ui/gradient-text";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <GradientText>Three steps</GradientText> to parallel development
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          Get from zero to multiple parallel workstreams in under a minute.
        </p>
      </div>

      <div className="relative">
        {/* Connecting gradient line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue via-lavender to-green md:block" />

        <div className="grid gap-12 md:gap-16">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex items-center gap-8 md:gap-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="mb-2 font-mono text-sm text-blue">{step.number}</div>
                <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-subtext">{step.description}</p>
              </div>

              {/* Center dot */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue bg-base">
                <span className="text-sm font-bold text-blue">{step.number}</span>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
