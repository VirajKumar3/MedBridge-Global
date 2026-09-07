"use client";


import { useState } from "react";
import { DOCTORS, Doctor } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Stethoscope, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  Languages, 
  GraduationCap, 
  Building2, 
  CheckCircle2,
  Video,
  X
} from "lucide-react";

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  // Profile modal & Consultation modal
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  const [consultDoctor, setConsultDoctor] = useState<Doctor | null>(null);
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const filteredDoctors = DOCTORS.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || d.department.includes(selectedSpecialty);
    const matchesCity = selectedCity === "All" || d.city.includes(selectedCity);
    const matchesLanguage = selectedLanguage === "All" || d.languages.includes(selectedLanguage);
    const matchesExp = selectedExperience === "All" || 
                       (selectedExperience === "25+" && d.experience >= 25) ||
                       (selectedExperience === "30+" && d.experience >= 30);

    return matchesSearch && matchesSpecialty && matchesCity && matchesLanguage && matchesExp;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 mb-3">
            Section 6: Doctors Module
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Find Specialist Doctors
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Consult with India’s leading surgeons and physicians. Schedule pre-travel video consultations and receive verified second opinions.
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="p-6 bg-white border-slate-200 shadow-sm rounded-3xl space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search doctors by name, surgical specialty, or hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-slate-50 border-slate-200 rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Specialization</label>
              <select 
                value={selectedSpecialty} 
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology ❤️</option>
                <option value="Orthopedics">Orthopedics 🦴</option>
                <option value="Oncology">Oncology 🎗️</option>
                <option value="Organ Transplant">Organ Transplant</option>
                <option value="Neurology">Neurology 🧠</option>
                <option value="Bariatric">Bariatric Surgery</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Location</label>
              <select 
                value={selectedCity} 
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Cities</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Experience</label>
              <select 
                value={selectedExperience} 
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">Any Experience</option>
                <option value="25+">25+ Years</option>
                <option value="30+">30+ Years</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Language</label>
              <select 
                value={selectedLanguage} 
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800 font-medium"
              >
                <option value="All">All Languages</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Tamil">Tamil</option>
                <option value="Gujarati">Gujarati</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <Card key={doc.id} className="p-6 bg-white border-slate-200 rounded-3xl hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                
                {/* Header with Avatar & Rating */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 font-extrabold text-xl flex items-center justify-center shrink-0 border border-emerald-200">
                    {doc.avatarInitials}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{doc.name}</h3>
                    <p className="text-xs text-primary font-semibold">{doc.specialization}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <span className="flex items-center text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current mr-0.5" /> {doc.rating}
                      </span>
                      <span>•</span>
                      <span>{doc.experience} Years Exp</span>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs mb-4">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{doc.hospital}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-slate-600">{doc.city}, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="text-slate-600">{doc.languages.join(" | ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 font-medium">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Next Slot: {doc.nextSlot}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 mb-5 leading-relaxed">
                  {doc.bio}
                </p>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setActiveDoctor(doc)}
                  className="rounded-xl text-xs font-semibold"
                >
                  View Profile
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => {
                    setConsultDoctor(doc);
                    setConsultSubmitted(false);
                  }}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1"
                >
                  <Video className="w-3.5 h-3.5" /> Request Consult
                </Button>
              </div>

            </Card>
          ))}
        </div>

        {/* Doctor Profile Modal */}
        {activeDoctor && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary font-bold text-xl flex items-center justify-center">
                    {activeDoctor.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{activeDoctor.name}</h3>
                    <p className="text-xs text-primary font-semibold">{activeDoctor.specialization}</p>
                    <p className="text-xs text-slate-500">{activeDoctor.hospital}</p>
                  </div>
                </div>
                <button onClick={() => setActiveDoctor(null)} className="text-slate-400 hover:text-slate-600">✕</button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Education & Accreditations:</span>
                  <p className="text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">{activeDoctor.education}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Biography & Clinical Career:</span>
                  <p className="text-slate-600 leading-relaxed">{activeDoctor.bio}</p>
                </div>
                <div className="flex justify-between py-2 border-y border-slate-100">
                  <span className="text-slate-500">Video Consultation Fee:</span>
                  <span className="font-bold text-slate-900">${activeDoctor.consultationFeeUSD} USD (₹{activeDoctor.consultationFeeINR})</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" onClick={() => setActiveDoctor(null)} className="flex-1 rounded-xl text-xs">
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    const d = activeDoctor;
                    setActiveDoctor(null);
                    setConsultDoctor(d);
                  }} 
                  className="flex-1 bg-primary text-white rounded-xl text-xs font-semibold"
                >
                  Book Video Consultation
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Consultation Request Dialog */}
        {consultDoctor && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95">
              <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Request Tele-Consultation</h3>
                  <p className="text-xs text-slate-500">with {consultDoctor.name}</p>
                </div>
                <button onClick={() => setConsultDoctor(null)} className="text-slate-400 hover:text-slate-600">✕</button>
              </div>

              {!consultSubmitted ? (
                <div className="space-y-4 text-xs">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Your Full Name</label>
                    <Input defaultValue="John Doe" className="bg-slate-50 text-xs py-5 rounded-xl" />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Patient Country</label>
                    <Input defaultValue="Nigeria" className="bg-slate-50 text-xs py-5 rounded-xl" />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Preferred Date & Slot</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs">
                      <option>{consultDoctor.nextSlot}</option>
                      <option>Next available day at 4:00 PM IST</option>
                      <option>Weekend slot at 11:00 AM IST</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Brief Clinical Concern / Question</label>
                    <textarea 
                      rows={3} 
                      defaultValue="Seeking second opinion on coronary angiogram findings and surgical recommendation for bypass."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800"
                    />
                  </div>

                  <Button 
                    onClick={() => setConsultSubmitted(true)}
                    className="w-full bg-primary text-white rounded-xl text-xs font-semibold py-5"
                  >
                    Confirm Consultation Request
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Consultation Booked!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Your appointment request with {consultDoctor.name} has been forwarded to the hospital international desk. You will receive a video link and confirmation email shortly.
                  </p>
                  <Button 
                    onClick={() => setConsultDoctor(null)}
                    className="bg-primary text-white rounded-xl text-xs px-6"
                  >
                    Done
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
