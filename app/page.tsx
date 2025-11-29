import HeroSection from "./components/landing/HeroSection";
import HealthSection from "./components/landing/HealthSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import AboutUsSection from "./components/landing/AboutUsSection";
import DownloadSection from "./components/landing/DownloadSection";

export const dynamic = "force-dynamic";

export default async function Landing() {
  return (
    <main>
      <HeroSection />
      <HealthSection />
      <FeaturesSection />
      <AboutUsSection />
      <DownloadSection />
    </main>
  );
}
