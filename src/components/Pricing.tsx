import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      desc: "Perfect for smallholder farmers getting started.",
      features: ["Basic Crop Monitoring", "Standard Weather Alerts", "Up to 5 Fields", "Email Support"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      desc: "Advanced tools for growing agribusinesses.",
      features: ["AI Disease Detection", "Precision Irrigation", "Unlimited Fields", "Priority Support", "Yield Analytics"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored solutions for large-scale operations.",
      features: ["Custom API Integration", "Dedicated Account Manager", "On-site Soil Analysis", "Sustainability Audits", "Fleet Management"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-neutral-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">Transparent <span className="text-primary">pricing.</span></h2>
          <p className="text-xl text-neutral">Choose the plan that fits your farm's scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-3xl p-8 shadow-sm border-2 transition-all hover:shadow-xl ${
                plan.popular ? 'border-primary scale-105 relative' : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black text-neutral-dark">{plan.price}</span>
                  {plan.period && <span className="text-neutral">{plan.period}</span>}
                </div>
                <p className="text-neutral text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-neutral">
                    <Check className="size-5 text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full h-12 rounded-xl text-lg font-bold"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
