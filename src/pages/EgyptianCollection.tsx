import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";

const EgyptianCollection = () => {
  // Fetch products from the Egyptian collection
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['egyptian-collection'],
    queryFn: () => fetchProducts(6),
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section with Video Placeholder */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#0d47a1] to-[#01579b]" />
          
          {/* Hieroglyphic Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          {/* Golden Light Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-[#ffd700]/20 via-transparent to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffd700]/10 border border-[#ffd700]/30 rounded-full mb-8 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-[#ffd700]" />
                <span className="text-[#ffd700] font-medium">The Eternal Egypt Collection</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Inspired by the Land of Eternity
              </h1>
              <p className="text-2xl md:text-3xl text-[#ffd700] mb-4 font-light italic">
                Authentic Egyptian Masterpieces
              </p>
              
              {/* Subheadline */}
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Celebrate the Grand Egyptian Museum Opening with Handcrafted Art from the Heart of Egypt
              </p>

              {/* Video Placeholder */}
              <div className="relative aspect-video max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffd700]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#0d47a1] flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 text-[#ffd700] mx-auto mb-4 animate-pulse" />
                    <p className="text-white/80 text-lg">Video Showcase Coming Soon</p>
                    <p className="text-white/60 text-sm mt-2">Egyptian Heritage & Modern Art</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg"
                className="bg-[#ffd700] hover:bg-[#ffd700]/90 text-[#1a237e] font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
                asChild
              >
                <Link to="/collections">
                  Shop The Collection
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* About the Collection */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-[#ffd700]/10 rounded-2xl mb-6">
                <Sparkles className="h-8 w-8 text-[#ffd700]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                The Authenticity & Inspiration
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Each piece in The Eternal Egypt Collection is a tribute to the timeless artistry of Egyptian civilization. 
                Handcrafted by skilled artisans in the heart of Egypt, these masterpieces blend ancient techniques with 
                contemporary design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the mystical symbolism of hieroglyphs to the golden beauty of pharaonic art, every item tells a 
                story of heritage, craftsmanship, and eternal beauty. Celebrate the opening of the Grand Egyptian Museum 
                with pieces that connect you to 5,000 years of history.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Masterpieces
            </h2>
            <p className="text-muted-foreground">Discover authentic Egyptian artistry</p>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#ffd700] border-r-transparent mb-4"></div>
              <p className="text-muted-foreground">Loading collection...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <Sparkles className="h-16 w-16 text-[#ffd700] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Collection Coming Soon</h3>
              <p className="text-muted-foreground">
                Our Egyptian masterpieces are being curated. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.slice(0, 6).map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-br from-[#1a237e]/10 via-[#0d47a1]/10 to-[#01579b]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm rounded-3xl border border-[#ffd700]/20 p-8 md:p-12 text-center shadow-2xl">
              <div className="inline-flex items-center justify-center p-4 bg-[#ffd700]/10 rounded-2xl mb-6">
                <Mail className="h-12 w-12 text-[#ffd700]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Join the Tribe of Eternal Beauty
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Be the first to discover new pieces, exclusive collections, and special offers from the heart of Egypt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 h-12 border-[#ffd700]/30 focus:border-[#ffd700] transition-colors"
                />
                <Button className="bg-[#ffd700] hover:bg-[#ffd700]/90 text-[#1a237e] font-bold h-12 px-8">
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

export default EgyptianCollection;
