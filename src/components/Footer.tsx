import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-university-navy text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-university-gold">Contact Us</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-university-gold" />
              <span>christopher@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-university-gold" />
              <span>+254 796 066551</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20">
            <p className="text-sm text-gray-300">
              © 2025 Lukenya University. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;