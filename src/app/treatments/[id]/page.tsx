"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TREATMENTS, HOSPITALS, DOCTORS, Treatment } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  CalendarDays, 
  Activity, 
  IndianRupee, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  Stethoscope,
  Plane,
  HeartPulse,
  Share2
} from "lucide-react";

export default function TreatmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const treatmentId = resolvedParams.id;

  // Match by id or fallback to fuzzy match by category/slug
  const treatment = TREATMENTS.find(t => 
    t.id === treatmentId || 
    t.id.toLowerCase().includes(treatmentId.toLowerCase()) ||
    t.category.toLowerCase().includes(treatmentId.toLowerCase())
  ) || TREATMENTS[0];

  const matchedHospitals = HOSPITALS.filter(h => 
    h.specialties.some(s => s.toLowerCase().includes(treatment.category.toLowerCase().replace(/[^a-z]/gi, '')))
  ).slice(0, 3);

  const matchedDoctors = DOCTORS.filter(d => 
    d.department.toLowerCase().includes(treatment.category.toLowerCase().replace(/[^a-z]/gi, ''))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8FCFD] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#EDEAFF] selection:text-[#17151F]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <Link 
            href="/treatments" 
            className="flex items-center gap-2 text-xs font-semibold text-[#666276] hover:text-[#17151F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Treatments Directory
          </Link>
          <Badge variant="outline" className="bg-[#EDEAFF] text-[#7657FF] border-[#D6CFFF] text-xs font-semibold">
            {treatment.category}
          </Badge>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DEFB] shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#7657FF] block">
                SPECIALTY CLINICAL PROCEDURE
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17151F] tracking-tight">
                {treatment.name}
              </h1>
              <p className="text-sm sm:text-base text-[#666276] leading-relaxed">
                {treatment.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link href="/ai-care-match">
                <Button className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-2xl py-6 px-8 text-sm shadow-sm cursor-pointer flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" /> Get Matched With Top Hospital
                </Button>
              </Link>
              <Link href="/resources#why-india">
                <Button variant="outline" className="w-full rounded-2xl py-6 text-sm font-semibold border-[#E2DEFB] hover:bg-[#F8F7FC] cursor-pointer">
                  Explore Cost Savings in India
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E2DEFB]">
            <div className="p-4 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#666276] block mb-1">Estimated Cost (INR)</span>
              <p className="text-lg font-bold text-[#17151F]">{treatment.costRangeINR}</p>
              <span className="text-[11px] text-[#7657FF] font-semibold">{treatment.costRangeUSD} USD</span>
            </div>

            <div className="p-4 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#666276] block mb-1">Hospital Inpatient Stay</span>
              <p className="text-lg font-bold text-[#17151F]">{treatment.hospitalStay}</p>
              <span className="text-[11px] text-[#666276]">Post-op monitoring included</span>
            </div>

            <div className="p-4 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#666276] block mb-1">Trip Duration in India</span>
              <p className="text-lg font-bold text-[#17151F]">{treatment.tripDuration}</p>
              <span className="text-[11px] text-[#666276]">Until safe flight clearance</span>
            </div>

            <div className="p-4 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#666276] block mb-1">Success & Survival Rate</span>
              <p className="text-lg font-bold text-[#7657FF]">{treatment.successRate}</p>
              <span className="text-[11px] text-[#666276]">At JCI accredited centers</span>
            </div>
          </div>

          {/* Clinical Cost Disclaimer */}
          <div className="p-3.5 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl text-[11px] text-[#92400E] flex items-center gap-2">
            <span className="font-bold">Estimated Cost — Subject to Hospital Confirmation:</span>
            <span>Final quotation depends on patient clinical evaluations, comorbidities, and chosen room category.</span>
          </div>
        </div>

        {/* Detailed Procedure Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 sm:p-8 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h2 className="text-2xl font-bold text-[#17151F]">Procedure Overview</h2>
              <p className="text-sm text-[#666276] leading-relaxed">
                {treatment.overview}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-[#E2DEFB]">
                <h3 className="text-base font-bold text-[#17151F]">Why Choose India for {treatment.name}?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#F8F7FC] rounded-xl flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">US-FDA approved prosthetics & cutting-edge robotic surgical suites.</span>
                  </div>
                  <div className="p-3 bg-[#F8F7FC] rounded-xl flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">60% to 80% cost savings compared to private care in US, UK, or Australia.</span>
                  </div>
                  <div className="p-3 bg-[#F8F7FC] rounded-xl flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">Zero wait times with immediate surgeon consultation and admission.</span>
                  </div>
                  <div className="p-3 bg-[#F8F7FC] rounded-xl flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">English-fluent surgical teams with dedicated international lounges.</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQs Section */}
            {treatment.faqs && treatment.faqs.length > 0 && (
              <Card className="p-6 sm:p-8 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-[#17151F] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#7657FF]" />
                  Frequently Asked Clinical Questions
                </h2>
                <div className="space-y-3">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF] space-y-1">
                      <p className="text-xs sm:text-sm font-bold text-[#17151F]">{faq.q}</p>
                      <p className="text-xs text-[#666276] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>

          {/* Right Column: Top Hospitals & Doctors */}
          <div className="space-y-6">
            
            {/* Top Hospitals */}
            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base text-[#17151F] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#7657FF]" /> Leading Hospitals
                </h3>
                <Link href="/hospitals" className="text-xs font-semibold text-[#7657FF] hover:underline">
                  View all
                </Link>
              </div>

              <div className="space-y-3">
                {matchedHospitals.map(hosp => (
                  <Link key={hosp.id} href={`/hospitals/${hosp.id}`} className="block group">
                    <div className="p-3.5 rounded-2xl border border-[#E2DEFB] hover:border-[#7657FF] hover:bg-[#F8FCFD] transition-all space-y-1.5">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-xs text-[#17151F] group-hover:text-[#7657FF] transition-colors">
                          {hosp.name}
                        </h4>
                        <Badge variant="outline" className="text-[10px] bg-[#EDEAFF] text-[#17151F] border-none">
                          {hosp.accreditation.split(",")[0]}
                        </Badge>
                      </div>
                      <p className="text-[11px] text-[#666276]">{hosp.city} • AI Match: {hosp.aiMatchScore}%</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Specialist Doctors */}
            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base text-[#17151F] flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#7657FF]" /> Recommended Surgeons
                </h3>
                <Link href="/doctors" className="text-xs font-semibold text-[#7657FF] hover:underline">
                  View all
                </Link>
              </div>

              <div className="space-y-3">
                {matchedDoctors.map(doc => (
                  <Link key={doc.id} href={`/doctors/${doc.id}`} className="block group">
                    <div className="p-3.5 rounded-2xl border border-[#E2DEFB] hover:border-[#7657FF] hover:bg-[#F8FCFD] transition-all space-y-1.5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-xs text-[#17151F] group-hover:text-[#7657FF] transition-colors">
                            {doc.name}
                          </h4>
                          <p className="text-[11px] text-[#666276]">{doc.specialization}</p>
                        </div>
                        <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-800 border-emerald-200">
                          {doc.experience} yrs exp
                        </Badge>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Travel Assistance Card */}
            <div className="p-6 bg-gradient-to-br from-[#17151F] to-[#17151F] rounded-3xl text-white space-y-4 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EDEAFF] block">
                FULL JOURNEY CARE
              </span>
              <h3 className="text-xl font-bold leading-tight">Need Medical Visa or Quotation for {treatment.name}?</h3>
              <p className="text-xs text-[#EDEAFF]/80 leading-relaxed">
                Our care coordinators assist you with hospital visa invitation letters, airport transfers, and guest house bookings.
              </p>
              <Link href="/ai-care-match?step=upload" className="block pt-2">
                <Button className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-xl text-xs py-3 cursor-pointer">
                  Request Hospital Quotation
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
