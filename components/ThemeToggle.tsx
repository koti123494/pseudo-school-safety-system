"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Laptop } from "lucide-react";
import { getThemeMode, setThemeMode } from "@/lib/storage";
import { ThemeMode } from "@/types";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = getThemeMode();
    setTheme(saved);
    setThemeMode(saved);
  }, []);

  const handleToggle = () => {
    const nextMode: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextMode);
    setThemeMode(nextMode);
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-surfaceBg border border-borderSubtle" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
      className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-surfaceBg hover:bg-surfaceHover border border-borderSubtle hover:border-primaryAccent/40 transition-colors shadow-sm group"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-secondaryAccent group-hover:text-primaryAccent"
          >
            <Moon className="w-4 h-4 fill-secondaryAccent/20" />
          </motion.div>
        ) : (
          <motion.div
            key="light-sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-amber-500 group-hover:text-amber-600"
          >
            <Sun className="w-4 h-4 fill-amber-500/20" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
