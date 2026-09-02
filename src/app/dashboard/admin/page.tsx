"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, Globe2, TrendingUp, Users, HeartPulse, 
  Map, ShieldAlert, DollarSign, Activity, FileText, CheckCircle2
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">India Medical Value Travel Intelligence</h1>
              <p className="text-slate-500">Government & Platform Administrator Dashboard</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">Export Report</Button>
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">GOV</div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-8 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Demo Data Notice:</strong> The analytics shown here are for demonstration purposes only and represent simulated MVT (Medical Value Travel) traffic across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Total Intl. Patients (YTD)</p>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">42,850</h3>
                <p className="text-xs text-green-600 flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +18.4% YoY</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Countries Served</p>
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Globe2 className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">74</h3>
                <p className="text-xs text-slate-500 mt-1">Top: Bangladesh, Nigeria, Kenya</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Avg. Treatment Cost</p>
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">~$7,240</h3>
                <p className="text-xs text-slate-500 mt-1">Across all specialties</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Verified Hospitals</p>
                  <div className="p-2 bg-rose-50 text-rose-600 rounded-lg"><HeartPulse className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">342</h3>
                <p className="text-xs text-slate-500 mt-1">JCI / NABH Accredited</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Specialties by Volume</CardTitle>
                <CardDescription>Most requested medical treatments by international patients.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Oncology</span>
                      <span className="text-slate-500">28%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Cardiology (CABG/Valve)</span>
                      <span className="text-slate-500">24%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Orthopedics (Joint Replacement)</span>
                      <span className="text-slate-500">18%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Organ Transplant (Liver/Kidney)</span>
                      <span className="text-slate-500">14%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '14%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Neurology / Spine</span>
                      <span className="text-slate-500">10%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Anomaly & Fraud Detection</CardTitle>
                <CardDescription>Prototype system monitoring quotations and accreditations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white border border-rose-200 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-2 bg-rose-50 text-rose-600 rounded-full shrink-0"><ShieldAlert className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-semibold text-rose-700 text-sm">Price Anomaly Detected</h4>
                      <p className="text-xs text-slate-600 mt-1">Hospital ID: H-4092 quotation for CABG is 45% below national average. Verification recommended to ensure no hidden costs.</p>
                      <Button size="sm" variant="outline" className="mt-2 h-7 text-xs border-rose-200 text-rose-700">Flag for Review</Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white border border-amber-200 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-full shrink-0"><FileText className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-semibold text-amber-700 text-sm">Accreditation Expiry Warning</h4>
                      <p className="text-xs text-slate-600 mt-1">3 hospitals in Chennai region have NABH accreditations expiring within 30 days. Trust scores temporarily frozen.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white border border-green-200 rounded-xl shadow-sm flex items-start gap-4">
                    <div className="p-2 bg-green-50 text-green-600 rounded-full shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-semibold text-green-700 text-sm">System Normal</h4>
                      <p className="text-xs text-slate-600 mt-1">98.4% of all quotations processed today fall within the expected AI confidence intervals.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
