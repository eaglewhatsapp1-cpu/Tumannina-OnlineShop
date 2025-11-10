import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { fetchCollectionByHandle } from "@/lib/shopify";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import egyptianGoddess from "@/assets/egyptian-goddess.jpg";
import tutankhamunMask from "@/assets/tutankhamun-mask.jpg";
import tutankhamunThrone from "@/assets/tutankhamun-throne.jpg";

const CollectionDetail = () => {
  const { handle } = useParams<{ handle: string }>();

  const { data: collection, isLoading } = useQuery({
    queryKey: ['collection', handle],
    queryFn: () => handle ? fetchCollectionByHandle(handle, 50) : Promise.resolve(null),
    enabled: !!handle,
  });

  const isEgyptianHeritage = handle === "egyptian-heritage";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        {isEgyptianHeritage ? (
          <section className="relative py-20 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-3 h-full">
                <div 
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${egyptianGoddess})` }}
                />
                <div 
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${tutankhamunMask})` }}
                />
                <div 
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(${tutankhamunThrone})` }}
                />
              </div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
              <Button 
                variant="ghost" 
                asChild 
                className="mb-6"
              >
                <Link to="/collections">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Collections
                </Link>
              </Button>

              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold via-accent to-gold bg-clip-text text-transparent">
                  Inspired by the Land of Eternity
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
                  Authentic Egyptian Masterpieces
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Celebrate the Grand Egyptian Museum Opening with Handcrafted Art from the Heart of Egypt. 
                  Each piece in this collection tells a story of ancient craftsmanship and timeless beauty.
                </p>
              </div>

              {/* Featured Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                <div className="aspect-square rounded-lg overflow-hidden shadow-gold">
                  <img 
                    src={egyptianGoddess} 
                    alt="Egyptian Goddess" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-gold">
                  <img 
                    src={tutankhamunMask} 
                    alt="Tutankhamun Mask" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-gold">
                  <img 
                    src={tutankhamunThrone} 
                    alt="Tutankhamun Throne" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* About Section */}
              <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-card/50 backdrop-blur rounded-xl p-8 border border-border/50">
                  <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
                    About This Collection
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Egyptian Heritage Collection brings together the mystical allure of ancient Egypt 
                    with contemporary craftsmanship. Each piece is carefully selected to honor the rich 
                    cultural legacy of the pharaohs, featuring authentic designs inspired by artifacts 
                    from the Valley of the Kings, the Great Pyramids, and the newly opened Grand Egyptian Museum.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 container mx-auto px-4">
            <Button 
              variant="ghost" 
              asChild 
              className="mb-6"
            >
              <Link to="/collections">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collections
              </Link>
            </Button>
            
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {collection?.title || "Collection"}
              </h1>
              {collection?.description && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {collection.description}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Products Grid */}
        <section className="py-12 container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : collection && collection.products.edges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.products.edges.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                No products found in this collection
              </p>
              <Button asChild variant="outline">
                <Link to="/shop">Browse All Products</Link>
              </Button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CollectionDetail;
