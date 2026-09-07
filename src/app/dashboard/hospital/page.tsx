"use client";


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, UserPlus, FileText, CheckCircle2, TrendingUp, DollarSign,
  Search, Bell, Activity, Stethoscope, Clock, Video, Building2,
  Calendar, FileCheck, ChevronRight, X
} from "lucide-react";

export default function HospitalDashboard() {
  const [activeTab, setActiveTab] = useState("leads");

  // Selected lead for review drawer/modal
  const [selectedCase, setSelectedCase] = useState<{
    id: string;
    patient: string;
    country: string;
    specialty: string;
    treatment: string;
    matchScore: number;
    urgency: string;
    status: string;
  } | null>(null);

  const [quoteGenerated, setQuoteGenerated] = useState(false);

  const leads = [
    { id: "CASE-101", patient: "John Doe", country: "Nigeria", specialty: "Cardiology", treatment: "CABG Bypass", matchScore: 96, urgency: "High Priority", status: "Pending Review" },
    { id: "CASE-102", patient: "Fatima Al-Mansoor", country: "UAE", specialty: "Orthopedics", treatment: "Bilateral Robotic Knee Arthroplasty", matchScore: 94, urgency: "Standard", status: "Quotation Sent" },
    { id: "CASE-103", patient: "Abdul Rahim", country: "Bangladesh", specialty: "Oncology", treatment: "Targeted Chemotherapy & SBRT", matchScore: 91, urgency: "Urgent", status: "Doctor Assigned" },
    { id: "CASE-104", patient: "Sarah Jenkins", country: "United Kingdom", specialty: "Bariatric Surgery", treatment: "Laparoscopic Gastric Sleeve", matchScore: 93, urgency: "Standard", status: "Confirmed" }
  ];

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900">Hospital Portal 🏥</h1>
                <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 text-xs">JCI & NABH Accredited</Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                <strong>Medanta - The Medicity, Gurgaon</strong> | International Patient Facilitation Desk
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full bg-white relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold text-xs">
                  MD
                </div>
                <div className="text-left text-xs">
                  <span className="font-bold block leading-none">Intl Desk Admin</span>
                  <span className="text-[10px] text-slate-400">Desk Supervisor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 21: Exact 5 Dashboard Metric KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">New Patient Requests</span>
                <div className="p-2 bg-emerald-50 text-emerald-700 rounded-xl"><UserPlus className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">24</h3>
              <p className="text-[11px] text-emerald-700 font-medium mt-1">Incoming AI matches</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Pending Review</span>
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><Clock className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-amber-600">12</h3>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Awaiting specialist notes</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Consultations</span>
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><Video className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-purple-600">08</h3>
              <p className="text-[11px] text-purple-600 font-medium mt-1">Scheduled this week</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Confirmed Patients</span>
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><CheckCircle2 className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-700">15</h3>
              <p className="text-[11px] text-emerald-600 font-medium mt-1">Visas issued & flying in</p>
            </Card>

            <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-2xs col-span-2 sm:col-span-1">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-slate-500">Completed Treatments</span>
                <div className="p-2 bg-slate-100 text-slate-700 rounded-xl"><Activity className="w-4 h-4" /></div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900">43</h3>
              <p className="text-[11px] text-emerald-600 font-medium mt-1">100% discharge clearance</p>
            </Card>

          </div>

          {/* Leads & Operational Modules */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 p-1 h-auto flex flex-wrap gap-1 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <TabsTrigger value="leads" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Patient Requests & Cases
              </TabsTrigger>
              <TabsTrigger value="doctors" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Specialist Allocations
              </TabsTrigger>
              <TabsTrigger value="packages" className="rounded-xl px-4 py-2 text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-white">
                Treatment Packages & Pricing
              </TabsTrigger>
            </TabsList>

            {/* PATIENT LEADS TABLE */}
            <TabsContent value="leads" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Incoming International Patient Requests</h3>
                    <p className="text-xs text-slate-500">Cases matched to Medanta via MedBridge-Global Care Match Engine</p>
                  </div>
                  <Badge variant="outline" className="text-primary text-xs">24 Total Active</Badge>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase">
                        <th className="p-3">Case ID</th>
                        <th className="p-3">Patient</th>
                        <th className="p-3">Country</th>
                        <th className="p-3">Procedure</th>
                        <th className="p-3">AI Match</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {leads.map((l) => (
                        <tr key={l.id} className="hover:bg-slate-50/60 transition-colors">
                          <td className="p-3 font-mono font-bold text-primary">{l.id}</td>
                          <td className="p-3 font-bold text-slate-900">{l.patient}</td>
                          <td className="p-3 text-slate-600">{l.country}</td>
                          <td className="p-3 font-medium text-slate-800">{l.treatment}</td>
                          <td className="p-3">
                            <span className="font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                              {l.matchScore}%
                            </span>
                          </td>
                          <td className="p-3">
                            <Badge variant="secondary" className="text-[10px] bg-amber-50 text-amber-800 border-amber-200">
                              {l.status}
                            </Badge>
                          </td>
                          <td className="p-3 text-right">
                            <Button 
                              size="sm" 
                              onClick={() => {
                                setSelectedCase(l);
                                setQuoteGenerated(false);
                              }}
                              className="bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-semibold"
                            >
                              Review Dossier
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>

            {/* DOCTORS ASSIGNMENT TAB */}
            <TabsContent value="doctors" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Hospital Medical Faculty Availability</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900">Dr. Naresh Trehan</h4>
                    <p className="text-primary font-medium">Chief Cardiac Surgeon</p>
                    <p className="text-slate-500">Available: Mon / Wed / Fri • 4 Pending Cases</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900">Dr. Ashok Rajgopal</h4>
                    <p className="text-primary font-medium">Head of Orthopedics & Joint Care</p>
                    <p className="text-slate-500">Available: Tue / Thu • 3 Pending Cases</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <h4 className="font-bold text-slate-900">Dr. Arvinder Singh Soin</h4>
                    <p className="text-primary font-medium">Chairman, Liver Transplantation</p>
                    <p className="text-slate-500">Available: Mon / Wed • 2 Pending Cases</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* PACKAGES TAB */}
            <TabsContent value="packages" className="space-y-6">
              <Card className="p-6 bg-white border-slate-200 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Active International Treatment Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">Off-Pump Beating Heart CABG Package</h4>
                      <p className="text-slate-500">6 Days Inpatient (2 ICU + 4 Ward) + Meds</p>
                    </div>
                    <span className="font-extrabold text-emerald-700 text-sm">$6,500 USD (₹5,20,000)</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-900">Robotic Bilateral TKR Package</h4>
                      <p className="text-slate-500">5 Days Inpatient + Stryker Implants</p>
                    </div>
                    <span className="font-extrabold text-emerald-700 text-sm">$7,800 USD (₹6,40,000)</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

          </Tabs>

          {/* Case Review & Quotation Modal */}
          {selectedCase && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in zoom-in-95">
                <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Patient Case Dossier ({selectedCase.id})</h3>
                    <p className="text-xs text-slate-500">{selectedCase.patient} • {selectedCase.country}</p>
                  </div>
                  <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-slate-600">✕</button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-400 text-[10px] block">Specialty Needed</span>
                      <span className="font-bold text-slate-800">{selectedCase.specialty}</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-400 text-[10px] block">AI Match Score</span>
                      <span className="font-bold text-emerald-600">{selectedCase.matchScore}% Concurrence</span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                    <span className="text-emerald-900 font-bold block mb-1">Assigned Specialist Surgeon:</span>
                    <select className="w-full bg-white border border-slate-200 rounded-lg p-2 text-xs">
                      <option>Dr. Naresh Trehan (Cardiac Surgery)</option>
                      <option>Dr. Ashok Rajgopal (Orthopedics)</option>
                      <option>Dr. Arvinder Singh Soin (Transplant)</option>
                    </select>
                  </div>

                  {!quoteGenerated ? (
                    <div className="space-y-2">
                      <label className="font-bold text-slate-700 block">Package Quotation (USD)</label>
                      <Input defaultValue="$6,500" className="bg-slate-50 py-5 rounded-xl text-xs font-bold" />
                      <Button 
                        onClick={() => setQuoteGenerated(true)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold py-5 mt-2"
                      >
                        Generate & Dispatch Official Package Quotation
                      </Button>
                    </div>
                  ) : (
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-center space-y-2">
                      <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-600" />
                      <p className="font-bold">Quotation Dispatched to Coordinator!</p>
                      <p className="text-[11px] text-emerald-700">
                        Official hospital quotation has been generated with Medanta's seal and forwarded to the patient portal and embassy visa cell.
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end pt-2">
                  <Button variant="outline" onClick={() => setSelectedCase(null)} className="rounded-xl text-xs">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
