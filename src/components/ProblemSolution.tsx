import { motion } from 'framer-motion';
import { CloudRain, DollarSign, CloudSun, Users, CheckCircle2 } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    { icon: <CloudRain className="size-6" />, text: "Increasingly frequent and severe droughts" },
    { icon: <DollarSign className="size-6" />, text: "Rising costs of fertilizers and inputs" },
    { icon: <CloudSun className="size-6" />, text: "Unpredictable weather patterns" },
    { icon: <Users className="size-6" />, text: "Critical labor shortages in rural areas" },
  ];

  const solutions = [
    { 
      title: "Precision Irrigation", 
      desc: "Optimize water usage with AI that predicts soil moisture needs down to the square meter.",
      icon: <CheckCircle2 className="text-primary" />
    },
    { 
      title: "Smart Input Management", 
      desc: "Reduce waste and costs by applying exactly what your crops need, when they need it.",
      icon: <CheckCircle2 className="text-primary" />
    },
    { 
      title: "Predictive Analytics", 
      desc: "Stay ahead of the weather with hyper-local forecasts and pest outbreak warnings.",
      icon: <CheckCircle2 className="text-primary" />
    },
    { 
      title: "Automated Workflows", 
      desc: "Streamline operations with tools that help you manage your farm with fewer hands.",
      icon: <CheckCircle2 className="text-primary" />
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Problems */}
        <div className="lg:w-1/2 bg-neutral-dark text-white p-12 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              The challenges farmers face today are <span className="text-accent">unprecedented.</span>
            </h2>
            <div className="space-y-6">
              {problems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-lg text-neutral-light/80">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Solutions */}
        <div className="lg:w-1/2 bg-neutral-light p-12 md:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-neutral-dark leading-tight">
              How GreenField <span className="text-primary">solves</span> them.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-light"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">{item.title}</h3>
                  <p className="text-neutral text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
