import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AppLayoutShell from "@/components/AppLayoutShell";
import ChatBot from "@/components/ChatBot";

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
  title: "Koti's Python Academy - Learn Python with Koti",
  description:
    "Interactive Python learning platform by Koti. Learn Python in Telugu & English with live playground.",
  keywords: ["Koti Python", "Python Telugu", "Learn Python", "Koti Academy"],
  authors: [{ name: "Koti" }],
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
        <ChatBot />
      </body>
    </html>
  );
}
