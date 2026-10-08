"use client";

import React, { useState, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppSidebar from "@/components/AppSidebar";
import TopProgressBar from "@/components/TopProgressBar";

export default function AppLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);

  const handleToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setDesktopCollapsed(!desktopCollapsed);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  return (
    <div className="flex min-h-screen relative overflow-x-hidden bg-primaryBg text-textMain transition-colors duration-200">
      <TopProgressBar />
      {/* Subtle floating background symbols */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-[15%] left-[8%] text-secondaryAccent/30 font-mono text-xl select-none floating-petal">
          def solve(nums):
        </div>
        <div
          className="absolute top-[45%] right-[6%] text-primaryAccent/30 font-mono text-2xl select-none floating-petal"
          style={{ animationDelay: "2s" }}
        >
          {"{ }"}
        </div>
        <div
          className="absolute bottom-[20%] left-[12%] text-emerald-400/20 font-mono text-2xl select-none floating-petal"
          style={{ animationDelay: "4s" }}
        >
          [ ... ]
        </div>
        <div
          className="absolute top-[75%] right-[18%] text-amber-400/20 font-mono text-xl select-none floating-petal"
          style={{ animationDelay: "6s" }}
        >
          lambda x: x * 2
        </div>
      </div>

      {/* Docked Sidebar (Fixed 280px on desktop, drawer on mobile) */}
      <Suspense fallback={null}>
        <AppSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onToggle={handleToggle}
          isDesktopCollapsed={desktopCollapsed}
        />
      </Suspense>

      {/* Main Content Area that starts strictly AFTER the sidebar on desktop */}
      <div
        className={`flex-1 flex flex-col min-w-0 w-full relative z-10 transition-all duration-300 ease-in-out ${
          desktopCollapsed ? "lg:pl-0" : "lg:pl-[280px]"
        }`}
      >
        <Navbar onToggleSidebar={handleToggle} />
        <main className="flex-1 w-full min-w-0">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
