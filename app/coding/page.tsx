"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CodingEditor from "@/components/CodingEditor";
import {
  allCodingProblems,
  filterCodingProblems,
  getCodingProblemById,
} from "@/lib/codingProblemsData";
import { CodingProblem, CODING_TOPICS, COMPANY_LIST } from "@/types";
import {
  Terminal,
  Code2,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Search,
  Filter,
  Bookmark,
  Sparkles,
  ArrowUpDown,
  RotateCcw,
  Layers,
} from "lucide-react";
import {
  getCodingSolvedIds,
  getCodingBookmarks,
  toggleCodingBookmark,
  setLastActivity,
} from "@/lib/storage";

function CodingPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filters state
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [selectedCompany, setSelectedCompany] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<"All" | "Solved" | "Unsolved" | "Bookmarked">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Solved & Bookmark sets
  const [solvedIds, setSolvedIds] = useState<string[]>([]);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);

  // Selected problem for the editor
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    allCodingProblems[0]?.id || ""
  );

  // Sync with URL query params
  useEffect(() => {
    const topicParam = searchParams.get("topic");
    if (topicParam) setSelectedTopic(topicParam);

    const compParam = searchParams.get("company");
    if (compParam) setSelectedCompany(compParam);

    const diffParam = searchParams.get("difficulty");
    if (diffParam) setSelectedDifficulty(diffParam);

    const idParam = searchParams.get("id");
    if (idParam && getCodingProblemById(idParam)) {
      setSelectedProblemId(idParam);
    }
  }, [searchParams]);

  const refreshUserStats = () => {
    setSolvedIds(getCodingSolvedIds());
    setBookmarkIds(getCodingBookmarks());
  };

  useEffect(() => {
    refreshUserStats();
  }, []);

  // Filtered problems list
  const filteredProblems = useMemo(() => {
    return filterCodingProblems({
      topic: selectedTopic,
      company: selectedCompany,
      difficulty: selectedDifficulty,
      status: selectedStatus,
      search: searchQuery,
    });
  }, [selectedTopic, selectedCompany, selectedDifficulty, selectedStatus, searchQuery, solvedIds, bookmarkIds]);

  const currentProblem: CodingProblem =
    getCodingProblemById(selectedProblemId) ||
    filteredProblems[0] ||
    allCodingProblems[0];

  useEffect(() => {
    if (currentProblem) {
      setLastActivity({
        lastCodingProblemId: currentProblem.id,
        lastCodingProblemTitle: currentProblem.title,
      });
    }
  }, [currentProblem]);

  const handleSelectProblem = (prob: CodingProblem) => {
    setSelectedProblemId(prob.id);
  };

  const handleToggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    toggleCodingBookmark(id);
    refreshUserStats();
  };

  const handleResetFilters = () => {
    setSelectedTopic("All");
    setSelectedCompany("All");
    setSelectedDifficulty("All");
    setSelectedStatus("All");
    setSearchQuery("");
  };

  const currentIdx = filteredProblems.findIndex((p) => p.id === currentProblem?.id);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx >= 0 && currentIdx < filteredProblems.length - 1;

  const handlePrev = () => {
    if (hasPrev) setSelectedProblemId(filteredProblems[currentIdx - 1].id);
  };

  const handleNext = () => {
    if (hasNext) setSelectedProblemId(filteredProblems[currentIdx + 1].id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-borderSubtle pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primaryAccent to-secondaryAccent p-0.5 text-white flex items-center justify-center shadow-glow">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-textMain tracking-tight flex items-center gap-2">
                Python Coding Practice Studio
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/40">
                  {allCodingProblems.length} Problems
                </span>
              </h1>
            </div>
          </div>
          <p className="text-xs text-textMuted mt-1">
            20 algorithmic topics, placement test cases, company-specific patterns, and real-time Python execution.
          </p>
        </div>

        {/* Global Stats */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-cardBg border border-borderSubtle text-xs font-mono text-emerald-400 flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>
              Solved: <strong className="text-textMain">{solvedIds.length}</strong> / {allCodingProblems.length}
            </span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-cardBg border border-borderSubtle text-xs font-mono text-secondaryAccent flex items-center gap-2 shadow-sm">
            <Bookmark className="w-4 h-4 text-secondaryAccent" />
            <span>
              Saved: <strong className="text-textMain">{bookmarkIds.length}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="p-4 rounded-2xl bg-cardBg border border-borderSubtle shadow-card space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search Input */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <Search className="w-4 h-4 text-textMuted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problem, ID, logic..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMain placeholder-textMuted/60 focus:outline-none focus:border-primaryAccent transition-colors"
            />
          </div>

          {/* Topic Select */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full py-2 px-3 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-primaryAccent cursor-pointer"
          >
            <option value="All">All Topics ({CODING_TOPICS.length})</option>
            {CODING_TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Company Select */}
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="w-full py-2 px-3 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-primaryAccent cursor-pointer"
          >
            <option value="All">All Companies ({COMPANY_LIST.length})</option>
            {COMPANY_LIST.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Difficulty Select */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full py-2 px-3 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-primaryAccent cursor-pointer"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Status Select & Reset */}
          <div className="flex items-center gap-2">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="w-full py-2 px-3 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-primaryAccent cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Solved">Solved Only</option>
              <option value="Unsolved">Unsolved Only</option>
              <option value="Bookmarked">Bookmarked</option>
            </select>

            <button
              onClick={handleResetFilters}
              title="Reset Filters"
              className="p-2 rounded-xl bg-surfaceBg hover:bg-surfaceHover border border-borderSubtle text-textMuted hover:text-textMain transition-colors shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Topic Chips Strip */}
        <div className="overflow-x-auto pb-1 pt-1 border-t border-borderSubtle/60">
          <div className="flex items-center gap-1.5 min-w-max">
            <button
              onClick={() => setSelectedTopic("All")}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                selectedTopic === "All"
                  ? "bg-primaryAccent text-white"
                  : "bg-surfaceBg/60 text-textMuted hover:text-textMain"
              }`}
            >
              All Topics
            </button>
            {CODING_TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                  selectedTopic === topic
                    ? "bg-primaryAccent text-white shadow-sm"
                    : "bg-surfaceBg/60 text-textMuted hover:text-textMain"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Navigation & Selection Drawer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl bg-cardBg border border-borderSubtle shadow-sm">
        <div className="flex items-center gap-2 text-xs text-textMuted">
          <span>Found:</span>
          <strong className="text-secondaryAccent font-mono">{filteredProblems.length}</strong>
          <span>matching problems</span>
          {currentProblem && (
            <span className="hidden sm:inline text-textMuted font-mono">
              | Active: <strong className="text-textMain">{currentProblem.id}</strong>
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            disabled={!hasPrev}
            onClick={handlePrev}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
              hasPrev
                ? "bg-surfaceBg border-borderSubtle text-textMain hover:border-borderHighlight cursor-pointer"
                : "opacity-40 border-borderSubtle text-textMuted cursor-not-allowed"
            }`}
          >
            ← Prev Problem
          </button>
          <button
            disabled={!hasNext}
            onClick={handleNext}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1 transition-all ${
              hasNext
                ? "bg-surfaceBg border-borderSubtle text-textMain hover:border-borderHighlight cursor-pointer"
                : "opacity-40 border-borderSubtle text-textMuted cursor-not-allowed"
            }`}
          >
            Next Problem →
          </button>
        </div>
      </div>

      {/* Main LeetCode-style Coding Editor */}
      {currentProblem ? (
        <CodingEditor
          problem={currentProblem}
          onSolved={refreshUserStats}
          onNext={handleNext}
        />
      ) : (
        <div className="p-12 rounded-3xl bg-cardBg border border-borderSubtle text-center space-y-4 max-w-md mx-auto">
          <Layers className="w-10 h-10 text-secondaryAccent mx-auto" />
          <h3 className="text-lg font-bold text-white">No Matching Coding Problems</h3>
          <p className="text-xs text-textMuted">
            Try adjusting your search query, topic filter, or reset all filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-primaryAccent text-white text-xs font-bold shadow-glow"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function PythonCodingPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto p-12 text-center text-textMuted font-mono text-sm">
          Loading Python Coding Practice Studio...
        </div>
      }
    >
      <CodingPageContent />
    </Suspense>
  );
}
