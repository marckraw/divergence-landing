import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { TerminalDemo } from "@/components/terminal-demo";
import { Installation } from "@/components/installation";
import { TechStack } from "@/components/tech-stack";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { getLatestRelease } from "@/lib/github";

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <>
      <Navbar downloadUrl={release.releasesUrl} />
      <main>
        <Hero version={release.version} downloadUrl={release.releasesUrl} />
        <Features />
        <HowItWorks />
        <TerminalDemo />
        <Installation assets={release.assets} />
        <TechStack />
        <KeyboardShortcuts />
        <CtaSection downloadUrl={release.releasesUrl} />
      </main>
      <Footer version={release.version} />
    </>
  );
}
