
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Search, Building, Phone, User } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">PropertyPro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="h-4 w-4" />
              <span>Properties</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Properties</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Search</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
