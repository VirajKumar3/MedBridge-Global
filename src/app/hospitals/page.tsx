"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hospitals() {
  const router = useRouter();
  
  const hospitals = [
    { name: 'Apollo Hospitals', city: 'Delhi', accreditation: 'JCI, NABH', trustScore: 98 },
    { name: 'Fortis Healthcare', city: 'Mumbai', accreditation: 'JCI', trustScore: 94 },
    { name: 'Max Super Speciality', city: 'Delhi', accreditation: 'NABH', trustScore: 95 },
    { name: 'Medanta - The Medicity', city: 'Gurgaon', accreditation: 'JCI, NABH', trustScore: 97 },
    { name: 'Manipal Hospitals', city: 'Bengaluru', accreditation: 'NABH', trustScore: 93 },
    { name: 'Gleneagles Global', city: 'Chennai', accreditation: 'JCI, NABH', trustScore: 96 },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Network of World-Class Hospitals</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">We partner only with India's top-tier, internationally accredited healthcare institutions to ensure you receive the highest quality of care.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {hospitals.map((h, i) => (
            <Card key={i} className="p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{h.name}</h3>
              <div className="flex items-center text-sm text-slate-500 mb-4">
                <MapPin className="w-4 h-4 mr-1" /> {h.city}, India
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Accreditation</span>
                  <span className="font-medium">{h.accreditation}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">HealIndia Trust Score</span>
                  <span className="font-medium flex items-center text-green-600">
                    {h.trustScore}/100 <ShieldCheck className="w-4 h-4 ml-1" />
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Intl. Patient Desk</span>
                  <span className="font-medium flex items-center text-green-600">
                    Yes <CheckCircle2 className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => router.push('/onboarding')}>
                Check Match & Prices
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Don't know which hospital to choose?</h2>
          <p className="text-slate-600 mb-6">Let our AI analyze your medical records and recommend the best hospitals based on your specific condition, budget, and location preferences.</p>
          <Button size="lg" className="bg-primary shadow-lg" onClick={() => router.push('/onboarding')}>
            Use AI Hospital Match <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
