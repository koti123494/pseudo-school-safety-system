"use client";

import React, { useState } from "react";
import { Activity, Info, BarChart2, Zap, X } from "lucide-react";

interface ComplexityChartProps {
  complexity?: string;
  onClose?: () => void;
  isPopover?: boolean;
}

export function getComplexityColor(complexity: string): {
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
} {
  const c = complexity.toLowerCase();
  if (c.includes("1") || c.includes("log")) {
    return {
      badgeBg: "bg-blue-500/15",
      badgeBorder: "border-blue-500/30",
      badgeText: "text-blue-400",
    };
  }
  if (c.includes("n^2") || c.includes("n2") || c.includes("quadratic")) {
    return {
      badgeBg: "bg-orange-500/15",
      badgeBorder: "border-orange-500/30",
      badgeText: "text-orange-400",
    };
  }
  if (c.includes("2^n") || c.includes("exponential")) {
    return {
      badgeBg: "bg-rose-500/15",
      badgeBorder: "border-rose-500/30",
      badgeText: "text-rose-400",
    };
  }
  // Default O(n) or linear
  return {
    badgeBg: "bg-emerald-500/15",
    badgeBorder: "border-emerald-500/30",
    badgeText: "text-emerald-400",
  };
}

export default function ComplexityChart({
  complexity = "O(n)",
  onClose,
  isPopover = false,
}: ComplexityChartProps) {
  const [selectedN, setSelectedN] = useState<10 | 100 | 1000>(100);

  const complexitiesData = [
    {
      name: "O(1) - Constant",
      tag: "O(1)",
      color: "bg-blue-400",
      textColor: "text-blue-400",
      n10: 1,
      n100: 1,
      n1000: 1,
      note: "Instant access (Hash table, index)",
    },
    {
      name: "O(log n) - Logarithmic",
      tag: "O(log n)",
      color: "bg-cyan-400",
      textColor: "text-cyan-400",
      n10: 3,
      n100: 7,
      n1000: 10,
      note: "Binary search, balanced tree divide",
    },
    {
      name: "O(n) - Linear",
      tag: "O(n)",
      color: "bg-emerald-400",
      textColor: "text-emerald-400",
      n10: 10,
      n100: 100,
      n1000: 1000,
      note: "Single loop pass over elements",
    },
    {
      name: "O(n log n) - Linearithmic",
      tag: "O(n log n)",
      color: "bg-purple-400",
      textColor: "text-purple-400",
      n10: 33,
      n100: 664,
      n1000: 9965,
      note: "Merge sort, Quick sort average",
    },
    {
      name: "O(n²) - Quadratic",
      tag: "O(n^2)",
      color: "bg-amber-400",
      textColor: "text-amber-400",
      n10: 100,
      n100: 10000,
      n1000: 1000000,
      note: "Nested loops (Bubble sort, 2D matrix)",
    },
  ];

  // Helper to calculate visual width percentage (log-scale mapped so all are legible)
  const getBarWidthPercent = (ops: number): number => {
    if (ops <= 1) return 4;
    if (ops <= 10) return 15;
    if (ops <= 100) return 38;
    if (ops <= 1000) return 60;
    if (ops <= 10000) return 82;
    return 100;
  };

  const currentMatch = complexity.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="bg-surfaceBg/95 border border-borderSubtle rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-md max-w-md w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-borderSubtle">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accentPurple/20 text-accentPurple">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-textMain">Complexity Visualizer</h4>
            <p className="text-[11px] text-textMuted">Growth rate comparison vs input size (n)</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-md text-textMuted hover:text-textMain hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Input Size Selector */}
      <div className="flex items-center justify-between my-3 px-2 py-1.5 bg-secondaryBg rounded-lg">
        <span className="text-xs text-textMuted font-mono">Test Input Size:</span>
        <div className="flex gap-1.5">
          {([10, 100, 1000] as const).map((nVal) => (
            <button
              key={nVal}
              onClick={() => setSelectedN(nVal)}
              className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold transition-colors ${
                selectedN === nVal
                  ? "bg-accentPurple text-white shadow-sm"
                  : "bg-surfaceBg text-textMuted hover:text-textMain"
              }`}
            >
              n = {nVal}
            </button>
          ))}
        </div>
      </div>

      {/* Comparative Bars */}
      <div className="space-y-2.5 py-1">
        {complexitiesData.map((item) => {
          const ops = selectedN === 10 ? item.n10 : selectedN === 100 ? item.n100 : item.n1000;
          const isSelected =
            currentMatch.includes(item.tag.toLowerCase().replace("^2", "2")) ||
            (item.tag === "O(n)" && currentMatch === "o(n)");

          return (
            <div
              key={item.tag}
              className={`p-2 rounded-lg transition-all ${
                isSelected
                  ? "bg-white/[0.06] border border-accentPurple/40 shadow-sm"
                  : "hover:bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`font-mono font-bold ${item.textColor}`}>
                  {item.tag}
                  {isSelected && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded text-[10px] bg-accentPurple/30 text-accentPurple">
                      Current
                    </span>
                  )}
                </span>
                <span className="font-mono text-textMuted text-[11px]">
                  {ops.toLocaleString()} ops
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="h-2 w-full bg-secondaryBg rounded-full overflow-hidden p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${item.color}`}
                  style={{ width: `${getBarWidthPercent(ops)}%` }}
                />
              </div>

              <div className="text-[10px] text-textMuted/80 mt-1 truncate font-sans">
                {item.note}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="mt-3 pt-2.5 border-t border-borderSubtle text-[11px] text-textMuted flex items-center gap-1.5">
        <Info className="w-3.5 h-3.5 text-accentCyan shrink-0" />
        <span>TCS NQT cutoff algorithms generally require O(n) or O(log n) efficiency.</span>
      </div>
    </div>
  );
}
