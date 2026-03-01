import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Farmers Served", value: 12400, prefix: "", suffix: "+" },
  { label: "Machines Listed", value: 580, prefix: "", suffix: "+" },
  { label: "Saved by Farmers", value: 2.4, prefix: "₹", suffix: " Cr+" },
  { label: "States Covered", value: 18, prefix: "", suffix: "" },
];

const Counter = ({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
};

const Stats = () => (
  <section className="py-20 bg-primary">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-heading font-bold text-secondary">
              <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
