import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#304a5b] text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Brand Info */}
        <div>
          <img src="/dubey.webp" alt="Dubey Construction Logo" className="h-16 mb-4" />
          <p className="text-[#d1b85b] text-base font-semibold mb-2">Dubey Construction India</p>
          <p className="text-gray-400">
            Building tomorrow’s legacy today. We deliver excellence in civil and structural projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-[#d1b85b] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-[#d1b85b]">Home</Link></li>
            <li><Link to="/reach-out" className="hover:text-[#d1b85b]">Reach Out</Link></li>
            <li><Link to="/location" className="hover:text-[#d1b85b]">Location</Link></li>
            <li><Link to="/newsroom" className="hover:text-[#d1b85b]">Newsroom</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-[#d1b85b] mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/sectors/buildings" className="hover:text-[#d1b85b]">Buildings</Link></li>
            <li><Link to="/sectors/civil" className="hover:text-[#d1b85b]">Civil</Link></li>
            <li><Link to="/sectors/industrial" className="hover:text-[#d1b85b]">Industrial</Link></li>
            <li><Link to="/who-we-are/privacy-policy" className="hover:text-[#d1b85b]">Privacy Policy</Link></li>
            <li><Link to="/ethics" className="hover:text-[#d1b85b]">Ethics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-[#d1b85b] mb-4">Reach Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-[#d1b85b]" />
              <span>123 Elite Avenue, Lane 21, Bhopal, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#d1b85b]" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#d1b85b]" />
              <span>info@dubeyconstruction.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Dubey Construction India. All rights reserved.</p>
        
        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#d1b85b] transition"><Facebook size={18} /></a>
          <a href="#" className="hover:text-[#d1b85b] transition"><Instagram size={18} /></a>
          <a href="#" className="hover:text-[#d1b85b] transition"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-[#d1b85b] transition"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
