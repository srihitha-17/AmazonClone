
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    clearCart,
    cartTotal 
  } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-3">
            <div className="bg-white p-6 shadow-sm rounded-md">
              <h2 className="text-3xl font-semibold border-b pb-4">
                {cartItems.length === 0 ? "Your Cart is Empty" : "Shopping Cart"}
              </h2>

              {cartItems.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="mb-4">Your shopping cart is waiting to be filled.</p>
                  <Link to="/">
                    <Button className="bg-amazon-yellow text-amazon-primary hover:bg-yellow-500">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-right py-2">
                    <button 
                      onClick={clearCart}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Clear cart
                    </button>
                  </div>

                  <div className="space-y-6 mt-4">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="grid grid-cols-5 items-center border-b pb-4">
                        <div className="col-span-2 flex items-center space-x-4">
                          <Link to={`/product/${item.product.id}`}>
                            <img 
                              src={item.product.image} 
                              alt={item.product.title} 
                              className="h-20 w-20 object-contain" 
                            />
                          </Link>
                          <div>
                            <Link to={`/product/${item.product.id}`}>
                              <p className="line-clamp-2 font-medium hover:text-blue-500">
                                {item.product.title}
                              </p>
                            </Link>
                            <p className="text-sm text-green-600">In Stock</p>
                          </div>
                        </div>

                        <div className="col-span-1 flex items-center space-x-2">
                          <button 
                            onClick={() => decrementQuantity(item.product.id)}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="select-none">{item.quantity}</span>
                          <button 
                            onClick={() => incrementQuantity(item.product.id)}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="col-span-1 text-right font-bold">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>

                        <div className="col-span-1 flex justify-end">
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {cartItems.length > 0 && (
            <div className="col-span-1">
              <div className="bg-white p-6 shadow-sm rounded-md">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Order Summary</h3>
                  
                  <div className="flex justify-between text-sm">
                    <p>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}):</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <p>Shipping:</p>
                    <p>$4.99</p>
                  </div>
                  
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <p>Order Total:</p>
                    <p>${(cartTotal + 4.99).toFixed(2)}</p>
                  </div>
                  
                  <Button className="w-full bg-amazon-yellow text-amazon-primary hover:bg-yellow-500">
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
