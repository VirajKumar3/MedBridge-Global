
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { ShieldCheck, Heart, Sparkles, Building2, User, Globe, PhoneCall } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: '✚HealIndiaAI | AI-Powered International Medical Tourism & Care Coordination',
  description: 'Intelligent Healthcare Journey Beyond Borders. Transparent hospital matching, medical document intelligence, visa logistics, and patient care coordination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-[#fafcfa] text-zinc-900`}>
        <Navbar />
        
        <main className="flex-1 flex flex-col">{children}</main>

        <footer className="border-t border-zinc-200 bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            
            {/* Column 1: Brand & Academic Context */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl text-zinc-950">
                <span className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center text-lg shadow-xs">✚</span>
                <span className="text-zinc-950">HealIndia<span className="text-zinc-900 font-extrabold">AI</span></span>
                <span className="text-xs bg-zinc-100 text-zinc-800 border border-zinc-200 px-2 py-0.5 rounded-full font-medium">MedBridge-Global</span>
              </Link>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
                <strong>Your Intelligent Healthcare Journey Beyond Borders.</strong> An AI-powered International Medical Tourism and Patient Care Coordination Platform connecting international patients with accredited Indian hospitals.
              </p>
              <div className="pt-2 text-xs text-zinc-500 space-y-1 border-l-2 border-zinc-300 pl-3">
                <p className="font-semibold text-zinc-700">Academic Capstone Project</p>
                <p>Designed for Smart India Hackathon & University Evaluation</p>
                <p>Focus: Case Management, RAG Document Search & Recommendation Systems</p>
              </div>
            </div>

            {/* Column 2: Public Navigation */}
            <div>
              <h4 className="font-bold text-zinc-900 text-sm tracking-wide uppercase mb-4">Explore</h4>
              <ul className="space-y-2.5 text-sm text-zinc-600">
                <li><Link href="/treatments" className="hover:text-zinc-950 transition-colors">Treatments (10 Specialties)</Link></li>
                <li><Link href="/hospitals" className="hover:text-zinc-950 transition-colors">Hospital Directory & Compare</Link></li>
                <li><Link href="/doctors" className="hover:text-zinc-950 transition-colors">Find Specialist Doctors</Link></li>
                <li><Link href="/ai-care-match" className="hover:text-zinc-950 transition-colors font-medium text-zinc-900 flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /> AI Care Match</Link></li>
                <li><Link href="/medical-travel" className="hover:text-zinc-950 transition-colors">Medical Travel & Visa AI</Link></li>
                <li><Link href="/how-it-works" className="hover:text-zinc-950 transition-colors">10-Step Journey Map</Link></li>
              </ul>
            </div>

            {/* Column 3: Portals & Systems */}
            <div>
              <h4 className="font-bold text-zinc-900 text-sm tracking-wide uppercase mb-4">Dedicated Portals</h4>
              <ul className="space-y-2.5 text-sm text-zinc-600">
                <li><Link href="/dashboard/patient" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-zinc-700" /> Patient Dashboard</Link></li>
                <li><Link href="/dashboard/hospital" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-zinc-700" /> Hospital Portal</Link></li>
                <li><Link href="/dashboard/coordinator" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-zinc-700" /> Coordinator CRM</Link></li>
                <li><Link href="/dashboard/admin" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-zinc-700" /> Super Admin & AI Hub</Link></li>
                <li><Link href="/login" className="hover:text-zinc-950 transition-colors font-medium">Role-Based Login</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources & Clinical Notice */}
            <div>
              <h4 className="font-bold text-zinc-900 text-sm tracking-wide uppercase mb-4">Resources & Ethics</h4>
              <ul className="space-y-2.5 text-sm text-zinc-600">
                <li><Link href="/resources#why-india" className="hover:text-zinc-950 transition-colors">Why India? Cost Comparison</Link></li>
                <li><Link href="/resources#stories" className="hover:text-zinc-950 transition-colors">International Patient Stories</Link></li>
                <li><Link href="/resources#faqs" className="hover:text-zinc-950 transition-colors">Medical Visa FAQ</Link></li>
                <li><Link href="/about" className="hover:text-zinc-950 transition-colors">Platform Architecture</Link></li>
              </ul>
              <div className="mt-4 p-3 bg-zinc-100/80 rounded-xl border border-zinc-200">
                <p className="text-[11px] text-zinc-700 leading-snug">
                  <strong>Clinical Boundary Notice:</strong> HealIndiaAI assists in case organization and logistics. All clinical diagnoses and treatments are made strictly by qualified medical specialists.
                </p>
              </div>
            </div>

          </div>

          <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} ✚HealIndiaAI (MedBridge-Global). All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-zinc-900">Academic Abstract</Link>
              <Link href="/resources" className="hover:text-zinc-900">Research & Data Connect</Link>
              <Link href="/about#ethics" className="hover:text-zinc-900">AI Safety & Ethics</Link>
              <span className="text-zinc-900 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse"></span>
                AI Models Operational
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
