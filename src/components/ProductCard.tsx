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
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-300">
      <Link to={`/product/${node.handle}`}>
        <div className="aspect-square bg-secondary/20 overflow-hidden">
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 space-y-3">
        <Link to={`/product/${node.handle}`}>
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {node.title}
          </h3>
        </Link>
        
        {node.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {node.description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
          </span>
          <Button
            size="sm"
            className="bg-gold hover:bg-gold/90 text-gold-foreground"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
