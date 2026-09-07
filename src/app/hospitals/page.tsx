"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { HOSPITALS, Hospital } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Filter, 
  Languages, 
  Building2, 
  X, 
  Info,
  Scale
} from "lucide-react";

export default function HospitalsPage() {
  const router = useRouter();
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAccreditation, setSelectedAccreditation] = useState("All");
  const [selectedCostLevel, setSelectedCostLevel] = useState("All");

  // Comparison State (up to 3 hospitals)
  const [compareList, setCompareList] = useState<Hospital[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const toggleCompare = (hospital: Hospital) => {
    if (compareList.some(h => h.id === hospital.id)) {
      setCompareList(compareList.filter(h => h.id !== hospital.id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 hospitals at a time.");
        return;
      }
      setCompareList([...compareList, hospital]);
    }
  };

  const filteredHospitals = HOSPITALS.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = selectedCity === "All" || h.city.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || h.specialties.some(s => s.includes(selectedSpecialty));
    const matchesAccreditation = selectedAccreditation === "All" || h.accreditation.includes(selectedAccreditation);
    const matchesCost = selectedCostLevel === "All" || h.costLevel === selectedCostLevel;

    return matchesSearch && matchesCity && matchesSpecialty && matchesAccreditation && matchesCost;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 mb-3">
            Section 4 & 5: Hospitals & Comparison Module
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Accredited Partner Hospitals
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Search, filter, and compare premier JCI and NABH quaternary hospitals in India with explainable AI match scores and transparent pricing.
          </p>
        </div>

        {/* Search & Multi-Filter Controls */}
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search hospitals by name, city, or specialty (e.g. Apollo, Cardiology, Delhi, Liver)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-slate-50 border-slate-200 rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* City Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">📍 City</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Cities</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">🩺 Specialty</label>
              <select 
                value={selectedSpecialty} 
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology ❤️</option>
                <option value="Orthopedics">Orthopedics 🦴</option>
                <option value="Oncology">Oncology 🎗️</option>
                <option value="Transplant">Organ Transplant</option>
                <option value="Neurology">Neurology 🧠</option>
              </select>
            </div>

            {/* Budget / Cost Level Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">💰 Cost Level</label>
              <select 
                value={selectedCostLevel} 
                onChange={(e) => setSelectedCostLevel(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Budgets</option>
                <option value="₹₹">₹₹ Moderate ($4k - $7k)</option>
                <option value="₹₹₹">₹₹₹ Premium Executive ($6k - $10k)</option>
              </select>
            </div>

            {/* Accreditation Filter */}
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">⭐ Accreditation</label>
              <select 
                value={selectedAccreditation} 
                onChange={(e) => setSelectedAccreditation(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Accreditations</option>
                <option value="JCI">JCI Accredited</option>
                <option value="NABH">NABH Accredited</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Explainable Ranking Notice */}
        <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
            <strong>Transparent & Explainable AI Match Scores:</strong> Hospital rankings are calculated objectively using clinical capability, patient outcomes, price transparency, and international desk accreditation. We do not prioritize sponsored providers.
          </p>
        </div>

        {/* Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((h) => {
            const isCompared = compareList.some(item => item.id === h.id);

            return (
              <Card 
                key={h.id} 
                className={`p-6 bg-white rounded-3xl border transition-all flex flex-col justify-between ${isCompared ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20' : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'}`}
              >
                <div>
                  
                  {/* Top Bar: Badges */}
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="bg-slate-50 text-slate-700 font-medium text-xs">
                      {h.accreditation}
                    </Badge>
                    <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <Sparkles className="w-3.5 h-3.5" /> {h.aiMatchScore}% AI Match
                    </div>
                  </div>

                  {/* Title & City */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{h.name}</h3>
                  <p className="text-xs text-slate-500 mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {h.city}, India • {h.distanceFromAirport}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {h.description}
                  </p>

                  {/* Metrics Table */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-500">HealIndia Trust Score</span>
                      <span className="font-bold text-slate-900 flex items-center text-emerald-600">
                        {h.trustScore}/100 <ShieldCheck className="w-3.5 h-3.5 ml-1 text-emerald-600" />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Typical Package Cost</span>
                      <span className="font-semibold text-slate-800">{h.costRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">International Patient Desk</span>
                      <span className="font-semibold text-slate-800 flex items-center text-emerald-600">
                        Active 24/7 <CheckCircle2 className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Languages Supported</span>
                      <span className="font-medium text-slate-700">{h.languages.length} Languages</span>
                    </div>
                  </div>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {h.specialties.map((spec, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Bottom Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Button 
                    variant={isCompared ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => toggleCompare(h)}
                    className={`rounded-xl text-xs font-semibold ${isCompared ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'hover:border-emerald-500 hover:text-emerald-700'}`}
                  >
                    {isCompared ? "✓ In Compare" : "+ Compare"}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => router.push(`/ai-care-match?hospital=${h.id}`)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-2xs cursor-pointer"
                  >
                    Select & Match
                  </Button>
                </div>

              </Card>
            );
          })}
        </div>

        {/* Floating Compare Dock (When user has 1+ hospitals selected) */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 inset-x-4 max-w-4xl mx-auto z-50 bg-white/95 backdrop-blur-md text-zinc-900 p-4 rounded-3xl shadow-xl border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Scale className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-zinc-900">Compare Hospitals ({compareList.length} of 3)</h4>
                <div className="flex gap-2 mt-1">
                  {compareList.map((c) => (
                    <span key={c.id} className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-medium">
                      {c.name.split(" ")[0]}
                      <button onClick={() => toggleCompare(c)} className="hover:text-red-600 text-zinc-400 font-bold ml-0.5">×</button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setCompareList([])}
                className="text-zinc-500 hover:text-zinc-900 text-xs"
              >
                Clear All
              </Button>
              <Button 
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs w-full sm:w-auto cursor-pointer"
              >
                View Side-by-Side Comparison →
              </Button>
            </div>
          </div>
        )}

        {/* Comparison Modal Dialog */}
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-5xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
              
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Hospital Comparison Matrix</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Objective evaluation of clinical credentials, pricing, and international support services</p>
                </div>
                <button 
                  onClick={() => setIsCompareModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                >
                  ✕
                </button>
              </div>

              {/* Section 5 Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80">
                      <th className="p-4 font-bold text-slate-900 text-xs uppercase tracking-wider w-1/4">Feature / Metric</th>
                      {compareList.map(h => (
                        <th key={h.id} className="p-4 font-bold text-slate-900 border-l border-slate-200 min-w-[200px]">
                          <div className="text-base">{h.name}</div>
                          <div className="text-xs text-slate-500 font-normal">{h.city}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">AI Match Score</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 font-extrabold text-emerald-600 text-lg">
                          {h.aiMatchScore}%
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">HealIndia Trust Score</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 font-bold text-slate-800">
                          {h.trustScore} / 100 <ShieldCheck className="w-4 h-4 text-emerald-600 inline ml-1" />
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Accreditation</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 font-semibold text-primary">
                          {h.accreditation}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Cost Range Level</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100">
                          <span className="font-bold text-slate-900">{h.costLevel}</span>
                          <span className="text-xs text-slate-500 block">{h.costRange}</span>
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">International Desk</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 text-emerald-600 font-semibold">
                          <CheckCircle2 className="w-4 h-4 inline mr-1 text-emerald-600" /> Dedicated 24x7
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Language Support</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 text-slate-700 text-xs">
                          <span className="font-bold text-slate-900">{h.languages.length} languages:</span>
                          <p className="text-slate-500 mt-0.5">{h.languages.join(", ")}</p>
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Available Services & Facilities</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 text-xs text-slate-600">
                          <span className="font-bold text-slate-900 block mb-1">{h.facilities.length} Services</span>
                          <ul className="list-disc pl-4 space-y-0.5">
                            {h.facilities.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Airport Distance</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100 text-slate-700 text-xs font-medium">
                          {h.distanceFromAirport}
                        </td>
                      ))}
                    </tr>

                    <tr>
                      <td className="p-4 font-semibold text-slate-700 bg-slate-50/30">Action</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-slate-100">
                          <Button 
                            size="sm" 
                            onClick={() => {
                              setIsCompareModalOpen(false);
                              router.push(`/ai-care-match?hospital=${h.id}`);
                            }}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer shadow-xs"
                          >
                            Select Hospital
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end pt-2">
                <Button variant="outline" onClick={() => setIsCompareModalOpen(false)} className="rounded-xl text-xs">
                  Close Comparison
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
