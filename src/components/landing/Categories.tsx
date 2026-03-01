import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { equipmentCategories } from "@/data/mockData";

const Categories = () => (
  <section className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Equipment Categories</h2>
        <p className="text-muted-foreground max-w-md mx-auto">From tractors to drones — find the right machinery for every farming need.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {equipmentCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/equipment?type=${encodeURIComponent(cat.name)}`}
              className="glass-card rounded-2xl p-6 text-center block group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-heading font-semibold text-sm mb-1">{cat.name}</h3>
              <p className="text-xs text-secondary font-medium">from ₹{cat.startingPrice}/hr</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
