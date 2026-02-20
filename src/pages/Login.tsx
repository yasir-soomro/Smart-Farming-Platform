import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '../lib/store';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Leaf } from 'lucide-react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake login
    login({ name: 'Demo User', email });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white dark:bg-neutral-dark p-8 rounded-3xl shadow-xl border border-neutral-light dark:border-white/10"
      >
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-2xl">
            <Leaf className="size-8 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-neutral-dark dark:text-white mb-2">Welcome Back</h1>
        <p className="text-sm text-center text-neutral dark:text-neutral-light/80 mb-8">Sign in to your GreenField account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-neutral-dark dark:text-white mb-1.5">Email</label>
            <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="farmer@example.com" className="h-11 dark:bg-black/20 dark:border-white/10 dark:text-white" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-neutral-dark dark:text-white">Password</label>
              <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
            </div>
            <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="h-11 dark:bg-black/20 dark:border-white/10 dark:text-white" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-neutral-light dark:border-white/10 bg-transparent text-primary focus:ring-primary" />
            <label htmlFor="remember" className="text-xs text-neutral dark:text-neutral-light/80">Remember me</label>
          </div>
          <Button type="submit" className="w-full h-11 text-sm font-bold">Sign In</Button>
        </form>

        <p className="text-center text-xs text-neutral dark:text-neutral-light/80 mt-8">
          Don't have an account? <Link to="/get-started" className="text-primary font-bold hover:underline">Get Started</Link>
        </p>
      </motion.div>
    </div>
  );
}

