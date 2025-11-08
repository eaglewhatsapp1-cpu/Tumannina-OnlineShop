import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Eagles One Store</h3>
            <p className="text-sm text-muted-foreground italic">Tumāninah Veritas</p>
            <p className="text-sm text-muted-foreground">
              One Stop Store - Quality, trust, and modern lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">support@eaglesonestore.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eagles One Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
