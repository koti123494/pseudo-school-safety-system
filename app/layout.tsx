import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppLayoutShell from "@/components/AppLayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "PseudoCode Mastery — Python Edition | Learn Python. Practice Logic. Crack Interviews.",
  description:
    "Complete Python Learning and Placement Preparation Platform with 2,000+ Python Coding Problems, 55-Chapter Python Mastery Book, 16 Company Tracks, and 1,000+ Pseudocode Traces.",
  keywords: [
    "Python Coding Practice",
    "Pseudocode",
    "Python",
    "TCS NQT",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "LeetCode",
    "Placement Preparation",
  ],
  authors: [{ name: "PseudoCode Mastery Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('pseudoMastery_theme');
                  var root = document.documentElement;
                  if (saved === 'light') {
                    root.classList.add('light');
                    root.classList.remove('dark');
                  } else if (saved === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    if (prefersDark) {
                      root.classList.add('dark');
                      root.classList.remove('light');
                    } else {
                      root.classList.add('light');
                      root.classList.remove('dark');
                    }
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-primaryBg text-textMain antialiased flex flex-col min-h-screen">
        <AppLayoutShell>{children}</AppLayoutShell>
      </body>
    </html>
  );
}
