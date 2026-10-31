"use client";

import { use, useState } from "react";
import Link from "next/link";
import { HOSPITALS, DOCTORS, Hospital } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Languages, 
  Building2, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  FileText, 
  Plane, 
  Stethoscope,
  Heart,
  Share2,
  DollarSign,
  AlertCircle
} from "lucide-react";

export default function HospitalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const hospitalId = resolvedParams.id;

  const hospital = HOSPITALS.find(h => 
    h.id === hospitalId || 
    h.id.toLowerCase().includes(hospitalId.toLowerCase()) ||
    h.name.toLowerCase().includes(hospitalId.toLowerCase())
  ) || HOSPITALS[0];

  const affiliatedDoctors = DOCTORS.filter(d => 
    d.hospital.toLowerCase().includes(hospital.name.toLowerCase().split(" ")[0]) ||
    d.city.toLowerCase().includes(hospital.city.toLowerCase().split(" ")[0])
  );

  const [isSaved, setIsSaved] = useState(false);
  const [quoteRequested, setQuoteRequested] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FCFD] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#EDEAFF] selection:text-[#17151F]">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between">
          <Link 
            href="/hospitals" 
            className="flex items-center gap-2 text-xs font-semibold text-[#666276] hover:text-[#17151F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Hospital Directory
          </Link>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsSaved(!isSaved)}
              className={`rounded-xl text-xs font-semibold border-[#E2DEFB] cursor-pointer ${
                isSaved ? "bg-rose-50 text-rose-600 border-rose-200" : "text-[#666276] hover:text-[#17151F]"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 mr-1.5 ${isSaved ? "fill-rose-600" : ""}`} />
              {isSaved ? "Shortlisted" : "Shortlist Hospital"}
            </Button>
          </div>
        </div>

        {/* Hospital Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DEFB] shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs font-semibold">
                  Accredited: {hospital.accreditation}
                </Badge>
                {hospital.intlDesk && (
                  <Badge className="bg-blue-50 text-blue-800 border-blue-200 text-xs font-semibold">
                    Dedicated International Patient Desk
                  </Badge>
                )}
                <Badge variant="outline" className="text-xs font-semibold text-[#17151F] border-[#E2DEFB]">
                  Trust Score: {hospital.trustScore}/100
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#17151F] tracking-tight">
                {hospital.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#666276]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#7657FF]" />
                  {hospital.city}, {hospital.state}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Plane className="w-4 h-4 text-[#666276]" />
                  {hospital.distanceFromAirport}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  <strong>{hospital.rating}</strong> ({hospital.reviewsCount} international reviews)
                </span>
              </div>

              <p className="text-sm text-[#666276] leading-relaxed pt-2">
                {hospital.description}
              </p>
            </div>

            {/* AI Match & Quick CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 p-5 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF] text-center sm:text-left lg:text-center min-w-[260px]">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#666276] uppercase block">
                  AI RECOMMENDATION SCORE
                </span>
                <p className="text-4xl font-extrabold text-[#7657FF] mt-1">
                  {hospital.aiMatchScore}%
                </p>
                <p className="text-[11px] text-[#666276] mt-0.5">Top-tier clinical specialty alignment</p>
              </div>

              <div className="pt-3 border-t border-[#EDEAFF] space-y-2">
                <Button 
                  onClick={() => setQuoteRequested(true)}
                  disabled={quoteRequested}
                  className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-xl text-xs py-5 cursor-pointer"
                >
                  {quoteRequested ? "Quotation Request Logged" : "Request Official Quotation"}
                </Button>
                <Link href="/doctors" className="block">
                  <Button variant="outline" className="w-full rounded-xl text-xs font-semibold border-[#E2DEFB] hover:bg-white cursor-pointer">
                    View Specialist Doctors ({affiliatedDoctors.length})
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Cost Disclaimer */}
          <div className="p-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl text-[11px] text-[#92400E] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              <strong>Estimated Cost — Subject to Hospital Confirmation:</strong> {hospital.costRange}. Exact costs are calculated by the hospital international patient desk after analyzing individual medical history and scans.
            </span>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            
            {/* Key Specialties */}
            <Card className="p-6 sm:p-8 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-[#17151F] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#7657FF]" /> Centers of Clinical Excellence
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {hospital.specialties.map((spec, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs font-semibold px-3 py-1.5 bg-[#F8F7FC] border-[#E2DEFB] text-[#17151F]">
                    {spec}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* International Patient Desk Facilities */}
            <Card className="p-6 sm:p-8 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-[#17151F] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#7657FF]" /> International Patient Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {hospital.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FCFD] border border-[#EDEAFF] text-xs text-[#17151F]">
                    <CheckCircle2 className="w-4 h-4 text-[#7657FF] shrink-0" />
                    <span className="font-medium">{fac}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Affiliated Specialist Doctors */}
            <Card className="p-6 sm:p-8 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#17151F] flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-[#7657FF]" /> Department Specialists
                </h2>
                <span className="text-xs text-[#666276]">{affiliatedDoctors.length} Doctors available</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {affiliatedDoctors.map(doc => (
                  <div key={doc.id} className="p-4 rounded-2xl border border-[#E2DEFB] bg-slate-50 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xs text-[#17151F]">{doc.name}</h4>
                        <p className="text-[11px] text-[#666276]">{doc.specialization}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px] bg-white text-[#7657FF] border-emerald-200">
                        {doc.experience} yrs
                      </Badge>
                    </div>
                    <p className="text-[11px] text-[#666276]">{doc.education}</p>
                    <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-xs">
                      <span className="text-slate-500 text-[11px]">Fee: ${doc.consultationFeeUSD}</span>
                      <Link href={`/doctors/${doc.id}`}>
                        <span className="font-bold text-[#7657FF] hover:underline cursor-pointer">Consult &rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* Right Column: Key Details */}
          <div className="space-y-6">
            
            {/* Quick Facts */}
            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#17151F]">Hospital Vital Facts</h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#F0F4F8]">
                  <span className="text-[#666276]">Bed Capacity</span>
                  <span className="font-bold text-[#17151F]">{hospital.bedCount} Beds</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F0F4F8]">
                  <span className="text-[#666276]">Accreditations</span>
                  <span className="font-bold text-[#17151F]">{hospital.accreditation}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F0F4F8]">
                  <span className="text-[#666276]">Languages Spoken</span>
                  <span className="font-bold text-[#17151F] text-right max-w-[160px] line-clamp-1">
                    {hospital.languages.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#F0F4F8]">
                  <span className="text-[#666276]">Airport Distance</span>
                  <span className="font-bold text-[#17151F]">{hospital.distanceFromAirport}</span>
                </div>
              </div>
            </Card>

            {/* Travel Assistance Box */}
            <div className="p-6 bg-gradient-to-br from-[#17151F] to-[#17151F] rounded-3xl text-white space-y-4 shadow-sm">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EDEAFF] block">
                SEAMLESS ADMISSION
              </span>
              <h3 className="text-xl font-bold leading-tight">Travelling to {hospital.name}?</h3>
              <p className="text-xs text-[#EDEAFF]/80 leading-relaxed">
                Get assistance with Medical Visa invitation letters issued directly by {hospital.name}&apos;s international desk.
              </p>
              <Link href="/medical-travel" className="block pt-2">
                <Button className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-xl text-xs py-3 cursor-pointer">
                  Check Medical Visa Requirements
                </Button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
