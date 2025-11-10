import { Button } from "@/components/ui/button";
import { ShopifyProduct } from "@/lib/shopify";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  const price = node.priceRange.minVariantPrice;
  const image = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = () => {
    if (!firstVariant) return;

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      description: `${node.title} has been added to your cart`,
      position: "top-center",
    });
  };

  return (
    <div className="group bg-gradient-to-br from-card to-card/80 rounded-xl border border-border overflow-hidden hover:shadow-[var(--shadow-medium)] hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${node.handle}`}>
        <div className="aspect-square bg-secondary/30 overflow-hidden relative">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/40 to-muted/40">
              <ShoppingCart className="h-16 w-16 text-muted-foreground/40" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <div className="p-5 space-y-3">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {node.title}
          </h3>
        </Link>
        
        {node.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {node.description}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground shadow-[var(--shadow-blue)] hover:shadow-[var(--shadow-medium)] transition-all duration-300"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
