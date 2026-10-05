"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Zap,
  Target,
  ShieldCheck,
  Flame,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Cpu,
  BarChart3,
  CheckCircle2,
  Building2,
  Award,
  Play,
  RotateCcw,
  Clock,
  Bookmark,
} from "lucide-react";
import { totalQuestionsCount } from "@/lib/questionsData";
import {
  allCodingProblems,
  getCodingProblemById,
} from "@/lib/codingProblemsData";
import { allPythonBookTopics, getOverallBookProgress } from "@/lib/pythonBookService";
import {
  getAttemptedIds,
  getAnswers,
  getStreakData,
  getCodingSolvedIds,
  getLastActivity,
  LastActivity,
} from "@/lib/storage";
import { CODING_TOPICS, CodingTopic } from "@/types";
import ActivityHeatmap from "@/components/ActivityHeatmap";

export default function HomePage() {
  const [attemptedPseudo, setAttemptedPseudo] = useState(0);
  const [solvedCoding, setSolvedCoding] = useState(0);
  const [streak, setStreak] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [lastActivity, setLastActivityState] = useState<LastActivity | null>(null);
  const [bookProgress, setBookProgress] = useState(getOverallBookProgress());

  // Topic solved counts
  const [topicStats, setTopicStats] = useState<Record<string, number>>({});
  const [difficultyCounts, setDifficultyCounts] = useState<{
    easy: number;
    medium: number;
    hard: number;
  }>({ easy: 0, medium: 0, hard: 0 });

  useEffect(() => {
    const pseudoIds = getAttemptedIds();
    const codingIds = getCodingSolvedIds();
    const streakInfo = getStreakData();
    const answers = getAnswers();
    const ansList = Object.values(answers);

    setAttemptedPseudo(pseudoIds.length);
    setSolvedCoding(codingIds.length);
    setStreak(streakInfo.currentStreak);
    setLastActivityState(getLastActivity());
    setBookProgress(getOverallBookProgress());

    if (ansList.length > 0) {
      const correct = ansList.filter((a) => a.isCorrect).length;
      setAccuracy(Math.round((correct / ansList.length) * 100));
    } else {
      setAccuracy(0);
    }

    // Coding difficulty breakdown
    const solvedSet = new Set(codingIds);
    let easy = 0,
      medium = 0,
      hard = 0;
    const tStats: Record<string, number> = {};

    allCodingProblems.forEach((p) => {
      if (solvedSet.has(p.id)) {
        if (p.difficulty === "Easy") easy++;
        else if (p.difficulty === "Medium") medium++;
        else if (p.difficulty === "Hard") hard++;

        tStats[p.topic] = (tStats[p.topic] || 0) + 1;
      }
    });

    setDifficultyCounts({ easy, medium, hard });
    setTopicStats(tStats);
  }, []);

  // Today's challenge problem
  const todayProblem =
    allCodingProblems[new Date().getDate() % allCodingProblems.length] ||
    allCodingProblems[0];

  const companies = [
    { name: "TCS", desc: "NQT Advanced Pseudocode & Logic Tracing", color: "from-blue-600/20 to-blue-400/10" },
    { name: "Infosys", desc: "SP/DSE Pseudocode & Mathematical Patterns", color: "from-indigo-600/20 to-indigo-400/10" },
    { name: "Wipro", desc: "Elite NLTH Output & Bitwise Evaluation", color: "from-purple-600/20 to-purple-400/10" },
    { name: "Accenture", desc: "Critical Reasoning & Technical Pseudocode", color: "from-violet-600/20 to-violet-400/10" },
    { name: "Capgemini", desc: "Pseudocode & Multi-Variable Loop Traces", color: "from-cyan-600/20 to-cyan-400/10" },
    { name: "Cognizant", desc: "GenC Next Logic & Queue Sim Questions", color: "from-emerald-600/20 to-emerald-400/10" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden space-y-12 pb-16">
      {/* Welcome Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-borderSubtle bg-gradient-to-b from-primaryBg via-surfaceBg/20 to-secondaryBg">
        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Text (7 Cols) */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surfaceBg border border-borderHighlight shadow-sm">
                <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-secondaryAccent">
                  WELCOME TO PYTHON MASTERY
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-xs text-textMuted font-mono">Platform v2.0</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textMain tracking-tight leading-[1.15]">
                Learn Python. Practice Logic.{" "}
                <span className="block mt-1 bg-gradient-to-r from-primaryAccent via-secondaryAccent to-primaryAccent bg-clip-text text-transparent">
                  Crack Placement Interviews.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-textMuted max-w-2xl leading-relaxed">
                The unified learning workspace engineered for campus placements. 2,000+ Python coding practice problems with automated test cases, a 55-chapter Python Mastery Book, 16 verified company tracks, and 1,000+ pseudocode logic traces.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <Link
                  href="/coding"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent hover:opacity-90 text-white font-bold text-xs sm:text-sm shadow-glow flex items-center gap-2 transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Practice 2,000+ Coding Problems</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/book"
                  className="px-5 py-3 rounded-xl bg-surfaceBg hover:bg-cardBg border border-borderSubtle hover:border-borderHighlight text-textMain font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-secondaryAccent" />
                  <span>Python Book (55 Ch)</span>
                </Link>

                <Link
                  href="/practice"
                  className="px-5 py-3 rounded-xl bg-surfaceBg hover:bg-cardBg border border-borderSubtle hover:border-borderHighlight text-textMain font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Pseudocode Tracing</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Card: Continue Learning & Daily Challenge (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Daily Challenge Card */}
              <div className="p-5 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-3 relative overflow-hidden card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-textMain">
                      Daily Coding Challenge
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-surfaceBg text-amber-400 border border-amber-500/20">
                    {todayProblem.difficulty}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-textMain tracking-tight">
                    {todayProblem.title}
                  </h3>
                  <p className="text-xs text-textMuted line-clamp-2 mt-1">
                    {todayProblem.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-borderSubtle/60 text-xs">
                  <span className="text-textMuted font-mono text-[11px]">
                    Topic: {todayProblem.topic}
                  </span>
                  <Link
                    href={`/coding?id=${todayProblem.id}`}
                    className="px-3.5 py-1.5 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white font-bold text-xs shadow-glow transition-all flex items-center gap-1"
                  >
                    <span>Solve Challenge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Continue Learning Resume Card */}
              {lastActivity && (
                <div className="p-4 rounded-2xl bg-surfaceBg/60 border border-borderSubtle flex items-center justify-between gap-3 text-xs card-hover">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-secondaryAccent tracking-wider">
                      Resume Where You Left Off:
                    </span>
                    <div className="font-semibold text-textMain truncate max-w-xs">
                      {lastActivity.lastCodingProblemTitle || lastActivity.lastTopicTitle || "Python Workspace"}
                    </div>
                  </div>
                  <Link
                    href={
                      lastActivity.lastCodingProblemId
                        ? `/coding?id=${lastActivity.lastCodingProblemId}`
                        : `/book`
                    }
                    className="px-3 py-1.5 rounded-xl bg-cardBg border border-borderSubtle hover:border-borderHighlight text-secondaryAccent font-bold text-xs transition-colors shrink-0"
                  >
                    Resume ➔
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Total Coding Problems */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Total Coding Qs
            </span>
            <div className="text-2xl font-black text-textMain font-mono">
              {allCodingProblems.length.toLocaleString()}
            </div>
            <span className="text-[10px] text-secondaryAccent font-medium">Across 20 Topics</span>
          </div>

          {/* Solved Problems */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Coding Solved
            </span>
            <div className="text-2xl font-black text-emerald-400 font-mono">
              {solvedCoding}
            </div>
            <span className="text-[10px] text-textMuted font-medium">In In-browser Sandbox</span>
          </div>

          {/* Difficulty Split */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Solved Split
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold pt-1">
              <span className="text-emerald-400">{difficultyCounts.easy}E</span>
              <span className="text-textMuted">•</span>
              <span className="text-amber-400">{difficultyCounts.medium}M</span>
              <span className="text-textMuted">•</span>
              <span className="text-rose-400">{difficultyCounts.hard}H</span>
            </div>
            <span className="text-[10px] text-textMuted font-medium">Easy / Med / Hard</span>
          </div>

          {/* Overall Accuracy */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Overall Accuracy
            </span>
            <div className="text-2xl font-black text-secondaryAccent font-mono">
              {accuracy}%
            </div>
            <span className="text-[10px] text-textMuted font-medium">Verified Submissions</span>
          </div>

          {/* Current Streak */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Daily Streak
            </span>
            <div className="text-2xl font-black text-amber-400 font-mono flex items-center gap-1">
              <Flame className="w-5 h-5 fill-amber-400" />
              <span>{streak} Days</span>
            </div>
            <span className="text-[10px] text-textMuted font-medium">Keep practicing!</span>
          </div>

          {/* Python Book Progress */}
          <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle space-y-1 shadow-sm card-hover">
            <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
              Python Book
            </span>
            <div className="text-2xl font-black text-textMain font-mono">
              {bookProgress.overallPercentage}%
            </div>
            <span className="text-[10px] text-secondaryAccent font-medium">
              {bookProgress.completedTopicsCount} / 55 Chapters
            </span>
          </div>
        </div>
      </section>

      {/* Weekly Activity Heatmap Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                Practice Consistency & Activity Heatmap
              </h2>
            </div>
            <span className="text-xs text-textMuted">Local Practice Log</span>
          </div>
          <ActivityHeatmap />
        </div>
      </section>

      {/* 20 Coding Topics Performance Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-secondaryAccent" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              20 Algorithmic Topics Performance & Practice
            </h2>
          </div>
          <Link
            href="/coding"
            className="text-xs font-semibold text-secondaryAccent hover:underline flex items-center gap-1"
          >
            <span>View All Topics</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {CODING_TOPICS.map((topic) => {
            const solvedInTopic = topicStats[topic] || 0;
            return (
              <Link
                key={topic}
                href={`/coding?topic=${encodeURIComponent(topic)}`}
                className="p-3.5 rounded-2xl bg-cardBg border border-borderSubtle hover:border-borderHighlight transition-all space-y-2 group shadow-sm card-hover"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-textMain group-hover:text-secondaryAccent transition-colors truncate">
                    {topic}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {solvedInTopic} / 105
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surfaceBg overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent"
                    style={{ width: `${Math.round((solvedInTopic / 105) * 100)}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recommended Placement Tracks (Preserved & Enhanced) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-secondaryAccent" />
            <h2 className="text-lg font-bold text-textMain tracking-tight">
              16 Campus Placement Company Hubs
            </h2>
          </div>
          <Link
            href="/companies"
            className="text-xs font-semibold text-secondaryAccent hover:underline flex items-center gap-1"
          >
            <span>View All 16 Recruiters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {companies.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-2xl bg-cardBg border border-borderSubtle hover:border-borderHighlight transition-all space-y-3 shadow-card card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-black text-textMain">{c.name}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30">
                  Placement Verified
                </span>
              </div>
              <p className="text-xs text-textMuted leading-relaxed">{c.desc}</p>
              <div className="pt-2 border-t border-borderSubtle/60 flex items-center justify-between">
                <Link
                  href={`/coding?company=${c.name}`}
                  className="text-xs font-bold text-secondaryAccent hover:underline"
                >
                  Coding Problems ➔
                </Link>
                <Link
                  href={`/practice?company=${c.name}`}
                  className="text-xs font-semibold text-textMuted hover:text-textMain"
                >
                  Pseudocode ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
