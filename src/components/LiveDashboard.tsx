import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CloudSun, 
  Thermometer, 
  Droplets, 
  Wind, 
  Activity, 
  Sprout, 
  TrendingUp,
  AlertCircle,
  Sun
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

// Mock data generator
const generateData = () => {
  const data = [];
  const now = new Date();
  for (let i = 20; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: 22 + Math.random() * 5,
      moisture: 45 + Math.random() * 10,
      health: 85 + Math.random() * 5,
    });
  }
  return data;
};

export function LiveDashboard() {
  const [data, setData] = useState(generateData());
  const [currentMetrics, setCurrentMetrics] = useState({
    temp: 24.5,
    humidity: 62,
    wind: 12,
    soilMoisture: 48,
    cropHealth: 92,
    pestRisk: 'Low'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        const lastTime = new Date();
        newData.push({
          time: lastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          temp: 22 + Math.random() * 5,
          moisture: 45 + Math.random() * 10,
          health: 85 + Math.random() * 5,
        });
        return newData;
      });

      setCurrentMetrics(prev => ({
        ...prev,
        temp: Number((22 + Math.random() * 5).toFixed(1)),
        soilMoisture: Number((45 + Math.random() * 10).toFixed(1)),
        cropHealth: Number((88 + Math.random() * 7).toFixed(1)),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'Ambient Temp', value: `${currentMetrics.temp}°C`, icon: <Thermometer className="text-primary size-8" />, bg: 'bg-primary/10' },
    { label: 'Wind Speed', value: `${currentMetrics.wind} km/h`, icon: <Wind className="text-blue-500 size-8" />, bg: 'bg-blue-500/10' },
    { label: 'Solar Rad', value: '840 W/m²', icon: <Sun className="text-accent size-8" />, bg: 'bg-accent/10' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-neutral-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-neutral-dark mb-4">
              Real-Time <span className="text-primary">Farm Intelligence</span>
            </h2>
            <p className="text-neutral text-lg">Live data feeds from your fields, powered by GreenField IoT sensors.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-white/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-dark flex items-center gap-3">
                    <Activity className="text-primary size-6" /> Live Analytics
                  </h3>
                  <p className="text-sm text-neutral mt-1">Real-time telemetry from active sensors</p>
                </div>
                <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2 text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Health
                  </span>
                  <span className="flex items-center gap-2 text-blue-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" /> Moisture
                  </span>
                </div>
              </div>
              <div className="h-[250px] sm:h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorHealth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2e7d32" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#2e7d32" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fontSize: 10, fill: '#666', fontWeight: 600}} 
                      dy={10}
                      minTickGap={20}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fontSize: 10, fill: '#666', fontWeight: 600}} 
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '20px', 
                        border: '1px solid rgba(255,255,255,0.4)', 
                        background: 'rgba(255,255,255,0.8)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' 
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="health" 
                      stroke="#2e7d32" 
                      fillOpacity={1} 
                      fill="url(#colorHealth)" 
                      strokeWidth={4} 
                      animationDuration={1000}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="moisture" 
                      stroke="#3b82f6" 
                      fillOpacity={1} 
                      fill="url(#colorMoisture)" 
                      strokeWidth={4} 
                      animationDuration={1000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Mobile Carousel / Desktop Grid for Stat Cards */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible hide-scrollbar">
              {metrics.map((m, i) => (
                <div key={i} className="snap-center shrink-0 w-[85%] md:w-auto bg-white p-6 rounded-3xl shadow-sm border border-neutral-light flex items-center gap-6">
                  <div className={`p-4 ${m.bg} rounded-2xl`}>
                    {m.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral uppercase tracking-widest">{m.label}</p>
                    <p className="text-3xl font-black text-neutral-dark">{m.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sprout size={120} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-80">Current Crop Status</h4>
              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Overall Health</span>
                    <span className="text-sm font-bold">{currentMetrics.cropHealth}%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${currentMetrics.cropHealth}%` }}
                      className="bg-accent h-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Soil Moisture</span>
                    <span className="text-sm font-bold">{currentMetrics.soilMoisture}%</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${currentMetrics.soilMoisture}%` }}
                      className="bg-blue-300 h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg text-neutral-dark">
                  <TrendingUp size={20} />
                </div>
                <p className="text-xs font-medium">Projected yield is up 12% from last week.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-light">
              <h4 className="text-sm font-bold text-neutral uppercase tracking-widest mb-4">Alerts & Notifications</h4>
              <div className="space-y-4">
                <div className="flex gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                  <AlertCircle className="text-red-500 shrink-0" size={20} />
                  <p className="text-xs text-red-800 font-medium">Low moisture detected in Sector B-4. Irrigation recommended.</p>
                </div>
                <div className="flex gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
                  <CloudSun className="text-yellow-600 shrink-0" size={20} />
                  <p className="text-xs text-yellow-800 font-medium">High UV index expected tomorrow. Adjust nutrient feed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

