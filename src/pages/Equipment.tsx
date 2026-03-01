import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EquipmentCard from "@/components/equipment/EquipmentCard";
import FilterSidebar from "@/components/equipment/FilterSidebar";
import { equipment } from "@/data/mockData";

const EquipmentPage = () => {
  const [searchParams] = useSearchParams();
  const typeFromUrl = searchParams.get("type");

  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>(typeFromUrl ? [typeFromUrl] : []);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [maxDistance, setMaxDistance] = useState(50);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return equipment.filter((item) => {
      if (search && !item.name.toLowerCase().includes(search.toLowerCase()) && !item.type.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(item.type)) return false;
      if (item.priceHourly > maxPrice) return false;
      if (item.distanceKm > maxDistance) return false;
      if (item.rating < minRating) return false;
      return true;
    });
  }, [search, selectedTypes, maxPrice, maxDistance, minRating]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Browse Equipment</h1>
          <p className="text-muted-foreground">Find and rent the perfect machinery for your farm.</p>
        </motion.div>

        {/* Search bar */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            className="md:hidden px-4 rounded-xl border border-input bg-background flex items-center gap-2 text-sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Active filters */}
        {selectedTypes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedTypes.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm flex items-center gap-1">
                {t}
                <button onClick={() => setSelectedTypes(selectedTypes.filter((x) => x !== t))}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-72 shrink-0`}>
            <FilterSidebar
              selectedTypes={selectedTypes}
              onTypeChange={setSelectedTypes}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              maxDistance={maxDistance}
              onMaxDistanceChange={setMaxDistance}
              minRating={minRating}
              onMinRatingChange={setMinRating}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <div className="text-sm text-muted-foreground mb-4">{filtered.length} machines found</div>
            {filtered.length === 0 ? (
              <div className="text-center py-20 glass-card rounded-2xl">
                <p className="text-lg font-heading font-semibold mb-2">No equipment found</p>
                <p className="text-muted-foreground text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <EquipmentCard item={item} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EquipmentPage;
