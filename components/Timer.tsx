"use client";

import React from "react";
import { Clock } from "lucide-react";
import { Difficulty } from "@/types";

interface TimerProps {
  difficulty: Difficulty;
  isAnswered?: boolean;
  onTimeUp?: () => void;
  resetKey?: string | number;
}

export default function Timer({
  difficulty,
}: TimerProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surfaceBg/90 border border-borderSubtle">
      <Clock className="w-4 h-4 text-secondaryAccent animate-pulse" />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
          <span className="text-secondaryAccent font-semibold flex items-center gap-1">
            ∞ Unlimited
          </span>
          <span className="text-[10px] text-textMuted font-sans">
            ({difficulty})
          </span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-sans mt-0.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>No Time Limit</span>
        </div>
      </div>
    </div>
  );
}
