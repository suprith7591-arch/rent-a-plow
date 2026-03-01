import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Categories from "@/components/landing/Categories";
import SmartFeatures from "@/components/landing/SmartFeatures";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import CostCalculator from "@/components/landing/CostCalculator";
import AIRecommendation from "@/components/landing/AIRecommendation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <HowItWorks />
      <Categories />
      <SmartFeatures />
      <Stats />
      <CostCalculator />
      <AIRecommendation />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;
