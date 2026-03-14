"use client";

import { SectionWrapper } from "./ui/section-wrapper";
import { FeatureCard } from "./ui/feature-card";
import { GradientText } from "./ui/gradient-text";
import { FEATURES } from "@/lib/constants";

export function AllFeatures() {
  return (
    <SectionWrapper className="pt-32">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          All <GradientText>Features</GradientText>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-subtext">
          Everything Divergence offers — from branch isolation and embedded
          terminals to AI agent workflows, PR review, and mobile access.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
