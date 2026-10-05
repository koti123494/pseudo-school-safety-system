"use client";

import React from "react";
import Link from "next/link";
import { FolderCode, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { allQuestions } from "@/lib/questionsData";
import { getAttemptedIds } from "@/lib/storage";

const topics = [
  {
    name: "Operators",
    desc: "Arithmetic operators, operator precedence, modulo remainders, compound updates, and integer division logic.",
  },
  {
    name: "Bitwise",
    desc: "Bitwise AND, OR, XOR, NOT, left shifts, right shifts, bit masking, and Brian Kernighan set bit counting.",
  },
  {
    name: "Loops",
    desc: "While loops, for loops, nested loops, break conditions, continue statements, reverse loops, and step increments.",
  },
  {
    name: "Arrays",
    desc: "Array traversal, prefix sums, adjacent difference arrays, revenue/expenses/profit, and parity-based mutations.",
  },
  {
    name: "Nested Conditions",
    desc: "Multi-tier if-else ladders, tax slabs, truth tables, short-circuit evaluations, and complex boolean expressions.",
  },
  {
    name: "Series",
    desc: "Arithmetic progressions, alternating sign series, triangular numbers, and modified Fibonacci recurrence sequences.",
  },
  {
    name: "Profit / Loss",
    desc: "Marked price, cost price, selling price, discounts, successive discounts, and bulk commercial unit calculations.",
  },
  {
    name: "Queue Logic",
    desc: "FIFO customer queues, round robin ticket calculations, circular queue buffer wrapping, and turnaround times.",
  },
  {
    name: "Mathematical Logic",
    desc: "Euclidean GCD algorithm, Armstrong cube numbers, prime checking loops, digit sums, and number reversal logic.",
  },
];

export default function TopicsPage() {
  const [attemptedSet, setAttemptedSet] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    setAttemptedSet(new Set(getAttemptedIds()));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-borderSubtle pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primaryAccent/20 text-secondaryAccent flex items-center justify-center">
            <FolderCode className="w-4 h-4" />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Topics & Syllabus Practice Hub
          </h1>
        </div>
        <p className="text-xs text-textMuted max-w-2xl">
          Deep dive into individual algorithmic concepts with topic-focused question pools and step-by-step dry runs.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((t) => {
          const topicQuestions = allQuestions.filter((q) => q.topic.startsWith(t.name));
          const count = topicQuestions.length;
          const solvedInTopic = topicQuestions.filter((q) => attemptedSet.has(q.id)).length;
          const pct = count > 0 ? Math.round((solvedInTopic / count) * 100) : 0;

          return (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-cardBg border border-borderSubtle hover:border-borderHighlight flex flex-col justify-between shadow-card space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-white">{t.name}</h3>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-primaryAccent/15 text-secondaryAccent border border-primaryAccent/30">
                    {count} Qs
                  </span>
                </div>

                <p className="text-xs text-textMuted leading-relaxed">{t.desc}</p>
              </div>

              {/* Progress and Action */}
              <div className="space-y-3 pt-2 border-t border-borderSubtle">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-textMuted">
                    {solvedInTopic} / {count} Mastered
                  </span>
                  <span className="text-secondaryAccent font-bold">{pct}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surfaceBg overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <Link
                  href={`/practice?topic=${encodeURIComponent(t.name)}`}
                  className="w-full py-2.5 rounded-xl bg-surfaceBg hover:bg-primaryAccent hover:text-white border border-borderSubtle text-xs font-bold text-textMain transition-all flex items-center justify-center gap-1.5 group"
                >
                  <span>Practice {t.name} Set</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
