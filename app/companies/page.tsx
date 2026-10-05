"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Terminal,
  Code2,
  Search,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import { allQuestions } from "@/lib/questionsData";
import { allCodingProblems } from "@/lib/codingProblemsData";
import { getAttemptedIds, getCodingSolvedIds } from "@/lib/storage";

interface CompanyMeta {
  name: string;
  badge: string;
  category: "IT Services / Campus" | "Tier 1 / Product";
  description: string;
  focusTopics: string[];
  tips: string;
}

const ALL_COMPANIES: CompanyMeta[] = [
  {
    name: "TCS",
    badge: "TCS NQT / Prime",
    category: "IT Services / Campus",
    description: "TCS assessments focus on bitwise masking, step-increment while loops, number logic, and array manipulation.",
    focusTopics: ["Arrays", "Mathematics", "Bitwise", "Sorting"],
    tips: "Focus on operator precedence and while loop bounds.",
  },
  {
    name: "TCS NQT",
    badge: "National Qualifier",
    category: "IT Services / Campus",
    description: "Standard campus recruitment track testing core algorithms, arrays, strings, and pattern math.",
    focusTopics: ["Strings", "Two Pointers", "Hashing", "Greedy"],
    tips: "Practice time-constrained output prediction and dry-runs.",
  },
  {
    name: "TCS Digital",
    badge: "High Package Cadre",
    category: "IT Services / Campus",
    description: "Advanced algorithmic track with dynamic programming, graphs, trees, and backtracking problems.",
    focusTopics: ["Dynamic Programming", "Graphs", "Trees", "Binary Search"],
    tips: "Optimize time and space complexity to O(N log N) or O(N).",
  },
  {
    name: "Infosys",
    badge: "Infosys Core",
    category: "IT Services / Campus",
    description: "Infosys tests emphasize nested condition trees, recursive sequences, and prefix sums.",
    focusTopics: ["Prefix Sum", "Recursion", "Stack", "Arrays"],
    tips: "Watch out for short-circuit boolean logic and edge values.",
  },
  {
    name: "Infosys SP",
    badge: "Specialist Programmer",
    category: "Tier 1 / Product",
    description: "Highest package role demanding hard dynamic programming, graph traversal, and segment trees.",
    focusTopics: ["Dynamic Programming", "Graphs", "Monotonic Stack", "Heaps"],
    tips: "Master state reduction in multi-dimensional DP.",
  },
  {
    name: "Infosys DSE",
    badge: "Digital Specialist",
    category: "IT Services / Campus",
    description: "Data structure heavy hiring test evaluating stacks, queues, sliding windows, and trees.",
    focusTopics: ["Sliding Window", "Stack", "Trees", "Hashing"],
    tips: "Dry run boundary conditions on sliding windows.",
  },
  {
    name: "Wipro",
    badge: "Wipro Elite NLTH",
    category: "IT Services / Campus",
    description: "Wipro tests evaluate loop counters with early breaks, mathematical reversals, and prime loops.",
    focusTopics: ["Mathematics", "Arrays", "Strings", "Sorting"],
    tips: "Trace variable updates inside nested loops step-by-step.",
  },
  {
    name: "Accenture",
    badge: "Tech Assessment",
    category: "IT Services / Campus",
    description: "Accenture features array transformations, string palindromes, and commercial logic.",
    focusTopics: ["Strings", "Arrays", "Two Pointers", "Hashing"],
    tips: "Double-check 0-indexed vs 1-indexed array access.",
  },
  {
    name: "Capgemini",
    badge: "Excellence Track",
    category: "IT Services / Campus",
    description: "Capgemini pseudocode focuses on multi-variable updates and sequential outputs.",
    focusTopics: ["Arrays", "Bitwise", "Queue Logic", "Mathematics"],
    tips: "Pay attention to whether print occurs before or after variable decrement.",
  },
  {
    name: "Cognizant",
    badge: "GenC / GenC Next",
    category: "IT Services / Campus",
    description: "Cognizant tests queue wait-time calculations, round robin simulations, and string parsing.",
    focusTopics: ["Queue Logic", "Strings", "Sliding Window", "Sorting"],
    tips: "Calculate turnaround and priority queue order carefully.",
  },
  {
    name: "HCL",
    badge: "HCL Tech Hiring",
    category: "IT Services / Campus",
    description: "HCL campus tests evaluate fundamentals in array traversals, strings, and searching algorithms.",
    focusTopics: ["Binary Search", "Arrays", "Strings", "Mathematics"],
    tips: "Ensure all linear scans handle empty inputs gracefully.",
  },
  {
    name: "Tech Mahindra",
    badge: "Campus Placement",
    category: "IT Services / Campus",
    description: "Pattern generation, frequency sorting, and arithmetic series questions.",
    focusTopics: ["Hashing", "Strings", "Sorting", "Two Pointers"],
    tips: "Check edge cases with single character strings.",
  },
  {
    name: "IBM",
    badge: "Cognitive Assessment",
    category: "Tier 1 / Product",
    description: "System algorithms, hash sets, tree traversals, and recursion optimization.",
    focusTopics: ["Hash Table", "Trees", "Recursion", "Binary Search"],
    tips: "Be ready for clean recursion with memoization.",
  },
  {
    name: "Amazon",
    badge: "SDE 1 / Campus",
    category: "Tier 1 / Product",
    description: "Amazon interview questions: two pointers, sliding window, LRU cache, trees, heaps, and graphs.",
    focusTopics: ["Two Pointers", "Sliding Window", "Trees", "Heaps / Priority Queue"],
    tips: "Focus on optimal O(1) space and amortized runtime.",
  },
  {
    name: "Microsoft",
    badge: "Software Engineer",
    category: "Tier 1 / Product",
    description: "Microsoft placements emphasize linked list manipulations, trees, binary search, and backtracking.",
    focusTopics: ["Linked List", "Trees", "Binary Search", "Backtracking"],
    tips: "Write modular code and handle null pointer checks thoroughly.",
  },
  {
    name: "Google",
    badge: "SWE Campus",
    category: "Tier 1 / Product",
    description: "Google focuses on graph shortest paths, topological sort, dynamic programming, and heaps.",
    focusTopics: ["Graphs", "Dynamic Programming", "Heaps / Priority Queue", "Monotonic Stack"],
    tips: "Communicate trade-offs between memory and runtime clearly.",
  },
];

export default function CompaniesPage() {
  const [pseudoAttempted, setPseudoAttempted] = useState<Set<string>>(new Set());
  const [codingSolved, setCodingSolved] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setPseudoAttempted(new Set(getAttemptedIds()));
    setCodingSolved(new Set(getCodingSolvedIds()));
  }, []);

  const filteredCompanies = ALL_COMPANIES.filter((c) => {
    if (selectedCategory !== "All" && c.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        c.name.toLowerCase().includes(q) ||
        c.badge.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-borderSubtle pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primaryAccent/20 text-secondaryAccent flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Company-Wise Interview Preparation Hub
          </h1>
        </div>
        <p className="text-xs text-textMuted max-w-3xl">
          Direct your preparation towards verified placement patterns for 16 major recruiters. Distinguishes verified PYQs from company-pattern practice questions with dedicated mock test tracks.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cardBg border border-borderSubtle">
        <div className="flex items-center gap-2">
          {["All", "IT Services / Campus", "Tier 1 / Product"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company or track..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-white placeholder-textMuted/60 focus:outline-none focus:border-primaryAccent"
          />
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((c) => {
          // Questions related to this company
          const pseudoQs = allQuestions.filter(
            (q) => q.company.toLowerCase() === c.name.toLowerCase()
          );
          const codingQs = allCodingProblems.filter((p) =>
            p.companies?.some((comp) => comp.toLowerCase() === c.name.toLowerCase())
          );

          const pseudoSolved = pseudoQs.filter((q) => pseudoAttempted.has(q.id)).length;
          const codingDone = codingQs.filter((p) => codingSolved.has(p.id)).length;

          const totalQs = pseudoQs.length + codingQs.length;
          const totalDone = pseudoSolved + codingDone;
          const pct = totalQs > 0 ? Math.round((totalDone / totalQs) * 100) : 0;

          return (
            <div
              key={c.name}
              className="p-6 rounded-2xl bg-cardBg border border-borderSubtle hover:border-borderHighlight flex flex-col justify-between shadow-card space-y-4 transition-all card-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-textMain">{c.name}</span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30">
                    {c.badge}
                  </span>
                </div>

                <p className="text-xs text-textMuted leading-relaxed">{c.description}</p>

                {/* Focus topics tags */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
                    High Frequency Topics:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {c.focusTopics.map((top, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surfaceBg border border-borderSubtle text-secondaryAccent"
                      >
                        {top}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-surfaceBg/60 p-2.5 rounded-xl border border-borderSubtle text-[11px] text-zinc-300">
                  <span className="text-amber-400 font-semibold">Pro-tip: </span>
                  {c.tips}
                </div>
              </div>

              {/* Progress and Dual Practice Action Buttons */}
              <div className="space-y-3 pt-3 border-t border-borderSubtle">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-textMuted">
                    {totalDone} / {totalQs} Solved
                  </span>
                  <span className="text-secondaryAccent font-bold">{pct}% Completed</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surfaceBg overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    href={`/coding?company=${encodeURIComponent(c.name)}`}
                    className="py-2 px-3 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1 shadow-glow"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Coding ({codingQs.length})</span>
                  </Link>

                  <Link
                    href={`/practice?company=${encodeURIComponent(c.name)}`}
                    className="py-2 px-3 rounded-xl bg-surfaceBg hover:bg-cardBg border border-borderSubtle text-textMain text-xs font-bold transition-all text-center flex items-center justify-center gap-1"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Pseudo ({pseudoQs.length})</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
