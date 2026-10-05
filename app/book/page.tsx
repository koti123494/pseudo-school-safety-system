"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  allPythonBookTopics,
  getOverallBookProgress,
} from "@/lib/pythonBookService";
import { getAllBookProgress } from "@/lib/storage";
import {
  BookOpen,
  CheckCircle2,
  Search,
  Sparkles,
  ArrowRight,
  Code2,
  GraduationCap,
  Layers,
  Award,
} from "lucide-react";
import { PythonBookTopic } from "@/types";

export default function PythonBookPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [bookProgress, setBookProgress] = useState(getOverallBookProgress());
  const [userProgressMap, setUserProgressMap] = useState<Record<string, any>>({});

  useEffect(() => {
    setBookProgress(getOverallBookProgress());
    setUserProgressMap(getAllBookProgress());
  }, []);

  const categories = ["All", "Beginner", "Intermediate", "Advanced", "Interview Special"];

  const filteredTopics = allPythonBookTopics.filter((topic) => {
    if (selectedCategory !== "All" && topic.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.definition.toLowerCase().includes(q) ||
        String(topic.id).includes(q)
      );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primaryAccent/20 via-surfaceBg to-primaryAccent/10 border border-primaryAccent/30 shadow-card flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Python Mastery Book — 55 Essential Chapters</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            From Zero to Placement-Ready Python Engineer
          </h1>
          <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
            Master every fundamental and advanced Python concept with theory, 20+ working code examples per topic, common mistakes, placement interview questions, and interactive quizzes.
          </p>
        </div>

        {/* Dynamic Progress Card */}
        <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3 min-w-[260px] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold text-textMuted tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-secondaryAccent" />
              Book Progress
            </span>
            <span className="text-lg font-black text-secondaryAccent font-mono">
              {bookProgress.overallPercentage}%
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-surfaceBg overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent transition-all duration-500"
              style={{ width: `${bookProgress.overallPercentage}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-textMuted pt-1 border-t border-borderSubtle/60">
            <div>
              Theory: <strong className="text-white">{bookProgress.theoryPercentage}%</strong>
            </div>
            <div>
              Examples: <strong className="text-white">{bookProgress.examplesPercentage}%</strong>
            </div>
            <div>
              Quizzes: <strong className="text-white">{bookProgress.mcqPercentage}%</strong>
            </div>
            <div>
              Mastered: <strong className="text-emerald-400">{bookProgress.completedTopicsCount}</strong>/{bookProgress.totalTopics}
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar: Search & Categories */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-cardBg border border-borderSubtle">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapters or topics..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-white placeholder-textMuted/60 focus:outline-none focus:border-primaryAccent"
          />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTopics.map((topic) => {
          const progress = userProgressMap[String(topic.id)];
          const pct = progress?.overallPercentage || 0;
          const isDone = pct >= 80;

          return (
            <Link
              key={topic.id}
              href={`/book/${topic.slug}`}
              className="p-5 rounded-2xl bg-cardBg border border-borderSubtle hover:border-borderHighlight transition-all duration-200 shadow-card flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-primaryAccent/15 text-secondaryAccent border border-primaryAccent/30">
                    Chapter {String(topic.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      topic.category === "Beginner"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : topic.category === "Intermediate"
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        : "bg-purple-500/10 text-secondaryAccent border-purple-500/20"
                    }`}
                  >
                    {topic.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-secondaryAccent transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-textMuted line-clamp-2 mt-1 leading-relaxed">
                    {topic.definition}
                  </p>
                </div>
              </div>

              {/* Progress Footer */}
              <div className="pt-4 mt-3 border-t border-borderSubtle/60 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-textMuted text-[11px]">Completion</span>
                  <span
                    className={`font-bold ${
                      isDone ? "text-emerald-400" : pct > 0 ? "text-secondaryAccent" : "text-textMuted"
                    }`}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surfaceBg overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isDone
                        ? "bg-emerald-500"
                        : "bg-gradient-to-r from-primaryAccent to-secondaryAccent"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-textMuted">
                  <span>{topic.examples.length} Examples • {topic.mcqs.length} MCQs</span>
                  <span className="flex items-center gap-1 text-secondaryAccent group-hover:translate-x-1 transition-transform">
                    Read ➔
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
