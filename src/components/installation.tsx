"use client";

import { useState } from "react";
import { SectionWrapper } from "./ui/section-wrapper";
import { CodeBlock } from "./ui/code-block";
import { GradientText } from "./ui/gradient-text";
import { INSTALL_GITHUB, INSTALL_SOURCE } from "@/lib/constants";

const TABS = [
  { id: "releases", label: "GitHub Releases" },
  { id: "source", label: "Build from Source" },
] as const;

export function Installation() {
  const [activeTab, setActiveTab] = useState<"releases" | "source">("releases");

  return (
    <SectionWrapper id="install">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <GradientText>Install</GradientText> Divergence
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          Currently macOS only — Apple Silicon and Intel supported.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl border border-surface bg-mantle p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-surface text-text"
                  : "text-subtext hover:text-text"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "releases" ? (
          <CodeBlock code={INSTALL_GITHUB} />
        ) : (
          <CodeBlock code={INSTALL_SOURCE} />
        )}

        <p className="mt-4 text-center text-xs text-subtext/60">
          Requires macOS 12+ · Xcode Command Line Tools for building from source
        </p>
      </div>
    </SectionWrapper>
  );
}
