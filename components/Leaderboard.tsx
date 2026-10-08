"use client";

import React, { useState, useEffect } from "react";
import { Trophy, Flame, CheckCircle, MapPin, Sparkles, X, User } from "lucide-react";
import { getStreakStats, getFullLeaderboard } from "@/lib/streak";
import { LeaderboardUser } from "@/types";

interface LeaderboardProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export default function Leaderboard({ isOpen = true, onClose, isModal = false }: LeaderboardProps) {
  const [stats, setStats] = useState({ streakCount: 7, totalSolved: 342 });
  const [users, setUsers] = useState<LeaderboardUser[]>([]);

  const loadData = () => {
    const s = getStreakStats();
    setStats({ streakCount: s.streakCount, totalSolved: s.totalSolved });
    setUsers(getFullLeaderboard(s.totalSolved, s.streakCount));
  };

  useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener("streak_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("streak_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  if (isModal && !isOpen) return null;

  const content = (
    <div className="bg-surfaceBg border border-borderSubtle rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/10 p-6 border-b border-borderSubtle flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
            <Trophy className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-textMain tracking-wide">
                Ongole, AP Leaderboard
              </h2>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accentPurple/20 text-accentPurple border border-accentPurple/30">
                Live
              </span>
            </div>
            <p className="text-xs text-textMuted flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Prakasam District Regional Rank List
            </p>
          </div>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 text-textMuted hover:text-textMain transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Table */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-borderSubtle/60 text-xs text-textMuted font-mono uppercase tracking-wider">
              <th className="py-3 px-3">Rank</th>
              <th className="py-3 px-3">Candidate</th>
              <th className="py-3 px-3 text-center">Questions Solved</th>
              <th className="py-3 px-3 text-center">Daily Streak</th>
              <th className="py-3 px-3 text-right">Region</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-borderSubtle/30 font-sans text-sm">
            {users.slice(0, 10).map((u) => {
              const rankBadge =
                u.rank === 1
                  ? "bg-amber-500 text-black font-extrabold shadow-lg shadow-amber-500/30"
                  : u.rank === 2
                  ? "bg-slate-300 text-black font-bold"
                  : u.rank === 3
                  ? "bg-amber-700 text-white font-bold"
                  : "bg-surfaceBorder text-textMuted font-medium";

              return (
                <tr
                  key={u.name}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="py-3 px-3">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs ${rankBadge}`}
                    >
                      {u.rank}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-medium text-textMain">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accentCyan/10 border border-accentCyan/30 flex items-center justify-center text-accentCyan text-xs font-bold">
                        {u.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <span>{u.name}</span>
                        {u.rank <= 3 && (
                          <span className="ml-2 text-xs text-amber-400">★</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-semibold text-accentGreen">
                    {u.solved.toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-center font-mono">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {u.streak}d
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right text-xs text-textMuted font-mono">
                    {u.location}
                  </td>
                </tr>
              );
            })}

            {/* Current user sticky divider and row */}
            {users.find((u) => u.isCurrentUser) && (
              <>
                <tr>
                  <td colSpan={5} className="py-2 text-center text-xs text-textMuted font-mono">
                    •••••• Your Current Standing ••••••
                  </td>
                </tr>
                {(() => {
                  const you = users.find((u) => u.isCurrentUser)!;
                  return (
                    <tr className="bg-gradient-to-r from-accentPurple/20 via-primary/20 to-accentCyan/20 border-2 border-accentPurple/50 rounded-xl font-semibold">
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center justify-center px-2 py-1 rounded-lg bg-accentPurple text-white text-xs font-bold">
                          #{you.rank}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-textMain">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-accentPurple text-white flex items-center justify-center text-xs font-bold shadow-md">
                            YOU
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-accentPurple">You (Rank #{you.rank})</span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-accentPurple/30 text-accentPurple font-mono">
                              Active
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono font-bold text-accentGreen text-base">
                        {you.solved.toLocaleString()} / 5000
                      </td>
                      <td className="py-3.5 px-3 text-center font-mono">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-orange-500/20 text-orange-400 text-xs font-bold">
                          <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
                          {you.streak} days
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right text-xs text-textMuted font-mono">
                        {you.location}
                      </td>
                    </tr>
                  );
                })()}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="w-full max-w-3xl my-8">{content}</div>
      </div>
    );
  }

  return content;
}
