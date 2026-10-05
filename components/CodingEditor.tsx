"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CodingProblem } from "@/types";
import { runPythonCode, runPythonCustomInput, ExecutionResult } from "@/lib/pythonRunner";
import {
  Play,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Terminal,
  Code2,
  ChevronRight,
  Clock,
  Bookmark,
  Send,
  HelpCircle,
  BookOpen,
  Cpu,
  Check,
} from "lucide-react";
import {
  markCodingSolved,
  toggleCodingBookmark,
  isCodingBookmarked,
  saveCodingSubmission,
} from "@/lib/storage";

// Dynamically import Monaco editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full bg-[#1e1e2e] text-textMuted text-xs font-mono">
      Initializing Monaco Python Workspace...
    </div>
  ),
});

interface CodingEditorProps {
  problem: CodingProblem;
  onSolved?: () => void;
  onNext?: () => void;
  isCycleMode?: boolean;
}

export default function CodingEditor({
  problem,
  onSolved,
  onNext,
  isCycleMode = false,
}: CodingEditorProps) {
  const [code, setCode] = useState(problem.starterCode);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [execResult, setExecResult] = useState<ExecutionResult | null>(null);
  const [activeLeftTab, setActiveLeftTab] = useState<
    "description" | "hints" | "solution" | "testcases"
  >("description");
  const [activeRightTab, setActiveRightTab] = useState<"results" | "customInput">("results");
  const [customInputText, setCustomInputText] = useState(
    problem.examples[0]?.input || ""
  );
  const [customOutput, setCustomOutput] = useState<{
    output: string;
    timeMs: number;
    error?: string;
  } | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(!document.documentElement.classList.contains("light"));
    };
    updateTheme();
    window.addEventListener("theme-change", updateTheme);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("theme-change", updateTheme);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setCode(problem.starterCode);
    setExecResult(null);
    setCustomOutput(null);
    setSubmissionStatus(null);
    setRevealedHints([]);
    setIsBookmarked(isCodingBookmarked(problem.id));
    if (problem.examples[0]) {
      setCustomInputText(problem.examples[0].input);
    }
  }, [problem]);

  const handleToggleBookmark = () => {
    const updated = toggleCodingBookmark(problem.id);
    setIsBookmarked(updated);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveRightTab("results");
    await new Promise((resolve) => setTimeout(resolve, 300));
    try {
      const result = await runPythonCode(code, problem.testCases);
      setExecResult(result);
    } catch (err: any) {
      setExecResult({
        passed: false,
        totalTests: problem.testCases.length,
        passedTests: 0,
        results: [],
        output: `Error executing code: ${err.message}`,
        executionTimeMs: 0,
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    setActiveRightTab("results");
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      const result = await runPythonCode(code, problem.testCases);
      setExecResult(result);
      saveCodingSubmission({
        problemId: problem.id,
        code,
        passed: result.passed,
        timestamp: Date.now(),
        executionTimeMs: result.executionTimeMs,
      });

      if (result.passed) {
        setSubmissionStatus("Accepted");
        markCodingSolved(problem.id);
        if (onSolved) onSolved();
      } else {
        setSubmissionStatus("Wrong Answer");
      }
    } catch (err: any) {
      setSubmissionStatus("Runtime Error");
      setExecResult({
        passed: false,
        totalTests: problem.testCases.length,
        passedTests: 0,
        results: [],
        output: `Runtime error during submission: ${err.message}`,
        executionTimeMs: 0,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRunCustomInput = async () => {
    setIsRunning(true);
    try {
      const res = await runPythonCustomInput(code, customInputText);
      setCustomOutput({
        output: res.output,
        timeMs: res.executionTimeMs,
        error: res.error,
      });
    } catch (err: any) {
      setCustomOutput({
        output: `Execution error: ${err.message}`,
        timeMs: 0,
        error: err.message,
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetCode = () => {
    setCode(problem.starterCode);
    setExecResult(null);
    setSubmissionStatus(null);
  };

  const handleLoadSolution = () => {
    if (problem.solution || problem.solutionCode) {
      setCode(problem.solution || problem.solutionCode || "");
    }
  };

  const toggleHint = (index: number) => {
    if (revealedHints.includes(index)) {
      setRevealedHints(revealedHints.filter((i) => i !== index));
    } else {
      setRevealedHints([...revealedHints, index]);
    }
  };

  const companies = problem.companies || [];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 h-full min-h-[680px]">
      {/* LEFT PANEL: Problem Details & Explanations */}
      <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col rounded-2xl border border-borderSubtle bg-cardBg overflow-hidden shadow-card min-w-0 transition-all duration-200">
        {/* Left Header Tabs */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-borderSubtle bg-surfaceBg/60">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30 font-mono">
              {problem.id}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                problem.difficulty === "Easy"
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                  : problem.difficulty === "Medium"
                  ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                  : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
              }`}
            >
              {problem.difficulty}
            </span>
            <span className="text-xs text-textMuted font-medium">{problem.topic}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveLeftTab("description")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                activeLeftTab === "description"
                  ? "bg-surfaceHover text-textMain border border-borderSubtle font-semibold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveLeftTab("hints")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                activeLeftTab === "hints"
                  ? "bg-surfaceHover text-textMain border border-borderSubtle font-semibold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Hints ({problem.hints?.length || 0})
            </button>
            <button
              onClick={() => setActiveLeftTab("solution")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                activeLeftTab === "solution"
                  ? "bg-surfaceHover text-textMain border border-borderSubtle font-semibold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Solution
            </button>
            <button
              onClick={() => setActiveLeftTab("testcases")}
              className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                activeLeftTab === "testcases"
                  ? "bg-surfaceHover text-textMain border border-borderSubtle font-semibold shadow-sm"
                  : "text-textMuted hover:text-textMain"
              }`}
            >
              Cases ({problem.testCases?.length || 0})
            </button>
          </div>
        </div>

        {/* Left Content Area */}
        <div className="flex-1 p-5 overflow-y-auto space-y-5 text-sm">
          {activeLeftTab === "description" && (
            <>
              {/* Title & Tags */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {problem.title}
                  </h2>
                  <button
                    onClick={handleToggleBookmark}
                    title={isBookmarked ? "Remove Bookmark" : "Bookmark Problem"}
                    className={`p-1.5 rounded-lg border transition-all ${
                      isBookmarked
                        ? "bg-primaryAccent/20 border-primaryAccent/40 text-secondaryAccent"
                        : "bg-surfaceBg border-borderSubtle text-textMuted hover:text-white"
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${isBookmarked ? "fill-secondaryAccent" : ""}`}
                    />
                  </button>
                </div>

                {/* Company & Provenance tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {companies.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-surfaceBg border border-borderSubtle text-secondaryAccent"
                    >
                      {comp}
                    </span>
                  ))}
                  {problem.sourceType && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-surfaceBg border border-borderSubtle">
                      {problem.sourceType}
                    </span>
                  )}
                </div>
              </div>

              {/* Problem Description */}
              <div className="text-zinc-300 leading-relaxed whitespace-pre-line text-xs sm:text-sm">
                {problem.description || problem.problem}
              </div>

              {/* Input / Output Format */}
              <div className="space-y-3 pt-2">
                {problem.inputFormat && (
                  <div className="bg-surfaceBg/60 p-3 rounded-xl border border-borderSubtle">
                    <div className="text-xs font-semibold text-secondaryAccent mb-1">
                      Input Format:
                    </div>
                    <div className="text-xs font-mono text-zinc-300 whitespace-pre-line">
                      {problem.inputFormat}
                    </div>
                  </div>
                )}

                {problem.outputFormat && (
                  <div className="bg-surfaceBg/60 p-3 rounded-xl border border-borderSubtle">
                    <div className="text-xs font-semibold text-secondaryAccent mb-1">
                      Output Format:
                    </div>
                    <div className="text-xs font-mono text-zinc-300 whitespace-pre-line">
                      {problem.outputFormat}
                    </div>
                  </div>
                )}
              </div>

              {/* Constraints */}
              {problem.constraints && problem.constraints.length > 0 && (
                <div className="pt-1">
                  <div className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-2">
                    Constraints:
                  </div>
                  <ul className="list-disc list-inside text-xs font-mono text-zinc-400 space-y-1">
                    {problem.constraints.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Examples */}
              {problem.examples && problem.examples.length > 0 && (
                <div className="space-y-3 pt-1">
                  <div className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Examples:
                  </div>
                  {problem.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="bg-surfaceBg/80 p-3 rounded-xl border border-borderSubtle space-y-2 text-xs font-mono"
                    >
                      <div className="text-zinc-400 font-semibold font-sans">
                        Example {i + 1}:
                      </div>
                      <div>
                        <span className="text-textMuted">Input: </span>
                        <span className="text-emerald-400">{ex.input}</span>
                      </div>
                      <div>
                        <span className="text-textMuted">Output: </span>
                        <span className="text-secondaryAccent font-bold">{ex.output}</span>
                      </div>
                      {ex.explanation && (
                        <div className="text-zinc-400 text-[11px] font-sans pt-1 border-t border-borderSubtle/40">
                          <span className="font-semibold text-zinc-300">Explanation: </span>
                          {ex.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {activeLeftTab === "hints" && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                Interview Hints:
              </div>
              {problem.hints && problem.hints.length > 0 ? (
                problem.hints.map((hint, i) => {
                  const isRevealed = revealedHints.includes(i);
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-borderSubtle bg-surfaceBg/60 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-secondaryAccent flex items-center gap-1.5">
                          <HelpCircle className="w-3.5 h-3.5" />
                          Hint #{i + 1}
                        </span>
                        <button
                          onClick={() => toggleHint(i)}
                          className="text-[11px] font-medium text-textMuted hover:text-white underline"
                        >
                          {isRevealed ? "Hide" : "Reveal"}
                        </button>
                      </div>
                      {isRevealed ? (
                        <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                          {hint}
                        </p>
                      ) : (
                        <p className="text-xs text-textMuted/60 italic">
                          Click reveal to view this algorithmic hint.
                        </p>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-xs text-textMuted italic">No hints available.</div>
              )}
            </div>
          )}

          {activeLeftTab === "solution" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                  Optimal Solution & Complexity
                </span>
                <button
                  onClick={handleLoadSolution}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-secondaryAccent hover:text-white bg-primaryAccent/20 border border-primaryAccent/40 hover:bg-primaryAccent/30 transition-colors"
                >
                  Load Solution to Editor
                </button>
              </div>

              {/* Complexity Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surfaceBg/70 border border-borderSubtle space-y-1">
                  <div className="text-[11px] text-textMuted font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-secondaryAccent" />
                    Time Complexity
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-400">
                    {problem.timeComplexity || "O(N)"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surfaceBg/70 border border-borderSubtle space-y-1">
                  <div className="text-[11px] text-textMuted font-medium flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-secondaryAccent" />
                    Space Complexity
                  </div>
                  <div className="text-xs font-mono font-bold text-secondaryAccent">
                    {problem.spaceComplexity || "O(1)"}
                  </div>
                </div>
              </div>

              {/* Explanation Narrative */}
              {problem.explanation && (
                <div className="p-3.5 rounded-xl bg-surfaceBg/50 border border-borderSubtle text-xs text-zinc-300 leading-relaxed whitespace-pre-line">
                  <div className="text-secondaryAccent font-semibold mb-1 font-sans">
                    Approach Explanation:
                  </div>
                  {problem.explanation}
                </div>
              )}

              {/* Solution Code */}
              <div className="space-y-1.5">
                <span className="text-xs text-textMuted font-medium">Optimal Python Code:</span>
                <pre className="p-3.5 rounded-xl bg-[#12121a] border border-borderSubtle font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                  <code>{problem.solution || problem.solutionCode}</code>
                </pre>
              </div>
            </div>
          )}

          {activeLeftTab === "testcases" && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                Pre-configured Test Cases:
              </div>
              {problem.testCases?.map((tc, i) => (
                <div
                  key={i}
                  className="bg-surfaceBg/70 p-3 rounded-xl border border-borderSubtle space-y-1.5 text-xs font-mono"
                >
                  <div className="flex items-center justify-between font-sans text-zinc-400 font-medium">
                    <span>Test Case #{i + 1}</span>
                    {tc.hidden && (
                      <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">
                        Hidden
                      </span>
                    )}
                  </div>
                  <div>
                    <span className="text-textMuted">Input: </span>
                    <span className="text-zinc-200">{tc.input}</span>
                  </div>
                  <div>
                    <span className="text-textMuted">Expected: </span>
                    <span className="text-emerald-400 font-bold">{tc.expectedOutput}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL: Monaco Python Editor & Execution Results */}
      <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col rounded-2xl border border-borderSubtle bg-codeBlock overflow-hidden shadow-card min-w-0 transition-all duration-200">
        {/* Editor Controls Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-borderSubtle bg-surfaceBg/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-textMain tracking-wide">
              Python 3.x Sandbox
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetCode}
              title="Reset code template"
              className="p-1.5 rounded-lg text-textMuted hover:text-textMain bg-cardBg border border-borderSubtle hover:border-borderHighlight transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Run Code */}
            <button
              id="run-code-button"
              disabled={isRunning || isSubmitting}
              onClick={handleRunCode}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs transition-all border ${
                isRunning
                  ? "bg-zinc-700 text-zinc-300 border-zinc-600 cursor-not-allowed"
                  : "bg-surfaceBg hover:bg-surfaceHover text-textMain border-borderSubtle hover:border-borderHighlight cursor-pointer"
              }`}
            >
              <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? "animate-spin" : ""}`} />
              <span>{isRunning ? "Running..." : "Run Code"}</span>
            </button>

            {/* Submit Code */}
            <button
              id="submit-code-button"
              disabled={isSubmitting || isRunning}
              onClick={handleSubmitCode}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-glow transition-all ${
                isSubmitting
                  ? "bg-zinc-700 text-zinc-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-primaryAccent to-secondaryAccent hover:opacity-90 text-white cursor-pointer"
              }`}
            >
              <Send className={`w-3.5 h-3.5 ${isSubmitting ? "animate-pulse" : ""}`} />
              <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
            </button>
          </div>
        </div>

        {/* Monaco Editor Container */}
        <div className="flex-1 min-h-[340px] relative">
          <MonacoEditor
            height="100%"
            language="python"
            theme={isDark ? "vs-dark" : "light"}
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 13,
              fontFamily: "var(--font-jetbrains), JetBrains Mono, monospace",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 4,
              lineNumbersMinChars: 3,
              renderLineHighlight: "all",
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
            }}
          />
        </div>

        {/* Bottom Output & Custom Input Tabs */}
        <div className="border-t border-borderSubtle bg-cardBg/90">
          <div className="flex items-center justify-between px-4 py-2 border-b border-borderSubtle/60 bg-surfaceBg/40">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveRightTab("results")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  activeRightTab === "results"
                    ? "bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30"
                    : "text-textMuted hover:text-textMain"
                }`}
              >
                Test Results
              </button>
              <button
                onClick={() => setActiveRightTab("customInput")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  activeRightTab === "customInput"
                    ? "bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30"
                    : "text-textMuted hover:text-textMain"
                }`}
              >
                Custom Input
              </button>
            </div>

            {submissionStatus && (
              <span
                className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                  submissionStatus === "Accepted"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                }`}
              >
                {submissionStatus}
              </span>
            )}
          </div>

          <div className="p-4 max-h-[220px] overflow-y-auto">
            {activeRightTab === "results" ? (
              <>
                {!execResult ? (
                  <div className="text-xs text-textMuted/60 font-mono py-2">
                    Click &quot;Run Code&quot; to test your solution, or &quot;Submit&quot; to record your score.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    <div
                      className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-bold ${
                        execResult.passed
                          ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
                          : "bg-rose-950/40 border-rose-500/40 text-rose-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {execResult.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                        <span>{execResult.output}</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span>{execResult.executionTimeMs}ms</span>
                        <span>
                          ({execResult.passedTests}/{execResult.totalTests} Passed)
                        </span>
                      </div>
                    </div>

                    {/* Test Case Breakdown */}
                    <div className="space-y-1.5">
                      {execResult.results.map((r) => (
                        <div
                          key={r.testIndex}
                          className={`p-2 rounded-lg border text-xs font-mono flex flex-col gap-1 ${
                            r.passed
                              ? "bg-emerald-950/15 border-emerald-500/20 text-emerald-200"
                              : "bg-rose-950/20 border-rose-500/30 text-rose-200"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans font-semibold">
                              Test Case #{r.testIndex}: {r.passed ? "PASSED" : "FAILED"}
                            </span>
                            <span>{r.passed ? "✓" : "✕"}</span>
                          </div>
                          {!r.passed && (
                            <div className="text-[11px] space-y-0.5 pt-1 text-zinc-300">
                              <div>
                                <span className="text-textMuted">Input: </span>
                                <span>{r.input}</span>
                              </div>
                              <div>
                                <span className="text-textMuted">Expected: </span>
                                <span className="text-emerald-400 font-bold">{r.expected}</span>
                              </div>
                              <div>
                                <span className="text-textMuted">Actual: </span>
                                <span className="text-rose-400 font-bold">{r.actual}</span>
                              </div>
                              {r.error && (
                                <div className="text-rose-400 text-[10px]">{r.error}</div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Cycle Continuation */}
                    {isCycleMode && execResult.passed && onNext && (
                      <div className="pt-2">
                        <button
                          onClick={onNext}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white text-xs font-bold shadow-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Continue Practice Cycle ➔</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              /* Custom Input Panel */
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-semibold text-textMuted uppercase tracking-wider block mb-1">
                    Enter Custom Input:
                  </label>
                  <textarea
                    rows={2}
                    value={customInputText}
                    onChange={(e) => setCustomInputText(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-surfaceBg border border-borderSubtle font-mono text-xs text-textMain focus:outline-none focus:border-primaryAccent resize-none"
                    placeholder="Provide space-separated inputs or multi-line parameters..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    disabled={isRunning}
                    onClick={handleRunCustomInput}
                    className="px-3.5 py-1.5 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Run with Custom Input
                  </button>
                  {customOutput && (
                    <span className="text-[11px] font-mono text-textMuted">
                      {customOutput.timeMs}ms
                    </span>
                  )}
                </div>

                {customOutput && (
                  <div className="p-2.5 rounded-xl bg-surfaceBg/70 border border-borderSubtle font-mono text-xs">
                    <span className="text-textMuted text-[10px] block mb-0.5">Execution Output:</span>
                    <span
                      className={customOutput.error ? "text-rose-400" : "text-emerald-300 font-bold"}
                    >
                      {customOutput.output}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
