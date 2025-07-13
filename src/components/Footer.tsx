import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6 text-white">NexuStore</h3>
            <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              Your trusted online shopping destination with millions of products and unbeatable deals.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 text-white text-base sm:text-lg">Customer Service</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
              <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 text-white text-base sm:text-lg">About</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About NexuStore</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press & News</Link></li>
              <li><Link to="/investors" className="hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 lg:mb-6 text-white text-base sm:text-lg">Legal</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            © 2025 NexuStore. All rights reserved. | Made with ❤️ for great shopping experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
