import { PythonBookTopic, TopicProgress } from "@/types";
import pythonBookData from "@/data/pythonBookData.json";
import { getAllBookProgress, getTopicProgress } from "@/lib/storage";

export const allPythonBookTopics: PythonBookTopic[] = pythonBookData as PythonBookTopic[];

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
        totalExamples += Math.min(1, p.completedExamples.length / 5);
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
