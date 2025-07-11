
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, SlidersHorizontal } from "lucide-react";

const SearchFilters = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Refine Your Search</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use our advanced filters to find exactly what you're looking for
          </p>
        </div>

        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Price Range
              </h3>
              <div className="space-y-4">
                <Slider defaultValue={[1000]} max={5000} step={100} />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$5,000+</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Amenities
              </h3>
              <div className="space-y-3">
                {["Pool", "Gym", "Parking", "Pet Friendly", "Balcony", "In-unit Laundry"].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox id={amenity.toLowerCase().replace(" ", "-")} />
                    <Label htmlFor={amenity.toLowerCase().replace(" ", "-")} className="text-sm">
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Property Features</h3>
              <div className="space-y-3">
                {["Recently Renovated", "Furnished", "Utilities Included", "Short Term", "Long Term"].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={feature.toLowerCase().replace(" ", "-")} />
                    <Label htmlFor={feature.toLowerCase().replace(" ", "-")} className="text-sm">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Apply Filters
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchFilters;
