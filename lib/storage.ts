import {
  UserProgress,
  QuestionAnswerRecord,
  CodingSubmission,
  TopicProgress,
  ThemeMode,
} from "@/types";

const ATTEMPTED_KEY = "pseudoMastery_attempted";
const ANSWERS_KEY = "pseudoMastery_answers";
const PROGRESS_KEY = "pseudoMastery_progress";
const STREAK_KEY = "pseudoMastery_streak";
const BOOKMARKS_KEY = "pseudoMastery_bookmarks";
const CYCLE_KEY = "pseudoMastery_cycle";
const CODING_SOLVED_KEY = "pseudoMastery_coding_solved";
const CODING_BOOKMARKS_KEY = "pseudoMastery_coding_bookmarks";
const CODING_SUBMISSIONS_KEY = "pseudoMastery_coding_submissions";
const BOOK_PROGRESS_KEY = "pseudoMastery_book_progress";
const THEME_KEY = "pseudoMastery_theme";
const LAST_ACTIVITY_KEY = "pseudoMastery_last_activity";
const ACTIVITY_HISTORY_KEY = "pseudoMastery_activity_history";

const isBrowser = typeof window !== "undefined";

function safeGetJSON<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback;
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch (err) {
    console.error(`Failed to read ${key} from localStorage`, err);
    return fallback;
  }
}

function safeSetJSON<T>(key: string, value: T): void {
  if (!isBrowser) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to write ${key} to localStorage`, err);
  }
}

// Pseudocode Attempted & Answers
export function getAttemptedIds(): string[] {
  return safeGetJSON<string[]>(ATTEMPTED_KEY, []);
}

export function saveAttemptedId(id: string): void {
  const attempted = getAttemptedIds();
  if (!attempted.includes(id)) {
    attempted.push(id);
    safeSetJSON(ATTEMPTED_KEY, attempted);
  }
  recordActivity();
}

export function getAnswers(): Record<string, QuestionAnswerRecord> {
  return safeGetJSON<Record<string, QuestionAnswerRecord>>(ANSWERS_KEY, {});
}

export function recordAnswer(record: QuestionAnswerRecord): void {
  const answers = getAnswers();
  answers[record.questionId] = record;
  safeSetJSON(ANSWERS_KEY, answers);
  saveAttemptedId(record.questionId);
  updateStreak(record.isCorrect);
  incrementCycleCounter();
  recordActivity();
}

// Pseudocode Bookmarks
export function getBookmarks(): string[] {
  return safeGetJSON<string[]>(BOOKMARKS_KEY, []);
}

export function toggleBookmark(questionId: string): boolean {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(questionId);
  let isBookmarked = false;
  if (index >= 0) {
    bookmarks.splice(index, 1);
    isBookmarked = false;
  } else {
    bookmarks.push(questionId);
    isBookmarked = true;
  }
  safeSetJSON(BOOKMARKS_KEY, bookmarks);
  return isBookmarked;
}

export function isBookmarked(questionId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.includes(questionId);
}

// Streak
export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastDate: string; // YYYY-MM-DD
}

export function getStreakData(): StreakData {
  return safeGetJSON<StreakData>(STREAK_KEY, {
    currentStreak: 0,
    longestStreak: 0,
    lastDate: "",
  });
}

export function updateStreak(isCorrect: boolean): StreakData {
  const streak = getStreakData();
  const today = new Date().toISOString().split("T")[0];

  if (isCorrect) {
    if (streak.lastDate === today) {
      streak.currentStreak += 1;
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (streak.lastDate === yesterday) {
        streak.currentStreak += 1;
      } else {
        streak.currentStreak = 1;
      }
      streak.lastDate = today;
    }
    if (streak.currentStreak > streak.longestStreak) {
      streak.longestStreak = streak.currentStreak;
    }
  } else {
    streak.currentStreak = 0;
  }

  safeSetJSON(STREAK_KEY, streak);
  return streak;
}

// Cycle System
export interface CycleData {
  cycleNumber: number;
  completedCycles: number;
  questionsInCurrentCycle: number;
}

export function getCycleData(): CycleData {
  return safeGetJSON<CycleData>(CYCLE_KEY, {
    cycleNumber: 1,
    completedCycles: 0,
    questionsInCurrentCycle: 0,
  });
}

export function incrementCycleCounter(): CycleData {
  const data = getCycleData();
  data.questionsInCurrentCycle += 1;
  safeSetJSON(CYCLE_KEY, data);
  return data;
}

export function resetCycle(): void {
  const data = getCycleData();
  data.cycleNumber += 1;
  data.completedCycles += 1;
  data.questionsInCurrentCycle = 0;
  safeSetJSON(CYCLE_KEY, data);
  safeSetJSON(ATTEMPTED_KEY, []);
}

// Coding Problems Solved
export function getCodingSolvedIds(): string[] {
  return safeGetJSON<string[]>(CODING_SOLVED_KEY, []);
}

export function markCodingSolved(problemId: string): void {
  const solved = getCodingSolvedIds();
  if (!solved.includes(problemId)) {
    solved.push(problemId);
    safeSetJSON(CODING_SOLVED_KEY, solved);
  }
  recordActivity();
}

// Coding Bookmarks
export function getCodingBookmarks(): string[] {
  return safeGetJSON<string[]>(CODING_BOOKMARKS_KEY, []);
}

export function toggleCodingBookmark(problemId: string): boolean {
  const bookmarks = getCodingBookmarks();
  const index = bookmarks.indexOf(problemId);
  let isBookmarked = false;
  if (index >= 0) {
    bookmarks.splice(index, 1);
    isBookmarked = false;
  } else {
    bookmarks.push(problemId);
    isBookmarked = true;
  }
  safeSetJSON(CODING_BOOKMARKS_KEY, bookmarks);
  return isBookmarked;
}

export function isCodingBookmarked(problemId: string): boolean {
  const bookmarks = getCodingBookmarks();
  return bookmarks.includes(problemId);
}

// Coding Submissions
export function getCodingSubmissions(): Record<string, CodingSubmission> {
  return safeGetJSON<Record<string, CodingSubmission>>(CODING_SUBMISSIONS_KEY, {});
}

export function saveCodingSubmission(submission: CodingSubmission): void {
  const subs = getCodingSubmissions();
  subs[submission.problemId] = submission;
  safeSetJSON(CODING_SUBMISSIONS_KEY, subs);
  if (submission.passed) {
    markCodingSolved(submission.problemId);
  }
  recordActivity();
}

// Python Book Progress (Topic Completion 0 to 100%)
export function getAllBookProgress(): Record<string, TopicProgress> {
  return safeGetJSON<Record<string, TopicProgress>>(BOOK_PROGRESS_KEY, {});
}

export function getTopicProgress(topicId: number): TopicProgress {
  const all = getAllBookProgress();
  return (
    all[String(topicId)] || {
      topicId,
      theoryCompleted: false,
      completedExamples: [],
      completedExercises: [],
      mcqScore: { correct: 0, total: 0 },
      overallPercentage: 0,
    }
  );
}

export function saveTopicProgress(topicId: number, progress: Partial<TopicProgress>): TopicProgress {
  const all = getAllBookProgress();
  const current = getTopicProgress(topicId);
  const updated: TopicProgress = {
    ...current,
    ...progress,
  };

  // Recalculate dynamic percentage
  // Theory: 25%, Examples: 25%, Exercises: 25%, MCQs: 25%
  let score = 0;
  if (updated.theoryCompleted) score += 25;
  if (updated.completedExamples.length > 0) {
    score += Math.min(25, Math.round((updated.completedExamples.length / 5) * 25));
  }
  if (updated.completedExercises.length > 0) {
    score += Math.min(25, Math.round((updated.completedExercises.length / 2) * 25));
  }
  if (updated.mcqScore.total > 0) {
    score += Math.round((updated.mcqScore.correct / updated.mcqScore.total) * 25);
  }
  updated.overallPercentage = Math.min(100, Math.max(0, score));

  all[String(topicId)] = updated;
  safeSetJSON(BOOK_PROGRESS_KEY, all);
  recordActivity();
  return updated;
}

// Activity & Heatmap
export function getActivityHeatmap(): Record<string, number> {
  return safeGetJSON<Record<string, number>>(ACTIVITY_HISTORY_KEY, {});
}

export function recordActivity(): void {
  const history = getActivityHeatmap();
  const today = new Date().toISOString().split("T")[0];
  history[today] = (history[today] || 0) + 1;
  safeSetJSON(ACTIVITY_HISTORY_KEY, history);
}

// Last Activity Tracking
export interface LastActivity {
  lastTopicId?: number;
  lastTopicTitle?: string;
  lastCodingProblemId?: string;
  lastCodingProblemTitle?: string;
  timestamp: number;
}

export function getLastActivity(): LastActivity | null {
  return safeGetJSON<LastActivity | null>(LAST_ACTIVITY_KEY, null);
}

export function setLastActivity(activity: Partial<LastActivity>): void {
  const current = getLastActivity() || { timestamp: Date.now() };
  safeSetJSON(LAST_ACTIVITY_KEY, { ...current, ...activity, timestamp: Date.now() });
}

// Theme Mode Storage
export function getThemeMode(): ThemeMode {
  return safeGetJSON<ThemeMode>(THEME_KEY, "dark");
}

export function setThemeMode(mode: ThemeMode): void {
  safeSetJSON(THEME_KEY, mode);
  if (isBrowser) {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (mode === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      // system
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }
    }
    window.dispatchEvent(new CustomEvent("theme-change", { detail: mode }));
  }
}

// Full Reset
export function resetAllProgress(): void {
  if (!isBrowser) return;
  localStorage.removeItem(ATTEMPTED_KEY);
  localStorage.removeItem(ANSWERS_KEY);
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(STREAK_KEY);
  localStorage.removeItem(BOOKMARKS_KEY);
  localStorage.removeItem(CYCLE_KEY);
  localStorage.removeItem(CODING_SOLVED_KEY);
  localStorage.removeItem(CODING_BOOKMARKS_KEY);
  localStorage.removeItem(CODING_SUBMISSIONS_KEY);
  localStorage.removeItem(BOOK_PROGRESS_KEY);
  localStorage.removeItem(ACTIVITY_HISTORY_KEY);
  localStorage.removeItem(LAST_ACTIVITY_KEY);
}
