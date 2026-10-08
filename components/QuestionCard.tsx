"use client";

import React, { useState, useEffect } from "react";
import {
  Bookmark,
  StickyNote,
  Bot,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Activity,
  Layers,
  ChevronDown,
  ChevronUp,
  Languages,
  Edit3,
  Trash2,
  Building,
} from "lucide-react";
import { PseudoCodeQuestion } from "@/types";
import {
  isBookmarked,
  toggleBookmark,
  getNoteForQuestion,
  saveNoteForQuestion,
  recordQuestionAnswer,
  getTeluguToggle,
  setTeluguToggle,
} from "@/lib/streak";
import VoiceReader from "@/components/VoiceReader";
import AIExplainModal from "@/components/AIExplainModal";
import ComplexityChart, { getComplexityColor } from "@/components/ComplexityChart";

interface QuestionCardProps {
  question: PseudoCodeQuestion;
  onAnswerSelected?: (questionId: string, isCorrect: boolean) => void;
  defaultTeluguMode?: boolean;
}

export default function QuestionCard({
  question,
  onAnswerSelected,
  defaultTeluguMode = false,
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [note, setNote] = useState("");
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isChartOpen, setIsChartOpen] = useState(false);
  const [inTeluguMode, setInTeluguMode] = useState(defaultTeluguMode);

  // Sync state from localStorage on mount & events
  useEffect(() => {
    setBookmarked(isBookmarked(question.id));
    const currentNote = getNoteForQuestion(question.id);
    setNote(currentNote);
    setNoteDraft(currentNote);
    setInTeluguMode(getTeluguToggle());

    const handleBookmarks = () => setBookmarked(isBookmarked(question.id));
    const handleNotes = () => {
      const updated = getNoteForQuestion(question.id);
      setNote(updated);
      setNoteDraft(updated);
    };
    const handleLang = () => setInTeluguMode(getTeluguToggle());

    window.addEventListener("bookmarks_updated", handleBookmarks);
    window.addEventListener("notes_updated", handleNotes);
    window.addEventListener("lang_toggled", handleLang);

    return () => {
      window.removeEventListener("bookmarks_updated", handleBookmarks);
      window.removeEventListener("notes_updated", handleNotes);
      window.removeEventListener("lang_toggled", handleLang);
    };
  }, [question.id]);

  const handleToggleBookmark = () => {
    const nextState = toggleBookmark(question.id);
    setBookmarked(nextState);
  };

  const handleSaveNote = () => {
    saveNoteForQuestion(question.id, noteDraft);
    setNote(noteDraft);
    setIsNoteEditorOpen(false);
  };

  const handleDeleteNote = () => {
    saveNoteForQuestion(question.id, "");
    setNote("");
    setNoteDraft("");
    setIsNoteEditorOpen(false);
  };

  const handleSelectOption = (optKey: string) => {
    if (isAnswerSubmitted) return; // already answered
    setSelectedOption(optKey);
    setIsAnswerSubmitted(true);

    const isCorrect = optKey === question.correct;
    recordQuestionAnswer(question.id, isCorrect);
    if (onAnswerSelected) {
      onAnswerSelected(question.id, isCorrect);
    }
  };

  const handleToggleLang = () => {
    const next = !inTeluguMode;
    setInTeluguMode(next);
    setTeluguToggle(next);
  };

  // Difficulty badge styling
  const diffColors = {
    Easy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    Medium: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    Hard: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  }[question.difficulty];

  const compColors = getComplexityColor(question.complexity);

  const optionEntries = Object.entries(question.options) as [
    "A" | "B" | "C" | "D",
    string
  ][];

  return (
    <div className="bg-surfaceBg/90 border border-borderSubtle hover:border-borderSubtle/80 rounded-2xl shadow-xl transition-all duration-200 overflow-hidden">
      {/* Top Meta Bar */}
      <div className="px-4 sm:px-6 py-3.5 bg-secondaryBg/70 border-b border-borderSubtle flex flex-wrap items-center justify-between gap-3">
        {/* Left: ID, Topic, Difficulty, Companies */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accentPurple/20 text-accentPurple border border-accentPurple/30">
            {question.id}
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-surfaceBorder text-textMuted">
            {question.topic}
          </span>
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-md border ${diffColors}`}
          >
            {question.difficulty}
          </span>

          {/* Company Badges */}
          {question.companies && question.companies.length > 0 && (
            <div className="flex items-center gap-1.5 ml-1">
              {question.companies.slice(0, 3).map((comp) => (
                <span
                  key={comp}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  <Building className="w-2.5 h-2.5" />
                  {comp}
                </span>
              ))}
              {question.companies.length > 3 && (
                <span className="text-[10px] text-textMuted font-mono">
                  +{question.companies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Language Toggle switch: English / తెలుగు */}
          <button
            onClick={handleToggleLang}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors border ${
              inTeluguMode
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                : "bg-surfaceBorder text-textMuted hover:text-textMain border-borderSubtle"
            }`}
            title="Toggle English / తెలుగు Translation"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{inTeluguMode ? "తెలుగు" : "English"}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={handleToggleBookmark}
            className={`p-1.5 rounded-lg border transition-all ${
              bookmarked
                ? "bg-amber-500/20 text-amber-400 border-amber-500/40"
                : "bg-surfaceBorder text-textMuted hover:text-textMain border-borderSubtle"
            }`}
            title={bookmarked ? "Remove Bookmark" : "Bookmark Question"}
            aria-label="Bookmark"
          >
            <Bookmark
              className={`w-4 h-4 ${bookmarked ? "fill-amber-400" : ""}`}
            />
          </button>

          {/* Note Button */}
          <button
            onClick={() => setIsNoteEditorOpen(!isNoteEditorOpen)}
            className={`relative p-1.5 rounded-lg border transition-all ${
              note
                ? "bg-accentCyan/20 text-accentCyan border-accentCyan/40"
                : "bg-surfaceBorder text-textMuted hover:text-textMain border-borderSubtle"
            }`}
            title="Add or View Personal Note"
            aria-label="Notes"
          >
            <StickyNote className="w-4 h-4" />
            {note && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accentCyan ring-2 ring-surfaceBg" />
            )}
          </button>

          {/* AI Doubt Solver Button */}
          <button
            onClick={() => setIsAiModalOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-accentPurple/25 to-accentCyan/25 hover:from-accentPurple/35 hover:to-accentCyan/35 text-white border border-accentPurple/40 text-xs font-medium transition-all shadow-sm active:scale-95"
            title="Open AI Doubt Solver (Telugu + Tanglish)"
          >
            <Bot className="w-3.5 h-3.5 text-accentCyan" />
            <span className="hidden sm:inline">Explain in Telugu</span>
            <span className="sm:hidden">AI Telugu</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-4">
        {/* Question Prompt */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-textMain leading-relaxed font-sans">
            {inTeluguMode && question.teluguQuestion
              ? question.teluguQuestion
              : question.question}
          </h3>
          {inTeluguMode && question.teluguQuestion && (
            <p className="text-xs text-textMuted font-mono mt-1">
              [Original: {question.question}]
            </p>
          )}
        </div>

        {/* Pseudo Code Block with Voice Reader inside */}
        <div className="relative rounded-xl bg-[#0d1117] border border-borderSubtle p-4 font-mono text-sm overflow-x-auto shadow-inner group">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-xs text-textMuted">
            <span className="font-mono text-accentCyan flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              PSEUDO CODE
            </span>
            {/* Voice Reader Component */}
            <VoiceReader
              pseudoCodeText={question.pseudoCode}
              questionText={question.question}
            />
          </div>

          {/* Syntax Code with Line Numbers */}
          <div className="font-mono text-slate-200 text-xs sm:text-sm whitespace-pre leading-relaxed font-medium">
            {question.pseudoCode}
          </div>
        </div>

        {/* Note Editor Drawer / Popup if open */}
        {isNoteEditorOpen && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-2 animate-in fade-in duration-150">
            <div className="flex items-center justify-between text-xs font-semibold text-amber-300">
              <span className="flex items-center gap-1.5">
                <StickyNote className="w-3.5 h-3.5" />
                Personal Revision Note
              </span>
              <span className="text-[10px] text-textMuted font-mono">
                Saved in browser storage
              </span>
            </div>
            <textarea
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              placeholder="e.g., Important trick for TCS NQT loop index condition..."
              className="w-full h-20 p-2.5 rounded-lg bg-surfaceBg border border-borderSubtle text-xs text-textMain placeholder:text-textMuted focus:outline-none focus:border-amber-400 font-sans resize-none"
            />
            <div className="flex items-center justify-end gap-2">
              {note && (
                <button
                  onClick={handleDeleteNote}
                  className="px-2.5 py-1 rounded-md text-xs text-rose-400 hover:bg-rose-500/10 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              )}
              <button
                onClick={() => setIsNoteEditorOpen(false)}
                className="px-2.5 py-1 rounded-md text-xs text-textMuted hover:text-textMain transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-3 py-1 rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs transition-colors shadow"
              >
                Save Note
              </button>
            </div>
          </div>
        )}

        {/* Existing Note Display */}
        {note && !isNoteEditorOpen && (
          <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/25 flex items-start justify-between gap-2 text-xs">
            <div className="flex items-start gap-2">
              <StickyNote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-300 font-mono block">
                  Your Note:
                </span>
                <p className="text-textMain mt-0.5 whitespace-pre-wrap">{note}</p>
              </div>
            </div>
            <button
              onClick={() => setIsNoteEditorOpen(true)}
              className="p-1 rounded text-textMuted hover:text-amber-400 transition-colors"
              title="Edit Note"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Options Grid */}
        <div className="space-y-2.5 pt-1">
          <span className="text-xs font-mono uppercase tracking-wider text-textMuted block">
            Select the Correct Answer:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {optionEntries.map(([key, value]) => {
              const isSelected = selectedOption === key;
              const isCorrect = key === question.correct;

              let btnStyle =
                "bg-secondaryBg/70 border-borderSubtle text-textMain hover:border-accentPurple/50 hover:bg-surfaceBorder/80";

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle =
                    "bg-emerald-500/20 border-emerald-500/70 text-emerald-300 font-semibold ring-1 ring-emerald-500/40 shadow-lg shadow-emerald-500/10";
                } else if (isSelected && !isCorrect) {
                  btnStyle =
                    "bg-rose-500/20 border-rose-500/70 text-rose-300 ring-1 ring-rose-500/40";
                } else {
                  btnStyle = "bg-secondaryBg/40 border-borderSubtle/50 text-textMuted opacity-60";
                }
              }

              return (
                <button
                  key={key}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(key)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-sm text-left transition-all duration-150 ${btnStyle} ${
                    !isAnswerSubmitted ? "active:scale-[0.99] cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-xs font-mono font-bold ${
                        isSelected
                          ? isCorrect
                            ? "bg-emerald-500 text-black"
                            : "bg-rose-500 text-white"
                          : isAnswerSubmitted && isCorrect
                          ? "bg-emerald-500 text-black font-extrabold"
                          : "bg-surfaceBorder text-textMuted"
                      }`}
                    >
                      {key}
                    </span>
                    <span className="font-mono text-sm">{value}</span>
                  </div>

                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Answer Explanation & Complexity Badge (Shown after submitting or toggle) */}
        {isAnswerSubmitted && (
          <div className="mt-4 p-4 rounded-xl bg-secondaryBg/90 border border-borderSubtle space-y-3 animate-in fade-in duration-200">
            {/* Status Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {selectedOption === question.correct ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold font-mono">
                    ✓ Correct Answer!
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 text-xs font-bold font-mono">
                    ✗ Wrong Answer (Correct: Option {question.correct})
                  </span>
                )}
              </div>

              {/* Complexity Badge with click/hover Popover */}
              <div className="relative">
                <button
                  onClick={() => setIsChartOpen(!isChartOpen)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${compColors.badgeBg} ${compColors.badgeBorder} ${compColors.badgeText}`}
                  title="Click to view Complexity Visualizer chart"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{question.complexity}</span>
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>

                {/* Complexity Popover Modal */}
                {isChartOpen && (
                  <div className="absolute right-0 top-9 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <ComplexityChart
                      complexity={question.complexity}
                      onClose={() => setIsChartOpen(false)}
                      isPopover={true}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Explanation Text */}
            <div className="text-xs sm:text-sm text-textMain leading-relaxed font-sans">
              <span className="font-bold text-accentCyan font-mono block mb-1">
                {inTeluguMode ? "వివరణ (Explanation):" : "Explanation:"}
              </span>
              <p>
                {inTeluguMode
                  ? question.teluguExplanation
                  : question.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* AI Explain Modal */}
      <AIExplainModal
        question={question}
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
}
