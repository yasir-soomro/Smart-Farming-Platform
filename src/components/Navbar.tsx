import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, Home, DollarSign, LogIn, LogOut, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useAuthStore } from '../lib/store';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, theme, toggleTheme } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Features', href: '/features', icon: Leaf },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
  ];

  if (isAuthenticated) {
    navLinks.push({ name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard });
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-neutral-dark/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="text-primary size-6 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-tighter text-neutral-dark dark:text-white">
              GreenField<span className="text-accent">Ag</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-neutral dark:text-neutral-light'}`}
                >
                  <Icon className="size-4" />
                  {link.name}
                </Link>
              );
            })}
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-neutral-light/50 dark:hover:bg-white/10 text-neutral-dark dark:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="flex items-center gap-3 ml-2 border-l border-neutral-light dark:border-white/10 pl-4">
              {isAuthenticated ? (
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-sm dark:text-white dark:hover:bg-white/10">
                  <LogOut className="size-4 mr-2" /> Logout
                </Button>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild className="dark:text-white dark:hover:bg-white/10">
                    <Link to="/login"><LogIn className="size-4 mr-2" /> Login</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/get-started">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-neutral-dark dark:text-white"
            >
              {theme === 'light' ? <Moon className="size-5" /> : <Sun className="size-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-neutral-dark dark:text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-neutral-dark border-t border-neutral-light dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-base font-medium text-neutral-dark dark:text-white hover:text-primary dark:hover:text-primary"
                  >
                    <Icon className="size-5" /> {link.name}
                  </Link>
                )
              })}
              <div className="pt-4 flex flex-col gap-3 border-t border-neutral-light dark:border-white/10">
                {isAuthenticated ? (
                  <Button variant="outline" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="w-full justify-start dark:text-white dark:border-white/20">
                    <LogOut className="size-4 mr-2" /> Logout
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-full justify-start dark:text-white dark:border-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link to="/login"><LogIn className="size-4 mr-2" /> Login</Link>
                    </Button>
                    <Button asChild className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                      <Link to="/get-started">Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
