// src/components/Service.jsx
import React from "react";
import { TrendingUp, Shield, Zap, Target, BarChart3, DollarSign, Brain, Rocket } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze market patterns and predict trends with 99.2% accuracy.",
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-emerald-400/5",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Sophisticated hedging strategies and real-time portfolio protection with automated stop-loss systems.",
    color: "text-indigo-400",
    gradient: "from-indigo-400/20 to-indigo-400/5",
  },
  {
    icon: Zap,
    title: "Lightning Execution",
    description: "Sub-millisecond order execution with direct market access and institutional-grade infrastructure.",
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-emerald-400/5",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Laser-focused investment strategies using quantitative models and sentiment analysis.",
    color: "text-indigo-400",
    gradient: "from-indigo-400/20 to-indigo-400/5",
  },
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    description: "Live market feeds, news sentiment analysis, and comprehensive financial data visualization.",
    color: "text-emerald-400",
    gradient: "from-emerald-400/20 to-emerald-400/5",
  },
  {
    icon: Rocket,
    title: "Wealth Acceleration",
    description: "Exponential wealth building through strategic positioning and compound growth optimization.",
    color: "text-indigo-400",
    gradient: "from-indigo-400/20 to-indigo-400/5",
  },
];

const marketData = [
  { symbol: "BULL", price: 4847.23, change: 12.7, volume: "2.1M" },
  { symbol: "EMP", price: 892.45, change: 8.3, volume: "1.8M" },
  { symbol: "GOLD", price: 2145.67, change: 15.2, volume: "3.2M" },
  { symbol: "TECH", price: 156.78, change: -2.1, volume: "987K" },
];

export default function Services() {
  return (
     <section
      id="service" // this is important for navbar links
      className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-6"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
            <TrendingUp className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Premium Services</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-400">
              Institutional-Grade
            </span>
            <br />
            Trading Arsenal
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed">
            Harness the power of Wall Street with our comprehensive suite of advanced trading tools, 
            AI-driven analytics, and battle-tested strategies designed for market domination.
          </p>
        </div>

        {/* Live Trading Performance */}
        <div className="mb-20">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-indigo-400 mb-3">Live Trading Performance</h3>
              <p className="text-slate-400 text-lg">Real-time 3D market visualization powered by AI</p>

              {/* Market ticker */}
              <div className="flex justify-center gap-8 mt-6 flex-wrap">
                {marketData.map((stock) => (
                  <div key={stock.symbol} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-sm font-mono">
                      <div className="font-bold text-white">{stock.symbol}</div>
                      <div className="text-lg font-bold text-emerald-400">${stock.price.toFixed(2)}</div>
                      <div className={`text-sm ${stock.change > 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {stock.change > 0 ? "+" : ""}
                        {stock.change}%
                      </div>
                      <div className="text-xs text-slate-400">Vol: {stock.volume}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated StockChart3D */}
            <StockChart3D data={[2.1, 3.8, 2.5, 4.2, 3.1, 5.5, 4.8, 3.9, 4.6, 5.2, 6.1, 5.8]} />

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">+847%</div>
                <div className="text-xs text-slate-400">5-Year Return</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-indigo-400">0.12</div>
                <div className="text-xs text-slate-400">Sharpe Ratio</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">-2.1%</div>
                <div className="text-xs text-slate-400">Max Drawdown</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-indigo-400">98.7%</div>
                <div className="text-xs text-slate-400">Win Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-semibold">Premium Feature</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Inline StockChart3D Component */
function StockChart3D({ data = [] }) {
  return (
    <div className="w-full h-80 mt-10">
      <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        {data.map((value, i) => (
          <mesh key={i} position={[i - data.length / 2, value / 2, 0]}>
            <boxGeometry args={[0.5, value, 0.5]} />
            <meshStandardMaterial color={value > 3 ? "#10b981" : "#ef4444"} />
          </mesh>
        ))}
        <OrbitControls enablePan enableZoom />
      </Canvas>
      
    </div>
  );
}
