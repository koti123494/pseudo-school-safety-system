"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookmarkNotes from "@/components/features/BookmarkNotes";

function BookmarksContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab");
  const initialTab =
    tabParam === "notes" || tabParam === "revision" ? tabParam : "bookmarks";

  return <BookmarkNotes initialTab={initialTab} />;
}

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain py-8">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading Bookmarks & Revision Pool...
          </div>
        }
      >
        <BookmarksContent />
      </Suspense>
    </div>
  );
}
