"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  allPythonBookTopics,
  getBookTopicBySlug,
} from "@/lib/pythonBookService";
import {
  getTopicProgress,
  saveTopicProgress,
  setLastActivity,
} from "@/lib/storage";
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  Terminal,
  HelpCircle,
  AlertTriangle,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Award,
} from "lucide-react";
import { PythonBookTopic, TopicProgress } from "@/types";

export default function BookTopicPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const topic: PythonBookTopic | undefined = getBookTopicBySlug(slug);

  const [activeTab, setActiveTab] = useState<"theory" | "examples" | "mcqs" | "interview">("theory");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState<TopicProgress>({
    topicId: topic?.id || 1,
    theoryCompleted: false,
    completedExamples: [],
    completedExercises: [],
    mcqScore: { correct: 0, total: 0 },
    overallPercentage: 0,
  });

  // MCQ state
  const [mcqAnswers, setMcqAnswers] = useState<Record<number, number>>({});
  const [revealedExercises, setRevealedExercises] = useState<number[]>([]);

  useEffect(() => {
    if (topic) {
      const p = getTopicProgress(topic.id);
      setProgress(p);
      setLastActivity({
        lastTopicId: topic.id,
        lastTopicTitle: topic.title,
      });
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto p-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Chapter Not Found</h2>
        <Link href="/book" className="text-sm text-secondaryAccent underline">
          Return to Python Book Index
        </Link>
      </div>
    );
  }

  const currentIndex = allPythonBookTopics.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allPythonBookTopics[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < allPythonBookTopics.length - 1
      ? allPythonBookTopics[currentIndex + 1]
      : null;

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleMarkTheoryComplete = () => {
    const updated = saveTopicProgress(topic.id, {
      theoryCompleted: !progress.theoryCompleted,
    });
    setProgress(updated);
  };

  const handleCompleteExample = (exampleId: number) => {
    const currentList = progress.completedExamples || [];
    let updatedList = [...currentList];
    if (updatedList.includes(exampleId)) {
      updatedList = updatedList.filter((i) => i !== exampleId);
    } else {
      updatedList.push(exampleId);
    }
    const updated = saveTopicProgress(topic.id, {
      completedExamples: updatedList,
    });
    setProgress(updated);
  };

  const handleAnswerMCQ = (mcqId: number, optionIdx: number) => {
    const newAnswers = { ...mcqAnswers, [mcqId]: optionIdx };
    setMcqAnswers(newAnswers);

    // Calculate score
    let correct = 0;
    topic.mcqs.forEach((m) => {
      if (newAnswers[m.id] === m.correctIndex) correct++;
    });

    const updated = saveTopicProgress(topic.id, {
      mcqScore: {
        correct,
        total: topic.mcqs.length,
      },
    });
    setProgress(updated);
  };

  const toggleExercise = (idx: number) => {
    if (revealedExercises.includes(idx)) {
      setRevealedExercises(revealedExercises.filter((i) => i !== idx));
    } else {
      setRevealedExercises([...revealedExercises, idx]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Breadcrumb & Progress Bar */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-textMuted">
            <Link href="/book" className="hover:text-white transition-colors">
              Python Book
            </Link>
            <span>/</span>
            <span className="text-secondaryAccent font-semibold font-mono">
              Chapter {String(topic.id).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-textMuted font-mono text-[11px]">Topic Mastery:</span>
              <span className="font-mono font-bold text-secondaryAccent">
                {progress.overallPercentage}%
              </span>
            </div>
            <div className="w-28 h-2 rounded-full bg-surfaceBg overflow-hidden border border-borderSubtle">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent transition-all duration-300"
                style={{ width: `${progress.overallPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Chapter Title Card */}
        <div className="p-6 rounded-3xl bg-cardBg border border-borderSubtle shadow-card space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30">
              Chapter {topic.id} of 55
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-surfaceBg border border-borderSubtle text-zinc-300">
              {topic.category} Level
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {topic.title}
          </h1>

          <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
            {topic.definition}
          </p>

          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 pt-3 border-t border-borderSubtle/60 overflow-x-auto">
            <button
              onClick={() => setActiveTab("theory")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "theory"
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              Theory & Syntax
            </button>
            <button
              onClick={() => setActiveTab("examples")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "examples"
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              Working Examples ({topic.examples.length})
            </button>
            <button
              onClick={() => setActiveTab("interview")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "interview"
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              Interview Q&A & Mistakes
            </button>
            <button
              onClick={() => setActiveTab("mcqs")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "mcqs"
                  ? "bg-primaryAccent text-white shadow-glow"
                  : "bg-surfaceBg text-textMuted hover:text-white"
              }`}
            >
              Interactive Quizzes ({topic.mcqs.length} MCQs)
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="space-y-6">
        {/* THEORY TAB */}
        {activeTab === "theory" && (
          <div className="space-y-6">
            {/* Detailed Explanation */}
            <div className="p-6 rounded-2xl bg-cardBg border border-borderSubtle space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondaryAccent" />
                Comprehensive Explanation
              </h2>
              <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                {topic.explanation}
              </div>
            </div>

            {/* Standard Syntax */}
            <div className="p-6 rounded-2xl bg-cardBg border border-borderSubtle space-y-3 shadow-sm">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                Standard Python Syntax
              </h2>
              <pre className="p-4 rounded-xl bg-codeBlock border border-borderSubtle font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto leading-relaxed">
                <code>{topic.syntax}</code>
              </pre>
            </div>

            {/* Mini Practice Exercises */}
            <div className="p-6 rounded-2xl bg-cardBg border border-borderSubtle space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Mini Practice Exercises
              </h2>

              <div className="space-y-3">
                {topic.miniExercises.map((ex, i) => {
                  const isRev = revealedExercises.includes(i);
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-surfaceBg/60 border border-borderSubtle space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-secondaryAccent">
                          Exercise #{i + 1}
                        </span>
                        <button
                          onClick={() => toggleExercise(i)}
                          className="text-[11px] font-medium text-textMuted hover:text-white underline"
                        >
                          {isRev ? "Hide Solution" : "Show Hint & Solution"}
                        </button>
                      </div>
                      <p className="text-zinc-200">{ex.problem}</p>
                      {isRev && (
                        <div className="pt-2 border-t border-borderSubtle/60 space-y-2">
                          <p className="text-amber-300 text-[11px]">
                            <strong>Hint:</strong> {ex.hint}
                          </p>
                          <pre className="p-2.5 rounded-lg bg-codeBlock font-mono text-emerald-300 text-[11px] overflow-x-auto">
                            <code>{ex.solution}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mark Theory As Read Button */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-cardBg border border-borderSubtle">
              <div className="text-xs text-textMuted">
                Mark theory as finished to increase topic completion.
              </div>
              <button
                onClick={handleMarkTheoryComplete}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  progress.theoryCompleted
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-primaryAccent hover:bg-primaryAccent/90 text-white shadow-glow"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {progress.theoryCompleted ? "✓ Theory Completed" : "Mark Theory Done"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* 20 EXAMPLES TAB */}
        {activeTab === "examples" && (
          <div className="space-y-5">
            <div className="flex items-center justify-between text-xs text-textMuted">
              <span>20 Working Code Examples with Step-by-Step Outputs</span>
              <span className="font-mono text-secondaryAccent">
                {progress.completedExamples?.length || 0} / {topic.examples.length} Practiced
              </span>
            </div>

            <div className="space-y-4">
              {topic.examples.map((ex) => {
                const isPracticed = progress.completedExamples?.includes(ex.id);
                return (
                  <div
                    key={ex.id}
                    className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3 shadow-sm hover:border-borderHighlight transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-surfaceBg border border-borderSubtle text-[11px] font-mono flex items-center justify-center text-secondaryAccent font-bold">
                          {ex.id}
                        </span>
                        <h3 className="text-sm font-bold text-white">{ex.title}</h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopyCode(ex.code, ex.id)}
                          className="p-1.5 rounded-lg bg-surfaceBg border border-borderSubtle text-textMuted hover:text-white transition-colors"
                          title="Copy Code"
                        >
                          {copiedIndex === ex.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => handleCompleteExample(ex.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                            isPracticed
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                              : "bg-surfaceBg text-textMuted border-borderSubtle hover:text-white"
                          }`}
                        >
                          {isPracticed ? "✓ Completed" : "Mark Practiced"}
                        </button>
                      </div>
                    </div>

                    {/* Code & Output side-by-side / stacked */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
                          Code:
                        </div>
                        <pre className="p-3.5 rounded-xl bg-codeBlock border border-borderSubtle font-mono text-xs text-zinc-200 overflow-x-auto leading-relaxed">
                          <code>{ex.code}</code>
                        </pre>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
                          Output:
                        </div>
                        <pre className="p-3.5 rounded-xl bg-[#12121c] border border-borderSubtle font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                          <code>{ex.output}</code>
                        </pre>
                      </div>
                    </div>

                    <p className="text-xs text-textMuted italic">{ex.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* INTERVIEW Q&A & MISTAKES TAB */}
        {activeTab === "interview" && (
          <div className="space-y-6">
            {/* Common Mistakes */}
            <div className="p-6 rounded-2xl bg-cardBg border border-borderSubtle space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-rose-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                Common Beginner & Placement Mistakes
              </h2>

              <div className="space-y-3">
                {topic.commonMistakes.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2 text-xs"
                  >
                    <div className="font-bold text-rose-300">⚠️ Mistake: {m.mistake}</div>
                    <div className="text-emerald-300">✓ Correction: {m.correction}</div>
                    <div className="text-zinc-400 text-[11px]">Why it happens: {m.why}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Interview Q&A */}
            <div className="p-6 rounded-2xl bg-cardBg border border-borderSubtle space-y-4 shadow-sm">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-secondaryAccent" />
                Frequently Asked Interview Questions
              </h2>

              <div className="space-y-3">
                {topic.interviewQuestions.map((iq, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-surfaceBg/60 border border-borderSubtle space-y-2 text-xs"
                  >
                    <div className="font-bold text-white">Q{i + 1}: {iq.q}</div>
                    <div className="text-zinc-300 leading-relaxed pl-2 border-l-2 border-secondaryAccent">
                      {iq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MCQS QUIZ TAB */}
        {activeTab === "mcqs" && (
          <div className="space-y-5">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-cardBg border border-borderSubtle">
              <div>
                <h3 className="text-sm font-bold text-white">Topic Quizzes (20 MCQs)</h3>
                <p className="text-xs text-textMuted">
                  Test your comprehension with instant correct/wrong feedback and explanations.
                </p>
              </div>
              <div className="text-right font-mono">
                <div className="text-xs text-textMuted">Score</div>
                <div className="text-base font-bold text-secondaryAccent">
                  {progress.mcqScore?.correct || 0} / {topic.mcqs.length}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {topic.mcqs.map((mcq) => {
                const userChoice = mcqAnswers[mcq.id];
                const isAnswered = userChoice !== undefined;
                const isCorrect = userChoice === mcq.correctIndex;

                return (
                  <div
                    key={mcq.id}
                    className="p-5 rounded-2xl bg-cardBg border border-borderSubtle space-y-3 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-secondaryAccent font-bold">
                        Question #{mcq.id}
                      </span>
                      {isAnswered && (
                        <span
                          className={`font-bold flex items-center gap-1 ${
                            isCorrect ? "text-emerald-400" : "text-rose-400"
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-white">{mcq.question}</p>

                    {/* Options */}
                    <div className="space-y-2">
                      {mcq.options.map((opt, optIdx) => {
                        let btnStyle = "bg-surfaceBg border-borderSubtle text-zinc-300 hover:border-borderHighlight";
                        if (isAnswered) {
                          if (optIdx === mcq.correctIndex) {
                            btnStyle = "bg-emerald-950/40 border-emerald-500 text-emerald-200";
                          } else if (userChoice === optIdx) {
                            btnStyle = "bg-rose-950/40 border-rose-500 text-rose-200";
                          } else {
                            btnStyle = "opacity-40 bg-surfaceBg border-borderSubtle text-zinc-500";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswerMCQ(mcq.id, optIdx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === mcq.correctIndex && (
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="p-3 rounded-xl bg-surfaceBg/60 border border-borderSubtle text-xs text-zinc-300">
                        <strong className="text-secondaryAccent">Explanation: </strong>
                        {mcq.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next Chapter Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-borderSubtle">
        {prevTopic ? (
          <Link
            href={`/book/${prevTopic.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cardBg border border-borderSubtle hover:border-borderHighlight text-xs font-semibold text-textMain transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ch {prevTopic.id}: {prevTopic.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <Link
            href={`/book/${nextTopic.slug}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primaryAccent hover:bg-primaryAccent/90 text-white text-xs font-bold shadow-glow transition-all"
          >
            <span>Ch {nextTopic.id}: {nextTopic.title}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
