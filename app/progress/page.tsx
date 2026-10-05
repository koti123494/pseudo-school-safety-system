"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BarChart3,
  Flame,
  Target,
  CheckCircle2,
  XCircle,
  Bookmark,
  RotateCcw,
  Sparkles,
  Trophy,
  ArrowRight,
  TrendingUp,
  Terminal,
  BookOpen,
  Code2,
  Award,
} from "lucide-react";
import {
  getAttemptedIds,
  getAnswers,
  getStreakData,
  getBookmarks,
  getCodingSolvedIds,
  getCodingBookmarks,
  resetAllProgress,
} from "@/lib/storage";
import { allQuestions, totalQuestionsCount, getQuestionById } from "@/lib/questionsData";
import { allCodingProblems, getCodingProblemById } from "@/lib/codingProblemsData";
import { allPythonBookTopics, getOverallBookProgress } from "@/lib/pythonBookService";
import { Question, CodingProblem, CODING_TOPICS } from "@/types";
import ActivityHeatmap from "@/components/ActivityHeatmap";

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "coding" | "book" | "bookmarks" | "mistakes">("overview");

  // Pseudocode stats
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Question[]>([]);
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [confirmReset, setConfirmReset] = useState(false);

  // Coding stats
  const [codingSolvedIds, setCodingSolvedIds] = useState<string[]>([]);
  const [codingBookmarkIds, setCodingBookmarkIds] = useState<string[]>([]);
  const [codingBookmarks, setCodingBookmarks] = useState<CodingProblem[]>([]);

  // Book stats
  const [bookProgress, setBookProgress] = useState(getOverallBookProgress());

  // Topic & difficulty stats
  const [topicStats, setTopicStats] = useState<Record<string, { total: number; correct: number }>>({});
  const [difficultyStats, setDifficultyStats] = useState<Record<string, { total: number; correct: number }>>({
    Easy: { total: 0, correct: 0 },
    Medium: { total: 0, correct: 0 },
    Hard: { total: 0, correct: 0 },
  });

  const loadStats = () => {
    const attemptedIds = getAttemptedIds();
    const answers = getAnswers();
    const streakData = getStreakData();
    const bookmarks = getBookmarks();
    const cSolved = getCodingSolvedIds();
    const cBookmarks = getCodingBookmarks();

    const ansValues = Object.values(answers);
    const correct = ansValues.filter((a) => a.isCorrect).length;
    const wrong = ansValues.filter((a) => !a.isCorrect).length;
    const acc = ansValues.length > 0 ? Math.round((correct / ansValues.length) * 100) : 0;

    setAttemptedCount(attemptedIds.length);
    setCorrectCount(correct);
    setWrongCount(wrong);
    setAccuracy(acc);
    setCurrentStreak(streakData.currentStreak);
    setLongestStreak(streakData.longestStreak);
    setCodingSolvedIds(cSolved);
    setCodingBookmarkIds(cBookmarks);
    setBookProgress(getOverallBookProgress());

    // Bookmarked pseudocode
    const bmList = bookmarks
      .map((id) => getQuestionById(id))
      .filter((q): q is Question => q !== undefined);
    setBookmarkedQuestions(bmList);

    // Bookmarked coding problems
    const cBmList = cBookmarks
      .map((id) => getCodingProblemById(id))
      .filter((p): p is CodingProblem => p !== undefined);
    setCodingBookmarks(cBmList);

    // Wrong questions for review
    const wrList = ansValues
      .filter((a) => !a.isCorrect)
      .map((a) => getQuestionById(a.questionId))
      .filter((q): q is Question => q !== undefined);
    setWrongQuestions(wrList);

    // Topic, Difficulty breakdown
    const tStats: Record<string, { total: number; correct: number }> = {};
    const dStats: Record<string, { total: number; correct: number }> = {
      Easy: { total: 0, correct: 0 },
      Medium: { total: 0, correct: 0 },
      Hard: { total: 0, correct: 0 },
    };

    ansValues.forEach((rec) => {
      const q = getQuestionById(rec.questionId);
      if (!q) return;

      if (!tStats[q.topic]) tStats[q.topic] = { total: 0, correct: 0 };
      tStats[q.topic].total += 1;
      if (rec.isCorrect) tStats[q.topic].correct += 1;

      if (dStats[q.difficulty]) {
        dStats[q.difficulty].total += 1;
        if (rec.isCorrect) dStats[q.difficulty].correct += 1;
      }
    });

    setTopicStats(tStats);
    setDifficultyStats(dStats);
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handleReset = () => {
    resetAllProgress();
    loadStats();
    setConfirmReset(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSubtle pb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primaryAccent/20 text-secondaryAccent flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              My Placement Performance & Learning Analytics
            </h1>
          </div>
          <p className="text-xs text-textMuted mt-1">
            Tracking your Python coding practice, Python Mastery Book completion, and pseudocode logic traces.
          </p>
        </div>

        {/* Reset Confirmation Button */}
        <div>
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="px-3.5 py-1.5 rounded-xl border border-borderSubtle bg-cardBg hover:bg-surfaceBg text-textMuted hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Progress</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors"
              >
                Confirm Reset
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-2.5 py-1.5 rounded-xl bg-surfaceBg text-textMuted text-xs hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Analytics Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-borderSubtle">
        {[
          { id: "overview", label: "Overview & Heatmap", icon: BarChart3 },
          { id: "coding", label: `Coding Practice (${codingSolvedIds.length}/${allCodingProblems.length})`, icon: Terminal },
          { id: "book", label: `Python Book (${bookProgress.overallPercentage}%)`, icon: BookOpen },
          { id: "bookmarks", label: `Saved (${bookmarkedQuestions.length + codingBookmarks.length})`, icon: Bookmark },
          { id: "mistakes", label: `Review Mistakes (${wrongQuestions.length})`, icon: XCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "text-textMuted hover:text-white hover:bg-surfaceBg"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Top Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Coding Solved
              </span>
              <span className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                {codingSolvedIds.length}
              </span>
              <span className="text-[10px] text-textMuted mt-auto">
                of {allCodingProblems.length} problems
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Book Mastery
              </span>
              <span className="text-2xl font-black text-secondaryAccent mt-1 font-mono">
                {bookProgress.overallPercentage}%
              </span>
              <span className="text-[10px] text-textMuted mt-auto">
                {bookProgress.completedTopicsCount}/55 Chapters
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Pseudo Solved
              </span>
              <span className="text-2xl font-black text-textMain mt-1 font-mono">
                {attemptedCount}
              </span>
              <span className="text-[10px] text-textMuted mt-auto">
                of {totalQuestionsCount}+ questions
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Accuracy
              </span>
              <span className="text-2xl font-black text-success mt-1 font-mono">
                {accuracy}%
              </span>
              <span className="text-[10px] text-textMuted mt-auto">Placement target: &gt;80%</span>
            </div>

            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Current Streak
              </span>
              <span className="text-2xl font-black text-warning mt-1 font-mono flex items-center gap-1">
                <span>{currentStreak}</span>
                <Flame className="w-5 h-5 text-warning fill-warning" />
              </span>
              <span className="text-[10px] text-textMuted mt-auto">Days consecutive</span>
            </div>

            <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col card-hover shadow-sm">
              <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
                Best Streak
              </span>
              <span className="text-2xl font-black text-secondaryAccent mt-1 font-mono">
                {longestStreak}
              </span>
              <span className="text-[10px] text-textMuted mt-auto">Personal record</span>
            </div>
          </div>

          {/* Activity Heatmap */}
          <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle space-y-3 shadow-card">
            <h3 className="text-sm font-bold text-textMain uppercase tracking-wider">
              Study Consistency Heatmap
            </h3>
            <ActivityHeatmap />
          </div>

          {/* Difficulty & Pseudocode Topic breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Pseudocode by Difficulty
              </h3>
              <div className="space-y-3">
                {(["Easy", "Medium", "Hard"] as const).map((diff) => {
                  const stat = difficultyStats[diff] || { total: 0, correct: 0 };
                  const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                  return (
                    <div key={diff} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-300 font-medium">{diff}</span>
                        <span className="text-textMuted">
                          {stat.correct}/{stat.total} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surfaceBg overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            diff === "Easy"
                              ? "bg-emerald-500"
                              : diff === "Medium"
                              ? "bg-amber-500"
                              : "bg-rose-500"
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-4 lg:col-span-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Pseudocode Topic Accuracy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(topicStats).map(([topic, stat]) => {
                  const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                  return (
                    <div
                      key={topic}
                      className="p-3 rounded-xl bg-surfaceBg/60 border border-borderSubtle space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{topic}</span>
                        <span className="font-mono text-secondaryAccent font-bold">{pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-cardBg overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-textMuted font-mono">
                        {stat.correct} of {stat.total} correct
                      </div>
                    </div>
                  );
                })}
                {Object.keys(topicStats).length === 0 && (
                  <div className="text-xs text-textMuted py-4 col-span-2 italic">
                    Start pseudocode practice to view topic accuracy metrics.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CODING PRACTICE TAB */}
      {activeTab === "coding" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">20 Algorithmic Topics Breakdown</h3>
                <p className="text-xs text-textMuted">
                  105 problems available per topic (2,100 total).
                </p>
              </div>
              <Link
                href="/coding"
                className="px-4 py-2 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold shadow-glow transition-all"
              >
                Go to Coding Studio ➔
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {CODING_TOPICS.map((topic) => {
                const solvedSet = new Set(codingSolvedIds);
                const solvedCount = allCodingProblems.filter(
                  (p) => p.topic === topic && solvedSet.has(p.id)
                ).length;
                const pct = Math.round((solvedCount / 105) * 100);

                return (
                  <Link
                    key={topic}
                    href={`/coding?topic=${encodeURIComponent(topic)}`}
                    className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle hover:border-borderHighlight space-y-1.5 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white truncate">{topic}</span>
                      <span className="font-mono text-emerald-400 font-bold">{pct}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-cardBg overflow-hidden">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-textMuted font-mono">
                      {solvedCount} / 105 Solved
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PYTHON BOOK TAB */}
      {activeTab === "book" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Python Book Completion Tracker</h3>
                <p className="text-xs text-textMuted">
                  Dynamic breakdown of 55 comprehensive learning chapters.
                </p>
              </div>
              <Link
                href="/book"
                className="px-4 py-2 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold shadow-glow transition-all"
              >
                Open Python Book ➔
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-surfaceBg/60 border border-borderSubtle text-xs font-mono">
              <div>
                <span className="text-textMuted block text-[10px]">Overall Progress:</span>
                <span className="text-lg font-bold text-secondaryAccent">
                  {bookProgress.overallPercentage}%
                </span>
              </div>
              <div>
                <span className="text-textMuted block text-[10px]">Theory Read:</span>
                <span className="text-lg font-bold text-white">
                  {bookProgress.theoryPercentage}%
                </span>
              </div>
              <div>
                <span className="text-textMuted block text-[10px]">Examples Practiced:</span>
                <span className="text-lg font-bold text-white">
                  {bookProgress.examplesPercentage}%
                </span>
              </div>
              <div>
                <span className="text-textMuted block text-[10px]">Quizzes Solved:</span>
                <span className="text-lg font-bold text-emerald-400">
                  {bookProgress.mcqPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOOKMARKS TAB */}
      {activeTab === "bookmarks" && (
        <div className="space-y-5">
          <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-secondaryAccent" />
              Bookmarked Coding Problems ({codingBookmarks.length})
            </h3>
            {codingBookmarks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {codingBookmarks.map((prob) => (
                  <Link
                    key={prob.id}
                    href={`/coding?id=${prob.id}`}
                    className="p-3.5 rounded-xl bg-surfaceBg border border-borderSubtle hover:border-borderHighlight flex items-center justify-between text-xs transition-colors"
                  >
                    <div>
                      <div className="font-bold text-white">{prob.title}</div>
                      <div className="text-[10px] text-textMuted font-mono">
                        {prob.id} • {prob.topic} • {prob.difficulty}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-secondaryAccent" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-xs text-textMuted italic">No coding problems bookmarked yet.</div>
            )}
          </div>

          <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-secondaryAccent" />
              Bookmarked Pseudocode Questions ({bookmarkedQuestions.length})
            </h3>
            {bookmarkedQuestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {bookmarkedQuestions.map((q) => (
                  <Link
                    key={q.id}
                    href={`/practice?search=${encodeURIComponent(q.id)}`}
                    className="p-3.5 rounded-xl bg-surfaceBg border border-borderSubtle hover:border-borderHighlight flex items-center justify-between text-xs transition-colors"
                  >
                    <div>
                      <div className="font-bold text-white">{q.title}</div>
                      <div className="text-[10px] text-textMuted font-mono">
                        {q.id} • {q.company} • {q.difficulty}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-secondaryAccent" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-xs text-textMuted italic">No pseudocode questions bookmarked yet.</div>
            )}
          </div>
        </div>
      )}

      {/* MISTAKES TAB */}
      {activeTab === "mistakes" && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                Mistakes Revision List ({wrongQuestions.length})
              </h3>
              {wrongQuestions.length > 0 && (
                <Link
                  href="/practice"
                  className="px-3 py-1.5 rounded-xl bg-primaryAccent text-white text-xs font-bold shadow-glow"
                >
                  Retry All Mistakes
                </Link>
              )}
            </div>

            {wrongQuestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {wrongQuestions.map((q) => (
                  <Link
                    key={q.id}
                    href={`/practice?search=${encodeURIComponent(q.id)}`}
                    className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle hover:border-rose-500/40 flex items-center justify-between text-xs transition-colors"
                  >
                    <div>
                      <div className="font-bold text-white">{q.title}</div>
                      <div className="text-[10px] text-rose-300 font-mono">
                        {q.id} • {q.company} • {q.topic}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-rose-400" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-xs text-textMuted italic">
                No mistakes recorded! Great job maintaining accuracy.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
