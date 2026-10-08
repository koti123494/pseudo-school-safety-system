"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";
import {
  allCodingProblems,
  filterCodingProblems,
  getCodingProblemById,
} from "@/lib/codingProblemsData";
import { CodingProblem, CODING_TOPICS, COMPANY_LIST } from "@/types";

// Dynamic imports with instant skeleton loaders to make initial load <300ms
const PythonBookPractice = dynamic(() => import("@/components/PythonBookPractice"), {
  ssr: false,
  loading: () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-pulse">
      <div className="h-28 rounded-3xl bg-purple-950/20 border border-purple-500/20" />
      <div className="h-24 rounded-2xl bg-secondaryBg/60 border border-borderSubtle" />
      <div className="h-44 rounded-3xl bg-secondaryBg/40 border border-borderSubtle" />
    </div>
  ),
});

const CodingEditor = dynamic(() => import("@/components/CodingEditor"), {
  ssr: false,
  loading: () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4 animate-pulse">
      <div className="h-14 rounded-2xl bg-secondaryBg border border-borderSubtle" />
      <div className="h-96 rounded-3xl bg-[#1e1e2e] border border-borderSubtle" />
    </div>
  ),
});
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

  // Mode: "book" (Python Book 50 Topics with 4-Line Defs, Examples & MCQs) or "sandbox" (Monaco Editor)
  const [viewMode, setViewMode] = useState<"book" | "sandbox">("book");

  // Filters state
  const [selectedTopic, setSelectedTopic] = useState<string>("Strings");
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

  const refreshUserStats = () => {
    setSolvedIds(getCodingSolvedIds());
    setBookmarkIds(getCodingBookmarks());
  };

  useEffect(() => {
    refreshUserStats();
  }, []);

  // Sync from URL params
  useEffect(() => {
    const t = searchParams?.get("topic");
    if (t) {
      setSelectedTopic(t);
    }
    const c = searchParams?.get("company");
    if (c) setSelectedCompany(c);
    const d = searchParams?.get("difficulty");
    if (d) setSelectedDifficulty(d);
    const s = searchParams?.get("search");
    if (s) setSearchQuery(s);
  }, [searchParams]);

  // Filtered problems list
  const filteredProblems: CodingProblem[] = useMemo(() => {
    return filterCodingProblems({
      topic: selectedTopic,
      company: selectedCompany,
      difficulty: selectedDifficulty,
      status: selectedStatus,
      search: searchQuery,
    });
  }, [selectedTopic, selectedCompany, selectedDifficulty, selectedStatus, searchQuery]);

  // Current problem
  const currentProblem: CodingProblem | undefined = useMemo(() => {
    if (filteredProblems.length === 0) return undefined;
    const found = filteredProblems.find((p) => p.id === selectedProblemId);
    return found || filteredProblems[0];
  }, [filteredProblems, selectedProblemId]);

  useEffect(() => {
    if (filteredProblems.length > 0) {
      const exists = filteredProblems.some((p) => p.id === selectedProblemId);
      if (!exists) {
        setSelectedProblemId(filteredProblems[0].id);
      }
    } else {
      setSelectedProblemId("");
    }
  }, [filteredProblems, selectedProblemId]);

  useEffect(() => {
    if (currentProblem) {
      setLastActivity({
        lastCodingProblemId: currentProblem.id,
        lastCodingProblemTitle: currentProblem.title,
      });
    }
  }, [currentProblem]);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    const updated = filterCodingProblems({
      topic,
      company: selectedCompany,
      difficulty: selectedDifficulty,
      status: selectedStatus,
      search: searchQuery,
    });
    if (updated.length > 0) {
      setSelectedProblemId(updated[0].id);
    }
  };

  const handleResetFilters = () => {
    setSelectedTopic("All");
    setSelectedCompany("All");
    setSelectedDifficulty("All");
    setSelectedStatus("All");
    setSearchQuery("");
    if (allCodingProblems.length > 0) {
      setSelectedProblemId(allCodingProblems[0].id);
    }
  };

  return (
    <div className="space-y-4">
      {/* View Switcher Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-surfaceBg border border-borderSubtle w-fit shadow-sm">
          <button
            onClick={() => setViewMode("book")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              viewMode === "book"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                : "text-textMuted hover:text-white hover:bg-cardBg"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Python Book & MCQs (50 Topics)</span>
          </button>
          <button
            onClick={() => setViewMode("sandbox")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              viewMode === "sandbox"
                ? "bg-primaryAccent text-white shadow-glow"
                : "text-textMuted hover:text-white hover:bg-cardBg"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Monaco Coding Studio Sandbox</span>
          </button>
        </div>
      </div>

      {viewMode === "book" ? (
        /* Full Python Book Experience */
        <PythonBookPractice initialTopic={selectedTopic === "All" ? "Strings" : selectedTopic} />
      ) : (
        /* Monaco Sandbox Mode */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl bg-cardBg border border-borderSubtle">
            <div className="text-xs text-textMuted">
              Found: <strong className="text-secondaryAccent font-mono">{filteredProblems.length}</strong> matching problems | Active:{" "}
              <strong className="text-white font-mono">{currentProblem?.id}</strong> - {currentProblem?.title}
            </div>
            <div className="flex items-center gap-2">
              {currentProblem && (
                <button
                  onClick={() => setViewMode("book")}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold hover:bg-purple-500/30 transition-colors"
                >
                  View Topic Theory & MCQs →
                </button>
              )}
            </div>
          </div>

          {currentProblem ? (
            <CodingEditor
              problem={currentProblem}
              onSolved={refreshUserStats}
              onNext={() => {}}
            />
          ) : (
            <div className="p-12 text-center text-textMuted bg-cardBg rounded-3xl border border-borderSubtle">
              No matching problems found.
            </div>
          )}
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
          Loading Python Practice...
        </div>
      }
    >
      <CodingPageContent />
    </Suspense>
  );
}
