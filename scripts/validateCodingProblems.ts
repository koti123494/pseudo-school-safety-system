import fs from "fs";
import path from "path";
import { CodingProblem, CODING_TOPICS } from "../types";

async function validateCodingProblems() {
  console.log("Starting Coding Questions Database Validation...\n");

  const combinedPath = path.join(process.cwd(), "data", "pythonProblems.json");
  if (!fs.existsSync(combinedPath)) {
    console.error(`ERROR: Master file ${combinedPath} does not exist!`);
    process.exit(1);
  }

  const raw = fs.readFileSync(combinedPath, "utf-8");
  const problems: CodingProblem[] = JSON.parse(raw);

  console.log(`Total Problems in Database: ${problems.length}`);

  // 1. Minimum 2000 questions check
  if (problems.length < 2000) {
    console.error(`FAILED: Expected at least 2000 problems, found ${problems.length}`);
    process.exit(1);
  } else {
    console.log(`✓ Requirement Passed: Minimum 2000 questions (Found: ${problems.length})`);
  }

  // 2. Unique IDs check
  const idSet = new Set<string>();
  const duplicates: string[] = [];
  for (const p of problems) {
    if (idSet.has(p.id)) {
      duplicates.push(p.id);
    }
    idSet.add(p.id);
  }

  if (duplicates.length > 0) {
    console.error(`FAILED: Duplicate IDs found: ${duplicates.slice(0, 10).join(", ")}`);
    process.exit(1);
  } else {
    console.log(`✓ Requirement Passed: All ${idSet.size} problem IDs are strictly unique`);
  }

  // 3. Minimum 100 questions per topic check
  const topicCounts: Record<string, number> = {};
  for (const t of CODING_TOPICS) {
    topicCounts[t] = 0;
  }

  for (const p of problems) {
    topicCounts[p.topic] = (topicCounts[p.topic] || 0) + 1;
  }

  let allTopicsPassed = true;
  for (const t of CODING_TOPICS) {
    const count = topicCounts[t] || 0;
    if (count < 100) {
      console.error(`FAILED: Topic "${t}" has only ${count} questions (Minimum 100 required)`);
      allTopicsPassed = false;
    } else {
      console.log(`  - ${t.padEnd(25)} : ${count} questions (>=100 ✓)`);
    }
  }

  if (!allTopicsPassed) {
    process.exit(1);
  }
  console.log(`✓ Requirement Passed: All 20 topics have at least 100 questions`);

  // 4. Content completeness check
  let invalidCount = 0;
  for (const p of problems) {
    if (!p.id || !p.title || !p.topic || !p.difficulty) invalidCount++;
    if (!p.description || p.description.trim().length === 0) invalidCount++;
    if (!p.inputFormat || !p.outputFormat) invalidCount++;
    if (!p.constraints || p.constraints.length === 0) invalidCount++;
    if (!p.testCases || p.testCases.length === 0) invalidCount++;
    if (!p.starterCode || !p.solution) invalidCount++;
    if (!p.timeComplexity || !p.spaceComplexity) invalidCount++;
    if (!p.explanation) invalidCount++;
  }

  if (invalidCount > 0) {
    console.error(`FAILED: ${invalidCount} problems are missing required fields`);
    process.exit(1);
  } else {
    console.log(`✓ Requirement Passed: Every question contains full metadata, test cases, and solution`);
  }

  console.log("\n=============================================");
  console.log("ALL CODING PRACTICE VALIDATION CHECKS PASSED!");
  console.log("=============================================\n");
}

validateCodingProblems();
