import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { AllFeatures } from "@/components/all-features";
import { TechStack } from "@/components/tech-stack";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { getLatestRelease } from "@/lib/github";

export const metadata: Metadata = {
  title: "Features — Divergence",
  description:
    "Explore every feature of Divergence: isolated divergences, embedded terminals, multi-provider agent runtime, GitHub PR Hub, automations, and more.",
};

export default async function FeaturesPage() {
  const release = await getLatestRelease();

  return (
    <>
      <Navbar downloadUrl={release.releasesUrl} />
      <main>
        <AllFeatures />
        <KeyboardShortcuts />
        <TechStack />
        <CtaSection downloadUrl={release.releasesUrl} />
      </main>
      <Footer version={release.version} />
    </>
  );
}
