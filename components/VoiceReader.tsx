"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Mic, Pause, Play, Sparkles } from "lucide-react";

interface VoiceReaderProps {
  pseudoCodeText: string;
  questionText?: string;
  className?: string;
}

export function cleanTextForVoice(code: string): string {
  return code
    .replace(/\bSET\b/g, "set ")
    .replace(/\bFOR\b/g, "for ")
    .replace(/\bTO\b/g, " to ")
    .replace(/\bWHILE\b/g, "while ")
    .replace(/\bDO\b/g, " do ")
    .replace(/\bIF\b/g, "if ")
    .replace(/\bTHEN\b/g, " then ")
    .replace(/\bELSE\b/g, "else ")
    .replace(/\bEND\s+IF\b/g, "end if")
    .replace(/\bEND\s+FOR\b/g, "end for")
    .replace(/\bEND\s+WHILE\b/g, "end while")
    .replace(/\bRETURN\b/g, "return ")
    .replace(/==/g, " is equal to ")
    .replace(/!=/g, " is not equal to ")
    .replace(/<=/g, " is less than or equal to ")
    .replace(/>=/g, " is greater than or equal to ")
    .replace(/\[/g, " array at index ")
    .replace(/\]/g, " ")
    .replace(/%/g, " modulo ")
    .replace(/\+/g, " plus ")
    .replace(/\*/g, " multiplied by ")
    .replace(/\/\//g, " divided by ")
    .replace(/-/g, " minus ");
}

export default function VoiceReader({
  pseudoCodeText,
  questionText,
  className = "",
}: VoiceReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.speechSynthesis) {
      setIsSupported(false);
    }

    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleStop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleSpeak = (textToSpeak: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (isPlaying) {
      handleStop();
      return;
    }

    window.speechSynthesis.cancel();

    const formatted = cleanTextForVoice(textToSpeak);
    const utterance = new SpeechSynthesisUtterance(formatted);
    utteranceRef.current = utterance;

    // Optional voice settings for clear pacing
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) return null;

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Read Code Button */}
      <button
        onClick={() => handleSpeak(pseudoCodeText)}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
          isPlaying
            ? "bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-sm animate-pulse"
            : "bg-surfaceBorder/80 hover:bg-surfaceBorder text-textMuted hover:text-textMain border border-borderSubtle"
        }`}
        title={isPlaying ? "Stop Voice Reader" : "Speak Pseudo Code (Line by Line)"}
        aria-label="Voice Reader"
      >
        {isPlaying ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[11px]">Stop</span>
            {/* Audio wave bars animation */}
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3 bg-rose-400 animate-[bounce_0.8s_infinite] rounded-full" />
              <span className="w-1 h-4 bg-rose-400 animate-[bounce_0.6s_infinite] rounded-full" />
              <span className="w-1 h-2 bg-rose-400 animate-[bounce_0.9s_infinite] rounded-full" />
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-accentCyan" />
            <span className="text-[11px]">Listen Code</span>
          </>
        )}
      </button>

      {/* Read Question Button */}
      {questionText && !isPlaying && (
        <button
          onClick={() => handleSpeak(questionText)}
          className="p-1 rounded-lg bg-surfaceBorder/50 hover:bg-surfaceBorder text-textMuted hover:text-textMain border border-borderSubtle transition-colors"
          title="Listen to Question Prompt"
          aria-label="Listen to Question Prompt"
        >
          <Mic className="w-3.5 h-3.5 text-accentPurple" />
        </button>
      )}
    </div>
  );
}
