"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bookmark,
  StickyNote,
  RotateCcw,
  BookOpen,
  ArrowLeft,
  Search,
  Filter,
} from "lucide-react";
import { allPseudoCodeQuestions, getPseudoQuestionById } from "@/data/pseudoCode5000";
import { getBookmarks, getNotes, getWrongAnswers } from "@/lib/streak";
import { PseudoCodeQuestion } from "@/types";
import QuestionCard from "@/components/QuestionCard";

interface BookmarkNotesProps {
  initialTab?: "bookmarks" | "notes" | "revision";
}

export default function BookmarkNotes({ initialTab = "bookmarks" }: BookmarkNotesProps) {
  const [activeTab, setActiveTab] = useState<"bookmarks" | "notes" | "revision">(initialTab);
  const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);
  const [notesRecord, setNotesRecord] = useState<Record<string, string>>({});
  const [wrongIds, setWrongIds] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const refreshData = () => {
    setBookmarkIds(getBookmarks());
    setNotesRecord(getNotes());
    setWrongIds(getWrongAnswers());
  };

  useEffect(() => {
    refreshData();
    window.addEventListener("bookmarks_updated", refreshData);
    window.addEventListener("notes_updated", refreshData);
    window.addEventListener("storage", refreshData);
    return () => {
      window.removeEventListener("bookmarks_updated", refreshData);
      window.removeEventListener("notes_updated", refreshData);
      window.removeEventListener("storage", refreshData);
    };
  }, []);

  // Filter questions depending on active tab
  let targetQuestions: PseudoCodeQuestion[] = [];
  if (activeTab === "bookmarks") {
    targetQuestions = bookmarkIds
      .map((id) => getPseudoQuestionById(id))
      .filter((q): q is PseudoCodeQuestion => Boolean(q));
  } else if (activeTab === "notes") {
    const noteKeys = Object.keys(notesRecord);
    targetQuestions = noteKeys
      .map((id) => getPseudoQuestionById(id))
      .filter((q): q is PseudoCodeQuestion => Boolean(q));
  } else {
    // Revision mode: bookmarked + wrong answers (deduped)
    const combinedSet = new Set([...bookmarkIds, ...wrongIds]);
    targetQuestions = Array.from(combinedSet)
      .map((id) => getPseudoQuestionById(id))
      .filter((q): q is PseudoCodeQuestion => Boolean(q));
  }

  // Apply search query
  if (search.trim()) {
    const s = search.toLowerCase();
    targetQuestions = targetQuestions.filter(
      (q) =>
        q.id.toLowerCase().includes(s) ||
        q.question.toLowerCase().includes(s) ||
        q.topic.toLowerCase().includes(s) ||
        q.pseudoCode.toLowerCase().includes(s)
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-surfaceBg via-secondaryBg to-surfaceBg border border-borderSubtle shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Link
              href="/practice"
              className="p-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-textMain tracking-tight">
              Revision & Saved Notes
            </h1>
          </div>
          <p className="text-sm text-textMuted pl-8">
            Access bookmarked problems, personal notes, and revision pool to ace TCS & Infosys interviews.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surfaceBg border border-borderSubtle self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("bookmarks")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-colors ${
              activeTab === "bookmarks"
                ? "bg-amber-500 text-black shadow-md font-bold"
                : "text-textMuted hover:text-textMain"
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Bookmarked ({bookmarkIds.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("notes")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-colors ${
              activeTab === "notes"
                ? "bg-accentCyan text-black shadow-md font-bold"
                : "text-textMuted hover:text-textMain"
            }`}
          >
            <StickyNote className="w-3.5 h-3.5" />
            <span>Notes ({Object.keys(notesRecord).length})</span>
          </button>

          <button
            onClick={() => setActiveTab("revision")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-colors ${
              activeTab === "revision"
                ? "bg-accentPurple text-white shadow-md font-bold"
                : "text-textMuted hover:text-textMain"
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Revision Pool ({new Set([...bookmarkIds, ...wrongIds]).size})</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${activeTab} by ID, topic, or keyword...`}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surfaceBg border border-borderSubtle text-sm text-textMain placeholder:text-textMuted focus:outline-none focus:border-accentPurple transition-colors"
        />
      </div>

      {/* Questions List */}
      {targetQuestions.length === 0 ? (
        <div className="text-center py-16 bg-surfaceBg/60 border border-borderSubtle rounded-2xl p-8 space-y-3">
          <BookOpen className="w-12 h-12 text-textMuted/40 mx-auto" />
          <h3 className="text-base font-semibold text-textMain">
            No questions found in {activeTab}
          </h3>
          <p className="text-xs text-textMuted max-w-sm mx-auto">
            {activeTab === "bookmarks"
              ? "Click the star icon ⭐ on any question in practice mode to save it here for fast review."
              : activeTab === "notes"
              ? "Click the note icon 📝 on any question to jot down tricks and reminders."
              : "Revision pool automatically collects bookmarked and incorrect questions."}
          </p>
          <Link
            href="/practice"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accentPurple hover:bg-accentPurple/90 text-white text-xs font-bold font-mono transition-colors shadow-md mt-2"
          >
            Practice 5,000 Questions
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-textMuted font-mono">
            <span>Showing {targetQuestions.length} questions</span>
            <span className="text-accentCyan">Target: Placement Revision</span>
          </div>

          {targetQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      )}
    </div>
  );
}
