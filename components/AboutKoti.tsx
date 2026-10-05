import React from "react";
import Link from "next/link";
import { GraduationCap, Play, BookOpen } from "lucide-react";

export default function AboutKoti() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-blue-900/70 border border-blue-500/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Founder Avatar with subtle glowing frame */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-secondaryAccent/60 shadow-lg shadow-blue-500/20 bg-cardBg">
              <img
                src="/founder_candidate1.jpg"
                alt="Koti - Founder of Koti&apos;s Python Academy"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-md border border-white/20">
              Founder
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-secondaryAccent text-xs font-mono font-bold tracking-wide uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>About Your Instructor</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-textMain tracking-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Koti</span> — Founder of Koti&apos;s Python Academy
            </h2>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-3xl">
              Hi, I&apos;m Koti - Founder of Koti&apos;s Python Academy. I teach Python in simple Telugu + English with hands-on coding playground.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-blue-900/40 border border-blue-400/20 text-xs font-medium text-cyan-200">
                🗣️ Simple Telugu + English
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-900/40 border border-blue-400/20 text-xs font-medium text-cyan-200">
                🐍 2,000+ Coding Problems
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-900/40 border border-blue-400/20 text-xs font-medium text-cyan-200">
                ⚡ Hands-On Coding Playground
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/playground"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open Coding Playground</span>
              </Link>
              <Link
                href="/book"
                className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-secondaryAccent" />
                <span>Read Python Book</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
