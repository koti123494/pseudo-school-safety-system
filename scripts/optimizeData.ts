import fs from "fs";
import path from "path";

const rootDir = process.cwd();

// 1. Coding Problems Summary
const rawProblemsPath = path.join(rootDir, "data", "pythonProblems.json");
console.log("Reading pythonProblems.json...");
const rawProblems = JSON.parse(fs.readFileSync(rawProblemsPath, "utf-8"));

const problemSummaries = rawProblems.map((p: any) => ({
  id: p.id,
  title: p.title,
  topic: p.topic,
  difficulty: p.difficulty,
  companies: p.companies || [],
}));

const summaryPath = path.join(rootDir, "data", "codingProblemsSummary.json");
fs.writeFileSync(summaryPath, JSON.stringify(problemSummaries));
console.log(`Created codingProblemsSummary.json: ${problemSummaries.length} items (${(fs.statSync(summaryPath).size / 1024).toFixed(1)} KB)`);

// Clean pythonProblems.json of duplicate fields (problem and solutionCode)
const cleanedProblems = rawProblems.map((p: any) => {
  const copy = { ...p };
  delete copy.problem;
  delete copy.solutionCode;
  return copy;
});
fs.writeFileSync(rawProblemsPath, JSON.stringify(cleanedProblems));
console.log(`Cleaned pythonProblems.json: ${(fs.statSync(rawProblemsPath).size / 1024 / 1024).toFixed(2)} MB`);

// 2. Python Book Summary
const rawBookPath = path.join(rootDir, "data", "pythonBookData.json");
console.log("Reading pythonBookData.json...");
const rawBook = JSON.parse(fs.readFileSync(rawBookPath, "utf-8"));

const bookSummaries = rawBook.map((b: any) => ({
  id: b.id,
  chapter: b.chapter,
  title: b.title,
  slug: b.slug,
  subtitle: b.subtitle,
  category: b.category,
  readTime: b.readTime,
  keyTakeaways: b.keyTakeaways || [],
  totalExamples: (b.codeExamples || []).length,
  totalMCQs: (b.practiceMCQs || []).length,
}));

const bookSummaryPath = path.join(rootDir, "data", "pythonBookSummary.json");
fs.writeFileSync(bookSummaryPath, JSON.stringify(bookSummaries));
console.log(`Created pythonBookSummary.json: ${bookSummaries.length} items (${(fs.statSync(bookSummaryPath).size / 1024).toFixed(1)} KB)`);

// 3. Questions Summary
const rawQuestionsPath = path.join(rootDir, "data", "questions.json");
console.log("Reading questions.json...");
const rawQuestions = JSON.parse(fs.readFileSync(rawQuestionsPath, "utf-8"));

const questionSummaries = rawQuestions.map((q: any) => ({
  id: q.id,
  topic: q.topic,
  company: q.company,
  year: q.year,
  difficulty: q.difficulty,
  title: q.title,
}));

const questionSummaryPath = path.join(rootDir, "data", "questionsSummary.json");
fs.writeFileSync(questionSummaryPath, JSON.stringify(questionSummaries));
console.log(`Created questionsSummary.json: ${questionSummaries.length} items (${(fs.statSync(questionSummaryPath).size / 1024).toFixed(1)} KB)`);

console.log("Data optimization complete!");
