/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveDashboard } from './components/LiveDashboard';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { ROICalculator } from './components/ROICalculator';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ThreeBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LiveDashboard />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <ROICalculator />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
