import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SiteLines from "@/components/SiteLines";
import SectionDivider from "@/components/SectionDivider";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteLines />
      <Navigation />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SectionDivider />
      <Footer />
    </div>
  );
}
