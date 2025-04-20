
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ModelOverview() {
  return (
    <div className="py-16 bg-earth-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Integrated Farming Model</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A sustainable, closed-loop system combining feedlots with regenerative agriculture to maximize 
            yield while restoring the land.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-subtle text-center">
            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Feedlots</h3>
            <p className="text-gray-600">
              Sustainable livestock management providing organic manure for crop production while creating protein sources.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-subtle text-center">
            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Composting</h3>
            <p className="text-gray-600">
              Converting waste to nutrient-rich soil amendments, creating a circular nutrient system that reduces inputs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-subtle text-center">
            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Regenerative Crops</h3>
            <p className="text-gray-600">
              Diverse crop systems building soil health, increasing biodiversity, and sequestering carbon.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/model">Learn How It Works</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
