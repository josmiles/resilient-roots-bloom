
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "From Barren to Bountiful: Our Soil Restoration Journey",
    excerpt: "How we transformed depleted soil into productive farmland using regenerative practices.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    date: "June 15, 2024",
    category: "Permaculture",
  },
  {
    id: 2,
    title: "Youth Spotlight: Amina's Path to Agricultural Leadership",
    excerpt: "Meet Amina, a 24-year-old who went from pastoralist to regenerative farming expert.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    date: "May 28, 2024",
    category: "Youth Stories",
  },
  {
    id: 3,
    title: "The Secret Life of Compost: Beyond Waste Management",
    excerpt: "Dive into the microbial world of compost and how it transforms our agricultural outcomes.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    date: "May 10, 2024",
    category: "Technology",
  },
  {
    id: 4,
    title: "Community Spotlight: Marsabit Women's Cooperative",
    excerpt: "How local women are leading innovation in seed saving and plant propagation.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    date: "April 22, 2024",
    category: "Community",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-forest-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
            <p className="text-lg text-gray-700 mb-6">
              Stories from the field, farmer spotlights, and updates on our regenerative 
              agriculture practices in Northern Kenya.
            </p>
          </div>
        </div>
      </div>
      
      {/* Blog Posts */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline">
                    <a href={`/blog/${post.id}`}>Read More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
