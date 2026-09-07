"use client";


import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Upload, 
  Mic, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  BrainCircuit, 
  Building2, 
  Stethoscope, 
  UserCheck, 
  ShieldAlert, 
  AlertCircle,
  FileSearch,
  Activity,
  Layers,
  Info,
  ChevronRight
} from "lucide-react";
import { HOSPITALS } from "@/lib/data";

function AICareMatchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Current step in the 4-step wizard
  const [currentStep, setCurrentStep] = useState(1);
  const [inputMode, setInputMode] = useState<"describe" | "upload" | "voice">("describe");

  // Step 1: Patient Details state
  const [formData, setFormData] = useState({
    name: "John Doe",
    age: "52",
    country: "Nigeria",
    preferredCity: "Delhi NCR",
    budgetRange: "$8,000 - $12,000",
    travelDate: "Next Month",
    treatmentNeed: "Cardiology",
    medicalHistory: "Diagnosed with severe coronary artery disease. Experienced chest discomfort under exertion. Local physician recommended bypass evaluation.",
    additionalInfo: "Attendant traveling along. Requires medical visa assistance."
  });

  // Step 2: Uploaded Documents State
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; type: string }[]>([
    { name: "Coronary_Angiography_Report.pdf", size: "3.2 MB", type: "Radiology / Angiogram" },
    { name: "Blood_Panel_Lipid_Profile.pdf", size: "1.1 MB", type: "Blood Lab Report" }
  ]);

  // Step 3: Simulated AI Processing Progress
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStageIndex, setAnalysisStageIndex] = useState(0);

  const processingSteps = [
    "Reading uploaded clinical documents via OCR...",
    "Extracting clinical entities & normalizing medical terms...",
    "Identifying primary specialty & procedural urgency...",
    "Organizing patient longitudinal medical history...",
    "Computing MediVoyage Hybrid Hospital Match Scores..."
  ];

  // Voice recording simulation
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (searchParams.get("step") === "upload") {
      setCurrentStep(2);
    }
  }, [searchParams]);

  // Trigger Step 3 processing animation
  const startAIAnalysis = () => {
    setCurrentStep(3);
    setAnalysisProgress(10);
    setAnalysisStageIndex(0);

    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCurrentStep(4), 600);
          return 100;
        }
        const next = prev + 20;
        setAnalysisStageIndex(Math.min(Math.floor((next / 100) * processingSteps.length), processingSteps.length - 1));
        return next;
      });
    }, 700);
  };

  const handleSimulateVoice = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setFormData(prev => ({
        ...prev,
        medicalHistory: "Audio transcript: Patient reports chest pain lasting 3 months, history of high blood pressure, and wishes to consult senior cardiac surgeons in Delhi NCR."
      }));
    }, 2500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFiles(prev => [
        ...prev,
        { name: file.name, size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`, type: "Clinical Report" }
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> Section 7 & 8: AI Care Match Signature Engine
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Welcome to MediVoyage AI
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Our intelligent care match engine organizes your case history, extracts medical entities, and calculates explainable hospital match scores.
          </p>
        </div>

        {/* 4-Step Stepper Bar */}
        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className={`p-2 rounded-2xl transition-colors ${currentStep >= 1 ? 'bg-primary text-white font-bold' : 'text-slate-400 bg-slate-50'}`}>
              1. Patient Info
            </div>
            <div className={`p-2 rounded-2xl transition-colors ${currentStep >= 2 ? 'bg-primary text-white font-bold' : 'text-slate-400 bg-slate-50'}`}>
              2. Upload Reports
            </div>
            <div className={`p-2 rounded-2xl transition-colors ${currentStep >= 3 ? 'bg-primary text-white font-bold' : 'text-slate-400 bg-slate-50'}`}>
              3. AI Analysis
            </div>
            <div className={`p-2 rounded-2xl transition-colors ${currentStep >= 4 ? 'bg-primary text-white font-bold' : 'text-slate-400 bg-slate-50'}`}>
              4. AI Care Result
            </div>
          </div>
        </div>

        {/* STEP 1: PATIENT PROVIDES INFORMATION */}
        {currentStep === 1 && (
          <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-lg space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">How can we help you?</h2>
              <p className="text-xs text-slate-500 mt-1">Select an input method to provide your clinical background:</p>
            </div>

            {/* 3 Input Mode Switchers */}
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant={inputMode === "describe" ? "default" : "outline"}
                onClick={() => setInputMode("describe")}
                className={`rounded-2xl py-6 text-xs sm:text-sm font-semibold flex flex-col sm:flex-row gap-1.5 ${inputMode === "describe" ? 'bg-primary text-white' : ''}`}
              >
                <FileText className="w-4 h-4" />
                Describe Need
              </Button>
              <Button
                type="button"
                variant={inputMode === "upload" ? "default" : "outline"}
                onClick={() => {
                  setInputMode("upload");
                  setCurrentStep(2);
                }}
                className="rounded-2xl py-6 text-xs sm:text-sm font-semibold flex flex-col sm:flex-row gap-1.5"
              >
                <Upload className="w-4 h-4" />
                Upload Reports
              </Button>
              <Button
                type="button"
                variant={inputMode === "voice" ? "default" : "outline"}
                onClick={() => setInputMode("voice")}
                className={`rounded-2xl py-6 text-xs sm:text-sm font-semibold flex flex-col sm:flex-row gap-1.5 ${inputMode === "voice" ? 'bg-primary text-white' : ''}`}
              >
                <Mic className="w-4 h-4 text-rose-500" />
                Speak to AI 🎤
              </Button>
            </div>

            {/* Voice Input Modal Simulation */}
            {inputMode === "voice" && (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto transition-all ${isRecording ? 'bg-rose-500 text-white animate-pulse' : 'bg-rose-100 text-rose-600'}`}>
                  <Mic className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {isRecording ? "Listening to your voice..." : "Click to speak your healthcare requirements"}
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Our multilingual voice processor transcribes English, Arabic, French, Hindi, and Swahili.
                </p>
                <Button 
                  onClick={handleSimulateVoice} 
                  disabled={isRecording}
                  size="sm" 
                  className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs"
                >
                  {isRecording ? "Processing Audio..." : "Start Speaking"}
                </Button>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Patient Name</label>
                <Input 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Age</label>
                <Input 
                  value={formData.age} 
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Country of Origin</label>
                <Input 
                  value={formData.country} 
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Preferred City in India</label>
                <select 
                  value={formData.preferredCity}
                  onChange={(e) => setFormData({...formData, preferredCity: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800"
                >
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="No Preference">No Preference (Show best matches)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Budget Range (USD)</label>
                <Input 
                  value={formData.budgetRange} 
                  onChange={(e) => setFormData({...formData, budgetRange: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Preferred Travel Date</label>
                <Input 
                  value={formData.travelDate} 
                  onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Treatment Needed / Chief Complaint</label>
                <Input 
                  value={formData.treatmentNeed} 
                  onChange={(e) => setFormData({...formData, treatmentNeed: e.target.value})}
                  className="bg-slate-50 py-5 rounded-xl text-xs" 
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 block mb-1">Medical History & Symptoms</label>
                <textarea 
                  rows={3}
                  value={formData.medicalHistory} 
                  onChange={(e) => setFormData({...formData, medicalHistory: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800" 
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <Button 
                onClick={() => setCurrentStep(2)}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-xs font-semibold shadow-md flex items-center gap-2"
              >
                Proceed to Upload Reports <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* STEP 2: UPLOAD MEDICAL DOCUMENTS */}
        {currentStep === 2 && (
          <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-lg space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Upload Medical Documents</h2>
              <p className="text-xs text-slate-500 mt-1">Our AI extracts structured clinical history and imaging findings directly from your files.</p>
            </div>

            {/* Drag and Drop Zone */}
            <label className="border-2 border-dashed border-slate-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-500 transition-all cursor-pointer block">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-xs flex items-center justify-center text-emerald-600 mb-3 border border-zinc-200">
                <Upload className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">Click to browse or drop your reports here</h4>
              <p className="text-xs text-slate-500 mb-3">Supported formats: PDF, JPG, PNG (Up to 25MB)</p>
              <span className="text-xs font-semibold text-emerald-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                Choose Local Files
              </span>
              <input type="file" multiple className="hidden" onChange={handleFileUpload} />
            </label>

            {/* Supported Document Checklist */}
            <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">Supported Document Types</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Medical Reports</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> MRI Scan</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> CT Scan Report</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Blood Panel</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Prescription</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Treatment Summary</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Discharge Summary</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Angiogram CD/Doc</span>
              </div>
            </div>

            {/* Currently Uploaded Files List */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-slate-400">Attached Documents ({uploadedFiles.length})</span>
              {uploadedFiles.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-semibold text-slate-800">{file.name}</p>
                      <p className="text-[10px] text-slate-500">{file.size} • Classified: {file.type}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                    Ready for OCR
                  </Badge>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <Button variant="outline" onClick={() => setCurrentStep(1)} className="rounded-full text-xs">
                Back to Patient Info
              </Button>
              <Button 
                onClick={startAIAnalysis}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-5 text-xs font-semibold shadow-md flex items-center gap-2"
              >
                <BrainCircuit className="w-4 h-4 text-amber-300" />
                Run AI Document Analysis
              </Button>
            </div>
          </Card>
        )}

        {/* STEP 3: AI ANALYSIS PROGRESS */}
        {currentStep === 3 && (
          <Card className="p-10 md:p-14 bg-white border-slate-200 rounded-3xl shadow-xl text-center space-y-8 animate-in zoom-in-95">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
              ></div>
              <div className="absolute inset-0 flex items-center justify-center font-extrabold text-primary text-lg">
                {analysisProgress}%
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900">AI Medical Intelligence Engine</h3>
              <p className="text-xs text-slate-500 font-mono">
                {processingSteps[analysisStageIndex]}
              </p>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full max-w-md mx-auto bg-slate-100 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-500 rounded-full"
                style={{ width: `${analysisProgress}%` }}
              ></div>
            </div>

            {/* Checklist of subtasks */}
            <div className="max-w-md mx-auto text-left space-y-2 text-xs">
              <div className={`flex items-center gap-2 ${analysisProgress >= 20 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" /> Reading document & OCR text extraction
              </div>
              <div className={`flex items-center gap-2 ${analysisProgress >= 40 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" /> Extracting medical entities & clinical history
              </div>
              <div className={`flex items-center gap-2 ${analysisProgress >= 60 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" /> Identifying medical specialty (Cardiology / CABG)
              </div>
              <div className={`flex items-center gap-2 ${analysisProgress >= 80 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" /> Calculating MediVoyage Explainable Match Scores
              </div>
              <div className={`flex items-center gap-2 ${analysisProgress >= 100 ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                <CheckCircle2 className="w-4 h-4" /> Generating doctor-ready structured summary
              </div>
            </div>
          </Card>
        )}

        {/* STEP 4: AI RESULT & MATCH SCORES */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Main Result Card */}
            <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-xl space-y-6">
              
              <div className="flex flex-wrap justify-between items-start gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-bold">
                      ✓ Analysis Complete
                    </Badge>
                    <span className="text-xs text-slate-500">Case ID: MEDI-88421</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    AI Care Summary & Provider Recommendations
                  </h2>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-500">Top Match Score</div>
                  <div className="text-3xl font-extrabold text-emerald-600">96%</div>
                  <span className="text-[10px] text-slate-400">Apollo / Medanta</span>
                </div>
              </div>

              {/* Case Findings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Recommended Specialty</span>
                  <p className="text-base font-bold text-primary">Cardiology ❤️ (Cardiothoracic Surgery)</p>
                  <p className="text-slate-600">Possible Treatment: Off-pump Coronary Artery Bypass Graft (CABG)</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="font-bold text-slate-400 uppercase text-[10px] tracking-wider block">Estimated Treatment Package</span>
                  <p className="text-base font-bold text-emerald-700">$5,800 – $7,500 USD (₹4.8L – ₹6.2L)</p>
                  <p className="text-slate-600">Inclusive of 6 days stay, surgeon fees, and post-op ICU monitoring</p>
                </div>
              </div>

              {/* Important Clinical Information Found */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <FileSearch className="w-4 h-4 text-primary" /> Important Information Found in Documents:
                </h4>
                <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                  <li>Previous Angiography indicates critical triple vessel stenosis (LAD 85%, RCA 90%).</li>
                  <li>Recent blood panels confirm stable renal clearance and glycemic control.</li>
                  <li>Current oral antiplatelet and statin therapy documented.</li>
                </ul>
              </div>

              {/* Section 8: Explainable MediVoyage Match Score Model Breakdown */}
              <div className="p-5 bg-gradient-to-br from-emerald-50/70 to-teal-50/50 rounded-2xl border border-emerald-200 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-emerald-700" />
                    <h4 className="font-bold text-slate-900 text-sm">
                      Section 8: MediVoyage AI Match Score Algorithm Breakdown
                    </h4>
                  </div>
                  <Badge variant="outline" className="bg-white text-emerald-800 border-emerald-200 text-[10px]">
                    Hybrid Model (Rule + ML)
                  </Badge>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent multi-parameter evaluation ensures recommendations are based on surgical capability and value rather than paid placements.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Specialty Match</span>
                    <span className="font-bold text-slate-900 text-sm">30% (Full Weight)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Treatment Match</span>
                    <span className="font-bold text-slate-900 text-sm">20% (Full Weight)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Budget Fit</span>
                    <span className="font-bold text-slate-900 text-sm">15% (Within $10k)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Facility & Accreditation</span>
                    <span className="font-bold text-slate-900 text-sm">10% (JCI/NABH)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Location Preference</span>
                    <span className="font-bold text-slate-900 text-sm">10% (Delhi NCR)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Language Support</span>
                    <span className="font-bold text-slate-900 text-sm">5% (English/Hausa)</span>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-500 block text-[10px]">Patient Preferences</span>
                    <span className="font-bold text-slate-900 text-sm">10% (Attendant)</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 flex flex-col justify-center text-center">
                    <span className="text-emerald-800 font-bold text-[10px]">Overall Match Score</span>
                    <span className="font-extrabold text-emerald-800 text-base">96%</span>
                  </div>
                </div>
              </div>

              {/* Recommended Next Steps & Clinical Disclaimer */}
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 space-y-1">
                  <p className="font-bold">Recommended Next Step:</p>
                  <p>
                    Share this structured case summary with qualified hospital specialists for clinical review. MediVoyage AI does not issue prescriptions or definitive diagnoses.
                  </p>
                </div>
              </div>

              {/* 3 Main Action CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <Button 
                  onClick={() => router.push('/hospitals')}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-xs font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  Find Matching Hospitals
                </Button>

                <Button 
                  onClick={() => router.push('/doctors')}
                  variant="outline"
                  className="border-slate-300 hover:border-primary text-slate-800 rounded-xl py-6 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4 text-primary" />
                  Find Specialists
                </Button>

                <Button 
                  onClick={() => router.push('/dashboard/patient')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 text-xs font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  Request Dedicated Coordinator
                </Button>
              </div>

            </Card>

          </div>
        )}

      </div>
    </div>
  );
}

export default function AICareMatchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs text-slate-400">Loading AI Care Match Engine...</div>}>
      <AICareMatchContent />
    </Suspense>
  );
}
