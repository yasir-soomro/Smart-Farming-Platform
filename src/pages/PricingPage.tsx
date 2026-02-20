import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { pricingPlans } from '../lib/data';
import { Link } from 'react-router-dom';

export function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">Simple, transparent pricing</h1>
        <p className="text-sm text-neutral dark:text-neutral-light/80 max-w-2xl mx-auto">Choose the plan that fits your farm's scale.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`bg-white dark:bg-neutral-dark/50 rounded-3xl p-8 shadow-sm border-2 relative flex flex-col ${plan.popular ? 'border-primary scale-105 z-10' : 'border-neutral-light dark:border-white/10'}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-neutral-dark dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-xs text-neutral dark:text-neutral-light/70 font-medium">{plan.period}</span>}
              </div>
              <p className="text-xs text-neutral dark:text-neutral-light/70">{plan.desc}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-neutral dark:text-neutral-light/80">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs">{f}</span>
                </li>
              ))}
            </ul>

            <Button variant={plan.popular ? 'default' : 'outline'} asChild className={`w-full text-sm font-bold ${!plan.popular ? 'dark:text-white dark:border-white/20 dark:hover:bg-white/10' : ''}`}>
              <Link to="/get-started">Choose {plan.name}</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

