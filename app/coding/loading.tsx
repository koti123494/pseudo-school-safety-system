import React from "react";

export default function CodingLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="p-6 rounded-3xl bg-secondaryBg/80 border border-borderSubtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-3 w-full max-w-xl">
          <div className="h-6 w-48 rounded-full bg-white/10" />
          <div className="h-8 w-80 rounded-xl bg-white/10" />
          <div className="h-4 w-96 rounded-lg bg-white/5" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-24 rounded-2xl bg-white/10" />
          <div className="h-10 w-36 rounded-2xl bg-white/10" />
        </div>
      </div>

      {/* View Switcher Tabs Skeleton */}
      <div className="flex gap-2">
        <div className="h-9 w-60 rounded-xl bg-white/10" />
        <div className="h-9 w-60 rounded-xl bg-white/5" />
      </div>

      {/* 50 Topics Filter & Chips Bar Skeleton */}
      <div className="p-4 rounded-2xl bg-secondaryBg/60 border border-borderSubtle space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="h-8 w-72 rounded-xl bg-white/10" />
          <div className="h-8 w-40 rounded-xl bg-white/5" />
        </div>
        {/* Horizontal Chips */}
        <div className="flex gap-2 overflow-x-hidden pt-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-7 w-28 rounded-full bg-white/10 shrink-0"
              style={{ opacity: 1 - i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Main Topic Content Skeleton */}
      <div className="space-y-6">
        {/* Header */}
        <div className="h-14 rounded-2xl bg-secondaryBg/80 border border-borderSubtle" />

        {/* 4 Definition Cards */}
        <div className="p-6 rounded-3xl bg-purple-950/20 border border-purple-500/20 space-y-4">
          <div className="h-5 w-64 rounded bg-purple-500/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-16 rounded-2xl bg-purple-900/20 border border-purple-500/10" />
            ))}
          </div>
        </div>

        {/* Syntax Reference Box Skeleton */}
        <div className="h-32 rounded-3xl bg-secondaryBg/70 border border-borderSubtle" />

        {/* Runnable Examples Skeleton */}
        <div className="space-y-3">
          <div className="h-5 w-48 rounded bg-white/10" />
          <div className="h-44 rounded-3xl bg-secondaryBg/70 border border-borderSubtle" />
        </div>
      </div>
    </div>
  );
}
