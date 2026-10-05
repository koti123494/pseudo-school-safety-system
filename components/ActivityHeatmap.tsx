"use client";

import React, { useMemo } from "react";
import { getActivityHeatmap } from "@/lib/storage";

export default function ActivityHeatmap() {
  const history = getActivityHeatmap();

  // Generate last 16 weeks of days (112 days)
  const days = useMemo(() => {
    const list: { date: string; count: number; level: number }[] = [];
    const today = new Date();

    for (let i = 111; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      const count = history[dateStr] || 0;
      let level = 0;
      if (count > 0 && count <= 2) level = 1;
      else if (count > 2 && count <= 5) level = 2;
      else if (count > 5 && count <= 10) level = 3;
      else if (count > 10) level = 4;

      list.push({ date: dateStr, count, level });
    }
    return list;
  }, [history]);

  const levelColors = [
    "bg-surfaceBg/60 border border-borderSubtle",
    "bg-emerald-900/50 border border-emerald-800/40 text-emerald-300",
    "bg-emerald-700/70 border border-emerald-600/40 text-emerald-200",
    "bg-emerald-500 border border-emerald-400 text-white",
    "bg-emerald-400 border border-emerald-300 text-black shadow-glowSuccess",
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-textMuted">
        <span className="font-mono">Past 16 Weeks Activity</span>
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span>Less</span>
          <div className="w-2.5 h-2.5 rounded bg-surfaceBg border border-borderSubtle" />
          <div className="w-2.5 h-2.5 rounded bg-emerald-900/50" />
          <div className="w-2.5 h-2.5 rounded bg-emerald-700/70" />
          <div className="w-2.5 h-2.5 rounded bg-emerald-500" />
          <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
          <span>More</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-1">
        <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[580px]">
          {days.map((item, idx) => (
            <div
              key={idx}
              title={`${item.date}: ${item.count} activities`}
              className={`w-3.5 h-3.5 rounded-sm transition-transform hover:scale-125 cursor-pointer ${
                levelColors[item.level]
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
