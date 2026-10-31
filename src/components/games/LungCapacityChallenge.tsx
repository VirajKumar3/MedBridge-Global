"use client";

import { useState, useRef, useEffect } from "react";
import { Wind, Activity } from "lucide-react";
import { motion } from "framer-motion";

export function LungCapacityChallenge() {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reps, setReps] = useState(0);
  const [feedback, setFeedback] = useState("Hold button to inhale deeply");
  
  const frameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateProgress = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;

      setProgress((prev) => {
        let newProgress = prev;
        if (isHolding) {
          // Fill over 4 seconds
          newProgress = Math.min(100, prev + (deltaTime / 40)); 
          if (newProgress === 100 && prev < 100) {
            setFeedback("Lungs full! Release to exhale.");
            setReps(r => r + 1);
          } else if (newProgress < 100) {
            setFeedback("Keep inhaling...");
          }
        } else {
          // Empty over 4 seconds
          newProgress = Math.max(0, prev - (deltaTime / 40));
          if (newProgress === 0 && prev > 0) {
            setFeedback("Ready for the next breath.");
          } else if (newProgress > 0 && newProgress < 100) {
            setFeedback("Exhaling smoothly...");
          }
        }
        return newProgress;
      });

      frameRef.current = requestAnimationFrame(updateProgress);
    };

    frameRef.current = requestAnimationFrame(updateProgress);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isHolding]);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault(); // prevent text selection
    setIsHolding(true);
  };
  
  const handlePointerUp = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsHolding(false);
  };

  return (
    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(11,37,69,0.06)] border border-[#EAF4FA] p-8 flex flex-col items-center justify-between max-w-md w-full relative overflow-hidden group hover:border-[#DDF4EF] transition-colors duration-500 select-none touch-none">
      
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#EAF4FA] rounded-full blur-[80px] opacity-60 -z-10 pointer-events-none" />

      <div className="flex items-center gap-2 mb-6 w-full">
        <Wind className="w-5 h-5 text-[#0F9D8A]" />
        <h2 className="text-xl font-medium text-[#0B2545] tracking-tight">Lung Practice</h2>
      </div>

      <div className="flex justify-between items-center w-full bg-[#F5F8FA] px-5 py-2.5 rounded-full shadow-inner mb-10 border border-[#EAF4FA]">
        <span className="text-xs font-semibold tracking-widest text-[#526777] uppercase">Deep Breaths</span>
        <span className="text-sm font-bold text-[#0B2545]">{reps}</span>
      </div>

      <div className="relative w-56 h-56 flex items-center justify-center mb-6">
        {/* Lung bounding circle */}
        <div className="absolute inset-0 rounded-full border border-[#DDF4EF] flex items-center justify-center overflow-hidden bg-[#F8FCFD]">
           <motion.div 
             className="absolute bottom-0 w-full bg-gradient-to-t from-[#0F9D8A] to-[#DDF4EF]"
             style={{ height: `${progress}%` }}
           />
        </div>
        
        {/* Glossy overlay */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_10px_20px_rgba(255,255,255,0.8)] border border-white/40 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center drop-shadow-sm pointer-events-none">
           <span className="text-5xl mb-2">🫁</span>
           <span className={`text-2xl font-bold transition-colors ${progress > 55 ? 'text-white' : 'text-[#0B2545]'}`}>
             {Math.round(progress)}%
           </span>
        </div>
      </div>

      <div className="text-sm font-medium text-[#0F9D8A] mb-4 h-6 flex items-center justify-center">
        {feedback}
      </div>

      <div className="w-full flex flex-col items-center mt-auto">
        <button
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onContextMenu={(e) => e.preventDefault()}
          className={`group flex items-center justify-center gap-2 px-8 py-3 w-56 rounded-full text-white font-medium transition-all duration-300 shadow-[0_4px_20px_rgba(15,157,138,0.25)] select-none touch-none ${
            isHolding ? "bg-[#0B7F70] scale-95 shadow-sm" : "bg-[#0F9D8A] hover:bg-[#0B7F70] hover:shadow-[0_8px_25px_rgba(15,157,138,0.35)] hover:-translate-y-0.5"
          }`}
        >
           <Activity className="w-4 h-4 opacity-90" />
           {isHolding ? "Inhaling..." : "Hold to Inhale"}
        </button>
      </div>
    </div>
  );
}
