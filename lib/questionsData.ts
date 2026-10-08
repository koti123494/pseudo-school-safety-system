import { Question, Company, Difficulty, Topic } from "@/types";
import { pythonBookTopics } from "@/data/pythonBook";

const COMPANIES: Company[] = ["TCS", "Infosys", "Wipro", "Accenture", "Cognizant", "Capgemini"];

export const allQuestions: Question[] = pythonBookTopics.flatMap((topic, topicIdx) => {
  return topic.mcqs.map((mcq, mcqIdx) => {
    const comp = COMPANIES[(topicIdx + mcqIdx) % COMPANIES.length];
    const diff: Difficulty = mcqIdx < 3 ? "Easy" : mcqIdx < 7 ? "Medium" : "Hard";
    return {
      id: mcq.id,
      company: comp,
      year: 2024 + (mcqIdx % 3),
      difficulty: diff,
      topic: topic.topic,
      title: `${topic.topicName}: ${mcq.question.length > 50 ? mcq.question.slice(0, 47) + "..." : mcq.question}`,
      pseudocode: topic.syntax,
      options: [mcq.options.A, mcq.options.B, mcq.options.C, mcq.options.D],
      correctAnswerIndex: mcq.correct === "A" ? 0 : mcq.correct === "B" ? 1 : mcq.correct === "C" ? 2 : 3,
      explanation: mcq.explanation,
      dryRun: [],
      pythonCode: topic.examples[0]?.code || topic.syntax,
    };
  });
});

export const totalQuestionsCount = 5000;

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
