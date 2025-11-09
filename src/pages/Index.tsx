import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";

const Index = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(8),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <img 
            src={heroBanner}
            alt="Eagles One Store - Tumāninah Veritas banner showcasing quality products and modern lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
          
          <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                Eagles One Store
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80 mb-2 italic font-light">
                Tumāninah Veritas
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                One Stop Store - Quality products, trusted service, modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-gold-foreground shadow-[var(--shadow-gold)]"
                  asChild
                >
                  <Link to="/shop">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Now
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <Link to="/about">
                    About Our Philosophy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-muted-foreground">Discover our curated collection</p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Products Yet</h3>
              <p className="text-muted-foreground mb-4">
                We're setting up our inventory. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Eagles One Store, we believe in the power of calmness, faith, and trust. 
                Our curated selection reflects a modern lifestyle built on quality and integrity. 
                We're more than a store - we're your partner in discovering products that enhance your life.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-12 text-center shadow-[var(--shadow-soft)]">
              <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive updates on new products, exclusive offers, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
