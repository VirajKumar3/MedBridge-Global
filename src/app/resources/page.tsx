"use client";


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Heart, 
  HelpCircle, 
  BookOpen, 
  Globe2, 
  CheckCircle2, 
  PhoneCall, 
  Mail, 
  MessageSquare,
  Sparkles
} from "lucide-react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"why-india" | "stories" | "faqs" | "help">("why-india");

  const costComparisons = [
    { procedure: "Coronary Artery Bypass (CABG)", usCost: "$120,000", ukCost: "$35,000", indiaCost: "$6,500", savings: "82% - 94%" },
    { procedure: "Total Knee Replacement (Robotic)", usCost: "$45,000", ukCost: "$22,000", indiaCost: "$4,200", savings: "80% - 90%" },
    { procedure: "Living Donor Liver Transplant", usCost: "$350,000", ukCost: "$160,000", indiaCost: "$26,000", savings: "84% - 92%" },
    { procedure: "Proton Beam Radiation (Oncology)", usCost: "$140,000", ukCost: "$75,000", indiaCost: "$24,000", savings: "68% - 83%" },
    { procedure: "Deep Brain Stimulation (DBS)", usCost: "$95,000", ukCost: "$48,000", indiaCost: "$15,500", savings: "67% - 83%" },
    { procedure: "Advanced IVF & ICSI Cycle", usCost: "$18,000", ukCost: "$10,500", indiaCost: "$2,800", savings: "73% - 84%" }
  ];

  const stories = [
    {
      patient: "John & Grace D.",
      country: "Lagos, Nigeria",
      flag: "🇳🇬",
      treatment: "Double Valve Heart Surgery",
      hospital: "Medanta - The Medicity, Gurgaon",
      quote: "In the UK, we were quoted £32,000 with months of waiting. MedBridge-Global organized our case in 48 hours, Medanta welcomed us at the airport, and Dr. Trehan performed a flawless surgery for under $8,000.",
      date: "August 2026"
    },
    {
      patient: "Fatima Al-Nuaimi",
      country: "Dubai, UAE",
      flag: "🇦🇪",
      treatment: "Bilateral Robotic Knee Replacement",
      hospital: "Apollo Hospitals, Delhi",
      quote: "The Arabic translator met us at Delhi airport. The hospital apartment was pristine, and I was walking without pain on day 2. The entire trip was seamless.",
      date: "July 2026"
    },
    {
      patient: "David Harrison",
      country: "Manchester, UK",
      flag: "🇬🇧",
      treatment: "Laparoscopic Gastric Bypass",
      hospital: "Max Super Speciality Hospital, Saket",
      quote: "NHS waiting times were over 2 years. Through HealIndiaAI, I had my initial tele-consultation on Monday, arrived in India on Friday, and had world-class care by Dr. Chowbey.",
      date: "June 2026"
    }
  ];

  const faqs = [
    { q: "Why is healthcare so much more affordable in India?", a: "India combines a massive volume of specialized procedures, domestically manufactured US-FDA approved pharmaceuticals and titanium implants, lower operational real-estate costs, and competitive surgical fees while maintaining strict international JCI accreditation standards." },
    { q: "Do Indian doctors speak fluent English?", a: "Yes. All medical training, surgical examinations, and hospital documentation in India are conducted entirely in English. Most senior specialists have also completed fellowships in the US, UK, or Australia." },
    { q: "How does HealIndiaAI ensure transparent pricing?", a: "We work directly with hospital international desks to generate all-inclusive fixed package quotations covering surgeon fees, stay, medications, and routine investigations before you book flights." },
    { q: "What support is provided for international patient food and religion?", a: "Partner hospitals feature dedicated international kitchens offering Halal-certified food, continental, Arabic, and vegetarian diets, along with multi-faith prayer rooms." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 mb-3">
            Resources & Clinical Knowledge
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Patient Guides & Why India?
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Compare global costs, read real international recovery journeys, and access our 24/7 care coordination desk.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center bg-white p-2 rounded-2xl border border-slate-200 shadow-xs max-w-2xl mx-auto">
          <Button 
            variant={activeTab === "why-india" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("why-india")}
            className={`rounded-xl text-xs font-semibold ${activeTab === "why-india" ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-emerald-700'}`}
          >
            <DollarSign className="w-4 h-4 mr-1.5" /> Why India? Cost Table
          </Button>

          <Button 
            variant={activeTab === "stories" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("stories")}
            className={`rounded-xl text-xs font-semibold ${activeTab === "stories" ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-emerald-700'}`}
          >
            <Heart className="w-4 h-4 mr-1.5" /> Patient Stories
          </Button>

          <Button 
            variant={activeTab === "faqs" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("faqs")}
            className={`rounded-xl text-xs font-semibold ${activeTab === "faqs" ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-emerald-700'}`}
          >
            <HelpCircle className="w-4 h-4 mr-1.5" /> FAQs
          </Button>

          <Button 
            variant={activeTab === "help" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("help")}
            className={`rounded-xl text-xs font-semibold ${activeTab === "help" ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-emerald-700'}`}
          >
            <PhoneCall className="w-4 h-4 mr-1.5" /> 24/7 Help Center
          </Button>
        </div>

        {/* WHY INDIA COST COMPARISON */}
        {activeTab === "why-india" && (
          <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6 animate-in fade-in">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Why Choose India for Medical Care?</h3>
                <p className="text-xs text-slate-500">Benchmark comparison of procedure costs across the US, UK, and India.</p>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 self-start sm:self-auto text-xs font-bold">
                Save up to 85% with JCI Quality
              </Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-xs font-bold text-slate-700 uppercase">
                    <th className="p-4">Medical Procedure</th>
                    <th className="p-4">US Cost</th>
                    <th className="p-4">UK Cost</th>
                    <th className="p-4 text-emerald-700">India Package Cost</th>
                    <th className="p-4 text-primary">Patient Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {costComparisons.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{item.procedure}</td>
                      <td className="p-4 text-slate-400 line-through">{item.usCost}</td>
                      <td className="p-4 text-slate-400 line-through">{item.ukCost}</td>
                      <td className="p-4 font-extrabold text-emerald-700 text-sm bg-emerald-50/40">{item.indiaCost}</td>
                      <td className="p-4 font-extrabold text-primary">{item.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* PATIENT STORIES */}
        {activeTab === "stories" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in">
            {stories.map((story, idx) => (
              <Card key={idx} className="p-6 bg-white border-slate-200 rounded-3xl hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{story.flag}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{story.patient}</h4>
                      <p className="text-[11px] text-slate-500">{story.country}</p>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 text-[10px] mb-3">
                    {story.treatment}
                  </Badge>

                  <p className="text-xs text-slate-600 italic leading-relaxed mb-4">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex justify-between">
                  <span>{story.hospital}</span>
                  <span>{story.date}</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* FAQS */}
        {activeTab === "faqs" && (
          <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl space-y-4 animate-in fade-in">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Frequently Asked Questions</h3>
            <div className="space-y-3 text-xs">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm mb-1.5">Q: {faq.q}</p>
                  <p className="text-slate-600 leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* 24/7 HELP CENTER */}
        {activeTab === "help" && (
          <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl space-y-6 animate-in fade-in">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">24/7 International Desk Support</h3>
              <p className="text-xs text-slate-500 mt-1">Our coordinators are available across multiple time zones to assist you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Direct Phone Helpline</h4>
                <p className="text-slate-500">+91 11 4092 8800</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Toll-free / International</p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">WhatsApp Fast Connect</h4>
                <p className="text-slate-500">+91 98101 23456</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Instant Coordinator Reply</p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Medical Dossier Email</h4>
                <p className="text-slate-500">cases@healindia.ai</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Encrypted file intake</p>
              </div>
            </div>
          </Card>
        )}

      </div>
    </div>
  );
}
