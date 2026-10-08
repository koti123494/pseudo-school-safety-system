"use client";

import React, { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import MockTestRunner from "@/components/features/MockTestRunner";
import { allPseudoCodeQuestions } from "@/data/pseudoCode5000";
import { PseudoCodeQuestion } from "@/types";

function CustomTestTakerContent() {
  const searchParams = useSearchParams();

  const title = searchParams?.get("title") || "Custom Shared Assessment";
  const topicsParam = searchParams?.get("topics") || "";
  const diffParam = searchParams?.get("diff") || "All";
  const compParam = searchParams?.get("comp") || "All";
  const countParam = parseInt(searchParams?.get("n") || "20", 10);
  const timeParam = parseInt(searchParams?.get("time") || "30", 10);

  const selectedQuestions = useMemo(() => {
    const topics = topicsParam ? topicsParam.split(",") : [];

    let filtered = allPseudoCodeQuestions.filter((q) => {
      if (topics.length > 0 && !topics.includes(q.topic)) return false;
      if (diffParam !== "All" && q.difficulty !== diffParam) return false;
      if (compParam !== "All" && !q.companies.includes(compParam)) return false;
      return true;
    });

    if (filtered.length === 0) {
      filtered = allPseudoCodeQuestions.slice(0, countParam);
    }

    // Shuffle and slice count
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, countParam);
  }, [topicsParam, diffParam, compParam, countParam]);

  return (
    <MockTestRunner
      customQuestions={selectedQuestions}
      customDurationMinutes={timeParam}
      testTitle={title}
    />
  );
}

export default function CustomTestPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain py-8">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading Custom Shared Assessment...
          </div>
        }
      >
        <CustomTestTakerContent />
      </Suspense>
    </div>
  );
}
