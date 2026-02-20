import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '../lib/data';
import * as Icons from 'lucide-react';
import { X } from 'lucide-react';

export function FeaturesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">Platform Features</h1>
        <p className="text-sm text-neutral dark:text-neutral-light/80 max-w-2xl mx-auto">Discover the tools powering the next generation of agriculture.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = (Icons as any)[feature.iconName];
          return (
            <motion.div
              layoutId={`card-${feature.id}`}
              key={feature.id}
              onClick={() => setSelectedId(feature.id)}
              className="bg-white dark:bg-neutral-dark/50 p-6 rounded-2xl shadow-sm border border-neutral-light dark:border-white/10 cursor-pointer hover:shadow-md transition-shadow"
              whileHover={{ y: -4 }}
            >
              <motion.div layoutId={`icon-${feature.id}`} className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl w-fit mb-4 text-primary">
                <Icon className="size-5" />
              </motion.div>
              <motion.h3 layoutId={`title-${feature.id}`} className="text-lg font-bold text-neutral-dark dark:text-white mb-2">{feature.title}</motion.h3>
              <motion.p layoutId={`desc-${feature.id}`} className="text-sm text-neutral dark:text-neutral-light/70 line-clamp-2">{feature.desc}</motion.p>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-neutral-dark/40 dark:bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white dark:bg-neutral-dark w-full max-w-lg rounded-3xl p-8 relative z-10 shadow-2xl border dark:border-white/10"
            >
              {features.filter(f => f.id === selectedId).map(feature => {
                const Icon = (Icons as any)[feature.iconName];
                return (
                  <div key={feature.id}>
                    <button onClick={() => setSelectedId(null)} className="absolute top-6 right-6 p-2 bg-neutral-light dark:bg-white/10 rounded-full hover:bg-neutral-light/80 dark:hover:bg-white/20 transition-colors text-neutral-dark dark:text-white">
                      <X className="size-4" />
                    </button>
                    <motion.div layoutId={`icon-${feature.id}`} className="p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl w-fit mb-6 text-primary">
                      <Icon className="size-8" />
                    </motion.div>
                    <motion.h3 layoutId={`title-${feature.id}`} className="text-2xl font-bold text-neutral-dark dark:text-white mb-4">{feature.title}</motion.h3>
                    <motion.p layoutId={`desc-${feature.id}`} className="text-sm text-neutral dark:text-neutral-light/80 leading-relaxed mb-6">
                      {feature.desc} This is a detailed view of the feature. In a real application, this would contain more comprehensive information, screenshots, and specific use cases for how this tool helps optimize farm operations.
                    </motion.p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

