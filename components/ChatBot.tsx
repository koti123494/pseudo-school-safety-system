"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "bot" | "user";
  text: string;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi Koti! Nenu mee Python Assistant ni. Em doubt unna adugu!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [msgs, open]);

  const ask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = { role: "user", text: trimmed };
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");

    // AI Response logic
    let reply = "Adi chala manchi question! ";
    const lower = trimmed.toLowerCase();

    if (lower.includes("python")) {
      reply += "Python lo idi loops / functions tho cheyochu. Playground lo try chey!";
    } else if (lower.includes("loop") || lower.includes("for") || lower.includes("while")) {
      reply += "For loop ante repeat chese work kosam. Ex: for i in range(5): print(i)";
    } else if (lower.includes("koti")) {
      reply += "Koti garu mee founder, chala talented Python dev & educator!";
    } else if (lower.includes("dsa") || lower.includes("data structure")) {
      reply += "Data Structures (Lists, Tuples, Dictionaries, Sets) placement interviews ki chala important. Practice section lo check chey!";
    } else if (lower.includes("placement") || lower.includes("company")) {
      reply += "TCS, Infosys, Wipro, Accenture tracks mana website Companies tab lo unnay. Daily 5 questions solve chey!";
    } else {
      reply += "Nee doubt ni Topics section lo chudu, lekapote naku malli adugu!";
    }

    setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Python AI Assistant"
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 rounded-full text-2xl shadow-xl hover:shadow-2xl z-50 flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 sm:w-88 h-[420px] max-h-[80vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3.5 flex items-center justify-between font-bold shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-lg">🐍</span>
              <div>
                <div className="text-sm leading-tight font-extrabold">Koti's AI Assistant</div>
                <div className="text-[10px] text-blue-100 font-normal">Online • Python Doubt Solver</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm p-1 rounded hover:bg-white/10"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-sm bg-zinc-50/50 dark:bg-zinc-950/40">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`p-2.5 rounded-xl text-xs sm:text-sm leading-relaxed transition-all ${
                  m.role === "bot"
                    ? "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-700/60 shadow-sm mr-6"
                    : "bg-blue-600 text-white ml-6 shadow-sm rounded-br-none"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-2.5 flex gap-2 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask()}
              placeholder="Doubt adugu..."
              className="flex-1 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-1.5 text-xs sm:text-sm dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={ask}
              disabled={!input.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-xl transition-colors shadow-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
