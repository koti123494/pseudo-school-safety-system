"use client";

import React, { Suspense } from "react";
import CustomTestCreator from "@/components/features/CustomTestCreator";

export default function CreateTestPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain py-8">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading Test Creator Studio...
          </div>
        }
      >
        <CustomTestCreator />
      </Suspense>
    </div>
  );
}
