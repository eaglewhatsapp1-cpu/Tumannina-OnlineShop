import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, X } from "lucide-react";

// TikTok Icon Component (since lucide-react doesn't have it)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 256 256"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t bg-card/50 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-gold bg-clip-text leading-tight">
                Tumāninah Veritas
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              One Stop Store for premium artisan products, authentic Egyptian heritage pieces, and modern smart home solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Serving customers worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:support@tumaninahveritas.com" 
                  className="hover:text-primary transition-colors"
                >
                  support@tumaninahveritas.com
                </a>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/shop" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/egyptian-heritage" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                >
                  Egyptian Heritage
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/free-gifts" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                >
                  Free Gifts ($50+)
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/wooden-coasters" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Wooden Coasters
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link 
                  to="/refund" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link 
                  to="/pages/155371274550" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Legal & Connect</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/pages/155325530422" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  Your Privacy Choices
                </Link>
              </li>
            </ul>
            
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61583352851718" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/tumaninahveritasstore/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#E4405F] transition-colors"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@tumaninah_veritas_store" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground dark:hover:text-[#EE1D52] transition-colors"
                  aria-label="Visit our TikTok page"
                >
                  <TikTokIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Tumāninah Veritas - One Stop Store. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>🇪🇬 Proudly featuring Egyptian Heritage</span>
              <span>•</span>
              <span>🌍 Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
