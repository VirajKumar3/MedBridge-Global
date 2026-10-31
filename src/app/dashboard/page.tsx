"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Lock,
  CheckCircle2
} from "lucide-react";

const PORTALS = [
  {
    id: "patient",
    title: "Patient Portal",
    badge: "Active Care Journey",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    role: "International Patient",
    description: "Track your 11-stage healthcare journey, review AI-assisted case summaries, compare hospital quotations, and manage medical visa & travel logistics.",
    icon: User,
    iconBg: "bg-emerald-50 text-[#7657FF]",
    href: "/dashboard/patient",
    features: [
      "11-Stage Patient Timeline",
      "AI-Assisted Case Summary",
      "Quotation & Cost Breakdown",
      "Visa & Airport Transport"
    ]
  },
  {
    id: "hospital",
    title: "Hospital Portal",
    badge: "Accredited Partner",
    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    role: "Hospital Desk Admin & Coordinator",
    description: "Manage incoming international patient referrals, review authorized clinical records, generate transparent surgical quotations, and schedule tele-consults.",
    icon: Building2,
    iconBg: "bg-blue-50 text-blue-600",
    href: "/dashboard/hospital",
    features: [
      "Patient Case Intake & Consent",
      "Surgical Quotation Generator",
      "Specialist Tele-Consults",
      "Intl Bed & Desk Management"
    ]
  },
  {
    id: "doctor",
    title: "Doctor Portal",
    badge: "Clinical Workspace",
    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
    role: "Specialist Surgeon & Physician",
    description: "Access authorized patient dossiers, evaluate longitudinal medical histories & DICOM scans, conduct pre-travel video consultations, and log treatment notes.",
    icon: Stethoscope,
    iconBg: "bg-purple-50 text-purple-600",
    href: "/dashboard/doctor",
    features: [
      "Authorized Patient Roster",
      "Longitudinal Case Summaries",
      "Video Consultation Schedule",
      "Follow-up & Care Directives"
    ]
  },
  {
    id: "coordinator",
    title: "Care Coordinator CRM",
    badge: "Medical Facilitator",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    role: "Medical Value Travel Facilitator",
    description: "End-to-end patient concierge CRM. Manage cross-border patient pipelines, coordinate hospital approvals, monitor e-Medical visa applications, and dispatch transport.",
    icon: Briefcase,
    iconBg: "bg-amber-50 text-amber-600",
    href: "/dashboard/coordinator",
    features: [
      "Cross-Border Patient Pipeline",
      "Hospital Review Tracking",
      "Missing Document Alerts",
      "Chauffeur & Hotel Coordination"
    ]
  },
  {
    id: "admin",
    title: "Platform Admin & AI Hub",
    badge: "System Governance",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
    role: "Platform Administrator & AI Monitor",
    description: "National MVT demand analytics, hospital & doctor verification accreditation audits, live AI recommendation model monitoring, and security audit logs.",
    icon: ShieldCheck,
    iconBg: "bg-slate-100 text-slate-700",
    href: "/dashboard/admin",
    features: [
      "National MVT Analytics",
      "Hospital & Doctor Verification",
      "AI Recommendation Models",
      "Audit Trails & Permissions"
    ]
  }
];

export default function DashboardIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="outline" className="bg-[#EDEAFF] text-[#7657FF] border-[#D6CFFF] text-xs font-semibold px-3 py-1">
            Right Treatment • Right Hospital • Right Price • One Journey
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#17151F] tracking-tight">
            Role-Based Portal Access
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Select your dedicated workspace. Each portal delivers role-specific capabilities enforcing strict medical data privacy, verified permissions, and synchronized coordination.
          </p>
        </div>

        {/* Portal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTALS.map((portal) => {
            const Icon = portal.icon;
            return (
              <Card key={portal.id} className="bg-white border-slate-200 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${portal.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className={`text-[11px] font-semibold ${portal.badgeColor}`}>
                      {portal.badge}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-[#17151F]">{portal.title}</CardTitle>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">{portal.role}</p>
                  </div>
                  <CardDescription className="text-xs text-slate-600 leading-relaxed">
                    {portal.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pt-2">
                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Capabilities</p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {portal.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7657FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={portal.href} className="block pt-2">
                    <Button className="w-full bg-[#17151F] hover:bg-[#17151F] text-white rounded-xl text-xs font-semibold py-2.5 flex items-center justify-center gap-2 group cursor-pointer">
                      <span>Launch {portal.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security & Authentication Notice */}
        <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#7657FF] flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17151F]">Encrypted Healthcare Authentication & HIPAA Compliance</p>
              <p className="text-[11px] text-slate-500">Need to switch accounts or login with custom credentials? Visit our centralized authentication screen.</p>
            </div>
          </div>
          <Link href="/login" className="shrink-0 w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto rounded-xl text-xs font-semibold border-slate-200 hover:bg-slate-50">
              Go to Login Page
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
