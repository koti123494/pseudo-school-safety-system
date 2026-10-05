"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { allPythonBookTopics } from "@/lib/pythonBookService";
import { getTopicProgress, saveTopicProgress } from "@/lib/storage";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  ArrowRight,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function QuizzesContent() {
  const searchParams = useSearchParams();

  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answersMap, setAnswersMap] = useState<Record<number, number>>({});
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  useEffect(() => {
    const topicParam = searchParams.get("topic");
    if (topicParam) {
      const found = allPythonBookTopics.find(
        (t) => t.id === Number(topicParam) || t.slug === topicParam
      );
      if (found) {
        setSelectedTopicId(found.id);
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
      }
    }
  }, [searchParams]);

  const currentTopic =
    allPythonBookTopics.find((t) => t.id === selectedTopicId) ||
    allPythonBookTopics[0];

  const questions = currentTopic?.mcqs || [];
  const currentMCQ = questions[currentQuestionIndex] || questions[0];

  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [selectedTopicId, currentQuestionIndex]);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const newMap = { ...answersMap, [currentMCQ.id]: idx };
    setAnswersMap(newMap);

    // Update progress in storage
    let correct = 0;
    questions.forEach((q) => {
      if (newMap[q.id] === q.correctIndex) correct++;
    });

    saveTopicProgress(selectedTopicId, {
      mcqScore: {
        correct,
        total: questions.length,
      },
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setAnswersMap({});
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const correctCount = Object.entries(answersMap).filter(([id, opt]) => {
    const q = questions.find((item) => item.id === Number(id));
    return q && q.correctIndex === opt;
  }).length;

  const answeredCount = Object.keys(answersMap).length;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-borderSubtle pb-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primaryAccent/20 text-secondaryAccent flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Python MCQs & Logic Quizzes
            </h1>
          </div>
          <p className="text-xs text-textMuted mt-1">
            20+ placement-level MCQs per chapter covering output prediction, syntax errors, and core concepts.
          </p>
        </div>

        {/* Chapter Select */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-textMuted">Chapter:</label>
          <select
            value={selectedTopicId}
            onChange={(e) => {
              setSelectedTopicId(Number(e.target.value));
              handleResetQuiz();
            }}
            className="py-1.5 px-3 rounded-xl bg-cardBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-primaryAccent cursor-pointer"
          >
            {allPythonBookTopics.map((t) => (
              <option key={t.id} value={t.id}>
                Ch {t.id}: {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Score and Stats Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-cardBg border border-borderSubtle">
          <span className="text-[10px] uppercase font-bold text-textMuted">Progress</span>
          <div className="text-base font-bold text-white font-mono">
            {currentQuestionIndex + 1} / {questions.length}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-cardBg border border-borderSubtle">
          <span className="text-[10px] uppercase font-bold text-textMuted">Correct</span>
          <div className="text-base font-bold text-emerald-400 font-mono">
            {correctCount}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-cardBg border border-borderSubtle">
          <span className="text-[10px] uppercase font-bold text-textMuted">Accuracy</span>
          <div className="text-base font-bold text-secondaryAccent font-mono">
            {accuracy}%
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-cardBg border border-borderSubtle flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-textMuted">Actions</span>
            <div className="text-xs font-semibold text-textMuted">Retake Quiz</div>
          </div>
          <button
            onClick={handleResetQuiz}
            title="Reset Quiz"
            className="p-1.5 rounded-lg bg-surfaceBg border border-borderSubtle text-textMuted hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      {currentMCQ && (
        <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-5">
          <div className="flex items-center justify-between text-xs text-textMuted border-b border-borderSubtle pb-3">
            <span className="font-mono text-secondaryAccent font-bold">
              Question #{currentQuestionIndex + 1}
            </span>
            <span className="font-mono">
              Ch {selectedTopicId}: {currentTopic.title}
            </span>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {currentMCQ.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentMCQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentMCQ.correctIndex;

              let style =
                "bg-surfaceBg/70 border-borderSubtle text-zinc-200 hover:border-borderHighlight";
              if (isAnswered) {
                if (isCorrect) {
                  style = "bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-glowSuccess";
                } else if (isSelected && !isCorrect) {
                  style = "bg-rose-950/40 border-rose-500 text-rose-200 shadow-glowError";
                } else {
                  style = "opacity-40 bg-surfaceBg border-borderSubtle text-zinc-500";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${style} ${
                    isAnswered ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-surfaceBg border border-borderSubtle font-mono text-xs flex items-center justify-center shrink-0 text-textMuted">
                      {["A", "B", "C", "D"][idx]}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border text-xs leading-relaxed space-y-1 ${
                  selectedOption === currentMCQ.correctIndex
                    ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-200"
                    : "bg-rose-950/30 border-rose-500/30 text-rose-200"
                }`}
              >
                <div className="font-bold font-sans">
                  {selectedOption === currentMCQ.correctIndex
                    ? "✓ Correct Answer!"
                    : "✕ Incorrect Answer"}
                </div>
                <div>
                  <strong className="text-secondaryAccent">Explanation: </strong>
                  {currentMCQ.explanation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-3 border-t border-borderSubtle">
            <button
              disabled={currentQuestionIndex === 0}
              onClick={handlePrev}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                currentQuestionIndex > 0
                  ? "bg-surfaceBg border-borderSubtle text-textMain hover:border-borderHighlight cursor-pointer"
                  : "opacity-40 border-borderSubtle text-textMuted cursor-not-allowed"
              }`}
            >
              ← Previous Question
            </button>

            <button
              disabled={currentQuestionIndex >= questions.length - 1}
              onClick={handleNext}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                currentQuestionIndex < questions.length - 1
                  ? "bg-primaryAccent hover:bg-primaryAccent/90 text-white shadow-glow cursor-pointer"
                  : "opacity-40 bg-surfaceBg border border-borderSubtle text-textMuted cursor-not-allowed"
              }`}
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuizzesPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto p-12 text-center text-textMuted font-mono text-sm">
          Loading Python MCQs Quizzes...
        </div>
      }
    >
      <QuizzesContent />
    </Suspense>
  );
}
