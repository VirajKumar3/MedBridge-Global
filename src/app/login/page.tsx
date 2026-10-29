"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Building2, 
  Stethoscope,
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Check,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  HelpCircle,
  Loader2,
  ShieldAlert
} from "lucide-react";
import { LogoMark } from "@/components/navbar";

export default function LoginPage() {
  const router = useRouter();
  
  const [selectedRole, setSelectedRole] = useState<string>("patient");
  const [email, setEmail] = useState<string>("john.doe@patients.medbridge-global.com");
  const [password, setPassword] = useState<string>("••••••••••••");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const roles = [
    {
      id: "patient",
      title: "Patient",
      subtitle: "Manage your treatment journey",
      portalTitle: "Patient Portal",
      portalDesc: "Access your treatment plan, medical records, travel progress and care conversations.",
      icon: User,
      href: "/dashboard/patient",
      defaultEmail: "john.doe@patients.medbridge-global.com",
      demoLabel: "Demo Patient Account"
    },
    {
      id: "hospital",
      title: "Hospital",
      subtitle: "Review and manage patient cases",
      portalTitle: "Hospital Portal",
      portalDesc: "Manage incoming patient cases, treatment plans and quotations.",
      icon: Building2,
      href: "/dashboard/hospital",
      defaultEmail: "desk@medanta.medbridge-global.com",
      demoLabel: "Demo Hospital Desk Account"
    },
    {
      id: "doctor",
      title: "Doctor",
      subtitle: "Review patient cases & records",
      portalTitle: "Doctor Portal",
      portalDesc: "Access authorized patient dossiers, OCR clinical records, video consultations, and surgical directives.",
      icon: Stethoscope,
      href: "/dashboard/doctor",
      defaultEmail: "dr.trehan@medanta.medbridge-global.com",
      demoLabel: "Demo Specialist Doctor Account"
    },
    {
      id: "coordinator",
      title: "Care Coordinator",
      subtitle: "Coordinate patient journeys",
      portalTitle: "Care Coordinator CRM",
      portalDesc: "Manage patient journeys, hospital coordination and travel requirements.",
      icon: Briefcase,
      href: "/dashboard/coordinator",
      defaultEmail: "coordinator@medbridge-global.com",
      demoLabel: "Demo Medical Facilitator Account"
    },
    {
      id: "admin",
      title: "Admin & AI",
      subtitle: "Platform controls & analytics",
      portalTitle: "Admin & AI Center",
      portalDesc: "Access platform administration, analytics and AI monitoring.",
      icon: ShieldCheck,
      href: "/dashboard/admin",
      defaultEmail: "admin@medbridge-global.com",
      demoLabel: "Demo System Administrator Account"
    }
  ];

  const currentRole = roles.find(r => r.id === selectedRole) || roles[0];

  const handleRoleSelect = (roleId: string) => {
    const roleObj = roles.find(r => r.id === roleId);
    setSelectedRole(roleId);
    setErrorMsg("");
    if (roleObj) {
      setEmail(roleObj.defaultEmail);
    }
  };

  const handleSignIn = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email.trim()) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push(currentRole.href);
    }, 600);
  };

  const handleDemoSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(currentRole.href);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#17151F] flex flex-col justify-between selection:bg-[#7657FF] selection:text-white font-sans">
      
      {/* SIMPLIFIED AUTHENTICATION HEADER */}
      <header className="py-5 px-4 sm:px-8 border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group focus:outline-none">
            <LogoMark />
            <span className="font-semibold text-base sm:text-lg text-[#17151F]">
              MedBridge <span className="text-[#7657FF]">Global</span>
            </span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#666276]">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 hover:text-[#17151F] transition-colors focus:outline-none"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to website</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <span className="text-[#E2E8F0]">|</span>

            <Link 
              href="/resources#get-help" 
              className="flex items-center gap-1.5 hover:text-[#17151F] transition-colors focus:outline-none"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#7657FF]" />
              Need help?
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN AUTHENTICATION CONTAINER */}
      <main className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 40% BRANDING PANEL (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 rounded-3xl bg-[#17151F] text-white p-10 flex-col justify-between relative overflow-hidden shadow-xl border border-[#17151F]">
            
            {/* Subtle Abstract Glow Accent */}
            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#7657FF]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <LogoMark />
                <span className="font-bold text-lg text-white">
                  MedBridge <span className="text-[#7657FF]">Global</span>
                </span>
              </div>

              <div className="space-y-3 pt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white leading-snug">
                  Connected care.<br />Across borders.
                </h2>
                <p className="text-xs text-[#E2DEFB] leading-relaxed font-normal">
                  A secure workspace connecting international patients, hospitals and care teams.
                </p>
              </div>
            </div>

            {/* Bottom Trust Indicators */}
            <div className="space-y-3 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-2 text-xs text-[#E2DEFB]">
                <div className="w-4 h-4 rounded-full bg-[#7657FF]/20 text-[#7657FF] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Secure Role-Based Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E2DEFB]">
                <div className="w-4 h-4 rounded-full bg-[#7657FF]/20 text-[#7657FF] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Dedicated Portal Workspaces</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E2DEFB]">
                <div className="w-4 h-4 rounded-full bg-[#7657FF]/20 text-[#7657FF] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>Protected Patient Health Data</span>
              </div>
            </div>

          </div>

          {/* RIGHT 60% FORM PANEL */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-[#7657FF] uppercase">
                  SECURE PORTAL ACCESS
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17151F]">
                  Welcome back
                </h1>
                <p className="text-xs text-[#666276]">
                  Choose your portal to continue to MedBridge Global.
                </p>
              </div>

              {/* COMPACT ROLE SELECTOR (5 ROLES) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = selectedRole === role.id;

                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => handleRoleSelect(role.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer relative group ${
                        isSelected
                          ? "bg-[#7657FF]/5 border-[#7657FF] shadow-2xs"
                          : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#CBD5E1] hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl border transition-colors ${
                          isSelected 
                            ? "bg-[#7657FF] text-white border-[#7657FF]" 
                            : "bg-white text-[#666276] border-[#E2E8F0] group-hover:text-[#17151F]"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        {isSelected ? (
                          <div className="w-4 h-4 rounded-full bg-[#7657FF] text-white flex items-center justify-center shadow-2xs">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1] group-hover:text-[#7657FF] group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>

                      <h3 className="font-bold text-xs sm:text-sm text-[#17151F] leading-snug">
                        {role.title}
                      </h3>
                      <p className="text-[11px] text-[#666276] leading-tight mt-0.5 line-clamp-1">
                        {role.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* DYNAMIC LOGIN FORM PANEL */}
              <form onSubmit={handleSignIn} className="space-y-4 pt-2 border-t border-[#E2E8F0]">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-[#17151F]">
                    {currentRole.portalTitle}
                  </h3>
                  <p className="text-[11px] text-[#666276]">
                    {currentRole.portalDesc}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#17151F] mb-1">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#7657FF] rounded-xl text-xs py-5 text-[#17151F]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-semibold text-[#17151F]">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => alert("Password reset link sent to your registered email.")}
                        className="text-[11px] font-semibold text-[#7657FF] hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="bg-[#F8FAFC] border-[#E2E8F0] focus:border-[#7657FF] rounded-xl text-xs py-5 text-[#17151F] pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666276] hover:text-[#17151F]"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#7657FF] hover:bg-[#0c8272] text-white font-semibold rounded-xl py-5 text-xs shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In to {currentRole.portalTitle}
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* DEMO ACCESS SECTION */}
              <div className="pt-2 text-center space-y-3">
                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-[#E2E8F0]"></div>
                  <span className="flex-shrink mx-3 text-[10px] uppercase tracking-wider text-[#666276] font-semibold">OR</span>
                  <div className="flex-grow border-t border-[#E2E8F0]"></div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs text-[#666276]">Exploring the platform?</p>
                  <Button
                    type="button"
                    onClick={handleDemoSignIn}
                    disabled={isLoading}
                    variant="outline"
                    className="w-full border-[#E2E8F0] hover:bg-[#F8FAFC] text-[#17151F] text-xs font-semibold rounded-xl py-4 transition-all"
                  >
                    Continue with Demo Account →
                  </Button>
                  <p className="text-[10px] text-[#666276]">
                    {currentRole.demoLabel}
                  </p>
                </div>
              </div>

            </div>

            {/* SECURITY FOOTER */}
            <div className="pt-4 border-t border-[#E2E8F0] text-center text-[11px] text-[#666276] flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3 text-[#7657FF]" />
              <span>Secure 256-bit encrypted role-based access</span>
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER NOTICE */}
      <footer className="py-4 px-4 text-center text-[11px] text-[#666276] border-t border-[#E2E8F0] bg-white">
        © {new Date().getFullYear()} ✚MedBridge Global. All rights reserved. Role-Based Medical Tourism Platform.
      </footer>

    </div>
  );
}
