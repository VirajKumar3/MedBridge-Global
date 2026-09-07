"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { 
  ShieldCheck, 
  BrainCircuit, 
  Building2, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  Lock, 
  Users, 
  FileText, 
  Scale, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  const router = useRouter();
  const [archView, setArchView] = useState<"visual" | "journey">("visual");

  return (
    <div className="min-h-screen bg-zinc-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="outline" className="bg-zinc-100 text-zinc-900 border-zinc-300 font-semibold">
            Academic Project & Platform Specifications
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight">
            About ✚HealIndiaAI
          </h1>
          <p className="text-zinc-500 font-semibold text-sm">
            Tagline: Your Intelligent Healthcare Journey Beyond Borders
          </p>
          <p className="text-zinc-700 text-sm md:text-base leading-relaxed bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xs">
            <strong>Full Academic Project Title:</strong> <br />
            <span className="text-zinc-950 font-bold">
              ✚HealIndiaAI: An AI-Powered International Medical Tourism and Patient Care Coordination Platform
            </span>
          </p>
        </div>

        {/* Viva Statement & Clinical Disclaimer Callout */}
        <Card className="p-6 md:p-8 bg-zinc-100/70 border-zinc-200 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-zinc-800" />
            Official Capstone & Clinical Ethics Statement
          </div>
          <blockquote className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed border-l-4 border-zinc-800 pl-4">
            "MediVoyage AI uses AI to organize patient information, analyze and summarize uploaded documents, support hospital and specialist matching, and streamline international care coordination. Medical diagnosis and treatment decisions remain strictly with qualified healthcare professionals."
          </blockquote>
        </Card>

        {/* High-Level Architecture (Section 25) - Redesigned for Maximum Clarity */}
        <Card className="p-6 md:p-8 bg-white border-zinc-200 rounded-3xl shadow-sm space-y-8">
          <div className="border-b border-zinc-100 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-950">System Architecture</h3>
              </div>
              <p className="text-xs text-zinc-500 mt-1">
                Visual interactive breakdown of how data, AI models, and user portals work together.
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="inline-flex rounded-xl bg-zinc-100 p-1 border border-zinc-200 text-xs font-semibold">
              <button
                onClick={() => setArchView("visual")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${archView === "visual" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"}`}
              >
                Visual Architecture
              </button>
              <button
                onClick={() => setArchView("journey")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${archView === "journey" ? "bg-white text-zinc-950 shadow-xs" : "text-zinc-500 hover:text-zinc-900"}`}
              >
                Simple 4-Step User Journey
              </button>
            </div>
          </div>

          {archView === "journey" ? (
            /* Easiest view: Simple 4-Step Patient Journey */
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 relative group hover:border-zinc-400 transition-all">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold mb-3">1</div>
                  <h4 className="font-bold text-zinc-900 text-sm mb-1">Patient Inquiry & Upload</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">International patient searches treatments or uploads medical records (MRI, CT, Blood report).</p>
                  <div className="mt-3 text-[11px] font-semibold text-zinc-800 bg-white border border-zinc-200 px-2 py-1 rounded-md inline-block">Web & Patient Portal</div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 relative group hover:border-zinc-400 transition-all">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold mb-3">2</div>
                  <h4 className="font-bold text-zinc-900 text-sm mb-1">AI Medical Processing</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">OCR extracts clinical data, while the AI ranker calculates top hospital and surgeon matches.</p>
                  <div className="mt-3 text-[11px] font-semibold text-zinc-800 bg-white border border-zinc-200 px-2 py-1 rounded-md inline-block">AI Intelligence Hub</div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 relative group hover:border-zinc-400 transition-all">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold mb-3">3</div>
                  <h4 className="font-bold text-zinc-900 text-sm mb-1">Doctor Review & Quotes</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">Accredited hospital desks review structured case notes and issue itemized fixed-price quotes.</p>
                  <div className="mt-3 text-[11px] font-semibold text-zinc-800 bg-white border border-zinc-200 px-2 py-1 rounded-md inline-block">Hospital Desk Portal</div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 relative group hover:border-zinc-400 transition-all">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold mb-3">4</div>
                  <h4 className="font-bold text-zinc-900 text-sm mb-1">Visa, Travel & Care</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">Coordinator clears visa invitations, airport pickups, hotel stay, and home recovery follow-up.</p>
                  <div className="mt-3 text-[11px] font-semibold text-zinc-800 bg-white border border-zinc-200 px-2 py-1 rounded-md inline-block">Coordinator CRM</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-100/70 border border-zinc-200 text-xs text-zinc-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-800 shrink-0" />
                <span>Everything is synchronized in real-time across all 4 dedicated portals with zero disconnected spreadsheets or lost files.</span>
              </div>
            </div>
          ) : (
            /* Visual Technical Architecture */
            <div className="space-y-8">
              
              {/* TIER 1: CLIENT & PORTAL SUITE */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                    Tier 1: Experience & User Portals
                  </span>
                  <span className="text-[11px] text-zinc-400">Next.js React Client / Tailwind</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 hover:shadow-xs transition-all">
                    <div className="text-lg mb-1">🌐</div>
                    <h5 className="font-bold text-zinc-900 text-sm">Public Web Platform</h5>
                    <p className="text-xs text-zinc-500 mt-1">Treatment discovery, hospital comparison matrix, doctors directory, and public intake.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 hover:shadow-xs transition-all">
                    <div className="text-lg mb-1">👤 🏥</div>
                    <h5 className="font-bold text-zinc-900 text-sm">Patient & Hospital Portals</h5>
                    <p className="text-xs text-zinc-500 mt-1">11-stage journey tracker, document vault, doctor schedules, treatment packages, and quotes.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 hover:shadow-xs transition-all">
                    <div className="text-lg mb-1">💼 ⚙️</div>
                    <h5 className="font-bold text-zinc-900 text-sm">Coordinator CRM & Admin</h5>
                    <p className="text-xs text-zinc-500 mt-1">Case dispatching pipeline, visa assistance checker, national MVT analytics, and AI model hub.</p>
                  </div>
                </div>
              </div>

              {/* CONNECTOR ARROW 1 */}
              <div className="flex flex-col items-center justify-center my-2">
                <div className="w-px h-6 bg-zinc-300"></div>
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-semibold text-zinc-600 border border-zinc-200 flex items-center gap-1 my-1">
                  <span>HTTPS / Encrypted REST & Server Actions</span>
                </div>
                <div className="w-px h-6 bg-zinc-300"></div>
              </div>

              {/* TIER 2: ORCHESTRATION & API ENGINE */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                    Tier 2: Unified Orchestration & API Layer
                  </span>
                  <span className="text-[11px] text-zinc-400">Node.js Runtime / Serverless</span>
                </div>

                <div className="p-5 rounded-2xl border-2 border-zinc-900 bg-zinc-900 text-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-lg">⚡</div>
                    <div>
                      <h4 className="font-extrabold text-base">Next.js 16 App Router API Gateway</h4>
                      <p className="text-xs text-zinc-300">Central router coordinating state, authentication, and service requests.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-zinc-800 text-[11px] rounded-lg border border-zinc-700 font-medium">RBAC Security</span>
                    <span className="px-2.5 py-1 bg-zinc-800 text-[11px] rounded-lg border border-zinc-700 font-medium">Pipeline Bus</span>
                    <span className="px-2.5 py-1 bg-zinc-800 text-[11px] rounded-lg border border-zinc-700 font-medium">Data Validator</span>
                  </div>
                </div>
              </div>

              {/* CONNECTOR ARROW 2 */}
              <div className="flex flex-col items-center justify-center my-2">
                <div className="w-px h-6 bg-zinc-300"></div>
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-semibold text-zinc-600 border border-zinc-200 flex items-center gap-1 my-1">
                  <span>Microservices & Persistent Data Bus</span>
                </div>
                <div className="w-px h-6 bg-zinc-300"></div>
              </div>

              {/* TIER 3: CORE DATA & AI SERVICES */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                    Tier 3: Core Persistence & AI Services
                  </span>
                  <span className="text-[11px] text-zinc-400">Database, Storage & Microservices</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 transition-all">
                    <div className="text-base font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                      <span>🗄️ Relational DB</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-700">PostgreSQL / Prisma</div>
                    <p className="text-xs text-zinc-500 mt-1">Multi-entity schema for cases, hospitals, doctors, quotes, and audit logs.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 transition-all">
                    <div className="text-base font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                      <span>🤖 AI Inference Bus</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-700">Python FastAPI Microservices</div>
                    <p className="text-xs text-zinc-500 mt-1">Asynchronous workers running optical character recognition & vector ranking.</p>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-zinc-400 transition-all">
                    <div className="text-base font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                      <span>🔒 Document Vault</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-700">AES-256 Encrypted Cloud</div>
                    <p className="text-xs text-zinc-500 mt-1">HIPAA/GDPR compliant storage for MRIs, blood reports, and embassy letters.</p>
                  </div>
                </div>
              </div>

              {/* CONNECTOR ARROW 3 */}
              <div className="flex flex-col items-center justify-center my-2">
                <div className="w-px h-6 bg-zinc-300"></div>
                <div className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-semibold text-zinc-600 border border-zinc-200 flex items-center gap-1 my-1">
                  <span>Specialized Machine Learning Engines</span>
                </div>
                <div className="w-px h-6 bg-zinc-300"></div>
              </div>

              {/* TIER 4: SPECIALIZED AI ENGINES */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                    Tier 4: Dedicated AI Models
                  </span>
                  <span className="text-[11px] text-zinc-400">7 Connected Models</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs font-bold text-zinc-900 block">📄 OCR Engine</span>
                    <span className="text-[11px] text-zinc-500">Tesseract + LayoutParser</span>
                    <p className="text-[11px] text-zinc-600 mt-1">Extracts typed & scanned medical metrics from PDFs & JPGs.</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs font-bold text-zinc-900 block">🎯 Hybrid Match Ranker</span>
                    <span className="text-[11px] text-zinc-500">XGBoost + Weighted Matrix</span>
                    <p className="text-[11px] text-zinc-600 mt-1">Scores hospitals based on specialty, budget, location & accreditation.</p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-zinc-200 bg-white">
                    <span className="text-xs font-bold text-zinc-900 block">🧠 Clinical Case LLM</span>
                    <span className="text-[11px] text-zinc-500">Biomedical Transformer</span>
                    <p className="text-[11px] text-zinc-600 mt-1">Generates standardized surgeon briefs from multi-page files.</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </Card>

        {/* 14 Core Platform Modules (Section 26) */}
        <Card className="p-6 md:p-8 bg-white border-zinc-200 rounded-3xl shadow-sm space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-zinc-950">Platform Modules & Scope</h3>
            <p className="text-xs text-zinc-500 mt-1">Comprehensive breakdown of all system capabilities for academic evaluation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 1: User & Access Management</span>
              <p className="text-zinc-600">Role-based access control (RBAC) across 5 personas: Patient, Hospital Admin, Specialist Doctor, Care Coordinator, and Super Admin.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 2: Patient Longitudinal Management</span>
              <p className="text-zinc-600">Unified health profile, emergency contacts, co-morbidities, and full treatment journey timeline.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 3: Medical Document Intelligence</span>
              <p className="text-zinc-600">Encrypted intake, automated document classification, OCR text extraction, and clinician case summary generation.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 4: AI Care & Hospital Match Engine</span>
              <p className="text-zinc-600">Multi-criteria hybrid recommendation algorithm (Specialty 30%, Treatment 20%, Budget 15%, Facilities 10%, Location 10%).</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 5: Quaternary Hospital Management</span>
              <p className="text-zinc-600">Accreditation profiles, department listings, ICU bed availability, and international patient desk services.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 6: Specialist Doctor Management</span>
              <p className="text-zinc-600">Surgical experience, credentials, language proficiency, tele-consultation slots, and second opinions.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 7: Treatment & Fixed Package Catalog</span>
              <p className="text-zinc-600">Procedure profiles, itemized package costs, expected hospital stay durations, and recovery timelines.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 8: Pre-Travel Video Consultation</span>
              <p className="text-zinc-600">Tele-health scheduling, file sharing, consultation notes, and pre-departure clinical clearance.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 9: Visa & AI Document Checker</span>
              <p className="text-zinc-600">Medical visa (MED/MED-X) invitation letter generation and automated verification of missing embassy files.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 10: Travel & Logistics Coordination</span>
              <p className="text-zinc-600">Flight verification, pre-assigned airport pickup chauffeur, recovery apartment reservation, and daily shuttles.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 11: 11-Stage Journey Pipeline Tracker</span>
              <p className="text-zinc-600">CRM Kanban from New Lead to Post-Discharge, synchronizing tasks between coordinator, hospital, and patient.</p>
            </div>

            <div className="p-4 bg-zinc-50/70 rounded-2xl border border-zinc-200">
              <span className="font-bold text-zinc-950 block mb-1">MODULE 12: Post-Treatment & Recovery Tracking</span>
              <p className="text-zinc-600">Symptom journals, post-discharge medication reminders, and follow-up tele-consultations once home.</p>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
