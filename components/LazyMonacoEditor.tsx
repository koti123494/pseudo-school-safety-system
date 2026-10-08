"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Terminal, Code2 } from "lucide-react";

// Dynamically import Monaco with ssr: false
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[#1e1e2e] text-textMuted text-xs font-mono p-4 space-y-2">
      <div className="w-6 h-6 border-2 border-primaryAccent border-t-transparent rounded-full animate-spin" />
      <span>Loading Monaco Editor...</span>
    </div>
  ),
});

interface LazyMonacoEditorProps {
  height?: string;
  language?: string;
  theme?: string;
  value: string;
  onChange?: (val: string | undefined) => void;
  options?: any;
  onMount?: (editor: any) => void;
}

export default function LazyMonacoEditor(props: LazyMonacoEditorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not supported, render immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" } // Pre-load 150px before scrolling into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full relative">
      {shouldRender ? (
        <MonacoEditor {...props} />
      ) : (
        <div className="flex flex-col justify-between h-full w-full bg-[#1e1e2e] p-4 font-mono text-xs text-textMuted border border-borderSubtle rounded-xl select-none">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px]">
            <span className="flex items-center gap-1.5 text-secondaryAccent">
              <Code2 className="w-3.5 h-3.5" /> Python Workspace (Standby)
            </span>
            <span className="text-[10px] text-textMuted font-mono">Scroll or click to activate</span>
          </div>
          <pre className="text-zinc-400 overflow-hidden text-xs py-2 leading-relaxed opacity-70">
            <code>{props.value.slice(0, 150)}...</code>
          </pre>
          <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/5 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" /> Lazy Monaco Ready
          </div>
        </div>
      )}
    </div>
  );
}
