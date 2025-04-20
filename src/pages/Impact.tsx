
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  name: string;
  age: number;
  quote: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amina",
    age: 24,
    quote: "Before joining Resilient Roots, I was a nomadic herder struggling in drought-prone conditions. Today, I manage 2 hectares of regenerative farmland, producing food for my community and earning a stable income.",
    role: "Youth Farmer",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
  },
  {
    id: 2,
    name: "Ibrahim",
    age: 22,
    quote: "The composting techniques I learned here have transformed how I see waste. What we once threw away now creates our richest soil. My crops are healthier, and I'm teaching others in my village.",
    role: "Compost Specialist",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
  },
  {
    id: 3,
    name: "Halima",
    age: 26,
    quote: "As a woman in agriculture, I faced many barriers. Resilient Roots provided training and a community that believes in me. Now I lead a team of 5 other women in our seedling nursery operation.",
    role: "Nursery Manager",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
  },
];

const Impact = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-forest-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Impact</h1>
            <p className="text-lg text-gray-700 mb-6">
              Since 2020, Resilient Roots has been working with communities in Northern Kenya to 
              develop sustainable agricultural systems that restore the land while creating 
              livelihoods. Here's how our work is making a difference.
            </p>
          </div>
        </div>
      </div>
      
      {/* Impact Metrics Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <span className="text-5xl font-bold text-primary block mb-2">50</span>
                  <h3 className="text-xl font-medium mb-2">Youth Trained</h3>
                  <p className="text-gray-600">Young farmers equipped with regenerative agriculture skills</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <span className="text-5xl font-bold text-primary block mb-2">5</span>
                  <h3 className="text-xl font-medium mb-2">Hectares Regenerated</h3>
                  <p className="text-gray-600">Previously degraded land now productive and sustainable</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <span className="text-5xl font-bold text-primary block mb-2">120+</span>
                  <h3 className="text-xl font-medium mb-2">Tons of Compost</h3>
                  <p className="text-gray-600">Organic waste converted to valuable soil amendments</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <span className="text-5xl font-bold text-primary block mb-2">30%</span>
                  <h3 className="text-xl font-medium mb-2">Yield Increase</h3>
                  <p className="text-gray-600">Average improvement in crop production using our methods</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Voices of Change</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden h-[400px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                    index === activeTestimonial 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-subtle">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                        <div>
                          <span className="font-bold">{testimonial.name}, {testimonial.age}</span>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === activeTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Before/After Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Land Transformation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px] mb-4">
                <div className="h-full bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Before: Degraded Land</h3>
              <p className="text-gray-700">
                Eroded soil with minimal vegetation and poor water retention, typical of overused 
                agricultural land in Northern Kenya.
              </p>
            </div>
            
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[300px] mb-4">
                <div className="h-full bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">After: Regenerated Ecosystem</h3>
              <p className="text-gray-700">
                The same plot after 2 years of regenerative practices, showing improved soil structure, 
                diverse vegetation, and productive crop growth.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a href="/get-involved">Join Our Efforts</a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Impact;
