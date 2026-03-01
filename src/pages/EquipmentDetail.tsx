import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, Zap, User, Fuel, Calendar, ArrowLeft, CheckCircle, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { equipment, reviews } from "@/data/mockData";

const EquipmentDetail = () => {
  const { id } = useParams();
  const item = equipment.find((e) => e.id === id);
  const [rentalType, setRentalType] = useState<"hourly" | "perAcre" | "daily">("hourly");
  const [duration, setDuration] = useState(4);
  const [selectedDate, setSelectedDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const price = useMemo(() => {
    if (!item) return 0;
    if (rentalType === "hourly") return item.priceHourly * duration;
    if (rentalType === "perAcre") return item.pricePerAcre * duration;
    return item.priceDaily * duration;
  }, [item, rentalType, duration]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Equipment not found</h1>
          <Link to="/equipment"><Button>Browse Equipment</Button></Link>
        </div>
      </div>
    );
  }

  // Simple calendar: current month grid
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const bookedDays = [5, 6, 12, 13, 19, 20]; // mock booked days

  const relatedEquipment = equipment.filter((e) => e.type === item.type && e.id !== item.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 section-container">
        <Link to="/equipment" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Equipment
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Image gallery */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-2 h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center text-8xl">
                  {item.type === "Tractor" ? "🚜" : item.type === "Combine Harvester" ? "🌾" : item.type === "Drone Sprayer" ? "💧" : "🌿"}
                </div>
                <div className="space-y-3">
                  <div className="h-[122px] rounded-2xl bg-gradient-to-br from-accent to-primary/5 flex items-center justify-center text-4xl">🔧</div>
                  <div className="h-[122px] rounded-2xl bg-gradient-to-br from-secondary/10 to-accent flex items-center justify-center text-4xl">⚙️</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-heading font-bold">{item.name}</h1>
                <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-bold">Score: {item.agriScore}</span>
              </div>
              <p className="text-muted-foreground mb-6">{item.description}</p>

              {/* Specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Zap, label: "Power", value: item.hp > 0 ? `${item.hp} HP` : "N/A" },
                  { icon: Fuel, label: "Fuel", value: item.fuelType },
                  { icon: Calendar, label: "Year", value: item.year.toString() },
                  { icon: MapPin, label: "Location", value: `${item.distanceKm} km away` },
                ].map((spec) => (
                  <div key={spec.label} className="glass-card rounded-xl p-4 text-center">
                    <spec.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-xs text-muted-foreground">{spec.label}</div>
                    <div className="text-sm font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Owner card */}
              <div className="glass-card rounded-xl p-5 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold flex items-center gap-2">
                    {item.ownerName}
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-medium">Verified</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{item.location}</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-semibold">{item.rating}</span>
                </div>
              </div>

              {/* Availability Calendar */}
              <div className="glass-card rounded-xl p-5 mb-6">
                <h3 className="font-heading font-semibold mb-4">Availability — {today.toLocaleString("en", { month: "long", year: "numeric" })}</h3>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div key={d} className="py-1 font-semibold text-muted-foreground">{d}</div>
                  ))}
                  {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isBooked = bookedDays.includes(day);
                    const isPast = day < today.getDate();
                    return (
                      <button
                        key={day}
                        disabled={isBooked || isPast}
                        onClick={() => setSelectedDate(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`)}
                        className={`py-2 rounded-lg text-sm transition-colors ${
                          isBooked ? "bg-destructive/10 text-destructive line-through" :
                          isPast ? "text-muted-foreground/40" :
                          selectedDate.endsWith(`-${String(day).padStart(2, "0")}`) ? "bg-primary text-primary-foreground" :
                          "hover:bg-accent"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h3 className="font-heading font-semibold text-lg mb-4">Reviews ({item.reviewsCount})</h3>
                <div className="space-y-4">
                  {reviews.slice(0, 4).map((r) => (
                    <div key={r.id} className="glass-card rounded-xl p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-sm">{r.userName}</div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{r.comment}</p>
                      <div className="text-xs text-muted-foreground mt-2">Crop: {r.cropType} • {r.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Booking sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card-warm rounded-2xl p-6 sticky top-24"
            >
              <h3 className="font-heading font-semibold text-lg mb-4">Book This Equipment</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Rental Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["hourly", "perAcre", "daily"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => { setRentalType(t); setDuration(t === "daily" ? 1 : 4); }}
                        className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                          rentalType === t ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"
                        }`}
                      >
                        {t === "hourly" ? "Hourly" : t === "perAcre" ? "Per Acre" : "Daily"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    {rentalType === "hourly" ? "Hours" : rentalType === "perAcre" ? "Acres" : "Days"}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={rentalType === "daily" ? 30 : 100}
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
                  />
                </div>

                {/* Pricing */}
                <div className="p-4 rounded-xl bg-accent space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      ₹{rentalType === "hourly" ? item.priceHourly : rentalType === "perAcre" ? item.pricePerAcre : item.priceDaily} × {duration} {rentalType === "hourly" ? "hrs" : rentalType === "perAcre" ? "acres" : "days"}
                    </span>
                    <span className="font-medium">₹{price.toLocaleString()}</span>
                  </div>
                  {item.operatorIncluded && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Operator</span>
                      <span className="text-primary font-medium">Included</span>
                    </div>
                  )}
                  <div className="border-t border-border pt-2 flex justify-between font-heading font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{price.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={() => setShowModal(true)}
                  disabled={!selectedDate}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 font-semibold"
                >
                  Confirm Booking
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related */}
        {relatedEquipment.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading font-semibold text-xl mb-6">Related Equipment</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedEquipment.map((e) => (
                <Link key={e.id} to={`/equipment/${e.id}`} className="glass-card rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h4 className="font-heading font-semibold">{e.name}</h4>
                  <p className="text-sm text-muted-foreground">{e.brand} • ₹{e.priceHourly}/hr</p>
                  <div className="flex items-center gap-1 mt-2 text-sm">
                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary" /> {e.rating}
                    <span className="text-muted-foreground">• {e.distanceKm} km</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-8 max-w-md w-full text-center"
          >
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-heading font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-4">
              Your {item.name} has been booked for {selectedDate}. The owner will contact you shortly.
            </p>
            <div className="p-4 rounded-xl bg-accent mb-6 text-left space-y-1 text-sm">
              <div><strong>Equipment:</strong> {item.name}</div>
              <div><strong>Date:</strong> {selectedDate}</div>
              <div><strong>Duration:</strong> {duration} {rentalType === "hourly" ? "hours" : rentalType === "perAcre" ? "acres" : "days"}</div>
              <div><strong>Total:</strong> ₹{price.toLocaleString()}</div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => window.print()}>
                Print Receipt
              </Button>
              <Link to="/equipment" className="flex-1">
                <Button className="w-full bg-primary text-primary-foreground" onClick={() => setShowModal(false)}>
                  Done
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default EquipmentDetail;
