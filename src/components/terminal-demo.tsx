"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "./ui/section-wrapper";

const GALLERY_ITEMS = [
  {
    src: "/divergence-demo.webp",
    alt: "Divergence workspace with multiple projects and AI agents",
    caption: "Workspace overview",
  },
  {
    src: "/divergence-demo-automations.webp",
    alt: "Divergence automations panel with scheduled agent prompts",
    caption: "Automations",
  },
  {
    src: "/divergence-demo-files-quick-look.webp",
    alt: "Divergence files quick look with code preview and workspaces",
    caption: "Files & Quick Look",
  },
];

export function TerminalDemo() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null
      ),
    []
  );

  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i + 1) % GALLERY_ITEMS.length : null
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      <SectionWrapper>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">See it in action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-subtext">
            Multiple projects, branches, and AI agents — all managed from a
            single workspace.
          </p>
        </div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <button
            onClick={() => setLightboxIndex(0)}
            className="group w-full overflow-hidden rounded-2xl border border-surface glow-gradient transition-all hover:border-lavender/40"
          >
            <Image
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].alt}
              width={1920}
              height={1080}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </button>
        </motion.div>

        {/* Thumbnail row */}
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className={`group w-full overflow-hidden rounded-xl border transition-all ${
                  i === 0
                    ? "border-lavender/40 ring-1 ring-lavender/20"
                    : "border-surface hover:border-lavender/40"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={360}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
              <p className="mt-2 text-center text-sm text-subtext">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-crust/90 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute right-4 top-4 rounded-full bg-surface/80 p-2 text-text transition-colors hover:bg-surface"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-3 text-text transition-colors hover:bg-surface"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-3 text-text transition-colors hover:bg-surface"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mx-16 max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                width={1920}
                height={1080}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-subtext">
                {GALLERY_ITEMS[lightboxIndex].caption}
                <span className="ml-2 text-overlay0">
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
