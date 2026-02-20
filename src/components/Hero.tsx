import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky via-white to-sky/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(46,125,50,0.15),transparent_50%)]" />
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
          alt="Wheat Field"
          className="w-full h-full object-cover opacity-[0.07] mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        {/* Animated blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              The Future of Agriculture is Here
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-neutral-dark mb-8 leading-[0.9] text-balance">
              Smart Farming for a <span className="text-primary">Sustainable</span> Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-neutral mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered insights, precision tools, and real-time data — helping farmers grow more with less while protecting our planet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="px-10 h-14 text-lg rounded-full shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="px-10 h-14 text-lg rounded-full group">
              Watch Demo
              <Play className="ml-2 size-4 fill-current group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Yield Increase', value: '+30%', color: 'text-primary' },
              { label: 'Water Saved', value: '-25%', color: 'text-blue-600' },
              { label: 'Profit Growth', value: '+18%', color: 'text-accent' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl border border-white/40 shadow-xl flex flex-col items-center"
              >
                <span className={`text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</span>
                <span className="text-sm font-medium text-neutral uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
