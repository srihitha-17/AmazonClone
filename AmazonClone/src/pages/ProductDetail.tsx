
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { fetchProductById } from '@/services/api';
import { Product } from '@/types/Product';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto p-4 flex justify-center items-center h-96">
          <Loader2 className="h-10 w-10 text-amazon-yellow animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="max-w-screen-xl mx-auto p-4 flex justify-center items-center h-96">
          <p className="text-xl">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center p-4 bg-white">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-80 object-contain" 
              />
            </div>

            <div className="flex flex-col space-y-4">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              
              <div className="flex items-center space-x-1">
                {Array(Math.round(product.rating.rate))
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 text-amazon-yellow fill-amazon-yellow" />
                  ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating.count} ratings)
                </span>
              </div>

              <div className="border-t border-b py-4">
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">
                  + $4.99 shipping & import fees
                </p>
              </div>

              <p className="text-base">{product.description}</p>

              <div className="space-y-3 pt-4">
                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-amazon-yellow text-amazon-primary hover:bg-yellow-500 border-amazon-yellow"
                >
                  Add to Cart
                </Button>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
