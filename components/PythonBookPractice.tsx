"use client";

import React, { useState, useEffect, useMemo, Suspense, lazy } from "react";
import {
  pythonBookTopics,
  PythonTopic,
  PythonBookExample,
} from "@/data/pythonBook";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  Award,
  Plus,
} from "lucide-react";
import Timer from "@/components/Timer";

// LAZY LOAD TOPIC CONTENT (Item 1)
const TopicContent = lazy(() => import("@/components/TopicContent"));

interface PythonBookPracticeProps {
  initialTopic?: string;
}

export default function PythonBookPractice({ initialTopic }: PythonBookPracticeProps) {
  // CACHE WITH useMemo (Item 5)
  const all50Topics = useMemo(() => pythonBookTopics, []);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTopicName, setSelectedTopicName] = useState<string>(
    initialTopic || "Strings" // default to Strings
  );

  // LAZY LOAD TOPICS CHIPS (Item 1: Show 10, then Load More button)
  const [visibleTopics, setVisibleTopics] = useState<number>(10);

  // Search filtered topics cached with useMemo (Item 5)
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return all50Topics;
    const q = searchQuery.trim().toLowerCase();
    return all50Topics.filter(
      (t) =>
        t.topicName.toLowerCase().includes(q) ||
        t.topic.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q)
    );
  }, [all50Topics, searchQuery]);

  // Active topic index
  const activeTopicIndex = useMemo(() => {
    const idx = all50Topics.findIndex(
      (t) =>
        t.topic.toLowerCase() === selectedTopicName.toLowerCase() ||
        t.topicName.toLowerCase() === selectedTopicName.toLowerCase()
    );
    return idx >= 0 ? idx : 0;
  }, [all50Topics, selectedTopicName]);

  const currentTopic: PythonTopic = all50Topics[activeTopicIndex] || all50Topics[0];

  // Auto-expand visible topics if active topic is beyond visible limit
  useEffect(() => {
    if (activeTopicIndex >= visibleTopics) {
      setVisibleTopics(Math.min(all50Topics.length, Math.max(visibleTopics, activeTopicIndex + 5)));
    }
  }, [activeTopicIndex, visibleTopics, all50Topics.length]);

  // Copy states
  const [copiedSyntax, setCopiedSyntax] = useState<boolean>(false);
  const [copiedExampleIndex, setCopiedExampleIndex] = useState<number | null>(null);

  // Running examples state
  const [runningExamples, setRunningExamples] = useState<Record<number, boolean>>({});
  const [exampleOutputs, setExampleOutputs] = useState<Record<number, string>>({});

  // MCQs state
  const [userAnswers, setUserAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  // Load saved progress from localStorage
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem("python_book_completed_topics");
      if (savedCompleted) {
        setCompletedTopics(JSON.parse(savedCompleted));
      }
      const savedAnswers = localStorage.getItem(`python_book_mcq_${currentTopic.id}`);
      if (savedAnswers) {
        setUserAnswers(JSON.parse(savedAnswers));
      } else {
        setUserAnswers({});
      }
    } catch {
      // ignore
    }
  }, [currentTopic.id]);

  // MCQ score calculation
  const score = useMemo(() => {
    let correct = 0;
    currentTopic.mcqs.forEach((mcq) => {
      if (userAnswers[mcq.id] === mcq.correct) {
        correct++;
      }
    });
    return { correct, total: currentTopic.mcqs.length };
  }, [currentTopic, userAnswers]);

  const handleTopicClick = (topicName: string) => {
    setSelectedTopicName(topicName);
    setCopiedSyntax(false);
    setExampleOutputs({});
  };

  const handlePrevTopic = () => {
    if (activeTopicIndex > 0) {
      handleTopicClick(all50Topics[activeTopicIndex - 1].topicName);
    }
  };

  const handleNextTopic = () => {
    if (activeTopicIndex < all50Topics.length - 1) {
      handleTopicClick(all50Topics[activeTopicIndex + 1].topicName);
    }
  };

  const handleCopySyntax = () => {
    navigator.clipboard.writeText(currentTopic.syntax);
    setCopiedSyntax(true);
    setTimeout(() => setCopiedSyntax(false), 2000);
  };

  const handleCopyExample = (idx: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedExampleIndex(idx);
    setTimeout(() => setCopiedExampleIndex(null), 2000);
  };

  const handleRunExample = (idx: number, ex: PythonBookExample) => {
    setRunningExamples((prev) => ({ ...prev, [idx]: true }));
    setTimeout(() => {
      setExampleOutputs((prev) => ({ ...prev, [idx]: ex.output }));
      setRunningExamples((prev) => ({ ...prev, [idx]: false }));
    }, 200);
  };

  const handleSelectMCQOption = (mcqId: string, option: "A" | "B" | "C" | "D") => {
    const updated = { ...userAnswers, [mcqId]: option };
    setUserAnswers(updated);
    try {
      localStorage.setItem(`python_book_mcq_${currentTopic.id}`, JSON.stringify(updated));
    } catch {}
  };

  // Sliced topics for ultra-fast rendering (Item 1)
  const displayedTopicChips = useMemo(() => {
    return filteredTopics.slice(0, visibleTopics);
  }, [filteredTopics, visibleTopics]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner & Progress Header - Fast clean CSS styling */}
      <div className="bg-gradient-to-r from-purple-950/40 via-surfaceBg to-indigo-950/40 border border-purple-500/30 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>PYTHON BOOK — 50 ESSENTIAL TOPICS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Placement Python Mastery & Practice
          </h1>
          <p className="text-xs sm:text-sm text-textMuted max-w-2xl leading-relaxed">
            Master 50 Python topics with instant 4-line definitions, syntax reference, runnable examples, and placement MCQs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Timer difficulty="Medium" />

          {/* Progress Card */}
          <div className="px-4 py-2.5 rounded-2xl bg-cardBg border border-borderSubtle flex flex-col justify-center min-w-[170px] shadow-sm">
            <div className="flex items-center justify-between text-xs font-bold text-gray-900 dark:text-white mb-1">
              <span className="flex items-center gap-1.5 text-purple-400">
                <Award className="w-4 h-4" />
                Progress
              </span>
              <span className="font-mono text-purple-400">
                {activeTopicIndex + 1}/50
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-surfaceBg overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${Math.round(((activeTopicIndex + 1) / 50) * 100)}%` }}
              />
            </div>
            <span className="text-[10px] text-textMuted font-mono mt-1">
              Topic {activeTopicIndex + 1}/50 selected ({completedTopics.length} mastered)
            </span>
          </div>
        </div>
      </div>

      {/* Filter, Search & Topic Navigation Bar */}
      <div className="bg-surfaceBg border border-borderSubtle rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-borderSubtle">
          {/* Search Input with Debounced feel */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topic (e.g., Strings, Lists, Loops)..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-cardBg border border-borderSubtle text-gray-900 dark:text-white placeholder-textMuted focus:outline-none focus:border-purple-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-textMuted hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 justify-between sm:justify-end">
            <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
              Showing {displayedTopicChips.length} of {filteredTopics.length} topics
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevTopic}
                disabled={activeTopicIndex === 0}
                className="px-3 py-1.5 rounded-xl border border-borderSubtle bg-cardBg text-xs font-medium text-gray-900 dark:text-white hover:bg-surfaceBg disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
                title="Previous Topic"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>
              <button
                onClick={handleNextTopic}
                disabled={activeTopicIndex === all50Topics.length - 1}
                className="px-3 py-1.5 rounded-xl border border-borderSubtle bg-cardBg text-xs font-medium text-gray-900 dark:text-white hover:bg-surfaceBg disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
                title="Next Topic"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 10 Topic Chips with Load More (Item 1: LAZY LOAD TOPICS) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-borderSubtle">
          {displayedTopicChips.map((t) => {
            const isSelected = t.topicName.toLowerCase() === currentTopic.topicName.toLowerCase();
            const isDone = completedTopics.includes(t.id);
            return (
              <button
                key={t.id}
                onClick={() => handleTopicClick(t.topicName)}
                className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-500/30 ring-1 ring-purple-400"
                    : "bg-cardBg hover:bg-surfaceBg border border-borderSubtle text-gray-800 dark:text-gray-300 hover:text-white"
                }`}
              >
                {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                <span>
                  {t.id.replace("PY-TOPIC-", "")}. {t.topicName}
                </span>
              </button>
            );
          })}

          {/* Load More Topics Button (Item 1) */}
          {visibleTopics < filteredTopics.length && (
            <button
              onClick={() => setVisibleTopics((prev) => Math.min(filteredTopics.length, prev + 10))}
              className="px-3 py-1 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 flex items-center gap-1 shrink-0 transition-colors"
            >
              <Plus className="w-3 h-3" />
              <span>Load More (+10)</span>
            </button>
          )}

          {visibleTopics < filteredTopics.length && (
            <button
              onClick={() => setVisibleTopics(filteredTopics.length)}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono text-textMuted hover:text-white bg-cardBg border border-borderSubtle shrink-0 transition-colors"
            >
              Show All (50)
            </button>
          )}
        </div>
      </div>

      {/* LAZY LOADED TOPIC CONTENT (Item 1 & 4) */}
      <Suspense
        fallback={
          <div className="p-8 rounded-3xl bg-cardBg border border-borderSubtle space-y-4 animate-pulse">
            <div className="h-8 w-60 rounded-xl bg-white/10" />
            <div className="h-32 rounded-2xl bg-purple-950/30 border border-purple-500/20" />
            <div className="h-16 rounded-xl bg-white/5" />
          </div>
        }
      >
        <TopicContent
          key={currentTopic.id}
          topic={currentTopic}
          onCopySyntax={handleCopySyntax}
          copiedSyntax={copiedSyntax}
          onRunExample={handleRunExample}
          runningExamples={runningExamples}
          exampleOutputs={exampleOutputs}
          copiedExampleIndex={copiedExampleIndex}
          onCopyExample={handleCopyExample}
          userAnswers={userAnswers}
          onSelectMCQ={handleSelectMCQOption}
          score={score}
        />
      </Suspense>
    </div>
  );
}
