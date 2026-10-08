"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Award,
  Download,
  Share2,
  CheckCircle2,
  Lock,
  Sparkles,
  Edit2,
  QrCode,
  ShieldCheck,
  Check,
} from "lucide-react";
import { getStreakStats } from "@/lib/streak";
import { UserCertificate } from "@/types";

const MILESTONES = [
  { level: 50, title: "Algorithmic Foundations", badge: "🥉 Bronze", desc: "Basic syntax & control flow" },
  { level: 100, title: "Data Structures Novice", badge: "🥈 Silver", desc: "Arrays, strings & linear search" },
  { level: 250, title: "Placement Problem Solver", badge: "🎖️ Ruby", desc: "Recursion, stack & sorting" },
  { level: 500, title: "Pseudo Code Master", badge: "🥇 Gold Master", desc: "Dynamic programming & trees" },
  { level: 1000, title: "Placement Grandmaster", badge: "💎 Platinum", desc: "Graphs, heaps & advanced logic" },
  { level: 2500, title: "Algorithm Virtuoso", badge: "👑 Diamond", desc: "Mastery over 25+ topics" },
  { level: 5000, title: "Ultimate Pseudocode Legend", badge: "🏆 Legend", desc: "All 50 topics conquered" },
];

const CERTIFICATES_STORAGE_KEY = "certificates";

export default function CertificateViewer() {
  const [userName, setUserName] = useState("Koti Yeturi");
  const [isEditingName, setIsEditingName] = useState(false);
  const [solvedCount, setSolvedCount] = useState(342);
  const [selectedMilestone, setSelectedMilestone] = useState(MILESTONES[3]); // 500 default
  const [verificationCode, setVerificationCode] = useState("VERIFY-PSEUDO-8821");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const s = getStreakStats();
    setSolvedCount(s.totalSolved);

    // Pick highest unlocked milestone or 500
    const unlocked = MILESTONES.filter((m) => s.totalSolved >= m.level);
    if (unlocked.length > 0) {
      setSelectedMilestone(unlocked[unlocked.length - 1]);
    }

    const savedName = localStorage.getItem("certificate_user_name");
    if (savedName) setUserName(savedName);
  }, []);

  const handleNameSave = (newName: string) => {
    setUserName(newName);
    localStorage.setItem("certificate_user_name", newName);
    setIsEditingName(false);
  };

  const isUnlocked = solvedCount >= selectedMilestone.level;

  // Direct High-Resolution HTML5 Canvas Image Generator (No broken npm libraries!)
  const handleDownloadCertificate = () => {
    setDownloading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setDownloading(false);
      return;
    }

    // Background Gradient (Deep Navy Luxury)
    const bgGrad = ctx.createLinearGradient(0, 0, 1600, 1000);
    bgGrad.addColorStop(0, "#0a0e17");
    bgGrad.addColorStop(0.5, "#101827");
    bgGrad.addColorStop(1, "#070a10");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1600, 1000);

    // Outer Gold Border
    ctx.strokeStyle = "#d97706";
    ctx.lineWidth = 14;
    ctx.strokeRect(40, 40, 1520, 920);

    // Inner Delicate Double Border
    ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
    ctx.lineWidth = 3;
    ctx.strokeRect(60, 60, 1480, 880);

    // Corner Ornaments
    const drawCorner = (x: number, y: number) => {
      ctx.fillStyle = "#f59e0b";
      ctx.fillRect(x - 10, y - 10, 20, 20);
    };
    drawCorner(70, 70);
    drawCorner(1530, 70);
    drawCorner(70, 930);
    drawCorner(1530, 930);

    // Certificate Super-Title
    ctx.fillStyle = "#94a3b8";
    ctx.font = "bold 20px monospace";
    ctx.textAlign = "center";
    ctx.fillText("PSEUDO CODE PLATFORM • NATIONAL QUALIFIER CERTIFICATION", 800, 160);

    // Big Certificate Title
    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 56px sans-serif";
    ctx.fillText("CERTIFICATE OF EXCELLENCE", 800, 240);

    // Sub-text
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "26px sans-serif";
    ctx.fillText("This is officially presented to acknowledge that", 800, 310);

    // Candidate Name
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 64px sans-serif";
    ctx.fillText(userName, 800, 400);

    // Underline
    ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(500, 420);
    ctx.lineTo(1100, 420);
    ctx.stroke();

    // Achievement text
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "28px sans-serif";
    ctx.fillText(
      `has successfully solved ${selectedMilestone.level}+ pure pseudocode algorithms and demonstrated mastery in`,
      800,
      480
    );

    // Milestone Title
    ctx.fillStyle = "#a855f7";
    ctx.font = "bold 44px sans-serif";
    ctx.fillText(`"${selectedMilestone.title}"`, 800, 545);

    // Topics list
    ctx.fillStyle = "#94a3b8";
    ctx.font = "20px monospace";
    ctx.fillText(
      "TOPICS: Arrays • Strings • Recursion • Dynamic Programming • Sorting • Trees • TCS/Infosys PYQs",
      800,
      605
    );

    // Bottom Badges & Signatures
    // Left: Verification Code
    ctx.textAlign = "left";
    ctx.fillStyle = "#64748b";
    ctx.font = "18px monospace";
    ctx.fillText(`VERIFICATION ID: ${verificationCode}`, 100, 840);
    ctx.fillText(`ISSUE DATE: ${new Date().toLocaleDateString("en-IN")}`, 100, 870);

    // Center Gold Seal
    ctx.beginPath();
    ctx.arc(800, 770, 65, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
    ctx.fill();
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText("VERIFIED", 800, 765);
    ctx.font = "bold 18px monospace";
    ctx.fillText("MASTER", 800, 795);

    // Right: Signature
    ctx.textAlign = "right";
    ctx.fillStyle = "#38bdf8";
    ctx.font = "italic bold 32px cursive";
    ctx.fillText("Koti Yeturi", 1500, 820);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "18px sans-serif";
    ctx.fillText("Lead Algorithm Instructor & Mentor", 1500, 860);
    ctx.font = "16px monospace";
    ctx.fillText("Pseudo School Safety System", 1500, 885);

    // Trigger Download
    setTimeout(() => {
      const link = document.createElement("a");
      link.download = `Certificate_${userName.replace(/\s+/g, "_")}_${selectedMilestone.level}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      setDownloading(false);
    }, 300);
  };

  const handleLinkedInShare = () => {
    const text = encodeURIComponent(
      `I am excited to share that I have solved ${selectedMilestone.level}+ algorithmic pseudo code challenges and earned the "${selectedMilestone.title}" certification on the Pseudo Code Platform! 🚀`
    );
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      typeof window !== "undefined" ? window.location.href : "https://pseudocode.dev"
    )}&summary=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-surfaceBg via-secondaryBg to-surfaceBg border border-borderSubtle shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          Feature 10: Verified Milestone Certificates
        </div>
        <h1 className="text-3xl font-extrabold text-textMain tracking-tight">
          Resume-Ready Certification Hub
        </h1>
        <p className="text-sm text-textMuted max-w-2xl leading-relaxed">
          Unlock verified certificates as you solve more questions. Showcase your algorithmic
          readiness for TCS, Infosys, and Cognizant placements directly on LinkedIn and your resume.
        </p>

        {/* Current Solved Indicator */}
        <div className="pt-2 flex items-center gap-3">
          <span className="text-xs font-mono text-textMuted">Your Current Solved Count:</span>
          <span className="px-3 py-1 rounded-xl bg-accentGreen/20 text-accentGreen border border-accentGreen/30 font-mono font-bold text-sm">
            {solvedCount} / 5000 Solved
          </span>
        </div>
      </div>

      {/* Milestone Selector Ribbon */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-wider text-textMuted font-bold">
          Select Milestone Certificate Level:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          {MILESTONES.map((m) => {
            const isSelected = selectedMilestone.level === m.level;
            const unlocked = solvedCount >= m.level;

            return (
              <button
                key={m.level}
                onClick={() => setSelectedMilestone(m)}
                className={`p-3 rounded-2xl border text-center transition-all ${
                  isSelected
                    ? "bg-accentPurple/25 border-accentPurple text-white ring-2 ring-accentPurple/50 shadow-lg"
                    : unlocked
                    ? "bg-surfaceBg/80 border-borderSubtle text-textMain hover:border-accentPurple/40"
                    : "bg-secondaryBg/40 border-borderSubtle/50 text-textMuted opacity-60"
                }`}
              >
                <div className="text-lg mb-1">{m.badge.split(" ")[0]}</div>
                <span className="font-mono font-bold text-xs block">{m.level} Qs</span>
                <span className="text-[10px] text-textMuted block truncate">{m.badge.split(" ")[1]}</span>
                <div className="mt-1">
                  {unlocked ? (
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">Unlocked</span>
                  ) : (
                    <span className="text-[10px] text-textMuted font-mono flex items-center justify-center gap-1">
                      <Lock className="w-2.5 h-2.5" /> Locked
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Certificate Preview Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#10182b] to-[#070b14] border-4 border-amber-500/60 shadow-2xl relative overflow-hidden">
        {/* Subtle Watermark Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center font-mono text-9xl font-extrabold select-none">
          PSEUDO
        </div>

        {/* Certificate Frame */}
        <div className="border-2 border-amber-500/30 p-6 sm:p-8 rounded-2xl relative space-y-6 text-center">
          {/* Top Header */}
          <div className="space-y-1">
            <span className="text-[11px] font-mono tracking-widest text-textMuted uppercase block">
              PSEUDO CODE PLATFORM • NATIONAL QUALIFIER CERTIFICATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 tracking-wide uppercase">
              Certificate of Excellence
            </h2>
            <p className="text-xs text-textMuted font-sans">
              This is officially presented to acknowledge that
            </p>
          </div>

          {/* Candidate Name Editable */}
          <div className="py-2">
            {isEditingName ? (
              <div className="inline-flex items-center gap-2">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="px-4 py-2 rounded-xl bg-surfaceBg border border-accentCyan text-accentCyan font-bold text-2xl text-center focus:outline-none"
                />
                <button
                  onClick={() => handleNameSave(userName)}
                  className="p-2 rounded-lg bg-accentCyan text-black font-bold text-xs"
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 group">
                <span className="text-3xl sm:text-5xl font-extrabold text-accentCyan font-sans tracking-tight">
                  {userName}
                </span>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="opacity-60 group-hover:opacity-100 p-1 rounded hover:bg-white/10 text-textMuted transition-opacity"
                  title="Edit Name"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="h-0.5 w-64 mx-auto bg-gradient-to-r from-transparent via-accentCyan/50 to-transparent mt-2" />
          </div>

          {/* Description */}
          <div className="space-y-1 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-textMain leading-relaxed">
              has successfully solved{" "}
              <span className="font-bold text-amber-400 font-mono">
                {selectedMilestone.level}+ questions
              </span>{" "}
              and attained the proficiency title:
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-accentPurple">
              "{selectedMilestone.title}"
            </h3>
            <p className="text-[11px] text-textMuted font-mono">
              Curriculum: Arrays • Strings • Stack • Queue • Dynamic Programming • TCS/Infosys PYQs
            </p>
          </div>

          {/* Bottom Row: Verification, Gold Seal, Instructor */}
          <div className="pt-6 border-t border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
            {/* Verification */}
            <div className="text-left font-mono text-[11px] text-textMuted space-y-0.5">
              <span className="block font-bold text-textMain">VERIFICATION CODE:</span>
              <span className="text-amber-400">{verificationCode}</span>
              <span className="block text-[10px]">Date: {new Date().toLocaleDateString("en-IN")}</span>
            </div>

            {/* Official Gold Seal */}
            <div className="w-20 h-20 rounded-full border-2 border-amber-400 bg-amber-500/10 flex flex-col items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
              <ShieldCheck className="w-6 h-6 mb-0.5" />
              <span className="text-[9px] font-bold tracking-wider font-mono">VERIFIED</span>
            </div>

            {/* Instructor Signature */}
            <div className="text-right space-y-0.5">
              <span className="font-serif italic text-base text-accentCyan block font-bold">
                Koti Yeturi
              </span>
              <span className="text-[10px] text-textMuted font-mono block">
                Lead Algorithm Mentor
              </span>
              <span className="text-[9px] text-textMuted/70 block">
                Pseudo School Safety System
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-surfaceBg border border-borderSubtle">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-textMain">Export Your Official Credential</h4>
          <p className="text-xs text-textMuted">
            Download high-res PNG image or share directly to your LinkedIn profile.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLinkedInShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-mono font-bold transition-all shadow-md active:scale-95"
          >
            <Share2 className="w-4 h-4" />
            Share to LinkedIn
          </button>

          <button
            onClick={handleDownloadCertificate}
            disabled={downloading}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-95 text-black text-xs font-mono font-extrabold transition-all shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Rendering..." : "Download as Image"}
          </button>
        </div>
      </div>
    </div>
  );
}
