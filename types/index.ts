export type Difficulty = "Easy" | "Medium" | "Hard";

export type Company =
  | "TCS"
  | "TCS NQT"
  | "TCS Digital"
  | "Infosys"
  | "Infosys SP"
  | "Infosys DSE"
  | "Wipro"
  | "Accenture"
  | "Capgemini"
  | "Cognizant"
  | "HCL"
  | "Tech Mahindra"
  | "IBM"
  | "Amazon"
  | "Microsoft"
  | "Google";

export type Topic =
  | "Operators"
  | "Bitwise"
  | "Loops"
  | "Arrays"
  | "Nested Conditions"
  | "Series"
  | "Profit / Loss"
  | "Queue Logic"
  | "Mathematical Logic";

export type CodingTopic =
  | "Arrays"
  | "Strings"
  | "Two Pointers"
  | "Sliding Window"
  | "Prefix Sum"
  | "Hashing"
  | "Greedy"
  | "Backtracking"
  | "Stack"
  | "Recursion"
  | "Linked List"
  | "Trees"
  | "Hash Table"
  | "Sorting"
  | "Dynamic Programming"
  | "Mathematics"
  | "Monotonic Stack"
  | "Binary Search"
  | "Graphs"
  | "Heaps / Priority Queue";

export const CODING_TOPICS: CodingTopic[] = [
  "Arrays",
  "Strings",
  "Two Pointers",
  "Sliding Window",
  "Prefix Sum",
  "Hashing",
  "Greedy",
  "Backtracking",
  "Stack",
  "Recursion",
  "Linked List",
  "Trees",
  "Hash Table",
  "Sorting",
  "Dynamic Programming",
  "Mathematics",
  "Monotonic Stack",
  "Binary Search",
  "Graphs",
  "Heaps / Priority Queue",
];

export const COMPANY_LIST: Company[] = [
  "TCS",
  "TCS NQT",
  "TCS Digital",
  "Infosys",
  "Infosys SP",
  "Infosys DSE",
  "Wipro",
  "Accenture",
  "Capgemini",
  "Cognizant",
  "HCL",
  "Tech Mahindra",
  "IBM",
  "Amazon",
  "Microsoft",
  "Google",
];

export type Provenance = "Placement Pattern" | "Company Pattern" | "Verified PYQ" | "Original Practice";

export interface DryRunStep {
  step: number;
  vars: Record<string, string | number | boolean>;
  condition?: string;
  output?: string;
  note?: string;
}

export interface Question {
  id: string; // e.g. "PS001"
  company: Company | string;
  year: number; // 2015 - 2026
  difficulty: Difficulty;
  topic: Topic | string;
  title: string;
  provenance?: Provenance;
  pseudocode: string;
  options: [string, string, string, string];
  correctAnswerIndex: number; // 0, 1, 2, or 3
  explanation: string;
  dryRun: DryRunStep[];
  pythonCode: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  hidden?: boolean;
}

export interface CodingProblem {
  id: string; // e.g. "PY-ARR-001"
  title: string;
  topic: CodingTopic | string;
  difficulty: Difficulty;
  companies: string[];
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string[];
  examples: {
    input: string;
    output: string;
    explanation: string;
  }[];
  testCases: TestCase[];
  starterCode: string;
  solution: string;
  timeComplexity: string;
  spaceComplexity: string;
  hints: string[];
  explanation: string;
  sourceType: "Verified PYQ" | "Company Pattern" | "Original Practice";
  // Backward compatibility alias:
  problem?: string;
  solutionCode?: string;
}

// Backward-compatible alias for existing components
export type PythonProblem = CodingProblem;

export interface QuestionAnswerRecord {
  questionId: string;
  selectedOptionIndex: number;
  isCorrect: boolean;
  timeTakenSeconds: number;
  timestamp: number;
}

export interface CodingSubmission {
  problemId: string;
  code: string;
  passed: boolean;
  timestamp: number;
  executionTimeMs: number;
}

export interface UserProgress {
  attemptedIds: string[]; // For anti-repeat
  answers: Record<string, QuestionAnswerRecord>;
  bookmarks: string[];
  codingBookmarks: string[];
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  cycleNumber: number;
  completedCycles: number;
  pseudoCountInCurrentCycle: number;
  codingProblemsSolved: string[];
  codingSubmissions: Record<string, CodingSubmission>;
  bookProgress: Record<string, TopicProgress>;
  studyMinutesTotal: number;
  activityHistory: Record<string, number>; // YYYY-MM-DD -> count
}

export interface PythonExample {
  id: number;
  title: string;
  code: string;
  output: string;
  explanation: string;
}

export interface PythonMCQ {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface PythonBookTopic {
  id: number;
  slug: string;
  title: string;
  category: "Beginner" | "Intermediate" | "Advanced" | "Interview Special";
  definition: string;
  explanation: string;
  syntax: string;
  examples: PythonExample[];
  commonMistakes: { mistake: string; correction: string; why: string }[];
  interviewQuestions: { q: string; a: string }[];
  miniExercises: { problem: string; hint: string; solution: string }[];
  mcqs: PythonMCQ[];
}

export interface TopicProgress {
  topicId: number;
  theoryCompleted: boolean;
  completedExamples: number[];
  completedExercises: number[];
  mcqScore: {
    correct: number;
    total: number;
  };
  overallPercentage: number;
}

export type ThemeMode = "dark" | "light" | "system";
