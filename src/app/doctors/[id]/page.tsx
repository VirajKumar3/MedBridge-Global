"use client";

import { use, useState } from "react";
import Link from "next/link";
import { DOCTORS, HOSPITALS, Doctor } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Stethoscope, 
  Building2, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  Languages, 
  GraduationCap, 
  Video, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";

export default function DoctorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const doctorId = resolvedParams.id;

  const doctor = DOCTORS.find(d => 
    d.id === doctorId || 
    d.id.toLowerCase().includes(doctorId.toLowerCase()) ||
    d.name.toLowerCase().includes(doctorId.toLowerCase())
  ) || DOCTORS[0];

  const affiliatedHospital = HOSPITALS.find(h => 
    h.name.toLowerCase().includes(doctor.hospital.toLowerCase().split(" ")[0])
  );

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(doctor.nextSlot);

  return (
    <div className="min-h-screen bg-[#F8FCFD] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#EDEAFF] selection:text-[#17151F]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link 
            href="/doctors" 
            className="flex items-center gap-2 text-xs font-semibold text-[#666276] hover:text-[#17151F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Specialist Doctors
          </Link>
          <Badge variant="outline" className="bg-[#EDEAFF] text-[#7657FF] border-[#D6CFFF] text-xs font-semibold">
            {doctor.department}
          </Badge>
        </div>

        {/* Doctor Header Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2DEFB] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-emerald-50 text-[#7657FF] flex items-center justify-center font-extrabold text-3xl border border-[#EDEAFF] shadow-xs shrink-0">
              {doctor.avatarInitials}
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs font-semibold">
                  Verified Specialist
                </Badge>
                <Badge variant="outline" className="text-xs text-slate-600 border-[#E2DEFB]">
                  {doctor.experience} Years Experience
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#17151F] tracking-tight">
                {doctor.name}
              </h1>

              <p className="text-sm font-semibold text-[#7657FF]">
                {doctor.specialization}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#666276] pt-1">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Building2 className="w-4 h-4 text-[#7657FF]" />
                  {doctor.hospital}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#666276]" />
                  {doctor.city}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  <strong>{doctor.rating}</strong> (Verified Patient Rating)
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="pt-4 border-t border-[#E2DEFB]">
            <p className="text-sm text-[#666276] leading-relaxed">
              {doctor.bio}
            </p>
          </div>
        </div>

        {/* Doctor Details & Consultation Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Credentials & Affiliation */}
          <div className="lg:col-span-2 space-y-6">
            
            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#17151F] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#7657FF]" /> Qualifications & Education
              </h3>
              <p className="text-sm text-[#666276] leading-relaxed">
                {doctor.education}
              </p>
            </Card>

            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-4">
              <h3 className="font-bold text-base text-[#17151F] flex items-center gap-2">
                <Languages className="w-5 h-5 text-[#7657FF]" /> Consultation Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, idx) => (
                  <Badge key={idx} variant="outline" className="bg-[#F8FCFD] text-[#17151F] border-[#EDEAFF] px-3 py-1 text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-[#666276]">
                Translators for Arabic, Russian, French, and Swahili are available upon request through our Care Coordinator CRM.
              </p>
            </Card>

            {affiliatedHospital && (
              <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-3">
                <h3 className="font-bold text-base text-[#17151F] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#7657FF]" /> Hospital Affiliation
                </h3>
                <div className="p-4 rounded-2xl bg-[#F8FCFD] border border-[#EDEAFF] flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-sm text-[#17151F]">{affiliatedHospital.name}</h4>
                    <p className="text-xs text-[#666276]">{affiliatedHospital.city} • Accreditation: {affiliatedHospital.accreditation}</p>
                  </div>
                  <Link href={`/hospitals/${affiliatedHospital.id}`}>
                    <Button size="sm" variant="outline" className="rounded-xl text-xs font-semibold cursor-pointer">
                      View Hospital
                    </Button>
                  </Link>
                </div>
              </Card>
            )}

          </div>

          {/* Right Col: Video Consult Booking Widget */}
          <div className="space-y-6">
            <Card className="p-6 bg-white border-[#E2DEFB] rounded-3xl shadow-xs space-y-5">
              <div>
                <span className="text-[10px] font-bold text-[#7657FF] uppercase tracking-wider block">
                  TELE-CONSULTATION
                </span>
                <h3 className="text-xl font-bold text-[#17151F] mt-0.5">Book Video Consultation</h3>
                <p className="text-xs text-[#666276] mt-1">Pre-travel clinical review & second opinion</p>
              </div>

              <div className="p-3.5 bg-[#F8FCFD] rounded-2xl border border-[#EDEAFF] space-y-1">
                <span className="text-[11px] text-[#666276] block">Consultation Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[#17151F]">${doctor.consultationFeeUSD}</span>
                  <span className="text-xs text-[#666276]">/ ₹{doctor.consultationFeeINR}</span>
                </div>
                <span className="text-[10px] text-emerald-700 font-medium">30-minute encrypted video slot</span>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#17151F] block">Available Slots</label>
                <div className="space-y-1.5">
                  {[doctor.nextSlot, "Day after tomorrow, 4:00 PM IST", "Upcoming Saturday, 11:30 AM IST"].map((slot, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                        selectedSlot === slot 
                          ? "bg-emerald-50 border-[#7657FF] text-[#7657FF] font-semibold"
                          : "bg-white border-[#E2DEFB] text-[#666276] hover:border-[#7657FF]"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {bookingConfirmed ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                  <p className="text-xs font-bold text-emerald-900">Consultation Slot Reserved!</p>
                  <p className="text-[11px] text-emerald-700">A confirmation with Zoom link & calendar invite has been sent to your email.</p>
                </div>
              ) : (
                <Button 
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-xl text-xs py-5 shadow-sm cursor-pointer"
                >
                  Confirm Video Consultation
                </Button>
              )}

              <div className="text-[11px] text-[#666276] leading-relaxed pt-2 border-t border-[#E2DEFB]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7657FF] inline mr-1" />
                All tele-consultations adhere to national medical telemedicine guidelines and HIPAA privacy standards.
              </div>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
