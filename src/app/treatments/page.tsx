"use client";

import { useState } from "react";
import Link from "next/link";
import { TREATMENTS, Treatment } from "@/lib/data";
import { Input } from "@/components/ui/input";
import {
  Search,
  HeartPulse,
  Bone,
  Brain,
  Droplets,
  Activity,
  Baby,
  Smile,
  Scissors,
  Stethoscope,
  ChevronRight,
  IndianRupee,
  CalendarDays,
  ActivitySquare,
  ShieldCheck,
  Building2,
  ArrowRight,
  BarChart,
  Star
} from "lucide-react";

const CATEGORIES = [
  { name: "All", icon: null },
  { name: "Cardiology", icon: HeartPulse },
  { name: "Orthopedics", icon: Bone }, // Using Orthopedics as per data.ts
  { name: "Oncology", icon: Activity },
  { name: "Neurology", icon: Brain },
  { name: "Transplant", icon: Droplets },
  { name: "IVF & Fertility", icon: Baby },
  { name: "Bariatric Surgery", icon: Scissors },
  { name: "Dental Care", icon: Smile },
];

export default function TreatmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment>(TREATMENTS[0]);

  const filteredTreatments = TREATMENTS.filter(t => {
    // Map the category strings to the simpler filter names
    const tCat = t.category.toLowerCase();
    const sCat = selectedCategory.toLowerCase();
    const matchesCategory = selectedCategory === "All" || tCat.includes(sCat);

    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Generates generic benefits based on treatment. 
  // In a real app, this would be part of the data.ts Treatment interface.
  const getBenefits = (_t: Treatment) => {
    return [
      "Targeted precision",
      "Faster recovery",
      "Improved quality of life"
    ];
  };

  return (
    <div className="min-h-screen bg-[#F8FCFD] pt-36 pb-24 text-[#17151F] font-sans selection:bg-[#EDEAFF] selection:text-[#17151F]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-16">

        {/* 1. Header Section */}
        <div className="relative flex items-center justify-between mb-14">
          <div className="max-w-xl relative z-10">
            <span className="text-[11px] font-bold tracking-[2px] text-[#666276] uppercase mb-5 block">
              Treatments
            </span>
            <h1 className="text-4xl md:text-[44px] font-medium tracking-tight mb-5 leading-[1.15]">
              Find the Right Treatment for a <span className="text-[#7657FF]">Healthier Tomorrow</span>
            </h1>
            <p className="text-[#666276] text-[15px] leading-relaxed max-w-md">
              Explore trusted treatments, compare costs, and connect with top hospitals — all in one place.
            </p>
          </div>

          <div className="hidden lg:flex absolute -right-8 -top-8 w-[400px] h-[250px] items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-[#EDEAFF] rounded-full blur-[80px] opacity-70" />
            <Stethoscope className="w-48 h-48 text-[#EDEAFF] opacity-40 -rotate-12 absolute" strokeWidth={1} />
            <div className="bg-white/80 backdrop-blur-sm border border-[#EDEAFF] rounded-2xl p-4 shadow-sm absolute right-10 top-10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EDEAFF] flex items-center justify-center">
                <HeartPulse className="w-4 h-4 text-[#7657FF]" />
              </div>
              <p className="text-[12px] font-medium text-[#17151F] leading-tight">Your health journey,<br />our global support.</p>
            </div>
          </div>
        </div>

        {/* 2. Search */}
        <div className="relative max-w-3xl mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666276]" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[60px] pl-[60px] pr-6 rounded-full border-[#DCE7E9] bg-white shadow-[0_4px_20px_rgba(11,37,69,0.03)] text-[15px] focus-visible:ring-[#7657FF] focus-visible:ring-offset-0 focus-visible:border-[#7657FF] placeholder:text-[#A99AFF] transition-all"
            placeholder="Search treatments (e.g. knee replacement, cancer, heart...)"
          />
        </div>

        {/* 3. Category Filters */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-hide mb-10 -mx-6 px-6 lg:mx-0 lg:px-0">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.name;
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-200 ${isSelected
                    ? "bg-[#7657FF] border-[#7657FF] text-white shadow-md"
                    : "bg-white border-[#DCE7E9] text-[#666276] hover:border-[#A99AFF] hover:text-[#17151F]"
                  }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#7657FF]"}`} />}
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* 4. Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 lg:gap-8 items-start">

          {/* Left — Treatment list */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1 mb-2">
              <h3 className="font-semibold text-[15px]">{filteredTreatments.length} Treatments</h3>
              <span className="text-[12px] text-[#666276] font-medium flex items-center gap-1 cursor-pointer hover:text-[#17151F]">
                Sort by: Popular <ChevronRight className="w-3 h-3 rotate-90" />
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {filteredTreatments.map(t => {
                const isSelected = selectedTreatment.id === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTreatment(t)}
                    className={`group flex items-center justify-between p-4 rounded-[20px] cursor-pointer transition-all duration-200 border ${isSelected
                        ? "bg-[#F8F7FC] border-[#7657FF] shadow-sm"
                        : "bg-white border-[#DCE7E9] hover:border-[#A99AFF] hover:shadow-sm"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isSelected ? "bg-[#EDEAFF]" : "bg-[#F8F7FC] group-hover:bg-[#EDEAFF]"}`}>
                        <Stethoscope className={`w-5 h-5 ${isSelected ? "text-[#7657FF]" : "text-[#666276]"}`} />
                      </div>
                      <div>
                        <h4 className={`text-[14px] font-medium mb-1 ${isSelected ? "text-[#17151F]" : "text-[#17151F]"}`}>{t.name}</h4>
                        <p className="text-[12px] text-[#666276]">{t.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <span className={`text-[13px] font-semibold ${isSelected ? "text-[#7657FF]" : "text-[#17151F]"}`}>
                        {t.costRangeINR}
                      </span>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? "text-[#7657FF]" : "text-[#A99AFF]"}`} />
                    </div>
                  </div>
                )
              })}
              {filteredTreatments.length === 0 && (
                <div className="bg-white border border-[#DCE7E9] rounded-[20px] p-8 text-center text-[#666276] text-[14px]">
                  No treatments found. Try adjusting your search.
                </div>
              )}
            </div>
          </div>

          {/* Right — Treatment details */}
          {selectedTreatment && (
            <div className="sticky top-28 bg-white rounded-[24px] border border-[#DCE7E9] shadow-[0_8px_30px_rgba(11,37,69,0.04)] p-6 lg:p-8 flex flex-col gap-8">

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-[#EDEAFF] text-[#6042EE] rounded-full text-[11px] font-bold uppercase tracking-wider">
                      <ActivitySquare className="w-3 h-3" /> {selectedTreatment.category}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-[#EDEAFF] text-[#17151F] rounded-full text-[11px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" /> Verified Hospitals
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-2">
                    {selectedTreatment.name}
                  </h2>
                  <p className="text-[14px] text-[#666276] leading-relaxed max-w-lg">
                    {selectedTreatment.description}
                  </p>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 lg:gap-4">
                <div className="bg-[#F8FCFD] rounded-2xl p-4 border border-[#EDEAFF]">
                  <div className="w-8 h-8 rounded-full bg-[#EDEAFF] flex items-center justify-center mb-3">
                    <IndianRupee className="w-4 h-4 text-[#6042EE]" />
                  </div>
                  <p className="text-[11px] text-[#666276] uppercase tracking-wider font-semibold mb-1">Estimated Cost</p>
                  <p className="text-[14px] font-bold text-[#17151F]">{selectedTreatment.costRangeINR}</p>
                </div>
                <div className="bg-[#F8FCFD] rounded-2xl p-4 border border-[#EDEAFF]">
                  <div className="w-8 h-8 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-3">
                    <CalendarDays className="w-4 h-4 text-[#3730A3]" />
                  </div>
                  <p className="text-[11px] text-[#666276] uppercase tracking-wider font-semibold mb-1">Hospital Stay</p>
                  <p className="text-[14px] font-bold text-[#17151F]">{selectedTreatment.hospitalStay}</p>
                </div>
                <div className="bg-[#F8FCFD] rounded-2xl p-4 border border-[#EDEAFF]">
                  <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center mb-3">
                    <Activity className="w-4 h-4 text-[#B45309]" />
                  </div>
                  <p className="text-[11px] text-[#666276] uppercase tracking-wider font-semibold mb-1">Recovery Time</p>
                  <p className="text-[14px] font-bold text-[#17151F]">{selectedTreatment.recoveryTime}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <p className="text-[13px] font-semibold text-[#17151F] mb-3">Key Benefits</p>
                <div className="flex flex-wrap gap-3">
                  {getBenefits(selectedTreatment).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F8F7FC] px-3 py-2 rounded-xl text-[12px] font-medium text-[#666276]">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <ShieldCheck className="w-3 h-3 text-[#7657FF]" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Hospitals */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[13px] font-semibold text-[#17151F] flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Top Hospitals
                  </p>
                  <span className="text-[12px] font-medium text-[#7657FF] cursor-pointer hover:underline">View All &rarr;</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {selectedTreatment.suitableHospitals.slice(0, 3).map((hosp, i) => {
                    const [name, location] = hosp.split(",");
                    return (
                      <div key={i} className="border border-[#DCE7E9] rounded-xl p-3 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#F8F7FC] flex items-center justify-center shrink-0">
                          <Building2 className="w-5 h-5 text-[#A99AFF]" />
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#17151F] leading-tight line-clamp-1">{name}</p>
                          <p className="text-[11px] text-[#666276] mt-0.5">{location?.trim() || "India"}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                            <span className="text-[10px] font-medium">4.8</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <Link href={`/treatments/${selectedTreatment.id}`} className="w-full">
                  <button className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#7657FF] text-white text-[14px] font-medium hover:bg-[#6042EE] transition-colors shadow-sm cursor-pointer">
                    View Full Details <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/hospitals" className="w-full">
                  <button className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white border border-[#DCE7E9] text-[#17151F] text-[14px] font-medium hover:border-[#A99AFF] hover:bg-[#F8F7FC] transition-colors cursor-pointer">
                    <BarChart className="w-4 h-4" /> Compare Hospitals
                  </button>
                </Link>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
