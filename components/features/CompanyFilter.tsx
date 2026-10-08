"use client";

import React from "react";
import { Building, Check } from "lucide-react";
import { PSEUDO_COMPANIES, getCompanyQuestionCounts } from "@/data/pseudoCode5000";

interface CompanyFilterProps {
  selectedCompany: string;
  onSelectCompany: (company: string) => void;
  className?: string;
}

export const COMPANY_BADGE_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  All: { bg: "bg-surfaceBorder", text: "text-textMain", border: "border-borderSubtle" },
  TCS: { bg: "bg-blue-600/15", text: "text-blue-400", border: "border-blue-500/30" },
  Infosys: { bg: "bg-sky-600/15", text: "text-sky-400", border: "border-sky-500/30" },
  Wipro: { bg: "bg-emerald-600/15", text: "text-emerald-400", border: "border-emerald-500/30" },
  Accenture: { bg: "bg-purple-600/15", text: "text-purple-400", border: "border-purple-500/30" },
  Capgemini: { bg: "bg-indigo-600/15", text: "text-indigo-400", border: "border-indigo-500/30" },
  Cognizant: { bg: "bg-cyan-600/15", text: "text-cyan-400", border: "border-cyan-500/30" },
  "Tech Mahindra": { bg: "bg-amber-600/15", text: "text-amber-400", border: "border-amber-500/30" },
};

export default function CompanyFilter({
  selectedCompany,
  onSelectCompany,
  className = "",
}: CompanyFilterProps) {
  const counts = React.useMemo(() => getCompanyQuestionCounts(), []);

  const companiesList = ["All", ...PSEUDO_COMPANIES];

  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className="flex items-center justify-between text-xs text-textMuted font-mono">
        <span className="flex items-center gap-1.5 font-semibold text-textMain">
          <Building className="w-3.5 h-3.5 text-accentCyan" />
          Target Company Filter:
        </span>
        {selectedCompany !== "All" && (
          <button
            onClick={() => onSelectCompany("All")}
            className="text-[11px] text-accentPurple hover:underline"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Horizontal pill list of company badges with counts */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {companiesList.map((comp) => {
          const isSelected = selectedCompany === comp;
          const style = COMPANY_BADGE_STYLES[comp] || {
            bg: "bg-surfaceBorder",
            text: "text-textMain",
            border: "border-borderSubtle",
          };
          const count = comp === "All" ? 5000 : counts[comp] || 0;

          return (
            <button
              key={comp}
              onClick={() => onSelectCompany(comp)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all border ${
                isSelected
                  ? `${style.bg} ${style.text} ${style.border} ring-2 ring-accentPurple/50 shadow-md`
                  : "bg-surfaceBg/80 text-textMuted hover:text-textMain border-borderSubtle hover:bg-secondaryBg"
              }`}
            >
              {isSelected && <Check className="w-3 h-3 shrink-0" />}
              <span>{comp}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? "bg-white/10" : "bg-surfaceBorder text-textMuted"
                }`}
              >
                {count.toLocaleString()}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
