import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { EgyptianPopup } from "@/components/EgyptianPopup";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchLatestProducts } from "@/lib/shopify";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const { data: featuredProducts, isLoading: loadingFeatured } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => fetchProducts(8),
  });

  const { data: latestProducts, isLoading: loadingLatest } = useQuery({
    queryKey: ['latest-products'],
    queryFn: () => fetchLatestProducts(8),
  });

  return (
    <>
      <Navbar />
      <EgyptianPopup />
      <OrganizationSchema
        name="Tumāninah Veritas Store"
        description="One Stop Store - Quality products, trusted service, modern lifestyle"
        url="https://eagles-veritas-shop.lovable.app"
        socialLinks={[
          "https://www.facebook.com/profile.php?id=61583352851718",
          "https://www.instagram.com/tumaninahveritasstore/",
          "https://www.tiktok.com/@tumaninah_veritas_store"
        ]}
        contactEmail="contact@tumaninahveritas.com"
      />
      <WebSiteSchema
        name="Tumāninah Veritas Store"
        url="https://eagles-veritas-shop.lovable.app"
        description="One Stop Store offering quality products with trusted service for a modern lifestyle"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${heroBanner})` }}
          />

          {/* Gradient overlay (subtle, not fully opaque) */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/60 dark:from-background/40 dark:via-background/25 dark:to-background/70 transition-opacity duration-500 group-hover:opacity-80" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-foreground animate-fade-in drop-shadow-lg">
              Tumāninah Veritas Store
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              One Stop Store - Quality products, trusted service, modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" asChild variant="ghost">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link to="/about">About Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Arrivals */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
                <Clock className="h-5 w-5 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground">NEW ARRIVALS</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Latest Products
              </h2>
              <p className="text-muted-foreground text-lg">
                Fresh additions to our collection
              </p>
            </div>
            
            {loadingLatest ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
              </div>
            ) : latestProducts && latestProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {latestProducts.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No new products yet</p>
              </div>
            )}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our handpicked selection of premium items
            </p>
          </div>
          
          {loadingFeatured ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : featuredProducts && featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.node.id} product={product} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <h2 className="text-muted-foreground text-lg mb-4 text-foreground">No products found</h2>
              <Button asChild variant="outline">
                <Link to="/shop">View All Products</Link>
              </Button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
                At Tumāninah Veritas Store, we believe in providing more than just products.
                We offer a curated experience of quality, trust, and modern living.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive offers and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background"
                required
              />
              <Button type="submit" size="lg">
                Subscribe <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Index;