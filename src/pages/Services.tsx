import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gift, Building2, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customized solutions for your unique needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Orders</h3>
              <p className="text-muted-foreground mb-4">
                Can't find exactly what you're looking for? We'll source it for you.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Gift Cards</h3>
              <p className="text-muted-foreground mb-4">
                Perfect gifts for any occasion. Available in various denominations.
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)]">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Corporate Offers</h3>
              <p className="text-muted-foreground mb-4">
                Bulk orders and special pricing for businesses and organizations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card rounded-lg border border-border p-8 shadow-[var(--shadow-soft)]">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              Request a Service
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Service Type
                </label>
                <Input placeholder="e.g., Custom Order, Gift Card, Corporate" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  rows={5}
                />
              </div>
              
              <Button 
                className="w-full bg-gold hover:bg-gold/90 text-gold-foreground" 
                size="lg"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
