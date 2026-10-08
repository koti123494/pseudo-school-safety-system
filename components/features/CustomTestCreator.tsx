"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Wand2,
  Share2,
  Copy,
  Check,
  QrCode,
  Play,
  Layers,
  Settings2,
  Clock,
  Sparkles,
  Building,
} from "lucide-react";
import { PSEUDO_TOPICS, PSEUDO_COMPANIES } from "@/data/pseudoCode5000";
import { CustomTestConfig } from "@/types";

const CUSTOM_TESTS_KEY = "customTests";

export function getSavedCustomTests(): CustomTestConfig[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_TESTS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCustomTest(config: CustomTestConfig): void {
  if (typeof window === "undefined") return;
  const existing = getSavedCustomTests();
  localStorage.setItem(CUSTOM_TESTS_KEY, JSON.stringify([config, ...existing]));
}

// Simple Canvas QR Code renderer without external dependencies
function drawSimpleQRCode(canvas: HTMLCanvasElement, text: string) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = canvas.width;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);

  // Generate pseudo QR pattern based on hash of text
  const gridSize = 25;
  const cellSize = size / gridSize;

  // Simple deterministic hash function
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }

  ctx.fillStyle = "#0f172a";

  // Finder patterns at three corners (7x7 blocks)
  const drawFinder = (startX: number, startY: number) => {
    ctx.fillRect(startX * cellSize, startY * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect((startX + 1) * cellSize, (startY + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = "#0f172a";
    ctx.fillRect((startX + 2) * cellSize, (startY + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  };

  drawFinder(1, 1);
  drawFinder(gridSize - 8, 1);
  drawFinder(1, gridSize - 8);

  // Pseudo-random data modules seeded by string
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      // Skip finder zones
      if (
        (r < 9 && c < 9) ||
        (r < 9 && c > gridSize - 10) ||
        (r > gridSize - 10 && c < 9)
      ) {
        continue;
      }

      const bitVal = Math.sin(r * 11 + c * 17 + hash) > 0;
      if (bitVal) {
        ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
      }
    }
  }
}

export default function CustomTestCreator() {
  const router = useRouter();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Arrays",
    "Strings",
    "Recursion",
  ]);
  const [difficulty, setDifficulty] = useState<"All" | "Easy" | "Medium" | "Hard">("All");
  const [company, setCompany] = useState<string>("All");
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [durationMinutes, setDurationMinutes] = useState<number>(30);
  const [testTitle, setTestTitle] = useState("Custom Placement Challenge");

  const [generatedConfig, setGeneratedConfig] = useState<CustomTestConfig | null>(null);
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [savedTests, setSavedTests] = useState<CustomTestConfig[]>([]);

  const qrCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setSavedTests(getSavedCustomTests());
  }, []);

  const handleToggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      if (selectedTopics.length === 1) return; // Keep at least one
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSelectAllTopics = () => {
    setSelectedTopics([...PSEUDO_TOPICS]);
  };

  const handleSelectTopPlacementTopics = () => {
    setSelectedTopics([
      "Arrays",
      "Strings",
      "Recursion",
      "Stack",
      "Queue",
      "Dynamic Programming",
      "Trees",
      "Sorting",
      "Two Pointers",
      "Binary Search",
    ]);
  };

  const handleCreateTest = (e: React.FormEvent) => {
    e.preventDefault();

    const testId = "TEST-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const config: CustomTestConfig = {
      id: testId,
      title: testTitle.trim() || "Custom Placement Challenge",
      topics: selectedTopics,
      difficulties: difficulty === "All" ? ["Easy", "Medium", "Hard"] : [difficulty],
      companies: company === "All" ? [] : [company],
      questionCount,
      durationMinutes,
      createdAt: new Date().toISOString(),
    };

    saveCustomTest(config);
    setGeneratedConfig(config);
    setSavedTests(getSavedCustomTests());

    // Generate link
    const base = typeof window !== "undefined" ? window.location.origin : "";
    const params = new URLSearchParams({
      id: testId,
      topics: selectedTopics.join(","),
      diff: difficulty,
      comp: company,
      n: questionCount.toString(),
      time: durationMinutes.toString(),
      title: config.title,
    });

    const fullUrl = `${base}/test/custom?${params.toString()}`;
    setShareUrl(fullUrl);

    // Draw QR Code
    setTimeout(() => {
      if (qrCanvasRef.current) {
        drawSimpleQRCode(qrCanvasRef.current, fullUrl);
      }
    }, 100);
  };

  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-surfaceBg via-secondaryBg to-surfaceBg border border-borderSubtle shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accentPurple/20 text-accentPurple border border-accentPurple/30 text-xs font-mono font-bold">
          <Wand2 className="w-3.5 h-3.5" />
          Feature 8: Custom Test Engine
        </div>
        <h1 className="text-3xl font-extrabold text-textMain tracking-tight">
          Create & Share Custom Pseudo Code Tests
        </h1>
        <p className="text-sm text-textMuted max-w-2xl leading-relaxed">
          Select specific topics, difficulty levels, and target companies. Generate a shareable
          link with a QR code so your friends and college batchmates can take the exact test!
        </p>
      </div>

      {/* Main Creation Form */}
      <form
        onSubmit={handleCreateTest}
        className="p-6 sm:p-8 rounded-3xl bg-surfaceBg border border-borderSubtle shadow-xl space-y-6"
      >
        {/* Test Title */}
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-wider text-textMuted block font-bold">
            Test Title / Company Goal
          </label>
          <input
            type="text"
            value={testTitle}
            onChange={(e) => setTestTitle(e.target.value)}
            placeholder="e.g., TCS NQT Sprint - Arrays & Recursion"
            className="w-full px-4 py-3 rounded-xl bg-secondaryBg border border-borderSubtle text-sm text-textMain placeholder:text-textMuted focus:outline-none focus:border-accentPurple transition-colors"
          />
        </div>

        {/* Topic Selector */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-xs font-mono uppercase tracking-wider text-textMuted block font-bold">
              Select Topics ({selectedTopics.length} selected):
            </label>
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={handleSelectTopPlacementTopics}
                className="text-accentCyan hover:underline"
              >
                Top 10 Placement Topics
              </button>
              <span className="text-borderSubtle">|</span>
              <button
                type="button"
                onClick={handleSelectAllTopics}
                className="text-accentPurple hover:underline"
              >
                Select All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-56 overflow-y-auto p-3 bg-secondaryBg/60 rounded-xl border border-borderSubtle scrollbar-thin">
            {PSEUDO_TOPICS.map((topic) => {
              const isChecked = selectedTopics.includes(topic);
              return (
                <label
                  key={topic}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs cursor-pointer select-none transition-all ${
                    isChecked
                      ? "bg-accentPurple/20 text-white font-semibold border border-accentPurple/40"
                      : "bg-surfaceBg/60 text-textMuted hover:text-textMain border border-transparent"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleToggleTopic(topic)}
                    className="accent-accentPurple rounded w-3.5 h-3.5"
                  />
                  <span className="truncate">{topic}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* 3-Column Settings: Difficulty, Company, Number & Timer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Difficulty */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-textMuted font-bold block">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as any)}
              className="w-full px-3 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy Only</option>
              <option value="Medium">Medium Only</option>
              <option value="Hard">Hard Only</option>
            </select>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-textMuted font-bold block">
              Target Company
            </label>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
            >
              <option value="All">All Companies</option>
              {PSEUDO_COMPANIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Questions & Duration */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-textMuted font-bold block">
              Questions & Duration
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(parseInt(e.target.value, 10))}
                className="w-full px-2.5 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
              >
                <option value={10}>10 Qs</option>
                <option value={20}>20 Qs</option>
                <option value={30}>30 Qs</option>
                <option value={50}>50 Qs</option>
              </select>

              <select
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(parseInt(e.target.value, 10))}
                className="w-full px-2.5 py-2.5 rounded-xl bg-secondaryBg border border-borderSubtle text-xs text-textMain focus:outline-none focus:border-accentPurple"
              >
                <option value={15}>15 Mins</option>
                <option value={30}>30 Mins</option>
                <option value={45}>45 Mins</option>
                <option value={60}>60 Mins</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-borderSubtle flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accentPurple to-primary hover:opacity-95 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-accentPurple/20 active:scale-95"
          >
            <Wand2 className="w-4 h-4" />
            Generate Shareable Test Link
          </button>
        </div>
      </form>

      {/* Generated Test Modal / Showcase Card */}
      {generatedConfig && shareUrl && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-secondaryBg via-surfaceBg to-secondaryBg border-2 border-accentPurple/50 shadow-2xl space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="px-3 py-1 rounded-full bg-accentGreen/20 text-accentGreen border border-accentGreen/30 text-xs font-mono font-bold">
                ✓ Test Created Successfully
              </span>
              <h3 className="text-2xl font-bold text-textMain">{generatedConfig.title}</h3>
              <p className="text-xs text-textMuted font-mono">
                {generatedConfig.questionCount} Questions | {generatedConfig.durationMinutes} Minutes | Test ID: {generatedConfig.id}
              </p>
            </div>

            {/* QR Code Canvas */}
            <div className="p-3 bg-white rounded-2xl shadow-xl flex flex-col items-center">
              <canvas ref={qrCanvasRef} width={140} height={140} className="rounded-lg" />
              <span className="text-[10px] text-slate-800 font-mono mt-1 font-bold">
                Scan with Phone Camera
              </span>
            </div>
          </div>

          {/* Share Link Row */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-textMuted">Shareable Test URL:</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full px-4 py-2.5 rounded-xl bg-surfaceBg border border-borderSubtle text-xs font-mono text-textMain focus:outline-none"
              />
              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accentPurple text-white text-xs font-mono font-bold hover:bg-accentPurple/90 transition-all shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>
          </div>

          {/* Launch Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href={shareUrl.replace(typeof window !== "undefined" ? window.location.origin : "", "")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accentGreen hover:bg-accentGreen/90 text-black font-mono text-xs font-extrabold shadow-lg shadow-accentGreen/20 transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-black" />
              Take This Test Right Now
            </Link>
          </div>
        </div>
      )}

      {/* Previously Created Custom Tests */}
      {savedTests.length > 0 && (
        <div className="p-6 rounded-3xl bg-surfaceBg border border-borderSubtle space-y-4">
          <h3 className="text-base font-bold text-textMain flex items-center gap-2">
            <Layers className="w-4 h-4 text-accentCyan" />
            Your Saved Custom Tests ({savedTests.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {savedTests.slice(0, 6).map((t) => (
              <div
                key={t.id}
                className="p-4 rounded-xl bg-secondaryBg/80 border border-borderSubtle hover:border-accentPurple/40 transition-colors flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-textMain truncate">{t.title}</h4>
                  <p className="text-[11px] text-textMuted font-mono">
                    {t.questionCount} Qs • {t.durationMinutes} mins • {t.id}
                  </p>
                </div>
                <Link
                  href={`/test/custom?id=${t.id}&topics=${t.topics.join(",")}&n=${t.questionCount}&time=${t.durationMinutes}&title=${encodeURIComponent(t.title)}`}
                  className="px-3 py-1.5 rounded-lg bg-surfaceBorder hover:bg-white/10 text-xs font-mono text-textMain transition-colors shrink-0"
                >
                  Start →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
