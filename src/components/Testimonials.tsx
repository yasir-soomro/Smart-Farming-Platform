import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Samuel Miller",
      role: "Large-scale Grain Farmer",
      location: "Iowa, USA",
      image: "https://picsum.photos/seed/farmer1/100/100",
      quote: "GreenField Ag changed the way we look at our soil. We reduced our fertilizer costs by 22% in the first season alone while maintaining record yields.",
    },
    {
      name: "Elena Rodriguez",
      role: "Vineyard Owner",
      location: "Mendoza, Argentina",
      image: "https://picsum.photos/seed/farmer2/100/100",
      quote: "The precision irrigation alerts are a lifesaver. In a region where water is gold, GreenField helps us use every drop with purpose.",
    },
    {
      name: "David Chen",
      role: "Sustainable Ag Consultant",
      location: "New South Wales, AU",
      image: "https://picsum.photos/seed/farmer3/100/100",
      quote: "The sustainability reporting features are world-class. It's the only platform that makes carbon credit verification actually manageable for farmers.",
    },
  ];

  const partners = [
    "John Deere", "Bayer", "FAO", "Syngenta", "Corteva"
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-dark mb-4">Trusted by farmers <span className="text-primary">worldwide.</span></h2>
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-accent text-accent" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-light/30 p-8 rounded-3xl relative border border-neutral-light"
            >
              <Quote className="absolute top-6 right-8 size-12 text-primary/10" />
              <p className="text-neutral italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="size-12 rounded-full object-cover border-2 border-primary/20" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-neutral-dark">{t.name}</h4>
                  <p className="text-xs text-neutral">{t.role} • {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-neutral-light pt-16">
          <p className="text-center text-sm font-semibold text-neutral uppercase tracking-widest mb-10">Our Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-2xl font-black text-neutral-dark tracking-tighter">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
