
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const GetInvolved = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setName("");
    setEmail("");
    setMessage("");
    setInterest("");
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-forest-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
            <p className="text-lg text-gray-700 mb-6">
              There are many ways to support and participate in the Resilient Roots project. 
              Whether you're a potential donor, partner organization, or community member, 
              we welcome your involvement.
            </p>
          </div>
        </div>
      </div>
      
      {/* Ways to Get Involved */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How You Can Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Donate</CardTitle>
                <CardDescription>Support our work financially</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Your donation helps us expand our training programs, purchase equipment, and 
                  develop more land using regenerative practices.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>One-time donations</li>
                  <li>Monthly giving program</li>
                  <li>Corporate sponsorships</li>
                  <li>Equipment donations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <a href="/donate">Donate Now</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Volunteer</CardTitle>
                <CardDescription>Share your skills and time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  We welcome volunteers with diverse skills, from agricultural expertise to 
                  education, marketing, and community organizing.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>On-site farming assistance</li>
                  <li>Training and education</li>
                  <li>Digital content creation</li>
                  <li>Community outreach</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact-form">Volunteer with Us</a>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Partner</CardTitle>
                <CardDescription>Collaborate with us</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  We actively seek partnerships with organizations that share our vision for 
                  sustainable agriculture and community empowerment.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>NGOs and community groups</li>
                  <li>Research institutions</li>
                  <li>Corporate social responsibility</li>
                  <li>Government agencies</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href="#contact-form">Become a Partner</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <div className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Community Training Day</CardTitle>
                <CardDescription>July 15, 2024 • 9:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Join us for a hands-on training session on composting techniques and soil health management. 
                  Open to all community members.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Register</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Partners Workshop</CardTitle>
                <CardDescription>August 5, 2024 • 10:00 AM - 2:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A collaborative session for organizations interested in partnering with Resilient Roots. 
                  Learn about our model and explore collaboration opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Register</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="interest" className="block font-medium">
                  I'm interested in:
                </label>
                <select
                  id="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="donating">Donating</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="partnership">Partnership</option>
                  <option value="training">Training Programs</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how you'd like to get involved..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
