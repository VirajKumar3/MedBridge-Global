"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Sparkles,
  DollarSign,
  Compass,
  Heart,
  HelpCircle,
  Stethoscope,
  ChevronLeft,
  Info,
  ShieldCheck
} from "lucide-react";

export default function ResourcesPage() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  
  // Section 3: Why India Expandable Row
  const [expandedWhyIndia, setExpandedWhyIndia] = useState<number | null>(0);

  // Section 4: Interactive Cost Explorer State
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("cardiology");
  const [selectedProcedureId, setSelectedProcedureId] = useState<string>("cabg");
  const [showCostFactors, setShowCostFactors] = useState<boolean>(false);

  // Section 5: Interactive Journey Stepper State
  const [activeStep, setActiveStep] = useState<number>(0);

  // Section 6: Testimonial Carousel Index State
  const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

  // Section 7: FAQ Search & Accordion State
  const [faqSearch, setFaqSearch] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll spy effect
  useEffect(() => {
    const sections = ["overview", "why-india", "costs", "how-it-works", "stories", "faqs", "get-help"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Section 3 Data: Why India
  const whyIndiaRows = [
    {
      num: "01",
      title: "Experienced Specialists",
      summary: "Access specialists across multiple medical disciplines.",
      details: "Senior Indian surgeons and physicians hold qualifications and fellowships from top institutions in the US, UK, and Europe. They operate high-volume clinical programs with decades of specialized expertise."
    },
    {
      num: "02",
      title: "Accredited Hospitals",
      summary: "Explore hospitals that serve international patients.",
      details: "Partner institutions feature JCI (Joint Commission International) and NABH accreditations, operating advanced hybrid catheterization labs, Stryker robotic suites, and dedicated international patient floors."
    },
    {
      num: "03",
      title: "Treatment Options",
      summary: "Compare hospitals, specialties and available treatment pathways.",
      details: "From minimally invasive cardiac bypass to living donor transplants, patients receive multiple comparative clinical opinions tailored to their specific medical condition and budget."
    },
    {
      num: "04",
      title: "Care Coordination",
      summary: "Receive assistance with the non-clinical parts of your journey.",
      details: "MedBridge Global coordinates official Medical Visa invitation letters, airport pick-up services, dedicated language translators, Halal & customized dining, and post-discharge telehealth."
    }
  ];

  // Section 4 Data: Interactive Cost Explorer
  const specialties = [
    { id: "cardiology", label: "Cardiac Care" },
    { id: "orthopedics", label: "Orthopedics" },
    { id: "transplant", label: "Organ Transplant" },
    { id: "oncology", label: "Oncology" },
    { id: "fertility", label: "Fertility / IVF" }
  ];

  const procedureData: Record<string, Array<{ id: string; name: string; us: number; uk: number; india: number }>> = {
    cardiology: [
      { id: "cabg", name: "Coronary Artery Bypass (CABG)", us: 120000, uk: 35000, india: 6500 },
      { id: "valve", name: "Double Valve Replacement", us: 145000, uk: 42000, india: 8200 },
      { id: "angioplasty", name: "Angioplasty with Stents", us: 32000, uk: 14000, india: 3800 }
    ],
    orthopedics: [
      { id: "knee", name: "Robotic Total Knee Replacement", us: 45000, uk: 22000, india: 4200 },
      { id: "hip", name: "Total Hip Replacement", us: 40000, uk: 20000, india: 4500 },
      { id: "spine", name: "Lumbar Spinal Fusion", us: 65000, uk: 28000, india: 6200 }
    ],
    transplant: [
      { id: "liver", name: "Living Donor Liver Transplant", us: 350000, uk: 160000, india: 26000 },
      { id: "kidney", name: "Kidney Transplant", us: 180000, uk: 75000, india: 12500 }
    ],
    oncology: [
      { id: "proton", name: "Proton Beam Radiation Therapy", us: 140000, uk: 75000, india: 24000 },
      { id: "cyberknife", name: "CyberKnife Radiosurgery", us: 55000, uk: 28000, india: 7800 }
    ],
    fertility: [
      { id: "ivf", name: "Advanced IVF & ICSI Cycle", us: 18000, uk: 10500, india: 2800 }
    ]
  };

  const currentProcedures = procedureData[selectedSpecialty] || procedureData["cardiology"];
  const selectedProcedure = currentProcedures.find(p => p.id === selectedProcedureId) || currentProcedures[0];

  // Section 5 Data: How It Works Stepper
  const journeySteps = [
    {
      num: "01",
      title: "Tell Us What You Need",
      short: "Share your condition & symptoms.",
      details: "Submit a brief description of your medical requirement or procedure interest online."
    },
    {
      num: "02",
      title: "Share Medical Information",
      short: "Upload diagnostic reports & scans.",
      details: "Our medical desk securely collects your recent DICOM scans, blood work, and physician summaries."
    },
    {
      num: "03",
      title: "Review Hospital Options",
      short: "Receive quotes & doctor profiles.",
      details: "Review 2-3 formal opinion letters and itemized cost estimates from JCI accredited hospitals."
    },
    {
      num: "04",
      title: "Plan Your Treatment",
      short: "Confirm dates & travel logistics.",
      details: "Receive your Medical Visa invitation letter, flight advice, and local stay options."
    },
    {
      num: "05",
      title: "Travel & Receive Care",
      short: "Personal coordinator assistance.",
      details: "Land in India with airport pickup, dedicated translation, inpatient care, and remote follow-ups."
    }
  ];

  // Section 6 Data: Testimonials
  const testimonials = [
    {
      flag: "🇦🇪",
      name: "Fatima Al-Nuaimi",
      location: "Dubai, UAE",
      treatment: "Bilateral Robotic Knee Replacement",
      hospital: "Apollo Hospitals, New Delhi",
      date: "July 2026",
      quote: "The Arabic translator met us right at the terminal. Our hospital suite felt comfortable and peaceful, and I was walking comfortably by day 3."
    },
    {
      flag: "🇬🇧",
      name: "David Harrison",
      location: "Manchester, UK",
      treatment: "Laparoscopic Bariatric Surgery",
      hospital: "Max Super Speciality, Saket",
      date: "June 2026",
      quote: "Faced with an NHS waitlist of over 2 years, MedBridge Global arranged my tele-consultation in 48 hours. The surgical precision and care exceeded expectations."
    },
    {
      flag: "🇳🇬",
      name: "John & Grace D.",
      location: "Lagos, Nigeria",
      treatment: "Double Valve Replacement",
      hospital: "Medanta - The Medicity, Gurgaon",
      date: "August 2026",
      quote: "Dr. Trehan's team at Medanta was world-class. From visa support to airport reception, the entire coordination process gave our family complete confidence."
    }
  ];

  // Section 7 Data: FAQs
  const allFaqs = [
    { q: "How much does treatment in India cost?", a: "Treatment in India typically costs 60% to 85% less than in the US or UK for equivalent JCI-accredited procedures. Indicative costs depend on hospital tier, surgeon experience, stay duration, and diagnostic requirements." },
    { q: "How do I choose a hospital?", a: "MedBridge Global provides impartial comparative profiles of accredited hospitals based on specialty volume, doctor qualifications, clinical outcome data, and estimated package pricing." },
    { q: "How does MedBridge Global help?", a: "We assist international patients with non-clinical case organization—retrieving doctor opinion letters, facilitating visa invitation letters, scheduling airport transfers, and coordinating tele-consultations." },
    { q: "How long does the process take?", a: "Initial medical reviews take 24 to 48 hours. Hospital stay durations range from 3 to 14 days depending on surgical complexity, followed by a brief local recuperation period." },
    { q: "Do doctors speak English?", a: "Yes, 100%. English is the official language of medical instruction and documentation in India. Most senior doctors have also completed fellowships in the US, UK, or Europe." },
    { q: "What documents do I need?", a: "You will need a valid passport (minimum 6 months validity), recent medical records/scans, and a Medical Visa Invitation (MVI) letter issued by the partner hospital." },
    { q: "Can I get a personalized estimate?", a: "Yes. You can share your medical reports with our international coordination desk to receive a personalized, non-binding treatment plan and itemized quote." }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return allFaqs;
    return allFaqs.filter(
      item => 
        item.q.toLowerCase().includes(faqSearch.toLowerCase()) || 
        item.a.toLowerCase().includes(faqSearch.toLowerCase())
    );
  }, [faqSearch]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#17151F] font-sans selection:bg-[#7657FF] selection:text-white pb-24">
      
      {/* 1. HERO — START THE JOURNEY */}
      <section id="overview" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2E8F0]/60 text-[#666276] text-[11px] font-bold tracking-wider uppercase border border-[#CBD5E1]/50">
          <Sparkles className="w-3 h-3 text-[#7657FF]" />
          INTERNATIONAL PATIENT RESOURCES
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#17151F] tracking-tight leading-tight">
          Your Journey to Better Care Starts Here.
        </h1>

        <p className="text-[#666276] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          Explore treatment options, compare indicative costs, understand the process and connect with our international patient team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => scrollTo("costs")}
            className="bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-2xs transition-all w-full sm:w-auto"
          >
            Explore Treatments
          </Button>
          <Button
            onClick={() => scrollTo("get-help")}
            variant="outline"
            className="border-[#CBD5E1] text-[#17151F] hover:bg-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all w-full sm:w-auto bg-white/80"
          >
            Talk to a Care Coordinator
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-6 text-xs text-[#666276] font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7657FF]" />
            International Patient Support
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7657FF]" />
            Hospital Coordination
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7657FF]" />
            Transparent Guidance
          </span>
        </div>
      </section>

      {/* 10. STICKY PROGRESS NAVIGATION */}
      <div className="sticky top-20 z-30 bg-[#F8FAFC]/90 backdrop-blur-md border-y border-[#E2E8F0] shadow-2xs py-2.5 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-start sm:justify-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none">
          {[
            { id: "overview", label: "Overview" },
            { id: "why-india", label: "Why India" },
            { id: "costs", label: "Costs" },
            { id: "how-it-works", label: "How It Works" },
            { id: "stories", label: "Stories" },
            { id: "faqs", label: "FAQs" },
            { id: "get-help", label: "Get Help" }
          ].map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#17151F] text-white shadow-2xs"
                    : "text-[#666276] hover:text-[#17151F] hover:bg-white/60"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16">

        {/* 2. INTERACTIVE JOURNEY SELECTOR */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#17151F]">
              What would you like to explore?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "costs", num: "01", title: "Treatment Costs", desc: "Compare indicative treatment costs across destinations.", icon: DollarSign },
              { id: "how-it-works", num: "02", title: "How It Works", desc: "Understand your step-by-step treatment journey.", icon: Compass },
              { id: "stories", num: "03", title: "Patient Stories", desc: "See real experiences from international patients.", icon: Heart },
              { id: "faqs", num: "04", title: "FAQs", desc: "Get answers to common travel and medical questions.", icon: HelpCircle }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="group p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-xs hover:border-[#7657FF]/50 transition-all cursor-pointer flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#7657FF] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#7657FF] bg-[#7657FF]/10 px-1.5 py-0.5 rounded">
                          {item.num}
                        </span>
                        <h3 className="font-bold text-[#17151F] text-base group-hover:text-[#7657FF] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#666276] mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#CBD5E1] group-hover:text-[#7657FF] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. WHY INDIA — SIMPLE EXPLANATION */}
        <section id="why-india" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
              Why Patients Consider India
            </h2>
            <p className="text-sm text-[#666276]">
              Explore the factors international patients commonly consider when evaluating treatment options.
            </p>
          </div>

          {/* Clean Vertical Expandable List */}
          <div className="space-y-3">
            {whyIndiaRows.map((row, idx) => {
              const isExpanded = expandedWhyIndia === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedWhyIndia(isExpanded ? null : idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer bg-white ${
                    isExpanded
                      ? "border-[#7657FF] shadow-xs"
                      : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold text-[#666276] font-mono">{row.num}</span>
                      <div>
                        <h3 className="font-bold text-[#17151F] text-base">{row.title}</h3>
                        <p className="text-xs text-[#666276] mt-0.5">{row.summary}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7657FF] shrink-0 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] text-xs text-[#666276] leading-relaxed animate-in fade-in duration-150">
                      {row.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. TREATMENT COST EXPLORER */}
        <section id="costs" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
              Explore Treatment Costs
            </h2>
            <p className="text-sm text-[#666276]">
              Compare indicative treatment costs across destinations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-8">
            
            {/* Dropdown Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#666276] uppercase tracking-wider">Select Specialty</label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => {
                    const spec = e.target.value;
                    setSelectedSpecialty(spec);
                    const procs = procedureData[spec] || procedureData["cardiology"];
                    setSelectedProcedureId(procs[0].id);
                  }}
                  className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm font-semibold text-[#17151F] focus:outline-none focus:border-[#7657FF]"
                >
                  {specialties.map((spec) => (
                    <option key={spec.id} value={spec.id}>{spec.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#666276] uppercase tracking-wider">Select Procedure</label>
                <select
                  value={selectedProcedureId}
                  onChange={(e) => setSelectedProcedureId(e.target.value)}
                  className="w-full p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm font-semibold text-[#17151F] focus:outline-none focus:border-[#7657FF]"
                >
                  {currentProcedures.map((proc) => (
                    <option key={proc.id} value={proc.id}>{proc.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Horizontal Minimal Comparison Bar */}
            {selectedProcedure && (
              <div className="space-y-6 pt-2">
                <div className="border-t border-b border-[#E2E8F0] py-6 space-y-4">
                  <h3 className="font-bold text-[#17151F] text-sm sm:text-base">
                    Indicative Cost: <span className="text-[#7657FF]">{selectedProcedure.name}</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <p className="text-[11px] text-[#666276] font-semibold">United States</p>
                      <p className="text-xl font-bold text-[#17151F] font-mono">${selectedProcedure.us.toLocaleString()}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <p className="text-[11px] text-[#666276] font-semibold">United Kingdom</p>
                      <p className="text-xl font-bold text-[#17151F] font-mono">${selectedProcedure.uk.toLocaleString()}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#7657FF]/10 border border-[#7657FF]/30 space-y-1 relative">
                      <span className="absolute top-2 right-3 text-[10px] font-bold text-[#7657FF] uppercase">India Package</span>
                      <p className="text-[11px] text-[#7657FF] font-semibold">India Destination</p>
                      <p className="text-2xl font-extrabold text-[#7657FF] font-mono">${selectedProcedure.india.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#666276]">
                  <p className="italic">Indicative pricing only</p>
                  
                  <Link href="/ai-care-match">
                    <Button className="bg-[#7657FF] hover:bg-[#0c8272] text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-2xs">
                      Get a Personalized Estimate
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>

                {/* Subtle Expandable: What affects final cost? */}
                <div className="pt-2">
                  <button
                    onClick={() => setShowCostFactors(!showCostFactors)}
                    className="flex items-center gap-1.5 text-xs text-[#7657FF] font-semibold hover:underline"
                  >
                    <Info className="w-4 h-4" />
                    What affects the final cost?
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showCostFactors ? "rotate-180" : ""}`} />
                  </button>

                  {showCostFactors && (
                    <div className="mt-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#666276] grid grid-cols-2 sm:grid-cols-3 gap-3 animate-in fade-in">
                      <div>• Hospital accreditation & room tier</div>
                      <div>• Chief surgeon & specialist experience</div>
                      <div>• Clinical procedure complexity</div>
                      <div>• Length of ICU & room stay</div>
                      <div>• Pre-op diagnostic investigations</div>
                      <div>• Post-op rehab & implants</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. HOW IT WORKS */}
        <section id="how-it-works" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
              How Your Journey Works
            </h2>
            <p className="text-sm text-[#666276]">
              Click any step to understand how we support your care.
            </p>
          </div>

          {/* Stepper Navigation */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
              {journeySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      isActive
                        ? "bg-[#17151F] text-white border-[#17151F] shadow-2xs"
                        : "bg-white text-[#17151F] border-[#E2E8F0] hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span className={`text-xs font-bold font-mono ${isActive ? "text-[#7657FF]" : "text-[#666276]"}`}>
                      {step.num}
                    </span>
                    <h3 className="font-bold text-xs sm:text-sm mt-1 leading-snug">{step.title}</h3>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details Panel */}
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#7657FF] bg-[#7657FF]/10 px-2 py-0.5 rounded font-mono">
                  Step {journeySteps[activeStep].num}
                </span>
                <h3 className="font-bold text-[#17151F] text-base sm:text-lg">
                  {journeySteps[activeStep].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#666276] leading-relaxed">
                {journeySteps[activeStep].details}
              </p>
            </div>
          </div>
        </section>

        {/* 6. PATIENT STORIES (CAROUSEL) */}
        <section id="stories" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
              Real Patient Experiences
            </h2>
            <p className="text-sm text-[#666276]">
              Read experiences shared by international patients.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-6">
            {/* Single Large Testimonial Display */}
            {(() => {
              const current = testimonials[testimonialIndex];
              return (
                <div className="space-y-4 animate-in fade-in">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-1 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">{current.flag}</span>
                      <div>
                        <h3 className="font-bold text-[#17151F] text-base">{current.name}</h3>
                        <p className="text-xs text-[#666276]">{current.location}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-[#F8FAFC] text-[#17151F] border-[#E2E8F0] text-[11px] px-3 py-1">
                      {current.treatment}
                    </Badge>
                  </div>

                  <blockquote className="text-sm sm:text-base text-[#666276] italic leading-relaxed pt-2">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  <div className="flex justify-between items-center text-xs text-[#666276] pt-4 border-t border-[#E2E8F0]">
                    <span>{current.hospital}</span>
                    <span>{current.date}</span>
                  </div>
                </div>
              );
            })()}

            {/* Carousel Controls */}
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                  className="rounded-full w-9 h-9 p-0 border-[#E2E8F0] text-[#17151F] hover:bg-[#F8FAFC]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-xs font-mono text-[#666276] font-semibold">
                  0{testimonialIndex + 1} / 0{testimonials.length}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                  className="rounded-full w-9 h-9 p-0 border-[#E2E8F0] text-[#17151F] hover:bg-[#F8FAFC]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <Link href="/hospitals">
                <Button variant="ghost" className="text-xs font-semibold text-[#7657FF] hover:bg-[#7657FF]/10">
                  View All Stories →
                </Button>
              </Link>
            </div>

            <p className="text-[11px] text-[#666276] italic text-center pt-2">
              Note: Testimonials represent individual patient experiences and are not guarantees of treatment outcomes.
            </p>
          </div>
        </section>

        {/* 7. FAQ — INTERACTIVE SEARCH */}
        <section id="faqs" className="scroll-mt-32 space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
              Questions? Start Here.
            </h2>
          </div>

          {/* Search Field */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#666276]" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="pl-11 pr-4 py-3 bg-white border-[#E2E8F0] rounded-full text-xs sm:text-sm text-[#17151F] placeholder:text-[#666276] focus:border-[#7657FF]"
            />
          </div>

          {/* Accordion Questions */}
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer bg-white ${
                      isOpen
                        ? "border-[#7657FF] shadow-2xs"
                        : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-bold text-[#17151F] text-xs sm:text-sm">{faq.q}</h3>
                      <ChevronDown
                        className={`w-4 h-4 text-[#7657FF] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {isOpen && (
                      <p className="mt-3 pt-3 border-t border-[#E2E8F0] text-xs text-[#666276] leading-relaxed animate-in fade-in duration-150">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#E2E8F0] space-y-3">
                <p className="text-xs text-[#666276]">No results found. Talk to a care coordinator.</p>
                <Button onClick={() => scrollTo("get-help")} className="bg-[#7657FF] text-white text-xs font-semibold px-5 py-2 rounded-full">
                  Talk to Us
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* 8. CARE COORDINATOR — HUMAN CONNECTION */}
        <section id="get-help" className="scroll-mt-32 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#EDEAFF]/80 border border-[#CBD5E1]/60 shadow-2xs space-y-8">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
                Prefer to Speak With Someone?
              </h2>
              <p className="text-xs sm:text-sm text-[#666276]">
                Our international patient coordinators can help you understand your options and next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-[#E2E8F0] text-center space-y-1.5 shadow-2xs">
                <PhoneCall className="w-5 h-5 text-[#7657FF] mx-auto" />
                <h3 className="font-bold text-[#17151F] text-xs sm:text-sm">Call</h3>
                <p className="text-xs text-[#666276] font-mono">+91 11 4092 8800</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#E2E8F0] text-center space-y-1.5 shadow-2xs">
                <MessageSquare className="w-5 h-5 text-[#7657FF] mx-auto" />
                <h3 className="font-bold text-[#17151F] text-xs sm:text-sm">WhatsApp</h3>
                <p className="text-xs text-[#7657FF] font-semibold">Chat with a coordinator</p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-[#E2E8F0] text-center space-y-1.5 shadow-2xs">
                <Mail className="w-5 h-5 text-[#7657FF] mx-auto" />
                <h3 className="font-bold text-[#17151F] text-xs sm:text-sm">Email</h3>
                <p className="text-xs text-[#666276]">Send medical documents</p>
              </div>
            </div>

            <div>
              <Link href="/medical-travel">
                <Button className="bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold text-xs px-6 py-3 rounded-full shadow-2xs">
                  Talk to a Care Coordinator →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 9. FINAL PERSONALIZED CTA */}
        <section className="p-10 sm:p-16 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#17151F]">
              Not Sure Where to Start?
            </h2>
            <p className="text-xs sm:text-sm text-[#666276]">
              Tell us what treatment you are looking for and we&apos;ll help you understand your next steps.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/ai-care-match" className="w-full sm:w-auto">
              <Button className="bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold px-7 py-3.5 rounded-full text-sm shadow-2xs w-full sm:w-auto">
                Get Matched With a Hospital →
              </Button>
            </Link>
            <Button
              onClick={() => scrollTo("costs")}
              variant="outline"
              className="border-[#CBD5E1] text-[#17151F] hover:bg-[#F8FAFC] font-semibold px-7 py-3.5 rounded-full text-sm transition-all w-full sm:w-auto"
            >
              Explore Treatments
            </Button>
          </div>
        </section>

      </div>

      {/* 14. MOBILE STICKY BOTTOM BAR */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <Link href="/medical-travel">
          <Button className="w-full bg-[#17151F] text-white font-bold text-xs py-3 rounded-full shadow-lg border border-[#7657FF]">
            Talk to a Coordinator
          </Button>
        </Link>
      </div>

    </div>
  );
}
