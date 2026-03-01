import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aiRecommendations } from "@/data/mockData";

const crops = ["Rice", "Wheat", "Sugarcane", "Cotton", "Maize"];
const seasons = ["Kharif", "Rabi", "Zaid"];

const AIRecommendation = () => {
  const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [result, setResult] = useState<string[] | null>(null);

  const getRecommendation = () => {
    if (!crop || !season) return;
    const recs = aiRecommendations[crop]?.[season] || ["Tractor"];
    setResult(recs);
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-warm rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold">AI Crop Advisory</h2>
              <p className="text-sm text-muted-foreground">Get smart equipment recommendations</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="text-sm font-medium mb-1 block">Crop Type</label>
              <select
                value={crop}
                onChange={(e) => { setCrop(e.target.value); setResult(null); }}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
              >
                <option value="">Select crop...</option>
                {crops.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Season</label>
              <select
                value={season}
                onChange={(e) => { setSeason(e.target.value); setResult(null); }}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
              >
                <option value="">Select season...</option>
                {seasons.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Farm Size (acres)</label>
              <input
                type="number"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                placeholder="e.g. 5"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm"
              />
            </div>
          </div>

          <Button
            onClick={getRecommendation}
            disabled={!crop || !season}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
          >
            Get AI Recommendation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-5 rounded-xl bg-accent border border-primary/10"
            >
              <div className="text-sm font-semibold text-primary mb-2">
                🤖 Recommended for {crop} in {season} season{farmSize ? ` (${farmSize} acres)` : ""}:
              </div>
              <div className="flex flex-wrap gap-2">
                {result.map((eq) => (
                  <span key={eq} className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {eq}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                {farmSize && Number(farmSize) > 10
                  ? "For larger farms, consider booking multiple machines simultaneously to save time."
                  : "These machines are optimized for your crop cycle and farm size."}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIRecommendation;
