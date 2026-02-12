"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./ui/section-wrapper";
import { GradientText } from "./ui/gradient-text";
import { KEYBOARD_SHORTCUTS } from "@/lib/constants";

function Kbd({ children }: { children: string }) {
  return (
    <kbd className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-md border border-surface-hover bg-surface px-2 font-mono text-xs font-medium text-text shadow-sm">
      {children === "Cmd" ? "\u2318" : children === "Shift" ? "\u21E7" : children}
    </kbd>
  );
}

export function KeyboardShortcuts() {
  return (
    <SectionWrapper>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <GradientText>Keyboard-first</GradientText> workflow
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          Navigate your entire workspace without touching the mouse.
        </p>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        {KEYBOARD_SHORTCUTS.map((shortcut, i) => (
          <motion.div
            key={shortcut.action}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-center justify-between rounded-xl border border-surface bg-mantle px-4 py-3"
          >
            <span className="text-sm text-subtext">{shortcut.action}</span>
            <div className="flex items-center gap-1">
              {shortcut.keys.map((key) => (
                <Kbd key={key}>{key}</Kbd>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
