
import type { Metadata } from 'next';
import { Outfit, Reenie_Beanie } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { ShieldCheck, Heart, Sparkles, Building2, User, Globe, PhoneCall } from 'lucide-react';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const reenieBeanie = Reenie_Beanie({ weight: '400', subsets: ['latin'], variable: '--font-reenie' });

export const metadata: Metadata = {
  title: '✚MedBridge Global | AI-Powered International Medical Tourism & Care Coordination',
  description: 'Intelligent Healthcare Journey Beyond Borders. Transparent hospital matching, medical document intelligence, visa logistics, and patient care coordination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${reenieBeanie.variable} font-outfit antialiased min-h-screen flex flex-col bg-background text-foreground`}>

        <Navbar />
        
        <main className="flex-1 flex flex-col">{children}</main>

        <footer className="border-t border-[#7657FF]/20 bg-[#17151F] text-[#F8F7FC] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & Academic Context */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                <span className="w-8 h-8 rounded-lg bg-[#7657FF] text-white flex items-center justify-center text-lg shadow-[0_0_12px_rgba(118,87,255,0.4)]">✚</span>
                <span className="text-white">MedBridge<span className="text-[#A99AFF] font-extrabold">Global</span></span>
                <span className="text-xs bg-[#7657FF]/15 text-[#EDEAFF] border border-[#7657FF]/30 px-2 py-0.5 rounded-full font-medium">MedBridge-Global</span>
              </Link>
              <p className="text-sm text-[#A99AFF]/80 leading-relaxed max-w-sm">
                <strong className="text-white">Your Intelligent Healthcare Journey Beyond Borders.</strong> An AI-powered International Medical Tourism and Patient Care Coordination Platform connecting international patients with accredited Indian hospitals.
              </p>
              <div className="pt-2 text-xs text-[#EDEAFF]/70 space-y-1 border-l-2 border-[#7657FF] pl-3">
                <p className="font-semibold text-white">Academic Capstone Project</p>
                <p>Designed for Smart India Hackathon & University Evaluation</p>
                <p>Focus: Case Management, RAG Document Search & Recommendation Systems</p>
              </div>
            </div>

            {/* Column 2: Public Navigation */}
            <div>
              <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4">Explore</h4>
              <ul className="space-y-2.5 text-sm text-[#EDEAFF]/80">
                <li><Link href="/treatments" className="hover:text-[#A99AFF] transition-colors">Treatments (10 Specialties)</Link></li>
                <li><Link href="/hospitals" className="hover:text-[#A99AFF] transition-colors">Hospital Directory & Compare</Link></li>
                <li><Link href="/doctors" className="hover:text-[#A99AFF] transition-colors">Find Specialist Doctors</Link></li>
                <li><Link href="/ai-care-match" className="hover:text-white transition-colors font-medium text-[#A99AFF] flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[#7657FF]" /> AI Care Match</Link></li>
                <li><Link href="/medical-travel" className="hover:text-[#A99AFF] transition-colors">Medical Travel & Visa AI</Link></li>
                <li><Link href="/how-it-works" className="hover:text-[#A99AFF] transition-colors">10-Step Journey Map</Link></li>
              </ul>
            </div>

            {/* Column 3: Portals & Systems */}
            <div>
              <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4">Dedicated Portals</h4>
              <ul className="space-y-2.5 text-sm text-[#EDEAFF]/80">
                <li><Link href="/dashboard/patient" className="hover:text-[#A99AFF] transition-colors flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#7657FF]" /> Patient Dashboard</Link></li>
                <li><Link href="/dashboard/hospital" className="hover:text-[#A99AFF] transition-colors flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-[#7657FF]" /> Hospital Portal</Link></li>
                <li><Link href="/dashboard/coordinator" className="hover:text-[#A99AFF] transition-colors flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#7657FF]" /> Coordinator CRM</Link></li>
                <li><Link href="/dashboard/admin" className="hover:text-[#A99AFF] transition-colors flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#7657FF]" /> Super Admin & AI Hub</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors font-medium text-[#A99AFF]">Role-Based Login</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources & Clinical Notice */}
            <div>
              <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4">Resources & Ethics</h4>
              <ul className="space-y-2.5 text-sm text-[#EDEAFF]/80">
                <li><Link href="/resources#why-india" className="hover:text-[#A99AFF] transition-colors">Why India? Cost Comparison</Link></li>
                <li><Link href="/resources#stories" className="hover:text-[#A99AFF] transition-colors">International Patient Stories</Link></li>
                <li><Link href="/resources#faqs" className="hover:text-[#A99AFF] transition-colors">Medical Visa FAQ</Link></li>
                <li><Link href="/about" className="hover:text-[#A99AFF] transition-colors">Platform Architecture</Link></li>
              </ul>
              <div className="mt-4 p-3 bg-[#7657FF]/10 rounded-xl border border-[#7657FF]/25">
                <p className="text-[11px] text-[#EDEAFF]/90 leading-snug">
                  <strong className="text-white">Clinical Boundary Notice:</strong> MedBridge Global assists in case organization and logistics. All clinical diagnoses and treatments are made strictly by qualified medical specialists.
                </p>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A99AFF]/75">
            <p>© {new Date().getFullYear()} ✚MedBridge Global. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-white transition-colors">Academic Abstract</Link>
              <Link href="/resources" className="hover:text-white transition-colors">Research & Data Connect</Link>
              <Link href="/about#ethics" className="hover:text-white transition-colors">AI Safety & Ethics</Link>
              <span className="text-[#EDEAFF] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7657FF] shadow-[0_0_8px_#7657FF] animate-pulse"></span>
                AI Models Operational
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
