
import { TrendingUp, Building, Users, Award } from "lucide-react";

const PropertyStats = () => {
  const stats = [
    {
      icon: Building,
      number: "10,000+",
      label: "Properties Listed",
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Clients",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      color: "text-purple-600"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyStats;
