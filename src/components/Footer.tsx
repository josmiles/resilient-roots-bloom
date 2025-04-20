
import { Link } from "react-router-dom";
import { MapPin, Mail, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resilient Roots</h3>
            <p className="mb-4 text-gray-200">
              Empowering youth through regenerative agriculture and sustainable farming practices in Northern Kenya.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/model" className="text-gray-200 hover:text-white transition-colors">
                  Our Model
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-200 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-200 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span>Northern Kenya, Marsabit County</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:contact@resilientroots.org" className="hover:underline">
                  contact@resilientroots.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-secondary" />
                <span>Training sessions: Every Saturday</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-500 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Resilient Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
