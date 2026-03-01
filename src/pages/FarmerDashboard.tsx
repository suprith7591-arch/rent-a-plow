import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, IndianRupee, Star, TrendingUp, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { farmerBookings } from "@/data/mockData";

const statusColors: Record<string, string> = {
  confirmed: "bg-primary/10 text-primary",
  pending: "bg-secondary/10 text-secondary",
  completed: "bg-accent text-accent-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

const FarmerDashboard = () => {
  const { user } = useAuth();

  const totalSpent = farmerBookings.filter((b) => b.status === "completed").reduce((s, b) => s + b.amount, 0);
  const activeBookings = farmerBookings.filter((b) => b.status === "confirmed" || b.status === "pending");

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Welcome */}
          <div className="glass-card-warm rounded-2xl p-6 sm:p-8 mb-8">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-1">
              Welcome back, {user?.name || "Farmer"} 👨‍🌾
            </h1>
            <p className="text-muted-foreground">{user?.location || "Your Farm"}</p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: IndianRupee, label: "Total Spent", value: `₹${totalSpent.toLocaleString()}` },
              { icon: Calendar, label: "Bookings Made", value: farmerBookings.length.toString() },
              { icon: Star, label: "Favourite Equipment", value: "Mahindra 575 DI" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="font-heading font-bold">{s.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active bookings */}
          {activeBookings.length > 0 && (
            <div className="mb-8">
              <h2 className="font-heading font-semibold text-lg mb-4">Active Bookings</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {activeBookings.map((b) => (
                  <div key={b.id} className="glass-card rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{b.equipmentName}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                        {b.status}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>📅 {b.date}</div>
                      <div>⏱️ {b.duration}</div>
                      <div className="font-semibold text-foreground">₹{b.amount.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Booking history */}
          <h2 className="font-heading font-semibold text-lg mb-4">Booking History</h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold">Equipment</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Duration</th>
                    <th className="text-left p-4 font-semibold">Amount</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {farmerBookings.map((b) => (
                    <tr key={b.id} className="border-b border-border last:border-0">
                      <td className="p-4 font-medium">{b.equipmentName}</td>
                      <td className="p-4 text-muted-foreground">{b.date}</td>
                      <td className="p-4 text-muted-foreground">{b.duration}</td>
                      <td className="p-4">₹{b.amount.toLocaleString()}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[b.status]}`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/equipment">
              <Button className="bg-primary text-primary-foreground">
                <Search className="w-4 h-4 mr-2" /> Find More Equipment
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
