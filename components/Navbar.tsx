"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Code2,
  Flame,
  Target,
  BarChart3,
  Search,
  Menu,
  X,
  Sparkles,
  Terminal,
  Building2,
  BookOpen,
  Layers,
} from "lucide-react";
import { getAttemptedIds, getAnswers, getStreakData, getCodingSolvedIds } from "@/lib/storage";
import { totalQuestionsCount } from "@/lib/questionsData";
import { allCodingProblems } from "@/lib/codingProblemsData";
import ThemeToggle from "@/components/ThemeToggle";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export default function Navbar({ onToggleSidebar }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [streak, setStreak] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [attemptedCount, setAttemptedCount] = useState(0);
  const [codingSolvedCount, setCodingSolvedCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const refreshStats = () => {
    const attempted = getAttemptedIds();
    const answers = getAnswers();
    const streakInfo = getStreakData();
    const codingSolved = getCodingSolvedIds();
    const ansList = Object.values(answers);

    setAttemptedCount(attempted.length);
    setCodingSolvedCount(codingSolved.length);
    setStreak(streakInfo.currentStreak);

    if (ansList.length > 0) {
      const correct = ansList.filter((a) => a.isCorrect).length;
      setAccuracy(Math.round((correct / ansList.length) * 100));
    } else {
      setAccuracy(0);
    }
  };

  useEffect(() => {
    refreshStats();
    window.addEventListener("storage", refreshStats);
    const interval = setInterval(refreshStats, 2000);
    return () => {
      window.removeEventListener("storage", refreshStats);
      clearInterval(interval);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/coding?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Python Book", href: "/book" },
    { label: "Coding (2,000+)", href: "/coding" },
    { label: "Playground", href: "/playground" },
    { label: "Quizzes", href: "/quizzes" },
    { label: "Companies", href: "/companies" },
    { label: "Pseudocode", href: "/practice" },
    { label: "Progress", href: "/progress" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-borderSubtle bg-secondaryBg/80 backdrop-blur-md transition-colors duration-200">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle + Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="p-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-surfaceBg transition-colors"
              title="Toggle Sidebar"
              aria-label="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-glow transition-transform group-hover:scale-105">
              K
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-textMain group-hover:text-secondaryAccent transition-colors">
                  KOTI&apos;S ACADEMY
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-[10px] text-textMuted font-mono">
                <span className="px-1 py-0.2 bg-surfaceBg rounded border border-borderSubtle text-secondaryAccent font-semibold">
                  Python Edition
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Global Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-xs xl:max-w-sm relative items-center"
        >
          <Search className="w-4 h-4 text-textMuted absolute left-3 pointer-events-none" />
          <input
            id="nav-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 2,000+ problems, book..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-surfaceBg border border-borderSubtle text-textMain placeholder:text-textMuted/60 focus:outline-none focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent/40 transition-all"
          />
        </form>

        {/* Center-Right: Navigation Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-surfaceBg text-textMain font-bold border border-borderHighlight shadow-sm"
                    : "text-textMuted hover:text-textMain hover:bg-surfaceBg/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Live Stats & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Coding Solved Count */}
          <Link
            href="/coding"
            title="Coding Problems Solved"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{codingSolvedCount}</span>
          </Link>

          {/* Streak */}
          <div
            title="Current Consecutive Correct Streak"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surfaceBg border border-borderSubtle text-xs font-medium text-warning shadow-sm"
          >
            <Flame className={`w-3.5 h-3.5 text-warning ${streak > 0 ? "animate-pulse" : ""}`} />
            <span>{streak}</span>
          </div>

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-surfaceBg xl:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-borderSubtle bg-secondaryBg px-4 pt-3 pb-5 space-y-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-textMuted absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 2,000+ problems, book..."
              className="w-full pl-9 pr-4 py-2 rounded-lg text-sm bg-surfaceBg border border-borderSubtle text-textMain focus:outline-none focus:border-primaryAccent"
            />
          </form>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  pathname === link.href
                    ? "bg-primaryAccent text-white font-bold"
                    : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-borderSubtle flex items-center justify-between text-xs text-textMuted">
            <span>Accuracy: {accuracy}%</span>
            <span>Streak: {streak} 🔥</span>
            <span>Coding Solved: {codingSolvedCount}</span>
          </div>
        </div>
      )}
    </header>
  );
}
