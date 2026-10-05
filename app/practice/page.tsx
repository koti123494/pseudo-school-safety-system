"use client";

import React, { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  allQuestions,
  filterQuestions,
  totalQuestionsCount,
  getQuestionById,
} from "@/lib/questionsData";
import {
  getAttemptedIds,
  recordAnswer,
  isBookmarked,
  toggleBookmark,
  getAnswers,
  getCycleData,
  resetCycle,
} from "@/lib/storage";
import { fisherYatesShuffle } from "@/lib/shuffle";
import { Question, PythonProblem } from "@/types";
import PseudocodeViewer from "@/components/PseudocodeViewer";
import OptionsSelector from "@/components/OptionsSelector";
import DryRunTable from "@/components/DryRunTable";
import PythonEquivalent from "@/components/PythonEquivalent";
import Timer from "@/components/Timer";
import FilterBar from "@/components/FilterBar";
import CompletionModal from "@/components/CompletionModal";
import MilestoneConfetti from "@/components/MilestoneConfetti";
import CodingEditor from "@/components/CodingEditor";
import pythonProblemsData from "@/data/pythonProblems.json";
import {
  ArrowRight,
  Flame,
  CheckCircle,
  XCircle,
  BarChart3,
  Bookmark,
  Layers,
  Sparkles,
  ChevronRight,
  Code2,
} from "lucide-react";

const pythonProblems: PythonProblem[] = pythonProblemsData as PythonProblem[];

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filters state
  const [selectedCompany, setSelectedCompany] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Question state
  const [questionPool, setQuestionPool] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Cycle tracking: 5 Pseudocode -> 1 Python coding problem
  const [pseudoStreakInCycle, setPseudoStreakInCycle] = useState<number>(0);
  const [isCodingCycleTurn, setIsCodingCycleTurn] = useState<boolean>(false);
  const [currentCodingProblem, setCurrentCodingProblem] = useState<PythonProblem>(
    pythonProblems[0]
  );

  // Completion modal state
  const [showCompletion, setShowCompletion] = useState<boolean>(false);

  // Milestone tracking for confetti
  const [attemptedCount, setAttemptedCount] = useState<number>(0);

  const explanationRef = useRef<HTMLDivElement>(null);

  // Sync search param from query string if available
  useEffect(() => {
    const q = searchParams.get("search");
    if (q) setSearchQuery(q);

    const comp = searchParams.get("company");
    if (comp) setSelectedCompany(comp);

    const top = searchParams.get("topic");
    if (top) setSelectedTopic(top);

    const diff = searchParams.get("difficulty");
    if (diff) setSelectedDifficulty(diff);
  }, [searchParams]);

  // Load and shuffle questions with anti-repeat logic
  const initializePool = () => {
    const attemptedIds = new Set(getAttemptedIds());
    setAttemptedCount(attemptedIds.size);

    // Apply active filters
    const filtered = filterQuestions({
      company: selectedCompany,
      year: selectedYear,
      difficulty: selectedDifficulty,
      topic: selectedTopic,
      search: searchQuery,
    });

    // Remove already attempted questions in current cycle (anti-repeat)
    const unattempted = filtered.filter((q) => !attemptedIds.has(q.id));

    if (unattempted.length > 0) {
      // Unbiased Fisher-Yates shuffle
      const shuffled = fisherYatesShuffle(unattempted);
      setQuestionPool(shuffled);
      setCurrentIndex(0);
      setShowCompletion(false);
    } else if (filtered.length > 0) {
      // All questions in this pool have been completed!
      setQuestionPool([]);
      setShowCompletion(true);
    } else {
      // No questions match filter
      setQuestionPool([]);
    }
  };

  useEffect(() => {
    initializePool();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedCompany,
    selectedYear,
    selectedDifficulty,
    selectedTopic,
    searchQuery,
  ]);

  const currentQuestion: Question | undefined = questionPool[currentIndex];

  // Update bookmark status and reset option selection when question changes
  useEffect(() => {
    if (currentQuestion) {
      setSelectedOption(null);
      setIsAnswered(false);
      setBookmarked(isBookmarked(currentQuestion.id));
      setStartTime(Date.now());
    }
  }, [currentQuestion]);

  const handleSelectOption = (idx: number) => {
    if (!currentQuestion || isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQuestion.correctAnswerIndex;
    const timeTaken = Math.round((Date.now() - startTime) / 1000);

    // Record answer in localStorage and update streak & cycle
    recordAnswer({
      questionId: currentQuestion.id,
      selectedOptionIndex: idx,
      isCorrect,
      timeTakenSeconds: timeTaken,
      timestamp: Date.now(),
    });

    const newAttempted = getAttemptedIds().length;
    setAttemptedCount(newAttempted);

    // Smooth scroll down to explanation table
    setTimeout(() => {
      explanationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  const handleTimeUp = () => {
    if (!currentQuestion || isAnswered) return;
    // Reveal correct answer without giving points
    setIsAnswered(true);
    recordAnswer({
      questionId: currentQuestion.id,
      selectedOptionIndex: -1,
      isCorrect: false,
      timeTakenSeconds: 60,
      timestamp: Date.now(),
    });
  };

  const handleNextQuestion = () => {
    // Check if 5 pseudocode questions have been completed -> trigger Python coding problem!
    const nextPseudoInCycle = pseudoStreakInCycle + 1;
    if (nextPseudoInCycle >= 5) {
      // Pick next coding problem
      const solvedIds = new Set(getAttemptedIds());
      const nextProblem =
        pythonProblems.find((p) => !solvedIds.has(p.id)) ||
        pythonProblems[Math.floor(Math.random() * pythonProblems.length)];
      setCurrentCodingProblem(nextProblem);
      setIsCodingCycleTurn(true);
      setPseudoStreakInCycle(0);
      return;
    }

    setPseudoStreakInCycle(nextPseudoInCycle);

    if (currentIndex + 1 < questionPool.length) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Pool finished! Check if more unattempted exist or show completion
      initializePool();
    }
  };

  const handleCodingCycleFinished = () => {
    setIsCodingCycleTurn(false);
    if (currentIndex + 1 < questionPool.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      initializePool();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    const updated = toggleBookmark(currentQuestion.id);
    setBookmarked(updated);
  };

  const handleResetFilters = () => {
    setSelectedCompany("All");
    setSelectedYear("All");
    setSelectedDifficulty("All");
    setSelectedTopic("All");
    setSearchQuery("");
    router.replace("/practice");
  };

  const handleStartNewCycle = () => {
    resetCycle();
    setShowCompletion(false);
    initializePool();
  };

  const handleReviewMistakes = () => {
    const answers = getAnswers();
    const wrongIds = new Set(
      Object.values(answers)
        .filter((a) => !a.isCorrect)
        .map((a) => a.questionId)
    );
    const wrongQuestions = allQuestions.filter((q) => wrongIds.has(q.id));
    if (wrongQuestions.length > 0) {
      setQuestionPool(wrongQuestions);
      setCurrentIndex(0);
      setShowCompletion(false);
    }
  };

  // Stats calculation for completion modal
  const answers = getAnswers();
  const ansList = Object.values(answers);
  const correctCount = ansList.filter((a) => a.isCorrect).length;
  const wrongCount = ansList.filter((a) => !a.isCorrect).length;
  const accuracy = ansList.length > 0 ? Math.round((correctCount / ansList.length) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Milestone Confetti */}
      <MilestoneConfetti count={attemptedCount} />

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          totalCount={totalQuestionsCount}
          correctCount={correctCount}
          wrongCount={wrongCount}
          accuracy={accuracy}
          onStartNewCycle={handleStartNewCycle}
          onReviewMistakes={handleReviewMistakes}
        />
      )}

      {/* Filter Bar */}
      <FilterBar
        selectedCompany={selectedCompany}
        onCompanyChange={setSelectedCompany}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        selectedDifficulty={selectedDifficulty}
        onDifficultyChange={setSelectedDifficulty}
        selectedTopic={selectedTopic}
        onTopicChange={setSelectedTopic}
        matchCount={questionPool.length}
        onReset={handleResetFilters}
      />

      {/* 5 Pseudo -> 1 Python Coding Cycle Mode */}
      {isCodingCycleTurn ? (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-primaryAccent/20 via-surfaceBg to-primaryAccent/10 border border-primaryAccent/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primaryAccent flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Python Placement Coding Challenge
                </h3>
                <p className="text-xs text-secondaryAccent">
                  Completed 5 Pseudocode questions! Solve or test this Python challenge to proceed.
                </p>
              </div>
            </div>
            <button
              onClick={handleCodingCycleFinished}
              className="px-3.5 py-1.5 rounded-xl bg-surfaceBg border border-borderSubtle text-xs text-textMuted hover:text-white transition-colors"
            >
              Skip to Next 5 Pseudo ➔
            </button>
          </div>

          <CodingEditor
            problem={currentCodingProblem}
            isCycleMode={true}
            onSolved={handleCodingCycleFinished}
            onNext={handleCodingCycleFinished}
          />
        </div>
      ) : (
        <>
          {/* Main Question Display */}
          {currentQuestion ? (
            <div className="space-y-6">
              {/* Question Screen Layout: 2 Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Pseudocode (7 cols) */}
                <div className="lg:col-span-7">
                  <PseudocodeViewer
                    question={currentQuestion}
                    isBookmarked={bookmarked}
                    onToggleBookmark={handleToggleBookmark}
                  />
                </div>

                {/* Right Column: Timer, Progress & Options (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Top Status Card: Progress, Timer, Streak */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-cardBg border border-borderSubtle shadow-card">
                    {/* Progress Counter */}
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
                        Practice Pool
                      </span>
                      <span className="text-sm font-mono font-bold text-white">
                        <span className="text-secondaryAccent">{currentIndex + 1}</span> /{" "}
                        {questionPool.length}
                      </span>
                    </div>

                    {/* Cycle indicator */}
                    <div className="hidden sm:flex flex-col items-center">
                      <span className="text-[10px] uppercase font-bold text-textMuted tracking-wider">
                        Cycle Step
                      </span>
                      <span className="text-xs font-mono font-semibold text-secondaryAccent">
                        Pseudo {pseudoStreakInCycle + 1}/5
                      </span>
                    </div>

                    {/* Timer */}
                    <Timer
                      difficulty={currentQuestion.difficulty}
                      isAnswered={isAnswered}
                      onTimeUp={handleTimeUp}
                      resetKey={currentQuestion.id}
                    />
                  </div>

                  {/* Options Selector */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-cardBg border border-borderSubtle shadow-card flex flex-col gap-4">
                    <OptionsSelector
                      options={currentQuestion.options}
                      correctAnswerIndex={currentQuestion.correctAnswerIndex}
                      selectedIndex={selectedOption}
                      onSelectOption={handleSelectOption}
                      disabled={isAnswered}
                    />

                    {/* Next Question Button (Enabled after answer) */}
                    <AnimatePresence>
                      {isAnswered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="pt-2"
                        >
                          <button
                            id="next-question-btn"
                            onClick={handleNextQuestion}
                            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent hover:from-primaryAccent/90 hover:to-secondaryAccent/90 text-white font-bold text-sm shadow-glow flex items-center justify-center gap-2 transition-all group"
                          >
                            <span>
                              {pseudoStreakInCycle + 1 >= 5
                                ? "Proceed to Python Coding Problem ➔"
                                : "Next Question"}
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Explanations and Python Equivalent (Rendered after answer) */}
              <div ref={explanationRef}>
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2"
                    >
                      {/* Step by Step Dry Run */}
                      <div className="lg:col-span-7">
                        <DryRunTable
                          dryRun={currentQuestion.dryRun}
                          explanation={currentQuestion.explanation}
                          finalAnswer={
                            currentQuestion.options[currentQuestion.correctAnswerIndex]
                          }
                        />
                      </div>

                      {/* Python Equivalent Code */}
                      <div className="lg:col-span-5">
                        <PythonEquivalent pythonCode={currentQuestion.pythonCode} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="p-12 rounded-3xl bg-cardBg border border-borderSubtle text-center space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-primaryAccent/20 flex items-center justify-center text-secondaryAccent mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">No Questions in Current Filter</h3>
              <p className="text-xs text-textMuted">
                All questions matching your selected filters have already been completed or no
                questions match the criteria.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-primaryAccent text-white text-xs font-bold hover:bg-primaryAccent/90 transition-all shadow-glow"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto p-12 text-center text-textMuted font-mono text-sm">
          Loading PseudoCode Mastery Practice Workspace...
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
