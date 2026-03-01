import { motion } from "framer-motion";
import { TrendingDown, IndianRupee } from "lucide-react";

const CostCalculator = () => (
  <section className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-warm rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <TrendingDown className="w-8 h-8 text-secondary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Cost Savings Calculator</h2>
        <p className="text-muted-foreground mb-10">See how much you save by renting instead of buying.</p>

        <div className="grid sm:grid-cols-3 gap-6 items-center">
          <div className="glass-card rounded-2xl p-6">
            <div className="text-sm text-muted-foreground mb-1">Buy a Tractor</div>
            <div className="text-2xl font-heading font-bold text-destructive flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />8,00,000
            </div>
          </div>
          <div className="text-4xl font-heading font-bold text-primary">vs</div>
          <div className="glass-card rounded-2xl p-6">
            <div className="text-sm text-muted-foreground mb-1">Rent per Season</div>
            <div className="text-2xl font-heading font-bold text-primary flex items-center justify-center">
              <IndianRupee className="w-5 h-5" />45,000
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-6 rounded-2xl bg-primary text-primary-foreground"
        >
          <div className="text-sm opacity-80 mb-1">You Save</div>
          <div className="text-4xl font-heading font-bold flex items-center justify-center text-secondary">
            <IndianRupee className="w-7 h-7" />7,55,000
          </div>
          <div className="text-sm opacity-70 mt-1">That's 94% savings!</div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CostCalculator;
