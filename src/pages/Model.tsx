
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Model = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-forest-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Integrated Farming Model</h1>
            <p className="text-lg text-gray-700 mb-6">
              Resilient Roots employs a closed-loop agricultural model that integrates livestock feedlots 
              with regenerative crop production, creating a sustainable system that restores soil health 
              while producing food and income for local communities.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How Our System Works</h2>
            
            <div className="space-y-16">
              {/* Section 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px]">
                  <div className="h-full bg-[url('https://images.unsplash.com/photo-1493962853295-0fd70327578a')] bg-cover bg-center"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sustainable Feedlots</h3>
                  <p className="text-gray-700 mb-4">
                    Our feedlot operations use locally-sourced feed and humane animal management practices 
                    to raise livestock while producing valuable manure for composting. This provides protein 
                    for local communities while supporting the crop production system.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Humane animal housing designed for arid environments</li>
                    <li>Water-efficient feeding systems</li>
                    <li>Prioritizing indigenous livestock breeds</li>
                    <li>Strategic manure collection for composting</li>
                  </ul>
                </div>
              </div>
              
              {/* Section 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Waste-to-Compost Conversion</h3>
                  <p className="text-gray-700 mb-4">
                    Our innovative composting system transforms animal waste and plant residues into 
                    nutrient-rich soil amendments. This diverts waste from becoming a pollutant and 
                    converts it into a valuable resource for crop production.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Aerobic composting techniques adapted to local climate</li>
                    <li>Youth training in composting science and management</li>
                    <li>Quality testing to ensure nutrient-rich outputs</li>
                    <li>120+ tons of compost produced annually</li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 bg-gray-200 rounded-lg overflow-hidden h-[300px]">
                  <div className="h-full bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center"></div>
                </div>
              </div>
              
              {/* Section 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px]">
                  <div className="h-full bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Regenerative Crop Production</h3>
                  <p className="text-gray-700 mb-4">
                    Using the rich compost produced on-site, we implement regenerative agriculture 
                    practices that restore soil health, increase water retention, and sequester 
                    carbon while producing nutritious food.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Polyculture planting to increase biodiversity</li>
                    <li>Cover cropping to prevent erosion</li>
                    <li>Minimal tillage to preserve soil structure</li>
                    <li>Focus on drought-resistant, native crop varieties</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Complete Cycle</h3>
              <p className="text-gray-700 mb-6">
                Our integrated model creates a virtuous cycle: livestock provide manure for composting, 
                which enriches soil for crops, which in turn can feed both people and animals. This 
                closed-loop system minimizes external inputs, reduces costs, and builds resilience 
                against climate uncertainty.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg">
                  <a href="/get-involved">Learn How to Participate</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Model;
