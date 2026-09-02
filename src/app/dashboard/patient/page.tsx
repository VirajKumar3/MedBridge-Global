"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Activity, Calendar, FileText, FileCheck, CheckCircle2, MapPin, 
  Plane, Clock, Car, Hotel, Building2, User, Search, MessageSquare, 
  Bell, Upload, ShieldCheck, Thermometer, Pill, ChevronRight
} from "lucide-react";

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("journey");

  // Floating AI Assistant state
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome, John</h1>
              <p className="text-slate-500">Your healthcare journey with Medanta - The Medicity</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full bg-white relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 p-1 h-auto flex flex-wrap gap-1 bg-white border shadow-sm">
              <TabsTrigger value="journey" className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Timeline & Journey</TabsTrigger>
              <TabsTrigger value="documents" className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Visa & Documents</TabsTrigger>
              <TabsTrigger value="travel" className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Travel Planner</TabsTrigger>
              <TabsTrigger value="records" className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Digital Health Record</TabsTrigger>
              <TabsTrigger value="recovery" className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">Recovery Center</TabsTrigger>
            </TabsList>

            {/* JOURNEY TIMELINE */}
            <TabsContent value="journey" className="space-y-6">
              <Card className="glass-panel">
                <CardHeader>
                  <CardTitle className="text-xl">Your Healthcare Journey</CardTitle>
                  <CardDescription>Track every step from initial consultation to full recovery.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-8 space-y-8 before:absolute before:inset-y-0 before:left-[15px] before:w-0.5 before:bg-slate-200">
                    
                    {/* Completed */}
                    <div className="relative">
                      <div className="absolute -left-[35px] w-5 h-5 rounded-full bg-green-500 flex items-center justify-center ring-4 ring-white z-10">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-900">Profile & Records Submitted</h4>
                          <p className="text-sm text-slate-500">You successfully submitted your medical reports.</p>
                        </div>
                        <span className="text-xs text-slate-400">Sep 01</span>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[35px] w-5 h-5 rounded-full bg-green-500 flex items-center justify-center ring-4 ring-white z-10">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-900">AI Case Analysis & Hospital Matching</h4>
                          <p className="text-sm text-slate-500">AI matched you with Medanta Hospital.</p>
                        </div>
                        <span className="text-xs text-slate-400">Sep 02</span>
                      </div>
                    </div>

                    {/* Active */}
                    <div className="relative">
                      <div className="absolute -left-[36px] w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center ring-4 ring-white z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 shadow-sm mt-[-8px]">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-primary">Consultation & Treatment Plan</h4>
                          <Badge variant="outline" className="bg-white">In Progress</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">Medanta hospital has received your file. Awaiting tele-consultation scheduling.</p>
                        <Button size="sm">Message Hospital Facilitator</Button>
                      </div>
                    </div>

                    {/* Pending */}
                    <div className="relative opacity-50">
                      <div className="absolute -left-[35px] w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white z-10"></div>
                      <h4 className="font-semibold text-slate-900">Visa Assistance</h4>
                      <p className="text-sm text-slate-500">Hospital invitation letter pending.</p>
                    </div>

                    <div className="relative opacity-50">
                      <div className="absolute -left-[35px] w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white z-10"></div>
                      <h4 className="font-semibold text-slate-900">Travel to India</h4>
                    </div>
                    
                    <div className="relative opacity-50">
                      <div className="absolute -left-[35px] w-5 h-5 rounded-full bg-slate-200 ring-4 ring-white z-10"></div>
                      <h4 className="font-semibold text-slate-900">Hospital Admission & Treatment</h4>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* DOCUMENTS */}
            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>International Patient Document Center</CardTitle>
                  <CardDescription>Manage your passports, visas, and hospital invitations securely.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl flex items-start gap-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">Patient Passport</h4>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Verified</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Uploaded on Sep 01</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl flex items-start gap-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">Attendant Passport</h4>
                          <Badge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50">Action Required</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Missing document</p>
                        <Button variant="link" size="sm" className="p-0 h-auto mt-2 text-primary">Upload Now</Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl flex items-start gap-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="p-3 bg-slate-100 text-slate-500 rounded-lg"><FileCheck className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-slate-600">Hospital Invitation Letter</h4>
                          <Badge variant="secondary">Pending</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Generated by hospital after confirmation</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-xl flex items-start gap-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="p-3 bg-slate-100 text-slate-500 rounded-lg"><Plane className="w-6 h-6" /></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold text-slate-600">Medical Visa</h4>
                          <Badge variant="secondary">Pending</Badge>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Requires invitation letter first</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TRAVEL PLANNER */}
            <TabsContent value="travel" className="space-y-6">
               <Card>
                <CardHeader>
                  <CardTitle>India Journey Planner</CardTitle>
                  <CardDescription>Your synchronized itinerary for travel, accommodation, and hospital appointments.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50">
                      <div className="p-3 bg-white rounded-full shadow-sm"><Plane className="w-5 h-5 text-slate-400" /></div>
                      <div>
                        <h4 className="font-medium text-slate-600">Flights not booked yet</h4>
                        <p className="text-sm text-slate-500">Wait for hospital confirmation before booking.</p>
                      </div>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-6 pl-6 py-2 space-y-6">
                      <div className="relative">
                        <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                          <Car className="w-3 h-3 text-slate-500" />
                        </div>
                        <div className="text-sm text-slate-500 mb-1">To be scheduled</div>
                        <Card className="p-4 shadow-sm">
                          <h4 className="font-semibold">Airport Pickup</h4>
                          <p className="text-sm text-slate-600">Complimentary transfer to hotel</p>
                        </Card>
                      </div>

                      <div className="relative">
                        <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
                          <Building2 className="w-3 h-3 text-slate-500" />
                        </div>
                        <div className="text-sm text-slate-500 mb-1">To be scheduled</div>
                        <Card className="p-4 shadow-sm">
                          <h4 className="font-semibold">Hospital Pre-Op Consultation</h4>
                          <p className="text-sm text-slate-600">Medanta - The Medicity, Gurgaon</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* RECOVERY CENTER */}
            <TabsContent value="recovery" className="space-y-6">
               <Card>
                <CardHeader>
                  <CardTitle>Recovery Center</CardTitle>
                  <CardDescription>Post-treatment follow-up and monitoring.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                    <Activity className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-600">Not Active Yet</h3>
                    <p className="text-slate-500 mt-2 max-w-sm mx-auto">This dashboard will activate after your treatment to track your vitals, pain levels, and medication adherence.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* DIGITAL HEALTH RECORD */}
            <TabsContent value="records" className="space-y-6">
               <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>My Health Record</CardTitle>
                      <CardDescription>Secure, encrypted repository of your medical files.</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50"><ShieldCheck className="w-3 h-3 mr-1" /> Encrypted</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-600 font-semibold border-b">
                        <tr>
                          <th className="px-4 py-3">Document Name</th>
                          <th className="px-4 py-3">Type</th>
                          <th className="px-4 py-3">Date Added</th>
                          <th className="px-4 py-3">Access</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium flex items-center gap-2"><FileText className="w-4 h-4 text-blue-500" /> Angiography_Report.pdf</td>
                          <td className="px-4 py-3 text-slate-600">Lab Report</td>
                          <td className="px-4 py-3 text-slate-600">Sep 01, 2026</td>
                          <td className="px-4 py-3"><Badge className="bg-green-100 text-green-700 font-normal hover:bg-green-100">Shared with Medanta</Badge></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>

      {/* Floating AI Assistant (HealAI) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <Card className="w-80 h-96 mb-4 shadow-2xl border-primary/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">HealAI</h3>
                  <p className="text-[10px] text-primary-foreground/70">Multilingual Assistant</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/50" onClick={() => setIsChatOpen(false)}>
                ✕
              </Button>
            </div>
            
            <div className="flex-1 bg-slate-50 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border max-w-[85%] text-sm text-slate-700">
                Hi John! I'm HealAI. How can I help with your healthcare journey today? 
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border max-w-[85%] text-sm text-slate-700">
                I can translate documents, explain estimated costs, or check your visa checklist.
              </div>
            </div>

            <div className="p-3 bg-white border-t flex gap-2">
              <Input placeholder="Type a message..." className="flex-1 text-sm h-9" />
              <Button size="icon" className="h-9 w-9 bg-primary"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </Card>
        )}
        
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? '✕' : <MessageSquare className="w-6 h-6" />}
        </Button>
      </div>

    </div>
  );
}
