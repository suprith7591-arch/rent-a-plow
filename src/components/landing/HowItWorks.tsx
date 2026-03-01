import { motion } from "framer-motion";
import { Search, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  { icon: Search, title: "Search Equipment Near You", desc: "Browse hundreds of machines available within your area. Filter by type, price, and ratings." },
  { icon: CalendarCheck, title: "Book with One Click", desc: "Select your dates, choose hourly or daily rental, and confirm your booking instantly." },
  { icon: Sparkles, title: "Get the Job Done", desc: "The equipment arrives at your farm. Complete your work and pay securely through AgriRent." },
];

const HowItWorks = () => (
  <section className="py-24 bg-muted/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Renting farm machinery has never been this simple. Three steps to a better harvest.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-sm font-semibold text-secondary mb-2">Step {i + 1}</div>
            <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
