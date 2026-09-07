"use client";


import { useState } from "react";
import { INITIAL_COORDINATOR_LEADS, CoordinatorLead } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  Search, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Mail, 
  Building2, 
  Plane, 
  FileText, 
  AlertCircle,
  Filter,
  MessageSquare,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function CoordinatorDashboard() {
  const [leads, setLeads] = useState<CoordinatorLead[]>(INITIAL_COORDINATOR_LEADS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<CoordinatorLead | null>(leads[0]);

  // Section 22: Complete 11-Stage Patient Pipeline
  const pipelineStages: CoordinatorLead['stage'][] = [
    'NEW LEAD',
    'CONTACTED',
    'DOCUMENTS RECEIVED',
    'AI PROCESSED',
    'HOSPITAL REVIEW',
    'PROPOSAL SENT',
    'PATIENT CONFIRMED',
    'TRAVEL PLANNING',
    'TREATMENT',
    'FOLLOW-UP',
    'COMPLETED'
  ];

  const filteredLeads = leads.filter(l => 
    l.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.treatment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const moveStage = (leadId: string, newStage: CoordinatorLead['stage']) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, stage: newStage, lastUpdate: "Today" } : l));
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(prev => prev ? { ...prev, stage: newStage, lastUpdate: "Today" } : null);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4.5rem)] w-full flex-col bg-slate-50">
      
      <div className="flex flex-1">
        <div className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-extrabold text-slate-900">Care Coordinator CRM 💼</h1>
                <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs font-semibold">
                  Section 22: Patient Pipeline Hub
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Manage global patient leads, track document review states, and coordinate hospital admissions.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold text-xs">
                  MC
                </div>
                <div className="text-left text-xs">
                  <span className="font-bold block leading-none">Senior Coordinator</span>
                  <span className="text-[10px] text-slate-400">Intl Desk Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pipeline Horizontal Stepper View */}
          <Card className="p-5 bg-white border-slate-200 rounded-3xl shadow-sm space-y-3 overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Full 11-Stage Case Coordination Pipeline
              </span>
              <span className="text-xs text-indigo-600 font-semibold">{leads.length} Active International Leads</span>
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
              {pipelineStages.map((stage, idx) => {
                const count = leads.filter(l => l.stage === stage).length;
                return (
                  <div 
                    key={stage}
                    className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 shrink-0 min-w-[125px] text-xs flex flex-col justify-between"
                  >
                    <div className="text-[10px] text-slate-400 font-mono">Stage {idx + 1}</div>
                    <span className="font-bold text-slate-800 line-clamp-1 mt-0.5">{stage}</span>
                    <Badge variant="outline" className="mt-2 text-[10px] self-start bg-white font-bold">
                      {count} {count === 1 ? 'case' : 'cases'}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* CRM Main Workspace: Leads List on Left, Case Details & Actions on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Leads List */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Search patient leads by name or country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-xs bg-white rounded-2xl py-5 border-slate-200"
                />
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {filteredLeads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  return (
                    <Card
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all border ${isSelected ? 'border-indigo-600 ring-2 ring-indigo-500/20 bg-indigo-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-mono text-xs font-bold text-primary">{lead.id}</span>
                        <Badge variant="secondary" className="text-[10px] bg-indigo-50 text-indigo-700">
                          {lead.stage}
                        </Badge>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm">{lead.patientName}</h4>
                      <p className="text-xs text-slate-500">{lead.country} • {lead.treatment}</p>

                      <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-400">
                        <span>{lead.assignedHospital.split(" - ")[0]}</span>
                        <span className="font-bold text-emerald-600">${lead.budgetUSD} USD</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Lead Dossier & Pipeline Controls */}
            {selectedLead && (
              <div className="lg:col-span-7">
                <Card className="p-6 md:p-8 bg-white border-slate-200 rounded-3xl shadow-lg space-y-6">
                  
                  {/* Lead Header */}
                  <div className="flex flex-wrap justify-between items-start gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400 font-bold">{selectedLead.id}</span>
                        <Badge className="bg-primary text-white text-[10px] font-bold">{selectedLead.urgency}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1">{selectedLead.patientName}</h3>
                      <p className="text-xs text-slate-500">{selectedLead.country} • Registered: {selectedLead.createdDate}</p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-400">Current Pipeline Stage</span>
                      <div className="text-sm font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200 mt-1">
                        {selectedLead.stage}
                      </div>
                    </div>
                  </div>

                  {/* Stage Mover Selector */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Advance CRM Pipeline Stage:
                    </label>
                    <div className="flex gap-2">
                      <select 
                        value={selectedLead.stage} 
                        onChange={(e) => moveStage(selectedLead.id, e.target.value as CoordinatorLead['stage'])}
                        className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 font-semibold"
                      >
                        {pipelineStages.map(stg => (
                          <option key={stg} value={stg}>{stg}</option>
                        ))}
                      </select>
                      <Button 
                        size="sm"
                        onClick={() => {
                          const currIdx = pipelineStages.indexOf(selectedLead.stage);
                          if (currIdx < pipelineStages.length - 1) {
                            moveStage(selectedLead.id, pipelineStages[currIdx + 1]);
                          }
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shrink-0"
                      >
                        Next Stage <ChevronRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Patient Clinical & Contact Details */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-400 text-[10px] block">Contact</span>
                      <p className="font-semibold text-slate-800 mt-0.5">{selectedLead.phone}</p>
                      <p className="text-slate-500">{selectedLead.email}</p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-slate-400 text-[10px] block">Assigned Provider</span>
                      <p className="font-semibold text-slate-800 mt-0.5">{selectedLead.assignedHospital}</p>
                      <p className="text-slate-500">{selectedLead.assignedDoctor}</p>
                    </div>
                  </div>

                  {/* Coordinator Clinical Notes */}
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-slate-700 block">Case Coordination Notes:</span>
                    <p className="text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 leading-relaxed">
                      {selectedLead.notes}
                    </p>
                  </div>

                  {/* Pending Action Tasks */}
                  <div className="space-y-2 text-xs">
                    <span className="font-bold text-slate-700 block">Action Item Checklist:</span>
                    {selectedLead.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100 text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coordinator Fast Actions */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                    <Button variant="outline" size="sm" className="rounded-xl text-xs flex items-center justify-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-primary" /> WhatsApp Lead
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl text-xs flex items-center justify-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-primary" /> Send Email
                    </Button>
                    <Button size="sm" className="bg-primary text-white rounded-xl text-xs flex items-center justify-center gap-1">
                      <Plane className="w-3.5 h-3.5" /> Dispatch Travel
                    </Button>
                  </div>

                </Card>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
