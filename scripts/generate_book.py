import json
import os
import sys

# Import all 5 parts
from topics_part1 import topics as p1
from topics_part2 import topics as p2
from topics_part3 import topics as p3
from topics_part4 import topics as p4
from topics_part5 import topics as p5

all_topics = p1 + p2 + p3 + p4 + p5

print(f"Total topics collected: {len(all_topics)}")
assert len(all_topics) == 50, f"Expected 50 topics, got {len(all_topics)}"

# Validation
seen_questions = set()
seen_mcq_ids = set()
total_mcqs = 0
total_examples = 0

for i, t in enumerate(all_topics):
    expected_id = f"PY-TOPIC-{i+1:03d}"
    t["id"] = expected_id
    
    # Check definition
    assert len(t["definition"]) == 4, f"Topic {t['topic']} definition must have exactly 4 items, got {len(t['definition'])}"
    for d in t["definition"]:
        assert isinstance(d, str) and len(d.strip()) > 0
        
    # Check syntax
    assert isinstance(t["syntax"], str) and len(t["syntax"].strip()) > 0
    
    # Check examples
    assert len(t["examples"]) == 3, f"Topic {t['topic']} must have exactly 3 examples, got {len(t['examples'])}"
    for ex in t["examples"]:
        assert "title" in ex and "code" in ex and "output" in ex and "explanation" in ex
        total_examples += 1
        
    # Check MCQs
    assert len(t["mcqs"]) == 10, f"Topic {t['topic']} must have exactly 10 MCQs, got {len(t['mcqs'])}"
    for j, mcq in enumerate(t["mcqs"]):
        total_mcqs += 1
        mcq["id"] = f"{expected_id}-MCQ-{j+1:02d}"
        assert mcq["id"] not in seen_mcq_ids, f"Duplicate MCQ ID: {mcq['id']}"
        seen_mcq_ids.add(mcq["id"])
        
        q_text = mcq["question"].strip().lower()
        assert q_text not in seen_questions, f"Duplicate question text across topics: {mcq['question']}"
        seen_questions.add(q_text)
        
        assert set(mcq["options"].keys()) == {"A", "B", "C", "D"}, f"Invalid options keys in {mcq['id']}"
        assert mcq["correct"] in {"A", "B", "C", "D"}, f"Invalid correct answer {mcq['correct']} in {mcq['id']}"
        assert len(mcq["explanation"].strip()) > 0

print(f"Validation passed successfully!")
print(f"Total Topics: {len(all_topics)}")
print(f"Total Examples: {total_examples}")
print(f"Total MCQs: {total_mcqs}")
print(f"Unique Questions: {len(seen_questions)}")

# Write to data/pythonBook.ts
output_path = os.path.join(os.path.dirname(__file__), "..", "data", "pythonBook.ts")
os.makedirs(os.path.dirname(output_path), exist_ok=True)

ts_content = f"""// AUTO-GENERATED PYTHON BOOK DATA - 50 TOPICS, 150 EXAMPLES, 500 PLACEMENT MCQs
// Conforms to exact specifications requested by user.

export interface PythonBookExample {{
  title: string;
  code: string;
  output: string;
  explanation: string;
}}

export interface PythonBookMCQ {{
  id: string;
  question: string;
  options: {{
    A: string;
    B: string;
    C: string;
    D: string;
  }};
  correct: "A" | "B" | "C" | "D";
  explanation: string;
}}

export interface PythonTopic {{
  id: string;
  topic: string;
  topicName: string;
  definition: [string, string, string, string];
  syntax: string;
  examples: PythonBookExample[];
  mcqs: PythonBookMCQ[];
}}

export const pythonBookTopics: PythonTopic[] = {json.dumps(all_topics, indent=2)};

export const totalTopicsCount = pythonBookTopics.length;
export const totalMCQsCount = {total_mcqs};

export function getPythonTopicById(id: string): PythonTopic | undefined {{
  return pythonBookTopics.find((t) => t.id === id);
}}

export function getPythonTopicByName(name: string): PythonTopic | undefined {{
  if (!name) return undefined;
  const target = name.trim().toLowerCase();
  return pythonBookTopics.find(
    (t) => t.topic.toLowerCase() === target || t.topicName.toLowerCase() === target
  );
}}

export function searchPythonTopics(query: string): PythonTopic[] {{
  if (!query || !query.trim()) return pythonBookTopics;
  const q = query.trim().toLowerCase();
  return pythonBookTopics.filter(
    (t) =>
      t.topic.toLowerCase().includes(q) ||
      t.topicName.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q) ||
      t.definition.some((d) => d.toLowerCase().includes(q))
  );
}}
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated {output_path} ({len(ts_content)} bytes)")
