"use client";

import React, { Suspense } from "react";
import MockTestRunner from "@/components/features/MockTestRunner";

export default function MockTestPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain py-8">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading TCS NQT Mock Test Simulator...
          </div>
        }
      >
        <MockTestRunner />
      </Suspense>
    </div>
  );
}
