
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart, Phone } from "lucide-react";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$2,500/month",
      location: "Downtown District, City Center",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
      type: "Apartment",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$4,200/month",
      location: "Riverside Heights, Suburban Area",
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
      type: "House",
      featured: true
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      price: "$1,800/month",
      location: "Arts District, Creative Quarter",
      beds: 1,
      baths: 1,
      sqft: 750,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      type: "Studio",
      featured: false
    },
    {
      id: 4,
      title: "Penthouse Suite",
      price: "$6,500/month",
      location: "Skyline Tower, Premium District",
      beds: 3,
      baths: 3,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      type: "Penthouse",
      featured: true
    },
    {
      id: 5,
      title: "Garden View Condo",
      price: "$2,100/month",
      location: "Garden District, Peaceful Area",
      beds: 2,
      baths: 2,
      sqft: 1100,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      type: "Condo",
      featured: false
    },
    {
      id: 6,
      title: "Executive Office Space",
      price: "$3,800/month",
      location: "Business District, Corporate Center",
      beds: 0,
      baths: 2,
      sqft: 1500,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      type: "Commercial",
      featured: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties available for rent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                {property.featured && (
                  <Badge className="absolute top-3 left-3 bg-blue-600">
                    Featured
                  </Badge>
                )}
                <Badge 
                  variant="secondary" 
                  className="absolute bottom-3 left-3 bg-white/90"
                >
                  {property.type}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                </div>

                <div className="flex items-center justify-between text-gray-600 mb-6">
                  {property.beds > 0 && (
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.beds} bed</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.baths} bath</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
