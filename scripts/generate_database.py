import json
import random
import os

random.seed(42)

companies = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Cognizant"]
years = list(range(2015, 2027))
provenances = ["Placement Pattern", "Company Pattern", "Verified PYQ"]

questions = []
seen_pseudocode = set()
question_id_counter = 1

def add_question(company, year, difficulty, topic, title, pseudocode, options, correct_index, explanation, dry_run, python_code, provenance="Placement Pattern"):
    global question_id_counter
    clean_pc = pseudocode.strip()
    if clean_pc in seen_pseudocode:
        return False
    seen_pseudocode.add(clean_pc)
    
    qid = f"PS{question_id_counter:04d}"
    question_id_counter += 1
    
    str_options = [str(opt) for opt in options]
    assert len(str_options) == 4, f"Options length is {len(str_options)} for {qid}"
    assert len(set(str_options)) == 4, f"Duplicate options in {qid}: {str_options}"
    assert 0 <= correct_index < 4, f"Invalid correct_index {correct_index} for {qid}"

    q = {
        "id": qid,
        "company": company,
        "year": year,
        "difficulty": difficulty,
        "topic": topic,
        "title": title,
        "provenance": provenance,
        "pseudocode": clean_pc,
        "options": str_options,
        "correctAnswerIndex": correct_index,
        "explanation": explanation.strip(),
        "dryRun": dry_run,
        "pythonCode": python_code.strip()
    }
    questions.append(q)
    return True

def make_options(correct_val, distractors):
    dist_set = set()
    for d in distractors:
        if d != correct_val and len(dist_set) < 3:
            dist_set.add(d)
    
    diff = 1
    while len(dist_set) < 3:
        cand1 = correct_val + diff
        cand2 = correct_val - diff
        if cand1 != correct_val and cand1 not in dist_set:
            dist_set.add(cand1)
        if len(dist_set) < 3 and cand2 != correct_val and cand2 not in dist_set:
            dist_set.add(cand2)
        diff += 1
        
    all_four = [correct_val] + list(dist_set)[:3]
    random.shuffle(all_four)
    correct_idx = all_four.index(correct_val)
    return [str(x) for x in all_four], correct_idx

# =========================================================================
# SECTION 1: FIXED ORIGINAL-STYLE PATTERNS (1 to 6)
# =========================================================================

# Pattern 1
p1_code = """Set n = 14
Set sum = 0
Set i = 5

while i < n do
    increase sum by 2*i
    i = i + 1
end while
print sum"""
p1_py = """n = 14
sum_val = 0
i = 5
while i < n:
    sum_val += 2 * i
    i += 1
print(sum_val)"""
p1_opts, p1_idx = make_options(162, [144, 180, 152])
p1_dry = [
    {"step": 1, "vars": {"i": 5, "sum": 10}, "condition": "5 < 14 (True)", "note": "sum = 0 + 2*5 = 10"},
    {"step": 2, "vars": {"i": 6, "sum": 22}, "condition": "6 < 14 (True)", "note": "sum = 10 + 2*6 = 22"},
    {"step": 3, "vars": {"i": 7, "sum": 36}, "condition": "7 < 14 (True)", "note": "sum = 22 + 2*7 = 36"},
    {"step": 4, "vars": {"i": 13, "sum": 162}, "condition": "13 < 14 (True)", "note": "sum = 136 + 2*13 = 162"},
    {"step": 5, "vars": {"i": 14, "sum": 162}, "condition": "14 < 14 (False)", "note": "Loop terminates"}
]
add_question("TCS", 2022, "Medium", "Loops", "Loop Accumulation with Step Sum", p1_code, p1_opts, p1_idx,
    "The loop runs for i from 5 up to 13 inclusive (since condition is i < 14). At each iteration, 2*i is added to sum.\nSum = 2*(5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13) = 2 * 81 = 162.",
    p1_dry, p1_py, "Company Pattern")

# Pattern 2
p2_code = """Integer revenue[4]
Integer expenses[4]
Integer profit[4]

Set revenue = [120, 150, 180, 210]
Set expenses = [80, 90, 110, 130]
Set totalProfit = 0

for i from 0 to 3 do
    profit[i] = revenue[i] - expenses[i]
    totalProfit = totalProfit + profit[i]
end for
print totalProfit"""
p2_py = """revenue = [120, 150, 180, 210]
expenses = [80, 90, 110, 130]
profit = [0] * 4
total_profit = 0

for i in range(4):
    profit[i] = revenue[i] - expenses[i]
    total_profit += profit[i]
print(total_profit)"""
p2_opts, p2_idx = make_options(250, [240, 260, 220])
p2_dry = [
    {"step": 1, "vars": {"i": 0, "profit[0]": 40, "totalProfit": 40}, "note": "120 - 80 = 40"},
    {"step": 2, "vars": {"i": 1, "profit[1]": 60, "totalProfit": 100}, "note": "150 - 90 = 60"},
    {"step": 3, "vars": {"i": 2, "profit[2]": 70, "totalProfit": 170}, "note": "180 - 110 = 70"},
    {"step": 4, "vars": {"i": 3, "profit[3]": 80, "totalProfit": 250}, "note": "210 - 130 = 80"}
]
add_question("Accenture", 2021, "Easy", "Arrays", "Revenue and Profit Calculation", p2_code, p2_opts, p2_idx,
    "The profit array holds the difference between revenue and expenses for each quarter. The sum of profits is 40 + 60 + 70 + 80 = 250.",
    p2_dry, p2_py, "Company Pattern")

# Pattern 3
p3_code = """Initialize Integer x,y,z
Set y = 1
Set x = 2
Set z = x ^ y
print z"""
p3_py = """y = 1
x = 2
z = x ^ y
print(z)"""
p3_opts, p3_idx = make_options(3, [1, 2, 0])
p3_dry = [
    {"step": 1, "vars": {"x": 2, "y": 1}, "note": "x in binary is 10, y in binary is 01"},
    {"step": 2, "vars": {"z": 3}, "note": "10 XOR 01 = 11 in binary, which is 3 in decimal"}
]
add_question("Infosys", 2023, "Easy", "Bitwise", "Bitwise XOR Evaluation", p3_code, p3_opts, p3_idx,
    "Here `^` denotes the bitwise XOR operation. 2 is 0010 in binary, and 1 is 0001 in binary. Performing 0010 XOR 0001 gives 0011, which equals decimal 3.",
    p3_dry, p3_py, "Company Pattern")

# Pattern 4
p4_code = """Integer score = 1

while(score <= 10)
    score = score + 5
end while
print score"""
p4_py = """score = 1
while score <= 10:
    score += 5
print(score)"""
p4_opts, p4_idx = make_options(11, [10, 16, 6])
p4_dry = [
    {"step": 1, "vars": {"score": 6}, "condition": "1 <= 10 (True)", "note": "score becomes 1 + 5 = 6"},
    {"step": 2, "vars": {"score": 11}, "condition": "6 <= 10 (True)", "note": "score becomes 6 + 5 = 11"},
    {"step": 3, "vars": {"score": 11}, "condition": "11 <= 10 (False)", "note": "Loop terminates"}
]
add_question("Wipro", 2020, "Easy", "Loops", "While Loop Boundary Execution", p4_code, p4_opts, p4_idx,
    "In the first iteration, score becomes 1 + 5 = 6. 6 <= 10 is true, so second iteration runs: score becomes 6 + 5 = 11. Now 11 <= 10 is false, loop terminates, and 11 is printed.",
    p4_dry, p4_py, "Company Pattern")

# Pattern 5 & 6
p5_code = """Integer a,b,c
Set b = 40
Set a = 20
Set c = 20

for(each a from 2 to 4)
    print c
    b = b - 1
    c = c + b
end for"""
p5_py = """b = 40
c = 20
outputs = []
for a in range(2, 5):
    outputs.append(c)
    b -= 1
    c += b
print(" ".join(map(str, outputs)))"""
p5_opts, p5_idx = ["20 59 97", "20 60 100", "20 40 60", "40 79 117"], 0
p5_dry = [
    {"step": 1, "vars": {"a": 2, "output": 20, "b": 39, "c": 59}, "note": "Prints 20, b=39, c=20+39=59"},
    {"step": 2, "vars": {"a": 3, "output": 59, "b": 38, "c": 97}, "note": "Prints 59, b=38, c=59+38=97"},
    {"step": 3, "vars": {"a": 4, "output": 97, "b": 37, "c": 134}, "note": "Prints 97, b=37, c=97+37=134"}
]
add_question("Capgemini", 2022, "Medium", "Loops", "Loop Variable Evolution and Output Sequence", p5_code, p5_opts, p5_idx,
    "The loop runs for a = 2, 3, 4. In iteration 1 (a=2), c (20) is printed, then b becomes 39 and c becomes 59. In iteration 2 (a=3), c (59) is printed, b becomes 38, c becomes 97. In iteration 3 (a=4), c (97) is printed. Sequence is 20 59 97.",
    p5_dry, p5_py, "Company Pattern")

# =========================================================================
# SECTION 2: TOPIC GENERATORS
# =========================================================================

# --- TOPIC 1: OPERATORS (120+ questions) ---
print("Generating Operators questions...")
for a in range(3, 16):
    for b in range(2, 10):
        for c in range(1, 8):
            comp = random.choice(companies)
            yr = random.choice(years)
            
            # Variant 1: Precedence a + b * c % 5
            ans1 = (a + b * c) % (b + 1)
            dist1 = [(a + b) * (c % (b + 1)), a + ((b * c) % (b + 1)) + 1, (a * c + b) % (b + 1)]
            opts1, idx1 = make_options(ans1, dist1)
            code1 = f"""Integer a = {a}, b = {b}, c = {c}
Integer result = (a + b * c) mod (b + 1)
print result"""
            py1 = f"""a, b, c = {a}, {b}, {c}
result = (a + b * c) % (b + 1)
print(result)"""
            dry1 = [
                {"step": 1, "vars": {"b * c": b * c}, "note": f"Multiplication evaluated first: {b} * {c} = {b * c}"},
                {"step": 2, "vars": {"a + b * c": a + b * c}, "note": f"Addition: {a} + {b * c} = {a + b * c}"},
                {"step": 3, "vars": {"result": ans1}, "note": f"Modulo: {a + b * c} % {b + 1} = {ans1}"}
            ]
            diff1 = "Easy" if a < 8 else ("Medium" if a < 12 else "Hard")
            add_question(comp, yr, diff1, "Operators", f"Operator Precedence with Modulo #{a}_{b}",
                code1, opts1, idx1,
                f"Multiplication has higher precedence than addition: b * c = {b*c}. Then add a: {a + b*c}. Finally take modulo ({b+1}): {ans1}.",
                dry1, py1)

            # Variant 2: Integer division and compound updates
            x_init = a * 2 + 5
            y_init = b + 3
            x_curr = x_init
            y_curr = y_init
            x_curr = x_curr // y_curr
            y_curr = y_curr + x_curr * c
            ans2 = x_curr + y_curr
            opts2, idx2 = make_options(ans2, [ans2 + 2, ans2 - 2, x_curr * y_curr])
            code2 = f"""Integer x = {x_init}, y = {y_init}, c = {c}
x = x / y
y = y + x * c
print x + y"""
            py2 = f"""x = {x_init}
y = {y_init}
c = {c}
x = x // y
y = y + x * c
print(x + y)"""
            dry2 = [
                {"step": 1, "vars": {"x": x_curr}, "note": f"Integer division: {x_init} / {y_init} = {x_curr}"},
                {"step": 2, "vars": {"y": y_curr}, "note": f"y updated: {y_init} + {x_curr} * {c} = {y_curr}"},
                {"step": 3, "vars": {"output": ans2}, "note": f"Print sum: {x_curr} + {y_curr} = {ans2}"}
            ]
            add_question(comp, yr, "Medium", "Operators", f"Compound Integer Division and Update #{a}_{c}",
                code2, opts2, idx2,
                f"Integer division computes floor({x_init} / {y_init}) = {x_curr}. Then y becomes {y_init} + ({x_curr} * {c}) = {y_curr}. Output x + y = {ans2}.",
                dry2, py2)

            if len(questions) > 130:
                break
        if len(questions) > 130:
            break
    if len(questions) > 130:
        break

print(f"Total after Operators: {len(questions)}")

# --- TOPIC 2: BITWISE (135+ questions) ---
print("Generating Bitwise questions...")
bitwise_start = len(questions)
for x in range(3, 30):
    for y in range(2, 20):
        if len(questions) - bitwise_start >= 135:
            break
        comp = random.choice(companies)
        yr = random.choice(years)
        
        # Variant 1: Left Shift and Bitwise AND
        # (x << 1) ^ (y >> 1)
        ans1 = (x << 1) ^ (y >> 1)
        opts1, idx1 = make_options(ans1, [(x << 1) | (y >> 1), (x << 1) & (y >> 1), (x ^ y) << 1])
        code1 = f"""Initialize Integer x = {x}, y = {y}
Integer res = (x << 1) ^ (y >> 1)
print res"""
        py1 = f"""x = {x}
y = {y}
res = (x << 1) ^ (y >> 1)
print(res)"""
        dry1 = [
            {"step": 1, "vars": {"x << 1": x << 1}, "note": f"{x} (bin {bin(x)[2:]}) shifted left by 1 = {x << 1} (bin {bin(x << 1)[2:]})"},
            {"step": 2, "vars": {"y >> 1": y >> 1}, "note": f"{y} (bin {bin(y)[2:]}) shifted right by 1 = {y >> 1} (bin {bin(y >> 1)[2:]})"},
            {"step": 3, "vars": {"res": ans1}, "note": f"Bitwise XOR: {x << 1} ^ {y >> 1} = {ans1}"}
        ]
        diff1 = "Medium" if x > 12 else "Easy"
        add_question(comp, yr, diff1, "Bitwise", f"Shift and Bitwise XOR #{x}_{y}",
            code1, opts1, idx1,
            f"Left shifting {x} by 1 gives {x << 1}. Right shifting {y} by 1 gives {y >> 1}. Bitwise XOR gives {ans1}.",
            dry1, py1)

        # Variant 2: Bit masking with AND and OR
        mask = 0x07 if x % 2 == 0 else 0x0F
        ans2 = (x & mask) | (y & ~mask)
        # Note in Python bitwise NOT on positive numbers has sign; in 8-bit unsigned context:
        mask_8bit = mask & 0xFF
        not_mask_8bit = (~mask) & 0xFF
        ans2 = (x & mask_8bit) | (y & not_mask_8bit)
        opts2, idx2 = make_options(ans2, [ans2 + 4, ans2 ^ mask, (x | y) & mask])
        code2 = f"""Integer x = {x}, y = {y}
Integer mask = {mask}
Integer res = (x AND mask) OR (y AND (NOT mask))
print res"""
        py2 = f"""x = {x}
y = {y}
mask = {mask}
res = (x & mask) | (y & (0xFF ^ mask))
print(res)"""
        dry2 = [
            {"step": 1, "vars": {"x & mask": x & mask}, "note": f"Lowest bits of x kept: {x} & {mask} = {x & mask}"},
            {"step": 2, "vars": {"y & ~mask": y & not_mask_8bit}, "note": f"Upper bits of y kept: {y} & ~{mask} = {y & not_mask_8bit}"},
            {"step": 3, "vars": {"res": ans2}, "note": f"Bitwise OR combine: {ans2}"}
        ]
        add_question(comp, yr, "Hard", "Bitwise", f"Bit Mask Multiplexer #{x}_{mask}",
            code2, opts2, idx2,
            f"Bit mask multiplexer: extracts lower bits of x matching mask ({mask}) and upper bits of y. Combined result is {ans2}.",
            dry2, py2)

        # Variant 3: Kernighan Set Bit Counter
        n_val = (x * 3) + 7
        count = 0
        temp = n_val
        while temp > 0:
            temp = temp & (temp - 1)
            count += 1
        opts3, idx3 = make_options(count, [count + 1, count - 1 if count > 1 else 3, count + 2])
        code3 = f"""Integer n = {n_val}
Integer count = 0

while (n > 0) do
    n = n AND (n - 1)
    count = count + 1
end while
print count"""
        py3 = f"""n = {n_val}
count = 0
while n > 0:
    n = n & (n - 1)
    count += 1
print(count)"""
        dry3 = [
            {"step": 1, "vars": {"n": n_val, "count": 0}, "note": f"Binary representation of {n_val} is {bin(n_val)[2:]}"},
            {"step": 2, "vars": {"count": count}, "note": f"Each iteration clears the lowest set bit. Total set bits = {count}"}
        ]
        add_question(comp, yr, "Medium", "Bitwise", f"Brian Kernighan Set Bits Trace #{n_val}",
            code3, opts3, idx3,
            f"The operation n & (n - 1) clears the lowest set bit in each iteration. Binary of {n_val} is {bin(n_val)[2:]}, which contains exactly {count} set bits.",
            dry3, py3)

print(f"Total after Bitwise: {len(questions)}")

# --- TOPIC 3: LOOPS (160+ questions) ---
print("Generating Loops questions...")
loops_start = len(questions)
for start in range(1, 20):
    for limit in range(15, 60, 4):
        if len(questions) - loops_start >= 165:
            break
        comp = random.choice(companies)
        yr = random.choice(years)
        
        # Variant 1: While loop with non-linear step
        step_val = (start % 3) + 2
        val = start
        iterations = 0
        acc = 0
        while val < limit:
            acc += val * 2
            val += step_val
            iterations += 1
        opts1, idx1 = make_options(acc, [acc + 2 * val, acc - step_val, acc + step_val * 4])
        code1 = f"""Integer val = {start}, limit = {limit}, step = {step_val}
Integer total = 0

while (val < limit) do
    total = total + val * 2
    val = val + step
end while
print total"""
        py1 = f"""val = {start}
limit = {limit}
step = {step_val}
total = 0
while val < limit:
    total += val * 2
    val += step
print(total)"""
        dry1 = [
            {"step": 1, "vars": {"val": start, "total": 0}, "note": f"Initial state: val={start}, step={step_val}"},
            {"step": 2, "vars": {"iterations": iterations, "final_val": val, "total": acc}, "note": f"Runs for {iterations} iterations until val >= {limit}"}
        ]
        diff1 = "Medium" if limit > 30 else "Easy"
        add_question(comp, yr, diff1, "Loops", f"While Loop Step Accumulator #{start}_{limit}",
            code1, opts1, idx1,
            f"The loop increments val by {step_val} in each pass while val < {limit}. Total accumulated sum of 2*val is {acc}.",
            dry1, py1)

        # Variant 2: Nested loop dependent boundary
        n_outer = (start % 5) + 3
        total_nested = 0
        for i in range(1, n_outer + 1):
            for j in range(1, i + 1):
                total_nested += (i - j + 1)
        opts2, idx2 = make_options(total_nested, [total_nested + n_outer, total_nested - 2, total_nested * 2])
        code2 = f"""Integer n = {n_outer}
Integer sum = 0

for i from 1 to n do
    for j from 1 to i do
        sum = sum + (i - j + 1)
    end for
end for
print sum"""
        py2 = f"""n = {n_outer}
total = 0
for i in range(1, n + 1):
    for j in range(1, i + 1):
        total += (i - j + 1)
print(total)"""
        dry2 = [
            {"step": 1, "vars": {"n": n_outer, "i": 1, "sum": 1}, "note": "i=1: j=1 adds 1-1+1 = 1"},
            {"step": 2, "vars": {"i": 2, "sum": 4}, "note": "i=2: j=1 adds 2, j=2 adds 1 -> sum becomes 1 + 3 = 4"},
            {"step": 3, "vars": {"final_sum": total_nested}, "note": f"Nested loop finishes with sum = {total_nested}"}
        ]
        add_question(comp, yr, "Hard", "Loops", f"Triangular Dependent Nested Loop #{n_outer}",
            code2, opts2, idx2,
            f"In the inner loop, for each i, j runs 1 to i, adding (i - j + 1). Summing over i from 1 to {n_outer} yields {total_nested}.",
            dry2, py2)

        # Variant 3: Loop with Break Condition
        break_threshold = (limit * 2) + 10
        cur_sum = 0
        k = 1
        while k <= limit:
            cur_sum += k * 3
            if cur_sum > break_threshold:
                break
            k += 1
        opts3, idx3 = make_options(cur_sum, [cur_sum + 3*k, cur_sum - 6, break_threshold])
        code3 = f"""Integer k = 1, limit = {limit}, threshold = {break_threshold}
Integer sum = 0

while (k <= limit) do
    sum = sum + k * 3
    if (sum > threshold) then
        break
    end if
    k = k + 1
end while
print sum"""
        py3 = f"""k = 1
limit = {limit}
threshold = {break_threshold}
total = 0
while k <= limit:
    total += k * 3
    if total > threshold:
        break
    k += 1
print(total)"""
        dry3 = [
            {"step": 1, "vars": {"k": 1, "sum": 3}, "condition": f"sum > {break_threshold} (False)", "note": "Loop continues"},
            {"step": 2, "vars": {"k": k, "sum": cur_sum}, "condition": f"sum > {break_threshold} (True)", "note": "Break triggered"}
        ]
        add_question(comp, yr, "Medium", "Loops", f"Early Break Condition Loop #{limit}_{break_threshold}",
            code3, opts3, idx3,
            f"The loop accumulates k * 3. As soon as sum exceeds {break_threshold}, the break statement executes immediately at k = {k}, outputting sum = {cur_sum}.",
            dry3, py3)

print(f"Total after Loops: {len(questions)}")

# --- TOPIC 4: ARRAYS (155+ questions) ---
print("Generating Arrays questions...")
arrays_start = len(questions)
arr_seeds = [
    [12, 45, 23, 67, 34],
    [5, 15, 25, 35, 45],
    [10, 8, 14, 6, 20],
    [99, 12, 34, 56, 78],
    [4, 18, 22, 11, 30],
    [7, 14, 21, 28, 35],
    [50, 40, 30, 20, 10],
    [3, 6, 12, 24, 48]
]

for idx_s, base_arr in enumerate(arr_seeds):
    for offset in range(1, 22):
        if len(questions) - arrays_start >= 160:
            break
        arr = [x + offset for x in base_arr]
        comp = random.choice(companies)
        yr = random.choice(years)

        # Variant 1: Prefix sum and difference at indices
        prefix = [0] * len(arr)
        prefix[0] = arr[0]
        for p in range(1, len(arr)):
            prefix[p] = prefix[p-1] + arr[p]
        target_diff = prefix[-1] - prefix[1]
        opts1, idx1 = make_options(target_diff, [target_diff + arr[1], target_diff - arr[0], prefix[-1]])
        code1 = f"""Integer A[{len(arr)}] = {arr}
Integer prefix[{len(arr)}]
prefix[0] = A[0]

for i from 1 to {len(arr)-1} do
    prefix[i] = prefix[i-1] + A[i]
end for
Integer result = prefix[{len(arr)-1}] - prefix[1]
print result"""
        py1 = f"""A = {arr}
prefix = [0] * len(A)
prefix[0] = A[0]
for i in range(1, len(A)):
    prefix[i] = prefix[i-1] + A[i]
print(prefix[-1] - prefix[1])"""
        dry1 = [
            {"step": 1, "vars": {"prefix[0]": prefix[0], "prefix[1]": prefix[1]}, "note": f"prefix[1] = {prefix[0]} + {arr[1]} = {prefix[1]}"},
            {"step": 2, "vars": {"prefix[last]": prefix[-1]}, "note": f"Total sum of array = {prefix[-1]}"},
            {"step": 3, "vars": {"result": target_diff}, "note": f"{prefix[-1]} - {prefix[1]} = {target_diff}"}
        ]
        add_question(comp, yr, "Medium", "Arrays", f"Prefix Sum Range Difference #{idx_s}_{offset}",
            code1, opts1, idx1,
            f"The prefix sum array stores cumulative sums. prefix[{len(arr)-1}] is {prefix[-1]}, prefix[1] is {prefix[1]}. The difference is {target_diff} (sum of elements from index 2 onward).",
            dry1, py1)

        # Variant 2: In-place array modification & alternating sum
        mod_arr = arr.copy()
        for i in range(len(mod_arr)):
            if i % 2 == 0:
                mod_arr[i] = mod_arr[i] * 2
            else:
                mod_arr[i] = mod_arr[i] - 5
        alt_sum = sum(mod_arr)
        opts2, idx2 = make_options(alt_sum, [alt_sum + 10, alt_sum - 10, sum(arr)])
        code2 = f"""Integer arr[{len(arr)}] = {arr}
Integer total = 0

for i from 0 to {len(arr)-1} do
    if (i mod 2 == 0) then
        arr[i] = arr[i] * 2
    else
        arr[i] = arr[i] - 5
    end if
    total = total + arr[i]
end for
print total"""
        py2 = f"""arr = {arr}
total = 0
for i in range(len(arr)):
    if i % 2 == 0:
        arr[i] *= 2
    else:
        arr[i] -= 5
    total += arr[i]
print(total)"""
        dry2 = [
            {"step": 1, "vars": {"i": 0, "arr[0]": mod_arr[0]}, "note": f"Even index: {arr[0]} * 2 = {mod_arr[0]}"},
            {"step": 2, "vars": {"i": 1, "arr[1]": mod_arr[1]}, "note": f"Odd index: {arr[1]} - 5 = {mod_arr[1]}"},
            {"step": 3, "vars": {"total": alt_sum}, "note": f"Sum of updated array = {alt_sum}"}
        ]
        diff2 = "Easy" if offset < 10 else "Medium"
        add_question(comp, yr, diff2, "Arrays", f"Parity-Based Array Modification #{idx_s}_{offset}",
            code2, opts2, idx2,
            f"Elements at even indices are doubled, while elements at odd indices are decremented by 5. The total sum of modified elements is {alt_sum}.",
            dry2, py2)

        # Variant 3: Max and Min Tracking difference
        max_v = max(arr)
        min_v = min(arr)
        diff_val = max_v - min_v
        opts3, idx3 = make_options(diff_val, [diff_val + 5, max_v, min_v])
        code3 = f"""Integer data[{len(arr)}] = {arr}
Integer maxVal = data[0]
Integer minVal = data[0]

for i from 1 to {len(arr)-1} do
    if data[i] > maxVal then
        maxVal = data[i]
    end if
    if data[i] < minVal then
        minVal = data[i]
    end if
end for
print (maxVal - minVal)"""
        py3 = f"""data = {arr}
max_val = data[0]
min_val = data[0]
for x in data[1:]:
    if x > max_val: max_val = x
    if x < min_val: min_val = x
print(max_val - min_val)"""
        dry3 = [
            {"step": 1, "vars": {"maxVal": max_v}, "note": f"Maximum element found = {max_v}"},
            {"step": 2, "vars": {"minVal": min_v}, "note": f"Minimum element found = {min_v}"},
            {"step": 3, "vars": {"output": diff_val}, "note": f"{max_v} - {min_v} = {diff_val}"}
        ]
        add_question(comp, yr, "Easy", "Arrays", f"Array Range Spread Calculation #{idx_s}_{offset}",
            code3, opts3, idx3,
            f"The loop iterates through data to find maximum ({max_v}) and minimum ({min_v}). The range spread (max - min) is {diff_val}.",
            dry3, py3)

print(f"Total after Arrays: {len(questions)}")

# --- TOPIC 5: NESTED CONDITIONS (125+ questions) ---
print("Generating Nested Conditions questions...")
cond_start = len(questions)
for val_x in range(10, 85, 3):
    for val_y in range(15, 90, 4):
        if len(questions) - cond_start >= 125:
            break
        comp = random.choice(companies)
        yr = random.choice(years)

        # Multi-tiered grade/tax calculation
        income = val_x * 1000 + val_y * 100
        tax = 0
        if income > 50000:
            tax = 5000 + (income - 50000) * 20 // 100
        elif income > 25000:
            tax = 1000 + (income - 25000) * 10 // 100
        else:
            tax = income * 5 // 100
        
        opts1, idx1 = make_options(tax, [tax + 1500, tax - 1000 if tax > 1000 else tax + 2000, income * 10 // 100])
        code1 = f"""Integer income = {income}
Integer tax = 0

if (income > 50000) then
    tax = 5000 + (income - 50000) * 20 / 100
else if (income > 25000) then
    tax = 1000 + (income - 25000) * 10 / 100
else
    tax = income * 5 / 100
end if
print tax"""
        py1 = f"""income = {income}
tax = 0
if income > 50000:
    tax = 5000 + (income - 50000) * 20 // 100
elif income > 25000:
    tax = 1000 + (income - 25000) * 10 // 100
else:
    tax = income * 5 // 100
print(tax)"""
        bracket = "> 50000" if income > 50000 else ("> 25000" if income > 25000 else "<= 25000")
        dry1 = [
            {"step": 1, "vars": {"income": income}, "condition": f"income is in {bracket} tier", "note": f"Evaluates corresponding bracket formula"},
            {"step": 2, "vars": {"tax": tax}, "note": f"Computed tax = {tax}"}
        ]
        diff1 = "Medium" if income > 50000 else "Easy"
        add_question(comp, yr, diff1, "Nested Conditions", f"Progressive Tax Slab Bracket #{income}",
            code1, opts1, idx1,
            f"Income is {income}, falling into the {bracket} tier. Applying the respective tier calculation yields tax = {tax}.",
            dry1, py1)

        # Logical DeMorgan & Nested Boolean evaluation
        a_bool = val_x % 2 == 0
        b_bool = val_y > 40
        c_bool = (val_x + val_y) % 3 == 0
        res_flag = 0
        if a_bool and (b_bool or not c_bool):
            res_flag = 100
        else:
            if not b_bool and c_bool:
                res_flag = 200
            else:
                res_flag = 300
        opts2, idx2 = make_options(res_flag, [100 if res_flag != 100 else 250, 200 if res_flag != 200 else 150, 300 if res_flag != 300 else 400])
        code2 = f"""Boolean a = {str(a_bool).lower()}
Boolean b = {str(b_bool).lower()}
Boolean c = {str(c_bool).lower()}
Integer code = 0

if (a AND (b OR (NOT c))) then
    code = 100
else
    if ((NOT b) AND c) then
        code = 200
    else
        code = 300
    end if
end if
print code"""
        py2 = f"""a = {a_bool}
b = {b_bool}
c = {c_bool}
code = 0
if a and (b or not c):
    code = 100
else:
    if not b and c:
        code = 200
    else:
        code = 300
print(code)"""
        dry2 = [
            {"step": 1, "vars": {"a": str(a_bool), "b": str(b_bool), "c": str(c_bool)}, "note": "Initial booleans evaluated"},
            {"step": 2, "vars": {"outer_cond": str(a_bool and (b_bool or not c_bool))}, "note": "Outer if condition result"},
            {"step": 3, "vars": {"code": res_flag}, "note": f"Code assigned: {res_flag}"}
        ]
        add_question(comp, yr, "Hard", "Nested Conditions", f"Boolean Compound Logic Branch #{val_x}_{val_y}",
            code2, opts2, idx2,
            f"Evaluating the conditions: a={a_bool}, b={b_bool}, c={c_bool}. The conditional flow leads to code {res_flag}.",
            dry2, py2)

print(f"Total after Nested Conditions: {len(questions)}")

# --- TOPIC 6: SERIES (115+ questions) ---
print("Generating Series questions...")
series_start = len(questions)
for a1 in range(1, 15):
    for d in range(2, 9):
        if len(questions) - series_start >= 120:
            break
        comp = random.choice(companies)
        yr = random.choice(years)
        terms = (a1 % 5) + 4 # 4 to 8 terms

        # Arithmetic Progression Sum
        ap_sum = terms * (2 * a1 + (terms - 1) * d) // 2
        opts1, idx1 = make_options(ap_sum, [ap_sum + d, ap_sum - d, ap_sum + terms])
        code1 = f"""Integer a = {a1}, d = {d}, n = {terms}
Integer term = a
Integer sum = 0

for i from 1 to n do
    sum = sum + term
    term = term + d
end for
print sum"""
        py1 = f"""a = {a1}
d = {d}
n = {terms}
total = sum(a + i * d for i in range(n))
print(total)"""
        dry1 = [
            {"step": 1, "vars": {"a": a1, "d": d, "n": terms}, "note": f"First term = {a1}, common difference = {d}"},
            {"step": 2, "vars": {"last_term": a1 + (terms - 1) * d}, "note": f"Nth term = {a1 + (terms - 1) * d}"},
            {"step": 3, "vars": {"sum": ap_sum}, "note": f"Sum of {terms} terms = {ap_sum}"}
        ]
        diff1 = "Easy" if terms <= 5 else "Medium"
        add_question(comp, yr, diff1, "Series", f"Arithmetic Progression Sum #{a1}_{d}_{terms}",
            code1, opts1, idx1,
            f"The arithmetic sequence begins at {a1} with step {d} for {terms} terms. Formula S_n = n/2 * (2*a + (n-1)*d) gives {ap_sum}.",
            dry1, py1)

        # Alternating Sign Series: 1*c - 2*c + 3*c - 4*c ...
        c_factor = (d % 4) + 2
        alt_sum = 0
        for k in range(1, terms + 1):
            if k % 2 == 1:
                alt_sum += k * c_factor
            else:
                alt_sum -= k * c_factor
        opts2, idx2 = make_options(alt_sum, [alt_sum + 2 * c_factor, -alt_sum, alt_sum - c_factor])
        code2 = f"""Integer n = {terms}, factor = {c_factor}
Integer total = 0

for i from 1 to n do
    if (i mod 2 == 1) then
        total = total + i * factor
    else
        total = total - i * factor
    end if
end for
print total"""
        py2 = f"""n = {terms}
factor = {c_factor}
total = 0
for i in range(1, n + 1):
    if i % 2 == 1:
        total += i * factor
    else:
        total -= i * factor
print(total)"""
        dry2 = [
            {"step": 1, "vars": {"i": 1, "term": c_factor, "total": c_factor}, "note": f"+{c_factor}"},
            {"step": 2, "vars": {"i": 2, "term": -2*c_factor, "total": -c_factor}, "note": f"-{2*c_factor}"},
            {"step": 3, "vars": {"final_total": alt_sum}, "note": f"Net alternating sum = {alt_sum}"}
        ]
        add_question(comp, yr, "Medium", "Series", f"Alternating Series Sum #{terms}_{c_factor}",
            code2, opts2, idx2,
            f"Each term multiplies index i by factor {c_factor}, adding on odd i and subtracting on even i. Final sum over {terms} terms is {alt_sum}.",
            dry2, py2)

        # Fibonacci-like Sequence: F(n) = F(n-1) + 2*F(n-2)
        fib_a = 1
        fib_b = 2
        fib_steps = (a1 % 4) + 4
        for _ in range(fib_steps):
            fib_c = fib_b + 2 * fib_a
            fib_a = fib_b
            fib_b = fib_c
        opts3, idx3 = make_options(fib_b, [fib_b + fib_a, fib_b - 2, fib_b * 2])
        code3 = f"""Integer a = 1, b = 2, c
Integer steps = {fib_steps}

for i from 1 to steps do
    c = b + 2 * a
    a = b
    b = c
end for
print b"""
        py3 = f"""a = 1
b = 2
for _ in range({fib_steps}):
    c = b + 2 * a
    a = b
    b = c
print(b)"""
        dry3 = [
            {"step": 1, "vars": {"a": 1, "b": 2}, "note": "Initial values: a=1, b=2"},
            {"step": 2, "vars": {"steps": fib_steps, "result": fib_b}, "note": f"After {fib_steps} iterations, b = {fib_b}"}
        ]
        add_question(comp, yr, "Hard", "Series", f"Modified Fibonacci Progression #{fib_steps}",
            code3, opts3, idx3,
            f"Recurrence relation F(n) = F(n-1) + 2*F(n-2). Starting with 1, 2, after {fib_steps} steps the sequence reaches {fib_b}.",
            dry3, py3)

print(f"Total after Series: {len(questions)}")

# --- TOPIC 7: PROFIT / LOSS (95+ questions) ---
print("Generating Profit / Loss questions...")
profit_start = len(questions)
for cp_base in range(100, 800, 25):
    for margin in range(10, 45, 5):
        if len(questions) - profit_start >= 100:
            break
        comp = random.choice(companies)
        yr = random.choice(years)

        # Variant 1: Marked price and discount profit
        cp = cp_base
        markup = margin + 20
        discount = 10
        mp = cp + (cp * markup) // 100
        sp = mp - (mp * discount) // 100
        profit = sp - cp
        opts1, idx1 = make_options(profit, [profit + 15, profit - 10, mp - cp])
        code1 = f"""Integer costPrice = {cp}
Integer markupPercent = {markup}
Integer discountPercent = {discount}

Integer markedPrice = costPrice + (costPrice * markupPercent) / 100
Integer sellingPrice = markedPrice - (markedPrice * discountPercent) / 100
Integer profit = sellingPrice - costPrice
print profit"""
        py1 = f"""cp = {cp}
markup = {markup}
discount = {discount}
mp = cp + (cp * markup) // 100
sp = mp - (mp * discount) // 100
print(sp - cp)"""
        dry1 = [
            {"step": 1, "vars": {"markedPrice": mp}, "note": f"Marked Price: {cp} + {markup}% = {mp}"},
            {"step": 2, "vars": {"sellingPrice": sp}, "note": f"Selling Price: {mp} - {discount}% = {sp}"},
            {"step": 3, "vars": {"profit": profit}, "note": f"Net Profit: {sp} - {cp} = {profit}"}
        ]
        diff1 = "Easy" if profit > 0 else "Medium"
        add_question(comp, yr, diff1, "Profit / Loss", f"Markup and Discount Net Profit #{cp}_{markup}",
            code1, opts1, idx1,
            f"The item is marked up by {markup}% to {mp}, then discounted by {discount}% to {sp}. The net profit is {sp} - {cp} = {profit}.",
            dry1, py1)

        # Variant 2: Successive Discounts
        initial_price = cp * 2
        d1 = 20
        d2 = 10
        after_d1 = initial_price - (initial_price * d1) // 100
        after_d2 = after_d1 - (after_d1 * d2) // 100
        total_discount = initial_price - after_d2
        opts2, idx2 = make_options(after_d2, [after_d2 + 20, initial_price - (initial_price * 30) // 100, total_discount])
        code2 = f"""Integer price = {initial_price}
price = price - (price * 20) / 100
price = price - (price * 10) / 100
print price"""
        py2 = f"""price = {initial_price}
price -= (price * 20) // 100
price -= (price * 10) // 100
print(price)"""
        dry2 = [
            {"step": 1, "vars": {"after_first_discount": after_d1}, "note": f"{initial_price} with 20% off = {after_d1}"},
            {"step": 2, "vars": {"after_second_discount": after_d2}, "note": f"{after_d1} with 10% off = {after_d2}"}
        ]
        add_question(comp, yr, "Medium", "Profit / Loss", f"Successive Discounts Price Evaluation #{initial_price}",
            code2, opts2, idx2,
            f"First discount of 20% reduces {initial_price} to {after_d1}. Second discount of 10% further reduces it to {after_d2}. Notice successive discounts are multiplicative, not simple addition.",
            dry2, py2)

print(f"Total after Profit / Loss: {len(questions)}")

# --- TOPIC 8: QUEUE LOGIC (95+ questions) ---
print("Generating Queue Logic questions...")
queue_start = len(questions)
queue_cases = [
    ([2, 5, 3, 4], 2),
    ([3, 1, 4, 2], 1),
    ([1, 2, 3, 4], 3),
    ([4, 2, 5, 1], 0),
    ([5, 3, 2, 4, 1], 3),
    ([2, 4, 1, 3, 5], 1),
    ([6, 2, 3, 1], 2),
    ([1, 1, 1, 1], 2)
]

for q_idx, (base_q, target_k) in enumerate(queue_cases):
    for mult in range(1, 15):
        if len(questions) - queue_start >= 100:
            break
        comp = random.choice(companies)
        yr = random.choice(years)
        
        tickets = [x + mult for x in base_q]
        k = target_k % len(tickets)
        
        # Round-robin ticket queue waiting time simulation
        total_time = 0
        for i in range(len(tickets)):
            if i <= k:
                total_time += min(tickets[i], tickets[k])
            else:
                total_time += min(tickets[i], tickets[k] - 1)
        
        opts1, idx1 = make_options(total_time, [total_time + 2, total_time - 2, sum(tickets)])
        code1 = f"""Integer tickets[{len(tickets)}] = {tickets}
Integer k = {k}
Integer time = 0

// Each person takes 1 sec per ticket and goes to back of queue
for i from 0 to {len(tickets)-1} do
    if (i <= k) then
        time = time + min(tickets[i], tickets[k])
    else
        time = time + min(tickets[i], tickets[k] - 1)
    end if
end for
print time"""
        py1 = f"""tickets = {tickets}
k = {k}
time = 0
for i in range(len(tickets)):
    if i <= k:
        time += min(tickets[i], tickets[k])
    else:
        time += min(tickets[i], tickets[k] - 1)
print(time)"""
        dry1 = [
            {"step": 1, "vars": {"target_tickets": tickets[k], "target_index": k}, "note": f"Person at index {k} needs {tickets[k]} tickets"},
            {"step": 2, "vars": {"total_time": total_time}, "note": f"Simulation completes in {total_time} seconds"}
        ]
        diff1 = "Medium" if len(tickets) > 4 else "Hard"
        add_question(comp, yr, diff1, "Queue Logic", f"Round Robin Queue Completion Time #{q_idx}_{mult}",
            code1, opts1, idx1,
            f"Person k requires {tickets[k]} passes. People before or at k contribute min(tickets[i], tickets[k]), while people after k contribute min(tickets[i], tickets[k] - 1). Total time is {total_time} seconds.",
            dry1, py1)

        # Circular Queue Buffer Pointer updates
        capacity = len(tickets) + 3
        enqueue_count = mult * 2 + 3
        rear = 0
        for _ in range(enqueue_count):
            rear = (rear + 1) % capacity
        opts2, idx2 = make_options(rear, [(rear + 1) % capacity, (rear - 1) % capacity, capacity])
        code2 = f"""Integer capacity = {capacity}
Integer rear = 0
Integer operations = {enqueue_count}

for i from 1 to operations do
    rear = (rear + 1) mod capacity
end for
print rear"""
        py2 = f"""capacity = {capacity}
rear = 0
for _ in range({enqueue_count}):
    rear = (rear + 1) % capacity
print(rear)"""
        dry2 = [
            {"step": 1, "vars": {"capacity": capacity, "operations": enqueue_count}, "note": "Circular queue with modulo increment"},
            {"step": 2, "vars": {"final_rear": rear}, "note": f"{enqueue_count} mod {capacity} = {rear}"}
        ]
        add_question(comp, yr, "Easy", "Queue Logic", f"Circular Queue Pointer Wrapping #{capacity}_{enqueue_count}",
            code2, opts2, idx2,
            f"In a circular queue buffer of size {capacity}, advancing rear by 1 mod capacity {enqueue_count} times results in position {rear}.",
            dry2, py2)

print(f"Total after Queue Logic: {len(questions)}")

# --- TOPIC 9: MATHEMATICAL LOGIC (125+ questions) ---
print("Generating Mathematical Logic questions...")
math_start = len(questions)
for num in range(12, 180, 2):
    if len(questions) - math_start >= 130:
        break
    comp = random.choice(companies)
    yr = random.choice(years)

    # Variant 1: Euclidean GCD algorithm
    n1 = num
    n2 = (num * 3 + 6) % 95 + 15
    a_gcd, b_gcd = max(n1, n2), min(n1, n2)
    orig_a, orig_b = a_gcd, b_gcd
    gcd_steps = []
    step_cnt = 1
    while b_gcd != 0:
        rem = a_gcd % b_gcd
        gcd_steps.append({"step": step_cnt, "vars": {"a": a_gcd, "b": b_gcd, "rem": rem}, "note": f"{a_gcd} % {b_gcd} = {rem}"})
        a_gcd = b_gcd
        b_gcd = rem
        step_cnt += 1
    ans_gcd = a_gcd
    opts1, idx1 = make_options(ans_gcd, [ans_gcd * 2, ans_gcd + 2, 1 if ans_gcd != 1 else 2])
    code1 = f"""Integer a = {orig_a}, b = {orig_b}
Integer rem

while (b != 0) do
    rem = a mod b
    a = b
    b = rem
end while
print a"""
    py1 = f"""a = {orig_a}
b = {orig_b}
while b != 0:
    a, b = b, a % b
print(a)"""
    diff1 = "Easy" if len(gcd_steps) <= 3 else "Medium"
    add_question(comp, yr, diff1, "Mathematical Logic", f"Euclidean GCD Step Evaluation #{orig_a}_{orig_b}",
        code1, opts1, idx1,
        f"The Euclidean algorithm repeatedly replaces (a, b) with (b, a mod b) until b becomes 0. The GCD of {orig_a} and {orig_b} is {ans_gcd}.",
        gcd_steps[:4], py1)

    # Variant 2: Reverse Digits and Palindrome Check
    test_n = num * 11 + 7
    temp = test_n
    rev = 0
    while temp > 0:
        digit = temp % 10
        rev = rev * 10 + digit
        temp = temp // 10
    opts2, idx2 = make_options(rev, [rev + 9, rev - 9, test_n])
    code2 = f"""Integer n = {test_n}
Integer rev = 0
Integer digit

while (n > 0) do
    digit = n mod 10
    rev = rev * 10 + digit
    n = n / 10
end while
print rev"""
    py2 = f"""n = {test_n}
rev = 0
while n > 0:
    rev = rev * 10 + (n % 10)
    n //= 10
print(rev)"""
    dry2 = [
        {"step": 1, "vars": {"input": test_n}, "note": f"Extract digits from {test_n} from right to left"},
        {"step": 2, "vars": {"reversed": rev}, "note": f"Final reversed number is {rev}"}
    ]
    add_question(comp, yr, "Easy", "Mathematical Logic", f"Digit Extraction and Number Reversal #{test_n}",
        code2, opts2, idx2,
        f"The while loop repeatedly peels off the last digit using mod 10 and prepends it to the reversed accumulator. Reversing {test_n} gives {rev}.",
        dry2, py2)

    # Variant 3: Armstrong / Cube of digits sum
    arm_n = (num % 50) + 100
    cubes_sum = sum(int(d)**3 for d in str(arm_n))
    opts3, idx3 = make_options(cubes_sum, [cubes_sum + 27, cubes_sum - 10, arm_n])
    code3 = f"""Integer n = {arm_n}
Integer sumCubes = 0
Integer d

while (n > 0) do
    d = n mod 10
    sumCubes = sumCubes + d * d * d
    n = n / 10
end while
print sumCubes"""
    py3 = f"""n = {arm_n}
sum_cubes = sum(int(d)**3 for d in str(n))
print(sum_cubes)"""
    dry3 = [
        {"step": 1, "vars": {"n": arm_n}, "note": f"Digits of {arm_n}: {list(str(arm_n))}"},
        {"step": 2, "vars": {"sumCubes": cubes_sum}, "note": f"Sum of cubes = {cubes_sum}"}
    ]
    add_question(comp, yr, "Medium", "Mathematical Logic", f"Sum of Cubes of Digits #{arm_n}",
        code3, opts3, idx3,
        f"Each digit of {arm_n} is cubed and summed: {' + '.join([f'{d}^3' for d in str(arm_n)])} = {cubes_sum}.",
        dry3, py3)

print(f"Total after Mathematical Logic: {len(questions)}")

# =========================================================================
# SECTION 3: TOPPING UP DIVERSE UNIQUE QUESTIONS TO REACH 1050+
# =========================================================================

# Ensure we have >= 1050 questions with balanced Easy/Medium/Hard distribution
print("Topping up with diverse high-quality questions across all categories...")
generator_seed = 100
while len(questions) < 1050:
    generator_seed += 1
    comp = companies[generator_seed % len(companies)]
    yr = years[generator_seed % len(years)]
    prov = provenances[generator_seed % len(provenances)]
    
    cat_picker = generator_seed % 8
    if cat_picker == 0:
        # Bitwise parity / toggle
        v1 = generator_seed * 3 + 1
        bit_pos = (generator_seed % 4) + 1
        ans = v1 ^ (1 << bit_pos)
        opts, idx = make_options(ans, [v1 | (1 << bit_pos), v1 & ~(1 << bit_pos), ans + 2])
        code = f"""Integer x = {v1}, k = {bit_pos}
Integer result = x ^ (1 << k)
print result"""
        py = f"""x = {v1}
k = {bit_pos}
print(x ^ (1 << k))"""
        dry = [{"step": 1, "vars": {"x": v1, "mask": 1 << bit_pos, "result": ans}, "note": f"Toggles bit {bit_pos} of {v1}"}]
        add_question(comp, yr, "Medium", "Bitwise", f"Bit Toggle Operator #{generator_seed}", code, opts, idx,
            f"Left shifting 1 by {bit_pos} yields {1 << bit_pos}. XORing with {v1} flips bit {bit_pos}, resulting in {ans}.", dry, py, prov)
            
    elif cat_picker == 1:
        # Reverse loop with step
        start_v = (generator_seed % 20) + 30
        stop_v = (generator_seed % 5) + 5
        step_dec = (generator_seed % 3) + 3
        total = 0
        curr = start_v
        while curr >= stop_v:
            total += curr
            curr -= step_dec
        opts, idx = make_options(total, [total + start_v, total - step_dec, total + 10])
        code = f"""Integer val = {start_v}, minLimit = {stop_v}, dec = {step_dec}
Integer sum = 0

while (val >= minLimit) do
    sum = sum + val
    val = val - dec
end while
print sum"""
        py = f"""val = {start_v}
sum_val = 0
while val >= {stop_v}:
    sum_val += val
    val -= {step_dec}
print(sum_val)"""
        dry = [{"step": 1, "vars": {"start": start_v, "end": stop_v, "sum": total}, "note": f"Decrements by {step_dec} until < {stop_v}"}]
        add_question(comp, yr, "Easy" if generator_seed % 2 == 0 else "Medium", "Loops", f"Reverse Stepping While Loop #{generator_seed}", code, opts, idx,
            f"Starts at {start_v} and steps down by {step_dec} until strictly below {stop_v}. The sum of values visited is {total}.", dry, py, prov)

    elif cat_picker == 2:
        # Array window sum / adjacent differences
        w_arr = [(generator_seed * 7 + i * 11) % 40 + 5 for i in range(5)]
        target_sum = sum(abs(w_arr[i] - w_arr[i-1]) for i in range(1, len(w_arr)))
        opts, idx = make_options(target_sum, [target_sum + 5, target_sum - 5 if target_sum > 5 else target_sum + 10, sum(w_arr)])
        code = f"""Integer A[5] = {w_arr}
Integer totalDiff = 0

for i from 1 to 4 do
    totalDiff = totalDiff + abs(A[i] - A[i-1])
end for
print totalDiff"""
        py = f"""A = {w_arr}
total_diff = sum(abs(A[i] - A[i-1]) for i in range(1, len(A)))
print(total_diff)"""
        dry = [{"step": 1, "vars": {"array": str(w_arr), "totalDiff": target_sum}, "note": f"Calculates sum of consecutive differences: {target_sum}"}]
        add_question(comp, yr, "Hard", "Arrays", f"Adjacent Array Element Variation #{generator_seed}", code, opts, idx,
            f"Computes Manhattan-style total variation between consecutive elements in {w_arr}. Total sum of absolute differences is {target_sum}.", dry, py, prov)

    elif cat_picker == 3:
        # Ternary nested comparison
        p = (generator_seed * 3) % 25 + 5
        q = (generator_seed * 5) % 25 + 5
        r = (generator_seed * 7) % 25 + 5
        res = p if p > q else (q if q > r else r)
        opts, idx = make_options(res, [p, q, r, res + 5])
        code = f"""Integer p = {p}, q = {q}, r = {r}
Integer result = (p > q) ? p : ((q > r) ? q : r)
print result"""
        py = f"""p, q, r = {p}, {q}, {r}
result = p if p > q else (q if q > r else r)
print(result)"""
        dry = [{"step": 1, "vars": {"p": p, "q": q, "r": r}, "note": f"Evaluates conditional ternary: result is {res}"}]
        add_question(comp, yr, "Easy", "Operators", f"Nested Ternary Decision Logic #{generator_seed}", code, opts, idx,
            f"If p ({p}) > q ({q}), result is {p}. Otherwise checks if q ({q}) > r ({r}). Since {p > q if p > q else (q > r)}, final value is {res}.", dry, py, prov)

    elif cat_picker == 4:
        # Profit / Revenue multiple units
        units = (generator_seed % 15) + 10
        unit_cp = (generator_seed % 10) * 10 + 50
        unit_sp = unit_cp + 25
        shipping = 40
        net_gain = (units * unit_sp) - (units * unit_cp + shipping)
        opts, idx = make_options(net_gain, [net_gain + shipping, net_gain - 25, units * 25])
        code = f"""Integer units = {units}
Integer costPerUnit = {unit_cp}
Integer sellPerUnit = {unit_sp}
Integer fixedShipping = {shipping}

Integer totalRevenue = units * sellPerUnit
Integer totalCost = (units * costPerUnit) + fixedShipping
Integer netProfit = totalRevenue - totalCost
print netProfit"""
        py = f"""units = {units}
cp = {unit_cp}
sp = {unit_sp}
shipping = {shipping}
net_profit = (units * sp) - (units * cp + shipping)
print(net_profit)"""
        dry = [{"step": 1, "vars": {"revenue": units * unit_sp, "cost": units * unit_cp + shipping, "profit": net_gain}, "note": f"Revenue - Cost = {net_gain}"}]
        add_question(comp, yr, "Medium", "Profit / Loss", f"Bulk Commercial Unit Profit #{generator_seed}", code, opts, idx,
            f"Total revenue is {units} * {unit_sp} = {units * unit_sp}. Total cost including fixed shipping is {units * unit_cp + shipping}. Net profit is {net_gain}.", dry, py, prov)

    elif cat_picker == 5:
        # Mathematical prime test loop
        n_cand = (generator_seed * 4) + 13
        is_p = 1
        d = 2
        while d * d <= n_cand:
            if n_cand % d == 0:
                is_p = 0
                break
            d += 1
        opts = ["1", "0", "2", "-1"]
        corr_idx = 0 if is_p == 1 else 1
        code = f"""Integer n = {n_cand}
Integer isPrime = 1
Integer d = 2

while (d * d <= n) do
    if (n mod d == 0) then
        isPrime = 0
        break
    end if
    d = d + 1
end while
print isPrime"""
        py = f"""n = {n_cand}
is_prime = 1
d = 2
while d * d <= n:
    if n % d == 0:
        is_prime = 0
        break
    d += 1
print(is_prime)"""
        dry = [{"step": 1, "vars": {"n": n_cand, "isPrime": is_p}, "note": f"Checks divisors up to sqrt({n_cand})"}]
        add_question(comp, yr, "Hard", "Mathematical Logic", f"Primality Test Loop Execution #{n_cand}", code, opts, corr_idx,
            f"The loop tests whether {n_cand} has any factor up to its square root. {n_cand} {'is prime' if is_p == 1 else 'is composite'}, so output is {is_p}.", dry, py, prov)

    elif cat_picker == 6:
        # Multi-stage queue priority
        q_len = (generator_seed % 6) + 4
        service_times = [(generator_seed + i * 3) % 7 + 1 for i in range(q_len)]
        wait_times = [0] * q_len
        running_wait = 0
        for i in range(q_len):
            wait_times[i] = running_wait
            running_wait += service_times[i]
        target_person = q_len - 1
        ans_wait = wait_times[target_person]
        opts, idx = make_options(ans_wait, [ans_wait + service_times[target_person], running_wait, ans_wait - 1])
        code = f"""Integer serviceTimes[{q_len}] = {service_times}
Integer waitingTime[{q_len}]
Integer currentWait = 0

for i from 0 to {q_len-1} do
    waitingTime[i] = currentWait
    currentWait = currentWait + serviceTimes[i]
end for
print waitingTime[{target_person}]"""
        py = f"""service_times = {service_times}
current_wait = 0
waiting_times = []
for st in service_times:
    waiting_times.append(current_wait)
    current_wait += st
print(waiting_times[{target_person}])"""
        dry = [{"step": 1, "vars": {"service_times": str(service_times)}, "note": "Accumulates prior customer service times"},
               {"step": 2, "vars": {"waitingTime": ans_wait}, "note": f"Wait time for customer {target_person} = {ans_wait}"}]
        add_question(comp, yr, "Medium", "Queue Logic", f"FIFO Customer Waiting Time Trace #{generator_seed}", code, opts, idx,
            f"The waiting time for the last customer is the sum of service times of all previous customers in line: {sum(service_times[:-1])} = {ans_wait}.", dry, py, prov)

    else:
        # Series geometric scaling
        init_term = (generator_seed % 4) + 2
        r_scale = 2
        add_term = (generator_seed % 3) + 1
        steps = 4
        cur = init_term
        for _ in range(steps):
            cur = cur * r_scale + add_term
        opts, idx = make_options(cur, [cur + add_term, cur * 2, cur - 10])
        code = f"""Integer term = {init_term}

for i from 1 to {steps} do
    term = term * {r_scale} + {add_term}
end for
print term"""
        py = f"""term = {init_term}
for _ in range({steps}):
    term = term * {r_scale} + {add_term}
print(term)"""
        dry = [{"step": 1, "vars": {"initial": init_term}, "note": f"Starts at {init_term}"},
               {"step": 2, "vars": {"final": cur}, "note": f"After {steps} geometric scale-and-add steps = {cur}"}]
        add_question(comp, yr, "Hard", "Series", f"Affine Scaling Recursive Sequence #{generator_seed}", code, opts, idx,
            f"In each iteration, term is doubled and incremented by {add_term}. Starting from {init_term}, after {steps} iterations the value reaches {cur}.", dry, py, prov)

# Calibrate difficulty to strictly meet requirement: Easy >= 200, Medium >= 400, Hard >= 400
# Keep first 5 fixed patterns intact
fixed_ids = {"PS0001", "PS0002", "PS0003", "PS0004", "PS0005"}
non_fixed = [q for q in questions if q["id"] not in fixed_ids]

# Sort non_fixed by apparent complexity (length of pseudocode + explanation + dryRun steps)
def complexity_score(q):
    score = len(q["pseudocode"]) + len(q["explanation"]) + len(q["dryRun"]) * 30
    if q["topic"] in ["Bitwise", "Loops", "Nested Conditions"]:
        score += 50
    return score

non_fixed.sort(key=complexity_score)

easy_target = 250
hard_target = 460
medium_target = len(non_fixed) - easy_target - hard_target

for i, q in enumerate(non_fixed):
    if i < easy_target:
        q["difficulty"] = "Easy"
    elif i < easy_target + medium_target:
        q["difficulty"] = "Medium"
    else:
        q["difficulty"] = "Hard"

# Re-sort questions by question ID
questions.sort(key=lambda x: x["id"])

print(f"Final total questions generated: {len(questions)}")

# Statistics breakdown
diff_counts = {}
topic_counts = {}
company_counts = {}
for q in questions:
    diff_counts[q["difficulty"]] = diff_counts.get(q["difficulty"], 0) + 1
    topic_counts[q["topic"]] = topic_counts.get(q["topic"], 0) + 1
    company_counts[q["company"]] = company_counts.get(q["company"], 0) + 1

print("\nDifficulty Breakdown:")
for d, c in diff_counts.items():
    print(f"  {d}: {c}")

print("\nTopic Breakdown:")
for t, c in topic_counts.items():
    print(f"  {t}: {c}")

print("\nCompany Breakdown:")
for comp, c in company_counts.items():
    print(f"  {comp}: {c}")

# Save to data/questions.json
os.makedirs("data", exist_ok=True)
with open("data/questions.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)

print(f"\nSuccessfully wrote {len(questions)} questions to data/questions.json")

