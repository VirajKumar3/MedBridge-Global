"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="shrink-0">
    {/* Outer circle - white to contrast with graphite navbar */}
    <circle cx="14" cy="14" r="12" stroke="white" strokeWidth="2" />
    {/* Globe grid lines */}
    <line x1="2" y1="14" x2="26" y2="14" stroke="#A99AFF" strokeWidth="1" strokeOpacity="0.6" />
    <ellipse cx="14" cy="14" rx="4.5" ry="12" stroke="#A99AFF" strokeWidth="1" strokeOpacity="0.6" />
    {/* Arch/Bridge in Violet */}
    <path d="M 3 21 Q 14 6 25 21" stroke="#7657FF" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const NAV_LINKS = [
  { label: "Treatments", href: "#", isTreatmentsDropdown: true },
  { label: "Hospitals", href: "/hospitals" },
  { label: "Doctors", href: "/doctors" },
  { label: "Portals", href: "#", isPortalsDropdown: true },
  { label: "Travel & Visa", href: "/medical-travel" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Health tools", href: "/resources" },
];

const TREATMENTS = [
  { id: "knee-replacement", name: "Robotic Knee Replacement", desc: "Bone & joint arthroplasty" },
  { id: "cabg-heart-bypass", name: "CABG Heart Bypass", desc: "Beating-heart cardiac surgery" },
  { id: "proton-beam-oncology", name: "Proton Beam Radiation", desc: "Targeted pencil-beam oncology" },
  { id: "deep-brain-stimulation", name: "Deep Brain Stimulation", desc: "Parkinson's & neuromodulation" },
  { id: "living-donor-liver-transplant", name: "Liver Transplant", desc: "Living donor multi-organ care" },
];

const PORTALS = [
  { id: "patient", name: "Patient Portal", desc: "11-stage journey & quotations", href: "/dashboard/patient", badge: "Patient" },
  { id: "hospital", name: "Hospital Portal", desc: "Case reviews & quotations", href: "/dashboard/hospital", badge: "Hospital" },
  { id: "doctor", name: "Doctor Portal", desc: "Authorized dossiers & consults", href: "/dashboard/doctor", badge: "Doctor" },
  { id: "coordinator", name: "Coordinator CRM", desc: "Facilitator pipeline & travel", href: "/dashboard/coordinator", badge: "Facilitator" },
  { id: "admin", name: "Admin & AI Hub", desc: "Platform analytics & AI models", href: "/dashboard/admin", badge: "Admin" },
];

function PortalsDropdown({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const isActive = currentPath.startsWith('/dashboard');

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
          isActive ? "text-white font-semibold" : "text-[#EDEAFF]/85 hover:text-white"
        }`}
      >
        Portals
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        {isActive && !isOpen && (
          <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#7657FF] rounded-full" />
        )}
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-3 w-76 bg-[#17151F] rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.4)] border border-[#7657FF]/30 p-3 overflow-hidden z-50 animate-reveal origin-top-left backdrop-blur-xl"
          role="menu"
        >
          <div className="flex flex-col gap-1">
            {PORTALS.map(p => (
              <Link
                key={p.id}
                href={p.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#7657FF]/15 focus-visible:bg-[#7657FF]/20 focus-visible:outline-none transition-colors group"
              >
                <div>
                  <span className="text-[13px] font-bold text-[#F8F7FC] group-hover:text-[#A99AFF] transition-colors block">{p.name}</span>
                  <span className="text-[11px] text-[#A99AFF]/75">{p.desc}</span>
                </div>
                <span className="text-[10px] bg-[#7657FF]/20 text-[#EDEAFF] px-2 py-0.5 rounded-full font-semibold border border-[#7657FF]/30">{p.badge}</span>
              </Link>
            ))}
            <div className="h-[1px] bg-white/10 my-1.5" />
            <Link
              href="/dashboard"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#7657FF]/20 text-[#EDEAFF] focus-visible:bg-[#7657FF]/20 focus-visible:outline-none transition-colors group"
            >
              <span className="text-[12px] font-bold text-white">All Portals Directory</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7657FF] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function TreatmentsDropdown({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const isActive = currentPath.startsWith('/treatments');

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md whitespace-nowrap shrink-0 cursor-pointer ${
          isActive ? "text-white font-semibold" : "text-[#EDEAFF]/85 hover:text-white"
        }`}
      >
        Treatments
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        {isActive && !isOpen && (
          <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#7657FF] rounded-full" />
        )}
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-3 w-76 bg-[#17151F] rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.4)] border border-[#7657FF]/30 p-3 overflow-hidden z-50 animate-reveal origin-top-left backdrop-blur-xl"
          role="menu"
        >
          <div className="flex flex-col gap-1">
            {TREATMENTS.map(t => (
              <Link
                key={t.id}
                href={`/treatments/${t.id}`}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex flex-col px-3.5 py-2 rounded-xl hover:bg-[#7657FF]/15 focus-visible:bg-[#7657FF]/20 focus-visible:outline-none transition-colors group"
              >
                <span className="text-[13px] font-bold text-[#F8F7FC] group-hover:text-[#A99AFF] transition-colors">{t.name}</span>
                <span className="text-[11px] text-[#A99AFF]/75">{t.desc}</span>
              </Link>
            ))}
            <div className="h-[1px] bg-white/10 my-1.5" />
            <Link
              href="/treatments"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#7657FF]/20 text-[#EDEAFF] focus-visible:bg-[#7657FF]/20 focus-visible:outline-none transition-colors group"
            >
              <span className="text-[12px] font-bold text-white">View all treatments & costs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#7657FF] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  // Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      // Hide on scroll down, reveal on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile Menu Body Scroll Lock & Esc to close
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      menuToggleRef.current?.focus();
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) setMobileMenuOpen(false);
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  if (pathname === "/login") return null;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-[#17151F] text-[#F8F7FC] px-4 py-2 rounded-md font-medium shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#7657FF]">
        Skip to content
      </a>
      
      <header 
        className={`fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          hidden ? '-translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <nav 
          aria-label="Main"
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 ease-in-out motion-reduce:transition-none w-full max-w-6xl shadow-[0_12px_36px_-10px_rgba(23,21,31,0.25),0_0_20px_rgba(118,87,255,0.1)] backdrop-blur-xl ${
            scrolled 
              ? 'bg-[#2D283E]/95 border-[#7657FF]/35 shadow-lg' 
              : 'bg-[#2A253A]/85 border-white/20'
          }`}
        >
          
          {/* 1. Logo Zone */}
          <div className="flex items-center shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full pr-1" 
              aria-label="MedBridge Global Home"
            >
              <LogoMark />
              <span className="font-semibold text-[15px] sm:text-[16px] tracking-tight text-white group-hover:text-[#EDEAFF] transition-colors whitespace-nowrap">
                MedBridge <span className="text-[#7657FF]">Global</span>
              </span>
            </Link>
          </div>

          {/* 2. Links Zone (Desktop & Laptop) */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              if (link.isTreatmentsDropdown) {
                return <TreatmentsDropdown key={link.label} currentPath={pathname} />;
              }
              if (link.isPortalsDropdown) {
                return <PortalsDropdown key={link.label} currentPath={pathname} />;
              }
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.label}
                  href={link.href} 
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg whitespace-nowrap shrink-0 ${
                    isActive ? "text-white font-semibold" : "text-[#EDEAFF]/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#7657FF] rounded-full shadow-[0_0_8px_#7657FF]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 3. Actions Zone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              type="button"
              className="hidden 2xl:flex items-center gap-1.5 text-[13px] font-medium text-[#EDEAFF]/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-2 py-1 whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 shrink-0 text-[#A99AFF]" />
              <span>EN / USD</span>
            </button>
            
            <Link 
              href="/login" 
              className="hidden lg:flex text-[13px] xl:text-[14px] font-medium text-[#EDEAFF]/90 hover:text-white transition-colors px-2.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md whitespace-nowrap"
            >
              Login
            </Link>
            
            <Button 
              onClick={() => router.push('/ai-care-match')} 
              className="hidden sm:flex rounded-full bg-[#7657FF] hover:bg-[#6042EE] active:bg-[#5034D8] text-white text-[13px] xl:text-[14px] font-medium px-4 xl:px-5 py-2 h-9 shadow-[0_4px_16px_rgba(118,87,255,0.4)] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7657FF] focus-visible:ring-offset-[#17151F] whitespace-nowrap cursor-pointer hover:shadow-[0_4px_22px_rgba(118,87,255,0.6)]"
            >
              Get Matched
            </Button>

            <button 
              ref={menuToggleRef}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white p-1.5 -mr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md active:bg-white/10 transition-colors" 
              aria-label="Open Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[100] xl:hidden bg-[#17151F] overflow-y-auto animate-reveal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="flex flex-col min-h-screen p-6 max-w-md mx-auto relative bg-[#17151F]">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="MedBridge Global Home" className="flex items-center gap-3">
                <LogoMark />
                <span className="font-semibold text-[16px] tracking-tight text-white">
                  MedBridge <span className="text-[#7657FF]">Global</span>
                </span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 -mr-3 text-white rounded-full hover:bg-white/10 active:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.isPortalsDropdown ? "/dashboard" : link.href === "#" ? "/treatments" : link.href}
                  className={`text-[20px] font-medium px-4 py-3 rounded-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7657FF] ${
                    pathname.startsWith(link.isPortalsDropdown ? "/dashboard" : link.href === "#" ? "/treatments" : link.href) && link.href !== '/'
                      ? "bg-[#7657FF]/20 text-white border border-[#7657FF]/40" 
                      : "text-[#EDEAFF] hover:bg-white/5 active:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Pinned Bottom Actions */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4 pb-4">
              <button className="flex items-center justify-center gap-2 py-4 rounded-xl text-[#EDEAFF] font-medium hover:bg-white/5 active:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <Globe className="w-5 h-5 text-[#A99AFF]" />
                <span>EN / USD</span>
              </button>
              <Link 
                href="/login"
                className="text-center py-4 rounded-xl text-white font-medium hover:bg-white/5 active:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push('/ai-care-match');
                }} 
                className="w-full py-7 rounded-2xl bg-[#7657FF] hover:bg-[#6042EE] active:bg-[#5034D8] text-white text-[16px] font-medium shadow-[0_8px_24px_rgba(118,87,255,0.4)] transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#17151F] focus-visible:ring-white"
              >
                Get Matched
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
