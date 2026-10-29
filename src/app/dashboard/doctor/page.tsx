"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  FileText, 
  Video, 
  CheckCircle2, 
  Clock, 
  Search, 
  Bell, 
  ShieldCheck, 
  Lock, 
  AlertCircle,
  FileSearch,
  Sparkles,
  ChevronRight,
  Activity,
  UserCheck,
  Send,
  MessageSquare,
  Building2,
  X
} from "lucide-react";

interface AuthorizedPatient {
  id: string;
  name: string;
  age: number;
  gender: string;
  country: string;
  diagnosis: string;
  recommendedProcedure: string;
  hospital: string;
  consentGranted: boolean;
  consentDate: string;
  status: "Review Required" | "Consultation Scheduled" | "Pre-Op Cleared" | "Post-Op Follow-up";
  appointmentSlot?: string;
  documents: { name: string; type: string; date: string; ocrExtracted: string }[];
  aiCaseSummary: {
    chiefComplaint: string;
    pathology: string;
    comorbidities: string[];
    medications: string[];
    proposedPathway: string;
    confidenceScore: string;
  };
  clinicalNotes: string[];
}

const AUTHORIZED_PATIENTS: AuthorizedPatient[] = [
  {
    id: "PAT-88421",
    name: "John Doe",
    age: 52,
    gender: "Male",
    country: "Nigeria",
    diagnosis: "Severe Multi-Vessel Coronary Artery Disease",
    recommendedProcedure: "Off-Pump Beating Heart CABG (Triple Vessel)",
    hospital: "Medanta - The Medicity, Gurgaon",
    consentGranted: true,
    consentDate: "2026-09-02",
    status: "Review Required",
    appointmentSlot: "Tomorrow, 3:30 PM IST (Zoom Video Room)",
    documents: [
      { 
        name: "Coronary_Angiogram_DICOM_Report.pdf", 
        type: "Radiology / Angiography", 
        date: "2026-08-30",
        ocrExtracted: "LAD: 85% proximal stenosis. LCx: 70% mid-segment occlusion. RCA: 90% distal lesion. LVEF: 55% preserved."
      },
      { 
        name: "Blood_Pathology_Lipid_Panel.pdf", 
        type: "Laboratory Panel", 
        date: "2026-08-30",
        ocrExtracted: "HbA1c: 7.2%, Serum Creatinine: 1.1 mg/dL, Total Cholesterol: 245 mg/dL. Coagulation profile normal."
      }
    ],
    aiCaseSummary: {
      chiefComplaint: "Exertional angina (CCS Class III) for 6 months, responsive to sublingual nitrates.",
      pathology: "Triple vessel coronary artery disease with significant hemodynamic compromise in LAD/LCx/RCA.",
      comorbidities: ["Type 2 Diabetes Mellitus (Oral Metformin)", "Primary Essential Hypertension (Amlodipine 5mg)"],
      medications: ["Aspirin 75mg daily", "Atorvastatin 40mg at bedtime", "Metformin 500mg BID"],
      proposedPathway: "Cardiothoracic surgical review for off-pump CABG (LIMA to LAD, SVG to OM & PDA). Pre-op carotid Doppler recommended.",
      confidenceScore: "98.4% clinical entity alignment"
    },
    clinicalNotes: [
      "Reviewed angiography disc; lesions favorable for total arterial or hybrid grafting.",
      "Advised patient to withhold Aspirin 5 days prior to planned surgery date."
    ]
  },
  {
    id: "PAT-88422",
    name: "Fatima Al-Mansoor",
    age: 58,
    gender: "Female",
    country: "United Arab Emirates",
    diagnosis: "Severe Bilateral Osteoarthritis Knee (Grade IV Kellgren-Lawrence)",
    recommendedProcedure: "Bilateral Robotic-Assisted Total Knee Arthroplasty",
    hospital: "Indraprastha Apollo Hospitals, Delhi",
    consentGranted: true,
    consentDate: "2026-09-01",
    status: "Consultation Scheduled",
    appointmentSlot: "Thursday, 11:00 AM IST",
    documents: [
      {
        name: "Bilateral_Knee_WeightBearing_XRay.pdf",
        type: "Radiology / X-Ray",
        date: "2026-08-28",
        ocrExtracted: "Marked joint space narrowing medially with subchondral sclerosis and osteophyte formation. Varus deformity 8 degrees."
      }
    ],
    aiCaseSummary: {
      chiefComplaint: "Severe bilateral knee pain, restricted walking distance (<100 meters), refractory to NSAIDs and intra-articular steroid injections.",
      pathology: "End-stage tricompartmental gonarthrosis bilateral.",
      comorbidities: ["Mild Osteoporosis (T-score -2.6)"],
      medications: ["Calcium + Vit D3 daily", "Paracetamol PRN"],
      proposedPathway: "Stryker Mako robotic total knee replacement. Single-stage or staged bilateral depending on pre-anesthetic clearance.",
      confidenceScore: "97.6% clinical entity alignment"
    },
    clinicalNotes: [
      "Pre-travel tele-consult completed. Patient agrees to 14 days total trip with post-op physiotherapy."
    ]
  },
  {
    id: "PAT-88423",
    name: "Abdul Rahim",
    age: 46,
    gender: "Male",
    country: "Bangladesh",
    diagnosis: "Recurrent Skull-Base Meningioma (Post-Surgical)",
    recommendedProcedure: "Proton Beam Radiation Therapy Evaluation",
    hospital: "Apollo Proton Cancer Centre, Chennai",
    consentGranted: true,
    consentDate: "2026-09-04",
    status: "Review Required",
    appointmentSlot: "Friday, 2:00 PM IST",
    documents: [
      {
        name: "Brain_MRI_Contrast_Thin_Slice.pdf",
        type: "Radiology / MRI",
        date: "2026-09-03",
        ocrExtracted: "Contrast-enhancing mass 2.8 x 2.2 cm adjacent to cavernous sinus with minimal optic chiasm displacement."
      }
    ],
    aiCaseSummary: {
      chiefComplaint: "Intermittent diplopia and left-sided retro-orbital headaches.",
      pathology: "Benign meningioma (WHO Grade I) in surgically delicate anatomical location.",
      comorbidities: ["None"],
      medications: ["Levetiracetam 500mg BID (prophylactic)"],
      proposedPathway: "Pencil-beam scanning proton therapy to deliver 54 Gy in 30 fractions with critical organ-at-risk sparing.",
      confidenceScore: "99.1% clinical entity alignment"
    },
    clinicalNotes: [
      "Case forwarded to Multi-Disciplinary Neuro-Oncology Board for dosimetric planning."
    ]
  }
];

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState<"patients" | "appointments" | "summaries" | "notes">("patients");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<AuthorizedPatient | null>(AUTHORIZED_PATIENTS[0]);
  const [newNote, setNewNote] = useState("");
  const [showConsentModal, setShowConsentModal] = useState(false);

  const filteredPatients = AUTHORIZED_PATIENTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim() || !selectedPatient) return;
    selectedPatient.clinicalNotes.unshift(`[${new Date().toLocaleDateString()}] Dr. Naresh Trehan: ${newNote}`);
    setNewNote("");
  };

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col bg-slate-50 font-sans">
      <div className="flex flex-1">
        <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900">Doctor Portal 🩺</h1>
                <Badge className="bg-purple-50 text-purple-800 border-purple-200 text-xs font-semibold">
                  Cardiothoracic Surgery
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                <strong>Dr. Naresh Trehan</strong> | Chairman & Chief Cardiac Surgeon (Medanta - The Medicity)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full border border-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Patient Consent Enforced</span>
              </div>
              <Button variant="outline" size="icon" className="rounded-full bg-white relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Authorized Patients</span>
                <div className="p-2 bg-purple-50 text-purple-700 rounded-xl"><Users className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">{AUTHORIZED_PATIENTS.length}</h3>
              <p className="text-[11px] text-purple-700 font-medium mt-1">Full consent logged</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Reviews Pending</span>
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><Clock className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-amber-600">2</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Scans ready for opinion</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Video Consults Today</span>
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl"><Video className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-700">1</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Pre-travel international slot</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Follow-Ups Active</span>
                <div className="p-2 bg-blue-50 text-blue-700 rounded-xl"><Activity className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">14</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Tele-monitoring post-discharge</p>
            </Card>
          </div>

          {/* Main Tabs */}
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "patients" | "appointments" | "summaries" | "notes")} className="w-full">
            <TabsList className="mb-6 p-1 h-auto flex flex-wrap gap-1 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <TabsTrigger value="patients" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                👥 Authorized Patient Dossiers
              </TabsTrigger>
              <TabsTrigger value="appointments" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                📹 Video Tele-Consultations
              </TabsTrigger>
              <TabsTrigger value="summaries" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                🤖 AI-Assisted Medical Case Summary
              </TabsTrigger>
              <TabsTrigger value="notes" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                📝 Physician Notes & Treatment Directives
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: AUTHORIZED PATIENT DOSSIERS */}
            <TabsContent value="patients" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left: Patient List */}
                <div className="lg:col-span-1 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      placeholder="Search patient, country, condition..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 text-xs bg-white rounded-xl border-slate-200"
                    />
                  </div>

                  <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                    {filteredPatients.map((pat) => (
                      <div
                        key={pat.id}
                        onClick={() => setSelectedPatient(pat)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                          selectedPatient?.id === pat.id 
                            ? "bg-purple-50/80 border-purple-300 shadow-xs ring-1 ring-purple-200" 
                            : "bg-white border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1.5">
                          <div>
                            <h4 className="font-bold text-sm text-slate-900">{pat.name}</h4>
                            <p className="text-[11px] text-slate-500">{pat.country} • Age {pat.age} ({pat.gender})</p>
                          </div>
                          <Badge variant="outline" className="text-[10px] bg-white border-purple-200 text-purple-800 font-semibold">
                            {pat.id}
                          </Badge>
                        </div>
                        <p className="text-xs font-medium text-slate-700 line-clamp-1">{pat.diagnosis}</p>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                          <span className="text-slate-400">{pat.documents.length} Records</span>
                          <span className="font-semibold text-emerald-700">Consent Verified</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Selected Patient Clinical Detail */}
                <div className="lg:col-span-2">
                  {selectedPatient ? (
                    <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                      
                      {/* Consent & Identification Banner */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                            {selectedPatient.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-base text-slate-900">{selectedPatient.name}</h3>
                              <Badge className="bg-emerald-600 text-white text-[10px]">Consent ID: VERIFIED-{selectedPatient.id}</Badge>
                            </div>
                            <p className="text-xs text-slate-600 mt-0.5">
                              Origin: <strong>{selectedPatient.country}</strong> | Age: <strong>{selectedPatient.age}</strong> | Gender: <strong>{selectedPatient.gender}</strong>
                            </p>
                          </div>
                        </div>

                        <div className="text-left sm:text-right text-[11px] text-slate-500">
                          <p>Consent Signed: <strong>{selectedPatient.consentDate}</strong></p>
                          <p className="text-emerald-700 font-medium">HIPAA & Tele-Health Compliant</p>
                        </div>
                      </div>

                      {/* Primary Clinical Impression */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Clinical Pathology</span>
                          <p className="text-sm font-bold text-slate-900">{selectedPatient.diagnosis}</p>
                          <p className="text-xs text-slate-600 mt-1">Evaluated for hospital admission at {selectedPatient.hospital}.</p>
                        </div>

                        <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 space-y-1">
                          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">Targeted Surgical Intervention</span>
                          <p className="text-sm font-bold text-purple-900">{selectedPatient.recommendedProcedure}</p>
                          <p className="text-xs text-purple-700 mt-1">Status: <strong>{selectedPatient.status}</strong></p>
                        </div>
                      </div>

                      {/* Clinical Document Vault with OCR */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                            <FileSearch className="w-4 h-4 text-primary" />
                            Authorized Medical Documents & Extracted OCR Text
                          </h4>
                          <span className="text-xs text-slate-400">Strictly confidential</span>
                        </div>

                        <div className="space-y-2">
                          {selectedPatient.documents.map((doc, idx) => (
                            <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2.5">
                                  <FileText className="w-4 h-4 text-[#7657FF] shrink-0" />
                                  <div>
                                    <span className="font-bold text-xs text-slate-900">{doc.name}</span>
                                    <span className="text-[11px] text-slate-500 block">{doc.type} • Uploaded {doc.date}</span>
                                  </div>
                                </div>
                                <Badge variant="outline" className="bg-white text-xs text-slate-600">Verified</Badge>
                              </div>
                              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 font-sans">
                                  OCR Extracted Clinical Key Findings:
                                </p>
                                {doc.ocrExtracted}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100">
                        <Button 
                          onClick={() => setActiveTab("summaries")}
                          className="bg-[#7657FF] hover:bg-[#0c8272] text-white rounded-xl text-xs font-semibold cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 mr-1.5" /> View AI-Assisted Case Summary
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setActiveTab("appointments")}
                          className="rounded-xl text-xs font-semibold border-slate-200 hover:bg-slate-50 cursor-pointer"
                        >
                          <Video className="w-3.5 h-3.5 mr-1.5 text-purple-600" /> Start / Join Video Consult
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setActiveTab("notes")}
                          className="rounded-xl text-xs font-semibold border-slate-200 hover:bg-slate-50 cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-blue-600" /> Log Surgical Directive
                        </Button>
                      </div>

                    </Card>
                  ) : (
                    <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-400">
                      Select a patient dossier to inspect clinical records.
                    </div>
                  )}
                </div>

              </div>
            </TabsContent>

            {/* TAB 2: VIDEO CONSULTATIONS */}
            <TabsContent value="appointments" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Pre-Travel International Tele-Consultations</h3>
                    <p className="text-xs text-slate-500 mt-0.5">High-definition encrypted video consultations with patient & local attending physician</p>
                  </div>
                  <Badge className="bg-purple-50 text-purple-800 border-purple-200 text-xs font-semibold">
                    1 Slot Scheduled
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AUTHORIZED_PATIENTS.map((pat) => (
                    <div key={pat.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900">{pat.name}</h4>
                          <p className="text-xs text-slate-500">{pat.country} • {pat.diagnosis}</p>
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-[10px]">
                          Confirmed
                        </Badge>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-600" />
                          <span className="font-medium text-slate-800">{pat.appointmentSlot}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Duration: 30 mins</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold cursor-pointer flex-1">
                          <Video className="w-3.5 h-3.5 mr-1.5" /> Launch Video Room
                        </Button>
                        <Button size="sm" variant="outline" className="rounded-xl text-xs cursor-pointer">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* TAB 3: AI-ASSISTED MEDICAL CASE SUMMARY */}
            <TabsContent value="summaries" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                
                {/* Important Clinical Disclaimer */}
                <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong>Clinical Notice:</strong> This feature is an <strong>AI-Assisted Medical Case Summary</strong> designed to organize and normalize patient medical records. It does <em>not</em> provide independent diagnosis or prescribe medications. Final diagnosis and surgical recommendations remain strictly the professional responsibility of qualified healthcare practitioners.
                  </div>
                </div>

                {selectedPatient && (
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          AI-Assisted Medical Case Summary: {selectedPatient.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Standardized Clinical Synthesis for {selectedPatient.recommendedProcedure}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-purple-50 text-purple-800 border-purple-200 text-xs">
                        {selectedPatient.aiCaseSummary.confidenceScore}
                      </Badge>
                    </div>

                    {/* Synthesis Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      
                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Chief Complaint & Onset</span>
                        <p className="text-sm font-semibold text-slate-900">{selectedPatient.aiCaseSummary.chiefComplaint}</p>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Normalized Pathology & Classification</span>
                        <p className="text-sm font-semibold text-primary">{selectedPatient.aiCaseSummary.pathology}</p>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Co-Morbidities & Risk Stratification</span>
                        <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                          {selectedPatient.aiCaseSummary.comorbidities.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Current Medication Regimen</span>
                        <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                          {selectedPatient.aiCaseSummary.medications.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-5 bg-purple-50/60 rounded-2xl border border-purple-200 space-y-2">
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block">AI Suggested Clinical Pathway</span>
                      <p className="text-xs text-purple-950 font-medium leading-relaxed">
                        {selectedPatient.aiCaseSummary.proposedPathway}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* TAB 4: CLINICAL NOTES & TREATMENT DIRECTIVES */}
            <TabsContent value="notes" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold text-slate-900">Physician Notes & Post-Op Directives</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Direct instructions synchronized with Hospital Desk & Care Coordinator</p>
                </div>

                {selectedPatient && (
                  <div className="space-y-6">
                    <form onSubmit={handleAddNote} className="space-y-3">
                      <label className="text-xs font-bold text-slate-700 block">
                        Add Surgical Assessment or Pre-Departure Directive for {selectedPatient.name}:
                      </label>
                      <div className="flex gap-2">
                        <Input
                          placeholder="e.g., Angiogram confirms LAD critical lesion. Cleared for Off-Pump CABG. Admit 2 days prior to surgery."
                          value={newNote}
                          onChange={(e) => setNewNote(e.target.value)}
                          className="text-xs bg-slate-50 border-slate-200 rounded-xl flex-1"
                        />
                        <Button type="submit" className="bg-primary hover:bg-[#0c8272] text-white text-xs font-semibold rounded-xl cursor-pointer">
                          <Send className="w-3.5 h-3.5 mr-1" /> Add Directive
                        </Button>
                      </div>
                    </form>

                    <div className="space-y-3">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Logged Physician Directives:</span>
                      {selectedPatient.clinicalNotes.map((note, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed">
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>
    </div>
  );
}
