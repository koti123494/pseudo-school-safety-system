"use client";

import React, { Suspense } from "react";
import CertificateViewer from "@/components/features/CertificateViewer";

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-primaryBg text-textMain py-8">
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-16 text-center text-textMuted font-mono">
            Loading Certification Credential...
          </div>
        }
      >
        <CertificateViewer />
      </Suspense>
    </div>
  );
}
