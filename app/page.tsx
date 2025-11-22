import HeroSection from "./components/landing/HeroSection";
import HealthSection from "./components/landing/HealthSection";

export const dynamic = "force-dynamic";

export default async function Landing() {
  return (
    <main>
      <HeroSection />
      <HealthSection />
    </main>
  );
}
