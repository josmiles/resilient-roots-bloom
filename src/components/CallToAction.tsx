
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="py-16 bg-forest-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Whether you're a potential donor, partner, or community member, there are many ways to 
            support regenerative agriculture in Northern Kenya.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/get-involved">Volunteer</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/get-involved">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
