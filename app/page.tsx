"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutKoti from "@/components/AboutKoti";
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
  Mail,
  Github,
  GraduationCap,
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

      {/* About Koti Section */}
      <AboutKoti />

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

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-cardBg border border-borderSubtle p-6 sm:p-8 md:p-10 shadow-card text-center space-y-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondaryAccent/10 border border-secondaryAccent/20 text-secondaryAccent text-xs font-bold font-mono uppercase tracking-wider">
              <span>Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
              Connect with Koti
            </h2>
            <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
              Have doubts about Python courses, placement prep, or need mentorship? Reach out directly anytime!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Email Button */}
            <a
              href="mailto:contact@kotipython.com"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Email Koti</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 shadow-md transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
