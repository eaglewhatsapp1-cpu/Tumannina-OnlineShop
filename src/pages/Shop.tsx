import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/shopify";
import { ShoppingBag } from "lucide-react";
import { BreadcrumbSchema } from "@/components/StructuredData";

const Shop = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: () => fetchProducts(50),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://eagles-veritas-shop.lovable.app" },
          { name: "Shop", url: "https://eagles-veritas-shop.lovable.app/shop" }
        ]}
      />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/15 to-accent/20 rounded-3xl mb-6 shadow-[var(--shadow-soft)]">
            <ShoppingBag className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of quality products
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-16">
            <div className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-gradient-to-br from-card to-card/80 rounded-3xl border-2 border-border shadow-[var(--shadow-medium)]">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-foreground mb-3">No Products Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our store is being set up. Please check back soon for our amazing products!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
