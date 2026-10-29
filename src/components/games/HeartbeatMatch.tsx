"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { HeartPulse, Target, RefreshCcw, Play, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LEVELS = [
  { level: 1, name: "Slow & Steady", sequence: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000] },
  { level: 2, name: "Normal Rhythm", sequence: [750, 750, 750, 750, 750, 750, 750, 750, 750, 750] },
  { level: 3, name: "Elevated Rate", sequence: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500] },
  { level: 4, name: "Irregular Pattern", sequence: [800, 400, 800, 400, 600, 1000, 400, 800, 600, 800] },
];

export function HeartbeatMatch() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [pulse, setPulse] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sequenceIndex = useRef(0);
  const expectedTapTime = useRef(0);
  const hitsInLevel = useRef(0);

  const startPulseSequence = useCallback((level: number) => {
    function step() {
      setPulse(true);
      setTimeout(() => setPulse(false), 120);

      const seq = LEVELS[level].sequence;
      sequenceIndex.current += 1;

      if (sequenceIndex.current < seq.length) {
        const nextDelay = seq[sequenceIndex.current];
        expectedTapTime.current = Date.now() + nextDelay;
        timeoutRef.current = setTimeout(step, nextDelay);
      } else {
        setTimeout(() => {
          setIsPlaying(false);
          const passMark = seq.length * 0.6;
          if (hitsInLevel.current >= passMark) {
            if (level < LEVELS.length - 1) {
              setFeedback("Level Cleared! 🎉");
              setCurrentLevel((c) => c + 1);
            } else {
              setFeedback("You beat all levels! 🏆");
            }
          } else {
            setFeedback("Try again!");
          }
        }, 1000);
      }
    }

    step();
  }, []);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setFeedback("Get Ready...");
    hitsInLevel.current = 0;
    sequenceIndex.current = 0;
    
    expectedTapTime.current = Date.now() + 2000;
    timeoutRef.current = setTimeout(() => {
      setFeedback("");
      startPulseSequence(currentLevel);
    }, 2000);
  };

  const stopGame = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsPlaying(false);
    setFeedback("");
    setScore(0);
  };

  const handleTap = () => {
    if (!isPlaying) return;
    
    const now = Date.now();
    const diff = Math.abs(now - expectedTapTime.current);
    
    if (diff > 1000 && sequenceIndex.current === 0) return;

    if (diff < 150) {
      setScore(s => s + 10);
      setFeedback("Perfect!");
      hitsInLevel.current += 1;
    } else if (diff < 350) {
      setScore(s => s + 5);
      setFeedback("Good");
      hitsInLevel.current += 1;
    } else {
      setFeedback("Miss");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const levelData = LEVELS[currentLevel];

  // Helper to generate a generic ECG path
  const ecgPath = "M0 50 L20 50 L25 30 L35 80 L45 20 L55 50 L100 50";

  return (
    <div className="bg-white rounded-[40px] shadow-[0_8px_30px_rgba(11,37,69,0.06)] border border-[#EAF4FA] p-8 flex flex-col items-center justify-between max-w-md w-full relative overflow-hidden group hover:border-[#DDF4EF] transition-colors duration-500">
      
      {/* Decorative gradient */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-100 rounded-full blur-[80px] opacity-40 -z-10 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-6 w-full">
        <Activity className="w-5 h-5 text-rose-500" />
        <h2 className="text-xl font-medium text-[#0B2545] tracking-tight">Heartbeat Match</h2>
      </div>

      {/* Game UI Strip */}
      <div className="flex justify-between items-center w-full bg-[#0B2545] px-5 py-2.5 rounded-full shadow-inner mb-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0F9D8A] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-white uppercase">Lvl {currentLevel + 1}</span>
        </div>
        <span className="text-sm font-bold text-white tracking-wide">
          <span className="text-[#526777] text-xs font-normal mr-1">Score:</span>
          {score.toString().padStart(3, '0')}
        </span>
      </div>

      {/* Heartbeat Visualization */}
      <div className="relative w-56 h-56 flex items-center justify-center mb-8">
        
        {/* Subtle ECG Ring */}
        <div className="absolute inset-0 rounded-full border border-[#EAF4FA] flex items-center justify-center overflow-hidden">
          <svg className="absolute w-full h-full text-rose-100 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d={ecgPath} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <path d={ecgPath} fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" transform="translate(100, 0)" />
          </svg>
        </div>

        {/* Glowing Pulse Rings */}
        <motion.div
          animate={{
            scale: pulse ? 1.8 : 1,
            opacity: pulse ? 0 : 0.4
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-24 h-24 bg-rose-200 rounded-full"
        />
        <motion.div
          animate={{
            scale: pulse ? 1.4 : 1,
            opacity: pulse ? 0 : 0.6
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute w-24 h-24 bg-rose-300 rounded-full"
        />

        {/* Core Heart */}
        <motion.div
          animate={{
            scale: pulse ? 1.2 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 bg-gradient-to-tr from-rose-500 to-rose-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.4)] border-2 border-white"
        >
          <HeartPulse className="w-12 h-12 text-white drop-shadow-sm" />
        </motion.div>

        {/* Floating Feedback */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              key={feedback}
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: -45 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              className={`absolute top-1/2 z-20 font-bold text-xl px-4 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/50 ${
                feedback.includes("Perfect") ? "bg-[#0F9D8A]/90 text-white" : 
                feedback.includes("Good") ? "bg-[#0B2545]/90 text-white" :
                feedback.includes("Miss") ? "bg-rose-500/90 text-white" : "bg-white/90 text-[#0B2545]"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="w-full flex flex-col items-center mt-auto">
        <div className="h-8 mb-4 flex items-center justify-center">
          {!isPlaying && currentLevel > 0 && (
            <button onClick={() => { stopGame(); setCurrentLevel(0); }} className="text-xs font-semibold uppercase tracking-widest text-[#526777] hover:text-[#0B2545] flex items-center gap-1 transition-colors">
              <RefreshCcw className="w-3.5 h-3.5" /> Restart Progress
            </button>
          )}
        </div>

        {!isPlaying ? (
          <button
            onClick={startGame}
            className="group flex items-center justify-center gap-2 px-8 py-3 w-56 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white font-medium hover:from-rose-600 hover:to-rose-500 transition-all duration-300 shadow-[0_4px_20px_rgba(244,63,94,0.25)] hover:shadow-[0_8px_25px_rgba(244,63,94,0.35)] hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 opacity-90 group-hover:scale-110 transition-transform" /> Start Level {currentLevel + 1}
          </button>
        ) : (
          <button
            onClick={handleTap}
            className="group flex items-center justify-center gap-2 px-8 py-3 w-56 rounded-full bg-[#0B2545] text-white font-bold tracking-wider hover:bg-[#173A61] transition-all duration-200 shadow-[0_4px_20px_rgba(11,37,69,0.15)] hover:shadow-[0_8px_25px_rgba(11,37,69,0.25)] active:scale-95 active:shadow-sm"
          >
            <Target className="w-5 h-5 opacity-90" /> TAP
          </button>
        )}
      </div>
    </div>
  );
}
