"use client";


import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Sparkles, 
  User, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  Shield, 
  Menu, 
  X, 
  Plane, 
  FileText, 
  HeartHandshake, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setLoginModalOpen(false);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const treatmentsList = [
    { title: "Cardiology ❤️", desc: "CABG, Angioplasty, Valve Replacement", href: "/treatments#cardiology" },
    { title: "Orthopedics 🦴", desc: "Robotic Knee, Hip & Joint Replacement", href: "/treatments#orthopedics" },
    { title: "Oncology 🎗️", desc: "Proton Therapy, CyberKnife, Surgical Oncology", href: "/treatments#oncology" },
    { title: "Neurology 🧠", desc: "Deep Brain Stimulation (DBS), Spine Surgery", href: "/treatments#neurology" },
    { title: "Organ Transplant", desc: "Living Donor Liver & Kidney Transplants", href: "/treatments#transplant" },
    { title: "IVF & Fertility", desc: "ICSI, Blastocyst Culture, PGT Genetics", href: "/treatments#fertility" },
    { title: "Bariatric Surgery", desc: "Laparoscopic Gastric Sleeve & Bypass", href: "/treatments#bariatric" },
    { title: "Dental Care", desc: "All-on-4 Implants, Zirconia Full Smile", href: "/treatments#dental" },
    { title: "Cosmetic Surgery", desc: "Aesthetic Reconstruction & Contouring", href: "/treatments#cosmetic" },
    { title: "Other Treatments", desc: "Ophthalmology, Urology, ENT & Ayurveda", href: "/treatments" }
  ];

  const travelList = [
    { title: "Visa Assistance", desc: "Medical Visa invitation & e-Visa guidance", href: "/medical-travel#visa" },
    { title: "AI Document Checker", desc: "Automated verification of missing embassy files", href: "/medical-travel#checklist" },
    { title: "Flight Information", desc: "Flight itineraries & stretcher assistance", href: "/medical-travel#flights" },
    { title: "Airport Pickup", desc: "Pre-assigned driver & medical escort service", href: "/medical-travel#pickup" },
    { title: "Hotels & Accommodation", desc: "Guest houses & apartments near partner hospitals", href: "/medical-travel#hotels" },
    { title: "Local Transport", desc: "Daily dedicated hospital and hotel shuttles", href: "/medical-travel#transport" },
    { title: "Medical Attendant", desc: "Registered nurses and companion coordination", href: "/medical-travel#attendant" },
    { title: "Travel FAQ", desc: "Currency, SIM card, climate, and food tips", href: "/medical-travel#faq" }
  ];

  const resourcesList = [
    { title: "Treatment Guides", desc: "Comprehensive clinical preparation guides", href: "/resources#guides" },
    { title: "Why India?", desc: "70%+ cost savings vs US/UK with equal JCI quality", href: "/resources#why-india" },
    { title: "Patient Stories", desc: "Documented recovery journeys from 40+ nations", href: "/resources#stories" },
    { title: "FAQs", desc: "Everything about payments, visa letters, and recovery", href: "/resources#faqs" },
    { title: "Clinical Blog", desc: "Latest medical technology & breakthrough updates", href: "/resources#blog" },
    { title: "Help Center", desc: "24/7 dedicated international desk support", href: "/resources#help" }
  ];

  const portalRoles = [
    {
      role: "Patient Portal",
      desc: "Track your 11-step journey, records, visa, and talk to HealAI",
      icon: User,
      href: "/dashboard/patient",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      role: "Hospital Portal",
      desc: "Manage international leads, reviews, doctor schedules, and quotes",
      icon: Building2,
      href: "/dashboard/hospital",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      role: "Coordinator CRM",
      desc: "Full 11-stage patient case pipeline, documents, and travel logistics",
      icon: Briefcase,
      href: "/dashboard/coordinator",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    },
    {
      role: "Super Admin & AI Center",
      desc: "National MVT intelligence, fraud anomaly flags, and 7 AI models hub",
      icon: Shield,
      href: "/dashboard/admin",
      color: "bg-zinc-100 text-zinc-900 border-zinc-200"
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md shadow-2xs transition-all" ref={navRef}>
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo - Sleek Monochrome */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-black transition-colors">
              <span>✚</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-zinc-950 leading-tight flex items-center gap-1">
                HealIndia<span className="text-zinc-900 font-black">AI</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
                by MedBridge-Global
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-zinc-600">
            
            <Link 
              href="/" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname === '/' ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
            >
              Home
            </Link>

            {/* Treatments Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("treatments")}
                className={`whitespace-nowrap flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname.startsWith('/treatments') ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
              >
                Treatments
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'treatments' ? 'rotate-180 text-zinc-900' : 'text-zinc-400'}`} />
              </button>

              {openDropdown === 'treatments' && (
                <div className="absolute top-full left-0 mt-2 w-96 rounded-2xl bg-white p-3 shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 border-b border-zinc-100 flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Medical Specialties</span>
                    <Link href="/treatments" className="text-xs text-zinc-900 font-semibold hover:underline flex items-center gap-1">
                      View All 10 Specialties <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                    {treatmentsList.map((t, idx) => (
                      <Link
                        key={idx}
                        href={t.href}
                        onClick={() => setOpenDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors flex flex-col group"
                      >
                        <span className="font-semibold text-zinc-800 text-sm group-hover:text-zinc-950 transition-colors">{t.title}</span>
                        <span className="text-xs text-zinc-500 line-clamp-1">{t.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/hospitals" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname.startsWith('/hospitals') ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
            >
              Hospitals
            </Link>

            <Link 
              href="/doctors" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname.startsWith('/doctors') ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
            >
              Doctors
            </Link>

            {/* Medical Travel Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("travel")}
                className={`whitespace-nowrap flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname.startsWith('/medical-travel') ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
              >
                Medical Travel
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'travel' ? 'rotate-180 text-zinc-900' : 'text-zinc-400'}`} />
              </button>

              {openDropdown === 'travel' && (
                <div className="absolute top-full left-0 mt-2 w-88 rounded-2xl bg-white p-3 shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 border-b border-zinc-100 flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Travel & Logistics</span>
                    <Link href="/medical-travel" className="text-xs text-zinc-900 font-semibold hover:underline">
                      Overview Hub
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto">
                    {travelList.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors flex flex-col group"
                      >
                        <span className="font-semibold text-zinc-800 text-sm group-hover:text-zinc-950 transition-colors">{item.title}</span>
                        <span className="text-xs text-zinc-500">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/how-it-works" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname === '/how-it-works' ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
            >
              How It Works
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className={`whitespace-nowrap flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname.startsWith('/resources') ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
              >
                Resources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-zinc-900' : 'text-zinc-400'}`} />
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute top-full right-0 mt-2 w-80 rounded-2xl bg-white p-3 shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 border-b border-zinc-100 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Guides & Knowledge</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {resourcesList.map((res, idx) => (
                      <Link
                        key={idx}
                        href={res.href}
                        onClick={() => setOpenDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors flex flex-col group"
                      >
                        <span className="font-semibold text-zinc-800 text-sm group-hover:text-zinc-950 transition-colors">{res.title}</span>
                        <span className="text-xs text-zinc-500">{res.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/about" 
              className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-colors hover:text-zinc-950 hover:bg-zinc-100/80 ${pathname === '/about' ? 'text-zinc-950 font-bold bg-zinc-100' : ''}`}
            >
              About Us
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Quick Portal Switcher / Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("login")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-800 text-xs font-medium hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-100/80 transition-colors bg-white shadow-2xs"
              >
                <User className="w-3.5 h-3.5 text-zinc-500" />
                <span>Login</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === 'login' ? 'rotate-180' : 'text-zinc-400'}`} />
              </button>

              {openDropdown === 'login' && (
                <div className="absolute right-0 top-full mt-2 w-84 rounded-2xl bg-white p-3 shadow-xl border border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 border-b border-zinc-100 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Select Portal Role</span>
                  </div>
                  <div className="space-y-1.5">
                    {portalRoles.map((role, idx) => {
                      const Icon = role.icon;
                      return (
                        <Link
                          key={idx}
                          href={role.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors group border border-transparent hover:border-zinc-200"
                        >
                          <div className={`p-2 rounded-lg border ${role.color} shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-zinc-900 group-hover:text-black transition-colors">
                              {role.role}
                            </div>
                            <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                              {role.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-2 border-t border-zinc-100 text-center">
                    <Link 
                      href="/login" 
                      onClick={() => setOpenDropdown(null)}
                      className="text-xs font-semibold text-zinc-900 hover:underline"
                    >
                      View Dedicated Login Page →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Merged Primary Action CTA - Start AI Care Match */}
            <Button 
              onClick={() => router.push('/ai-care-match')} 
              className="rounded-full px-4.5 py-1.5 text-xs font-semibold bg-zinc-900 hover:bg-black text-white shadow-xs hover:shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>Start AI Care Match</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700/60">NEW</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-8 space-y-4 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="grid grid-cols-2 gap-2 pt-2 border-b border-zinc-100 pb-4">
              <Button 
                onClick={() => { setMobileMenuOpen(false); router.push('/ai-care-match'); }}
                className="w-full bg-zinc-900 hover:bg-black text-white rounded-xl text-xs font-semibold py-2.5 shadow-xs flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1 text-zinc-300" /> Start AI Care Match
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-200 ml-0.5">NEW</span>
              </Button>
              <Button 
                variant="outline"
                onClick={() => { setMobileMenuOpen(false); router.push('/login'); }}
                className="w-full rounded-xl text-xs font-semibold py-2.5 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900"
              >
                <User className="w-3.5 h-3.5 mr-1" /> Portals / Login
              </Button>
            </div>

            <div className="space-y-1 text-sm font-medium text-zinc-700">
              <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                🏠 Home
              </Link>
              <Link href="/treatments" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                🩺 Treatments (10 Specialties)
              </Link>
              <Link href="/hospitals" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                🏥 Hospitals & Comparison
              </Link>
              <Link href="/doctors" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                👨‍⚕️ Specialists & Doctors
              </Link>
              <Link href="/ai-care-match" className="block px-3 py-2 rounded-lg text-zinc-950 font-bold bg-zinc-100 border border-zinc-200" onClick={() => setMobileMenuOpen(false)}>
                🤖 AI Care Match (4 Steps)
              </Link>
              <Link href="/medical-travel" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                ✈️ Medical Travel & Visa AI
              </Link>
              <Link href="/how-it-works" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                🔄 How It Works (10-Step Journey)
              </Link>
              <Link href="/resources" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                📚 Resources & Why India
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-zinc-100 hover:text-zinc-950" onClick={() => setMobileMenuOpen(false)}>
                ℹ️ About Us & Academic Capstone
              </Link>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <span className="text-xs font-bold uppercase text-zinc-400 block mb-2">Direct Portal Access</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link href="/dashboard/patient" className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/60 font-medium hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-100 block" onClick={() => setMobileMenuOpen(false)}>
                  👤 Patient Portal
                </Link>
                <Link href="/dashboard/hospital" className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/60 font-medium hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-100 block" onClick={() => setMobileMenuOpen(false)}>
                  🏥 Hospital Portal
                </Link>
                <Link href="/dashboard/coordinator" className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/60 font-medium hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-100 block" onClick={() => setMobileMenuOpen(false)}>
                  💼 Coordinator CRM
                </Link>
                <Link href="/dashboard/admin" className="p-2.5 rounded-lg border border-zinc-200 bg-zinc-50/60 font-medium hover:border-zinc-300 hover:text-zinc-950 hover:bg-zinc-100 block" onClick={() => setMobileMenuOpen(false)}>
                  ⚙️ Super Admin & AI
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
