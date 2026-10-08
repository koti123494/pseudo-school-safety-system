"use client";

import React, { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import { getTeluguToggle, setTeluguToggle } from "@/lib/streak";

interface TeluguToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function TeluguToggle({
  className = "",
  showLabel = true,
}: TeluguToggleProps) {
  const [inTelugu, setInTelugu] = useState(false);

  useEffect(() => {
    setInTelugu(getTeluguToggle());
    const handler = () => setInTelugu(getTeluguToggle());
    window.addEventListener("lang_toggled", handler);
    return () => window.removeEventListener("lang_toggled", handler);
  }, []);

  const handleToggle = () => {
    const next = !inTelugu;
    setInTelugu(next);
    setTeluguToggle(next);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-xs text-textMuted font-mono hidden sm:inline">
          Language:
        </span>
      )}
      <button
        onClick={handleToggle}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold font-mono transition-all duration-200 ${
          inTelugu
            ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm ring-1 ring-amber-500/30"
            : "bg-surfaceBg text-textMuted hover:text-textMain border-borderSubtle"
        }`}
        title="Toggle English / తెలుగు Translation (Tanglish)"
      >
        <Languages className="w-4 h-4 text-amber-400" />
        <span>{inTelugu ? "తెలుగు (Tanglish)" : "English"}</span>
        <span
          className={`w-2 h-2 rounded-full ${
            inTelugu ? "bg-amber-400 animate-pulse" : "bg-textMuted/40"
          }`}
        />
      </button>
    </div>
  );
}
