
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200">
      <p className="absolute top-2 right-2 text-xs text-gray-400">{category}</p>
      
      <Link to={`/product/${id}`} className="flex-grow">
        <div className="flex justify-center">
          <img src={image} className="h-40 object-contain my-4" alt={title} />
        </div>
        
        <h4 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h4>
        
        <div className="flex">
          {Array(Math.round(rating.rate))
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className="h-5 text-amazon-yellow fill-amazon-yellow"
              />
            ))}
        </div>
        
        <p className="text-xs text-gray-500 my-2 line-clamp-2">{description}</p>
      </Link>
      
      <div className="mb-5 font-bold text-lg">${price.toFixed(2)}</div>
      
      <Button 
        onClick={() => addToCart(product)}
        className="mt-auto bg-amazon-yellow text-amazon-primary hover:bg-yellow-500 border-amazon-yellow"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
