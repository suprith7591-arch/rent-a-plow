import { equipmentCategories } from "@/data/mockData";

interface FilterSidebarProps {
  selectedTypes: string[];
  onTypeChange: (types: string[]) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  maxDistance: number;
  onMaxDistanceChange: (distance: number) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

const FilterSidebar = ({
  selectedTypes, onTypeChange, maxPrice, onMaxPriceChange,
  maxDistance, onMaxDistanceChange, minRating, onMinRatingChange,
}: FilterSidebarProps) => {
  const toggleType = (type: string) => {
    onTypeChange(
      selectedTypes.includes(type)
        ? selectedTypes.filter((t) => t !== type)
        : [...selectedTypes, type]
    );
  };

  return (
    <div className="glass-card rounded-2xl p-6 space-y-6">
      <div>
        <h3 className="font-heading font-semibold mb-3">Equipment Type</h3>
        <div className="space-y-2">
          {equipmentCategories.map((cat) => (
            <label key={cat.name} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(cat.name)}
                onChange={() => toggleType(cat.name)}
                className="rounded border-input accent-primary"
              />
              <span>{cat.icon} {cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold mb-3">Max Price (₹/hr)</h3>
        <input
          type="range"
          min={200}
          max={2000}
          step={50}
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="text-sm text-muted-foreground mt-1">Up to ₹{maxPrice}/hr</div>
      </div>

      <div>
        <h3 className="font-heading font-semibold mb-3">Distance (km)</h3>
        <input
          type="range"
          min={5}
          max={50}
          step={5}
          value={maxDistance}
          onChange={(e) => onMaxDistanceChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="text-sm text-muted-foreground mt-1">Within {maxDistance} km</div>
      </div>

      <div>
        <h3 className="font-heading font-semibold mb-3">Min Rating</h3>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => onMinRatingChange(r)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                minRating === r
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {r === 0 ? "All" : `${r}+`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
