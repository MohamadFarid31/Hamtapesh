import HeroSection from "./components/landing/HeroSection";
import HealthSection from "./components/landing/HealthSection";
import FeaturesSection from "./components/landing/FeaturesSection";

export const dynamic = "force-dynamic";

export default async function Landing() {
  return (
    <main>
      <HeroSection />
      <HealthSection />
      <FeaturesSection />
    </main>
  );
}
