import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, FileText, HeartHandshake, Activity, ClipboardCheck, Calendar, Clock, Check, Star, Upload, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 space-y-32 overflow-x-hidden">

      {/* 1. Hero Section - Full Bleed Edge-to-Edge with Bright Lilac/Violet Theme */}
      <section className="relative isolate flex min-h-[95vh] sm:min-h-screen flex-col bg-[#F8F7FC] overflow-hidden px-6 pt-28 sm:pt-32 pb-16 animate-reveal border-b border-[#E2DEFB] shadow-[0_8px_30px_rgba(118,87,255,0.06)]">

        {/* Hero Background Image & Atmospheric Overlays - Full Bleed */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/hero-bg-light.png"
            alt="International Medical Travel & Care Coordination in India"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-right lg:object-center opacity-90 transition-opacity duration-1000"
          />
          {/* Subtle dark-tint overlay to deepen the background and elevate contrast */}
          <div className="absolute inset-0 bg-[#17151F]/15 mix-blend-multiply" />
          {/* Directional gradient for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7FC]/80 via-[#F8F7FC]/35 to-transparent sm:via-[#F8F7FC]/20 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7FC]/70 via-transparent to-[#17151F]/20" />
        </div>

        <div className="max-w-[1240px] w-full mx-auto relative z-10 flex flex-col lg:flex-row items-center flex-1">

          {/* Left Content */}
          <div className="relative z-10 max-w-2xl lg:w-3/5 text-left">
            {/* Eyebrow with Brand Tagline */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#7657FF] bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#7657FF]/25 shadow-xs">
                Right Treatment • Right Hospital • Right Price • One Journey
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] leading-[1.1] md:text-[60px] md:leading-[1.05] font-medium text-[#17151F] tracking-tight mb-6">
              Premium medical care in India, <span className="text-[#7657FF]">coordinated for you</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] text-[#666276] leading-relaxed mb-8 md:mb-10 max-w-[500px]">
              We connect international patients with accredited Indian quaternary hospitals, transparent pricing, and end-to-end medical travel guidance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/ai-care-match" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7657FF] text-white font-medium text-[15px] shadow-[0_8px_24px_-4px_rgba(118,87,255,0.45)] hover:-translate-y-0.5 hover:bg-[#6042EE] transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7657FF] cursor-pointer">
                  Get matched with a hospital <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </Link>
              <Link href="/hospitals" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-[#17151F] border border-[#E2DEFB] font-medium text-[15px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#17151F] cursor-pointer shadow-xs">
                  Explore hospitals
                </button>
              </Link>
            </div>

            <p className="text-[13px] text-[#666276] mt-4 font-medium flex items-center justify-center sm:justify-start gap-2">
              <Check className="w-4 h-4 text-[#7657FF]" /> Free • No signup needed • Reply within 24h
            </p>

          </div>



        </div>

        {/* Bottom Trust Bar */}
        <div className="w-full max-w-[1240px] mx-auto mt-20 pt-7 border-t border-[#E2DEFB] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 relative z-20">
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <div>
              <p className="text-[28px] font-medium text-[#17151F] leading-none mb-1">50+</p>
              <p className="text-[12px] font-medium text-[#666276] uppercase tracking-wider">Top Hospitals</p>
            </div>
            <div>
              <p className="text-[28px] font-medium text-[#17151F] leading-none mb-1">12</p>
              <p className="text-[12px] font-medium text-[#666276] uppercase tracking-wider">Specialties</p>
            </div>
            <div>
              <p className="text-[28px] font-medium text-[#7657FF] leading-none mb-1">60%</p>
              <p className="text-[12px] font-medium text-[#666276] uppercase tracking-wider">Avg. Savings</p>
            </div>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-[#E2DEFB]"></div>

          {/* Accreditations */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-[#E2DEFB] rounded-xl backdrop-blur-md shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#7657FF]" />
              <span className="text-[11px] font-bold text-[#17151F]">NABH Accredited</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-[#E2DEFB] rounded-xl backdrop-blur-md shadow-xs">
              <Globe className="w-4 h-4 text-[#7657FF]" />
              <span className="text-[11px] font-bold text-[#17151F]">JCI Certified</span>
            </div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-[#E2DEFB]"></div>

          {/* Testimonial Snippet */}
          <div className="flex items-center gap-4 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-[#EDEAFF] overflow-hidden shrink-0 border border-[#E2DEFB]">
              <Image src="https://i.pravatar.cc/150?img=47" alt="Sarah Jenkins" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[13px] text-[#17151F] italic leading-tight mb-1">&ldquo;Saved 60% on my surgery, felt safe the whole time.&rdquo;</p>
              <p className="text-[11px] font-semibold text-[#666276]">— Sarah J., UK</p>
            </div>
          </div>
        </div>

      </section>

      {/* 2. App Experience Preview */}
      <section className="relative px-6 py-20 flex flex-col items-center animate-reveal overflow-hidden bg-[#F8F7FC]" style={{ animationDelay: '0.2s' }}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDEAFF] border border-[#7657FF]/20 text-[#7657FF] text-[11px] font-bold tracking-wider uppercase mb-3">
            Intelligent Journey Overview
          </div>
          <h2 className="text-[32px] md:text-[38px] font-medium tracking-tight text-[#17151F] mb-4">Seamless App Experience</h2>
          <p className="text-[18px] text-[#666276] max-w-[500px] mx-auto">
            Experience our intelligent care platform across all devices.
          </p>
        </div>
        <div 
          className="hero-cards-group relative flex items-center justify-center w-full max-w-5xl h-[700px] select-none"
          tabIndex={0}
          aria-label="Interactive preview of MedBridge care management platform"
        >

          {/* Left Phone - Patient Medical Record */}
          <div 
            tabIndex={0}
            role="region"
            aria-label="Medical Records Card"
            className="hero-card-shared hero-card-left absolute left-1/2 w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl opacity-[0.92] border border-[#E2DEFB] overflow-hidden flex flex-col pt-10 px-5 z-0 backdrop-blur-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#7657FF]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#EDEAFF] shadow-sm flex items-center justify-center text-[#7657FF]">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#7657FF] bg-[#EDEAFF] px-2.5 py-1 rounded-full border border-[#7657FF]/20">Verified</span>
            </div>

            <h3 className="text-[18px] font-medium text-[#17151F] mb-6">Medical Records</h3>

            {/* Patient Profile */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#EDEAFF]">
              <div className="w-12 h-12 rounded-full bg-[#EDEAFF] overflow-hidden shrink-0 border border-[#7657FF]/20">
                <img src="https://i.pravatar.cc/150?img=47" alt="Patient" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#17151F] leading-tight">Sarah Jenkins</p>
                <p className="text-[12px] text-[#666276]">ID: #MD-84920</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#EDEAFF]/60 p-3 rounded-2xl border border-[#EDEAFF]">
                <p className="text-[11px] text-[#666276] mb-1">Blood</p>
                <p className="text-[14px] font-semibold text-[#17151F]">O-Negative</p>
              </div>
              <div className="bg-[#EDEAFF]/60 p-3 rounded-2xl border border-[#EDEAFF]">
                <p className="text-[11px] text-[#666276] mb-1">Age</p>
                <p className="text-[14px] font-semibold text-[#17151F]">34 yrs</p>
              </div>
            </div>

            {/* Timeline/Allergies */}
            <div className="space-y-4">
              <div>
                <p className="text-[12px] font-medium text-[#17151F] mb-2">Known Allergies</p>
                <div className="flex gap-2">
                  <span className="text-[11px] bg-red-50 text-red-600 px-2.5 py-1 rounded-md border border-red-100">Penicillin</span>
                  <span className="text-[11px] bg-[#EDEAFF]/60 text-[#666276] px-2.5 py-1 rounded-md border border-[#E2DEFB]">None other</span>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-medium text-[#17151F] mb-2">Recent Scans</p>
                <div className="flex items-center gap-3 p-3 bg-[#EDEAFF]/50 rounded-2xl border border-[#E2DEFB]">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 text-[#7657FF] shadow-xs">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[12px] font-medium text-[#17151F]">Chest X-Ray</p>
                    <p className="text-[10px] text-[#666276]">Updated 2d ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone - Care Plan */}
          <div 
            tabIndex={0}
            role="region"
            aria-label="Your Care Plan Card"
            className="hero-card-shared hero-card-right absolute left-1/2 w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl opacity-[0.92] border border-[#E2DEFB] overflow-hidden flex flex-col pt-10 px-5 z-10 backdrop-blur-md cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#7657FF]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#EDEAFF] shadow-sm flex items-center justify-center text-[#7657FF]">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1.5 bg-[#EDEAFF] px-2.5 py-1 rounded-full border border-[#7657FF]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#7657FF] animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#17151F]">Active</span>
              </div>
            </div>

            <h3 className="text-[18px] font-medium text-[#17151F] mb-6">Your Care Plan</h3>

            {/* Treatment Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-[12px] mb-2">
                <span className="font-medium text-[#17151F]">Pre-op Prep</span>
                <span className="text-[#7657FF] font-bold">75%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EDEAFF] rounded-full overflow-hidden">
                <div className="h-full bg-[#7657FF] rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Upcoming Appointment */}
            <p className="text-[12px] font-medium text-[#17151F] mb-2">Next Appointment</p>
            <div className="p-4 bg-[#EDEAFF]/40 rounded-2xl border border-[#E2DEFB] mb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-[13px] font-semibold text-[#17151F]">Cardiology Consult</p>
                  <p className="text-[11px] text-[#666276]">Dr. Alan Sharma</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#7657FF]" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#666276] bg-white px-2 py-1.5 rounded-lg w-fit border border-[#E2DEFB]">
                <Clock className="w-3 h-3 text-[#7657FF]" /> Tomorrow, 10:00 AM
              </div>
            </div>

            {/* Daily Checklist */}
            <p className="text-[12px] font-medium text-[#17151F] mb-2">Daily Tasks</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-white border border-[#E2DEFB] rounded-2xl shadow-xs">
                <div className="w-5 h-5 rounded-md bg-[#7657FF] flex items-center justify-center shrink-0 text-white">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-[12px] font-medium text-[#17151F]">Take Medication</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border border-[#E2DEFB] rounded-2xl opacity-60">
                <div className="w-5 h-5 rounded-md border-2 border-[#E2DEFB] flex items-center justify-center shrink-0">
                </div>
                <p className="text-[12px] font-medium text-[#17151F]">Upload Lab Results</p>
              </div>
            </div>
          </div>

          {/* Center Phone - Care Team Match */}
          <div 
            tabIndex={0}
            role="region"
            aria-label="Match with your care team Card"
            className="hero-card-shared hero-card-center absolute left-1/2 w-[320px] h-[640px] bg-white rounded-[44px] shadow-[0_24px_48px_-12px_rgba(23,21,31,0.25),0_0_24px_rgba(118,87,255,0.1)] border-[6px] border-[#EDEAFF] overflow-hidden flex flex-col pt-12 pb-10 px-5 z-20 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#7657FF]"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#EDEAFF] border border-[#7657FF]/30 mx-auto mb-5 shadow-sm flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-[#7657FF]" />
              </div>
              <h3 className="text-[24px] font-medium text-[#17151F] leading-tight tracking-tight mb-2">Match with<br />your care team</h3>
              <p className="text-[13px] text-[#666276]">AI-driven care coordination</p>
            </div>

            {/* Doctor Matches Grid */}
            <div className="flex-1 space-y-3">
              {/* Doctor 1 (Top Match) */}
              <div className="relative p-4 bg-white border border-[#7657FF]/40 rounded-3xl shadow-[0_4px_20px_-8px_rgba(118,87,255,0.2)] group transition-all hover:border-[#7657FF]">
                <div className="absolute -top-2.5 right-4 bg-[#7657FF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  98% Match
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#EDEAFF] overflow-hidden shrink-0 border border-[#7657FF]/30">
                    <img src="https://i.pravatar.cc/150?img=32" alt="Doctor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#17151F] leading-tight">Dr. Elena Rostova</h4>
                    <p className="text-[12px] text-[#666276] mb-1">Cardiothoracic Surgeon</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-[#7657FF] fill-[#7657FF]" />
                      <span className="text-[11px] font-medium text-[#17151F]">4.9 (120 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="p-4 bg-[#EDEAFF]/40 border border-[#E2DEFB] rounded-3xl transition-all hover:bg-white hover:border-[#7657FF]/30 hover:shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-[#7657FF] bg-[#EDEAFF] px-2 py-0.5 rounded-md">94% Match</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDEAFF] overflow-hidden shrink-0 border border-[#E2DEFB]">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Doctor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#17151F] leading-tight">Dr. Marcus Chen</h4>
                    <p className="text-[11px] text-[#666276]">General Medicine</p>
                  </div>
                </div>
              </div>

              {/* Doctor 3 */}
              <div className="p-4 bg-[#EDEAFF]/40 border border-[#E2DEFB] rounded-3xl transition-all hover:bg-white hover:border-[#7657FF]/30 hover:shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDEAFF] overflow-hidden shrink-0 border border-[#E2DEFB]">
                    <img src="https://i.pravatar.cc/150?img=31" alt="Doctor" className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#17151F] leading-tight">Dr. Aisha Khan</h4>
                    <p className="text-[11px] text-[#666276]">Care Coordinator</p>
                  </div>
                  <div className="ml-auto text-[10px] font-bold text-[#7657FF] bg-white px-2 py-0.5 rounded-md border border-[#E2DEFB]">90%</div>
                </div>
              </div>
            </div>

            <Link href="/health-games" className="w-full mt-6 block">
              <button className="w-full py-4 rounded-full bg-[#7657FF] text-white font-medium text-[16px] shadow-[0_8px_20px_-6px_rgba(118,87,255,0.45)] hover:bg-[#6042EE] hover:-translate-y-0.5 transition-all cursor-pointer">
                Try Mindful Breathing 🌿
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. Diary Entry Testimonials */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto w-full animate-reveal py-10" style={{ animationDelay: '0.4s' }}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDEAFF] border border-[#7657FF]/20 text-[#7657FF] text-[11px] font-bold tracking-wider uppercase mb-3">
            Real Stories Beyond Borders
          </div>
          <h2 className="text-[32px] md:text-[38px] font-medium tracking-tight text-[#17151F]">Patient Reflections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-[0_8px_24px_-12px_rgba(23,21,31,0.12)] border border-[#E2DEFB] rotate-1 transition-transform hover:rotate-0 hover:shadow-lg hover:border-[#7657FF]/40">
            <p className="text-[20px] text-[#17151F] leading-relaxed mb-8">
              &ldquo;The waiting list at home was nearly two years. Within weeks, I was matched with Dr. Chowbey. The entire travel, visa, and hospital admission process felt incredibly human and structured.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#7657FF]"></div>
              <span className="font-reenie text-[24px] text-[#7657FF]">Sarah M., UK</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-[0_8px_24px_-12px_rgba(23,21,31,0.12)] border border-[#E2DEFB] -rotate-1 transition-transform hover:rotate-0 hover:shadow-lg hover:border-[#7657FF]/40 md:mt-12">
            <p className="text-[20px] text-[#17151F] leading-relaxed mb-8">
              &ldquo;The AI document checker saved me so much anxiety before flying. Having a dedicated coordinator made the intimidating experience of surgery in a foreign country feel completely safe.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#7657FF]"></div>
              <span className="font-reenie text-[24px] text-[#7657FF]">David O., Kenya</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Waitlist Conversion */}
      <section className="relative w-full px-6 py-32 mt-12 bg-[#17151F] overflow-hidden flex flex-col items-center justify-center text-center border-t border-[#7657FF]/20">
        {/* Subtle Violet-to-Graphite glowing gradient background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7657FF]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#A99AFF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-[#7657FF]/15 border border-[#7657FF]/35 backdrop-blur-md flex items-center justify-center mb-8 relative z-10 shadow-[0_0_24px_rgba(118,87,255,0.25)]">
          <div className="w-4 h-4 rounded-full bg-[#7657FF] shadow-[0_0_12px_#7657FF]" />
        </div>

        <h2 className="text-[40px] md:text-[56px] font-medium text-white tracking-tight max-w-2xl leading-tight mb-6 relative z-10">
          Ready for a mindful medical journey?
        </h2>

        <p className="text-[#EDEAFF]/85 text-[18px] max-w-[420px] mb-10 relative z-10">
          Join our early access program for personalized international care coordination.
        </p>

        <form className="relative flex items-center w-full max-w-md bg-white rounded-full p-1.5 shadow-2xl z-10 border border-[#E2DEFB]">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent border-none outline-none px-6 text-[#17151F] placeholder:text-[#666276] text-[15px]"
            required
          />
          <button
            type="submit"
            className="bg-[#7657FF] hover:bg-[#6042EE] text-white px-8 py-3.5 rounded-full font-medium text-[15px] hover:-translate-y-0.5 transition-all shadow-[0_4px_16px_rgba(118,87,255,0.4)] shrink-0 cursor-pointer"
          >
            Join waitlist
          </button>
        </form>
      </section>

    </div>
  );
}
