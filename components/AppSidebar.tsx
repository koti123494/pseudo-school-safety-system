"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Home,
  BarChart3,
  BookOpen,
  Code2,
  Terminal,
  HelpCircle,
  Building2,
  Award,
  Layers,
  Flame,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Bookmark,
} from "lucide-react";
import { CODING_TOPICS } from "@/types";
import ThemeToggle from "./ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  isDesktopCollapsed?: boolean;
}

function SidebarInner({ isOpen, onClose, onToggle, isDesktopCollapsed }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeTopic = searchParams ? searchParams.get("topic") : null;

  const [codingTopicsOpen, setCodingTopicsOpen] = useState(false);

  const isActive = (href: string, topic?: string) => {
    if (topic) {
      return pathname === "/coding" && activeTopic?.toLowerCase() === topic.toLowerCase();
    }
    return pathname === href;
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Docked Sidebar (Fixed height, independent scroll, never overlaps content) */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-[280px] bg-secondaryBg border-r border-borderSubtle flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isDesktopCollapsed ? "lg:-translate-x-full" : "lg:translate-x-0"}`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-borderSubtle bg-secondaryBg shrink-0">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-glow">
              K
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-sm text-textMain tracking-tight">KOTI&apos;S ACADEMY</span>
              </div>
              <div className="text-[10px] text-textMuted font-mono">Python Edition</div>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-textMuted hover:text-textMain lg:hidden"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Sections */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-5 text-xs">
          {/* Section: HOME */}
          <div className="space-y-1">
            <div className="px-2.5 text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
              Platform Home
            </div>
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <Home className="w-4 h-4 shrink-0" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/progress"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/progress")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              <span>My Progress & Heatmap</span>
            </Link>
          </div>

          {/* Section: LEARN PYTHON */}
          <div className="space-y-1">
            <div className="px-2.5 text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
              Learn Python
            </div>
            <Link
              href="/book"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/book")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Python Book</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surfaceBg border border-borderSubtle text-secondaryAccent">
                55 Ch
              </span>
            </Link>
            <Link
              href="/playground"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/playground")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <Terminal className="w-4 h-4 shrink-0" />
              <span>Examples Playground</span>
            </Link>
            <Link
              href="/quizzes"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/quizzes")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <HelpCircle className="w-4 h-4 shrink-0" />
              <span>Interactive Quizzes (MCQs)</span>
            </Link>
          </div>

          {/* Section: CODING PRACTICE (2000+ Questions) */}
          <div className="space-y-1">
            <div className="px-2.5 text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1 flex items-center justify-between">
              <span>Coding Practice</span>
              <button
                onClick={() => setCodingTopicsOpen(!codingTopicsOpen)}
                className="text-secondaryAccent hover:underline lowercase text-[10px]"
              >
                {codingTopicsOpen ? "collapse" : "view 20 topics"}
              </button>
            </div>
            <Link
              href="/coding"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium ${
                pathname === "/coding" && !activeTopic
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>All Problems</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surfaceBg border border-borderSubtle text-secondaryAccent font-bold">
                2,100
              </span>
            </Link>

            {/* Expandable 20 Topics */}
            {codingTopicsOpen && (
              <div className="pl-3.5 space-y-0.5 border-l border-borderSubtle ml-3 pt-1">
                {CODING_TOPICS.map((topic) => (
                  <Link
                    key={topic}
                    href={`/coding?topic=${encodeURIComponent(topic)}`}
                    onClick={onClose}
                    className={`block px-2.5 py-1 rounded-lg text-[11px] transition-colors truncate ${
                      isActive("/coding", topic)
                        ? "text-secondaryAccent font-bold bg-primaryAccent/20"
                        : "text-textMuted hover:text-textMain"
                    }`}
                  >
                    • {topic}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Section: INTERVIEW PREPARATION */}
          <div className="space-y-1">
            <div className="px-2.5 text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
              Interview Tracks
            </div>
            <Link
              href="/companies"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/companies")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>16 Company Hubs</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surfaceBg border border-borderSubtle text-secondaryAccent">
                16
              </span>
            </Link>
            <Link
              href="/mock-tests"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/mock-tests")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Placement Mock Tests</span>
            </Link>
            <Link
              href="/coding?difficulty=Medium"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                pathname === "/coding" && searchParams?.get("difficulty") === "Medium"
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <Zap className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Daily Challenge</span>
            </Link>
          </div>

          {/* Section: EXISTING PSEUDOCODE FEATURES */}
          <div className="space-y-1">
            <div className="px-2.5 text-[10px] uppercase font-bold text-textMuted tracking-wider mb-1">
              Pseudocode Modules
            </div>
            <Link
              href="/practice"
              onClick={onClose}
              className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/practice")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 shrink-0 text-secondaryAccent" />
                <span>Pseudocode Practice</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-surfaceBg border border-borderSubtle text-secondaryAccent font-bold">
                1,170
              </span>
            </Link>
            <Link
              href="/topics"
              onClick={onClose}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all font-medium ${
                isActive("/topics")
                  ? "bg-primaryAccent text-white shadow-glow font-bold"
                  : "text-textMuted hover:text-textMain hover:bg-surfaceBg"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span>Pseudocode Topics</span>
            </Link>
          </div>
        </div>

        {/* Sidebar Footer with Theme Toggle */}
        <div className="p-3.5 border-t border-borderSubtle bg-secondaryBg shrink-0 flex items-center justify-between">
          <div className="text-[11px] font-mono text-textMuted">Theme</div>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}

export default function AppSidebar(props: SidebarProps) {
  return (
    <Suspense fallback={null}>
      <SidebarInner {...props} />
    </Suspense>
  );
}
