import { motion } from "framer-motion";
import { Bot, MapPin, Calendar, CloudSun, TrendingUp, Globe } from "lucide-react";

const features = [
  { icon: Bot, title: "AI Crop Advisory", desc: "Get smart machinery suggestions based on your crop type and season." },
  { icon: MapPin, title: "GPS-Based Discovery", desc: "Find machines within 10-30 km using real-time location tracking." },
  { icon: Calendar, title: "Real-Time Availability", desc: "Live calendar booking — see what's available right now." },
  { icon: CloudSun, title: "Weather Alerts", desc: "Integrated farm weather warnings to plan your rentals better." },
  { icon: TrendingUp, title: "Dynamic Pricing", desc: "Fair harvest-season pricing based on demand and supply." },
  { icon: Globe, title: "Multi-Language", desc: "Use AgriRent in Hindi, Punjabi, Tamil, Marathi, and more." },
];

const SmartFeatures = () => (
  <section className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Smart Features</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Powered by technology built for the modern Indian farmer.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <f.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SmartFeatures;
