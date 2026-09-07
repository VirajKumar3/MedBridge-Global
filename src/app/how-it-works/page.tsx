"use client";


import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Upload, 
  BrainCircuit, 
  Stethoscope, 
  Building2, 
  CheckCircle2, 
  Plane, 
  HeartHandshake, 
  RotateCcw, 
  ArrowRight,
  ShieldCheck,
  FileCheck,
  UserCheck
} from "lucide-react";

export default function HowItWorksPage() {
  const router = useRouter();

  const steps = [
    {
      step: 1,
      title: "Tell Us Your Healthcare Need",
      desc: "Share your condition, previous diagnosis, preferred destination city in India, and budget comfortably through our intake form or multilingual voice assistant.",
      icon: FileText,
      badge: "Inquiry"
    },
    {
      step: 2,
      title: "Upload Medical Reports",
      desc: "Attach your recent MRI, CT scans, blood pathology panels, or prescriptions. Our secure encrypted HIPAA-compliant vault safeguards your data.",
      icon: Upload,
      badge: "Documents"
    },
    {
      step: 3,
      title: "AI Organizes Your Case",
      desc: "MedBridge-Global extracts medical entities via OCR, maps ICD-10 terminology, and formats a standardized case dossier ready for surgical review.",
      icon: BrainCircuit,
      badge: "AI Processing"
    },
    {
      step: 4,
      title: "Qualified Provider Review",
      desc: "Senior department heads and surgeons at accredited partner hospitals evaluate your scans to recommend exact clinical procedures.",
      icon: Stethoscope,
      badge: "Clinical Opinion"
    },
    {
      step: 5,
      title: "Compare Hospital Options",
      desc: "Receive transparent, itemized treatment estimates. Compare JCI hospitals side-by-side on AI match score, surgeon credentials, and amenities.",
      icon: Building2,
      badge: "Decision Support"
    },
    {
      step: 6,
      title: "Confirm Treatment Plan",
      desc: "Conduct an optional pre-travel video tele-consultation with your chosen surgeon to finalize surgical dates and treatment details.",
      icon: CheckCircle2,
      badge: "Lock Plan"
    },
    {
      step: 7,
      title: "Visa & Travel Planning",
      desc: "We generate official hospital visa invitation letters for your Indian Medical Visa (MED) and MED-X attendant visas, and verify your document checklist.",
      icon: FileCheck,
      badge: "Logistics"
    },
    {
      step: 8,
      title: "Travel to India",
      desc: "Land in Delhi, Mumbai, Chennai, or Bengaluru. Your pre-assigned chauffeur and medical coordinator greet you at the airport arrivals gate.",
      icon: Plane,
      badge: "Arrival"
    },
    {
      step: 9,
      title: "Treatment & Hospital Stay",
      desc: "Undergo your planned surgical procedure at the accredited hospital with dedicated international desk and language translator support.",
      icon: HeartHandshake,
      badge: "Clinical Care"
    },
    {
      step: 10,
      title: "Recovery & Follow-Up at Home",
      desc: "Enjoy safe recovery in screened partner apartments, followed by return flight clearance and continuous digital follow-up consultations via our portal.",
      icon: RotateCcw,
      badge: "Post-Care"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200 mb-3">
            Section 18: Complete Connected Journey
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How MedBridge-Global Works
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            A 10-step synchronized continuum ensuring transparency, safety, and care coordination from your initial inquiry to your healthy return home.
          </p>
        </div>

        {/* 10 Steps Visual Stepper */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:inset-y-0 before:left-[19px] md:before:left-[27px] before:w-1 before:bg-emerald-500/20">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative group">
                
                {/* Step Circle Indicator */}
                <div className="absolute -left-[32px] md:-left-[43px] w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border-4 border-emerald-600 flex items-center justify-center font-extrabold text-xs md:text-sm text-emerald-700 shadow-xs z-10 group-hover:scale-110 transition-transform">
                  {s.step}
                </div>

                <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl hover:border-emerald-500/40 hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Step {s.step}: {s.title}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs">
                      {s.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed pl-0 md:pl-13 mt-2">
                    {s.desc}
                  </p>
                </Card>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 md:p-10 bg-emerald-50 border border-emerald-200 text-zinc-900 rounded-3xl text-center space-y-4 shadow-xs">
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">Ready to Start Your 10-Step Journey?</h3>
          <p className="text-zinc-600 text-sm max-w-xl mx-auto">
            Take Step 1 now by entering your medical details into our AI Care Match system.
          </p>
          <Button 
            size="lg"
            onClick={() => router.push('/ai-care-match')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full px-8 py-6 text-base shadow-xs cursor-pointer"
          >
            Start Step 1: Tell Us Your Healthcare Need <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>
    </div>
  );
}
