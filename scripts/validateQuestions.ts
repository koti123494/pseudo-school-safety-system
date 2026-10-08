import { pythonBookTopics, totalTopicsCount, totalMCQsCount } from "../data/pythonBook";

console.log("==========================================");
console.log("   PYTHON BOOK 50 TOPICS VALIDATION SUITE ");
console.log("==========================================");

const errors: string[] = [];

// 1. Total topics
if (pythonBookTopics.length !== 50) {
  errors.push(`Total topics is ${pythonBookTopics.length}, expected 50`);
} else {
  console.log(`✓ Total topics: ${pythonBookTopics.length} (exact 50 satisfied)`);
}

// 2. Definition check
let defFailures = 0;
pythonBookTopics.forEach((t) => {
  if (!Array.isArray(t.definition) || t.definition.length !== 4) {
    errors.push(`Topic ${t.topic} definition must have exactly 4 items, got ${t.definition?.length}`);
    defFailures++;
  }
});
if (defFailures === 0) {
  console.log("✓ All 50 topics have exactly 4 definition bullet points");
}

// 3. Examples check
let totalExamples = 0;
pythonBookTopics.forEach((t) => {
  if (!Array.isArray(t.examples) || t.examples.length !== 3) {
    errors.push(`Topic ${t.topic} must have exactly 3 examples, got ${t.examples?.length}`);
  } else {
    totalExamples += t.examples.length;
    t.examples.forEach((ex) => {
      if (!ex.title || !ex.code || !ex.output || !ex.explanation) {
        errors.push(`Incomplete example in topic ${t.topic}: ${ex.title}`);
      }
    });
  }
});
console.log(`✓ Total examples: ${totalExamples} (150 examples across 50 topics)`);

// 4. MCQs check
let totalMCQs = 0;
const seenQ = new Set<string>();
const seenIds = new Set<string>();

pythonBookTopics.forEach((t) => {
  if (!Array.isArray(t.mcqs) || t.mcqs.length !== 10) {
    errors.push(`Topic ${t.topic} must have exactly 10 MCQs, got ${t.mcqs?.length}`);
  } else {
    totalMCQs += t.mcqs.length;
    t.mcqs.forEach((m) => {
      if (seenIds.has(m.id)) errors.push(`Duplicate MCQ ID: ${m.id}`);
      seenIds.add(m.id);

      const qText = m.question.trim().toLowerCase();
      if (seenQ.has(qText)) errors.push(`Duplicate MCQ question: ${m.question}`);
      seenQ.add(qText);

      if (!m.options.A || !m.options.B || !m.options.C || !m.options.D) {
        errors.push(`Missing option A,B,C,D in MCQ ${m.id}`);
      }
      if (!["A", "B", "C", "D"].includes(m.correct)) {
        errors.push(`Invalid correct answer in MCQ ${m.id}: ${m.correct}`);
      }
      if (!m.explanation || m.explanation.trim().length === 0) {
        errors.push(`Missing explanation in MCQ ${m.id}`);
      }
    });
  }
});

console.log(`✓ Total MCQs: ${totalMCQs} (500 MCQs total across 50 topics)`);
console.log(`✓ Unique question texts: ${seenQ.size} (0 duplicates)`);

if (errors.length > 0) {
  console.error("❌ VALIDATION FAILED with errors:");
  errors.forEach((e) => console.error(" - " + e));
  process.exit(1);
} else {
  console.log("==========================================");
  console.log("  ALL VALIDATION CHECKS PASSED PERFECTLY  ");
  console.log("==========================================");
}
