import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Droplets } from 'lucide-react';
import { Button } from '../components/ui/button';
import { stats } from '../lib/data';
import { Hero3D } from '../components/Hero3D';
import { Typewriter } from '../components/Typewriter';
import { ProblemSolution } from '../components/ProblemSolution';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Compact Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky/30 via-white to-sky/10" />
          <Hero3D />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                Next-Gen AgTech
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-dark mb-6 leading-tight">
                Smart Farming for a <br />
                <Typewriter /> Tomorrow
              </h1>
              <p className="text-base md:text-lg text-neutral mb-8 max-w-xl leading-relaxed">
                AI-powered insights, precision tools, and real-time data to help you grow more with less while protecting our planet.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button size="lg" asChild className="rounded-full shadow-lg hover:scale-105 transition-transform">
                  <Link to="/get-started">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full group">
                  <Link to="/features">
                    Explore Features <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                {stats.map((stat) => (
                  <div key={stat.id} className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm">
                    <div className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-[10px] font-bold text-neutral uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }} 
              animate={{ opacity: 1, scale: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200"
                  alt="Smart Agriculture Technology"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-light flex items-center gap-3"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="text-primary size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral uppercase tracking-wider">Crop Health</p>
                  <p className="text-sm font-black text-neutral-dark">98% Optimal</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-neutral-light flex items-center gap-3"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Droplets className="text-blue-500 size-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-neutral uppercase tracking-wider">Soil Moisture</p>
                  <p className="text-sm font-black text-neutral-dark">42% Stable</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Testimonials />

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 w-full">
         <div className="bg-neutral-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your farm?</h2>
              <p className="text-sm text-neutral-light/80 mb-8 max-w-xl mx-auto">Join thousands of modern farmers optimizing their yield and sustainability.</p>
              <Button size="lg" asChild className="bg-accent text-neutral-dark hover:bg-accent-light rounded-full">
                <Link to="/get-started">Start Your Free Trial</Link>
              </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
