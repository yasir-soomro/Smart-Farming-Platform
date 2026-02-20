export interface Feature {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export const features: Feature[] = [
  { id: '1', title: "Crop Health Monitoring", desc: "Real-time AI analysis of satellite and drone imagery to detect stress early.", iconName: "Activity" },
  { id: '2', title: "Precision Irrigation", desc: "Smart recommendations based on soil sensors and weather data.", iconName: "Droplets" },
  { id: '3', title: "Predictive Alerts", desc: "Hyper-local weather forecasts and pest outbreak predictions.", iconName: "AlertTriangle" },
  { id: '4', title: "Soil & Yield Analytics", desc: "Comprehensive dashboard showing historical trends and predictions.", iconName: "BarChart3" },
  { id: '5', title: "Input Marketplace", desc: "Direct access to high-quality seeds and fertilizers.", iconName: "ShoppingBag" },
  { id: '6', title: "Sustainability Reporting", desc: "Track your carbon footprint and generate verified reports.", iconName: "Leaf" },
];

export const stats = [
  { id: 's1', label: 'Yield Increase', value: '+30%' },
  { id: 's2', label: 'Water Saved', value: '-25%' },
  { id: 's3', label: 'Profit Growth', value: '+18%' },
];

export const pricingPlans = [
  { id: 'p1', name: 'Free', price: '$0', desc: 'Perfect for smallholder farmers.', features: ['Basic Monitoring', 'Weather Alerts', 'Up to 5 Fields'], popular: false },
  { id: 'p2', name: 'Pro', price: '$49', period: '/mo', desc: 'Advanced tools for agribusinesses.', features: ['AI Disease Detection', 'Precision Irrigation', 'Unlimited Fields', 'Yield Analytics'], popular: true },
  { id: 'p3', name: 'Enterprise', price: 'Custom', desc: 'Tailored solutions for large scale.', features: ['Custom API', 'Dedicated Manager', 'On-site Analysis', 'Fleet Management'], popular: false },
];

export const testimonials = [
  { id: 't1', name: 'Samuel Miller', role: 'Grain Farmer', location: 'Iowa, USA', quote: 'Reduced fertilizer costs by 22% in the first season.' },
  { id: 't2', name: 'Elena Rodriguez', role: 'Vineyard Owner', location: 'Mendoza, AR', quote: 'Precision irrigation alerts are a lifesaver for our water usage.' },
];
