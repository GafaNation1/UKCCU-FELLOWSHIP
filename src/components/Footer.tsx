
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Faith Union</h3>
            <p className="mb-6 text-blue-100">
              Uniting students through faith, community, and service. Join us in our journey of spiritual growth and fellowship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/bible-study" className="hover:text-gold transition-colors">Bible Study</Link></li>
              <li><Link to="/prayer" className="hover:text-gold transition-colors">Prayer Wall</Link></li>
              <li><Link to="/get-involved" className="hover:text-gold transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Campus Drive, University Town</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@faithunion.org</span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-3 text-blue-100">Subscribe to our newsletter for updates</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full py-2 px-4 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button type="submit" className="w-full py-2 px-4 bg-gold text-primary font-medium rounded hover:bg-gold-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-blue-800" />
        
        <div className="text-center text-sm text-blue-200">
          <p>&copy; {new Date().getFullYear()} Faith Union. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            {" | "}
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
