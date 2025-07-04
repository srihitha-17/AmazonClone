
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top nav */}
      <div className="flex items-center bg-amazon-primary p-2 flex-grow">
        <div className="flex items-center flex-grow sm:flex-grow-0 mx-2">
          <Link to="/" className="text-white font-bold text-2xl">
            amazon
          </Link>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amazon-yellow hover:bg-yellow-500">
          <Input 
            type="text" 
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 border-none" 
            placeholder="Search products"
          />
          <Button className="h-10 px-4 rounded-l-none bg-amazon-yellow hover:bg-yellow-600 border-none">
            <Search className="h-5 w-5 text-amazon-primary" />
          </Button>
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Sign In</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Link to="/cart" className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-amazon-yellow text-amazon-primary font-bold rounded-full text-center">
              {cartCount}
            </span>
            <ShoppingCart className="h-10 w-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
          </Link>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon-secondary text-white text-sm">
        <p className="link flex items-center">
          <Menu className="h-6 w-6 mr-1" />
          All
        </p>
        <p className="link">Today's Deals</p>
        <p className="link">Customer Service</p>
        <p className="link">Gift Cards</p>
        <p className="link hidden lg:inline-flex">Registry</p>
        <p className="link hidden lg:inline-flex">Sell</p>
      </div>
    </header>
  );
};

export default Header;
