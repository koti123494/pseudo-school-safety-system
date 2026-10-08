"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search,
  Filter,
  Building,
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Zap,
  Award,
  Play,
  Bookmark,
  CheckCircle2,
} from "lucide-react";
import {
  allPseudoCodeQuestions,
  PSEUDO_TOPICS,
  PSEUDO_COMPANIES,
  getCompanyQuestionCounts,
} from "@/data/pseudoCode5000";
import { PseudoCodeQuestion } from "@/types";
import { getBookmarks, getWrongAnswers } from "@/lib/streak";
import QuestionCard from "@/components/QuestionCard";
import StreakLeaderboard from "@/components/StreakLeaderboard";
import CompanyFilter from "@/components/features/CompanyFilter";
import TeluguToggle from "@/components/features/TeluguToggle";

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filters state
  const initialCompany = searchParams?.get("company") || "All";
  const initialTopic = searchParams?.get("topic") || "All";
  const initialDiff = searchParams?.get("diff") || "All";
  const initialPage = parseInt(searchParams?.get("page") || "1", 10);

  const [selectedCompany, setSelectedCompany] = useState<string>(initialCompany);
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopic);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(initialDiff);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isRevisionOnly, setIsRevisionOnly] = useState<boolean>(false);
  const [jumpPageInput, setJumpPageInput] = useState<string>("");

  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [wrongIds, setWrongIds] = useState<string[]>([]);

  const PAGE_SIZE = 10;

  useEffect(() => {
    setBookmarkIds(getBookmarks());
    setWrongIds(getWrongAnswers());

    const refreshSaved = () => {
      setBookmarkIds(getBookmarks());
      setWrongIds(getWrongAnswers());
    };
    window.addEventListener("bookmarks_updated", refreshSaved);
    window.addEventListener("storage", refreshSaved);
    return () => {
      window.removeEventListener("bookmarks_updated", refreshSaved);
      window.removeEventListener("storage", refreshSaved);
    };
  }, []);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    const revisionSet = new Set([...bookmarkIds, ...wrongIds]);

    return allPseudoCodeQuestions.filter((q) => {
      // Revision filter
      if (isRevisionOnly && !revisionSet.has(q.id)) {
        return false;
      }
      // Company filter
      if (selectedCompany !== "All" && !q.companies.includes(selectedCompany)) {
        return false;
      }
      // Topic filter
      if (selectedTopic !== "All" && q.topic !== selectedTopic) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== "All" && q.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const s = searchQuery.trim().toLowerCase();
        const matchId = q.id.toLowerCase().includes(s);
        const matchTopic = q.topic.toLowerCase().includes(s);
        const matchSub = q.subTopic.toLowerCase().includes(s);
        const matchQ = q.question.toLowerCase().includes(s);
        const matchCode = q.pseudoCode.toLowerCase().includes(s);
        const matchCompany = q.companies.some((c) => c.toLowerCase().includes(s));
        if (!matchId && !matchTopic && !matchSub && !matchQ && !matchCode && !matchCompany) {
          return false;
        }
      }
      return true;
    });
  }, [
    selectedCompany,
    selectedTopic,
    selectedDifficulty,
    searchQuery,
    isRevisionOnly,
    bookmarkIds,
    wrongIds,
  ]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / PAGE_SIZE));

  // Reset to page 1 if current page overflows after filtering
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handlePageChange = (newPage: number) => {
    const pageNum = Math.min(totalPages, Math.max(1, newPage));
    setCurrentPage(pageNum);
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(jumpPageInput, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
      handlePageChange(parsed);
      setJumpPageInput("");
    }
  };

  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredQuestions.slice(start, start + PAGE_SIZE);
  }, [filteredQuestions, currentPage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Header & Streak Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-surfaceBg via-secondaryBg to-surfaceBg border border-borderSubtle shadow-xl">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-accentPurple/20 text-accentPurple border border-accentPurple/30 text-xs font-mono font-bold">
              5,000 Questions Bank
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
              LeetCode + InterviewBit Mode
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
            Universal Pseudocode Practice Hub
          </h1>
          <p className="text-xs sm:text-sm text-textMuted max-w-2xl leading-relaxed">
            Pure keyword pseudocode questions categorized across 50 topics and 7 top MNCs.
            Filtered 10 per page with instant dry runs and AI Telugu explanations.
          </p>
        </div>

        {/* Right: Streak & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <StreakLeaderboard />
          <TeluguToggle />
        </div>
      </div>

      {/* Quick Navigation Action Row */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
        <Link
          href="/mock-test"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accentPurple to-primary hover:opacity-95 text-white text-xs font-mono font-bold transition-all shadow-md shrink-0 active:scale-95"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          Start Mock Test (30m)
        </Link>

        <Link
          href="/create-test"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceBg hover:bg-surfaceBorder text-textMain border border-borderSubtle text-xs font-mono font-semibold transition-colors shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-accentCyan" />
          Create Custom Test
        </Link>

        <Link
          href="/bookmarks"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceBg hover:bg-surfaceBorder text-textMain border border-borderSubtle text-xs font-mono font-semibold transition-colors shrink-0"
        >
          <Bookmark className="w-3.5 h-3.5 text-amber-400" />
          Bookmarks & Notes ({bookmarkIds.length})
        </Link>

        <Link
          href="/certificate"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surfaceBg hover:bg-surfaceBorder text-textMain border border-borderSubtle text-xs font-mono font-semibold transition-colors shrink-0"
        >
          <Award className="w-3.5 h-3.5 text-amber-400" />
          Certificates
        </Link>

        <button
          onClick={() => {
            setIsRevisionOnly(!isRevisionOnly);
            setCurrentPage(1);
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-colors shrink-0 ${
            isRevisionOnly
              ? "bg-rose-500/20 text-rose-300 border-rose-500/50 ring-1 ring-rose-500/40"
              : "bg-surfaceBg hover:bg-surfaceBorder text-textMuted border-borderSubtle"
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
          {isRevisionOnly ? "Exit Revision Mode" : "Revision Mode Only"}
        </button>
      </div>

      {/* FEATURE 1: Company Filter Ribbon */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surfaceBg border border-borderSubtle shadow-md">
        <CompanyFilter
          selectedCompany={selectedCompany}
          onSelectCompany={(c) => {
            setSelectedCompany(c);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-surfaceBg border border-borderSubtle shadow-md space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Box */}
          <div className="relative lg:col-span-2">
            <Search className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by ID (e.g., PSEUDO-0024), question, keyword, or code..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain placeholder:text-textMuted focus:outline-none focus:border-accentPurple transition-colors"
            />
          </div>

          {/* Topic Dropdown */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
            >
              <option value="All">All Topics (50 Topics)</option>
              {PSEUDO_TOPICS.map((top) => (
                <option key={top} value={top}>
                  {top}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Dropdown */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Summary Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-borderSubtle/60 text-xs text-textMuted font-mono">
          <div className="flex items-center gap-2">
            <span>
              Showing {filteredQuestions.length > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredQuestions.length)} of{" "}
              <strong className="text-textMain font-bold">
                {filteredQuestions.length.toLocaleString()}
              </strong>{" "}
              questions
            </span>
            {selectedCompany !== "All" && (
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold">
                Company: {selectedCompany}
              </span>
            )}
            {isRevisionOnly && (
              <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold">
                Revision Pool Only
              </span>
            )}
          </div>

          <span>Page {currentPage} of {totalPages}</span>
        </div>
      </div>

      {/* Question Cards (10 per page) */}
      {paginatedQuestions.length === 0 ? (
        <div className="text-center py-16 bg-surfaceBg border border-borderSubtle rounded-2xl p-8 space-y-3">
          <Layers className="w-12 h-12 text-textMuted/40 mx-auto" />
          <h3 className="text-base font-bold text-textMain">No Matching Questions Found</h3>
          <p className="text-xs text-textMuted max-w-sm mx-auto">
            Try adjusting your company, topic, or search filters to explore other questions.
          </p>
          <button
            onClick={() => {
              setSelectedCompany("All");
              setSelectedTopic("All");
              setSelectedDifficulty("All");
              setSearchQuery("");
              setIsRevisionOnly(false);
            }}
            className="px-4 py-2 rounded-xl bg-accentPurple text-white text-xs font-mono font-bold hover:bg-accentPurple/90 transition-colors shadow-sm"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {paginatedQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-surfaceBg border border-borderSubtle shadow-lg font-mono text-xs">
          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-borderSubtle bg-secondaryBg text-textMain hover:bg-surfaceBorder disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            {/* Quick Page Jump Selector */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNumber = currentPage - 2 + i;
                  if (pageNumber > totalPages) pageNumber = totalPages - (4 - i);
                }

                const isActive = pageNumber === currentPage;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all ${
                      isActive
                        ? "bg-accentPurple text-white shadow-md ring-2 ring-accentPurple/50"
                        : "bg-secondaryBg text-textMuted hover:text-textMain hover:bg-surfaceBorder"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-borderSubtle bg-secondaryBg text-textMain hover:bg-surfaceBorder disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Jump to Page Form */}
          <form onSubmit={handleJumpSubmit} className="flex items-center gap-2">
            <span className="text-textMuted">Jump to page:</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              value={jumpPageInput}
              onChange={(e) => setJumpPageInput(e.target.value)}
              placeholder={currentPage.toString()}
              className="w-16 px-2.5 py-1.5 rounded-lg bg-secondaryBg border border-borderSubtle text-center text-xs text-textMain focus:outline-none focus:border-accentPurple"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-surfaceBorder hover:bg-white/10 text-textMain font-semibold transition-colors"
            >
              Go
            </button>
            <span className="text-textMuted text-[11px]">of {totalPages}</span>
          </form>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain">
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading Pseudocode Practice Hub (5,000 Questions)...
          </div>
        }
      >
        <PracticeContent />
      </Suspense>
    </div>
  );
}
