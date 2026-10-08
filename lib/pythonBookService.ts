import { PythonBookTopic, TopicProgress } from "@/types";
import { pythonBookTopics } from "@/data/pythonBook";
import { getAllBookProgress, getTopicProgress } from "@/lib/storage";

export const allPythonBookTopics: PythonBookTopic[] = pythonBookTopics.map((topic, idx) => {
  const category: "Beginner" | "Intermediate" | "Advanced" | "Interview Special" =
    idx < 15 ? "Beginner" : idx < 30 ? "Intermediate" : idx < 42 ? "Advanced" : "Interview Special";
  const slug = topic.topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return {
    id: idx + 1,
    slug,
    title: topic.topicName,
    category,
    definition: topic.definition.join(" "),
    explanation: topic.definition.join("\n\n"),
    syntax: topic.syntax,
    examples: topic.examples.map((ex, exIdx) => ({
      id: exIdx + 1,
      title: ex.title,
      code: ex.code,
      output: ex.output,
      explanation: ex.explanation,
    })),
    commonMistakes: [
      {
        mistake: `Misusing ${topic.topic} syntax without proper indentation or types`,
        correction: `Follow Python 3 standard conventions for ${topic.topic}`,
        why: "Python is dynamically typed and enforces clean syntax conventions.",
      },
    ],
    interviewQuestions: topic.mcqs.slice(0, 3).map((m) => ({
      q: m.question,
      a: `${m.correct}: ${m.options[m.correct]}. ${m.explanation}`,
    })),
    miniExercises: [
      {
        problem: `Write a Python snippet demonstrating ${topic.topic}`,
        hint: topic.definition[0],
        solution: topic.examples[0]?.code || topic.syntax,
      },
    ],
    mcqs: topic.mcqs.map((m, mIdx) => ({
      id: mIdx + 1,
      question: m.question,
      options: [m.options.A, m.options.B, m.options.C, m.options.D] as [string, string, string, string],
      correctIndex: m.correct === "A" ? 0 : m.correct === "B" ? 1 : m.correct === "C" ? 2 : 3,
      explanation: m.explanation,
    })),
  };
});

export function getBookTopicById(id: number): PythonBookTopic | undefined {
  return allPythonBookTopics.find((t) => t.id === id);
}

export function getBookTopicBySlug(slug: string): PythonBookTopic | undefined {
  return allPythonBookTopics.find((t) => t.slug === slug);
}

export function getOverallBookProgress(): {
  overallPercentage: number;
  theoryPercentage: number;
  examplesPercentage: number;
  mcqPercentage: number;
  completedTopicsCount: number;
  totalTopics: number;
} {
  const allProgress = getAllBookProgress();
  const total = allPythonBookTopics.length;
  if (total === 0) {
    return {
      overallPercentage: 0,
      theoryPercentage: 0,
      examplesPercentage: 0,
      mcqPercentage: 0,
      completedTopicsCount: 0,
      totalTopics: total,
    };
  }

  let totalTheory = 0;
  let totalExamples = 0;
  let totalMCQ = 0;
  let completedTopics = 0;
  let sumOverall = 0;

  allPythonBookTopics.forEach((topic) => {
    const p = allProgress[String(topic.id)];
    if (p) {
      if (p.theoryCompleted) totalTheory++;
      if (p.completedExamples && p.completedExamples.length > 0) {
        totalExamples += Math.min(1, p.completedExamples.length / 3);
      }
      if (p.mcqScore && p.mcqScore.total > 0) {
        totalMCQ += p.mcqScore.correct / p.mcqScore.total;
      }
      sumOverall += p.overallPercentage || 0;
      if ((p.overallPercentage || 0) >= 80) completedTopics++;
    }
  });

  return {
    overallPercentage: Math.round(sumOverall / total),
    theoryPercentage: Math.round((totalTheory / total) * 100),
    examplesPercentage: Math.round((totalExamples / total) * 100),
    mcqPercentage: Math.round((totalMCQ / total) * 100),
    completedTopicsCount: completedTopics,
    totalTopics: total,
  };
}
