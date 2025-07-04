
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-amazon-yellow text-5xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">Oops! We couldn't find that page.</p>
          <p className="text-xl mb-8">
            The page you're looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-amazon-yellow text-amazon-primary hover:bg-yellow-500">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
