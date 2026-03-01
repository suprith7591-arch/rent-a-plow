import { Link } from "react-router-dom";
import { Star, MapPin, Zap, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Equipment } from "@/data/mockData";

const EquipmentCard = ({ item }: { item: Equipment }) => (
  <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    {/* Image placeholder */}
    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-6xl">
        {item.type === "Tractor" ? "🚜" : item.type === "Combine Harvester" ? "🌾" : item.type === "Drone Sprayer" ? "💧" : item.type === "Rotavator" ? "🔄" : item.type === "Seed Drill" ? "🌱" : item.type === "Power Tiller" ? "🌿" : item.type === "Boom Sprayer" ? "🚿" : "🌾"}
      </div>
      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2">
        {item.available ? (
          <span className="px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Available
          </span>
        ) : (
          <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">Booked</span>
        )}
      </div>
      {item.operatorIncluded && (
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium flex items-center gap-1">
            <User className="w-3 h-3" /> Operator
          </span>
        </div>
      )}
      {/* AgriScore */}
      <div className="absolute bottom-3 right-3">
        <span className="px-2 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold text-primary">
          Score: {item.agriScore}
        </span>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-heading font-semibold text-lg">{item.name}</h3>
          <p className="text-xs text-muted-foreground">{item.brand} • {item.model}</p>
        </div>
        {item.hp > 0 && (
          <span className="px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs font-semibold flex items-center gap-1">
            <Zap className="w-3 h-3" /> {item.hp} HP
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" /> {item.rating}
          <span className="text-xs">({item.reviewsCount})</span>
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {item.distanceKm} km
        </span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div>
          <span className="text-lg font-heading font-bold text-primary">₹{item.priceHourly}</span>
          <span className="text-xs text-muted-foreground">/hour</span>
        </div>
        <Link to={`/equipment/${item.id}`}>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default EquipmentCard;
