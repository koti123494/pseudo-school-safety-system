"use client";

import React, { useState } from "react";
import { Copy, Check, Bookmark, Flag, Sparkles, Terminal, Code2 } from "lucide-react";
import { Question } from "@/types";

interface PseudocodeViewerProps {
  question: Question;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export default function PseudocodeViewer({
  question,
  isBookmarked,
  onToggleBookmark,
}: PseudocodeViewerProps) {
  const [copied, setCopied] = useState(false);
  const [reported, setReported] = useState(false);
  const [viewMode, setViewMode] = useState<"pseudocode" | "python">("pseudocode");

  const currentCode = viewMode === "pseudocode" ? question.pseudocode : question.pythonCode;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReport = () => {
    setReported(true);
    setTimeout(() => setReported(false), 3000);
  };

  const lines = currentCode.split("\n");

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case "Easy":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      case "Medium":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      case "Hard":
        return "bg-rose-500/15 text-rose-400 border-rose-500/30";
      default:
        return "bg-zinc-700/30 text-zinc-300 border-zinc-700";
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl border border-borderSubtle bg-codeBlock overflow-hidden shadow-card">
      {/* Code Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-borderSubtle bg-surfaceBg/60">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Company & Year */}
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-primaryAccent/20 border border-primaryAccent/40 text-secondaryAccent tracking-wide">
            {question.company} • {question.year}
          </span>

          {/* Difficulty */}
          <span
            className={`px-2 py-0.5 rounded-md text-xs font-semibold border ${getDifficultyBadge(
              question.difficulty
            )}`}
          >
            {question.difficulty.toUpperCase()}
          </span>

          {/* Topic */}
          <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-surfaceBg border border-borderSubtle text-textMuted">
            {question.topic}
          </span>

          {/* Provenance */}
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-mono text-textMuted/70 border border-borderSubtle/60">
            {question.provenance || "Placement Pattern"}
          </span>
        </div>

        {/* View Toggle Option [ Pseudocode | Python 3.x ] & Actions */}
        <div className="flex items-center gap-2">
          {/* Toggle Switch */}
          <div className="flex items-center p-0.5 rounded-lg bg-surfaceBg border border-borderSubtle text-[11px] font-mono">
            <button
              onClick={() => setViewMode("pseudocode")}
              className={`px-2 py-0.5 rounded transition-all ${
                viewMode === "pseudocode"
                  ? "bg-primaryAccent text-white font-bold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Pseudocode
            </button>
            <button
              onClick={() => setViewMode("python")}
              className={`px-2 py-0.5 rounded transition-all ${
                viewMode === "python"
                  ? "bg-emerald-500 text-white font-bold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Python 3.x
            </button>
          </div>

          <button
            onClick={handleCopy}
            title={viewMode === "pseudocode" ? "Copy Pseudocode" : "Copy Python"}
            className="p-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-surfaceBg/80 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
            className={`p-1.5 rounded-lg transition-colors ${
              isBookmarked
                ? "text-secondaryAccent bg-primaryAccent/20"
                : "text-textMuted hover:text-textMain hover:bg-surfaceBg/80"
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-secondaryAccent" : ""}`} />
          </button>

          <button
            onClick={handleReport}
            title="Report question error"
            className="p-1.5 rounded-lg text-textMuted hover:text-rose-400 hover:bg-surfaceBg/80 transition-colors"
          >
            <Flag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {reported && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-1.5 text-xs text-amber-300 flex items-center justify-between">
          <span>✓ Thank you! Question flagged for pedagogical review.</span>
        </div>
      )}

      {/* Question Title */}
      <div className="px-5 pt-3 pb-1">
        <h2 className="text-base sm:text-lg font-bold text-textMain tracking-tight">
          <span className="text-secondaryAccent font-mono mr-2">[{question.id}]</span>
          {question.title}
        </h2>
        <p className="text-xs text-textMuted mt-0.5">
          {viewMode === "pseudocode"
            ? "Predict the output or final state produced by the following pseudocode execution:"
            : "Review the direct Python 3.x equivalent implementation:"}
        </p>
      </div>

      {/* Code Body with Line Numbers */}
      <div className="flex-1 p-4 font-code text-sm overflow-x-auto leading-relaxed selection:bg-primaryAccent/40">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-surfaceHover/40 group">
                <td className="w-8 select-none text-right pr-4 text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors align-top pt-0.5">
                  {idx + 1}
                </td>
                <td className={`whitespace-pre font-mono ${viewMode === "python" ? "text-emerald-400 dark:text-emerald-300" : "text-textMain"}`}>
                  {viewMode === "pseudocode" ? highlightPseudocode(line) : line}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Light syntax tokenizer for pseudocode keywords
function highlightPseudocode(line: string) {
  if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
    return <span className="text-zinc-500 italic">{line}</span>;
  }

  // Highlight keywords
  const parts = line.split(
    /(\b(?:Integer|Boolean|Set|Initialize|while|do|end while|for|each|from|to|down to|step|end for|if|then|else if|else|end if|print|break|continue|mod|AND|OR|NOT|xor)\b)/g
  );

  return parts.map((part, i) => {
    if (
      [
        "Integer",
        "Boolean",
        "Set",
        "Initialize",
        "while",
        "do",
        "end while",
        "for",
        "each",
        "from",
        "to",
        "down to",
        "step",
        "end for",
        "if",
        "then",
        "else if",
        "else",
        "end if",
        "print",
        "break",
        "continue",
      ].includes(part)
    ) {
      return (
        <span key={i} className="text-secondaryAccent font-semibold">
          {part}
        </span>
      );
    }
    if (["mod", "AND", "OR", "NOT", "xor"].includes(part)) {
      return (
        <span key={i} className="text-amber-400 font-semibold">
          {part}
        </span>
      );
    }
    if (/^\d+$/.test(part)) {
      return (
        <span key={i} className="text-emerald-400">
          {part}
        </span>
      );
    }
    return part;
  });
}
