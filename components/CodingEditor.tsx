"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { CodingProblem } from "@/types";
import { runPythonCode, runPythonCustomInput, ExecutionResult } from "@/lib/pythonRunner";
import confetti from "canvas-confetti";
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
  AlertTriangle,
  FileCode,
} from "lucide-react";
import {
  markCodingSolved,
  toggleCodingBookmark,
  isCodingBookmarked,
  saveCodingSubmission,
} from "@/lib/storage";
import LazyMonacoEditor from "@/components/LazyMonacoEditor";

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
  const [activeRightTab, setActiveRightTab] = useState<"results" | "console" | "customInput">("results");
  const [customInputText, setCustomInputText] = useState(
    problem.examples[0]?.input || ""
  );
  const [customOutput, setCustomOutput] = useState<{
    output: string;
    timeMs: number;
    error?: string;
  } | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [revealedHintsCount, setRevealedHintsCount] = useState<number>(0);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  const editorRef = useRef<any>(null);
  const decorationsRef = useRef<any[]>([]);

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
    setRevealedHintsCount(0);
    setIsBookmarked(isCodingBookmarked(problem.id));
    if (problem.examples[0]) {
      setCustomInputText(problem.examples[0].input);
    }
    // Clear editor decorations on problem switch
    if (editorRef.current && decorationsRef.current.length > 0) {
      decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, []);
    }
  }, [problem]);

  const handleToggleBookmark = () => {
    const updated = toggleCodingBookmark(problem.id);
    setIsBookmarked(updated);
  };

  const clearEditorDecorations = () => {
    if (editorRef.current && decorationsRef.current.length > 0) {
      decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, []);
    }
  };

  const highlightEditorErrorLine = (line: number) => {
    if (!editorRef.current) return;
    decorationsRef.current = editorRef.current.deltaDecorations(decorationsRef.current, [
      {
        range: {
          startLineNumber: line,
          startColumn: 1,
          endLineNumber: line,
          endColumn: 1000,
        },
        options: {
          isWholeLine: true,
          className: "bg-rose-950/40 border-l-4 border-rose-500",
          overviewRuler: {
            color: "#ef4444",
            position: 4,
          },
        },
      },
    ]);
    editorRef.current.revealLineInCenter(line);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveRightTab("results");
    await new Promise((resolve) => setTimeout(resolve, 250));
    try {
      // Run only sample/visible test cases
      const result = await runPythonCode(code, problem.testCases, { onlySample: true });
      setExecResult(result);

      if (result.error?.line) {
        highlightEditorErrorLine(result.error.line);
      } else {
        clearEditorDecorations();
      }

      if (result.passed) {
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch (_) {}
      }
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
    await new Promise((resolve) => setTimeout(resolve, 400));
    try {
      // Submit checks ALL test cases, including hidden testcases
      const result = await runPythonCode(code, problem.testCases, { onlySample: false });
      setExecResult(result);

      if (result.error?.line) {
        highlightEditorErrorLine(result.error.line);
      } else {
        clearEditorDecorations();
      }

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
        try {
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.5 },
          });
        } catch (_) {}
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
      if (res.error) {
        setActiveRightTab("console");
      }
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
    clearEditorDecorations();
  };

  const handleLoadSolution = () => {
    if (problem.solution || (problem as any).solutionCode) {
      setCode(problem.solution || (problem as any).solutionCode || "");
      clearEditorDecorations();
    }
  };

  const companies = problem.companies || [];
  const allHints = problem.hints || [];

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
              Hints ({revealedHintsCount}/5)
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

        {/* Left Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-sm text-textMain">
          {activeLeftTab === "description" && (
            <>
              {/* Problem Title & Bookmark */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base sm:text-lg font-bold text-textMain leading-tight">
                  {problem.title}
                </h2>
                <button
                  onClick={handleToggleBookmark}
                  className="p-1.5 rounded-lg border border-borderSubtle bg-surfaceBg hover:bg-surfaceHover text-textMuted hover:text-secondaryAccent transition-colors shrink-0"
                  title={isBookmarked ? "Remove Bookmark" : "Save Problem"}
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isBookmarked ? "fill-secondaryAccent text-secondaryAccent" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Companies Badges */}
              {companies.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[11px] text-textMuted font-medium mr-1">
                    Asked In:
                  </span>
                  {companies.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-surfaceBg border border-borderSubtle text-secondaryAccent"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {/* Description Body */}
              <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 pt-1">
                {problem.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Input & Output Format */}
              {(problem.inputFormat || problem.outputFormat) && (
                <div className="space-y-2 pt-2 border-t border-borderSubtle/60 text-xs">
                  {problem.inputFormat && (
                    <div>
                      <span className="font-semibold text-textMuted">Input Format: </span>
                      <span className="text-zinc-300">{problem.inputFormat}</span>
                    </div>
                  )}
                  {problem.outputFormat && (
                    <div>
                      <span className="font-semibold text-textMuted">Output Format: </span>
                      <span className="text-zinc-300">{problem.outputFormat}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Constraints */}
              {problem.constraints && problem.constraints.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-borderSubtle/60">
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
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-textMuted uppercase tracking-wider">
                <span>Algorithmic Hints ({revealedHintsCount}/5):</span>
                {revealedHintsCount > 0 && (
                  <button
                    onClick={() => setRevealedHintsCount(0)}
                    className="text-[11px] text-textMuted hover:text-white underline cursor-pointer"
                  >
                    Hide All
                  </button>
                )}
              </div>

              {/* Progressive Unlock Button */}
              {revealedHintsCount < 5 && (
                <button
                  onClick={() => setRevealedHintsCount((prev) => Math.min(5, prev + 1))}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primaryAccent/20 to-secondaryAccent/20 hover:from-primaryAccent/30 hover:to-secondaryAccent/30 border border-primaryAccent/40 text-secondaryAccent hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-secondaryAccent" />
                  <span>Show Hint {revealedHintsCount + 1} ({revealedHintsCount + 1}/5)</span>
                </button>
              )}

              {/* Render revealed hints */}
              <div className="space-y-2.5">
                {allHints.slice(0, revealedHintsCount).map((hint, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-borderSubtle bg-surfaceBg/60 space-y-1.5 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-secondaryAccent flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-secondaryAccent" />
                        Hint #{i + 1}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                        Unlocked
                      </span>
                    </div>
                    <p className="text-xs text-zinc-200 leading-relaxed pt-0.5">
                      {hint.replace(/^Hint\s*\d*:\s*/i, "")}
                    </p>
                  </div>
                ))}
              </div>

              {revealedHintsCount === 0 && (
                <div className="p-6 rounded-xl border border-dashed border-borderSubtle text-center text-xs text-textMuted/70 space-y-1">
                  <p>Stuck on this problem?</p>
                  <p>Click &quot;Show Hint 1&quot; above to unlock progressive hints one by one without spoiling the solution.</p>
                </div>
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
                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-secondaryAccent hover:text-white bg-primaryAccent/20 border border-primaryAccent/40 hover:bg-primaryAccent/30 transition-colors cursor-pointer"
                >
                  Load Solution to Editor
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-2 py-1 rounded bg-surfaceBg border border-borderSubtle text-emerald-400">
                  Time: {problem.timeComplexity || "O(n)"}
                </span>
                <span className="px-2 py-1 rounded bg-surfaceBg border border-borderSubtle text-secondaryAccent">
                  Space: {problem.spaceComplexity || "O(1)"}
                </span>
              </div>

              {problem.explanation && (
                <div className="text-xs text-zinc-300 leading-relaxed bg-surfaceBg/50 p-3 rounded-xl border border-borderSubtle">
                  <span className="font-semibold text-textMain block mb-1">
                    Approach Explanation:
                  </span>
                  {problem.explanation}
                </div>
              )}

              {problem.solution && (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-textMuted uppercase tracking-wider">
                    Reference Implementation:
                  </span>
                  <pre className="p-3 rounded-xl bg-codeBlock border border-borderSubtle text-xs font-mono text-emerald-300 overflow-x-auto">
                    <code>{problem.solution}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeLeftTab === "testcases" && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                Problem Test Suite:
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all border ${
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
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-bold text-xs shadow-glow transition-all ${
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
          <LazyMonacoEditor
            height="100%"
            language="python"
            theme={isDark ? "vs-dark" : "light"}
            value={code}
            onMount={(editor) => {
              editorRef.current = editor;
            }}
            onChange={(val) => {
              setCode(val || "");
              clearEditorDecorations();
            }}
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
                onClick={() => setActiveRightTab("console")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  activeRightTab === "console"
                    ? "bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30"
                    : "text-textMuted hover:text-textMain"
                }`}
              >
                Console Logs {execResult?.consoleLogs && execResult.consoleLogs.length > 0 && `(${execResult.consoleLogs.length})`}
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
            {activeRightTab === "results" && (
              <>
                {!execResult ? (
                  <div className="text-xs text-textMuted/60 font-mono py-2">
                    Click &quot;Run Code&quot; to test your solution, or &quot;Submit&quot; to test against all testcases.
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {/* Error Banner with Line Number */}
                    {execResult.error ? (
                      <div className="p-3 rounded-xl border border-rose-500/50 bg-rose-950/40 text-rose-300 text-xs font-mono space-y-1">
                        <div className="flex items-center gap-2 font-bold text-rose-400">
                          <XCircle className="w-4 h-4 shrink-0" />
                          <span>{execResult.output}</span>
                        </div>
                        {execResult.error.line && (
                          <div className="text-[11px] text-zinc-300 pl-6">
                            Line {execResult.error.line}: Check highlighted code in editor.
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Pass / Fail Banner */
                      <div
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold ${
                          execResult.passed
                            ? "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
                            : "bg-rose-950/40 border-rose-500/50 text-rose-300"
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
                    )}

                    {/* Test Case Breakdown */}
                    {execResult.results.length > 0 && (
                      <div className="space-y-1.5">
                        {execResult.results.map((r) => (
                          <div
                            key={r.testIndex}
                            className={`p-2.5 rounded-lg border text-xs font-mono flex flex-col gap-1 ${
                              r.passed
                                ? "bg-emerald-950/15 border-emerald-500/20 text-emerald-200"
                                : "bg-rose-950/20 border-rose-500/30 text-rose-200"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-sans font-semibold flex items-center gap-1.5">
                                {r.passed ? (
                                  <span className="text-emerald-400">✓</span>
                                ) : (
                                  <span className="text-rose-400">✕</span>
                                )}
                                <span>
                                  Test Case #{r.testIndex} {r.hidden ? "(Hidden)" : ""}: {r.passed ? "PASSED" : "FAILED"}
                                </span>
                              </span>
                              <span className="font-bold">{r.passed ? "PASSED" : "FAILED"}</span>
                            </div>

                            {!r.passed && (
                              <div className="text-[11px] space-y-1 pt-1.5 text-zinc-300 border-t border-rose-500/20 mt-1">
                                <div>
                                  <span className="text-textMuted">Input: </span>
                                  <span className="text-zinc-200">{r.input}</span>
                                </div>
                                <div>
                                  <span className="text-textMuted">Expected: </span>
                                  <span className="text-emerald-400 font-bold">{r.expected}</span>
                                </div>
                                <div>
                                  <span className="text-textMuted">Your Output: </span>
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
                    )}

                    {/* Cycle Continuation */}
                    {isCycleMode && execResult.passed && onNext && (
                      <div className="pt-2">
                        <button
                          onClick={onNext}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white text-xs font-bold shadow-glow hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Continue Practice Cycle ➔</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Console Output Tab */}
            {activeRightTab === "console" && (
              <div className="space-y-2">
                <div className="text-[11px] font-semibold text-textMuted uppercase tracking-wider flex items-center justify-between">
                  <span>Console & Standard Error Output:</span>
                  {execResult?.consoleLogs && execResult.consoleLogs.length > 0 && (
                    <span className="text-secondaryAccent font-mono">
                      {execResult.consoleLogs.length} line(s)
                    </span>
                  )}
                </div>

                {execResult?.consoleLogs && execResult.consoleLogs.length > 0 ? (
                  <pre className="p-3 rounded-xl bg-codeBlock border border-borderSubtle font-mono text-xs text-zinc-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {execResult.consoleLogs.join("\n")}
                  </pre>
                ) : (
                  <div className="text-xs text-textMuted/70 font-mono py-3">
                    No output logged. Use <code className="text-secondaryAccent">print(...)</code> in your code to display debug values here.
                  </div>
                )}
              </div>
            )}

            {/* Custom Input Tab */}
            {activeRightTab === "customInput" && (
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
                    className="px-3.5 py-1.5 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
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
