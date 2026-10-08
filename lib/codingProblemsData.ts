import { CodingProblem, CodingTopic, Company, Difficulty } from "@/types";
import { pythonBookTopics } from "@/data/pythonBook";
import { getCodingSolvedIds, getCodingBookmarks } from "@/lib/storage";

const COMPANIES: Company[] = ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini"];

export const allCodingProblems: CodingProblem[] = pythonBookTopics.flatMap((topic, topicIdx) => {
  return topic.examples.map((ex, exIdx) => {
    const id = `${topic.id}-EX-${exIdx + 1}`;
    const diff: Difficulty = exIdx === 0 ? "Easy" : exIdx === 1 ? "Medium" : "Hard";
    const comp = [COMPANIES[(topicIdx + exIdx) % COMPANIES.length]];
    return {
      id,
      title: `${topic.topic}: ${ex.title}`,
      topic: topic.topic,
      difficulty: diff,
      companies: comp,
      description: `${topic.definition.join("\n\n")}\n\n**Example Task:**\n${ex.explanation}`,
      inputFormat: "Standard Python 3 execution",
      outputFormat: "Console stdout output",
      constraints: ["Python 3.x", "Execution timeout 2.0s"],
      examples: [
        {
          input: "Run Example",
          output: ex.output,
          explanation: ex.explanation,
        },
      ],
      testCases: [
        {
          input: "",
          expectedOutput: ex.output,
        },
      ],
      starterCode: ex.code,
      solution: ex.code,
      timeComplexity: "O(1) to O(n)",
      spaceComplexity: "O(1)",
      hints: [
        topic.definition[0],
        topic.definition[1],
        topic.definition[2],
        topic.definition[3],
        ex.explanation,
      ],
      explanation: ex.explanation,
      sourceType: "Company Pattern",
      problem: ex.explanation,
      solutionCode: ex.code,
    };
  });
});

// Fast indexed maps
const problemMap = new Map<string, CodingProblem>();
allCodingProblems.forEach((p) => problemMap.set(p.id, p));

export function getCodingProblemById(id: string): CodingProblem | undefined {
  return problemMap.get(id);
}

export function getCodingProblemsByTopic(topic: string): CodingProblem[] {
  if (!topic || topic === "All") return allCodingProblems;
  return allCodingProblems.filter((p) => p.topic.toLowerCase() === topic.toLowerCase());
}

export function getCodingProblemsByCompany(company: string): CodingProblem[] {
  if (!company || company === "All") return allCodingProblems;
  return allCodingProblems.filter((p) =>
    p.companies?.some((c) => c.toLowerCase() === company.toLowerCase())
  );
}

export interface CodingFilterParams {
  topic?: string;
  difficulty?: string;
  company?: string;
  search?: string;
  status?: "All" | "Solved" | "Unsolved" | "Bookmarked";
}

export function filterCodingProblems(filters: CodingFilterParams): CodingProblem[] {
  const solvedIds = new Set(getCodingSolvedIds());
  const bookmarkIds = new Set(getCodingBookmarks());

  return allCodingProblems.filter((problem) => {
    // Topic filter
    if (filters.topic && filters.topic !== "All") {
      const targetTopic = filters.topic.trim().toLowerCase();
      const matchTopic = problem.topic?.trim().toLowerCase() === targetTopic;
      const matchTags = Array.isArray((problem as any).tags) && (problem as any).tags.some((t: string) => t.trim().toLowerCase() === targetTopic);
      if (!matchTopic && !matchTags) return false;
    }

    // Difficulty filter
    if (filters.difficulty && filters.difficulty !== "All") {
      if (problem.difficulty !== filters.difficulty) return false;
    }

    // Company filter
    if (filters.company && filters.company !== "All") {
      const targetComp = filters.company.trim().toLowerCase();
      const matchComp = problem.companies?.some(
        (c) => c.trim().toLowerCase() === targetComp
      );
      if (!matchComp) return false;
    }

    // Status filter
    if (filters.status && filters.status !== "All") {
      const isSolved = solvedIds.has(problem.id);
      const isBookmarked = bookmarkIds.has(problem.id);
      if (filters.status === "Solved" && !isSolved) return false;
      if (filters.status === "Unsolved" && isSolved) return false;
      if (filters.status === "Bookmarked" && !isBookmarked) return false;
    }

    // Search filter
    if (filters.search && filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      const matchId = problem.id.toLowerCase().includes(q);
      const matchTitle = problem.title.toLowerCase().includes(q);
      const matchDesc = problem.description.toLowerCase().includes(q);
      const matchTopic = problem.topic.toLowerCase().includes(q);
      const matchCompany = problem.companies?.some((c) => c.toLowerCase().includes(q));
      const matchCode = problem.starterCode.toLowerCase().includes(q) || problem.solution.toLowerCase().includes(q);
      const matchTags = Array.isArray((problem as any).tags) && (problem as any).tags.some((t: string) => t.toLowerCase().includes(q));

      if (
        !matchId &&
        !matchTitle &&
        !matchDesc &&
        !matchTopic &&
        !matchCompany &&
        !matchCode &&
        !matchTags
      ) {
        return false;
      }
    }

    return true;
  });
}
