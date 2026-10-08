import { LeaderboardUser } from "@/types";

const STREAK_KEY = "streakCount";
const LAST_DATE_KEY = "lastSolvedDate";
const TOTAL_SOLVED_KEY = "totalSolved";
const SOLVED_QUESTIONS_KEY = "solvedQuestions";
const BOOKMARKS_KEY = "bookmarks";
const NOTES_KEY = "notes";
const WRONG_ANSWERS_KEY = "wrongAnswers";
const MOCK_HISTORY_KEY = "mockTestHistory";
const CERTIFICATES_KEY = "certificates";
const TELUGU_PREF_KEY = "pseudo_lang_pref";

export interface StreakStats {
  streakCount: number;
  lastSolvedDate: string;
  totalSolved: number;
}

export function getTodayDateString(): string {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function getStreakStats(): StreakStats {
  if (typeof window === "undefined") {
    return { streakCount: 0, lastSolvedDate: "", totalSolved: 0 };
  }
  const streakCount = parseInt(localStorage.getItem(STREAK_KEY) || "7", 10);
  const lastSolvedDate = localStorage.getItem(LAST_DATE_KEY) || "";
  const totalSolved = parseInt(localStorage.getItem(TOTAL_SOLVED_KEY) || "342", 10);
  return { streakCount, lastSolvedDate, totalSolved };
}

export function recordQuestionAnswer(
  questionId: string,
  isCorrect: boolean
): { streakCount: number; totalSolved: number; isNewSolve: boolean } {
  if (typeof window === "undefined") {
    return { streakCount: 0, totalSolved: 0, isNewSolve: false };
  }

  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  let streak = parseInt(localStorage.getItem(STREAK_KEY) || "7", 10);
  const lastDate = localStorage.getItem(LAST_DATE_KEY) || "";
  let totalSolved = parseInt(localStorage.getItem(TOTAL_SOLVED_KEY) || "342", 10);

  const solvedList: string[] = JSON.parse(
    localStorage.getItem(SOLVED_QUESTIONS_KEY) || "[]"
  );
  const wrongList: string[] = JSON.parse(
    localStorage.getItem(WRONG_ANSWERS_KEY) || "[]"
  );

  let isNewSolve = false;

  if (isCorrect) {
    if (!solvedList.includes(questionId)) {
      solvedList.push(questionId);
      localStorage.setItem(SOLVED_QUESTIONS_KEY, JSON.stringify(solvedList));
      totalSolved += 1;
      localStorage.setItem(TOTAL_SOLVED_KEY, totalSolved.toString());
      isNewSolve = true;
    }

    // Remove from wrong answers if solved correctly now
    const filteredWrong = wrongList.filter((id) => id !== questionId);
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(filteredWrong));

    // Update streak
    if (lastDate === yesterday) {
      streak += 1;
    } else if (lastDate === today) {
      // already practiced today, streak stays current
    } else {
      streak = streak === 0 ? 1 : 1;
    }

    localStorage.setItem(STREAK_KEY, streak.toString());
    localStorage.setItem(LAST_DATE_KEY, today);
  } else {
    if (!wrongList.includes(questionId)) {
      wrongList.push(questionId);
      localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(wrongList));
    }
  }

  // Notify listeners
  window.dispatchEvent(new CustomEvent("streak_updated", {
    detail: { streak, totalSolved, questionId, isCorrect }
  }));

  return { streakCount: streak, totalSolved, isNewSolve };
}

// Bookmarks helpers
export function getBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(BOOKMARKS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleBookmark(questionId: string): boolean {
  if (typeof window === "undefined") return false;
  const current = getBookmarks();
  let updated: string[];
  let isBookmarkedNow: boolean;
  if (current.includes(questionId)) {
    updated = current.filter((id) => id !== questionId);
    isBookmarkedNow = false;
  } else {
    updated = [...current, questionId];
    isBookmarkedNow = true;
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new CustomEvent("bookmarks_updated", { detail: updated }));
  return isBookmarkedNow;
}

export function isBookmarked(questionId: string): boolean {
  return getBookmarks().includes(questionId);
}

// Notes helpers
export function getNotes(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || "{}");
  } catch {
    return {};
  }
}

export function getNoteForQuestion(questionId: string): string {
  const notes = getNotes();
  return notes[questionId] || "";
}

export function saveNoteForQuestion(questionId: string, noteText: string): void {
  if (typeof window === "undefined") return;
  const notes = getNotes();
  if (noteText.trim()) {
    notes[questionId] = noteText.trim();
  } else {
    delete notes[questionId];
  }
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  window.dispatchEvent(new CustomEvent("notes_updated", { detail: { questionId, noteText } }));
}

// Wrong answers helpers (for Revision mode)
export function getWrongAnswers(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || "[]");
  } catch {
    return [];
  }
}

// Solved list
export function getSolvedQuestions(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(SOLVED_QUESTIONS_KEY) || "[]");
  } catch {
    return [];
  }
}

// Language toggle preference
export function getTeluguToggle(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(TELUGU_PREF_KEY) === "te";
}

export function setTeluguToggle(enabled: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TELUGU_PREF_KEY, enabled ? "te" : "en");
  window.dispatchEvent(new CustomEvent("lang_toggled", { detail: enabled }));
}

// Mock Leaderboard Data - Top 10 from Ongole, AP
export const BASE_LEADERBOARD: Omit<LeaderboardUser, "rank" | "isCurrentUser">[] = [
  { name: "Sai Krishna", solved: 4820, streak: 62, location: "Ongole, AP" },
  { name: "Suresh Babu", solved: 4410, streak: 48, location: "Ongole, AP" },
  { name: "Venkat Rao", solved: 3980, streak: 41, location: "Ongole, AP" },
  { name: "Lakshmi Priya", solved: 3420, streak: 35, location: "Ongole, AP" },
  { name: "Bhanu Prasad", solved: 2890, streak: 29, location: "Ongole, AP" },
  { name: "Swetha Devi", solved: 2310, streak: 22, location: "Ongole, AP" },
  { name: "Teja Narayana", solved: 1840, streak: 19, location: "Ongole, AP" },
  { name: "Anusha K.", solved: 1420, streak: 14, location: "Ongole, AP" },
  { name: "Ravi Varma", solved: 1150, streak: 12, location: "Ongole, AP" },
  { name: "Madhu Sudhan", solved: 890, streak: 9, location: "Ongole, AP" },
];

export function getFullLeaderboard(userSolved: number, userStreak: number): LeaderboardUser[] {
  const topList: LeaderboardUser[] = BASE_LEADERBOARD.map((item, idx) => ({
    rank: idx + 1,
    name: item.name,
    solved: item.solved,
    streak: item.streak,
    location: item.location,
  }));

  // Determine user rank dynamically
  let userRank = 15;
  for (let i = 0; i < topList.length; i++) {
    if (userSolved > topList[i].solved) {
      userRank = i + 1;
      break;
    }
  }

  const currentUser: LeaderboardUser = {
    rank: userRank,
    name: "You",
    solved: userSolved,
    streak: userStreak,
    location: "Ongole, AP",
    isCurrentUser: true,
  };

  return [...topList, currentUser];
}
