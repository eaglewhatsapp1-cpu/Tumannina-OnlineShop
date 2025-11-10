import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { ShoppingBag, Grid3x3, Package } from "lucide-react";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['collections-products'],
    queryFn: () => fetchProducts(50),
  });

  // Extract unique categories from products (using product title as collection)
  const categories = useMemo(() => {
    const types = new Set<string>();
    products.forEach(product => {
      // Use the first few words of the product title as the category
      const title = product.node.title;
      // Extract category from title (e.g., "Living Room..." -> "Living Room")
      const category = title.split(' ').slice(0, 2).join(' ');
      if (category) types.add(category);
    });
    return Array.from(types).filter(Boolean).sort();
  }, [products]);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter(product => {
      const title = product.node.title;
      const category = title.split(' ').slice(0, 2).join(' ');
      return category === selectedCategory;
    });
  }, [products, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://eagles-veritas-shop.lovable.app" },
          { name: "Collections", url: "https://eagles-veritas-shop.lovable.app/collections" }
        ]}
      />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/15 to-accent/20 rounded-3xl mb-6 shadow-[var(--shadow-soft)]">
            <Grid3x3 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of quality products organized by category
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-primary hover:bg-primary-hover" : ""}
              >
                <Package className="h-4 w-4 mr-2" />
                All Products ({products.length})
              </Button>
              {categories.map(category => {
                const count = products.filter(p => {
                  const title = p.node.title;
                  const cat = title.split(' ').slice(0, 2).join(' ');
                  return cat === category;
                }).length;
                return (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary hover:bg-primary-hover" : ""}
                  >
                    {category} ({count})
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-muted-foreground">Loading collections...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gradient-to-br from-card to-card/80 rounded-3xl border-2 border-border shadow-[var(--shadow-medium)]">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              {selectedCategory === "all" ? "No Products Found" : "No Products in This Collection"}
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              {selectedCategory === "all" 
                ? "Our store is being set up. Please check back soon for our amazing products!" 
                : "This collection is currently empty. Try selecting a different category."}
            </p>
            {selectedCategory !== "all" && (
              <Button onClick={() => setSelectedCategory("all")} className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary">
                View All Products
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
