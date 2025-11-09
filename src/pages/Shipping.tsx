import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Package, Clock, MapPin, DollarSign } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Shipping Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable delivery to your doorstep
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Processing Time</h3>
                <p className="text-muted-foreground">
                  Orders are typically processed within 1-2 business days. You'll receive a confirmation email once your order ships.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Delivery Time</h3>
                <p className="text-muted-foreground">
                  Standard delivery takes 3-7 business days. Express shipping options are available at checkout.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Shipping Areas</h3>
                <p className="text-muted-foreground">
                  We currently ship nationwide. International shipping is available for select countries.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Shipping Costs</h3>
                <p className="text-muted-foreground">
                  Shipping costs are calculated at checkout based on your location and order size. Free shipping on orders over $100.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-4">Order Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Once your order ships, you'll receive a tracking number via email. You can use this number to track your package's journey to your doorstep.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Shipping Partners</h2>
              <p className="text-muted-foreground leading-relaxed">
                We work with trusted shipping carriers to ensure your orders arrive safely and on time. Our partners include national and international courier services.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about shipping or need help tracking your order, please contact us at{" "}
                <a href="mailto:tumaninahveritasstore@gmail.com" className="text-primary hover:underline">
                  tumaninahveritasstore@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
