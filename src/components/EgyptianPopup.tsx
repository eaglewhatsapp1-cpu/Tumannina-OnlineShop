import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import egyptianGoddess from "@/assets/egyptian-goddess.jpg";

export const EgyptianPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastDismissed = localStorage.getItem("egyptianPopupDismissed");
    const now = Date.now();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

    if (!lastDismissed || now - parseInt(lastDismissed) > thirtyDays) {
      // Show popup after 1 second
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("egyptianPopupDismissed", Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl mx-4 bg-gradient-to-br from-card via-card to-secondary rounded-xl shadow-2xl overflow-hidden border border-border/50">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 text-foreground hover:bg-destructive/10"
          onClick={handleDismiss}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={egyptianGoddess}
              alt="Egyptian Heritage Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gold via-accent to-gold bg-clip-text text-transparent">
              Inspired by the Land of Eternity
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-3">
              Authentic Egyptian Masterpieces
            </p>
            <p className="text-base text-muted-foreground mb-6">
              Celebrate the Grand Egyptian Museum Opening with Handcrafted Art from the Heart of Egypt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 transition-opacity"
              >
                <Link to="/collections/egyptian-heritage" onClick={handleDismiss}>
                  Shop The Collection
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDismiss}
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
