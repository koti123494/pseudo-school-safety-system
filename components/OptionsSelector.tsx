"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Check, ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";

interface OptionsSelectorProps {
  options: [string, string, string, string];
  correctAnswerIndex: number;
  selectedIndex: number | null;
  onSelectOption: (index: number) => void;
  disabled: boolean;
}

export default function OptionsSelector({
  options,
  correctAnswerIndex,
  selectedIndex,
  onSelectOption,
  disabled,
}: OptionsSelectorProps) {
  const optionLabels = ["A", "B", "C", "D"];
  const [confirmMode, setConfirmMode] = useState(false);
  const [pendingSelection, setPendingSelection] = useState<number | null>(null);

  // Reset pending selection when question changes
  useEffect(() => {
    setPendingSelection(null);
  }, [options, selectedIndex]);

  // Keyboard shortcut listener: keys 1-4 or a-d
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      let targetIdx: number | null = null;
      if (["1", "A"].includes(key)) targetIdx = 0;
      else if (["2", "B"].includes(key)) targetIdx = 1;
      else if (["3", "C"].includes(key)) targetIdx = 2;
      else if (["4", "D"].includes(key)) targetIdx = 3;

      if (targetIdx !== null) {
        if (confirmMode) {
          setPendingSelection(pendingSelection === targetIdx ? null : targetIdx);
        } else {
          onSelectOption(targetIdx);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [disabled, onSelectOption, confirmMode, pendingSelection]);

  const handleOptionClick = (idx: number) => {
    if (disabled) return;
    if (confirmMode) {
      // Toggle option on/off or change selection
      setPendingSelection((prev) => (prev === idx ? null : idx));
    } else {
      onSelectOption(idx);
    }
  };

  const handleConfirmSubmit = () => {
    if (pendingSelection !== null && !disabled) {
      onSelectOption(pendingSelection);
    }
  };

  const isAnswered = selectedIndex !== null;
  const isSelectedCorrect = selectedIndex === correctAnswerIndex;

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Top Header with Toggle Option Mode */}
      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 px-1">
        <span className="font-medium">Select correct output:</span>

        <div className="flex items-center gap-3">
          {/* Toggle Option Mode Switch */}
          {!isAnswered && (
            <button
              onClick={() => {
                setConfirmMode(!confirmMode);
                setPendingSelection(null);
              }}
              title="Toggle between instant check and select-before-submitting mode"
              className="flex items-center gap-1.5 text-[11px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span>{confirmMode ? "Confirm Mode" : "Instant Lock-in"}</span>
              {confirmMode ? (
                <ToggleRight className="w-4 h-4 text-secondaryAccent" />
              ) : (
                <ToggleLeft className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
              )}
            </button>
          )}

          <span className="hidden sm:inline text-[11px] font-mono text-gray-500 dark:text-zinc-500">
            Keys: A-D / 1-4
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          const isPending = confirmMode && pendingSelection === idx;
          const isCorrect = idx === correctAnswerIndex;

          let cardStyle =
            "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-900 dark:text-white shadow-sm";
          let badgeStyle = "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 font-bold";

          if (isPending && !isAnswered) {
            cardStyle =
              "border-primaryAccent bg-violet-50 dark:bg-primaryAccent/20 text-violet-900 dark:text-violet-200 shadow-glow ring-2 ring-primaryAccent/50";
            badgeStyle = "bg-primaryAccent text-white border-primaryAccent font-bold";
          }

          if (isAnswered) {
            if (isCorrect) {
              cardStyle =
                "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 shadow-glowSuccess font-medium";
              badgeStyle = "bg-emerald-600 text-white border-emerald-500 font-bold";
            } else if (isSelected && !isCorrect) {
              cardStyle =
                "border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 shadow-glowError font-medium";
              badgeStyle = "bg-rose-600 text-white border-rose-500 font-bold";
            } else {
              cardStyle = "opacity-40 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400";
              badgeStyle = "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600";
            }
          }

          return (
            <motion.button
              key={idx}
              id={`option-btn-${optionLabels[idx]}`}
              disabled={disabled}
              onClick={() => handleOptionClick(idx)}
              whileHover={!disabled ? { scale: 1.01 } : {}}
              whileTap={!disabled ? { scale: 0.99 } : {}}
              animate={
                isSelected && !isCorrect
                  ? { x: [-6, 6, -4, 4, -2, 2, 0] }
                  : isSelected && isCorrect
                  ? { scale: [1, 1.02, 1] }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-center justify-between transition-all duration-200 ${cardStyle} ${
                disabled ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono border ${badgeStyle} shrink-0 transition-colors`}
                >
                  {optionLabels[idx]}
                </span>
                <span
                  className={`font-mono text-sm sm:text-base font-semibold break-all ${
                    isAnswered
                      ? isCorrect
                        ? "text-emerald-900 dark:text-emerald-200"
                        : isSelected
                        ? "text-rose-900 dark:text-rose-200"
                        : "text-gray-500 dark:text-gray-400"
                      : isPending
                      ? "text-violet-900 dark:text-violet-200"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {option}
                </span>
              </div>

              {/* Status Icons */}
              {isAnswered && (
                <div className="shrink-0 ml-2">
                  {isCorrect && (
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-sans">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      <span className="hidden sm:inline">Correct</span>
                    </div>
                  )}
                  {isSelected && !isCorrect && (
                    <div className="flex items-center gap-1 text-rose-600 dark:text-rose-400 text-xs font-bold font-sans">
                      <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      <span className="hidden sm:inline">Incorrect</span>
                    </div>
                  )}
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Confirm Button when in Confirm Mode */}
      {confirmMode && !isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-1"
        >
          <button
            disabled={pendingSelection === null}
            onClick={handleConfirmSubmit}
            className={`w-full py-3 rounded-xl font-bold text-xs shadow-glow transition-all flex items-center justify-center gap-2 ${
              pendingSelection !== null
                ? "bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white hover:opacity-95 cursor-pointer"
                : "bg-surfaceBg text-textMuted border border-borderSubtle cursor-not-allowed opacity-50"
            }`}
          >
            <span>
              {pendingSelection !== null
                ? `Confirm Option ${optionLabels[pendingSelection]} ➔`
                : "Select an Option Above to Submit"}
            </span>
          </button>
        </motion.div>
      )}

      {/* Immediate feedback alert banner */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-xl border flex items-center justify-between text-xs sm:text-sm font-medium ${
            isSelectedCorrect
              ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/40 text-emerald-900 dark:text-emerald-200"
              : "bg-rose-50 dark:bg-rose-950/40 border-rose-500/40 text-rose-900 dark:text-rose-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {isSelectedCorrect ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>
                  ✓ Excellent! Option {optionLabels[correctAnswerIndex]} is the correct answer.
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>
                  ✕ Incorrect. Correct answer is Option {optionLabels[correctAnswerIndex]} (
                  <span className="font-mono font-bold">
                    {options[correctAnswerIndex]}
                  </span>
                  ).
                </span>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
