"use client";

import React, { useEffect, useState } from "react";
import { Clock, AlertTriangle } from "lucide-react";
import { Difficulty } from "@/types";

interface TimerProps {
  difficulty: Difficulty;
  isAnswered: boolean;
  onTimeUp: () => void;
  resetKey: string | number; // Change key when question changes
}

export default function Timer({
  difficulty,
  isAnswered,
  onTimeUp,
  resetKey,
}: TimerProps) {
  const getInitialSeconds = (diff: Difficulty) => {
    switch (diff) {
      case "Easy":
        return 45;
      case "Hard":
        return 90;
      case "Medium":
      default:
        return 60;
    }
  };

  const [timeLeft, setTimeLeft] = useState(getInitialSeconds(difficulty));
  const [totalTime, setTotalTime] = useState(getInitialSeconds(difficulty));

  useEffect(() => {
    const initial = getInitialSeconds(difficulty);
    setTimeLeft(initial);
    setTotalTime(initial);
  }, [difficulty, resetKey]);

  useEffect(() => {
    if (isAnswered || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAnswered, timeLeft, onTimeUp]);

  const percentage = Math.max(0, Math.min(100, (timeLeft / totalTime) * 100));
  const isUrgent = timeLeft <= 15 && timeLeft > 0;
  const isExpired = timeLeft === 0;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surfaceBg/90 border border-borderSubtle">
      {isExpired ? (
        <AlertTriangle className="w-4 h-4 text-error animate-bounce" />
      ) : (
        <Clock className={`w-4 h-4 ${isUrgent ? "text-error animate-pulse" : "text-textMuted"}`} />
      )}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs font-mono font-bold">
          <span
            className={
              isExpired
                ? "text-error font-extrabold"
                : isUrgent
                ? "text-error"
                : "text-textMain"
            }
          >
            {isExpired ? "TIME'S UP" : `${timeLeft}s`}
          </span>
          <span className="text-[10px] text-textMuted font-sans">
            ({difficulty})
          </span>
        </div>
        {/* Animated small progress track */}
        <div className="w-16 h-1 bg-primaryBg/70 rounded-full overflow-hidden mt-0.5">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              isExpired
                ? "bg-error"
                : isUrgent
                ? "bg-error"
                : percentage > 50
                ? "bg-primaryAccent"
                : "bg-warning"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
