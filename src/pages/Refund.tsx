import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RotateCcw, CheckCircle, AlertCircle, Calendar } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Refund Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your satisfaction is our priority
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">30-Day Returns</h3>
                <p className="text-muted-foreground">
                  You have 30 days from the date of delivery to request a return or refund for eligible items.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Eligible Items</h3>
                <p className="text-muted-foreground">
                  Items must be unused, in original packaging, and in the same condition as received to qualify for a refund.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Refund Process</h3>
                <p className="text-muted-foreground">
                  Once we receive and inspect your return, we'll process your refund within 5-7 business days.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-6 shadow-[var(--shadow-soft)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Non-Returnable</h3>
                <p className="text-muted-foreground">
                  Final sale items, opened hygiene products, and personalized items cannot be returned.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-4">How to Request a Refund</h2>
              <ol className="text-muted-foreground leading-relaxed space-y-2">
                <li>Contact our customer service team at tumaninahveritasstore@gmail.com</li>
                <li>Provide your order number and reason for return</li>
                <li>Wait for return authorization and instructions</li>
                <li>Ship the item back using the provided return label</li>
                <li>Receive your refund once the return is processed</li>
              </ol>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you need to exchange an item for a different size or color, please contact us. We'll be happy to help you find the perfect replacement.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Damaged or Defective Items</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you receive a damaged or defective item, please contact us immediately with photos. We'll arrange a replacement or full refund at no additional cost to you.
              </p>

              <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions about our refund policy, please reach out to{" "}
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

export default Refund;
