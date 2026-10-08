import { TestCase } from "@/types";

export interface ExecutionResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  failedTestIndex?: number;
  results: {
    testIndex: number;
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
    error?: string;
    hidden?: boolean;
  }[];
  output: string;
  error?: {
    line?: number;
    type: string;
    message: string;
  };
  consoleLogs?: string[];
  executionTimeMs: number;
}

/**
 * Validates basic Python syntax before execution to detect line numbers for
 * IndentationError, SyntaxError, unclosed quotes/brackets.
 */
export function validatePythonSyntax(code: string): { line: number; type: string; message: string } | null {
  const lines = code.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    // Check block statements missing colon
    const blockKeywords = ["if", "elif", "else", "for", "while", "def", "class", "try", "except", "finally", "with"];
    for (const kw of blockKeywords) {
      const regex = new RegExp(`^${kw}\\b`);
      if (regex.test(trimmed)) {
        const withoutComment = trimmed.replace(/#.*$/, "").trim();
        if (!withoutComment.endsWith(":")) {
          return {
            line: i + 1,
            type: "SyntaxError",
            message: `expected ':' at end of statement '${kw}'`,
          };
        }
      }
    }

    // Check unclosed quotes (single-line strings)
    let singleQuotes = 0;
    let doubleQuotes = 0;
    for (let c = 0; c < trimmed.length; c++) {
      if (trimmed[c] === "'" && (c === 0 || trimmed[c - 1] !== "\\")) singleQuotes++;
      if (trimmed[c] === '"' && (c === 0 || trimmed[c - 1] !== "\\")) doubleQuotes++;
    }
    if (singleQuotes % 2 !== 0 || doubleQuotes % 2 !== 0) {
      return {
        line: i + 1,
        type: "SyntaxError",
        message: "unterminated string literal",
      };
    }

    // Check indentation after a line ending with a colon
    if (i > 0) {
      const prevTrimmed = lines[i - 1].trim().replace(/#.*$/, "").trim();
      if (prevTrimmed.endsWith(":") && !rawLine.startsWith(" ") && !rawLine.startsWith("\t")) {
        return {
          line: i + 1,
          type: "IndentationError",
          message: `expected an indented block after '${prevTrimmed.split(" ")[0]}'`,
        };
      }
    }
  }

  // Check bracket balance
  let openRound = 0, openSquare = 0, openCurly = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/#.*$/, "");
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === "(") openRound++;
      else if (char === ")") openRound--;
      else if (char === "[") openSquare++;
      else if (char === "]") openSquare--;
      else if (char === "{") openCurly++;
      else if (char === "}") openCurly--;

      if (openRound < 0 || openSquare < 0 || openCurly < 0) {
        return {
          line: i + 1,
          type: "SyntaxError",
          message: "unmatched closing bracket",
        };
      }
    }
  }

  if (openRound > 0 || openSquare > 0 || openCurly > 0) {
    return {
      line: lines.length,
      type: "SyntaxError",
      message: "unclosed bracket '(' or '[' or '{'",
    };
  }

  return null;
}

/**
 * Transpiles or executes simple Python functions in browser JS runtime for instant placement testing.
 * Supports def solve(...) logic with list comprehensions, dict/Counter, math, loops, slicing, and returns.
 */
export async function runPythonCode(
  pythonCode: string,
  testCases: TestCase[],
  options?: { onlySample?: boolean }
): Promise<ExecutionResult> {
  const startTime = performance.now();
  const results: ExecutionResult["results"] = [];
  const logs: string[] = [];

  // Filter testcases if onlySample requested
  const targetTests = options?.onlySample
    ? testCases.filter((tc) => !tc.hidden)
    : testCases;

  // 1. Check if def solve exists
  if (!pythonCode.includes("def solve")) {
    return {
      passed: false,
      totalTests: targetTests.length,
      passedTests: 0,
      results: [],
      output: "Error at Line 1: SyntaxError - Could not find function 'def solve(...)'. Please define 'solve' as the entry point.",
      error: {
        line: 1,
        type: "SyntaxError",
        message: "Could not find function 'def solve(...)'. Please define 'solve' as the entry point.",
      },
      consoleLogs: ["System: Missing entry point 'def solve(...)'"],
      executionTimeMs: 0,
    };
  }

  // 2. Pre-execution static syntax validation
  const syntaxErr = validatePythonSyntax(pythonCode);
  if (syntaxErr) {
    return {
      passed: false,
      totalTests: targetTests.length,
      passedTests: 0,
      results: [],
      output: `Error at Line ${syntaxErr.line}: ${syntaxErr.type} - ${syntaxErr.message}`,
      error: syntaxErr,
      consoleLogs: [`Traceback (most recent call last):`, `  File "solution.py", line ${syntaxErr.line}`, `${syntaxErr.type}: ${syntaxErr.message}`],
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }

  // 3. Create executor
  let runnerFunction: (args: any[]) => any;
  try {
    runnerFunction = createPythonExecutor(pythonCode, logs);
  } catch (err: any) {
    // Determine line error from stack or parsing
    const msg = err.message || String(err);
    const lineMatch = err.stack?.match(/:(\d+):/);
    const line = lineMatch ? parseInt(lineMatch[1], 10) : 1;
    return {
      passed: false,
      totalTests: targetTests.length,
      passedTests: 0,
      results: [],
      output: `Error at Line ${line}: SyntaxError - ${msg}`,
      error: {
        line,
        type: "SyntaxError",
        message: msg,
      },
      consoleLogs: [`Traceback (most recent call last):`, `  File "solution.py", line ${line}`, `SyntaxError: ${msg}`],
      executionTimeMs: Math.round(performance.now() - startTime),
    };
  }

  let passedCount = 0;
  let firstFailedIndex: number | undefined;

  for (let i = 0; i < targetTests.length; i++) {
    const tc = targetTests[i];
    try {
      const rawArgs = parseInputArgs(tc.input);
      const actualOutput = runnerFunction(rawArgs);

      // Normalize outputs
      let normalizedActual: string;
      if (actualOutput === undefined || actualOutput === null) {
        normalizedActual = "None";
      } else if (Array.isArray(actualOutput)) {
        normalizedActual = JSON.stringify(actualOutput);
      } else if (typeof actualOutput === "object") {
        normalizedActual = JSON.stringify(actualOutput);
      } else {
        normalizedActual = String(actualOutput).trim();
      }

      const normalizedExpected = tc.expectedOutput.trim();

      // Check both exact match and space-separated/array equivalency
      let isPassed = normalizedActual === normalizedExpected;
      if (!isPassed && Array.isArray(actualOutput)) {
        if (actualOutput.join(" ") === normalizedExpected) isPassed = true;
      }
      if (!isPassed && normalizedExpected.startsWith("[") && normalizedExpected.endsWith("]")) {
        const cleanActual = normalizedActual.replace(/\s+/g, "");
        const cleanExpected = normalizedExpected.replace(/\s+/g, "");
        if (cleanActual === cleanExpected) isPassed = true;
      }

      if (isPassed) {
        passedCount++;
      } else if (firstFailedIndex === undefined) {
        firstFailedIndex = i + 1;
      }

      results.push({
        testIndex: i + 1,
        input: tc.input,
        expected: normalizedExpected,
        actual: normalizedActual,
        passed: isPassed,
        hidden: tc.hidden,
      });
    } catch (err: any) {
      if (firstFailedIndex === undefined) {
        firstFailedIndex = i + 1;
      }
      results.push({
        testIndex: i + 1,
        input: tc.input,
        expected: tc.expectedOutput,
        actual: "Runtime Error",
        passed: false,
        error: err.message || String(err),
        hidden: tc.hidden,
      });
      logs.push(`Error executing Testcase #${i + 1}: ${err.message}`);
    }
  }

  const elapsed = Math.round(performance.now() - startTime);
  const allPassed = passedCount === targetTests.length;

  let summaryOutput: string;
  if (allPassed) {
    summaryOutput = `✅ Testcases (${targetTests.length}) Passed - ${passedCount}/${targetTests.length} (${elapsed}ms)`;
  } else {
    summaryOutput = `❌ Failed on Testcase ${firstFailedIndex} (${passedCount}/${targetTests.length} Passed)`;
  }

  return {
    passed: allPassed,
    totalTests: targetTests.length,
    passedTests: passedCount,
    failedTestIndex: firstFailedIndex,
    results,
    output: summaryOutput,
    consoleLogs: logs,
    executionTimeMs: elapsed,
  };
}

function parseInputArgs(inputStr: string): any[] {
  const lines = inputStr.trim().split("\n");
  if (lines.length === 1) {
    const line = lines[0].trim();
    if (line.includes(" ") && line.split(" ").every((t) => !isNaN(Number(t)))) {
      return [line.split(" ").map(Number)];
    }
    if (!isNaN(Number(line)) && line.trim() !== "") {
      return [Number(line)];
    }
    return [line];
  } else {
    return lines.map((l: string) => {
      const trimmed = l.trim();
      if (trimmed.includes(" ") && trimmed.split(" ").every((t: string) => !isNaN(Number(t)))) {
        return trimmed.split(" ").map(Number);
      }
      if (!isNaN(Number(trimmed)) && trimmed !== "") {
        return Number(trimmed);
      }
      return trimmed;
    });
  }
}

/**
 * Creates an executable JS function from Python solve logic with Python-like helpers.
 */
function createPythonExecutor(code: string, logs: string[]): (args: any[]) => any {
  const pythonHelpers = `
    const min = Math.min;
    const max = Math.max;
    const abs = Math.abs;
    const sum = (arr) => Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) : 0;
    const len = (x) => (x ? (x.length !== undefined ? x.length : Object.keys(x).length) : 0);
    const sorted = (arr) => [...arr].sort((a, b) => (typeof a === 'number' ? a - b : String(a).localeCompare(String(b))));
    const reversed = (arr) => [...arr].reverse();
    const str = (x) => String(x);
    const int = (x) => parseInt(x, 10);
    const float = (x) => parseFloat(x);
    const print = (...args) => {
      const line = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
      logs.push(line);
    };
    const range = function*(start, stop, step = 1) {
      if (stop === undefined) { stop = start; start = 0; }
      for (let i = start; step > 0 ? i < stop : i > stop; i += step) yield i;
    };
  `;

  const transpiled = transpilePythonToJs(code);

  const fn = new Function("args", "logs", `
    ${pythonHelpers}
    try {
      ${transpiled}
      if (typeof solve !== 'function') {
        throw new Error("Function 'solve' was not defined.");
      }
      return solve(...args);
    } catch(e) {
      throw e;
    }
  `);

  return (args: any[]) => fn(args, logs);
}

export function transpilePythonToJs(pyCode: string): string {
  // Line-by-line conversion
  const lines = pyCode.split("\n");
  const processed = lines.map((l) => {
    let line = l;
    // Comments
    line = line.replace(/#.*$/, "");
    // pass -> /* pass */
    line = line.replace(/\bpass\b/g, "/* pass */");
    // Booleans and None
    line = line.replace(/\bTrue\b/g, "true");
    line = line.replace(/\bFalse\b/g, "false");
    line = line.replace(/\bNone\b/g, "null");
    line = line.replace(/\bis\s+None\b/g, "=== null");
    line = line.replace(/\bis\s+not\s+None\b/g, "!== null");
    // Slicing [::-1]
    line = line.replace(/\[::-1\]/g, ".slice().reverse()");
    // Integer division //
    line = line.replace(/(\w+)\s*\/\/\s*(\w+)/g, "Math.floor($1 / $2)");
    // and, or, not
    line = line.replace(/\band\b/g, "&&");
    line = line.replace(/\bor\b/g, "||");
    line = line.replace(/\bnot\b/g, "!");
    // List methods
    line = line.replace(/\.append\(/g, ".push(");
    // Strings
    line = line.replace(/\.strip\(\)/g, ".trim()");
    line = line.replace(/\.split\(\)/g, ".split(/\\s+/)");
    return line;
  });

  let js = processed.join("\n")
    .replace(/def solve\(([^)]*)\):/g, "function solve($1) {")
    .replace(/elif\s+([^:]+):/g, "} else if ($1) {")
    .replace(/if\s+([^:]+):/g, "if ($1) {")
    .replace(/else:/g, "} else {")
    .replace(/for\s+(\w+)\s+in\s+range\(([^)]+)\):/g, (m: string, v: string, r: string) => {
      const parts = r.split(",").map((s: string) => s.trim());
      if (parts.length === 1) return `for (let ${v} = 0; ${v} < ${parts[0]}; ${v}++) {`;
      if (parts.length === 2) return `for (let ${v} = ${parts[0]}; ${v} < ${parts[1]}; ${v}++) {`;
      return `for (let ${v} = ${parts[0]}; ${v} < ${parts[1]}; ${v} += ${parts[2]}) {`;
    })
    .replace(/for\s+(\w+),\s*(\w+)\s+in\s+enumerate\(([^)]+)\):/g, "for (let [$1, $2] of ($3).entries()) {")
    .replace(/for\s+(\w+)\s+in\s+([^:]+):/g, "for (let $1 of $2) {")
    .replace(/while\s+([^:]+):/g, "while ($1) {")
    .replace(/float\('inf'\)/g, "Infinity");

  // Close blocks properly
  js += "\n}\n";
  return js;
}

export async function runPythonCustomInput(
  pythonCode: string,
  customInput: string
): Promise<{ output: string; executionTimeMs: number; error?: string }> {
  const startTime = performance.now();
  const logs: string[] = [];
  try {
    if (!pythonCode.includes("def solve")) {
      return {
        output: "Error: No 'def solve(...)' function found.",
        executionTimeMs: 0,
        error: "Missing entry point function",
      };
    }
    const syntaxErr = validatePythonSyntax(pythonCode);
    if (syntaxErr) {
      return {
        output: `Error at Line ${syntaxErr.line}: ${syntaxErr.type} - ${syntaxErr.message}`,
        executionTimeMs: Math.round(performance.now() - startTime),
        error: syntaxErr.message,
      };
    }

    const runnerFunction = createPythonExecutor(pythonCode, logs);
    const rawArgs = parseInputArgs(customInput);
    const actualOutput = runnerFunction(rawArgs);
    const elapsed = Math.round(performance.now() - startTime);

    const formatted = actualOutput === undefined || actualOutput === null
      ? "None"
      : typeof actualOutput === "object"
      ? JSON.stringify(actualOutput)
      : String(actualOutput);

    return {
      output: logs.length > 0 ? `${logs.join("\n")}\n\nReturn value: ${formatted}` : formatted,
      executionTimeMs: elapsed,
    };
  } catch (err: any) {
    const elapsed = Math.round(performance.now() - startTime);
    return {
      output: `Runtime Error: ${err.message}`,
      executionTimeMs: elapsed,
      error: err.message,
    };
  }
}
