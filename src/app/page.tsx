"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Hospital, 
  Stethoscope, 
  Wallet, 
  Plane, 
  FileCheck, 
  Hotel, 
  RotateCcw, 
  BrainCircuit, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  FileText, 
  Globe2, 
  Clock, 
  MessageSquare,
  Search,
  Languages
} from "lucide-react";
import { TREATMENTS, HOSPITALS } from "@/lib/data";

export default function Home() {
  const router = useRouter();

  const whyCards = [
    {
      icon: BrainCircuit,
      title: "🤖 AI Smart Matching",
      desc: "Transparent hybrid recommendation scoring factoring in medical condition, budget, accreditation, and location preferences.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: Hospital,
      title: "🏥 Verified Hospitals",
      desc: "Partnered exclusively with top JCI & NABH accredited quaternary care medical centers across Delhi NCR, Mumbai, and Chennai.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: Stethoscope,
      title: "👨‍⚕️ Expert Specialists",
      desc: "Direct access to internationally renowned surgeons and doctors with decades of surgical expertise and research accolades.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: Wallet,
      title: "💰 Transparent Estimates",
      desc: "Itemized package quotes before departure. Zero surprise fees, saving 65% to 80% compared to Western healthcare costs.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: Plane,
      title: "✈️ Travel Support",
      desc: "End-to-end logistics coordination including flight bookings, VIP airport meet-and-greet, and dedicated medical transfers.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: FileCheck,
      title: "📄 Visa Assistance",
      desc: "Instant hospital invitation letters and an automated AI document checklist to expedite Medical Visa approval.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: Hotel,
      title: "🏨 Accommodation",
      desc: "Pre-screened recovery apartments and guest houses with kitchens and wheelchair accessibility within 2 km of hospitals.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      icon: RotateCcw,
      title: "🔄 Post-Treatment Care",
      desc: "Synchronized digital follow-up consultations, medication reminders, and tele-health monitoring once you return home.",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    }
  ];

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/80 via-zinc-50/40 to-white"></div>
        
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100/90 px-4 py-1.5 text-xs md:text-sm font-semibold text-zinc-900 mb-6 shadow-xs backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-zinc-900 mr-2 animate-ping"></span>
              ✚ HealIndiaAI • MediVoyage AI Platform
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-tight">
              MEDIVOYAGE AI <br />
              <span className="text-gradient">Your Healthcare Journey Beyond Borders</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-zinc-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-Powered Hospital Matching • Medical Travel Support • Treatment Coordination • Post-Treatment Care. One connected system for international patients seeking world-class healthcare in India.
            </p>
            
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                onClick={() => router.push('/ai-care-match')} 
                size="lg" 
                className="rounded-full px-8 py-6 text-base md:text-lg bg-zinc-900 hover:bg-black text-white shadow-lg shadow-zinc-900/20 cursor-pointer flex items-center gap-2 group"
              >
                <Sparkles className="w-5 h-5 text-zinc-300 group-hover:rotate-12 transition-transform" />
                Start Your Medical Journey
              </Button>
              <Button 
                onClick={() => router.push('/ai-care-match?step=upload')} 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base md:text-lg border-zinc-300 hover:border-zinc-900 text-zinc-900 hover:text-black bg-white shadow-xs cursor-pointer flex items-center gap-2"
              >
                <FileText className="w-5 h-5 text-zinc-800" />
                Upload Medical Reports
              </Button>
            </div>

            {/* Quick Hero Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-600">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-950" /> JCI & NABH Accredited</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-950" /> 70% Cost Advantage</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-950" /> 24x7 Medical Coordinator</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-950" /> Fast-Track Medical Visa</span>
            </div>
          </motion.div>
        </div>

        {/* Floating AI & Patient Experience Mockup */}
        <div className="relative mt-16 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel rounded-3xl overflow-hidden border border-zinc-200/90 shadow-2xl bg-white/90"
          >
            {/* Top Mock Window Bar */}
            <div className="h-10 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between px-5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-400"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-500"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-zinc-800" />
                ai-care-match.healindia.ai/engine-v2.4
              </div>
              <Badge variant="outline" className="text-[10px] bg-zinc-100 text-zinc-800 border-zinc-200">
                Ready
              </Badge>
            </div>

            {/* Mock Body */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 border border-zinc-200">
                      <BrainCircuit className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-950 text-lg">AI Clinical Case Structuring</h3>
                      <p className="text-xs text-zinc-500">Angiography & Echocardiogram (Extracted via OCR Engine)</p>
                    </div>
                  </div>
                  <Badge className="bg-zinc-900 text-white font-semibold">96% Hospital Fit</Badge>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs text-zinc-700">
                  <p className="font-semibold text-zinc-950 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" /> Primary Diagnosis Detected:
                  </p>
                  <p className="pl-4 text-zinc-600">Severe multi-vessel coronary artery disease. Suggested clinical pathway: Off-pump Coronary Artery Bypass Graft (CABG).</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-md font-medium">Cardiology</span>
                    <span className="px-2.5 py-1 bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-md font-medium">Robotic Assisted</span>
                    <span className="px-2.5 py-1 bg-zinc-100 text-zinc-800 border border-zinc-200 rounded-md font-medium">Estimated Stay: 6 Days</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-2xs">
                    <div className="text-[11px] text-zinc-500">US/UK Cost</div>
                    <div className="text-sm font-bold text-zinc-400 line-through">$85,000</div>
                  </div>
                  <div className="p-3 bg-zinc-100/90 border border-zinc-200 rounded-xl shadow-2xs">
                    <div className="text-[11px] text-zinc-600 font-medium">India Package</div>
                    <div className="text-base font-extrabold text-zinc-950">$6,800</div>
                  </div>
                  <div className="p-3 bg-zinc-900 text-white border border-zinc-900 rounded-xl shadow-2xs">
                    <div className="text-[11px] text-zinc-300 font-medium">Patient Savings</div>
                    <div className="text-base font-extrabold text-white">~ 82%</div>
                  </div>
                </div>
              </div>

              {/* Side Widget: Top Matched Hospital */}
              <div className="border-t lg:border-t-0 lg:border-l border-zinc-200 lg:pl-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    #1 Ranked Hospital
                  </div>
                  <h4 className="font-bold text-zinc-950 text-base">Medanta - The Medicity</h4>
                  <p className="text-xs text-zinc-500">Delhi NCR • JCI & NABH Accredited</p>
                  
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-zinc-100">
                      <span className="text-zinc-500">Match Score</span>
                      <span className="font-bold text-zinc-950">96 / 100</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-100">
                      <span className="text-zinc-500">International Desk</span>
                      <span className="font-semibold text-zinc-800">24/7 Dedicated</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-100">
                      <span className="text-zinc-500">Chief Surgeon</span>
                      <span className="font-semibold text-zinc-800">Dr. Naresh Trehan</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => router.push('/ai-care-match')}
                  className="w-full bg-zinc-900 hover:bg-black text-white rounded-xl shadow-md text-xs py-2.5 font-semibold cursor-pointer"
                >
                  Test Care Match Engine <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why MediVoyage AI? / Why HealIndiaAI? */}
      <section className="w-full bg-white border-y border-zinc-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="bg-zinc-100 text-zinc-800 border-zinc-200 mb-3 font-semibold">
              Section 1
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
              Why MediVoyage AI?
            </h2>
            <p className="text-zinc-600 text-lg">
              We bridge the gap between complex cross-border medical travel and effortless, intelligent healthcare delivery with 8 integrated pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 hover:bg-white hover:border-zinc-400 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-black transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center text-xs font-semibold text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Featured Treatments Grid Preview */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Specialized Care</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mt-1">
              Top Medical Treatments in India
            </h2>
            <p className="text-zinc-500 text-sm mt-1 max-w-xl">
              World-class robotic surgeries, oncology, and transplants at a fraction of global costs.
            </p>
          </div>
          <Link href="/treatments" className="mt-4 md:mt-0 font-semibold text-zinc-900 hover:underline text-sm flex items-center gap-1">
            Explore All 10 Specialties <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.slice(0, 4).map((treatment) => (
            <Card key={treatment.id} className="p-6 hover:shadow-lg transition-all border-zinc-200 flex flex-col justify-between bg-white">
              <div>
                <div className="text-xs font-semibold text-zinc-500 mb-1">{treatment.category}</div>
                <h3 className="font-bold text-zinc-950 text-lg mb-2">{treatment.name}</h3>
                <p className="text-xs text-zinc-600 line-clamp-2 mb-4">{treatment.description}</p>
                
                <div className="space-y-2 text-xs border-t border-zinc-100 pt-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Estimated Cost:</span>
                    <span className="font-bold text-zinc-950">{treatment.costRangeUSD}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Hospital Stay:</span>
                    <span className="font-medium text-zinc-700">{treatment.hospitalStay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Trip Duration:</span>
                    <span className="font-medium text-zinc-700">{treatment.tripDuration}</span>
                  </div>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => router.push(`/treatments#${treatment.id}`)}
                className="w-full text-xs font-semibold border-zinc-300 hover:bg-zinc-100 text-zinc-900"
              >
                View Treatment Profile
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Hospital Network Preview */}
      <section className="w-full bg-zinc-50/70 border-y border-zinc-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Accredited Centers</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mt-1">
                India's Top Quaternary Hospitals
              </h2>
              <p className="text-zinc-500 text-sm mt-1 max-w-xl">
                Only institutions meeting rigorous JCI, NABH, and international patient care benchmarks.
              </p>
            </div>
            <Link href="/hospitals" className="mt-4 md:mt-0 font-semibold text-zinc-900 hover:underline text-sm flex items-center gap-1">
              Compare All Hospitals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOSPITALS.slice(0, 3).map((h) => (
              <Card key={h.id} className="p-6 hover:shadow-xl transition-all border-zinc-200 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-zinc-950 text-lg">{h.name}</h3>
                    <Badge variant="secondary" className="bg-zinc-100 text-zinc-800 border-zinc-200">
                      {h.accreditation}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-500 mb-4">{h.city} • {h.distanceFromAirport}</p>
                  
                  <p className="text-xs text-zinc-600 line-clamp-3 mb-4 leading-relaxed">
                    {h.description}
                  </p>

                  <div className="space-y-2 text-xs border-t border-zinc-100 pt-3 mb-5">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">HealIndia Trust Score:</span>
                      <span className="font-bold text-zinc-950">{h.trustScore}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Languages:</span>
                      <span className="font-medium text-zinc-700">{h.languages.slice(0, 3).join(", ")}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => router.push('/hospitals')}
                    className="text-xs font-semibold border-zinc-300 text-zinc-800 hover:bg-zinc-100"
                  >
                    Compare
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => router.push('/ai-care-match')}
                    className="text-xs font-semibold bg-zinc-900 hover:bg-black text-white"
                  >
                    Match Me
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Step Connected Journey Banner */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-100 via-zinc-50 to-white text-zinc-900 border border-zinc-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/80 text-xs font-semibold text-zinc-900 mb-4 border border-zinc-300/80">
              <RotateCcw className="w-3.5 h-3.5 text-zinc-700" /> Complete 10-Step Synchronized Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
              From Inquiry to Full Recovery at Home
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8">
              No disconnected spreadsheets or WhatsApp groups. MediVoyage AI organizes your inquiries, document uploads, doctor reviews, hospital invitation letters, medical visa filings, hotel transfers, surgical admission, and tele-health follow-up into one cohesive portal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => router.push('/how-it-works')} 
                size="lg" 
                className="bg-zinc-900 hover:bg-black text-white rounded-full font-bold px-8 shadow-xs cursor-pointer"
              >
                View the 10-Step Journey Map <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button 
                onClick={() => router.push('/login')} 
                variant="outline" 
                size="lg" 
                className="border-zinc-300 text-zinc-800 hover:bg-zinc-100 rounded-full font-semibold px-6 cursor-pointer"
              >
                Explore Portals (Patient / Hospital / CRM)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
