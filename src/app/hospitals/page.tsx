"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HOSPITALS, Hospital } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Info,
  Scale,
  SlidersHorizontal,
  Building2,
  HelpCircle,
  ExternalLink,
  RotateCcw,
  Plane
} from "lucide-react";

export default function HospitalsPage() {
  const router = useRouter();
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAccreditation, setSelectedAccreditation] = useState("All");
  const [selectedCostLevel, setSelectedCostLevel] = useState("All");

  // Explain Match modal
  const [explainingHospital, setExplainingHospital] = useState<Hospital | null>(null);

  // Trust score info modal
  const [showTrustScoreInfo, setShowTrustScoreInfo] = useState(false);

  // Comparison State (up to 3 hospitals)
  const [compareList, setCompareList] = useState<Hospital[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Image load error fallback state (record failed IDs)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

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

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCity("All");
    setSelectedSpecialty("All");
    setSelectedAccreditation("All");
    setSelectedCostLevel("All");
  };

  // Active filters count
  const activeFiltersCount = 
    (selectedCity !== "All" ? 1 : 0) +
    (selectedSpecialty !== "All" ? 1 : 0) +
    (selectedAccreditation !== "All" ? 1 : 0) +
    (selectedCostLevel !== "All" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0);

  const filteredHospitals = HOSPITALS.filter(h => {
    const matchesSearch = h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          h.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          h.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === "All" || h.city.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || h.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
    const matchesAccreditation = selectedAccreditation === "All" || h.accreditation.includes(selectedAccreditation);
    const matchesCost = selectedCostLevel === "All" || h.costLevel === selectedCostLevel;

    return matchesSearch && matchesCity && matchesSpecialty && matchesAccreditation && matchesCost;
  });

  return (
    <div className="min-h-screen bg-[#F8F7FC] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* 1. Header (Compact, modern, balanced) */}
        <div className="text-center max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDEAFF] border border-[#D6CFFF] text-[#7657FF] text-[11px] font-bold tracking-wider uppercase mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Accredited Quaternary Hospital Network
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#17151F] tracking-tight mb-3">
            Accredited Partner Hospitals
          </h1>
          <p className="text-[#666276] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Search, filter, and compare premier JCI and NABH quaternary hospitals in India with explainable AI match scores and transparent package pricing.
          </p>
        </div>

        {/* 2. Search & Multi-Filter Controls */}
        <Card className="p-5 sm:p-6 bg-white border-[#E2DEFB] shadow-sm rounded-3xl space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666276]" />
            <Input
              type="text"
              placeholder="Search hospitals by name, city, specialty, or condition (e.g. Apollo, Cardiology, Delhi, Liver)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-10 py-3 text-sm bg-[#F8F7FC] border-[#E2DEFB] rounded-2xl text-[#17151F] placeholder:text-[#666276]/70 focus-visible:ring-2 focus-visible:ring-[#7657FF]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#666276] hover:text-[#17151F] p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {/* City Filter */}
            <div>
              <label className="text-[11px] font-bold text-[#666276] uppercase tracking-wider block mb-1">
                City / Region
              </label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full text-xs bg-[#F8F7FC] border border-[#E2DEFB] rounded-xl p-2.5 text-[#17151F] font-medium focus:outline-none focus:ring-2 focus:ring-[#7657FF] cursor-pointer"
              >
                <option value="All">All Cities (Nationwide)</option>
                <option value="Delhi">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Bengaluru">Bengaluru</option>
              </select>
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="text-[11px] font-bold text-[#666276] uppercase tracking-wider block mb-1">
                Clinical Specialty
              </label>
              <select 
                value={selectedSpecialty} 
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full text-xs bg-[#F8F7FC] border border-[#E2DEFB] rounded-xl p-2.5 text-[#17151F] font-medium focus:outline-none focus:ring-2 focus:ring-[#7657FF] cursor-pointer"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Oncology">Oncology</option>
                <option value="Transplant">Organ Transplant</option>
                <option value="Neurology">Neurology</option>
                <option value="Bariatric">Bariatric Surgery</option>
              </select>
            </div>

            {/* Budget / Cost Level Filter */}
            <div>
              <label className="text-[11px] font-bold text-[#666276] uppercase tracking-wider block mb-1">
                Package Tier
              </label>
              <select 
                value={selectedCostLevel} 
                onChange={(e) => setSelectedCostLevel(e.target.value)}
                className="w-full text-xs bg-[#F8F7FC] border border-[#E2DEFB] rounded-xl p-2.5 text-[#17151F] font-medium focus:outline-none focus:ring-2 focus:ring-[#7657FF] cursor-pointer"
              >
                <option value="All">All Tiers</option>
                <option value="₹₹">₹₹ Standard ($4k – $7k)</option>
                <option value="₹₹₹">₹₹₹ Premium Executive ($6k – $10k)</option>
              </select>
            </div>

            {/* Accreditation Filter */}
            <div>
              <label className="text-[11px] font-bold text-[#666276] uppercase tracking-wider block mb-1">
                Accreditation
              </label>
              <select 
                value={selectedAccreditation} 
                onChange={(e) => setSelectedAccreditation(e.target.value)}
                className="w-full text-xs bg-[#F8F7FC] border border-[#E2DEFB] rounded-xl p-2.5 text-[#17151F] font-medium focus:outline-none focus:ring-2 focus:ring-[#7657FF] cursor-pointer"
              >
                <option value="All">All Accreditations</option>
                <option value="JCI">JCI Gold Seal</option>
                <option value="NABH">NABH Accredited</option>
                <option value="NABL">NABL Certified Labs</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips & Clear Action */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#EDEAFF]">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#666276]">
              <span className="font-semibold text-[#17151F] flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#7657FF]" />
                Showing {filteredHospitals.length} of {HOSPITALS.length} hospitals
              </span>

              {selectedCity !== "All" && (
                <span className="bg-[#EDEAFF] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-medium">
                  City: {selectedCity}
                  <button onClick={() => setSelectedCity("All")} className="hover:text-red-500">×</button>
                </span>
              )}
              {selectedSpecialty !== "All" && (
                <span className="bg-[#EDEAFF] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-medium">
                  Specialty: {selectedSpecialty}
                  <button onClick={() => setSelectedSpecialty("All")} className="hover:text-red-500">×</button>
                </span>
              )}
              {selectedCostLevel !== "All" && (
                <span className="bg-[#EDEAFF] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-medium">
                  Tier: {selectedCostLevel}
                  <button onClick={() => setSelectedCostLevel("All")} className="hover:text-red-500">×</button>
                </span>
              )}
              {selectedAccreditation !== "All" && (
                <span className="bg-[#EDEAFF] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-medium">
                  Accreditation: {selectedAccreditation}
                  <button onClick={() => setSelectedAccreditation("All")} className="hover:text-red-500">×</button>
                </span>
              )}
              {searchQuery && (
                <span className="bg-[#EDEAFF] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-medium">
                  Search: &ldquo;{searchQuery}&rdquo;
                  <button onClick={() => setSearchQuery("")} className="hover:text-red-500">×</button>
                </span>
              )}
            </div>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-[#7657FF] hover:text-[#7657FF] flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Clear all filters
              </button>
            )}
          </div>
        </Card>

        {/* 3. Explainable AI Match Score Informational Banner */}
        <div className="bg-[#EDEAFF]/80 p-4 rounded-2xl border border-[#D6CFFF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#17151F]">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#7657FF] text-white flex items-center justify-center shrink-0 mt-0.5">
              <Info className="w-3.5 h-3.5" />
            </div>
            <p className="leading-relaxed">
              <strong className="text-[#7657FF]">Transparent & Explainable AI Match Scores:</strong> Rankings are calculated objectively from verified JCI/NABH clinical credentials, surgeon volumes, price transparency, and dedicated international desk services. We never prioritize sponsored hospitals.
            </p>
          </div>
          <button
            onClick={() => setShowTrustScoreInfo(true)}
            className="shrink-0 text-xs font-bold text-[#7657FF] hover:text-[#7657FF] underline flex items-center gap-1"
          >
            How scores are computed
          </button>
        </div>

        {/* 4. Empty State if no match */}
        {filteredHospitals.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E2DEFB] space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-full bg-[#EDEAFF] flex items-center justify-center mx-auto text-[#666276]">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17151F]">No hospitals match your search</h3>
            <p className="text-sm text-[#666276] max-w-sm mx-auto">
              We couldn&apos;t find any hospital meeting all your selected filters. Try broadening your criteria or reset filters.
            </p>
            <Button 
              onClick={clearAllFilters}
              className="bg-[#7657FF] hover:bg-[#7657FF] text-white rounded-xl text-xs font-semibold px-5 py-2.5 cursor-pointer"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* 5. Hospital Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((h) => {
            const isCompared = compareList.some(item => item.id === h.id);
            const hasImageError = imageErrors[h.id];

            return (
              <Card 
                key={h.id} 
                className={`group bg-white rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isCompared 
                    ? 'border-[#7657FF] ring-2 ring-[#7657FF]/30 shadow-md' 
                    : 'border-[#E2DEFB] hover:border-[#A99AFF] hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                <div>
                  
                  {/* Top Image Section (220-230px showcase height with clean object-cover) */}
                  <div className="relative w-full h-[215px] sm:h-[230px] bg-[#EDEAFF] overflow-hidden">
                    {h.image && !hasImageError ? (
                      <Image
                        src={h.image}
                        alt={`${h.name} facility`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={() => handleImageError(h.id)}
                        priority={h.featured}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#EDEAFF] to-[#EDEAFF] text-[#666276] p-4 text-center">
                        <Building2 className="w-12 h-12 text-[#7657FF]/50 mb-2" />
                        <span className="text-xs font-semibold text-[#17151F]">{h.name}</span>
                        <span className="text-[11px] text-[#666276] mt-0.5">{h.city}, India</span>
                      </div>
                    )}

                    {/* Refined subtle gradient for text readability without darkening image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                    {/* Top Badges Floating Over Image */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 z-10 pointer-events-auto">
                      <span className="bg-white/95 backdrop-blur-md text-[#17151F] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-white/50">
                        {h.accreditation.split(",")[0]} Accredited
                      </span>

                      {/* AI Match Score Badge */}
                      <button
                        onClick={() => setExplainingHospital(h)}
                        title="Click to see why this hospital matches your case"
                        className="flex items-center gap-1 bg-[#7657FF]/95 hover:bg-[#7657FF] backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>{h.aiMatchScore}% Match</span>
                      </button>
                    </div>

                    {/* Bottom overlay: Location & Distance */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs z-10">
                      <span className="flex items-center gap-1.5 font-medium drop-shadow text-[11px] text-white">
                        <MapPin className="w-3.5 h-3.5 text-[#EDEAFF]" />
                        {h.city}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-white/95 font-medium drop-shadow bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
                        <Plane className="w-3 h-3 text-[#EDEAFF]" />
                        {h.distanceFromAirport}
                      </span>
                    </div>
                  </div>

                  {/* Hospital Information Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    
                    {/* Hospital Name & Accreditation */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link href={`/hospitals/${h.id}`} className="group/link flex-1">
                          <h3 className="text-[17px] font-bold text-[#17151F] group-hover/link:text-[#7657FF] transition-colors leading-snug line-clamp-1">
                            {h.name}
                          </h3>
                        </Link>
                        <span className="text-[10px] font-bold text-[#7657FF] bg-[#EDEAFF] px-2 py-0.5 rounded-full border border-[#D6CFFF] shrink-0">
                          {h.accreditation.split(",")[0]}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#666276] line-clamp-2 mt-1 leading-relaxed">
                        {h.description}
                      </p>
                    </div>

                    {/* Minimal Showcase Highlights */}
                    <div className="grid grid-cols-2 gap-2 pt-1 pb-1 text-xs">
                      <div className="bg-[#F8F7FC] rounded-xl p-2.5 border border-[#E2DEFB]/80">
                        <span className="text-[10px] font-bold text-[#666276] uppercase tracking-wider block">Trust Score</span>
                        <div className="flex items-center gap-1 font-bold text-[#17151F] text-sm mt-0.5">
                          <span>{h.trustScore}/100</span>
                          <ShieldCheck className="w-3.5 h-3.5 text-[#7657FF]" />
                        </div>
                      </div>

                      <div className="bg-[#F8F7FC] rounded-xl p-2.5 border border-[#E2DEFB]/80">
                        <span className="text-[10px] font-bold text-[#666276] uppercase tracking-wider block">Est. Package</span>
                        <span className="font-bold text-[#17151F] text-sm mt-0.5 block truncate" title={h.costRange}>
                          {h.costRange.split("(")[0].trim()}
                        </span>
                      </div>
                    </div>

                    {/* Specialties Pills (Minimal 3 tags + count) */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      {h.specialties.slice(0, 3).map((spec, idx) => (
                        <span 
                          key={idx} 
                          className="text-[11px] bg-white border border-[#E2DEFB] text-[#666276] px-2 py-0.5 rounded-lg font-medium"
                        >
                          {spec.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim()}
                        </span>
                      ))}
                      {h.specialties.length > 3 && (
                        <span className="text-[10px] text-[#666276] font-semibold px-1">
                          +{h.specialties.length - 3} more
                        </span>
                      )}
                    </div>

                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="p-5 sm:p-6 pt-0 grid grid-cols-2 gap-2">
                  <Button 
                    variant={isCompared ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => toggleCompare(h)}
                    className={`rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                      isCompared 
                        ? 'bg-[#7657FF] hover:bg-[#7657FF] text-white border-transparent' 
                        : 'border-[#E2DEFB] text-[#17151F] hover:border-[#7657FF] hover:text-[#7657FF] bg-white'
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5 mr-1" />
                    {isCompared ? "In Compare" : "Compare"}
                  </Button>

                  <Button 
                    size="sm" 
                    onClick={() => router.push(`/hospitals/${h.id}`)}
                    className="bg-[#17151F] hover:bg-[#17151F] text-white rounded-xl text-xs font-semibold shadow-xs cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Hospital</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>

              </Card>
            );
          })}
        </div>

        {/* 6. Floating Compare Dock (When 1+ hospitals selected) */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 inset-x-4 max-w-4xl mx-auto z-50 bg-white/95 backdrop-blur-md text-[#17151F] p-4 rounded-3xl shadow-2xl border border-[#E2DEFB] flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#EDEAFF] border border-[#D6CFFF] flex items-center justify-center text-[#7657FF]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#17151F]">Hospital Comparison ({compareList.length} of 3)</h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {compareList.map((c) => (
                    <span 
                      key={c.id} 
                      className="text-xs bg-[#EDEAFF] border border-[#E2DEFB] text-[#17151F] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-medium"
                    >
                      {c.name.split(" ")[0]}
                      <button 
                        onClick={() => toggleCompare(c)} 
                        className="hover:text-red-500 text-[#666276] font-bold ml-0.5"
                        aria-label={`Remove ${c.name} from comparison`}
                      >
                        ×
                      </button>
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
                className="text-[#666276] hover:text-[#17151F] text-xs"
              >
                Clear All
              </Button>
              <Button 
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-[#7657FF] hover:bg-[#7657FF] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs w-full sm:w-auto cursor-pointer"
              >
                View Side-by-Side Comparison →
              </Button>
            </div>
          </div>
        )}

        {/* 7. Full Comparison Modal Dialog */}
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#17151F]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-5xl w-full p-6 md:p-8 shadow-2xl border border-[#E2DEFB] space-y-6 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
              
              <div className="flex justify-between items-start border-b border-[#EDEAFF] pb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#17151F]">Hospital Comparison Matrix</h3>
                  <p className="text-xs text-[#666276] mt-1">
                    Side-by-side evaluation of authentic facilities, clinical credentials, pricing, and international patient care.
                  </p>
                </div>
                <button 
                  onClick={() => setIsCompareModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F8F7FC] hover:bg-[#EDEAFF] flex items-center justify-center text-[#666276] hover:text-[#17151F] font-bold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#E2DEFB] bg-[#F8F7FC]">
                      <th className="p-4 font-bold text-[#17151F] text-xs uppercase tracking-wider w-1/4">Hospital</th>
                      {compareList.map(h => (
                        <th key={h.id} className="p-4 font-bold text-[#17151F] border-l border-[#E2DEFB] min-w-[220px]">
                          <div className="relative w-full h-24 rounded-xl overflow-hidden mb-2 bg-[#EDEAFF]">
                            {h.image ? (
                              <Image 
                                src={h.image} 
                                alt={h.name} 
                                fill 
                                className="object-cover" 
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-xs text-[#666276]">
                                No image
                              </div>
                            )}
                          </div>
                          <div className="text-sm font-bold text-[#17151F]">{h.name}</div>
                          <div className="text-xs text-[#666276] font-normal">{h.city}, India</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDEAFF]">
                    
                    {/* Match Score */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">AI Match Score</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] font-extrabold text-[#7657FF] text-lg">
                          {h.aiMatchScore}% Match
                        </td>
                      ))}
                    </tr>

                    {/* Trust Score */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">MedBridge Trust Score</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] font-bold text-[#17151F]">
                          {h.trustScore} / 100 <ShieldCheck className="w-4 h-4 text-[#7657FF] inline ml-1" />
                        </td>
                      ))}
                    </tr>

                    {/* Accreditation */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Accreditation</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] font-medium text-[#17151F] text-xs">
                          {h.accreditation}
                        </td>
                      ))}
                    </tr>

                    {/* Cost Level & Range */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Typical Package Cost</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF]">
                          <span className="font-bold text-[#17151F] text-sm block">{h.costRange}</span>
                          <span className="text-[11px] text-[#666276] italic">Estimated — Subject to Hospital Confirmation</span>
                        </td>
                      ))}
                    </tr>

                    {/* International Desk */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">International Desk</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] text-[#7657FF] font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-[#7657FF]" />
                          24/7 Dedicated Coordinator
                        </td>
                      ))}
                    </tr>

                    {/* Languages */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Language Support</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] text-[#666276] text-xs">
                          <span className="font-semibold text-[#17151F] block mb-0.5">{h.languages.length} languages:</span>
                          {h.languages.join(", ")}
                        </td>
                      ))}
                    </tr>

                    {/* Airport Distance */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Distance from Airport</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] text-[#17151F] text-xs font-medium">
                          {h.distanceFromAirport}
                        </td>
                      ))}
                    </tr>

                    {/* Bed Capacity */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Capacity</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] text-[#666276] text-xs">
                          {h.bedCount} Quaternary Beds
                        </td>
                      ))}
                    </tr>

                    {/* Actions */}
                    <tr>
                      <td className="p-4 font-semibold text-[#17151F] bg-[#F8F7FC]/50">Action</td>
                      {compareList.map(h => (
                        <td key={h.id} className="p-4 border-l border-[#EDEAFF] space-y-2">
                          <Button 
                            size="sm" 
                            onClick={() => {
                              setIsCompareModalOpen(false);
                              router.push(`/ai-care-match?hospital=${h.id}`);
                            }}
                            className="w-full bg-[#7657FF] hover:bg-[#7657FF] text-white rounded-xl text-xs font-semibold cursor-pointer shadow-xs"
                          >
                            Select & Match
                          </Button>
                          <Link href={`/hospitals/${h.id}`} className="block">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full rounded-xl text-xs border-[#E2DEFB] text-[#17151F] hover:bg-[#F8F7FC]"
                            >
                              View Profile
                            </Button>
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-[#EDEAFF]">
                <p className="text-[11px] text-[#666276] italic">
                  * All medical quotes and logistics plans are confirmed directly by the chosen hospital&apos;s international desk.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCompareModalOpen(false)} 
                  className="rounded-xl text-xs border-[#E2DEFB]"
                >
                  Close Comparison
                </Button>
              </div>

            </div>
          </div>
        )}

        {/* 8. Explain Match Criteria Modal */}
        {explainingHospital && (
          <div className="fixed inset-0 z-50 bg-[#17151F]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E2DEFB] space-y-4 animate-in zoom-in-95">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-[#7657FF]">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-bold text-[#17151F] text-lg">Why this hospital matches ({explainingHospital.aiMatchScore}%)</h3>
                </div>
                <button 
                  onClick={() => setExplainingHospital(null)} 
                  className="text-[#666276] hover:text-[#17151F] p-1 font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-[#666276] leading-relaxed">
                The MedBridge AI Match algorithm assesses international suitability based on 4 verified objective parameters:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-[#F8F7FC] rounded-2xl border border-[#E2DEFB]">
                  <div className="flex justify-between font-semibold text-[#17151F] mb-1">
                    <span>Clinical Volume & Accreditations (35%)</span>
                    <span className="text-[#7657FF]">98/100</span>
                  </div>
                  <p className="text-[#666276] text-[11px]">{explainingHospital.accreditation} certifications with dedicated sub-specialty departments.</p>
                </div>

                <div className="p-3 bg-[#F8F7FC] rounded-2xl border border-[#E2DEFB]">
                  <div className="flex justify-between font-semibold text-[#17151F] mb-1">
                    <span>International Patient Infrastructure (25%)</span>
                    <span className="text-[#7657FF]">96/100</span>
                  </div>
                  <p className="text-[#666276] text-[11px]">24x7 desk, airport ambulance coordination, and {explainingHospital.languages.length} supported languages.</p>
                </div>

                <div className="p-3 bg-[#F8F7FC] rounded-2xl border border-[#E2DEFB]">
                  <div className="flex justify-between font-semibold text-[#17151F] mb-1">
                    <span>Pricing Transparency & Packages (20%)</span>
                    <span className="text-[#7657FF]">94/100</span>
                  </div>
                  <p className="text-[#666276] text-[11px]">Clear package range {explainingHospital.costRange} with itemized inclusion standards.</p>
                </div>

                <div className="p-3 bg-[#F8F7FC] rounded-2xl border border-[#E2DEFB]">
                  <div className="flex justify-between font-semibold text-[#17151F] mb-1">
                    <span>Patient Feedback & Trust Score (20%)</span>
                    <span className="text-[#7657FF]">{explainingHospital.trustScore}/100</span>
                  </div>
                  <p className="text-[#666276] text-[11px]">{explainingHospital.rating} ★ verified patient feedback across {explainingHospital.reviewsCount} reviews.</p>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  onClick={() => setExplainingHospital(null)} 
                  className="w-full bg-[#7657FF] hover:bg-[#7657FF] text-white rounded-xl text-xs font-semibold py-2.5"
                >
                  Understood
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* 9. Trust Score Explanation Modal */}
        {showTrustScoreInfo && (
          <div className="fixed inset-0 z-50 bg-[#17151F]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E2DEFB] space-y-4 animate-in zoom-in-95">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-[#17151F]">
                  <ShieldCheck className="w-5 h-5 text-[#7657FF]" />
                  <h3 className="font-bold text-[#17151F] text-lg">MedBridge Global Trust Score</h3>
                </div>
                <button 
                  onClick={() => setShowTrustScoreInfo(false)} 
                  className="text-[#666276] hover:text-[#17151F] p-1 font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-[#666276] leading-relaxed">
                The Trust Score (out of 100) reflects verified institutional credentials, patient safety track record, ethical pricing transparency, and adherence to international medical value travel standards.
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#F8F7FC] rounded-xl">
                  <strong className="text-[#17151F] block">Accreditation Rigor</strong>
                  <span className="text-[#666276] text-[11px]">Valid JCI, NABH, and NABL certifications verified annually.</span>
                </div>
                <div className="p-2.5 bg-[#F8F7FC] rounded-xl">
                  <strong className="text-[#17151F] block">Price Predictability</strong>
                  <span className="text-[#666276] text-[11px]">Audit of billing compliance against initial quotation estimates.</span>
                </div>
                <div className="p-2.5 bg-[#F8F7FC] rounded-xl">
                  <strong className="text-[#17151F] block">International Care Quality</strong>
                  <span className="text-[#666276] text-[11px]">Multilingual communication, dietary accommodations, and post-discharge continuity.</span>
                </div>
              </div>

              <Button 
                onClick={() => setShowTrustScoreInfo(false)} 
                className="w-full bg-[#17151F] hover:bg-[#17151F] text-white rounded-xl text-xs font-semibold py-2.5"
              >
                Close
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
