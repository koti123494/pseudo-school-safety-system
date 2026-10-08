"use client";

import React, { useState } from "react";
import {
  Bot,
  Copy,
  Check,
  X,
  Sparkles,
  Layers,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { PseudoCodeQuestion } from "@/types";

interface AIExplainModalProps {
  question: PseudoCodeQuestion;
  isOpen: boolean;
  onClose: () => void;
}

export default function AIExplainModal({
  question,
  isOpen,
  onClose,
}: AIExplainModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Build Tanglish AI walkthrough
  const correctOpt = question.correct;
  const correctVal = question.options[correctOpt];

  const fullTextToCopy = `[AI Telugu Explanation for ${question.id}]
Topic: ${question.topic} (${question.subTopic})
Question: ${question.question}

Telugu + English Explanation:
${question.teluguExplanation}

Code Dry Run:
${question.pseudoCode}

Correct Answer: Option ${correctOpt} (${correctVal})
Reasoning: ${question.explanation}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const optionEntries = Object.entries(question.options) as [
    "A" | "B" | "C" | "D",
    string
  ][];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-surfaceBg border border-borderSubtle rounded-2xl shadow-2xl max-w-2xl w-full my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-accentPurple/25 via-primary/20 to-accentCyan/20 p-5 border-b border-borderSubtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accentPurple/20 border border-accentPurple/40 flex items-center justify-center text-accentPurple shadow-inner">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-textMain">
                  AI Doubt Solver (Telugu + Tanglish)
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-accentGreen/20 text-accentGreen border border-accentGreen/30">
                  {question.id}
                </span>
              </div>
              <p className="text-xs text-textMuted">
                Instant pseudo-code breakdown for Telugu engineering students
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surfaceBorder hover:bg-white/10 text-xs font-mono text-textMuted hover:text-textMain transition-colors"
              title="Copy explanation"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accentGreen" />
                  <span className="text-accentGreen">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Question preview */}
          <div className="p-3.5 rounded-xl bg-secondaryBg/80 border border-borderSubtle">
            <span className="text-[11px] font-mono text-accentPurple uppercase tracking-wider block mb-1">
              Question Prompt
            </span>
            <p className="text-sm font-medium text-textMain">{question.question}</p>
            {question.teluguQuestion && (
              <p className="text-xs text-textMuted mt-1 font-sans italic">
                👉 {question.teluguQuestion}
              </p>
            )}
          </div>

          {/* Core Tanglish Explanation */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-accentPurple/10 via-transparent to-accentCyan/5 border border-accentPurple/30">
            <div className="flex items-center gap-2 text-accentPurple font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Easy Telugu + English Explanation (Tanglish)</span>
            </div>
            <p className="text-sm text-textMain leading-relaxed font-sans">
              {question.teluguExplanation}
            </p>
            <div className="mt-3 p-2.5 rounded-lg bg-surfaceBg/60 text-xs text-textMuted font-mono">
              💡 <span className="font-semibold text-textMain">Key Concept:</span> {question.topic} logic lo values step-by-step trace cheyali. Condition evaluate ayinappudu true/false values memory lo change avuthayi.
            </div>
          </div>

          {/* Pseudocode snippet with line breakdown */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-textMain flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accentCyan" />
                Code Execution Trace
              </span>
              <span className="text-[11px] font-mono text-textMuted">
                Complexity: {question.complexity}
              </span>
            </div>
            <div className="rounded-xl bg-[#0f141c] p-4 font-mono text-xs text-slate-200 border border-borderSubtle overflow-x-auto whitespace-pre leading-relaxed">
              {question.pseudoCode}
            </div>
          </div>

          {/* Correct Option vs Other Options Breakdown */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-textMain block">
              Options Analysis (Why Correct vs Why Wrong)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {optionEntries.map(([key, val]) => {
                const isCorrect = key === correctOpt;
                return (
                  <div
                    key={key}
                    className={`p-3 rounded-xl border text-xs transition-all ${
                      isCorrect
                        ? "bg-accentGreen/10 border-accentGreen/40 text-textMain shadow-sm"
                        : "bg-secondaryBg/40 border-borderSubtle/60 text-textMuted"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono font-bold">
                        Option ({key}): {val}
                      </span>
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-accentGreen">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct Answer
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-rose-400">
                          <XCircle className="w-3.5 h-3.5" /> Wrong
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] leading-tight">
                      {isCorrect
                        ? "Idi correct value endukante logic trace chesina taruvatha exact output match ayyindi."
                        : "Idi wrong endukante variable calculation leda loop index ee number ki match avvadu."}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Placement Exam Pro-Tip */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-amber-300">TCS / Infosys Exam Pro Tip:</span>
              <p className="text-textMuted mt-0.5">
                Always trace loop boundary conditions (e.g., 0 TO n-1 vs 1 TO n) carefully on scratch paper to avoid off-by-one trap options!
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-secondaryBg border-t border-borderSubtle flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-accentPurple hover:bg-accentPurple/90 text-white text-xs font-bold font-mono transition-colors shadow-md"
          >
            Got it, Clear!
          </button>
        </div>
      </div>
    </div>
  );
}
