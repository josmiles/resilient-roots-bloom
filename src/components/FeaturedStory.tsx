
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FeaturedStory() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">From Herder to Sustainable Farmer</h2>
            <p className="text-lg text-gray-700 mb-6">
              "Before joining Resilient Roots, I was a nomadic herder struggling in drought-prone conditions. 
              Today, I manage 2 hectares of regenerative farmland, producing food for my community and earning 
              a stable income. This project gave me a livelihood I never thought possible."
            </p>
            <div className="mb-8">
              <span className="font-bold">- Amina, 24</span>
              <p className="text-sm text-gray-500">Youth Farmer, Marsabit County</p>
            </div>
            <Button asChild>
              <Link to="/stories">Read More Stories</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 bg-gray-200 rounded-lg overflow-hidden h-[400px]">
            <div className="h-full bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
