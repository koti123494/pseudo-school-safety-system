"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface MilestoneConfettiProps {
  count: number;
}

const MILESTONES = [10, 50, 100, 500, 1000];

export default function MilestoneConfetti({ count }: MilestoneConfettiProps) {
  useEffect(() => {
    if (MILESTONES.includes(count)) {
      // Fire celebration confetti
      const end = Date.now() + 2 * 1000;
      const colors = ["#7c3aed", "#a78bfa", "#22c55e", "#f59e0b"];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
  }, [count]);

  return null;
}
