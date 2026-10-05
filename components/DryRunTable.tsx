"use client";

import React from "react";
import { DryRunStep } from "@/types";
import { Table, Sparkles, CheckCircle } from "lucide-react";

interface DryRunTableProps {
  dryRun: DryRunStep[];
  explanation: string;
  finalAnswer: string;
}

export default function DryRunTable({
  dryRun,
  explanation,
  finalAnswer,
}: DryRunTableProps) {
  // Collect all unique variable keys across steps
  const varKeys = Array.from(
    new Set(
      dryRun.flatMap((step) => (step.vars ? Object.keys(step.vars) : []))
    )
  );

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-borderSubtle bg-cardBg p-4 sm:p-6 shadow-card">
      <div className="flex items-center justify-between border-b border-borderSubtle pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primaryAccent/20 flex items-center justify-center text-secondaryAccent">
            <Table className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
            Step-by-Step Logic Tracing & Dry Run
          </h3>
        </div>
        <span className="text-xs font-mono text-textMuted bg-surfaceBg px-2 py-0.5 rounded border border-borderSubtle">
          Final: <span className="text-secondaryAccent font-bold">{finalAnswer}</span>
        </span>
      </div>

      {/* Explanation Narrative */}
      <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-surfaceBg/60 p-3.5 rounded-xl border border-borderSubtle">
        <p className="whitespace-pre-line">{explanation}</p>
      </div>

      {/* Structured Dry-Run Table */}
      {dryRun && dryRun.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-borderSubtle">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#181827] text-textMuted border-b border-borderSubtle">
                <th className="py-2.5 px-3 font-semibold w-12 text-center">Step</th>
                {varKeys.map((key) => (
                  <th key={key} className="py-2.5 px-3 font-mono font-semibold text-secondaryAccent">
                    {key}
                  </th>
                ))}
                <th className="py-2.5 px-3 font-semibold">Condition / Action</th>
                <th className="py-2.5 px-3 font-semibold">Execution Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borderSubtle/60 font-mono">
              {dryRun.map((step, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-2 px-3 text-center text-textMuted font-sans font-bold">
                    {step.step || idx + 1}
                  </td>
                  {varKeys.map((key) => (
                    <td key={key} className="py-2 px-3 text-emerald-400 font-medium">
                      {step.vars && step.vars[key] !== undefined
                        ? String(step.vars[key])
                        : "—"}
                    </td>
                  ))}
                  <td className="py-2 px-3 text-amber-300 font-sans text-[11px]">
                    {step.condition || "—"}
                  </td>
                  <td className="py-2 px-3 text-zinc-300 font-sans text-[11px]">
                    {step.note || "State updated"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Answer Summary Card */}
      <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 p-2.5 rounded-lg">
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>
          Final Execution Output = <strong className="font-mono text-white text-sm">{finalAnswer}</strong>
        </span>
      </div>
    </div>
  );
}
