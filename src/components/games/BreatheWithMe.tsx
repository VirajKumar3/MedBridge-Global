"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wind, Play, Square, Activity } from "lucide-react";

type Mode = "Calm" | "Focus" | "Sleep";
type Phase = "Inhale" | "Hold" | "Exhale" | "Idle";

const MODES = {
  Calm: { inhale: 4, hold: 2, exhale: 6 },
  Focus: { inhale: 4, hold: 4, exhale: 4 },
  Sleep: { inhale: 4, hold: 7, exhale: 8 },
};

export function BreatheWithMe() {
  const [mode, setMode] = useState<Mode>("Calm");
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("Idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive || phase === "Idle") return;

    const timings = MODES[mode];

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (phase === "Inhale") {
            setPhase("Hold");
            return timings.hold;
          } else if (phase === "Hold") {
            setPhase("Exhale");
            return timings.exhale;
          } else if (phase === "Exhale") {
            setCycles((c) => c + 1);
            setPhase("Inhale");
            return timings.inhale;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase, mode]);

  const getDuration = () => {
    if (phase === "Inhale") return MODES[mode].inhale;
    if (phase === "Hold") return MODES[mode].hold;
    if (phase === "Exhale") return MODES[mode].exhale;
    return 1;
  };

  const getPhaseText = () => {
    if (phase === "Idle") return "Ready to relax?";
    if (phase === "Inhale") return "Breathe In";
    if (phase === "Hold") return "Hold";
    if (phase === "Exhale") return "Breathe Out";
  };

  const isComplete = cycles >= 5;

  return (
    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(11,37,69,0.06)] border border-[#EAF4FA] p-8 flex flex-col items-center justify-between max-w-md w-full relative overflow-hidden group hover:border-[#DDF4EF] transition-colors duration-500">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#EAF4FA]/80 to-transparent -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center gap-3 mb-8 w-full">
        <div className="flex items-center gap-2">
          <Wind className="w-5 h-5 text-[#0F9D8A]" />
          <h2 className="text-xl font-medium text-[#0B2545] tracking-tight">Breathe With Me</h2>
        </div>
        
        {/* Stylish Pill Controls */}
        <div className="flex gap-1 bg-[#F5F8FA] p-1 rounded-full border border-[#EAF4FA] shadow-sm">
          {(Object.keys(MODES) as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => {
                if (!isActive) setMode(m);
              }}
              disabled={isActive}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                mode === m
                  ? "bg-[#0B2545] text-white shadow-md"
                  : "text-[#526777] hover:text-[#0B2545] disabled:opacity-40"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Animation Area: Concentric Rings */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-[#DDF4EF]"
          initial={{ scale: 1 }}
          animate={{
            scale: phase === "Inhale" || phase === "Hold" ? 1.2 : 1,
            opacity: phase === "Idle" ? 0.2 : 0.6
          }}
          transition={{ duration: phase === "Idle" ? 1 : getDuration(), ease: "easeInOut" }}
        />
        {/* Middle Ring */}
        <motion.div
          className="absolute inset-4 rounded-full border border-[#0F9D8A]/20 bg-[#EAF4FA]/30"
          initial={{ scale: 1 }}
          animate={{
            scale: phase === "Inhale" || phase === "Hold" ? 1.1 : 1,
            opacity: phase === "Idle" ? 0.4 : 0.8
          }}
          transition={{ duration: phase === "Idle" ? 1 : getDuration(), ease: "easeInOut" }}
        />
        {/* Inner Solid Orb */}
        <motion.div
          className="absolute inset-10 bg-gradient-to-tr from-[#DDF4EF] to-[#EAF4FA] rounded-full shadow-[0_0_40px_rgba(15,157,138,0.15)]"
          initial={{ scale: 1 }}
          animate={{
            scale: phase === "Inhale" || phase === "Hold" ? 1.05 : 1,
            boxShadow: phase === "Inhale" || phase === "Hold" 
              ? "0 0 60px rgba(15,157,138,0.3)" 
              : "0 0 20px rgba(15,157,138,0.1)"
          }}
          transition={{ duration: phase === "Idle" ? 1 : getDuration(), ease: "easeInOut" }}
        />
        
        {/* Text */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-2">
          <motion.p 
            key={phase}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-[#0B2545] tracking-wide"
          >
            {getPhaseText()}
          </motion.p>
          {phase !== "Idle" && (
            <p className="text-[#0F9D8A] font-semibold text-xl mt-1 tracking-tighter">
              {timeLeft}
              <span className="text-sm font-normal ml-1">sec</span>
            </p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-col items-center mt-auto">
        <div className="mb-6 flex items-center gap-2 px-4 py-1.5 bg-[#F5F8FA] rounded-full border border-[#EAF4FA]">
          <Activity className="w-3.5 h-3.5 text-[#0F9D8A]" />
          <span className="text-xs font-semibold text-[#526777] uppercase tracking-wider">Cycles:</span>
          <span className="text-sm font-bold text-[#0B2545]">{cycles}</span>
          {isComplete && <span className="text-[#0F9D8A] ml-2 text-xs font-bold animate-pulse">Great job!</span>}
        </div>

        <button
          onClick={() => {
            if (isActive) {
              setIsActive(false);
              setPhase("Idle");
              setTimeLeft(0);
              setCycles(0);
            } else {
              setIsActive(true);
              setPhase("Inhale");
              setTimeLeft(MODES[mode].inhale);
            }
          }}
          className={`group flex items-center justify-center gap-2 px-8 py-3 w-56 rounded-full font-medium transition-all duration-300 ${
            isActive
              ? "bg-white text-[#0B2545] border border-[#DDE6EC] hover:bg-[#F5F8FA] shadow-sm"
              : "bg-[#0B2545] text-white hover:bg-[#173A61] shadow-[0_4px_20px_rgba(11,37,69,0.15)] hover:shadow-[0_8px_25px_rgba(11,37,69,0.25)] hover:-translate-y-0.5"
          }`}
        >
          {isActive ? (
            <>
              <Square className="w-4 h-4 fill-current opacity-70" /> 
              <span className="tracking-wide">Stop Session</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current opacity-90 group-hover:scale-110 transition-transform" /> 
              <span className="tracking-wide">Start {mode}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
