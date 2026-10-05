"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  Timer,
  Terminal,
  Code2,
  CheckCircle2,
  Play,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_LIST } from "@/types";

const MOCK_TRACKS = [
  {
    id: "tcs-nqt",
    title: "TCS NQT Full Placement Mock",
    company: "TCS NQT",
    duration: "45 Mins",
    pseudoCount: 15,
    codingCount: 2,
    difficulty: "Medium",
    desc: "Simulates actual TCS NQT Foundation and Advanced sections with negative marking considerations.",
  },
  {
    id: "infosys-dse",
    title: "Infosys DSE / SP Coding Sprint",
    company: "Infosys",
    duration: "60 Mins",
    pseudoCount: 10,
    codingCount: 3,
    difficulty: "Hard",
    desc: "Focuses on complex dynamic programming, trees, and logic tracing under time constraints.",
  },
  {
    id: "wipro-elite",
    title: "Wipro Elite NLTH Speed Test",
    company: "Wipro",
    duration: "30 Mins",
    pseudoCount: 20,
    codingCount: 1,
    difficulty: "Easy",
    desc: "Rapid mathematical and bitwise pseudocode evaluation followed by string coding challenge.",
  },
  {
    id: "accenture-tech",
    title: "Accenture Cognitive & Technical Test",
    company: "Accenture",
    duration: "40 Mins",
    pseudoCount: 12,
    codingCount: 2,
    difficulty: "Medium",
    desc: "Assesses data interpretation, array prefix logic, and two-pointer coding techniques.",
  },
  {
    id: "faang-algo",
    title: "Product Engineer Algorithmic Challenge",
    company: "Amazon",
    duration: "75 Mins",
    pseudoCount: 5,
    codingCount: 3,
    difficulty: "Hard",
    desc: "LeetCode medium-to-hard problems: sliding windows, graphs, heaps, and monotonic stacks.",
  },
];

export default function MockTestsPage() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-borderSubtle pb-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primaryAccent/20 text-secondaryAccent flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Company-Specific Placement Mock Tests
          </h1>
        </div>
        <p className="text-xs text-textMuted max-w-2xl">
          Simulate real campus assessment test drives with timed environments, mixed pseudocode output predictions, and hands-on Python coding problems.
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TRACKS.map((track) => (
          <div
            key={track.id}
            className="p-6 rounded-3xl bg-cardBg border border-borderSubtle hover:border-borderHighlight transition-all shadow-card flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-primaryAccent/20 text-secondaryAccent border border-primaryAccent/30 font-mono">
                  {track.company}
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                  <Timer className="w-3.5 h-3.5 text-secondaryAccent" />
                  {track.duration}
                </span>
              </div>

              <h3 className="text-base font-bold text-white tracking-tight">
                {track.title}
              </h3>

              <p className="text-xs text-textMuted leading-relaxed">{track.desc}</p>

              <div className="p-3 rounded-xl bg-surfaceBg/60 border border-borderSubtle grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-textMuted block text-[10px]">Pseudocode:</span>
                  <span className="font-bold text-secondaryAccent">
                    {track.pseudoCount} Questions
                  </span>
                </div>
                <div>
                  <span className="text-textMuted block text-[10px]">Python Coding:</span>
                  <span className="font-bold text-emerald-400">
                    {track.codingCount} Problems
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-borderSubtle">
              <Link
                href={`/practice?company=${encodeURIComponent(track.company)}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primaryAccent to-secondaryAccent hover:opacity-90 text-white text-xs font-bold shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Mock Assessment</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
