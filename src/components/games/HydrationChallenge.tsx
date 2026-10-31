"use client";

import { useState, useEffect } from "react";
import { Droplets, Trophy, Plus, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HydrationChallenge() {
  const [glasses, setGlasses] = useState(0);
  const [streak, setStreak] = useState(0);
  const [mounted, setMounted] = useState(false);
  const target = 8;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const saved = localStorage.getItem("hydrationData");
      if (saved) {
        try {
          const data = JSON.parse(saved);
          const today = new Date().toDateString();
          if (data.date === today) {
            setGlasses(data.glasses);
            setStreak(data.streak || 0);
          } else {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (data.date === yesterday && data.glasses >= target) {
              setStreak((s) => s + 1);
            } else if (data.date !== today) {
              setStreak(0);
            }
            setGlasses(0);
          }
        } catch {
          console.error("Failed to parse hydration data");
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("hydrationData", JSON.stringify({
        date: new Date().toDateString(),
        glasses,
        streak
      }));
    }
  }, [glasses, streak, mounted]);

  const addGlass = () => {
    if (glasses < target * 2) {
      setGlasses(g => g + 1);
    }
  };

  const progressPercentage = Math.min((glasses / target) * 100, 100);
  const isGoalReached = glasses >= target;

  return (
    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(11,37,69,0.06)] border border-[#EAF4FA] p-8 flex flex-col items-center justify-between max-w-md w-full relative overflow-hidden group hover:border-[#DDF4EF] transition-colors duration-500">
      
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#DDF4EF]/40 to-transparent -z-10" />

      {/* Header */}
      <div className="flex items-center justify-between w-full mb-10">
        <div className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-[#0F9D8A]" />
          <h2 className="text-xl font-medium text-[#0B2545] tracking-tight">Hydration</h2>
        </div>
        
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-colors ${streak > 0 ? 'bg-[#0F9D8A]/10 text-[#0F9D8A]' : 'bg-[#F5F8FA] text-[#526777]'}`}>
          <Trophy className="w-3.5 h-3.5" />
          <span>Streak: {streak}</span>
        </div>
      </div>

      {/* Visual Elegant Droplet */}
      <div className="relative w-48 h-48 flex items-center justify-center mb-10">
        <div className="absolute inset-0 rounded-full border border-[#EAF4FA] shadow-[inset_0_0_20px_rgba(15,157,138,0.05)] bg-[#F8FCFD]" />
        
        <div className="absolute inset-4 rounded-full overflow-hidden">
           {/* The "water" filling up */}
           <motion.div 
             className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F9D8A] to-[#DDF4EF]"
             initial={{ height: "0%" }}
             animate={{ height: `${progressPercentage}%` }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           />
        </div>

        {/* Glossy overlay to make it look like a bubble/drop */}
        <div className="absolute inset-4 rounded-full shadow-[inset_0_10px_20px_rgba(255,255,255,0.8)] border border-white/40" />

        <div className="relative z-10 flex flex-col items-center drop-shadow-sm">
          <span className={`text-4xl font-light ${isGoalReached ? 'text-white' : 'text-[#0B2545]'}`}>
            {glasses}
          </span>
          <span className={`text-xs font-semibold tracking-widest uppercase mt-1 ${isGoalReached ? 'text-white/90' : 'text-[#526777]'}`}>
            Glasses
          </span>
        </div>
      </div>

      {/* Progress & Milestones */}
      <div className="w-full mb-8">
        <div className="flex justify-between text-xs font-semibold text-[#526777] uppercase tracking-wider mb-3">
          <span>Daily Goal</span>
          <span className="text-[#0B2545]">{glasses} / {target}</span>
        </div>
        
        <div className="w-full h-2.5 bg-[#F5F8FA] rounded-full overflow-hidden shadow-inner mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#DDF4EF] to-[#0F9D8A] rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]" />
          </motion.div>
        </div>

        {/* Milestone dots */}
        <div className="flex justify-between w-full px-1">
          {Array.from({ length: target }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${i < glasses ? 'bg-[#0F9D8A]' : 'bg-[#EAF4FA]'}`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-col items-center mt-auto">
        <button
          onClick={addGlass}
          className="group flex items-center justify-center gap-2 px-8 py-3 w-56 rounded-full bg-[#0B2545] text-white font-medium hover:bg-[#173A61] transition-all duration-300 shadow-[0_4px_20px_rgba(11,37,69,0.15)] hover:shadow-[0_8px_25px_rgba(11,37,69,0.25)] hover:-translate-y-0.5"
        >
          {isGoalReached ? (
            <><CheckCircle2 className="w-4 h-4 text-[#0F9D8A]" /> Log Extra</>
          ) : (
            <><Plus className="w-4 h-4 opacity-90 group-hover:scale-110 transition-transform" /> Add Glass</>
          )}
        </button>
      </div>
    </div>
  );
}
