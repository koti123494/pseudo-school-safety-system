import fs from "fs";
import path from "path";
import { Question } from "../types";

const questionsPath = path.join(__dirname, "../data/questions.json");

if (!fs.existsSync(questionsPath)) {
  console.error("❌ questions.json file not found at " + questionsPath);
  process.exit(1);
}

const rawData = fs.readFileSync(questionsPath, "utf-8");
const questions: Question[] = JSON.parse(rawData);

console.log("==========================================");
console.log("       KOTI&apos;S ACADEMY VALIDATION SUITE    ");
console.log("==========================================");

const errors: string[] = [];

// 1. Total >= 1000
if (questions.length < 1000) {
  errors.push(`Total questions is ${questions.length}, expected >= 1000`);
} else {
  console.log(`✓ Total questions: ${questions.length} (>= 1000 satisfied)`);
}

// 2. Difficulty distribution
const difficulties: Record<string, number> = { Easy: 0, Medium: 0, Hard: 0 };
questions.forEach((q) => {
  difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
});

console.log(
  `✓ Difficulty distribution: Easy=${difficulties.Easy} (>=200), Medium=${difficulties.Medium} (>=400), Hard=${difficulties.Hard} (>=400)`
);

if (difficulties.Easy < 200) errors.push(`Easy questions ${difficulties.Easy} < 200`);
if (difficulties.Medium < 400) errors.push(`Medium questions ${difficulties.Medium} < 400`);
if (difficulties.Hard < 400) errors.push(`Hard questions ${difficulties.Hard} < 400`);

// 3. Unique IDs
const seenIds = new Set<string>();
const duplicateIds: string[] = [];
questions.forEach((q) => {
  if (seenIds.has(q.id)) {
    duplicateIds.push(q.id);
  }
  seenIds.add(q.id);
});
if (duplicateIds.length > 0) {
  errors.push(`Found ${duplicateIds.length} duplicate IDs: ${duplicateIds.slice(0, 5).join(", ")}`);
} else {
  console.log("✓ No duplicate IDs");
}

// 4. Unique pseudocode
const seenCode = new Set<string>();
const duplicateCodeIds: string[] = [];
questions.forEach((q) => {
  const norm = q.pseudocode.trim().replace(/\r\n/g, "\n");
  if (seenCode.has(norm)) {
    duplicateCodeIds.push(q.id);
  }
  seenCode.add(norm);
});
if (duplicateCodeIds.length > 0) {
  errors.push(`Found ${duplicateCodeIds.length} duplicate pseudocode snippets`);
} else {
  console.log("✓ No duplicate pseudocode");
}

// 5. Options verification
let optionErrors = 0;
questions.forEach((q) => {
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    optionErrors++;
  }
  const uniqueOpts = new Set(q.options);
  if (uniqueOpts.size !== 4) {
    optionErrors++;
  }
  if (q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
    optionErrors++;
  }
});
if (optionErrors > 0) {
  errors.push(`Found ${optionErrors} option/index errors`);
} else {
  console.log("✓ All questions contain exactly 4 distinct options and valid answer index");
}

// 6. Completeness of all fields
let fieldErrors = 0;
const validCompanies = new Set(["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Cognizant"]);
const validTopics = new Set([
  "Operators",
  "Bitwise",
  "Loops",
  "Arrays",
  "Nested Conditions",
  "Series",
  "Profit / Loss",
  "Queue Logic",
  "Mathematical Logic",
]);

questions.forEach((q) => {
  if (!q.title || !q.title.trim()) fieldErrors++;
  if (!q.explanation || !q.explanation.trim()) fieldErrors++;
  if (!q.pythonCode || !q.pythonCode.trim()) fieldErrors++;
  if (!validCompanies.has(q.company)) fieldErrors++;
  if (q.year < 2015 || q.year > 2026) fieldErrors++;
  if (!validTopics.has(q.topic)) fieldErrors++;
  if (!Array.isArray(q.dryRun) || q.dryRun.length === 0) fieldErrors++;
});

if (fieldErrors > 0) {
  errors.push(`Found ${fieldErrors} missing or invalid required fields`);
} else {
  console.log("✓ All questions contain explanations, dry-runs, valid companies, topics & years");
  console.log("✓ All questions contain Python equivalent code");
}

if (errors.length > 0) {
  console.error("\n❌ Validation Failed with errors:");
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
} else {
  console.log("\n==========================================");
  console.log("✓ 1000+ questions validated");
  console.log("✓ No duplicate IDs");
  console.log("✓ No duplicate pseudocode");
  console.log("✓ All questions contain 4 options");
  console.log("✓ All questions contain explanations");
  console.log("✓ Database 100% Validated for Production");
  console.log("==========================================\n");
}
