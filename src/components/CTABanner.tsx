import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  farmSize: z.string().min(1, "Please select farm size"),
});

export function CTABanner() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thank you! We'll be in touch soon.");
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Ready to grow <span className="text-accent">smarter?</span>
            </motion.h2>
            <p className="text-xl text-primary-light/90 mb-8 max-w-xl">
              Join thousands of farmers who are already optimizing their yields and protecting the environment with GreenField Ag.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-md bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-neutral-dark mb-2">Full Name</label>
                <Input {...register("name")} placeholder="John Doe" className="h-12 rounded-xl" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-dark mb-2">Email Address</label>
                <Input {...register("email")} type="email" placeholder="john@farm.com" className="h-12 rounded-xl" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-dark mb-2">Farm Size</label>
                <select
                  {...register("farmSize")}
                  className="w-full h-12 rounded-xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Select size...</option>
                  <option value="small">Small (0-50 acres)</option>
                  <option value="medium">Medium (50-500 acres)</option>
                  <option value="large">Large (500+ acres)</option>
                </select>
                {errors.farmSize && <p className="text-red-500 text-xs mt-1">{errors.farmSize.message as string}</p>}
              </div>
              <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">
                Start Free Trial
              </Button>
              <p className="text-center text-xs text-neutral">No credit card required. Cancel anytime.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
