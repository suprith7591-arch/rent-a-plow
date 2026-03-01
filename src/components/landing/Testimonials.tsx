import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/mockData";

const Testimonials = () => (
  <section className="py-24 bg-muted/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">What Farmers Say</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Real stories from real farmers across India.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-2xl p-8 relative"
          >
            <Quote className="w-8 h-8 text-secondary/30 absolute top-6 right-6" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                {t.avatar}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.village}</div>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{t.quote}"</p>
            <div className="text-xs text-secondary font-medium">Crop: {t.crop}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
