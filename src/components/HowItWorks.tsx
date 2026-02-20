import { motion } from 'framer-motion';
import { Download, Settings, BarChart, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Farm",
      desc: "Easily integrate your existing sensors, or use our satellite-first approach to map your fields in minutes.",
      icon: <Download className="size-8" />,
    },
    {
      number: "02",
      title: "AI Analysis",
      desc: "Our proprietary AI models process millions of data points to understand your soil and crop health.",
      icon: <Settings className="size-8" />,
    },
    {
      number: "03",
      title: "Get Actionable Insights",
      desc: "Receive precise recommendations for irrigation, fertilization, and pest management directly on your phone.",
      icon: <BarChart className="size-8" />,
    },
    {
      number: "04",
      title: "Optimize & Grow",
      desc: "Apply recommendations, track results in real-time, and watch your yields increase while costs drop.",
      icon: <CheckCircle className="size-8" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-neutral-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4"
          >
            Four steps to <span className="text-primary">precision.</span>
          </motion.h2>
          <p className="text-xl text-neutral">Getting started with GreenField Ag is simple and fast.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0">
            <svg className="w-full h-full overflow-visible">
              <motion.path
                d="M 0 0 H 1000"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="text-primary/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-primary/10 text-primary relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-4">{step.title}</h3>
                <p className="text-neutral leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
