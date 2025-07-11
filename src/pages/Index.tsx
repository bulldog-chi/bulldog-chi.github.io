
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import FeaturedProperties from "@/components/FeaturedProperties";
import SearchFilters from "@/components/SearchFilters";
import PropertyStats from "@/components/PropertyStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertyStats />
      <SearchFilters />
      <FeaturedProperties />
      <Footer />
    </div>
  );
};

export default Index;
