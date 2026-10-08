"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Code2,
  Copy,
  Check,
  Terminal,
  Play,
  Zap,
  HelpCircle,
  Award,
  ChevronDown,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { PythonTopic, PythonBookExample } from "@/data/pythonBook";

interface TopicContentProps {
  topic: PythonTopic;
  onCopySyntax: () => void;
  copiedSyntax: boolean;
  onRunExample: (idx: number, ex: PythonBookExample) => void;
  runningExamples: Record<number, boolean>;
  exampleOutputs: Record<number, string>;
  copiedExampleIndex: number | null;
  onCopyExample: (idx: number, code: string) => void;
  userAnswers: Record<string, "A" | "B" | "C" | "D">;
  onSelectMCQ: (mcqId: string, opt: "A" | "B" | "C" | "D") => void;
  score: { correct: number; total: number };
}

export default function TopicContent({
  topic,
  onCopySyntax,
  copiedSyntax,
  onRunExample,
  runningExamples,
  exampleOutputs,
  copiedExampleIndex,
  onCopyExample,
  userAnswers,
  onSelectMCQ,
  score,
}: TopicContentProps) {
  // Controlled details state with instant toggle
  const [syntaxOpen, setSyntaxOpen] = useState(false);
  const [examplesOpen, setExamplesOpen] = useState(false);
  const [mcqsOpen, setMcqsOpen] = useState(true);

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* 1. TOPIC TITLE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-cardBg border border-borderSubtle">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono font-black text-sm">
            {topic.id.replace("PY-TOPIC-", "#")}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase font-bold text-purple-400 tracking-wider">
                {topic.id}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surfaceBg border border-borderSubtle text-textMuted font-mono">
                {topic.topic}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              {topic.topicName}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
          <span className="text-purple-400 font-bold">MCQ Score: {score.correct}/10</span>
          <span>•</span>
          <span>3 Examples</span>
          <span>•</span>
          <span>10 MCQs</span>
        </div>
      </div>

      {/* 2. DEFINITION CARD - Rendered Immediately (FASTEST) */}
      <div className="rounded-3xl p-6 sm:p-7 bg-purple-950/40 border border-purple-500/30 shadow-md space-y-4">
        <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm sm:text-base border-b border-purple-500/20 pb-3">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span>Definition & Core Concept — 4 Key Points</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-purple-100 leading-relaxed">
          {topic.definition.map((point, pIdx) => (
            <div
              key={pIdx}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-900/30 border border-purple-500/20 shadow-sm"
            >
              <span className="w-6 h-6 rounded-lg bg-purple-500/30 text-purple-200 border border-purple-400/30 flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-0.5">
                {pIdx + 1}
              </span>
              <span className="pt-0.5">{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SYNTAX CARD - Collapsed by default for instant rendering */}
      <div className="rounded-3xl bg-cardBg border border-borderSubtle overflow-hidden shadow-sm">
        <div
          onClick={() => setSyntaxOpen(!syntaxOpen)}
          className="flex items-center justify-between px-5 py-3.5 bg-surfaceBg border-b border-borderSubtle/60 cursor-pointer select-none hover:bg-surfaceBorder/60 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-900 dark:text-white">
            <Code2 className="w-4 h-4 text-secondaryAccent" />
            <span>Python Syntax Reference</span>
            <span className="text-[10px] text-textMuted font-sans">
              ({syntaxOpen ? "Click to collapse" : "Click to expand code"})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {syntaxOpen && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onCopySyntax();
                }}
                className="px-2.5 py-1 rounded-lg bg-cardBg hover:bg-surfaceBg border border-borderSubtle text-xs text-textMuted hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copiedSyntax ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
            <ChevronDown
              className={`w-4 h-4 text-textMuted transition-transform duration-200 ${
                syntaxOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {syntaxOpen && (
          <div className="p-4 sm:p-5 bg-[#0f141c] overflow-x-auto border-t border-borderSubtle animate-in fade-in duration-150">
            <pre className="font-mono text-xs sm:text-sm text-emerald-300 leading-relaxed">
              <code>{topic.syntax}</code>
            </pre>
          </div>
        )}
      </div>

      {/* 4. RUNNABLE EXAMPLES - Collapsed by default to avoid heavy rendering */}
      <div className="rounded-3xl bg-cardBg border border-borderSubtle overflow-hidden shadow-sm">
        <div
          onClick={() => setExamplesOpen(!examplesOpen)}
          className="flex items-center justify-between px-5 py-3.5 bg-surfaceBg border-b border-borderSubtle/60 cursor-pointer select-none hover:bg-surfaceBorder/60 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>3 Runnable Code Examples</span>
            <span className="text-[10px] text-textMuted font-mono">
              ({examplesOpen ? "Click to collapse" : "Click to view & run"})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-mono">
              3 Examples
            </span>
            <ChevronDown
              className={`w-4 h-4 text-textMuted transition-transform duration-200 ${
                examplesOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {examplesOpen && (
          <div className="p-4 sm:p-6 space-y-4 border-t border-borderSubtle bg-cardBg/50 animate-in fade-in duration-150">
            {topic.examples.map((ex, exIdx) => {
              const isRunning = runningExamples[exIdx];
              const output = exampleOutputs[exIdx];
              const isCopied = copiedExampleIndex === exIdx;

              return (
                <div
                  key={exIdx}
                  className="rounded-2xl bg-cardBg border border-borderSubtle overflow-hidden shadow-sm"
                >
                  {/* Example Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-surfaceBg border-b border-borderSubtle">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono text-xs font-bold">
                        {exIdx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                        {ex.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onCopyExample(exIdx, ex.code)}
                        className="px-2.5 py-1 rounded-lg bg-cardBg hover:bg-surfaceBg border border-borderSubtle text-xs text-textMuted hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{isCopied ? "Copied" : "Copy"}</span>
                      </button>

                      <button
                        onClick={() => onRunExample(exIdx, ex)}
                        disabled={isRunning}
                        className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>{isRunning ? "Running..." : "Run Code"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="p-4 bg-[#0f141c] overflow-x-auto border-b border-borderSubtle">
                    <pre className="font-mono text-xs sm:text-sm text-cyan-300 leading-relaxed">
                      <code>{ex.code}</code>
                    </pre>
                  </div>

                  {/* Console Output & Explanation */}
                  <div className="p-4 bg-cardBg space-y-2 text-xs">
                    <div className="rounded-xl bg-[#090d14] border border-borderSubtle/60 p-3 font-mono space-y-1">
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                        Console Output:
                      </span>
                      <pre className="text-emerald-400 font-mono text-xs whitespace-pre-wrap">
                        {output || ex.output}
                      </pre>
                    </div>
                    <div className="p-2.5 rounded-xl bg-surfaceBg border border-borderSubtle/60 text-gray-300 flex items-start gap-2">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <p>
                        <strong className="text-white">Explanation: </strong> {ex.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. 10 PLACEMENT MCQS - Collapsible & Clean */}
      <div className="rounded-3xl bg-cardBg border border-borderSubtle overflow-hidden shadow-sm">
        <div
          onClick={() => setMcqsOpen(!mcqsOpen)}
          className="flex items-center justify-between px-5 py-3.5 bg-surfaceBg border-b border-borderSubtle/60 cursor-pointer select-none hover:bg-surfaceBorder/60 transition-colors"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
              10 Placement Level MCQs (TCS / Infosys / Wipro Pattern)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
              Score: {score.correct}/10
            </span>
            <ChevronDown
              className={`w-4 h-4 text-textMuted transition-transform duration-200 ${
                mcqsOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {mcqsOpen && (
          <div className="p-4 sm:p-6 space-y-4 border-t border-borderSubtle bg-cardBg/40 animate-in fade-in duration-150">
            {topic.mcqs.map((mcq, mIdx) => {
              const selectedOption = userAnswers[mcq.id];
              const isAnswered = Boolean(selectedOption);
              const isCorrect = selectedOption === mcq.correct;

              return (
                <div
                  key={mcq.id}
                  className="p-4 rounded-2xl bg-surfaceBg/80 border border-borderSubtle space-y-3"
                >
                  {/* MCQ Header */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-purple-400">
                      Q{mIdx + 1} of 10 ({mcq.id})
                    </span>
                    {isAnswered && (
                      <span
                        className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                          isCorrect
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-rose-500/20 text-rose-400"
                        }`}
                      >
                        {isCorrect ? "✓ Correct" : `✗ Incorrect (Correct: ${mcq.correct})`}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white leading-relaxed">
                    {mcq.question}
                  </p>

                  {/* 4 Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(["A", "B", "C", "D"] as const).map((optKey) => {
                      const isOptionSelected = selectedOption === optKey;
                      const isOptionCorrect = optKey === mcq.correct;

                      let btnStyle = "bg-cardBg border-borderSubtle text-textMuted hover:text-white hover:border-purple-500/50";
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                        } else if (isOptionSelected && !isCorrect) {
                          btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300";
                        } else {
                          btnStyle = "bg-cardBg/40 border-borderSubtle/50 text-textMuted opacity-50";
                        }
                      }

                      return (
                        <button
                          key={optKey}
                          disabled={isAnswered}
                          onClick={() => onSelectMCQ(mcq.id, optKey)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs text-left transition-all font-mono ${btnStyle} ${
                            !isAnswered ? "cursor-pointer active:scale-[0.99]" : "cursor-default"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] ${
                              isOptionSelected
                                ? isOptionCorrect
                                  ? "bg-emerald-500 text-black"
                                  : "bg-rose-500 text-white"
                                : isAnswered && isOptionCorrect
                                ? "bg-emerald-500 text-black"
                                : "bg-surfaceBorder text-textMuted"
                            }`}
                          >
                            {optKey}
                          </span>
                          <span className="truncate">{mcq.options[optKey]}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after answered */}
                  {isAnswered && (
                    <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs text-purple-200">
                      <strong className="text-purple-300 font-mono">Explanation: </strong>
                      {mcq.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
