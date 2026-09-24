import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FooterCtaSection } from "@/components/landing/FooterCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FloatingDock } from "@/components/layout/FloatingDock";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,hsl(210_100%_55%_/_0.14),transparent_32%),linear-gradient(135deg,transparent_35%,hsl(160_84%_39%_/_0.06))]" />
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <EcosystemSection />
      <TestimonialsSection />
      <FooterCtaSection />
      <FloatingDock />
    </main>
  );
}
