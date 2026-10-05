import { Question } from "@/types";
import rawQuestions from "@/data/questions.json";

export const allQuestions: Question[] = rawQuestions as Question[];
export const totalQuestionsCount = allQuestions.length;

export const questionLookup = new Map<string, Question>();
allQuestions.forEach((q) => {
  questionLookup.set(q.id, q);
});

export function getQuestionById(id: string): Question | undefined {
  return questionLookup.get(id);
}

export interface FilterParams {
  company?: string;
  year?: string | number;
  difficulty?: string;
  topic?: string;
  search?: string;
}

export function filterQuestions(params: FilterParams): Question[] {
  return allQuestions.filter((q) => {
    if (params.company && params.company !== "All" && q.company !== params.company) {
      return false;
    }
    if (params.year && params.year !== "All" && String(q.year) !== String(params.year)) {
      return false;
    }
    if (params.difficulty && params.difficulty !== "All" && q.difficulty !== params.difficulty) {
      return false;
    }
    if (params.topic && params.topic !== "All" && q.topic !== params.topic) {
      return false;
    }
    if (params.search && params.search.trim()) {
      const s = params.search.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(s);
      const matchCode = q.pseudocode.toLowerCase().includes(s);
      const matchTopic = q.topic.toLowerCase().includes(s);
      const matchCompany = q.company.toLowerCase().includes(s);
      const matchId = q.id.toLowerCase().includes(s);
      if (!matchTitle && !matchCode && !matchTopic && !matchCompany && !matchId) {
        return false;
      }
    }
    return true;
  });
}
