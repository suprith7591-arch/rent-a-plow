import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const stats = [
  { label: "Machines", value: "500+" },
  { label: "Farmers", value: "12,000+" },
  { label: "States", value: "18" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Golden wheat field with tractor at sunset" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient" />
    </div>

    <div className="relative z-10 section-container pt-24 pb-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary mb-6">
          <Tractor className="w-4 h-4" />
          <span className="text-sm font-medium">The Uber for Farm Machinery</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
          Rent Farm Machinery.{" "}
          <span className="text-secondary">Anytime. Anywhere.</span>
        </h1>

        <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed">
          Don't buy expensive equipment — rent it from nearby owners. Save lakhs, boost productivity, and farm smarter with AgriRent.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link to="/equipment">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 h-12">
              Find Equipment <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 h-12">
              List Your Machine
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Floating stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="glass-card-warm rounded-2xl p-6 max-w-lg"
      >
        <div className="flex items-center justify-around">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
              {i < stats.length - 1 && <div className="hidden" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
