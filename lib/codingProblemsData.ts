import { CodingProblem, CodingTopic, Company, Difficulty } from "@/types";
import pythonProblemsData from "@/data/pythonProblems.json";
import { getCodingSolvedIds, getCodingBookmarks } from "@/lib/storage";

export const allCodingProblems: CodingProblem[] = pythonProblemsData as CodingProblem[];

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
      if (problem.topic.toLowerCase() !== filters.topic.toLowerCase()) return false;
    }

    // Difficulty filter
    if (filters.difficulty && filters.difficulty !== "All") {
      if (problem.difficulty !== filters.difficulty) return false;
    }

    // Company filter
    if (filters.company && filters.company !== "All") {
      const matchComp = problem.companies?.some(
        (c) => c.toLowerCase() === filters.company?.toLowerCase()
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

    // Search query
    if (filters.search && filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      const matchTitle = problem.title.toLowerCase().includes(q);
      const matchId = problem.id.toLowerCase().includes(q);
      const matchDesc = problem.description.toLowerCase().includes(q);
      const matchTopic = problem.topic.toLowerCase().includes(q);
      const matchComp = problem.companies?.some((c) => c.toLowerCase().includes(q));

      if (!matchTitle && !matchId && !matchDesc && !matchTopic && !matchComp) {
        return false;
      }
    }

    return true;
  });
}
