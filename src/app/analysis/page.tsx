"use client";


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { 
  FileSearch, 
  BrainCircuit, 
  FileText, 
  Activity, 
  Stethoscope, 
  CheckCircle2, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";

const analysisStages = [
  { id: 1, label: "Uploading Documents...", icon: FileText },
  { id: 2, label: "OCR & Text Extraction...", icon: FileSearch },
  { id: 3, label: "Medical Terminology Mapping...", icon: Activity },
  { id: 4, label: "Structuring Clinical Case...", icon: BrainCircuit },
  { id: 5, label: "Identifying Specialties...", icon: Stethoscope },
];

export default function AIAnalysis() {
  const [currentStage, setCurrentStage] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Simulate AI pipeline
    let stage = 0;
    const interval = setInterval(() => {
      stage++;
      if (stage <= analysisStages.length) {
        setCurrentStage(stage);
      } else {
        clearInterval(interval);
        setTimeout(() => setAnalysisComplete(true), 500);
      }
    }, 1500); // 1.5 seconds per stage for demo purposes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center py-12 px-4 bg-[#f8fafc]">
      <div className="w-full max-w-3xl">
        
        {!analysisComplete ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="relative w-32 h-32 mb-8"
            >
              <div className="absolute inset-0 rounded-full border-t-4 border-primary border-r-4 border-r-transparent opacity-70"></div>
              <div className="absolute inset-2 rounded-full border-l-4 border-teal-400 border-b-4 border-b-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <BrainCircuit className="w-10 h-10 text-primary" />
              </div>
            </motion.div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-8">AI is analyzing your medical records</h2>
            
            <div className="w-full max-w-md space-y-4">
              {analysisStages.map((stage) => {
                const isActive = stage.id === currentStage;
                const isCompleted = stage.id < currentStage;
                const Icon = stage.icon;
                
                return (
                  <div 
                    key={stage.id} 
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-white shadow-md border border-emerald-200" : 
                      isCompleted ? "opacity-50" : "opacity-20"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive ? "bg-emerald-100 text-emerald-700" : 
                      isCompleted ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className={`font-medium ${isActive ? "text-emerald-800" : isCompleted ? "text-gray-500" : "text-gray-400"}`}>
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Case Summary</h1>
                <p className="text-gray-500">Analysis complete. Here is the structured summary of your medical profile.</p>
              </div>
              <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Ready for matching
              </div>
            </div>

            <Card className="p-8 shadow-xl border-white glass-panel mb-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                
                <div className="md:col-span-1 space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Patient Details</h3>
                    <div className="font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">52 years, Male</div>
                    <div className="text-sm text-gray-500">Nigeria</div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Primary Specialty</h3>
                    <div className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-sm font-semibold border border-emerald-200">
                      Cardiology
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Analyzed Documents</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg border">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      Angiography_Report_JohnDoe.pdf
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-8 pl-0 md:pl-8 md:border-l border-gray-100">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-rose-500" /> Relevant Findings
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5"></div>
                        Severe multi-vessel coronary artery disease
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5"></div>
                        History of Hypertension (controlled)
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5"></div>
                        Type 2 Diabetes Mellitus
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-emerald-600" /> Suggested Clinical Pathway
                    </h3>
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 space-y-3">
                      <div className="flex gap-3">
                        <div className="font-medium text-emerald-700 text-sm">1.</div>
                        <div className="text-sm text-gray-700">Cardiology consultation and physical evaluation.</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="font-medium text-emerald-700 text-sm">2.</div>
                        <div className="text-sm text-gray-700">Further diagnostic imaging (Echocardiogram).</div>
                      </div>
                      <div className="flex gap-3">
                        <div className="font-medium text-emerald-700 text-sm">3.</div>
                        <div className="text-sm text-gray-700">Potential surgical assessment for Coronary Artery Bypass Grafting (CABG).</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Card>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex gap-3 mb-8">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> This is an AI-assisted case summary meant to help match you with the right hospitals. Final diagnosis and treatment decisions must be made by a qualified healthcare professional after reviewing your case.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={() => router.push("/onboarding")}>Edit Information</Button>
              <Button size="lg" className="bg-primary text-white shadow-lg" onClick={() => router.push("/match")}>
                Find Matching Hospitals <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
          </motion.div>
        )}
      </div>
    </div>
  );
}
