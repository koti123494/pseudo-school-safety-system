"use client";

import React from "react";
import { Filter, RotateCcw } from "lucide-react";
import { Company, Difficulty, Topic } from "@/types";

interface FilterBarProps {
  selectedCompany: string;
  onCompanyChange: (c: string) => void;
  selectedYear: string;
  onYearChange: (y: string) => void;
  selectedDifficulty: string;
  onDifficultyChange: (d: string) => void;
  selectedTopic: string;
  onTopicChange: (t: string) => void;
  matchCount: number;
  onReset: () => void;
}

const companies: (Company | "All")[] = [
  "All",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Capgemini",
  "Cognizant",
];

const difficulties: (Difficulty | "All")[] = ["All", "Easy", "Medium", "Hard"];

const topics: (Topic | "All")[] = [
  "All",
  "Operators",
  "Bitwise",
  "Loops",
  "Arrays",
  "Nested Conditions",
  "Series",
  "Profit / Loss",
  "Queue Logic",
  "Mathematical Logic",
];

const years = [
  "All",
  "2026",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

export default function FilterBar({
  selectedCompany,
  onCompanyChange,
  selectedYear,
  onYearChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedTopic,
  onTopicChange,
  matchCount,
  onReset,
}: FilterBarProps) {
  const isFiltered =
    selectedCompany !== "All" ||
    selectedYear !== "All" ||
    selectedDifficulty !== "All" ||
    selectedTopic !== "All";

  return (
    <div className="w-full bg-surfaceBg/90 border border-borderSubtle rounded-2xl p-4 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-borderSubtle">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-secondaryAccent" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Filter Practice Pool
          </span>
          <span className="text-xs font-mono text-secondaryAccent bg-primaryAccent/15 px-2 py-0.5 rounded-full border border-primaryAccent/30">
            {matchCount.toLocaleString()} Questions
          </span>
        </div>

        {isFiltered && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-textMuted hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
        {/* Company Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-textMuted uppercase tracking-wider">
            Company
          </label>
          <select
            value={selectedCompany}
            onChange={(e) => onCompanyChange(e.target.value)}
            className="bg-cardBg border border-borderSubtle rounded-lg px-2.5 py-1.5 text-xs text-textMain focus:outline-none focus:border-primaryAccent transition-all"
          >
            {companies.map((c) => (
              <option key={c} value={c}>
                {c === "All" ? "All Companies" : c}
              </option>
            ))}
          </select>
        </div>

        {/* Topic Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-textMuted uppercase tracking-wider">
            Topic
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => onTopicChange(e.target.value)}
            className="bg-cardBg border border-borderSubtle rounded-lg px-2.5 py-1.5 text-xs text-textMain focus:outline-none focus:border-primaryAccent transition-all"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t === "All" ? "All Topics" : t}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-textMuted uppercase tracking-wider">
            Difficulty
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="bg-cardBg border border-borderSubtle rounded-lg px-2.5 py-1.5 text-xs text-textMain focus:outline-none focus:border-primaryAccent transition-all"
          >
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d === "All" ? "All Difficulties" : d}
              </option>
            ))}
          </select>
        </div>

        {/* Year Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-medium text-textMuted uppercase tracking-wider">
            Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="bg-cardBg border border-borderSubtle rounded-lg px-2.5 py-1.5 text-xs text-textMain focus:outline-none focus:border-primaryAccent transition-all"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y === "All" ? "All Years (2015–2026)" : y}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
