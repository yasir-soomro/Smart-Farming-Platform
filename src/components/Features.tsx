import { motion } from 'framer-motion';
import { 
  Activity, 
  Droplets, 
  AlertTriangle, 
  BarChart3, 
  ShoppingBag, 
  Leaf 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Features() {
  const features = [
    {
      title: "Crop Health Monitoring",
      desc: "Real-time AI analysis of satellite and drone imagery to detect stress, disease, and nutrient deficiencies early.",
      icon: <Activity className="size-6 text-primary" />,
    },
    {
      title: "Precision Irrigation",
      desc: "Smart recommendations based on soil sensors and weather data to optimize every drop of water.",
      icon: <Droplets className="size-6 text-primary" />,
    },
    {
      title: "Predictive Alerts",
      desc: "Hyper-local weather forecasts and pest outbreak predictions to help you take action before it's too late.",
      icon: <AlertTriangle className="size-6 text-primary" />,
    },
    {
      title: "Soil & Yield Analytics",
      desc: "Comprehensive dashboard showing historical trends and future yield predictions for data-driven decisions.",
      icon: <BarChart3 className="size-6 text-primary" />,
    },
    {
      title: "Input Marketplace",
      desc: "Direct access to high-quality seeds, fertilizers, and equipment from verified suppliers at competitive prices.",
      icon: <ShoppingBag className="size-6 text-primary" />,
    },
    {
      title: "Sustainability Reporting",
      desc: "Track your carbon footprint and generate verified reports for carbon credit markets and compliance.",
      icon: <Leaf className="size-6 text-primary" />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Everything you need to <span className="text-primary">grow smarter.</span>
            </h2>
            <p className="text-xl text-neutral max-w-2xl mx-auto">
              A comprehensive suite of tools designed to maximize your efficiency and minimize environmental impact.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-neutral-light hover:border-primary/30 hover:shadow-lg transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
