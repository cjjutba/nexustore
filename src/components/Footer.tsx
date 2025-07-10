import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">NexuStore</h3>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Your trusted online shopping destination with millions of products and unbeatable deals.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Customer Service</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">About</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About NexuStore</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press & News</Link></li>
              <li><Link to="/investors" className="hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Legal</h4>
            <ul className="space-y-3 text-base text-white/80">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-base">
            © 2025 NexuStore. All rights reserved. | Made with ❤️ for great shopping experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
