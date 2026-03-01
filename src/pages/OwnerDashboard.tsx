import { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Plus, Check, X as XIcon, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { equipment, farmerBookings } from "@/data/mockData";

const OwnerDashboard = () => {
  const { user } = useAuth();
  const myEquipment = equipment.filter((e) => e.ownerId === "o1" || e.ownerId === "o2").slice(0, 4);
  const pendingBookings = farmerBookings.filter((b) => b.status === "pending");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEquip, setNewEquip] = useState({ name: "", brand: "", model: "", hp: "", priceHourly: "", operatorIncluded: false });

  const totalEarnings = 145000;
  const thisMonth = 32000;
  const pending = 12000;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="glass-card-warm rounded-2xl p-6 sm:p-8 mb-8">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-1">
              Owner Dashboard 🔧
            </h1>
            <p className="text-muted-foreground">Welcome, {user?.name || "Equipment Owner"}</p>
          </div>

          {/* Earnings */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Total Earnings", value: `₹${totalEarnings.toLocaleString()}` },
              { label: "This Month", value: `₹${thisMonth.toLocaleString()}` },
              { label: "Pending", value: `₹${pending.toLocaleString()}` },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="font-heading font-bold">{s.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking requests */}
          {pendingBookings.length > 0 && (
            <div className="mb-8">
              <h2 className="font-heading font-semibold text-lg mb-4">Booking Requests</h2>
              <div className="space-y-3">
                {pendingBookings.map((b) => (
                  <div key={b.id} className="glass-card rounded-xl p-5 flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{b.equipmentName}</div>
                      <div className="text-sm text-muted-foreground">{b.date} • {b.duration} • ₹{b.amount.toLocaleString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-primary text-primary-foreground"><Check className="w-4 h-4" /></Button>
                      <Button size="sm" variant="outline"><XIcon className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Equipment */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-semibold text-lg">My Equipment</h2>
            <Button size="sm" onClick={() => setShowAddForm(!showAddForm)} className="bg-secondary text-secondary-foreground">
              <Plus className="w-4 h-4 mr-1" /> Add Equipment
            </Button>
          </div>

          {showAddForm && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="glass-card rounded-xl p-6 mb-6">
              <h3 className="font-heading font-semibold mb-4">Add New Equipment</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Machine Name", key: "name", placeholder: "e.g. Mahindra 575" },
                  { label: "Brand", key: "brand", placeholder: "e.g. Mahindra" },
                  { label: "Model", key: "model", placeholder: "e.g. 575 DI" },
                  { label: "HP", key: "hp", placeholder: "e.g. 45" },
                  { label: "Hourly Rate (₹)", key: "priceHourly", placeholder: "e.g. 600" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-sm font-medium mb-1 block">{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      value={(newEquip as any)[f.key]}
                      onChange={(e) => setNewEquip({ ...newEquip, [f.key]: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
                    />
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-7">
                  <input
                    type="checkbox"
                    checked={newEquip.operatorIncluded}
                    onChange={(e) => setNewEquip({ ...newEquip, operatorIncluded: e.target.checked })}
                    className="accent-primary"
                  />
                  <label className="text-sm font-medium">Operator Included</label>
                </div>
              </div>
              <Button onClick={() => { setShowAddForm(false); }} className="bg-primary text-primary-foreground">
                Submit Equipment
              </Button>
            </motion.div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {myEquipment.map((e) => (
              <div key={e.id} className="glass-card rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{e.name}</h3>
                    <p className="text-sm text-muted-foreground">{e.brand} • {e.model}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>₹{e.priceHourly}/hr</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${e.available ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {e.available ? "Available" : "Booked"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default OwnerDashboard;
