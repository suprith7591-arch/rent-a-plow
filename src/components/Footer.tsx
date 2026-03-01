import { Tractor } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <Tractor className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">AgriRent</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Empowering farmers with affordable access to modern agricultural machinery across India.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Platform</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <Link to="/equipment" className="block hover:text-primary-foreground transition-colors">Browse Equipment</Link>
            <Link to="/login" className="block hover:text-primary-foreground transition-colors">List Your Machine</Link>
            <span className="block">How It Works</span>
            <span className="block">Pricing</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Support</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <span className="block">Help Center</span>
            <span className="block">Safety Guidelines</span>
            <span className="block">Insurance Info</span>
            <span className="block">Contact Us</span>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <span className="block">📞 1800-AGRI-RENT</span>
            <span className="block">✉️ hello@agrirent.in</span>
            <span className="block">📍 Pune, Maharashtra</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © 2026 AgriRent. Made with ❤️ for Indian Farmers. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
