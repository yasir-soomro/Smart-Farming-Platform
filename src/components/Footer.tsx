import { Leaf, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-primary size-8" />
              <span className="text-2xl font-bold tracking-tighter">
                GreenField<span className="text-accent">Ag</span>
              </span>
            </div>
            <p className="text-neutral-light/60 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of farmers with AI-driven precision tools for a more sustainable and profitable future.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-neutral-light/60">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-neutral-light/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-neutral-light/60 mb-4">Get the latest agtech insights delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-light/40">
          <p>© 2026 GreenField Ag Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <p>Made with care for the next generation of farmers</p>
        </div>
      </div>
    </footer>
  );
}
