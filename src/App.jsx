import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Stars, OrbitControls, Environment } from '@react-three/drei'
import Hero3D from './components/Hero3D.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Service from './components/Service.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div  className=" min-h-full flex flex-col">
      <header className=" fixed  z-10 w-full bg-black/50 backdrop-blur-sm border-b border-white/10 ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Emperor Bulls" className="h-8 w-8" />
            <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-indigo-400">
                <a href="#home" className="hover:text-white">Emperor Bulls</a>
              </span>
            </div>
          </div>

          <nav className=" hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#service" className="hover:text-white">Service</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/20">
              Sign In
            </a>
          </nav>
        </div>
      </header>


      <section className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

        {/* 3D Canvas */}
        <section id="home" >
        <div className="absolute inset-0">
					<Canvas camera={{ position: [0, 2.5, 8], fov: 42 }} dpr={[1, 2]}>
						<color attach="background" args={['#0b1020']} />
						<ambientLight intensity={0.5} />
						<directionalLight position={[5, 5, 5]} intensity={1.2} />
						<Suspense fallback={null}>
							<Stars radius={120} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
							<Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
								<Hero3D />
							</Float>
							<Environment preset="city" />
						</Suspense>
						<OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
					</Canvas>
				</div>
        </section>

        {/* Hero Text */}
        <div className="relative z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-indigo-200">
                  Learn Stock Market Like a Pro with Emperor Bulls !!
                </span>
              </h1>
              <p className="mt-5 text-slate-300 text-lg sm:text-xl max-w-2xl">
                Master Trading, Investing & Technical Analysis with India’s Leading Stock Market Training Institute.
              </p>
              <div className="mt-8 flex items-center gap-3 pointer-events-auto">
                <a href="#get-started" className="px-5 py-3 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
                  Get Started
                </a>
                <a href="#demo" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition">
                  Watch Demo
                </a>
              </div>
              <div className="mt-8 text-xs text-slate-400">
                Trusted by traders and funds across the globe.
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Stock Ticker - DOM only, no Canvas */}
        <div className="absolute bottom-0 w-full bg-gray-900 overflow-hidden py-2 z-20">
          <div className="animate-ticker whitespace-nowrap text-white text-sm md:text-base col">
            NIFTY 50: 22,345 ▲ 1.2% | SENSEX: 75,210 ▼ 0.5% | TCS: ₹3,450 ▲ 0.8% |
            INFY: ₹1,520 ▼ 0.3% | NASDAQ: 15,000 ▲ 0.9% | APPLE: $180 ▲ 1.5% |
            GOOGLE: $135 ▼ 0.4%
          </div>
        </div>
      </section>
      <WhatsAppButton />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}
