
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import ModelOverview from "@/components/ModelOverview";
import FeaturedStory from "@/components/FeaturedStory";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <ModelOverview />
      <FeaturedStory />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
