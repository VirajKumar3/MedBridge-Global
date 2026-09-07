"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { TREATMENTS, Treatment } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Stethoscope, 
  HelpCircle, 
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function TreatmentsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment>(TREATMENTS[0]);

  const categories = [
    "All",
    "Cardiology ❤️",
    "Orthopedics 🦴",
    "Oncology 🎗️",
    "Neurology 🧠",
    "Organ Transplant",
    "IVF & Fertility",
    "Bariatric Surgery",
    "Dental Care"
  ];

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesCategory = selectedCategory === "All" || t.category === selectedCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 mb-3">
            Section 3: Treatments Module
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Medical Treatments & Specialties
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Explore advanced procedures, transparent cost estimates, hospital stay durations, and specialist options in India.
          </p>
        </div>

        {/* Clinical Disclaimer Notice */}
        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
            <strong>Important Clinical Boundary:</strong> HealIndiaAI provides informational and coordination support. Our AI systems do not independently diagnose conditions or prescribe medications. All clinical decisions and treatment approvals remain strictly with qualified healthcare professionals.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search treatments by name, condition, or keyword (e.g., Knee, Bypass, Proton)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-white rounded-2xl shadow-xs border-slate-200"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full text-xs transition-all ${selectedCategory === cat ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-white text-slate-600 hover:text-emerald-700'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Treatments Layout: Grid on Left, Detailed Profile on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Treatment Cards List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-bold uppercase text-slate-400">Available Procedures ({filteredTreatments.length})</span>
              <span className="text-xs text-slate-500">Click to view complete details</span>
            </div>

            <div className="space-y-3 max-h-[750px] overflow-y-auto pr-1">
              {filteredTreatments.map((t) => {
                const isSelected = selectedTreatment.id === t.id;
                return (
                  <Card
                    key={t.id}
                    onClick={() => setSelectedTreatment(t)}
                    className={`p-5 cursor-pointer transition-all border ${isSelected ? 'border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-semibold text-emerald-700">{t.category}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">{t.costRangeUSD}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5">{t.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-3">{t.description}</p>
                    
                    <div className="flex items-center gap-4 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {t.hospitalStay}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Trip: {t.tripDuration}</span>
                      <span className="flex items-center gap-1 text-emerald-600 font-medium"><ShieldCheck className="w-3.5 h-3.5" /> {t.successRate}</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Treatment In-Depth Profile */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-white border-slate-200 shadow-xl rounded-3xl sticky top-24 space-y-6">
              
              {/* Header */}
              <div className="border-b border-slate-100 pb-5">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs">
                    {selectedTreatment.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Hospital Success: {selectedTreatment.successRate}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                  {selectedTreatment.name}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedTreatment.description}
                </p>
              </div>

              {/* Cost & Trip Metric Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[11px] text-slate-400 font-medium">Est. Cost Range</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedTreatment.costRangeUSD}</div>
                  <div className="text-[10px] text-slate-500">({selectedTreatment.costRangeINR})</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[11px] text-slate-400 font-medium">Hospital Stay</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedTreatment.hospitalStay}</div>
                  <div className="text-[10px] text-slate-500">ICU + Inpatient</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[11px] text-slate-400 font-medium">Trip Duration</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedTreatment.tripDuration}</div>
                  <div className="text-[10px] text-slate-500">Arrival to departure</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-[11px] text-slate-400 font-medium">Recovery Time</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedTreatment.recoveryTime}</div>
                  <div className="text-[10px] text-slate-500">Full mobility</div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Clinical Overview
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/60 p-4 rounded-2xl border border-slate-100">
                  {selectedTreatment.overview}
                </p>
              </div>

              {/* Suitable Hospitals & Doctors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2.5">
                    <Building2 className="w-4 h-4 text-primary" /> Suitable Accredited Hospitals
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedTreatment.suitableHospitals.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2.5">
                    <Stethoscope className="w-4 h-4 text-purple-600" /> Specialist Doctors
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedTreatment.specialistDoctors.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-slate-400" /> Frequently Asked Questions
                </h4>
                <div className="space-y-2">
                  {selectedTreatment.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <p className="font-semibold text-slate-800 mb-1">Q: {faq.q}</p>
                      <p className="text-slate-600">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Ready to evaluate your reports for this procedure?
                </div>
                <Button 
                  onClick={() => router.push(`/ai-care-match?treatment=${selectedTreatment.id}`)}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Start AI Care Match for {selectedTreatment.name.split(" ")[0]}
                </Button>
              </div>

            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
