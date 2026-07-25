import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SDKPreview from "@/components/SDKPreview";
import IntelligenceLayer from "@/components/IntelligenceLayer";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SiteLines from "@/components/SiteLines";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="relative">
      <SiteLines />
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <SDKPreview />
        <SectionDivider />
        <IntelligenceLayer />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <FinalCTA />
      </main>
      <SectionDivider />
      <Footer />
    </div>
  );
}
