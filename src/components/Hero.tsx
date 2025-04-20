
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative bg-forest-700 h-[90vh] min-h-[600px] flex items-center">
      <div className="hero-image absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            Cultivating Resilience, Harvesting Hope
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in" style={{animationDelay: "0.2s"}}>
            Youth-led regenerative agriculture transforming Northern Kenya through sustainable farming practices and empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{animationDelay: "0.4s"}}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/model">Learn Our Model</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
