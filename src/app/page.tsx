"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Hospital, 
  Plane, 
  HeartHandshake, 
  ShieldCheck, 
  BrainCircuit, 
  Wallet, 
  Languages 
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white dark:from-blue-900/20 dark:via-black dark:to-black"></div>
        
        <div className="text-center max-w-4xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 text-sm text-primary mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              SIH 2026 Prototype
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
              Healthcare in India. <br />
              <span className="text-gradient">Powered by Intelligence.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              From medical evaluation to hospital selection, travel, treatment and post-care — HealIndia AI coordinates the complete healthcare journey for international patients.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => router.push('/onboarding')} size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                Start My Healthcare Journey
              </Button>
              <Button onClick={() => router.push('/hospitals')} variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg">
                Explore Hospitals
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating AI Cards */}
        <div className="relative mt-20 max-w-5xl mx-auto h-[400px]">
          {/* Main Interface Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-10 w-full max-w-3xl glass-panel rounded-2xl overflow-hidden border border-white/50 shadow-2xl"
          >
            <div className="h-8 bg-gray-100/80 border-b border-gray-200/50 flex items-center px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="p-6 bg-white/60">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Case Summary</h3>
                  <p className="text-sm text-gray-500">Based on your uploaded MRI report</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
              </div>
              <div className="mt-6 flex gap-3">
                <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">Cardiology</div>
                <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">CABG Required</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute left-0 top-1/4 glass-card p-4 rounded-xl shadow-lg border border-white/60 z-10 w-48"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <Wallet className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-gray-500">Est. Savings</span>
            </div>
            <div className="text-xl font-bold text-gray-900">₹8.4L</div>
            <div className="text-[10px] text-gray-400 mt-1">Compared to US/UK</div>
          </motion.div>

          {/* Floating Widget 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute right-0 top-1/3 glass-card p-4 rounded-xl shadow-lg border border-white/60 z-10 w-56"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Hospital className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-gray-500">AI Matched</span>
            </div>
            <div className="text-lg font-bold text-gray-900">12 Hospitals</div>
            <div className="text-[10px] text-green-600 font-medium mt-1">92% Specialty Match</div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="w-full bg-white border-y py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <ShieldCheck className="text-primary w-5 h-5" /> Verified Hospitals
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <Wallet className="text-primary w-5 h-5" /> Transparent Pricing
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <Languages className="text-primary w-5 h-5" /> Multilingual Support
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <BrainCircuit className="text-primary w-5 h-5" /> Secure Medical Records
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">One Connected Healthcare Journey</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We handle the complexity so you can focus on healing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. AI Assessment</h3>
            <p className="text-gray-600 text-sm">Upload your medical records. Our AI structures your case and extracts key medical terminology instantly.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
              <Hospital className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Smart Matching</h3>
            <p className="text-gray-600 text-sm">Get matched with top-tier accredited Indian hospitals based on specialty, outcome data, and your budget.</p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Travel & Visa</h3>
            <p className="text-gray-600 text-sm">Seamless coordination for medical visas, flights, accommodation, and airport transfers.</p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Post-Care</h3>
            <p className="text-gray-600 text-sm">Continuous digital follow-up, symptom tracking, and direct connection with your doctor after returning home.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
