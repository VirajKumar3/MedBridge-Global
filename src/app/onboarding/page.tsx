"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, ChevronRight, ChevronLeft, CheckCircle2, User, Globe, FileText, Activity, MapPin, Plane, Wallet, BrainCircuit } from "lucide-react";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, title: "Country", icon: Globe },
  { id: 2, title: "Personal", icon: User },
  { id: 3, title: "Medical", icon: Activity },
  { id: 4, title: "Documents", icon: FileText },
  { id: 5, title: "Preferences", icon: MapPin },
  { id: 6, title: "Budget", icon: Wallet },
  { id: 7, title: "Travel", icon: Plane },
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleFinish = () => {
    // Navigate to the AI Analysis loading screen
    router.push("/analysis");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Health Profile</h1>
          <p className="text-gray-500">Let us understand your needs to find the best healthcare options in India.</p>
        </div>

        {/* Stepper Progress */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10 rounded-full"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step) => {
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            const Icon = step.icon;
            
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    isActive ? "border-primary bg-primary text-white shadow-lg shadow-primary/20" :
                    isCompleted ? "border-primary bg-white text-primary" :
                    "border-gray-300 bg-white text-gray-400"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <span className={`text-xs font-medium hidden md:block ${isActive ? 'text-primary' : isCompleted ? 'text-gray-700' : 'text-gray-400'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        <Card className="p-8 shadow-xl shadow-gray-200/50 border-white glass-panel relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Where are you from?</h2>
                    <p className="text-sm text-gray-500">This helps us understand visa requirements.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Residence</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="bd">Bangladesh</SelectItem>
                        <SelectItem value="np">Nepal</SelectItem>
                        <SelectItem value="ke">Kenya</SelectItem>
                        <SelectItem value="ae">United Arab Emirates</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Personal Information</h2>
                    <p className="text-sm text-gray-500">Tell us a bit about yourself.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="52" defaultValue="52" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select defaultValue="male">
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Medical Condition</h2>
                    <p className="text-sm text-gray-500">Describe your symptoms or diagnosis.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="condition">Primary Concern / Specialty</Label>
                      <Select defaultValue="cardiology">
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="oncology">Oncology</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Describe your condition</Label>
                      <Textarea 
                        id="description" 
                        placeholder="I have been diagnosed with..." 
                        className="h-32"
                        defaultValue="Diagnosed with severe coronary artery disease. Experiencing chest pain. Local doctors suggested CABG."
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Medical Documents</h2>
                    <p className="text-sm text-gray-500">Upload reports for AI analysis (MRI, CT, Blood tests, Prescriptions).</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-gray-50/50 hover:bg-emerald-50/50 hover:border-emerald-500 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Click to upload or drag and drop</h3>
                    <p className="text-sm text-gray-500 mb-4">PDF, JPG, PNG (Max 10MB)</p>
                    <Button variant="outline" size="sm">Select Files</Button>
                  </div>
                  {/* Mock uploaded file */}
                  <div className="flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Angiography_Report_JohnDoe.pdf</p>
                      <p className="text-xs text-gray-500">2.4 MB</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">City Preferences</h2>
                    <p className="text-sm text-gray-500">Where would you prefer to get treated in India?</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {['Delhi NCR', 'Mumbai', 'Chennai', 'Bengaluru', 'Hyderabad', 'Kolkata'].map((city) => (
                      <div key={city} className={`p-4 border rounded-xl cursor-pointer transition-all ${city === 'Delhi NCR' ? 'border-primary bg-primary/5 shadow-sm' : 'hover:border-gray-400'}`}>
                        <div className="font-medium">{city}</div>
                      </div>
                    ))}
                    <div className="p-4 border rounded-xl cursor-pointer transition-all hover:border-gray-400 col-span-2 text-center">
                      <div className="font-medium">No Preference - Show me the best options</div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Estimated Budget</h2>
                    <p className="text-sm text-gray-500">This helps us find hospitals that match your financial comfort.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Treatment Budget (in USD)</Label>
                      <Input type="number" placeholder="e.g. 10000" defaultValue="12000" className="text-lg py-6" />
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> We will show you transparent, itemized estimates. Final costs are determined by the hospital after clinical evaluation.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 7 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">Travel Requirements</h2>
                    <p className="text-sm text-gray-500">How many people will travel with you?</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Number of Attendants</Label>
                      <Select defaultValue="1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0 (Traveling alone)</SelectItem>
                          <SelectItem value="1">1 person</SelectItem>
                          <SelectItem value="2">2 people</SelectItem>
                          <SelectItem value="more">More than 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 mt-6">
                      <Label>Do you need Medical Visa assistance?</Label>
                      <div className="flex gap-4">
                        <div className="flex-1 p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer text-center font-medium">Yes, please help</div>
                        <div className="flex-1 p-4 border rounded-xl cursor-pointer text-center font-medium hover:border-gray-400">No, I will manage</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 pt-6 border-t flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            {currentStep < steps.length ? (
              <Button onClick={nextStep}>
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleFinish} className="bg-primary shadow-lg shadow-primary/20">
                Analyze My Case <BrainCircuit className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
