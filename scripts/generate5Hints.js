const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/pythonProblems.json');
console.log('Reading', filePath, '...');
const problems = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

console.log('Total problems to process:', problems.length);

const TOPIC_HINTS = {
  "Arrays": [
    "Hint 1: Consider the brute force approach first—how would you check all elements or pairs?",
    "Hint 2: Can you optimize with a single pass or hash map to store frequencies/indices?",
    "Hint 3: Watch out for edge cases: empty array, single element, negative numbers, or all identical elements.",
    "Hint 4: Aim for O(n) linear time complexity with O(1) or O(n) auxiliary space.",
    "Hint 5: Look for optimal array patterns like Two Pointers, Prefix Sums, or Kadane's maximum subarray algorithm."
  ],
  "Strings": [
    "Hint 1: Analyze character frequencies, ASCII ordinals, or palindrome symmetry.",
    "Hint 2: Would an array of size 26 or a hash map help keep track of counts in O(1) space?",
    "Hint 3: Be mindful of edge cases: empty strings, uppercase/lowercase matching, and special characters.",
    "Hint 4: Aim for O(n) time complexity by avoiding quadratic string concatenation in loops.",
    "Hint 5: Consider two pointers from both ends or sliding window substring expansion."
  ],
  "Two Pointers": [
    "Hint 1: Is the array sorted? If not, does sorting first simplify pointer movement?",
    "Hint 2: Position one pointer at the start and another at the end, converging based on comparisons.",
    "Hint 3: Handle edge cases: duplicate values, negative elements, or arrays with fewer than two elements.",
    "Hint 4: Strive for O(n) pointer traversal time complexity after O(n log n) sorting.",
    "Hint 5: Ensure loop invariants hold and pointers do not cross or skip valid candidate pairs."
  ],
  "Sliding Window": [
    "Hint 1: Identify the window state—what condition determines if the current window [left, right] is valid?",
    "Hint 2: Expand the right pointer to include elements, updating frequency or sum accumulators.",
    "Hint 3: When the window invariant is violated, increment the left pointer to shrink the window.",
    "Hint 4: Record the maximum or minimum window length at each valid transition.",
    "Hint 5: Each element enters and exits the window at most once, guaranteeing O(n) linear overall time."
  ],
  "Prefix Sum": [
    "Hint 1: Precalculate running cumulative sums so range sum query sum(i..j) is answered in O(1).",
    "Hint 2: Use the identity: subarray_sum(i..j) = prefix[j] - prefix[i - 1].",
    "Hint 3: Use a hashmap to store (prefix_sum mod k) frequencies for divisible subarray problems.",
    "Hint 4: Don't forget to initialize your hashmap with {0: 1} or {0: -1} to count subarrays starting at index 0.",
    "Hint 5: Reduces nested O(n^2) subarray iterations into a single O(n) linear scan."
  ],
  "Hashing": [
    "Hint 1: Can you trade memory for speed by storing previously seen items in a hash set or map?",
    "Hint 2: Store elements as keys and their frequencies or original indices as values.",
    "Hint 3: Check edge cases: duplicate keys, empty input, and zero/negative numbers.",
    "Hint 4: Hash operations provide average O(1) time lookups, enabling overall O(n) runtime.",
    "Hint 5: Look for complements—e.g. for target sum S, check if (S - current) already exists in the set."
  ],
  "Greedy": [
    "Hint 1: Does making the locally optimal choice at each step guarantee the globally optimal outcome?",
    "Hint 2: Consider sorting the input by start time, end time, ratio, or value first.",
    "Hint 3: Watch for edge cases: equal priorities, zero weights, or single element inputs.",
    "Hint 4: Aim for O(n log n) due to sorting, followed by a linear O(n) greedy scan.",
    "Hint 5: Prove greedy choice property—would swapping any adjacent choice ever yield a better result?"
  ],
  "Backtracking": [
    "Hint 1: Model the problem as a state-space decision tree where each choice branches forward.",
    "Hint 2: Implement choose -> explore (recursive call) -> un-choose (undo state modification).",
    "Hint 3: Define clear base cases when a valid solution is constructed or depth limit is reached.",
    "Hint 4: Add pruning checks early to eliminate branches that can never lead to a valid answer.",
    "Hint 5: Watch out for deep recursion limits and ensure you pass copies of state lists."
  ],
  "Stack": [
    "Hint 1: Use LIFO order: the most recently seen element should be evaluated first.",
    "Hint 2: For next-greater or nearest-smaller problems, consider a Monotonic Stack.",
    "Hint 3: Store indices rather than values on the stack to calculate distances between elements.",
    "Hint 4: Always check if the stack is non-empty before calling pop() or accessing the top.",
    "Hint 5: Each element is pushed and popped at most once, maintaining linear O(n) time."
  ],
  "Recursion": [
    "Hint 1: Clearly identify the base case that stops recursion and prevents infinite depth.",
    "Hint 2: Formulate how solving smaller subproblems builds up the answer for the current step.",
    "Hint 3: Handle edge cases: n = 0, n = 1, negative arguments, or empty collections.",
    "Hint 4: Be cautious of overlapping subproblems causing exponential time—consider memoization.",
    "Hint 5: Trace the call stack unwinding on a minimal test case with 2 or 3 elements."
  ],
  "Linked List": [
    "Hint 1: Use a dummy head node (dummy = ListNode(0)) to simplify head insertion and edge removals.",
    "Hint 2: Employ two pointers (fast & slow) to detect cycles or locate the middle node.",
    "Hint 3: Watch out for null pointer dereferencing: always verify `curr` and `curr.next` exist.",
    "Hint 4: Aim for O(n) time with O(1) auxiliary space without converting the list to an array.",
    "Hint 5: When reversing links, save `next_node = curr.next` before redirecting `curr.next = prev`."
  ],
  "Trees": [
    "Hint 1: Think recursively: the solution for root is often f(root.left) combined with f(root.right).",
    "Hint 2: Choose traversal order: Pre-order (root-first), In-order (sorted for BST), or Post-order (bottom-up).",
    "Hint 3: For level-order traversal, use BFS with a queue and track level size using len(queue).",
    "Hint 4: Check edge cases: empty tree (root is None), leaf node, or single-child skewed trees.",
    "Hint 5: For path sum or depth calculations, maintain current accumulated values in recursive parameters."
  ],
  "Hash Table": [
    "Hint 1: Identify what information needs fast O(1) retrieval: existence, index, or occurrence count.",
    "Hint 2: Use Python's dict or collections.Counter for streamlined frequency tracking.",
    "Hint 3: Handle edge cases: key collisions, empty collections, and duplicate values.",
    "Hint 4: Aim for O(n) total runtime and O(n) space complexity.",
    "Hint 5: Consider using a two-pass approach: first pass counts, second pass identifies the answer."
  ],
  "Sorting": [
    "Hint 1: Can sorting the array upfront turn an O(n^2) search problem into an O(n log n) solution?",
    "Hint 2: For bounded integer ranges, consider linear O(n) non-comparison sorts like Counting Sort.",
    "Hint 3: Check edge cases: already sorted array, reverse sorted, duplicates, or empty lists.",
    "Hint 4: Target standard O(n log n) comparison sorting or O(n) frequency buckets.",
    "Hint 5: After sorting, look for adjacent element properties (e.g. nums[i] == nums[i-1])."
  ],
  "Dynamic Programming": [
    "Hint 1: Define the DP state clearly: what does dp[i] or dp[i][j] represent in plain terms?",
    "Hint 2: Write down the state transition recurrence relation connecting current state to prior states.",
    "Hint 3: Establish base cases: what are the values for index 0 and 1 before the loop starts?",
    "Hint 4: Can you optimize space from an O(n) array to O(1) using only two rolling variables?",
    "Hint 5: Ensure the order of iteration computes required subproblems before they are needed."
  ],
  "Mathematics": [
    "Hint 1: Look for mathematical formulas, parity patterns, or modular arithmetic shortcuts.",
    "Hint 2: For prime factorization or divisors, iterate only up to int(sqrt(n)) instead of n.",
    "Hint 3: Handle edge cases: n = 0, n = 1, negative numbers, or integer overflow limits.",
    "Hint 4: Use Euclid's algorithm for GCD / LCM queries in logarithmic O(log(min(a, b))) time.",
    "Hint 5: Use bitwise shifts (n >> 1) or modulo properties to avoid costly arithmetic operations."
  ],
  "Monotonic Stack": [
    "Hint 1: Maintain stack elements in strictly monotonic (increasing or decreasing) order.",
    "Hint 2: While current element violates monotonicity, pop top of stack and resolve its answer.",
    "Hint 3: Push the current index onto the stack so distance and width can be computed in O(1).",
    "Hint 4: Process remaining elements on the stack after traversing the array if needed.",
    "Hint 5: Every element is pushed and popped at most once, yielding linear O(n) overall time."
  ],
  "Binary Search": [
    "Hint 1: Identify the monotonic search space [low, high] where the predicate function changes from True to False.",
    "Hint 2: Compute mid = low + (high - low) // 2 to prevent integer overflow.",
    "Hint 3: Adjust search boundaries: low = mid + 1 or high = mid - 1 based on test condition.",
    "Hint 4: Carefully verify loop condition: while low <= high vs while low < high.",
    "Hint 5: Delivers optimal O(log n) time complexity with O(1) constant auxiliary space."
  ],
  "Graphs": [
    "Hint 1: Represent the graph using an adjacency list (dict of lists) for optimal O(V + E) traversal.",
    "Hint 2: Use BFS with a deque for shortest unweighted path; use DFS for connectivity and cycles.",
    "Hint 3: Maintain a `visited` set to avoid infinite loops and cycles in undirected components.",
    "Hint 4: Handle disconnected graphs by looping through all vertices and triggering BFS/DFS.",
    "Hint 5: For topological ordering on DAGs, track in-degrees with Kahn's algorithm or post-order DFS."
  ],
  "Heaps / Priority Queue": [
    "Hint 1: Use a min-heap or max-heap (heapq in Python) for continuous min/max element access in O(1).",
    "Hint 2: For K-th largest element, maintain a min-heap of size K so the root is always the answer.",
    "Hint 3: For max-heap behavior in Python, store negated values (-val, item).",
    "Hint 4: Heap insertion and extraction take O(log k) time, yielding O(n log k) overall time.",
    "Hint 5: Ideal for streaming inputs or merging K sorted arrays/lists efficiently."
  ]
};

let enrichedCount = 0;
problems.forEach((problem) => {
  const topic = problem.topic || "Arrays";
  const defaultHints = TOPIC_HINTS[topic] || TOPIC_HINTS["Arrays"];

  let existing = Array.isArray(problem.hints) ? problem.hints : [];
  
  // Format existing hints cleanly
  let newHints = [];
  if (existing.length >= 1) {
    let h1 = existing[0].replace(/^Hint\s*\d*:\s*/i, "").trim();
    newHints.push(`Hint 1: ${h1}`);
  } else {
    newHints.push(defaultHints[0]);
  }

  if (existing.length >= 2) {
    let h2 = existing[1].replace(/^Hint\s*\d*:\s*/i, "").trim();
    newHints.push(`Hint 2: ${h2}`);
  } else {
    newHints.push(defaultHints[1]);
  }

  // Add Hints 3, 4, 5
  newHints.push(defaultHints[2]);
  newHints.push(defaultHints[3]);
  newHints.push(defaultHints[4]);

  problem.hints = newHints;
  enrichedCount++;
});

console.log(`Enriched all ${enrichedCount} problems with 5 structured hints.`);

fs.writeFileSync(filePath, JSON.stringify(problems, null, 2), 'utf-8');
console.log('Saved updated pythonProblems.json successfully.');
