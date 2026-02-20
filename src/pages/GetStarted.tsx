import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../lib/store';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function GetStarted() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', farmName: '', size: '' });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleNext = () => setStep(2);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-xl border border-neutral-light"
      >
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-neutral mb-2">
            <span>Step {step} of 2</span>
            <span>{step === 1 ? 'Personal Info' : 'Farm Details'}</span>
          </div>
          <div className="w-full h-2 bg-neutral-light rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: '50%' }} animate={{ width: step === 1 ? '50%' : '100%' }} 
              className="h-full bg-primary"
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-neutral-dark mb-6">
          {step === 1 ? "Let's get to know you" : "Tell us about your farm"}
        </h1>

        <form onSubmit={step === 1 ? (e) => { e.preventDefault(); handleNext(); } : handleSubmit} className="space-y-5">
          {step === 1 ? (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-neutral-dark mb-1.5">Full Name</label>
                <Input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Jane Doe" className="h-11" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-dark mb-1.5">Email Address</label>
                <Input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="jane@example.com" className="h-11" />
              </div>
              <Button type="submit" className="w-full h-11 text-sm font-bold mt-4">Continue</Button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-neutral-dark mb-1.5">Farm Name</label>
                <Input required value={formData.farmName} onChange={(e) => setFormData({...formData, farmName: e.target.value})} placeholder="Sunny Acres" className="h-11" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-dark mb-1.5">Farm Size (Acres)</label>
                <select required value={formData.size} onChange={(e) => setFormData({...formData, size: e.target.value})} className="flex h-11 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  <option value="">Select size...</option>
                  <option value="small">1 - 50</option>
                  <option value="medium">51 - 500</option>
                  <option value="large">500+</option>
                </select>
              </div>
              <div className="flex gap-3 mt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3 h-11 text-sm font-bold">Back</Button>
                <Button type="submit" className="w-2/3 h-11 text-sm font-bold">Complete Setup</Button>
              </div>
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
