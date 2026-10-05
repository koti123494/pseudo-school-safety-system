import React from "react";
import Link from "next/link";
import { Code2, ShieldCheck, Sparkles, Terminal, BookOpen, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-borderSubtle bg-secondaryBg py-10 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primaryAccent/20 flex items-center justify-center text-secondaryAccent">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-textMain tracking-tight">
              PseudoCode Mastery <span className="text-secondaryAccent font-mono text-xs">— Python Edition</span>
            </span>
          </div>
          <p className="text-xs text-textMuted max-w-md font-medium">
            Learn Python. Practice Logic. Crack Interviews.
          </p>
          <div className="text-[11px] text-textMuted/70 font-mono">
            2,000+ Coding Problems • 55 Book Chapters • 16 Recruiters • Zero Login • Auto-Saved Locally
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-textMuted">
          <Link href="/book" className="hover:text-textMain transition-colors">
            Python Book
          </Link>
          <span>•</span>
          <Link href="/coding" className="hover:text-textMain transition-colors">
            2,000+ Coding
          </Link>
          <span>•</span>
          <Link href="/playground" className="hover:text-textMain transition-colors">
            Playground
          </Link>
          <span>•</span>
          <Link href="/quizzes" className="hover:text-textMain transition-colors">
            MCQs Quizzes
          </Link>
          <span>•</span>
          <Link href="/companies" className="hover:text-textMain transition-colors">
            Companies
          </Link>
          <span>•</span>
          <Link href="/mock-tests" className="hover:text-textMain transition-colors">
            Mock Tests
          </Link>
          <span>•</span>
          <Link href="/practice" className="hover:text-textMain transition-colors">
            Pseudocode
          </Link>
          <span>•</span>
          <Link href="/progress" className="hover:text-textMain transition-colors">
            Progress
          </Link>
        </div>

        <div className="flex items-center gap-2 text-xs text-textMuted border border-borderSubtle px-3 py-1.5 rounded-full bg-primaryBg/60">
          <ShieldCheck className="w-4 h-4 text-success" />
          <span>Verified Placement Patterns</span>
        </div>
      </div>
    </footer>
  );
}
