"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  MapPin, 
  Star, 
  ShieldCheck, 
  Plane, 
  Hotel, 
  Wallet, 
  HeartHandshake,
  CheckCircle2,
  TrendingDown,
  Info,
  Calendar,
  ChevronRight,
  Activity
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Match() {
  const router = useRouter();

  const hospitals = [
    {
      id: "h1",
      name: "Apollo Hospitals",
      city: "Delhi NCR",
      matchScore: 96,
      trustScore: 94,
      specialtyMatch: 98,
      costRange: "₹6.8L – ₹8.2L",
      costNum: 750000,
      accreditation: "JCI, NABH",
      intlDesk: "Available",
      distance: "22 km from Airport",
      availability: "Available in 2 weeks",
      featured: true,
      bestValue: false
    },
    {
      id: "h2",
      name: "Fortis Healthcare",
      city: "Mumbai",
      matchScore: 92,
      trustScore: 95,
      specialtyMatch: 94,
      costRange: "₹7.5L – ₹9.0L",
      costNum: 820000,
      accreditation: "JCI",
      intlDesk: "Available",
      distance: "15 km from Airport",
      availability: "Available next week",
      featured: false,
      bestValue: false
    },
    {
      id: "h3",
      name: "Medanta - The Medicity",
      city: "Gurgaon",
      matchScore: 94,
      trustScore: 97,
      specialtyMatch: 95,
      costRange: "₹6.2L – ₹7.5L",
      costNum: 680000,
      accreditation: "JCI, NABH",
      intlDesk: "Available",
      distance: "18 km from Airport",
      availability: "Available in 3 weeks",
      featured: false,
      bestValue: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Best Hospitals for Your Case</h1>
          <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-900">
              We analyzed your medical profile, cardiology requirements, estimated cost, hospital expertise, location preferences, and international-patient services to bring you these top matches.
            </p>
          </div>
        </div>

        <Tabs defaultValue="recommendations" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="recommendations">Matches</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
            <TabsTrigger value="cost">Journey Cost</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {hospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`relative h-full flex flex-col overflow-hidden transition-all hover:shadow-lg ${hospital.featured ? 'border-primary shadow-md' : 'border-gray-200'}`}>
                    {hospital.featured && (
                      <div className="absolute top-0 inset-x-0 h-1.5 bg-primary"></div>
                    )}
                    {hospital.bestValue && (
                      <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-10">
                        <Star className="w-3 h-3 fill-current" /> BEST VALUE
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="w-3.5 h-3.5 mr-1" /> {hospital.city}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-12 h-12 rounded-full border-4 border-green-100 flex items-center justify-center">
                            <span className="text-sm font-bold text-green-600">{hospital.matchScore}%</span>
                          </div>
                          <span className="text-[10px] font-medium text-gray-500 mt-1">AI MATCH</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6 flex-1">
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
                          <div>
                            <div className="text-gray-500 text-xs">Est. Treatment</div>
                            <div className="font-semibold text-gray-900">{hospital.costRange}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">Trust Score</div>
                            <div className="font-semibold text-gray-900 flex items-center gap-1">
                              {hospital.trustScore}/100 <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">Specialty Match</div>
                            <div className="font-semibold text-gray-900 text-green-600">{hospital.specialtyMatch}%</div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">Intl. Desk</div>
                            <div className="font-semibold text-gray-900">{hospital.intlDesk}</div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 font-normal border border-emerald-100">
                            {hospital.accreditation}
                          </Badge>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 font-normal">
                            {hospital.distance}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 mt-auto">
                        <Button 
                          className="w-full bg-primary hover:bg-primary/90" 
                          onClick={() => router.push(`/dashboard/patient?h=${hospital.id}`)}
                        >
                          Select Hospital
                        </Button>
                        <Button variant="outline" className="w-full">Request Consultation</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compare">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-700 uppercase font-semibold border-b">
                    <tr>
                      <th className="px-6 py-4">Feature</th>
                      {hospitals.map(h => (
                        <th key={h.id} className="px-6 py-4 border-l border-gray-100 min-w-[200px]">
                          {h.bestValue && <Badge className="mb-2 bg-green-500">BEST VALUE</Badge>}
                          <div className="text-lg">{h.name}</div>
                          <div className="text-xs text-gray-500 font-normal mt-1">{h.city}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">AI Match Score</td>
                      {hospitals.map(h => <td key={h.id} className="px-6 py-4 border-l border-gray-100 font-bold text-green-600">{h.matchScore}%</td>)}
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Estimated Cost</td>
                      {hospitals.map(h => <td key={h.id} className="px-6 py-4 border-l border-gray-100 font-semibold">{h.costRange}</td>)}
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Specialty Match</td>
                      {hospitals.map(h => <td key={h.id} className="px-6 py-4 border-l border-gray-100">{h.specialtyMatch}%</td>)}
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Trust Score</td>
                      {hospitals.map(h => <td key={h.id} className="px-6 py-4 border-l border-gray-100 flex items-center gap-1">{h.trustScore}/100 <ShieldCheck className="w-4 h-4 text-green-500" /></td>)}
                    </tr>
                    <tr className="border-b bg-gray-50/50">
                      <td className="px-6 py-4 font-medium">International Support</td>
                      {hospitals.map(h => <td key={h.id} className="px-6 py-4 border-l border-gray-100"><CheckCircle2 className="w-5 h-5 text-green-500" /></td>)}
                    </tr>
                    <tr>
                      <td className="px-6 py-4"></td>
                      {hospitals.map(h => (
                        <td key={h.id} className="px-6 py-4 border-l border-gray-100">
                           <Button className="w-full" onClick={() => router.push(`/dashboard/patient?h=${h.id}`)}>Select</Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cost">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Wallet className="w-6 h-6 text-primary" /> Estimated Complete Journey Cost
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-emerald-50 border border-emerald-200 p-2 rounded-lg text-emerald-700"><Building2 className="w-4 h-4" /></div>
                        <div>
                          <p className="font-medium">Medical Treatment (CABG)</p>
                          <p className="text-xs text-gray-500">Surgeon fees, OT charges</p>
                        </div>
                      </div>
                      <div className="font-semibold">₹5,20,000</div>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-teal-50 border border-teal-200 p-2 rounded-lg text-teal-700"><Hotel className="w-4 h-4" /></div>
                        <div>
                          <p className="font-medium">Hospital Stay</p>
                          <p className="text-xs text-gray-500">7 Days (ICU + Ward)</p>
                        </div>
                      </div>
                      <div className="font-semibold">₹70,000</div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Activity className="w-4 h-4" /></div>
                        <div>
                          <p className="font-medium">Diagnostics & Medicines</p>
                          <p className="text-xs text-gray-500">Pre/post op meds</p>
                        </div>
                      </div>
                      <div className="font-semibold">₹40,000</div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Hotel className="w-4 h-4" /></div>
                        <div>
                          <p className="font-medium">Hotel Accommodation</p>
                          <p className="text-xs text-gray-500">14 Days (For attendant & post-discharge recovery)</p>
                        </div>
                      </div>
                      <div className="font-semibold">₹45,000</div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600"><Plane className="w-4 h-4" /></div>
                        <div>
                          <p className="font-medium">Travel & Transfers</p>
                          <p className="text-xs text-gray-500">Estimated flights (Nigeria-Delhi) + local transport</p>
                        </div>
                      </div>
                      <div className="font-semibold">₹90,000</div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 mt-2">
                      <div className="text-lg font-bold text-gray-900">Estimated Total</div>
                      <div className="text-2xl font-bold text-primary">₹7,65,000</div>
                    </div>
                    <div className="text-right text-xs text-gray-400">~ $9,200 USD</div>
                  </div>
                </Card>
                
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <strong>Illustrative estimate</strong> — final quotation provided by hospital after clinical review. Flight costs vary by booking date.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-green-900">Estimated Savings</h3>
                    <TrendingDown className="text-green-600" />
                  </div>
                  <p className="text-sm text-green-800 mb-6">Compared to equivalent treatment in the US or UK.</p>
                  <div className="text-4xl font-extrabold text-green-700 mb-2">~ 65%</div>
                  <p className="text-sm text-green-700 font-medium border-t border-green-200/50 pt-4">
                    Save approximately ₹18,00,000+ without compromising on world-class clinical quality.
                  </p>
                </Card>

                <Card className="p-6 bg-primary text-primary-foreground">
                  <h3 className="font-bold text-lg mb-2">Ready to proceed?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-6">Select a hospital to initiate your journey, schedule a tele-consultation, and get visa assistance.</p>
                  <Button variant="secondary" className="w-full" onClick={() => router.push('/dashboard/patient')}>
                    Go to Patient Dashboard <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
