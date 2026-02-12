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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TerminalDemo />
        <Installation />
        <TechStack />
        <KeyboardShortcuts />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
