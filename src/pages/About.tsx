import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Eagles One Store
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              Tumāninah Veritas - Calmness and Truth in Every Purchase
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eagles One Store was born from a simple philosophy: that shopping should be an experience 
                built on trust, quality, and authenticity. We believe in the power of calmness (Tumāninah) 
                and truth (Veritas) to transform the way you discover and purchase products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As your one-stop store, we curate a collection that reflects modern lifestyle needs while 
                maintaining traditional values of integrity and excellence. Every product is chosen with 
                care, every interaction designed with respect, and every delivery made with pride.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Our Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-gold)] transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Calmness</h3>
                <p className="text-muted-foreground">
                  We create a peaceful shopping experience, free from pressure and filled with trust.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-gold)] transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  Every product is verified for quality, every promise kept, every customer valued.
                </p>
              </div>

              <div className="bg-card rounded-lg border border-border p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-gold)] transition-shadow">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We curate only the finest products that enhance your modern lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To become the most trusted one-stop store, where quality meets convenience, 
              and every customer finds exactly what they need with complete peace of mind. 
              We're building more than a store - we're building a community based on faith, 
              authenticity, and shared values.
            </p>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Discover Our Products
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Explore our curated collection of quality products selected with care for your modern lifestyle.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/shop">
                Shop Now
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
