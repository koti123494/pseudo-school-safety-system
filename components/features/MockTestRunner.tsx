"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Clock,
  Award,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Send,
  Sparkles,
  ChevronRight,
  Building2,
  FileCheck2,
} from "lucide-react";
import { allPseudoCodeQuestions } from "@/data/pseudoCode5000";
import { PseudoCodeQuestion, MockTestResult } from "@/types";
import { recordQuestionAnswer } from "@/lib/streak";

interface MockTestRunnerProps {
  customQuestions?: PseudoCodeQuestion[];
  customDurationMinutes?: number;
  testTitle?: string;
}

const MOCK_HISTORY_KEY = "mockTestHistory";

export function getMockTestHistory(): MockTestResult[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(MOCK_HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveMockTestResult(result: MockTestResult): void {
  if (typeof window === "undefined") return;
  const history = getMockTestHistory();
  const updated = [result, ...history];
  localStorage.setItem(MOCK_HISTORY_KEY, JSON.stringify(updated));
}

export default function MockTestRunner({
  customQuestions,
  customDurationMinutes = 30,
  testTitle = "TCS NQT National Qualifier Mock Test",
}: MockTestRunnerProps) {
  const [status, setStatus] = useState<"intro" | "running" | "completed">("intro");
  const [questions, setQuestions] = useState<PseudoCodeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [timeRemaining, setTimeRemaining] = useState(customDurationMinutes * 60);
  const [result, setResult] = useState<MockTestResult | null>(null);
  const [history, setHistory] = useState<MockTestResult[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setHistory(getMockTestHistory());
  }, []);

  // Pick 20 questions
  const startTest = () => {
    let selected: PseudoCodeQuestion[] = [];
    if (customQuestions && customQuestions.length > 0) {
      selected = customQuestions;
    } else {
      // Pick 20 random pseudo questions
      const shuffled = [...allPseudoCodeQuestions].sort(() => 0.5 - Math.random());
      selected = shuffled.slice(0, 20);
    }

    setQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setTimeRemaining(customDurationMinutes * 60);
    setStatus("running");
  };

  // Timer tick
  useEffect(() => {
    if (status === "running") {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, questions, answers]);

  const handleSubmitTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    let wrongCount = 0;
    const totalQ = questions.length;

    questions.forEach((q) => {
      const chosen = answers[q.id];
      if (chosen) {
        if (chosen === q.correct) {
          correctCount++;
          recordQuestionAnswer(q.id, true);
        } else {
          wrongCount++;
          recordQuestionAnswer(q.id, false);
        }
      }
    });

    const attemptedCount = correctCount + wrongCount;
    // Marking scheme: +1 for correct, -0.25 for wrong
    const rawScore = correctCount * 1 - wrongCount * 0.25;
    const score = Math.max(0, parseFloat(rawScore.toFixed(2)));
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const timeSpent = customDurationMinutes * 60 - timeRemaining;
    const passed = score >= 12; // TCS NQT cutoff: 12/20

    const testRes: MockTestResult = {
      id: "MOCK-" + Date.now().toString(36).toUpperCase(),
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      totalQuestions: totalQ,
      attemptedCount,
      correctCount,
      wrongCount,
      score,
      accuracy,
      timeSpentSeconds: timeSpent,
      passed,
      companyCutoffName: "TCS NQT Cutoff (12.0 / 20)",
      answers,
    };

    setResult(testRes);
    saveMockTestResult(testRes);
    setHistory(getMockTestHistory());
    setStatus("completed");
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // INTRO SCREEN
  if (status === "intro") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondaryBg via-surfaceBg to-secondaryBg border border-borderSubtle p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentPurple/20 text-accentPurple border border-accentPurple/30 text-xs font-mono font-bold">
                <Building2 className="w-3.5 h-3.5" />
                TCS NQT & MNC Exam Pattern
              </div>
              <h1 className="text-3xl font-extrabold text-textMain tracking-tight">
                {testTitle}
              </h1>
              <p className="text-sm text-textMuted max-w-xl leading-relaxed">
                Experience the exact timed test environment for TCS NQT, Infosys DSE, and Wipro
                National Qualifier exams. 20 randomized questions with negative marking.
              </p>
            </div>

            <button
              onClick={startTest}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-accentPurple to-primary hover:opacity-95 text-white font-bold text-base font-mono shadow-xl shadow-accentPurple/20 transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <Send className="w-5 h-5" />
              Start Mock Test Now
            </button>
          </div>

          {/* Test Pattern Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-borderSubtle">
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted block font-mono">Questions</span>
              <span className="text-xl font-extrabold text-accentCyan font-mono">
                {customQuestions ? customQuestions.length : 20}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted block font-mono">Duration</span>
              <span className="text-xl font-extrabold text-amber-400 font-mono">
                {customDurationMinutes} Mins
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted block font-mono">Marking Scheme</span>
              <span className="text-sm font-bold text-emerald-400 font-mono block mt-1">
                +1.00 / -0.25
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted block font-mono">Cutoff Standard</span>
              <span className="text-sm font-bold text-accentPurple font-mono block mt-1">
                12 / 20 (60%)
              </span>
            </div>
          </div>
        </div>

        {/* Previous Test History */}
        {history.length > 0 && (
          <div className="rounded-2xl bg-surfaceBg border border-borderSubtle p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-textMain flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-accentCyan" />
                Your Previous Mock Test History
              </h3>
              <span className="text-xs text-textMuted font-mono">
                {history.length} completed
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-borderSubtle text-textMuted">
                    <th className="py-2.5 px-3">Date</th>
                    <th className="py-2.5 px-3">Score</th>
                    <th className="py-2.5 px-3">Accuracy</th>
                    <th className="py-2.5 px-3">Time</th>
                    <th className="py-2.5 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-borderSubtle/50 text-textMain">
                  {history.slice(0, 5).map((h, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3">{h.date}</td>
                      <td className="py-2.5 px-3 font-bold text-accentCyan">
                        {h.score} / {h.totalQuestions}
                      </td>
                      <td className="py-2.5 px-3">{h.accuracy}%</td>
                      <td className="py-2.5 px-3">
                        {Math.floor(h.timeSpentSeconds / 60)}m {h.timeSpentSeconds % 60}s
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            h.passed
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                              : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          }`}
                        >
                          {h.passed ? "PASSED" : "FAILED"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  // RUNNING TEST SCREEN
  if (status === "running") {
    const currentQ = questions[currentIndex];
    const isWarning = timeRemaining < 300; // < 5 mins

    return (
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Top Sticky Test Bar */}
        <div className="sticky top-20 z-20 flex items-center justify-between gap-4 p-4 rounded-2xl bg-secondaryBg/90 backdrop-blur-md border border-borderSubtle shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-surfaceBorder text-textMain">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span className="text-xs text-textMuted font-mono hidden sm:inline">
              Attempted: {Object.keys(answers).length} / {questions.length}
            </span>
          </div>

          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-sm shadow-inner transition-colors ${
              isWarning
                ? "bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse"
                : "bg-surfaceBg text-amber-400 border-borderSubtle"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Time Left: {formatTimer(timeRemaining)}</span>
          </div>

          {/* Submit Test Button */}
          <button
            onClick={() => {
              if (
                window.confirm(
                  `Are you sure you want to finish and submit? You answered ${
                    Object.keys(answers).length
                  } out of ${questions.length} questions.`
                )
              ) {
                handleSubmitTest();
              }
            }}
            className="px-4 py-1.5 rounded-xl bg-accentPurple hover:bg-accentPurple/90 text-white font-mono text-xs font-bold transition-all shadow-md active:scale-95"
          >
            Submit Test
          </button>
        </div>

        {/* Layout: Main Question Card & Right Question Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Question Display */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-surfaceBg border border-borderSubtle rounded-2xl p-6 shadow-xl space-y-4">
              {/* Question Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accentPurple/20 text-accentPurple border border-accentPurple/30">
                    {currentQ.id}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-surfaceBorder text-textMuted">
                    {currentQ.topic}
                  </span>
                </div>
                <span className="text-xs text-textMuted font-mono">
                  +1.00 / -0.25 Mark
                </span>
              </div>

              {/* Prompt */}
              <h3 className="text-base font-semibold text-textMain leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Pseudocode Box */}
              <div className="p-4 rounded-xl bg-[#0d1117] border border-borderSubtle font-mono text-xs text-slate-200 overflow-x-auto whitespace-pre leading-relaxed">
                {currentQ.pseudoCode}
              </div>

              {/* 4 Options Radio Card */}
              <div className="space-y-2.5 pt-2">
                {(["A", "B", "C", "D"] as const).map((optKey) => {
                  const isSelected = answers[currentQ.id] === optKey;
                  return (
                    <button
                      key={optKey}
                      onClick={() =>
                        setAnswers({ ...answers, [currentQ.id]: optKey })
                      }
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-sm font-mono text-left transition-all ${
                        isSelected
                          ? "bg-accentPurple/20 border-accentPurple text-textMain ring-1 ring-accentPurple shadow-md"
                          : "bg-secondaryBg/70 border-borderSubtle text-textMuted hover:text-textMain hover:border-surfaceBorder"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                            isSelected
                              ? "bg-accentPurple text-white"
                              : "bg-surfaceBorder text-textMuted"
                          }`}
                        >
                          {optKey}
                        </span>
                        <span>{currentQ.options[optKey]}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-accentPurple" : "border-borderSubtle"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-accentPurple" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons: Clear, Prev, Next */}
              <div className="flex items-center justify-between pt-4 border-t border-borderSubtle">
                <button
                  onClick={() => {
                    const copy = { ...answers };
                    delete copy[currentQ.id];
                    setAnswers(copy);
                  }}
                  className="text-xs text-textMuted hover:text-rose-400 font-mono transition-colors"
                >
                  Clear Choice
                </button>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex((prev) => prev - 1)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-borderSubtle bg-secondaryBg text-xs font-mono text-textMuted hover:text-textMain disabled:opacity-40 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous
                  </button>

                  <button
                    disabled={currentIndex === questions.length - 1}
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-accentPurple hover:bg-accentPurple/90 text-white text-xs font-mono font-bold disabled:opacity-40 transition-colors shadow-sm"
                  >
                    Next <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Question Palette */}
          <div className="bg-surfaceBg border border-borderSubtle rounded-2xl p-5 shadow-xl h-fit space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-textMuted font-mono">
              Question Palette
            </h4>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isAttempted = Boolean(answers[q.id]);
                const isCurrent = idx === currentIndex;

                let badgeClass = "bg-secondaryBg text-textMuted border-borderSubtle";
                if (isCurrent) {
                  badgeClass = "bg-accentPurple text-white border-accentPurple ring-2 ring-accentPurple/50 font-bold";
                } else if (isAttempted) {
                  badgeClass = "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 font-bold";
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl border text-xs font-mono transition-all flex items-center justify-center ${badgeClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-borderSubtle space-y-2 text-[11px] font-mono text-textMuted">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/40" />
                <span>Answered ({Object.keys(answers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-secondaryBg border border-borderSubtle" />
                <span>Unattempted ({questions.length - Object.keys(answers).length})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-accentPurple" />
                <span>Current Question</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RESULT SCREEN
  if (status === "completed" && result) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
        {/* Result Card */}
        <div
          className={`rounded-3xl border p-8 shadow-2xl relative overflow-hidden ${
            result.passed
              ? "bg-gradient-to-br from-emerald-950/40 via-surfaceBg to-surfaceBg border-emerald-500/40"
              : "bg-gradient-to-br from-rose-950/40 via-surfaceBg to-surfaceBg border-rose-500/40"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  result.passed
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                }`}
              >
                {result.passed ? "🎉 TCS NQT QUALIFIED" : "⚠️ BELOW CUTOFF"}
              </span>

              <h2 className="text-3xl font-extrabold text-textMain tracking-tight">
                {result.passed ? "Congratulations! You Passed!" : "Needs More Revision"}
              </h2>

              <p className="text-xs text-textMuted font-mono">
                Cutoff Benchmark: {result.companyCutoffName} | Test ID: {result.id}
              </p>
            </div>

            {/* Score Big Badge */}
            <div className="p-6 rounded-2xl bg-surfaceBg/80 border border-borderSubtle shadow-inner text-center shrink-0">
              <span className="text-xs text-textMuted font-mono block">FINAL SCORE</span>
              <div className="text-4xl font-extrabold font-mono text-accentCyan mt-1">
                {result.score}
                <span className="text-lg text-textMuted font-normal"> / {result.totalQuestions}</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-borderSubtle">
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted font-mono block">Accuracy</span>
              <span className="text-xl font-bold font-mono text-textMain">{result.accuracy}%</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted font-mono block">Correct (+1)</span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                {result.correctCount}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted font-mono block">Wrong (-0.25)</span>
              <span className="text-xl font-bold font-mono text-rose-400">
                {result.wrongCount}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-center">
              <span className="text-xs text-textMuted font-mono block">Time Taken</span>
              <span className="text-xl font-bold font-mono text-amber-400">
                {Math.floor(result.timeSpentSeconds / 60)}:
                {(result.timeSpentSeconds % 60).toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={startTest}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accentPurple hover:bg-accentPurple/90 text-white font-mono text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Another 20 Questions
            </button>
            <Link
              href="/practice"
              className="px-5 py-2.5 rounded-xl bg-surfaceBorder text-textMain font-mono text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              Back to Practice Hub
            </Link>
          </div>
        </div>

        {/* Detailed Solutions Review */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-textMain">Review All 20 Questions & Explanations</h3>
            <span className="text-xs text-textMuted font-mono">Answers Review</span>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const userOpt = answers[q.id];
              const isCorrect = userOpt === q.correct;
              const isAttempted = Boolean(userOpt);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    !isAttempted
                      ? "bg-surfaceBg/70 border-borderSubtle"
                      : isCorrect
                      ? "bg-emerald-500/5 border-emerald-500/30"
                      : "bg-rose-500/5 border-rose-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surfaceBorder text-textMain">
                        Q{idx + 1}
                      </span>
                      <span className="text-xs text-textMuted font-mono">{q.id}</span>
                      <span className="text-xs font-semibold text-accentPurple">{q.topic}</span>
                    </div>

                    <div>
                      {!isAttempted ? (
                        <span className="text-xs text-textMuted font-mono">Unattempted (0 pts)</span>
                      ) : isCorrect ? (
                        <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1.00)
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-rose-400 font-mono flex items-center gap-1">
                          <XCircle className="w-3.5 h-3.5" /> Wrong (-0.25)
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-textMain mb-3">{q.question}</p>

                  <div className="p-3 rounded-lg bg-[#0d1117] font-mono text-xs text-slate-200 whitespace-pre mb-3">
                    {q.pseudoCode}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mb-3">
                    {(["A", "B", "C", "D"] as const).map((key) => {
                      const isCorrectChoice = key === q.correct;
                      const isUserChoice = key === userOpt;

                      let badge = "bg-secondaryBg border-borderSubtle text-textMuted";
                      if (isCorrectChoice) {
                        badge = "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold";
                      } else if (isUserChoice && !isCorrectChoice) {
                        badge = "bg-rose-500/20 border-rose-500/60 text-rose-300 line-through";
                      }

                      return (
                        <div key={key} className={`p-2 rounded-lg border ${badge}`}>
                          <span>{key}: </span>
                          <span>{q.options[key]}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3 rounded-lg bg-secondaryBg text-xs text-textMain border border-borderSubtle/60 space-y-1">
                    <span className="font-bold text-accentCyan font-mono block">Explanation:</span>
                    <p>{q.explanation}</p>
                    {q.teluguExplanation && (
                      <p className="text-amber-300/90 italic pt-1 border-t border-borderSubtle/40">
                        తెలుగు వివరణ: {q.teluguExplanation}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
