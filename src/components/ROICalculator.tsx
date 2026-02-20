import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Droplets, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function ROICalculator() {
  const [acres, setAcres] = useState(100);
  const [currentYield, setCurrentYield] = useState(180); // bushels per acre

  const estimatedIncrease = 0.15; // 15% increase
  const waterSavingsPerAcre = 45; // $45 saved per acre
  const pricePerBushel = 5.50; // $5.50

  const additionalYield = acres * currentYield * estimatedIncrease;
  const additionalRevenue = additionalYield * pricePerBushel;
  const totalWaterSavings = acres * waterSavingsPerAcre;
  const totalAnnualBenefit = additionalRevenue + totalWaterSavings;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-dark rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 skew-x-12 translate-x-1/4" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Calculate your <span className="text-accent">potential.</span></h2>
                <p className="text-neutral-light/70 text-lg mb-10">
                  See how much you could save and earn by switching to GreenField Ag's precision farming tools.
                </p>
              </motion.div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold mb-3 text-accent uppercase tracking-wider">Total Farm Size (Acres)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10"
                      max="5000"
                      step="10"
                      value={acres}
                      onChange={(e) => setAcres(Number(e.target.value))}
                      className="flex-grow accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl font-black w-24 text-right">{acres}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-accent uppercase tracking-wider">Current Avg. Yield (Bushels/Acre)</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="50"
                      max="400"
                      step="5"
                      value={currentYield}
                      onChange={(e) => setCurrentYield(Number(e.target.value))}
                      className="flex-grow accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-2xl font-black w-24 text-right">{currentYield}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  label: "Additional Revenue", 
                  value: `$${Math.round(additionalRevenue).toLocaleString()}`, 
                  icon: <TrendingUp className="text-primary" />,
                  desc: "From 15% yield increase"
                },
                { 
                  label: "Water Cost Savings", 
                  value: `$${Math.round(totalWaterSavings).toLocaleString()}`, 
                  icon: <Droplets className="text-blue-400" />,
                  desc: "Optimized irrigation"
                },
                { 
                  label: "Total Annual Benefit", 
                  value: `$${Math.round(totalAnnualBenefit).toLocaleString()}`, 
                  icon: <DollarSign className="text-accent" />,
                  desc: "Estimated first-year ROI",
                  full: true
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl ${item.full ? 'sm:col-span-2 bg-primary/20 border-primary/30' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">{item.icon}</div>
                    <span className="text-sm font-bold text-neutral-light/60 uppercase tracking-widest">{item.label}</span>
                  </div>
                  <div className="text-4xl font-black mb-1">{item.value}</div>
                  <p className="text-xs text-neutral-light/40">{item.desc}</p>
                </motion.div>
              ))}
              <Button size="lg" className="sm:col-span-2 h-16 text-xl font-bold bg-accent text-neutral-dark hover:bg-accent-light">
                Get Your Full Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
