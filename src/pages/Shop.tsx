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
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Shop</h1>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of quality products
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-lg border border-border">
            <ShoppingBag className="h-20 w-20 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-foreground mb-3">No Products Found</h2>
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
