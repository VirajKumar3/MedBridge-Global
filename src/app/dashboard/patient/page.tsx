"use client";


import { useState } from "react";
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
  TrendingDown, Send
} from "lucide-react";

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("journey");

  // Floating Multilingual AI Assistant state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [chatMessages, setChatMessages] = useState([
    { sender: "ai", text: "Hello John! I'm HealAI, your 24/7 care assistant. How can I assist you with your treatment at Medanta today?" },
    { sender: "ai", text: "I can help explain your CABG quotation, verify your medical visa checklist, or translate reports." }
  ]);
  const [inputMsg, setInputMsg] = useState("");

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

  // Section 20 Signature 11-Stage Medical Journey
  const journeyStages = [
    { id: 1, title: "1. Inquiry", status: "completed", date: "Aug 28", desc: "Online healthcare inquiry registered" },
    { id: 2, title: "2. Documents", status: "completed", date: "Aug 30", desc: "Angiography and blood panels submitted" },
    { id: 3, title: "3. AI Analysis", status: "completed", date: "Sep 01", desc: "OCR parsing and medical entity mapping complete" },
    { id: 4, title: "4. Hospital Matching", status: "completed", date: "Sep 02", desc: "Medanta - The Medicity selected with 96% AI score" },
    { id: 5, title: "5. Doctor Review", status: "active", date: "In Progress", desc: "Dr. Naresh Trehan reviewing angiogram CD for CABG" },
    { id: 6, title: "6. Treatment Plan", status: "pending", date: "Pending", desc: "Final surgical quotation and video consultation" },
    { id: 7, title: "7. Visa Assistance", status: "pending", date: "Pending", desc: "Hospital invitation letter generation for e-Medical Visa" },
    { id: 8, title: "8. Travel to India", status: "pending", date: "Pending", desc: "Flight booking and airport pickup chauffeur assignment" },
    { id: 9, title: "9. Treatment & Stay", status: "pending", date: "Pending", desc: "Admission, pre-op, surgical procedure, and recovery" },
    { id: 10, title: "10. Recovery Center", status: "pending", date: "Pending", desc: "Post-op guest house stay and local physiotherapy" },
    { id: 11, title: "11. Follow-Up at Home", status: "pending", date: "Pending", desc: "Continuous tele-health checkups and medication review" }
  ];

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900">Welcome, John 👋</h1>
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

          {/* Section 19: Quick Journey Progress Card */}
          <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Journey Progress Snapshot
            </h3>
            
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
                ○ Travel Plan
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100">
                ○ Treatment
              </div>
              <div className="p-2.5 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100">
                ○ Recovery
              </div>
            </div>
          </Card>

          {/* Main Dashboard Navigation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 p-1 h-auto flex flex-wrap gap-1 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <TabsTrigger value="journey" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                🔄 My 11-Stage Journey
              </TabsTrigger>
              <TabsTrigger value="ai-analysis" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                🤖 AI Case Analysis
              </TabsTrigger>
              <TabsTrigger value="records" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                📁 Digital Health Records
              </TabsTrigger>
              <TabsTrigger value="visa" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                📄 Visa & Documents
              </TabsTrigger>
              <TabsTrigger value="travel" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                ✈️ Travel & Transport
              </TabsTrigger>
              <TabsTrigger value="recovery" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                ❤️ Recovery Center
              </TabsTrigger>
            </TabsList>

            {/* TAB 1: SECTION 20 SIGNATURE 11-STAGE MEDICAL JOURNEY */}
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
                        
                        {/* Status Icon Indicator */}
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
                              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold cursor-pointer">
                                <Video className="w-3.5 h-3.5 mr-1" /> View Video Consultation Slot
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-xl text-xs hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer" onClick={() => setIsChatOpen(true)}>
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

            {/* TAB 2: AI CASE ANALYSIS & SCORE BREAKDOWN */}
            <TabsContent value="ai-analysis" className="space-y-6">
              <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">AI Medical Case Dossier</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Automated entity normalization and explainable recommendation weights</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Identified Pathology</span>
                    <p className="text-base font-bold text-slate-900">Coronary Artery Disease (CAD - Multi-vessel)</p>
                    <p className="text-slate-600">Left Anterior Descending (LAD) critical occlusion 85%. Ejection fraction preserved at 55%.</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-400 uppercase text-[10px]">Target Procedure</span>
                    <p className="text-base font-bold text-primary">Off-Pump Beating Heart CABG</p>
                    <p className="text-slate-600">Estimated Duration: 4 hours | Hospital Stay: 6 Days (2 ICU + 4 Ward)</p>
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
              </Card>
            </TabsContent>

            {/* TAB 3: DIGITAL HEALTH RECORDS */}
            <TabsContent value="records" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Encrypted Medical Vault</h3>
                    <p className="text-xs text-slate-500">Accessible only by authorized surgical team members</p>
                  </div>
                  <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200 text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> 256-Bit Encrypted
                  </Badge>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase">
                        <th className="p-3">File Name</th>
                        <th className="p-3">Document Category</th>
                        <th className="p-3">Upload Date</th>
                        <th className="p-3">OCR Status</th>
                        <th className="p-3">Access</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      <tr>
                        <td className="p-3 font-semibold text-slate-800 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" /> Angiography_Report_JohnDoe.pdf
                        </td>
                        <td className="p-3 text-slate-600">Radiology / Angiogram</td>
                        <td className="p-3 text-slate-500">Aug 30, 2026</td>
                        <td className="p-3"><Badge className="bg-emerald-50 text-emerald-700 text-[10px]">Extracted 100%</Badge></td>
                        <td className="p-3 text-slate-600">Shared with Dr. Trehan</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-slate-800 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" /> Blood_Chemistry_Panel.pdf
                        </td>
                        <td className="p-3 text-slate-600">Pathology Lab Report</td>
                        <td className="p-3 text-slate-500">Aug 30, 2026</td>
                        <td className="p-3"><Badge className="bg-emerald-50 text-emerald-700 text-[10px]">Extracted 100%</Badge></td>
                        <td className="p-3 text-slate-600">Shared with Dr. Trehan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 4: VISA & DOCUMENTS */}
            <TabsContent value="visa" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Medical Visa & Embassy Files</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800">Hospital Visa Invitation Letter</h4>
                      <p className="text-slate-500">Official dispatch for Indian Embassy in Abuja</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">Download PDF</Button>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-800">Treatment Cost Package Letter</h4>
                      <p className="text-slate-500">Certified by Medanta International Desk</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs">Download PDF</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 5: TRAVEL & TRANSPORT */}
            <TabsContent value="travel" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Logistics & Dedicated Transport</h3>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Assigned Driver:</span>
                    <span className="font-bold text-slate-800">Rajesh Kumar (+91 98765 43210)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Vehicle:</span>
                    <span className="font-bold text-slate-800">Toyota Innova Crysta (DL 1Y B 4821)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200">
                    <span className="text-slate-500">Pickup Location:</span>
                    <span className="font-bold text-slate-800">Delhi IGI Airport Terminal 3 Arrivals</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Recovery Apartment:</span>
                    <span className="font-bold text-slate-800">Medanta Guest Suites (800m from Hospital)</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* TAB 6: RECOVERY CENTER */}
            <TabsContent value="recovery" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4 text-center py-10">
                <Activity className="w-12 h-12 text-primary mx-auto mb-2" />
                <h3 className="text-xl font-bold text-slate-900">Post-Treatment Recovery Tracking</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  This telemetry and tele-consultation module activates post-surgery to record daily blood pressure, pain indices, wound healing photos, and direct WhatsApp sync with your care coordinator.
                </p>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs">
                  Scheduled for Activation Post-CABG
                </Badge>
              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>

      {/* Floating Multilingual AI Assistant (HealAI) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <Card className="w-88 sm:w-96 h-[450px] mb-4 shadow-2xl border-emerald-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 bg-white">
            
            {/* Chat Header */}
            <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">HealAI Assistant</h3>
                  <p className="text-[10px] text-emerald-100">Multilingual Care Coordinator</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-white/20 text-white text-[10px] rounded-lg px-2 py-1 border border-white/30"
                >
                  <option value="English" className="text-slate-800">English</option>
                  <option value="Hindi" className="text-slate-800">हिन्दी</option>
                  <option value="Arabic" className="text-slate-800">العربية</option>
                  <option value="French" className="text-slate-800">Français</option>
                </select>
                <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-slate-200 text-sm font-bold">
                  ✕
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.sender === "user" ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${msg.sender === "user" ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-2xs'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
              <Input 
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={`Type in ${selectedLanguage}...`} 
                className="text-xs h-10 rounded-xl"
              />
              <Button size="icon" onClick={handleSendMessage} className="h-10 w-10 bg-primary text-white rounded-xl shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>

          </Card>
        )}

        <Button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white flex items-center justify-center cursor-pointer group"
          aria-label="Toggle HealAI Assistant"
        >
          {isChatOpen ? "✕" : <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />}
        </Button>
      </div>

    </div>
  );
}
