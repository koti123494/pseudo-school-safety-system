"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, Play } from "lucide-react";

interface PythonEquivalentProps {
  pythonCode: string;
}

export default function PythonEquivalent({ pythonCode }: PythonEquivalentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-borderSubtle bg-codeBlock overflow-hidden shadow-card">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-borderSubtle bg-[#161625]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-white tracking-wide">
            Python Equivalent Code
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            Python 3.x
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-textMuted hover:text-white bg-surfaceBg border border-borderSubtle hover:border-borderHighlight transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              <span className="text-success text-[11px]">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px]">Copy Code</span>
            </>
          )}
        </button>
      </div>

      <pre className="p-4 font-code text-xs sm:text-sm text-emerald-300/90 overflow-x-auto leading-relaxed selection:bg-emerald-500/30">
        <code>{pythonCode}</code>
      </pre>
    </div>
  );
}
