import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <PlansSection />
        <FeaturesSection />
        <StatsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
