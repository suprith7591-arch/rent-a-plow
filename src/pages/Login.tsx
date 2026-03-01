import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tractor, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [step, setStep] = useState<"role" | "phone" | "otp">("role");
  const [role, setRole] = useState<"farmer" | "owner">("farmer");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      login({
        name: role === "farmer" ? "Ramesh Kumar" : "Sunil Jadhav",
        phone,
        role,
        location: role === "farmer" ? "Nagpur, Maharashtra" : "Pune, Maharashtra",
      });
      navigate(role === "farmer" ? "/farmer-dashboard" : "/owner-dashboard");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 section-container flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card-warm rounded-3xl p-8 sm:p-10 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
              <Tractor className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-heading font-bold">Welcome to AgriRent</h1>
            <p className="text-sm text-muted-foreground mt-1">Login or create your account</p>
          </div>

          {step === "role" && (
            <div className="space-y-4">
              <p className="text-sm font-medium text-center mb-2">I am a...</p>
              <div className="grid grid-cols-2 gap-3">
                {(["farmer", "owner"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`p-5 rounded-2xl border-2 text-center transition-all ${
                      role === r ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">{r === "farmer" ? "👨‍🌾" : "🔧"}</div>
                    <div className="font-semibold text-sm capitalize">{r === "farmer" ? "Farmer" : "Equipment Owner"}</div>
                  </button>
                ))}
              </div>
              <Button onClick={() => setStep("phone")} className="w-full bg-primary text-primary-foreground h-11 mt-4">
                Continue
              </Button>
            </div>
          )}

          {step === "phone" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm"
                    maxLength={10}
                  />
                </div>
              </div>
              <Button
                onClick={() => setStep("otp")}
                disabled={phone.length < 10}
                className="w-full bg-primary text-primary-foreground h-11"
              >
                Send OTP
              </Button>
              <button onClick={() => setStep("role")} className="text-sm text-muted-foreground hover:text-foreground w-full text-center">
                ← Back
              </button>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-4">
              <p className="text-sm text-center text-muted-foreground">
                Enter the 6-digit OTP sent to +91 {phone}
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Enter OTP (any 6 digits)"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="w-full text-center py-3 rounded-xl border border-input bg-background text-lg tracking-[0.5em] font-mono"
                  maxLength={6}
                />
              </div>
              <Button
                onClick={handleVerifyOtp}
                disabled={otp.length < 6}
                className="w-full bg-secondary text-secondary-foreground h-11"
              >
                <Shield className="w-4 h-4 mr-2" /> Verify & Login
              </Button>
              <button onClick={() => setStep("phone")} className="text-sm text-muted-foreground hover:text-foreground w-full text-center">
                ← Change number
              </button>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-6">
            Mock authentication — enter any 6 digits as OTP
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
