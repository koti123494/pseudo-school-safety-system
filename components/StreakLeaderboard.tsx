"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Flame, Trophy, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import { getStreakStats } from "@/lib/streak";
import Leaderboard from "@/components/Leaderboard";

interface StreakLeaderboardProps {
  className?: string;
}

export default function StreakLeaderboard({ className = "" }: StreakLeaderboardProps) {
  const [stats, setStats] = useState({ streakCount: 7, totalSolved: 342 });
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const loadStats = () => {
    const s = getStreakStats();
    setStats({ streakCount: s.streakCount, totalSolved: s.totalSolved });
  };

  useEffect(() => {
    loadStats();
    const handleUpdate = () => loadStats();
    window.addEventListener("streak_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("streak_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return (
    <>
      <div
        className={`flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 sm:px-4 rounded-xl bg-surfaceBg/90 border border-borderSubtle/80 shadow-md backdrop-blur-md ${className}`}
      >
        {/* Streak with animated flame */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-500/15 border border-orange-500/30 text-orange-400 font-mono text-xs sm:text-sm font-bold shadow-inner">
          <span className="text-base animate-bounce leading-none">🔥</span>
          <span>Streak:</span>
          <span className="text-orange-300 font-extrabold">{stats.streakCount} days</span>
        </div>

        <div className="h-4 w-[1px] bg-borderSubtle hidden sm:block" />

        {/* Solved Counter */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accentGreen/15 border border-accentGreen/30 text-accentGreen font-mono text-xs sm:text-sm font-semibold">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Solved:</span>
          <span className="font-extrabold text-white">
            {stats.totalSolved}
            <span className="text-textMuted font-normal text-xs">/5000</span>
          </span>
        </div>

        <div className="h-4 w-[1px] bg-borderSubtle hidden sm:block" />

        {/* Leaderboard Trigger Button */}
        <button
          onClick={() => setIsLeaderboardOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-400 font-sans text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm"
          title="View Ongole, AP Leaderboard"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>Leaderboard</span>
          <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-[10px] text-amber-200">#15</span>
        </button>
      </div>

      {/* Leaderboard Modal */}
      {isLeaderboardOpen && (
        <Leaderboard
          isOpen={isLeaderboardOpen}
          onClose={() => setIsLeaderboardOpen(false)}
          isModal={true}
        />
      )}
    </>
  );
}
