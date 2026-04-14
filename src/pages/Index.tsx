import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceAreas from '@/components/ServiceAreas';
import ContactSection from '@/components/ContactSection';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <BeforeAfterSection />
      <HowItWorks />
      <TestimonialsSection />
      <WhyChooseUs />
      <ServiceAreas />
      <ContactSection />
      <FAQSection />
      <CTABanner />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
