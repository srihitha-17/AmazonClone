
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-amazon-secondary">
      <button
        onClick={scrollToTop}
        className="w-full bg-amazon-secondary hover:bg-gray-700 text-white p-3 text-sm"
      >
        <div className="flex items-center justify-center">
          <ArrowUp className="mr-2 h-4 w-4" />
          Back to top
        </div>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-8 py-14 bg-amazon-primary text-white">
        <div className="space-y-4 text-sm">
          <h5 className="font-bold">Get to Know Us</h5>
          <p className="link">Careers</p>
          <p className="link">Blog</p>
          <p className="link">About Amazon</p>
          <p className="link">Investor Relations</p>
        </div>

        <div className="space-y-4 text-sm">
          <h5 className="font-bold">Make Money with Us</h5>
          <p className="link">Sell products on Amazon</p>
          <p className="link">Sell on Amazon Business</p>
          <p className="link">Become an Affiliate</p>
          <p className="link">Advertise Your Products</p>
        </div>

        <div className="space-y-4 text-sm">
          <h5 className="font-bold">Amazon Payment Products</h5>
          <p className="link">Amazon Business Card</p>
          <p className="link">Shop with Points</p>
          <p className="link">Amazon Currency Converter</p>
          <p className="link">Gift Cards</p>
        </div>

        <div className="space-y-4 text-sm">
          <h5 className="font-bold">Let Us Help You</h5>
          <p className="link">Amazon and COVID-19</p>
          <p className="link">Your Account</p>
          <p className="link">Your Orders</p>
          <p className="link">Shipping Rates & Policies</p>
          <p className="link">Help Center</p>
        </div>
      </div>

      <div className="flex flex-col items-center py-4 bg-amazon-primary border-t border-gray-700">
        <Link to="/" className="text-white font-bold text-xl mb-3">
          amazon
        </Link>
        <p className="text-xs text-gray-400">
          &copy; 2025 Amazon Clone. This is not the real Amazon, it's a clone for educational purposes.
        </p>
      </div>
    </div>
  );
};

export default Footer;
