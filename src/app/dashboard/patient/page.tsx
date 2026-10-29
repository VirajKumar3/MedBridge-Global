"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Activity, Calendar, FileText, FileCheck, CheckCircle2, MapPin, 
  Plane, Clock, Car, Hotel, Building2, User, Search, MessageSquare, 
  Bell, Upload, ShieldCheck, Thermometer, Pill, ChevronRight,
  Sparkles, BrainCircuit, Stethoscope, Video, Globe2, AlertCircle,
  TrendingDown, Send, DollarSign, Download, Eye, X, Scale, Heart,
  Languages, FileSearch, ArrowRight
} from "lucide-react";

interface VaultDocument {
  id: string;
  name: string;
  size: string;
  category: string;
  uploadDate: string;
  ocrStatus: "Extracted 100%" | "Processing" | "Pending";
  doctorReviewed: boolean;
  reviewedBy?: string;
  extractedText: string;
  extractedEntities: { label: string; value: string }[];
}

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("journey");

  // Selected document for modal preview
  const [previewDoc, setPreviewDoc] = useState<VaultDocument | null>(null);

  // Translation language toggle for AI summary
  const [summaryLanguage, setSummaryLanguage] = useState<"English" | "Arabic" | "French">("English");

  // Floating Multilingual AI Assistant state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", text: "Hello John! I'm HealAI, your 24/7 medical travel coordinator. How can I assist you with your treatment at Medanta today?" },
    { sender: "ai", text: "I can help explain your CABG quotation breakdown, verify your e-Medical visa requirements, or translate reports." }
  ]);
  const [inputMsg, setInputMsg] = useState("");

  // Document Vault State
  const [documents, setDocuments] = useState<VaultDocument[]>([
    {
      id: "doc-1",
      name: "Angiography_Report_JohnDoe.pdf",
      size: "3.4 MB",
      category: "Radiology / Angiogram",
      uploadDate: "Aug 30, 2026",
      ocrStatus: "Extracted 100%",
      doctorReviewed: true,
      reviewedBy: "Dr. Naresh Trehan (Cardiac Surgeon)",
      extractedText: "CORONARY ANGIOGRAPHY FINDINGS: Left Main: Normal. Left Anterior Descending (LAD): 85% proximal segment concentric stenosis with thrombus. Left Circumflex (LCx): 70% mid-segment eccentric stenosis. Right Coronary Artery (RCA): 90% distal lesion. Left Ventricular Function: Preserved (LVEF 55%). Recommendation: Multi-vessel CABG grafting.",
      extractedEntities: [
        { label: "Primary Pathology", value: "Triple Vessel Coronary Artery Disease" },
        { label: "Occlusion Score", value: "LAD 85%, LCx 70%, RCA 90%" },
        { label: "Ejection Fraction", value: "55% (Preserved)" },
        { label: "Recommended Surgery", value: "CABG (Beating Heart)" }
      ]
    },
    {
      id: "doc-2",
      name: "Blood_Pathology_Lipid_Panel.pdf",
      size: "1.2 MB",
      category: "Laboratory Pathology",
      uploadDate: "Aug 30, 2026",
      ocrStatus: "Extracted 100%",
      doctorReviewed: true,
      reviewedBy: "Dr. Naresh Trehan (Cardiac Surgeon)",
      extractedText: "BIOCHEMISTRY REPORT: Fasting Blood Sugar: 132 mg/dL. HbA1c: 7.2% (Moderate glycemic control). Serum Creatinine: 1.1 mg/dL (Normal). eGFR: >90 mL/min. Total Cholesterol: 245 mg/dL. Triglycerides: 195 mg/dL. Platelet count: 280,000 /uL. Prothrombin Time (PT/INR): 1.05.",
      extractedEntities: [
        { label: "Blood Sugar Control", value: "HbA1c 7.2% (Type 2 Diabetes)" },
        { label: "Kidney Function", value: "Creatinine 1.1 mg/dL (Normal renal profile)" },
        { label: "Coagulation Profile", value: "INR 1.05 (Cleared for surgery)" }
      ]
    },
    {
      id: "doc-3",
      name: "Echocardiogram_2D_Doppler.pdf",
      size: "2.1 MB",
      category: "Cardiology Echo",
      uploadDate: "Sep 01, 2026",
      ocrStatus: "Extracted 100%",
      doctorReviewed: false,
      extractedText: "2D TRANSTHORACIC ECHO: Mild concentric left ventricular hypertrophy. Regional wall motion abnormalities noted in anterior and apical segments. No intracardiac thrombus. Grade I diastolic dysfunction.",
      extractedEntities: [
        { label: "Wall Motion", value: "Antero-apical hypokinesia" },
        { label: "Valvular Function", value: "No hemodynamically significant regurgitation" }
      ]
    }
  ]);

  const [isUploading, setIsUploading] = useState(false);

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    setIsUploading(true);
    setTimeout(() => {
      const newDoc: VaultDocument = {
        id: `doc-${Date.now()}`,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        category: "Clinical Document",
        uploadDate: "Today",
        ocrStatus: "Extracted 100%",
        doctorReviewed: false,
        extractedText: "Automated OCR parsed clinical text: Scan registered into MedBridge Global 256-bit vault. Medical entities indexed for physician review.",
        extractedEntities: [
          { label: "Status", value: "Pending specialist sign-off" },
          { label: "Verification", value: "HIPAA Encrypted" }
        ]
      };
      setDocuments(prev => [newDoc, ...prev]);
      setIsUploading(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setChatMessages(prev => [...prev, { sender: "user", text: userText }]);
    setInputMsg("");

    setTimeout(() => {
      let reply = "Your inquiry has been logged. Dr. Trehan's team at Medanta has received your angiogram and will confirm the tele-consultation timing shortly.";
      if (selectedLanguage === "Arabic") {
        reply = "تم استلام استفسارك بنجاح. سيقوم الفريق الطبي في المستشفى بمراجعة تقاريرك والتواصل معك عبر الفيديو قريباً.";
      } else if (selectedLanguage === "Hindi") {
        reply = "आपकी जानकारी प्राप्त हो गई है। मेदांता की मेडिकल टीम जल्द ही आपकी वीडियो कंसल्टेशन का समय निर्धारित करेगी।";
      } else if (selectedLanguage === "French") {
        reply = "Votre demande a été bien reçue. L'équipe médicale de Medanta confirme votre rendez-vous sous peu.";
      }
      setChatMessages(prev => [...prev, { sender: "ai", text: reply }]);
    }, 1000);
  };

  // 11-Stage Medical Journey
  const journeyStages = [
    { id: 1, title: "1. Inquiry & Profile", status: "completed", date: "Aug 28", desc: "Online healthcare inquiry registered" },
    { id: 2, title: "2. Documents Vault", status: "completed", date: "Aug 30", desc: "Angiography and blood panels submitted" },
    { id: 3, title: "3. AI Case Summary", status: "completed", date: "Sep 01", desc: "OCR parsing and medical entity mapping complete" },
    { id: 4, title: "4. Hospital Matching", status: "completed", date: "Sep 02", desc: "Medanta - The Medicity selected with 96% AI score" },
    { id: 5, title: "5. Doctor Review", status: "active", date: "In Progress", desc: "Dr. Naresh Trehan reviewing angiogram CD for CABG" },
    { id: 6, title: "6. Treatment & Quotation", status: "pending", date: "Pending", desc: "Final surgical quotation and video consultation" },
    { id: 7, title: "7. Visa Assistance", status: "pending", date: "Pending", desc: "Hospital invitation letter generation for e-Medical Visa" },
    { id: 8, title: "8. Travel to India", status: "pending", date: "Pending", desc: "Flight booking and airport pickup chauffeur assignment" },
    { id: 9, title: "9. Treatment & Stay", status: "pending", date: "Pending", desc: "Admission, pre-op, surgical procedure, and recovery" },
    { id: 10, title: "10. Recovery Center", status: "pending", date: "Pending", desc: "Post-op guest house stay and local physiotherapy" },
    { id: 11, title: "11. Follow-Up at Home", status: "pending", date: "Pending", desc: "Continuous tele-health checkups and medication review" }
  ];

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col bg-slate-50 font-sans">
      <div className="flex flex-1">
        <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900">Patient Workspace 👋</h1>
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-semibold">Active Case: MEDI-88421</Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Your Healthcare Journey with <strong>Medanta - The Medicity, Gurgaon</strong> (Cardiology Department)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full bg-white relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  JD
                </div>
                <div className="text-left text-xs">
                  <span className="font-bold block leading-none">John Doe</span>
                  <span className="text-[10px] text-slate-400">Nigeria (Age 52)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Journey Progress Snapshot */}
          <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> Journey Progress Snapshot
              </h3>
              <span className="text-xs text-slate-500 font-medium">Stage 5 of 11 in progress</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                ✓ Account
              </div>
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                ✓ Documents
              </div>
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                ✓ AI Analyzed
              </div>
              <div className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold">
                ✓ Matched
              </div>
              <div className="p-2.5 rounded-2xl bg-emerald-100 border border-emerald-500 text-emerald-800 font-bold animate-pulse">
                ● Consult ⏳
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100">
                ○ Quotation
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100">
                ○ Visa & Travel
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100">
                ○ Recovery
              </div>
            </div>
          </Card>

          {/* Main Dashboard Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 p-1 h-auto flex flex-wrap gap-1 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <TabsTrigger value="journey" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                🔄 11-Stage Journey
              </TabsTrigger>
              <TabsTrigger value="ai-analysis" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                🤖 AI-Assisted Medical Case Summary
              </TabsTrigger>
              <TabsTrigger value="records" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                📁 Medical Document Vault ({documents.length})
              </TabsTrigger>
              <TabsTrigger value="quotations" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                💰 Cost Intelligence & Quotations
              </TabsTrigger>
              <TabsTrigger value="compare" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                ⚖️ Hospital & Doctor Comparison
              </TabsTrigger>
              <TabsTrigger value="visa-travel" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                ✈️ Visa & Travel Logistics
              </TabsTrigger>
              <TabsTrigger value="appointments" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-[#7657FF] data-[state=active]:text-white">
                📹 Appointments & Consults
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: 11-STAGE MEDICAL JOURNEY */}
            <TabsContent value="journey" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Your Signature Medical Journey</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Real-time status updates synchronized with Medanta Hospital Desk</p>
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold text-emerald-800 bg-emerald-50 border-emerald-200">
                    Stage 5 of 11 Active
                  </Badge>
                </div>

                <div className="relative pl-6 md:pl-10 space-y-6 before:absolute before:inset-y-0 before:left-[17px] md:before:left-[21px] before:w-0.5 before:bg-slate-200">
                  {journeyStages.map((stage) => {
                    const isDone = stage.status === "completed";
                    const isActive = stage.status === "active";

                    return (
                      <div key={stage.id} className="relative">
                        <div className={`absolute -left-[27px] md:-left-[33px] w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center ring-4 ring-white z-10 text-xs font-bold ${isDone ? 'bg-emerald-500 text-white' : isActive ? 'bg-emerald-600 text-white animate-pulse' : 'bg-slate-200 text-slate-400'}`}>
                          {isDone ? <CheckCircle2 className="w-4 h-4" /> : stage.id}
                        </div>

                        <div className={`p-4 rounded-2xl border transition-all ${isActive ? 'bg-emerald-50/70 border-emerald-500/40 shadow-xs' : isDone ? 'bg-white border-slate-200' : 'bg-slate-50/50 border-slate-100 opacity-60'}`}>
                          <div className="flex justify-between items-center mb-1">
                            <h4 className={`font-bold text-sm ${isActive ? 'text-emerald-800' : 'text-slate-900'}`}>
                              {stage.title}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-medium">{stage.date}</span>
                          </div>
                          <p className="text-xs text-slate-600">{stage.desc}</p>

                          {isActive && (
                            <div className="mt-3 pt-3 border-t border-emerald-100 flex flex-wrap gap-2">
                              <Button 
                                size="sm" 
                                onClick={() => setActiveTab("appointments")}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                              >
                                <Video className="w-3.5 h-3.5 mr-1" /> View Video Consultation Slot
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="rounded-xl text-xs hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer" 
                                onClick={() => setIsChatOpen(true)}
                              >
                                <MessageSquare className="w-3.5 h-3.5 mr-1" /> Ask Coordinator
                              </Button>
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </Card>
            </TabsContent>

            {/* TAB 2: AI-ASSISTED MEDICAL CASE SUMMARY */}
            <TabsContent value="ai-analysis" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                
                {/* Mandatory Clinical Boundary Notice */}
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong>Mandatory Clinical Boundary:</strong> This document is strictly an <strong>AI-Assisted Medical Case Summary</strong> created to organize and synthesize your uploaded records. It does <em>not</em> constitute a medical diagnosis or treatment prescription. Final medical and surgical recommendations are made exclusively by licensed attending specialists at your chosen hospital.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">AI-Assisted Medical Case Summary</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Automated clinical entity normalization for physician evaluation</p>
                  </div>

                  {/* Language Selector */}
                  <div className="flex items-center gap-2">
                    <Languages className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-500">Summary Translation:</span>
                    <div className="flex bg-slate-100 p-1 rounded-xl">
                      {(["English", "Arabic", "French"] as const).map(lang => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setSummaryLanguage(lang)}
                          className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                            summaryLanguage === lang ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-500"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Identified Pathology</span>
                    <p className="text-base font-bold text-slate-900">
                      {summaryLanguage === "Arabic" 
                        ? "مرض الشريان التاجي المتعدد (CAD)"
                        : summaryLanguage === "French"
                        ? "Maladie coronarienne multitronculaire"
                        : "Coronary Artery Disease (CAD - Multi-vessel)"}
                    </p>
                    <p className="text-slate-600">Left Anterior Descending (LAD) critical occlusion 85%. Ejection fraction preserved at 55%.</p>
                  </div>

                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Evaluated Procedure</span>
                    <p className="text-base font-bold text-[#7657FF]">
                      {summaryLanguage === "Arabic"
                        ? "جراحة مجازة الشريان التاجي بالقلب النابض (CABG)"
                        : summaryLanguage === "French"
                        ? "Pontage aortocoronarien à cœur battant"
                        : "Off-Pump Beating Heart CABG"}
                    </p>
                    <p className="text-slate-600">Estimated Duration: 4 hours | Hospital Stay: 6 Days (2 ICU + 4 Inpatient Ward)</p>
                  </div>
                </div>

                {/* Score Breakdown Table */}
                <div className="p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-3">
                  <h4 className="font-bold text-emerald-950 text-sm">Explainable Hospital Fit Calculation: Medanta (96%)</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                      <span className="text-slate-400 text-[10px] block">Specialty Score</span>
                      <span className="font-bold text-slate-900">30 / 30 pts</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                      <span className="text-slate-400 text-[10px] block">Treatment Experience</span>
                      <span className="font-bold text-slate-900">20 / 20 pts</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                      <span className="text-slate-400 text-[10px] block">Budget Alignment</span>
                      <span className="font-bold text-slate-900">14 / 15 pts</span>
                    </div>
                    <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                      <span className="text-slate-400 text-[10px] block">Accreditation</span>
                      <span className="font-bold text-slate-900">10 / 10 pts</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                  <span className="font-bold text-slate-700 block">Surgeon Review Status:</span>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-600 text-white text-[11px]">Reviewed & Signed Off</Badge>
                    <span className="text-slate-600">Dr. Naresh Trehan reviewed coronary angiogram disc on Sep 02, 2026.</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 3: MEDICAL DOCUMENT VAULT */}
            <TabsContent value="records" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Encrypted Medical Document Vault</h3>
                    <p className="text-xs text-slate-500">HIPAA compliant 256-bit storage accessible only by your authorized surgical team</p>
                  </div>

                  <div className="relative">
                    <input 
                      type="file" 
                      id="doc-upload" 
                      onChange={handleSimulateUpload} 
                      className="hidden" 
                      accept=".pdf,.png,.jpg,.jpeg,.dcm" 
                    />
                    <label 
                      htmlFor="doc-upload" 
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#7657FF] hover:bg-[#0c8272] transition-colors cursor-pointer shadow-xs ${
                        isUploading ? "opacity-75 pointer-events-none" : ""
                      }`}
                    >
                      <Upload className="w-4 h-4" />
                      {isUploading ? "Processing OCR..." : "Upload New Scan / PDF"}
                    </label>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase">
                        <th className="p-3">File Name</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Upload Date</th>
                        <th className="p-3">OCR Status</th>
                        <th className="p-3">Doctor Review</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {documents.map((doc) => (
                        <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3 font-semibold text-slate-800 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#7657FF] shrink-0" />
                            <div>
                              <span>{doc.name}</span>
                              <span className="text-[10px] text-slate-400 block">{doc.size}</span>
                            </div>
                          </td>
                          <td className="p-3 text-slate-600">{doc.category}</td>
                          <td className="p-3 text-slate-500">{doc.uploadDate}</td>
                          <td className="p-3">
                            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                              {doc.ocrStatus}
                            </Badge>
                          </td>
                          <td className="p-3">
                            {doc.doctorReviewed ? (
                              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Reviewed
                              </span>
                            ) : (
                              <span className="text-amber-600 font-medium">Pending Review</span>
                            )}
                          </td>
                          <td className="p-3 text-right space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => setPreviewDoc(doc)}
                              className="text-xs h-7 px-2.5 rounded-lg border-slate-200 hover:bg-slate-100"
                            >
                              <Eye className="w-3 h-3 mr-1" /> Inspect OCR
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 4: COST INTELLIGENCE & QUOTATIONS */}
            <TabsContent value="quotations" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                
                {/* Mandatory Prominent Disclaimer */}
                <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-950 leading-relaxed">
                    <strong className="block text-sm font-bold text-amber-900 mb-0.5">
                      Estimated Cost — Subject to Hospital Confirmation
                    </strong>
                    All estimates displayed are preliminary clinical benchmarks. Final prices are confirmed exclusively by the hospital international patient desk following in-person clinical evaluation and pre-operative diagnostic tests.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Itemized Treatment & Journey Cost Intelligence</h3>
                    <p className="text-xs text-slate-500">Comprehensive breakdown including procedure, companion stay, and local logistics</p>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs font-semibold">
                    Quotation ID: QUOTE-MED-9941
                  </Badge>
                </div>

                {/* Main Estimate Breakdown Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-slate-600 uppercase">
                        <th className="p-3">Cost Component</th>
                        <th className="p-3">Description & Inclusions</th>
                        <th className="p-3 text-right">Cost (INR)</th>
                        <th className="p-3 text-right">Cost (USD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Surgical Procedure & OT Charges</td>
                        <td className="p-3 text-slate-600">Beating-Heart Off-Pump CABG by Dr. Naresh Trehan and cardiac surgical team</td>
                        <td className="p-3 text-right font-semibold">₹3,80,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">$4,570</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">ICU & High-Dependency Care</td>
                        <td className="p-3 text-slate-600">2 nights cardiac intensive care with 1:1 dedicated nursing ratio</td>
                        <td className="p-3 text-right font-semibold">₹90,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">$1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Inpatient Private Deluxe Room</td>
                        <td className="p-3 text-slate-600">4 nights private room accommodation with attendant sleeper couch</td>
                        <td className="p-3 text-right font-semibold">₹60,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">$720</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Diagnostics & Medication Supply</td>
                        <td className="p-3 text-slate-600">Pre-op blood panels, post-op echocardiogram & 30-day discharge medications</td>
                        <td className="p-3 text-right font-semibold">₹45,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">$540</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Companion Hotel (Post-Discharge)</td>
                        <td className="p-3 text-slate-600">8 nights at Medanta Guest Suites (Serviced Apartment with kitchenette)</td>
                        <td className="p-3 text-right font-semibold">₹22,400</td>
                        <td className="p-3 text-right font-bold text-slate-900">$270</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-slate-900">Airport Transfer & Local Chauffeur</td>
                        <td className="p-3 text-slate-600">Dedicated Toyota Innova pickup, hospital shuttles, and return drop</td>
                        <td className="p-3 text-right font-semibold">₹10,000</td>
                        <td className="p-3 text-right font-bold text-slate-900">$120</td>
                      </tr>
                      <tr className="bg-emerald-50/60 font-bold text-emerald-950 text-sm">
                        <td className="p-4" colSpan={2}>
                          Total Estimated Out-Of-Pocket Journey Budget
                          <span className="text-[10px] font-normal block text-emerald-800">
                            Includes surgery, companion stay, and transport. Subject to hospital confirmation.
                          </span>
                        </td>
                        <td className="p-4 text-right">₹6,07,400</td>
                        <td className="p-4 text-right text-base text-[#7657FF]">$7,300 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Savings comparison callout */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">Cross-Border Healthcare Value Comparison</span>
                    <span className="text-slate-500">Comparable CABG procedure in private US hospitals ranges $110,000 – $140,000.</span>
                  </div>
                  <Badge className="bg-emerald-600 text-white text-xs px-3 py-1 font-bold">
                    Estimated 88% Cost Reduction
                  </Badge>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 5: HOSPITAL & DOCTOR COMPARISON */}
            <TabsContent value="compare" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Hospital Comparison Matrix</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Side-by-side evaluation of matched accredited institutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Hospital 1 */}
                  <div className="p-5 rounded-2xl border-2 border-[#7657FF] bg-emerald-50/30 space-y-3 relative">
                    <Badge className="bg-[#7657FF] text-white absolute -top-2.5 right-4 text-[10px]">Primary Choice</Badge>
                    <h4 className="font-bold text-base text-slate-900">Medanta - The Medicity</h4>
                    <p className="text-slate-500">Gurgaon, Delhi NCR • JCI, NABH</p>
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <div className="flex justify-between"><span className="text-slate-500">AI Match Score:</span><span className="font-bold text-[#7657FF]">96%</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Lead Surgeon:</span><span className="font-bold">Dr. Naresh Trehan</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Estimated Cost:</span><span className="font-bold">$7,300 USD</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Airport Distance:</span><span>16 km (IGI Airport)</span></div>
                    </div>
                  </div>

                  {/* Hospital 2 */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                    <h4 className="font-bold text-base text-slate-900">Apollo Hospitals</h4>
                    <p className="text-slate-500">Delhi NCR • JCI, NABH</p>
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <div className="flex justify-between"><span className="text-slate-500">AI Match Score:</span><span className="font-bold text-[#7657FF]">94%</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Lead Surgeon:</span><span className="font-bold">Senior Cardiac Team</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Estimated Cost:</span><span className="font-bold">$7,900 USD</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Airport Distance:</span><span>18 km (IGI Airport)</span></div>
                    </div>
                  </div>

                  {/* Hospital 3 */}
                  <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                    <h4 className="font-bold text-base text-slate-900">Fortis Memorial</h4>
                    <p className="text-slate-500">Gurgaon • JCI, NABH</p>
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <div className="flex justify-between"><span className="text-slate-500">AI Match Score:</span><span className="font-bold text-[#7657FF]">91%</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Lead Surgeon:</span><span className="font-bold">Cardiothoracic Chair</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Estimated Cost:</span><span className="font-bold">$8,200 USD</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Airport Distance:</span><span>15 km (IGI Airport)</span></div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 6: VISA & TRAVEL LOGISTICS */}
            <TabsContent value="visa-travel" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                
                {/* Visa Disclaimer */}
                <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-blue-900 leading-relaxed">
                    <strong>Important Immigration & Embassy Notice:</strong> MedBridge Global assists with hospital invitation letter generation and visa document preparation. <strong>The platform does not issue or guarantee visa approval.</strong> Visa grant decisions rest exclusively with the Government of India and the respective Indian Embassy/High Commission.
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Indian e-Medical Visa Document Tracker</h3>
                    <p className="text-xs text-slate-500">Checklist verified by your care coordinator</p>
                  </div>
                  <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs">
                    6 of 7 Documents Verified
                  </Badge>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Patient International Passport (6+ Months Validity)", status: "Verified", date: "Aug 30, 2026" },
                    { name: "Attendant Passport Copy (Wife - Sarah Doe)", status: "Verified", date: "Aug 30, 2026" },
                    { name: "Official Medanta Hospital Medical Visa Invitation Letter", status: "Generated & Signed", date: "Sep 02, 2026" },
                    { name: "Complete Angiography & Medical Dossier", status: "Verified", date: "Sep 01, 2026" },
                    { name: "Certified Cost Package Letter for Embassy", status: "Ready for Download", date: "Sep 02, 2026" },
                    { name: "Yellow Fever & Polio Vaccination Certificate", status: "Verified", date: "Aug 31, 2026" },
                    { name: "Indian e-Visa Portal Submission (Receipt)", status: "Pending Submission", date: "Awaiting e-Portal Token" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-4 h-4 ${item.status === "Pending Submission" ? "text-slate-300" : "text-emerald-600"}`} />
                        <div>
                          <p className="font-bold text-slate-900">{item.name}</p>
                          <span className="text-[11px] text-slate-400">{item.date}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-[10px] font-semibold ${item.status === "Pending Submission" ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-800 border-emerald-200"}`}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Logistics Info */}
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                  <h4 className="font-bold text-slate-900 text-sm">Airport Pickup & Guest House Accommodation</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Assigned Chauffeur</span>
                      <strong>Rajesh Kumar (+91 98765 43210)</strong>
                      <p className="text-[11px] text-slate-500">Toyota Innova Crysta (DL 1Y B 4821)</p>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Attendant Guest Suite</span>
                      <strong>Medanta Guest Suites (800m from Hospital)</strong>
                      <p className="text-[11px] text-slate-500">High-speed WiFi, Private Kitchenette, Wheelchair Ramp</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 7: APPOINTMENTS & TELE-CONSULTS */}
            <TabsContent value="appointments" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Scheduled Consultations & Hospital Dates</h3>
                    <p className="text-xs text-slate-500">Pre-travel video consults and inpatient admission schedule</p>
                  </div>
                  <Badge className="bg-purple-50 text-purple-800 border-purple-200 text-xs font-semibold">
                    1 Active Appointment
                  </Badge>
                </div>

                <div className="p-5 bg-purple-50/60 rounded-2xl border border-purple-200 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-purple-700 uppercase">Pre-Departure Video Consult</span>
                      <h4 className="text-base font-bold text-purple-950">Dr. Naresh Trehan (Cardiac Surgeon)</h4>
                      <p className="text-xs text-purple-700">Medanta - The Medicity, Gurgaon</p>
                    </div>
                    <Badge className="bg-purple-600 text-white text-xs">Confirmed Slot</Badge>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-purple-100 flex items-center justify-between text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="font-bold">Tomorrow, 3:30 PM IST (11:00 AM WAT)</span>
                    </div>
                    <span className="text-slate-500">Encrypted Zoom Room</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold cursor-pointer">
                      <Video className="w-3.5 h-3.5 mr-1.5" /> Join Tele-Consultation Room
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-xl text-xs cursor-pointer">
                      Add to Google Calendar
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>

      {/* DOCUMENT OCR PREVIEW MODAL */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 space-y-5 shadow-2xl animate-reveal border border-slate-200">
            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-lg text-slate-900">{previewDoc.name}</h3>
                <p className="text-xs text-slate-500">{previewDoc.category} • Uploaded {previewDoc.uploadDate}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => setPreviewDoc(null)} className="rounded-full">
                <X className="w-5 h-5 text-slate-500" />
              </Button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">OCR Extracted Clinical Text:</span>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-800 font-mono text-xs leading-relaxed">
                  {previewDoc.extractedText}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-400 uppercase text-[10px] block mb-2">Normalized Clinical Entities:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {previewDoc.extractedEntities.map((ent, i) => (
                    <div key={i} className="p-2.5 bg-[#F8FCFD] rounded-xl border border-[#EDEAFF]">
                      <span className="text-[10px] text-slate-400 block">{ent.label}</span>
                      <span className="font-bold text-[#17151F]">{ent.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between">
                <span className="text-emerald-800 font-medium">Physician Review Status:</span>
                <span className="font-bold text-emerald-900">{previewDoc.reviewedBy || "Pending Review"}</span>
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100">
              <Button onClick={() => setPreviewDoc(null)} className="bg-slate-900 text-white rounded-xl text-xs">
                Close Document Preview
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Multilingual AI Assistant (HealAI) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <Card className="w-88 sm:w-96 h-[450px] mb-4 shadow-2xl border-emerald-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 bg-white">
            
            {/* Chat Header */}
            <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  🤖
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">HealAI Care Coordinator</h4>
                  <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></span>
                    24/7 Multilingual Active
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-emerald-700 text-white text-[10px] rounded-lg px-2 py-1 border-none focus:outline-none cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Arabic">العربية (Arabic)</option>
                  <option value="Hindi">हिन्दी (Hindi)</option>
                  <option value="French">Français</option>
                </select>
                <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-emerald-200">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}>
                  <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === "ai" 
                      ? "bg-white text-slate-800 border border-slate-200 shadow-2xs" 
                      : "bg-emerald-600 text-white font-medium"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
              <Input
                placeholder="Ask about your hospital quotation, visa, doctor..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="text-xs bg-slate-50 rounded-xl border-slate-200"
              />
              <Button size="icon" onClick={handleSendMessage} className="bg-emerald-600 hover:bg-emerald-700 rounded-xl shrink-0">
                <Send className="w-4 h-4 text-white" />
              </Button>
            </div>

          </Card>
        )}

        <Button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl h-14 px-5 flex items-center gap-2.5 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-amber-300" />
          <span className="font-bold text-xs sm:text-sm">Ask HealAI Assistant</span>
        </Button>
      </div>

    </div>
  );
}
