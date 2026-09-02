"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, UserPlus, FileText, CheckCircle2, TrendingUp, DollarSign,
  Search, Bell, Activity, Stethoscope
} from "lucide-react";

export default function HospitalDashboard() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        <div className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Hospital Portal</h1>
              <p className="text-slate-500">Medanta - The Medicity, Gurgaon | International Patient Desk</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full bg-white relative">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">HA</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Active Intl. Patients</p>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">124</h3>
                <p className="text-xs text-green-600 flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +12% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">New AI Matches</p>
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><UserPlus className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">18</h3>
                <p className="text-xs text-slate-500 mt-1">Pending review</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Pending Quotes</p>
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><FileText className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">7</h3>
                <p className="text-xs text-slate-500 mt-1">Requires immediate attention</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-slate-500">Upcoming Admissions</p>
                  <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">12</h3>
                <p className="text-xs text-slate-500 mt-1">Next 7 days</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="leads" className="w-full">
            <TabsList className="mb-6 bg-white border shadow-sm">
              <TabsTrigger value="leads">Patient Leads & Matches</TabsTrigger>
              <TabsTrigger value="active">Active Cases</TabsTrigger>
              <TabsTrigger value="analytics">Revenue & Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="leads">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Patient Matches</CardTitle>
                  <CardDescription>Patients matched to your hospital by HealIndia AI.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-slate-50 text-slate-600 font-semibold border-b">
                        <tr>
                          <th className="px-4 py-3">Patient</th>
                          <th className="px-4 py-3">Country</th>
                          <th className="px-4 py-3">Specialty</th>
                          <th className="px-4 py-3">AI Match Score</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-4 font-medium text-slate-900">John Doe</td>
                          <td className="px-4 py-4 text-slate-600">Nigeria</td>
                          <td className="px-4 py-4"><Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">Cardiology</Badge></td>
                          <td className="px-4 py-4 font-bold text-green-600">96%</td>
                          <td className="px-4 py-4"><Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100">Review Pending</Badge></td>
                          <td className="px-4 py-4">
                            <Button size="sm">View Case</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-4 font-medium text-slate-900">Sarah Smith</td>
                          <td className="px-4 py-4 text-slate-600">UK</td>
                          <td className="px-4 py-4"><Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">Oncology</Badge></td>
                          <td className="px-4 py-4 font-bold text-green-600">92%</td>
                          <td className="px-4 py-4"><Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">Quotation Sent</Badge></td>
                          <td className="px-4 py-4">
                            <Button size="sm" variant="outline">Update Quote</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="active">
              <Card>
                <CardContent className="p-10 text-center text-slate-500">
                  <Activity className="w-10 h-10 mx-auto mb-4 text-slate-300" />
                  <p>Active cases view is under development in this prototype.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardContent className="p-10 text-center text-slate-500">
                  <DollarSign className="w-10 h-10 mx-auto mb-4 text-slate-300" />
                  <p>Analytics module is under development in this prototype.</p>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

        </div>
      </div>
    </div>
  );
}
