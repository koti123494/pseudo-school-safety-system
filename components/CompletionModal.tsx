"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trophy, CheckCircle2, RotateCcw, BarChart3, AlertCircle, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface CompletionModalProps {
  totalCount: number;
  correctCount: number;
  wrongCount: number;
  accuracy: number;
  onStartNewCycle: () => void;
  onReviewMistakes: () => void;
}

export default function CompletionModal({
  totalCount,
  correctCount,
  wrongCount,
  accuracy,
  onStartNewCycle,
  onReviewMistakes,
}: CompletionModalProps) {
  const [confirmNewCycle, setConfirmNewCycle] = useState(false);

  React.useEffect(() => {
    // Fire celebration confetti on completion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#a78bfa", "#22c55e", "#f59e0b"],
    });
  }, []);

  const masteredTopics = [
    "Loops & Nested Iterations",
    "Arrays & Prefix Calculations",
    "Bitwise Operations & Masks",
    "Operators & Precedence",
    "Nested Conditions & Boolean Logic",
    "Series & Sequences",
    "Profit / Loss Economics",
    "Queue Logic & Scheduling",
    "Mathematical & Number Theory",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-surfaceBg border border-primaryAccent/40 rounded-3xl p-6 sm:p-8 shadow-glow text-center relative overflow-hidden">
        {/* Glowing badge */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primaryAccent to-secondaryAccent p-1 mx-auto mb-4 shadow-glow flex items-center justify-center">
          <Trophy className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          🎉 MASTERY COMPLETE
        </h2>
        <p className="text-sm text-textMuted mt-1">
          You conquered all <strong className="text-secondaryAccent">{totalCount.toLocaleString()}+</strong> questions
          in this cycle!
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 my-6">
          <div className="p-3 rounded-xl bg-cardBg border border-borderSubtle">
            <div className="text-xs text-textMuted uppercase font-medium">Accuracy</div>
            <div className="text-xl font-bold text-success mt-1">{accuracy}%</div>
          </div>
          <div className="p-3 rounded-xl bg-cardBg border border-borderSubtle">
            <div className="text-xs text-textMuted uppercase font-medium">Correct</div>
            <div className="text-xl font-bold text-emerald-400 mt-1">{correctCount}</div>
          </div>
          <div className="p-3 rounded-xl bg-cardBg border border-borderSubtle">
            <div className="text-xs text-textMuted uppercase font-medium">Wrong</div>
            <div className="text-xl font-bold text-rose-400 mt-1">{wrongCount}</div>
          </div>
        </div>

        {/* Mastered topics list */}
        <div className="text-left bg-cardBg p-4 rounded-xl border border-borderSubtle mb-6">
          <div className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
            You mastered:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300">
            {masteredTopics.map((topic, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {wrongCount > 0 && (
            <button
              onClick={onReviewMistakes}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-bold transition-colors"
            >
              Review Mistakes ({wrongCount})
            </button>
          )}

          {!confirmNewCycle ? (
            <button
              onClick={() => setConfirmNewCycle(true)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white text-xs font-bold shadow-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Start New Cycle</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onStartNewCycle}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
              >
                Confirm Reset & Start Cycle
              </button>
              <button
                onClick={() => setConfirmNewCycle(false)}
                className="px-3 py-2 rounded-xl bg-surfaceBg text-textMuted text-xs hover:text-white"
              >
                Cancel
              </button>
            </div>
          )}

          <Link
            href="/progress"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-borderSubtle bg-surfaceBg hover:bg-surfaceBg/80 text-textMain text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>View Progress</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
