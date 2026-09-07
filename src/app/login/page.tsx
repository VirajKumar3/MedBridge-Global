"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Lock,
  KeyRound
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>("patient");
  const [email, setEmail] = useState("patient@healindia.ai");

  const roles = [
    {
      id: "patient",
      title: "Patient Portal",
      persona: "John Doe (International Patient)",
      desc: "Track your 11-step journey, records, visa progress, and chat with HealAI.",
      icon: User,
      href: "/dashboard/patient",
      color: "border-emerald-200 bg-emerald-50/50 hover:border-emerald-600 text-emerald-700",
      defaultEmail: "john.doe@patients.healindia.ai"
    },
    {
      id: "hospital",
      title: "Hospital Portal",
      persona: "Medanta - The Medicity Desk",
      desc: "Review incoming patient cases, allocate surgeons, and build quotations.",
      icon: Building2,
      href: "/dashboard/hospital",
      color: "border-teal-200 bg-teal-50/50 hover:border-teal-600 text-teal-700",
      defaultEmail: "desk@medanta.healindia.ai"
    },
    {
      id: "coordinator",
      title: "Care Coordinator CRM",
      persona: "Senior Medical Facilitator",
      desc: "Manage the 11-stage patient pipeline, travel dispatch, and embassy liaison.",
      icon: Briefcase,
      href: "/dashboard/coordinator",
      color: "border-amber-200 bg-amber-50/50 hover:border-amber-600 text-amber-800",
      defaultEmail: "coordinator@healindia.ai"
    },
    {
      id: "admin",
      title: "Super Admin & AI Center",
      persona: "Platform Administrator & Viva Examiner",
      desc: "Access national MVT analytics, fraud flags, and the 7 AI models hub.",
      icon: ShieldCheck,
      href: "/dashboard/admin",
      color: "border-zinc-200 bg-zinc-50/70 hover:border-zinc-500 text-zinc-700",
      defaultEmail: "admin@healindia.ai"
    }
  ];

  const handleQuickLogin = (href: string) => {
    router.push(href);
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-[#fafcfa] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-800 border-emerald-200">
            Role-Based Authentication & Portals
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            Sign In to MedBridge-Global
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-md mx-auto">
            Choose your account role below for instant demo access to the respective portal.
          </p>
        </div>

        {/* 4 Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;

            return (
              <Card
                key={role.id}
                onClick={() => {
                  setSelectedRole(role.id);
                  setEmail(role.defaultEmail);
                }}
                className={`p-6 rounded-3xl cursor-pointer transition-all border ${isSelected ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md bg-white' : 'border-zinc-200 bg-white/90 hover:border-zinc-300'}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-3 rounded-2xl border ${role.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-[10px] bg-zinc-100 text-zinc-700">
                    {role.persona}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-1">{role.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">{role.desc}</p>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickLogin(role.href);
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold py-2.5 flex items-center justify-center gap-1.5 group transition-colors cursor-pointer shadow-xs"
                >
                  One-Click Demo Sign In <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Standard Form Fallback */}
        <Card className="p-6 md:p-8 bg-white border-zinc-200 rounded-3xl shadow-sm max-w-xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-zinc-800 font-bold text-sm border-b border-zinc-100 pb-3">
            <KeyRound className="w-4 h-4 text-emerald-600" />
            Standard Email Login ({roles.find(r => r.id === selectedRole)?.title})
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="font-semibold text-zinc-700 block mb-1">Email Address</label>
              <Input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-50/70 py-5 rounded-xl text-xs border-zinc-200" 
              />
            </div>

            <div>
              <label className="font-semibold text-zinc-700 block mb-1">Password</label>
              <Input 
                type="password"
                defaultValue="••••••••••••"
                className="bg-zinc-50/70 py-5 rounded-xl text-xs border-zinc-200" 
              />
            </div>

            <Button 
              onClick={() => {
                const target = roles.find(r => r.id === selectedRole)?.href || "/dashboard/patient";
                router.push(target);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-5 text-xs font-bold shadow-xs cursor-pointer"
            >
              Sign In to {roles.find(r => r.id === selectedRole)?.title}
            </Button>
          </div>
        </Card>

      </div>
    </div>
  );
}
