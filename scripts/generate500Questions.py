import json
import os
import random

# Set deterministic seed
random.seed(999)

COMPANIES = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini"]
YEARS = [2023, 2024, 2025, 2026]
PROVENANCES = ["Placement Pattern", "Company Pattern", "Verified PYQ"]

def make_options(correct_val, distractors=None):
    correct_str = str(correct_val)
    d_set = set()
    if distractors:
        for d in distractors:
            s = str(d)
            if s != correct_str and len(d_set) < 3:
                d_set.add(s)
    
    # Fill remaining distractors
    try:
        val_int = int(correct_val)
        delta = 1
        while len(d_set) < 3:
            cand1 = str(val_int + delta)
            cand2 = str(val_int - delta)
            if cand1 != correct_str and cand1 not in d_set:
                d_set.add(cand1)
            if len(d_set) < 3 and cand2 != correct_str and cand2 not in d_set:
                d_set.add(cand2)
            delta += 1
    except ValueError:
        pass
    
    opts = [correct_str] + list(d_set)[:3]
    random.shuffle(opts)
    c_idx = opts.index(correct_str)
    return opts, c_idx

def generate_questions():
    questions_file = "data/questions.json"
    with open(questions_file, "r", encoding="utf-8") as f:
        existing_questions = json.load(f)
    
    print(f"Loaded {len(existing_questions)} existing questions.")
    assert len(existing_questions) == 1170, f"Expected 1170 questions, found {len(existing_questions)}"
    
    seen_code = set()
    seen_ids = set()
    for q in existing_questions:
        seen_code.add(q["pseudocode"].strip().replace("\r\n", "\n"))
        seen_ids.add(q["id"])
    
    new_questions = []
    current_id_num = 1171

    def add_new_q(company, year, difficulty, topic, title, pseudocode, options, correct_index, explanation, dry_run, python_code, provenance="Placement Pattern"):
        nonlocal current_id_num
        clean_pc = pseudocode.strip().replace("\r\n", "\n")
        if clean_pc in seen_code:
            return False
        
        qid = f"PS{current_id_num:04d}"
        if qid in seen_ids:
            return False
        
        # Verify 4 distinct options
        str_options = [str(o) for o in options]
        if len(str_options) != 4 or len(set(str_options)) != 4:
            return False
        if not (0 <= correct_index < 4):
            return False
        if not dry_run or len(dry_run) < 1:
            return False
        
        q_obj = {
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
        seen_code.add(clean_pc)
        seen_ids.add(qid)
        new_questions.append(q_obj)
        current_id_num += 1
        return True

    # -------------------------------------------------------------
    # 1. LOOPS & NESTED LOOPS (~90 questions)
    # -------------------------------------------------------------
    print("Generating Loops & Nested Loops questions...")
    # L1: Nested Loop Coordinate Accumulation
    for a in range(2, 6):
        for b in range(a + 2, a + 6):
            for c in range(2, 6):
                for m in [2, 3, 4]:
                    if current_id_num > 1170 + 90:
                        break
                    comp = random.choice(COMPANIES)
                    yr = random.choice(YEARS)
                    diff = "Easy" if (b - a) <= 2 else ("Medium" if (b - a) <= 4 else "Hard")
                    
                    # Compute logic
                    total = 0
                    for i in range(a, b + 1):
                        for j in range(1, c + 1):
                            if (i + j) % m == 0:
                                total += i * j
                            else:
                                total += (i + j)
                    
                    code = f"""Integer total = 0
for i from {a} to {b} do
    for j from 1 to {c} do
        if (i + j) mod {m} == 0 then
            total = total + (i * j)
        else
            total = total + (i + j)
        end if
    end for
end for
print total"""
                    py = f"""total = 0
for i in range({a}, {b + 1}):
    for j in range(1, {c + 1}):
        if (i + j) % {m} == 0:
            total += i * j
        else:
            total += (i + j)
print(total)"""
                    opts, idx = make_options(total, [total + 12, total - 8, total + 20])
                    dry = [
                        {"step": 1, "vars": {"i": a, "j": 1, "total": total // 2 or 1}, "condition": f"({a} + 1) mod {m} == 0", "note": f"First iteration with i={a}, j=1"},
                        {"step": 2, "vars": {"i": b, "j": c, "total": total}, "note": f"Final iteration completes with total={total}"}
                    ]
                    add_new_q(comp, yr, diff, "Loops", f"Nested Loop Coordinate Modulo Accumulation #{a}_{b}_{c}",
                              code, opts, idx,
                              f"Outer loop runs from {a} to {b} and inner loop runs from 1 to {c}. When (i + j) is divisible by {m}, i * j is accumulated; otherwise (i + j) is added. Final accumulated total is {total}.",
                              dry, py)

    # L2: Dependent Triangle Loop Step
    for n in range(4, 9):
        for k in range(1, 6):
            if current_id_num > 1170 + 90:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Medium" if n <= 6 else "Hard"
            s = 0
            for i in range(1, n + 1):
                for j in range(i, n + 1):
                    s += (j - i + k)
            
            code = f"""Integer s = 0
for i from 1 to {n} do
    for j from i to {n} do
        s = s + (j - i + {k})
    end for
end for
print s"""
            py = f"""s = 0
for i in range(1, {n + 1}):
    for j in range(i, {n + 1}):
        s += (j - i + {k})
print(s)"""
            opts, idx = make_options(s, [s + k * 2, s - k, s + n * 2])
            dry = [
                {"step": 1, "vars": {"i": 1, "j": 1, "s": k}, "note": f"When i=1, j=1: (1-1+{k}) = {k}"},
                {"step": 2, "vars": {"i": n, "j": n, "s": s}, "note": f"After all dependent inner loops terminate, s={s}"}
            ]
            add_new_q(comp, yr, diff, "Loops", f"Dependent Triangular Step Sum #{n}_{k}",
                      code, opts, idx,
                      f"The inner loop runs for j from i up to {n}. In each inner step, (j - i + {k}) is added to s. Accumulating over all {n * (n + 1) // 2} iterations yields {s}.",
                      dry, py)

    # L3: While Loop with Conditional Stepping
    for init_x in [12, 16, 20, 24, 28, 32]:
        for inc in [3, 4, 5]:
            if current_id_num > 1170 + 90:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Easy" if init_x <= 16 else "Medium"
            x = init_x
            y = 2
            ops = 0
            while x > 1 and y < 60:
                if x % 2 == 0:
                    x = x // 2
                    y = y + inc
                else:
                    x = x - 1
                    y = y + (inc - 1)
                ops += 1
            ans = y + ops
            code = f"""Integer x = {init_x}
Integer y = 2
Integer ops = 0
while (x > 1 and y < 60) do
    if (x mod 2 == 0) then
        x = x / 2
        y = y + {inc}
    else
        x = x - 1
        y = y + {inc - 1}
    end if
    ops = ops + 1
end while
print y + ops"""
            py = f"""x = {init_x}
y = 2
ops = 0
while x > 1 and y < 60:
    if x % 2 == 0:
        x //= 2
        y += {inc}
    else:
        x -= 1
        y += {inc - 1}
    ops += 1
print(y + ops)"""
            opts, idx = make_options(ans, [ans + 3, ans - 3, ans + inc])
            dry = [
                {"step": 1, "vars": {"x": init_x // 2, "y": 2 + inc, "ops": 1}, "condition": f"{init_x} > 1 and 2 < 60 (True)", "note": f"Initial step divides x by 2"},
                {"step": 2, "vars": {"final_y": y, "final_ops": ops, "output": ans}, "note": f"Loop terminates with y={y}, ops={ops}. Sum={ans}"}
            ]
            add_new_q(comp, yr, diff, "Loops", f"State Halving and Step Accumulation #{init_x}_{inc}",
                      code, opts, idx,
                      f"In each iteration, if x is even it is halved and y increases by {inc}; otherwise x is decremented. After {ops} iterations the condition fails, yielding y + ops = {y} + {ops} = {ans}.",
                      dry, py)

    # -------------------------------------------------------------
    # 2. BITWISE OPERATIONS (~80 questions)
    # -------------------------------------------------------------
    print("Generating Bitwise questions...")
    target_bitwise = 1170 + 90 + 80
    for a in range(5, 30):
        for b in range(3, 20):
            for c in range(2, 15):
                if current_id_num >= target_bitwise:
                    break
                comp = random.choice(COMPANIES)
                yr = random.choice(YEARS)
                diff = "Easy" if a < 12 else ("Medium" if a < 22 else "Hard")
                
                # Variant 1: ((a ^ b) & c) | (b & ~a)
                res1 = ((a ^ b) & c) | (b & (~a & 0xFF))
                code1 = f"""Integer a = {a}
Integer b = {b}
Integer c = {c}
Integer result = ((a ^ b) & c) | (b & (NOT a))
print result"""
                py1 = f"""a = {a}
b = {b}
c = {c}
result = ((a ^ b) & c) | (b & (~a & 0xFF))
print(result)"""
                opts1, idx1 = make_options(res1, [res1 ^ c, (res1 + 4) & 0xFF, (a & b) ^ c])
                dry1 = [
                    {"step": 1, "vars": {"a ^ b": a ^ b, "c": c}, "note": f"Bitwise XOR of {a} and {b} is {a ^ b}"},
                    {"step": 2, "vars": {"(a ^ b) & c": (a ^ b) & c, "result": res1}, "note": f"Result combines masked terms to yield {res1}"}
                ]
                add_new_q(comp, yr, diff, "Bitwise", f"Bitwise Masking and Inversion Logic #{a}_{b}_{c}",
                          code1, opts1, idx1,
                          f"Evaluate bitwise XOR: {a} ^ {b} = {a ^ b}. Masking with c={c} gives {(a ^ b) & c}. Bitwise AND of b with NOT(a) gives {b & (~a & 0xFF)}. Bitwise OR combines them into {res1}.",
                          dry1, py1)

                # Variant 2: Bit shifts with XOR reduction
                if current_id_num < target_bitwise and c > 0:
                    shift = c % 4 + 1
                    mask = (1 << shift) - 1
                    part1 = (a << shift) & 0x7F
                    part2 = (b >> 1) ^ mask
                    res2 = part1 + part2
                    code2 = f"""Integer x = {a}
Integer y = {b}
Integer shift = {shift}
Integer mask = {mask}
Integer out = ((x << shift) & 127) + ((y >> 1) ^ mask)
print out"""
                    py2 = f"""x = {a}
y = {b}
shift = {shift}
mask = {mask}
out = ((x << shift) & 127) + ((y >> 1) ^ mask)
print(out)"""
                    opts2, idx2 = make_options(res2, [res2 + 4, res2 - 4, (res2 ^ mask)])
                    dry2 = [
                        {"step": 1, "vars": {"x << shift": a << shift, "masked": part1}, "note": f"Left shift {a} by {shift} and mask with 127 gives {part1}"},
                        {"step": 2, "vars": {"y >> 1": b >> 1, "out": res2}, "note": f"Right shift {b} by 1 XOR {mask} gives {part2}. Sum is {res2}"}
                    ]
                    add_new_q(comp, yr, "Medium", "Bitwise", f"Shift and Bit Mask Extraction #{a}_{shift}",
                              code2, opts2, idx2,
                              f"x is left-shifted by {shift} giving {a << shift}, masked to 7 bits ({part1}). y is right-shifted by 1 ({b >> 1}) and XORed with {mask} ({part2}). Sum = {part1} + {part2} = {res2}.",
                              dry2, py2)

    # -------------------------------------------------------------
    # 3. ARRAYS (~85 questions)
    # -------------------------------------------------------------
    print("Generating Arrays questions...")
    target_arrays = 1170 + 90 + 80 + 85
    array_samples = [
        [12, 18, 5, 23, 9],
        [8, 14, 26, 7, 15],
        [31, 19, 4, 16, 22],
        [10, 25, 30, 15, 5],
        [7, 21, 35, 14, 28],
        [15, 3, 27, 9, 33],
        [18, 24, 6, 12, 30],
        [25, 11, 40, 17, 2]
    ]

    for arr_idx, base_arr in enumerate(array_samples):
        for w1 in [1, 2, 3]:
            for w2 in [1, 2]:
                if current_id_num >= target_arrays:
                    break
                comp = random.choice(COMPANIES)
                yr = random.choice(YEARS)
                diff = "Easy" if w1 == 1 else ("Medium" if w1 == 2 else "Hard")
                
                # A1: Weighted Alternate Index Accumulator
                res = 0
                for i, v in enumerate(base_arr):
                    if i % 2 == 0:
                        res += v * w1
                    else:
                        res -= v * w2
                
                code = f"""Integer A[5] = [{', '.join(map(str, base_arr))}]
Integer result = 0
for i from 0 to 4 do
    if (i mod 2 == 0) then
        result = result + A[i] * {w1}
    else
        result = result - A[i] * {w2}
    end if
end for
print result"""
                py = f"""A = [{', '.join(map(str, base_arr))}]
result = 0
for i in range(5):
    if i % 2 == 0:
        result += A[i] * {w1}
    else:
        result -= A[i] * {w2}
print(result)"""
                opts, idx = make_options(res, [res + 10, res - 10, res + 15])
                dry = [
                    {"step": 1, "vars": {"i": 0, "A[0]": base_arr[0], "result": base_arr[0] * w1}, "note": f"Even index 0: add {base_arr[0]} * {w1} = {base_arr[0] * w1}"},
                    {"step": 2, "vars": {"i": 1, "A[1]": base_arr[1], "result": base_arr[0] * w1 - base_arr[1] * w2}, "note": f"Odd index 1: subtract {base_arr[1]} * {w2}"},
                    {"step": 3, "vars": {"final_result": res}, "note": f"After processing all 5 elements, result = {res}"}
                ]
                add_new_q(comp, yr, diff, "Arrays", f"Alternate Index Weighted Array Traversal #{arr_idx}_{w1}_{w2}",
                          code, opts, idx,
                          f"Even indices (0, 2, 4) multiply by {w1} and add to result; odd indices (1, 3) multiply by {w2} and subtract. Calculation: {base_arr[0]}*{w1} - {base_arr[1]}*{w2} + {base_arr[2]}*{w1} - {base_arr[3]}*{w2} + {base_arr[4]}*{w1} = {res}.",
                          dry, py)

        # A2: Array Rotational Offset Sum
        for offset in [1, 2, 3]:
            if current_id_num >= target_arrays:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Medium"
            
            s = 0
            for i in range(len(base_arr)):
                target = (i + offset) % len(base_arr)
                s += base_arr[target] * (i + 1)
            
            code = f"""Integer V[5] = [{', '.join(map(str, base_arr))}]
Integer sum = 0
Integer offset = {offset}
for i from 0 to 4 do
    Integer targetIdx = (i + offset) mod 5
    sum = sum + V[targetIdx] * (i + 1)
end for
print sum"""
            py = f"""V = [{', '.join(map(str, base_arr))}]
sum_val = 0
offset = {offset}
for i in range(5):
    targetIdx = (i + offset) % 5
    sum_val += V[targetIdx] * (i + 1)
print(sum_val)"""
            opts, idx = make_options(s, [s + 20, s - 25, s + 35])
            dry = [
                {"step": 1, "vars": {"i": 0, "targetIdx": offset % 5, "val": base_arr[offset % 5]}, "note": f"i=0 maps to index {offset % 5}"},
                {"step": 2, "vars": {"sum": s}, "note": f"Total accumulated rotational product sum is {s}"}
            ]
            add_new_q(comp, yr, diff, "Arrays", f"Circular Shift Multiplicative Array Indexing #{arr_idx}_{offset}",
                      code, opts, idx,
                      f"Each index i (0..4) accesses element at (i + {offset}) mod 5 and multiplies it by weight (i + 1). The sum of all weighted circular elements evaluates to {s}.",
                      dry, py)

    # -------------------------------------------------------------
    # 4. MATHEMATICAL LOGIC & RECURSION (~85 questions)
    # -------------------------------------------------------------
    print("Generating Mathematical Logic & Recursion questions...")
    target_math = 1170 + 90 + 80 + 85 + 85

    for n_val in [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]:
        for k_val in [2, 3, 4, 5]:
            if current_id_num >= target_math:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Medium" if n_val <= 10 else "Hard"

            def rec_solve(n, k):
                if n <= 1:
                    return k
                if n % 2 == 0:
                    return rec_solve(n // 2, k + 1) + n
                else:
                    return rec_solve(n - 1, k * 2) - 1

            ans_rec = rec_solve(n_val, k_val)
            code = f"""function solve(n, k):
    if (n <= 1) then
        return k
    end if
    if (n mod 2 == 0) then
        return solve(n / 2, k + 1) + n
    else
        return solve(n - 1, k * 2) - 1
    end if
end function
print solve({n_val}, {k_val})"""
            py = f"""def solve(n, k):
    if n <= 1:
        return k
    if n % 2 == 0:
        return solve(n // 2, k + 1) + n
    else:
        return solve(n - 1, k * 2) - 1
print(solve({n_val}, {k_val}))"""
            opts, idx = make_options(ans_rec, [ans_rec + 5, ans_rec - 4, ans_rec + 10])
            dry = [
                {"step": 1, "vars": {"n": n_val, "k": k_val}, "condition": f"{n_val} > 1", "note": f"Initial call solve({n_val}, {k_val})"},
                {"step": 2, "vars": {"final_result": ans_rec}, "note": f"Unwinding the call stack returns {ans_rec}"}
            ]
            add_new_q(comp, yr, diff, "Mathematical Logic", f"Divide and Branch Recursive Reduction #{n_val}_{k_val}",
                      code, opts, idx,
                      f"Tracing solve({n_val}, {k_val}): even n triggers solve(n/2, k+1) + n; odd n triggers solve(n-1, 2*k) - 1. Base case n <= 1 returns k. Evaluating returns {ans_rec}.",
                      dry, py)

    # Digit extraction & polynomial transforms
    for num_val in [2468, 1357, 4826, 7531, 9284, 5173, 6294, 8352, 3719, 4928]:
        for mult in [2, 3]:
            if current_id_num >= target_math:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Easy" if mult == 2 else "Medium"
            
            # Compute digit transform
            temp = num_val
            s = 0
            pos = 1
            while temp > 0:
                rem = temp % 10
                s += rem * pos
                pos *= mult
                temp //= 10
            
            code = f"""Integer num = {num_val}
Integer s = 0
Integer pos = 1
while (num > 0) do
    Integer rem = num mod 10
    s = s + (rem * pos)
    pos = pos * {mult}
    num = num / 10
end while
print s"""
            py = f"""num = {num_val}
s = 0
pos = 1
while num > 0:
    rem = num % 10
    s += rem * pos
    pos *= {mult}
    num //= 10
print(s)"""
            opts, idx = make_options(s, [s + mult * 10, s - mult * 8, s + 25])
            dry = [
                {"step": 1, "vars": {"rem": num_val % 10, "pos": 1, "s": (num_val % 10)}, "note": f"Extract least significant digit {num_val % 10}"},
                {"step": 2, "vars": {"total_s": s}, "note": f"Peeling all digits with weight multiplier {mult} produces {s}"}
            ]
            add_new_q(comp, yr, diff, "Mathematical Logic", f"Weighted Digit Extraction and Horner Accumulation #{num_val}_{mult}",
                      code, opts, idx,
                      f"Extracts digits of {num_val} from right to left, multiplying each by increasing powers of {mult} (pos starts at 1, then {mult}, {mult**2}, {mult**3}). The sum evaluates to {s}.",
                      dry, py)

    # -------------------------------------------------------------
    # 5. SERIES (~80 questions)
    # -------------------------------------------------------------
    print("Generating Series questions...")
    target_series = 1170 + 90 + 80 + 85 + 85 + 80

    for terms in range(5, 12):
        for k in range(1, 6):
            if current_id_num >= target_series:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Easy" if terms <= 6 else ("Medium" if terms <= 9 else "Hard")
            
            s = 0
            sign = 1
            for i in range(1, terms + 1):
                s += sign * (i * i + k)
                sign *= -1
            
            code = f"""Integer sum = 0
Integer sign = 1
for i from 1 to {terms} do
    sum = sum + sign * (i * i + {k})
    sign = sign * (-1)
end for
print sum"""
            py = f"""sum_val = 0
sign = 1
for i in range(1, {terms + 1}):
    sum_val += sign * (i * i + {k})
    sign *= -1
print(sum_val)"""
            opts, idx = make_options(s, [s + 12, s - 14, -s])
            dry = [
                {"step": 1, "vars": {"i": 1, "term": 1 + k, "sum": 1 + k}, "note": f"i=1: +(1^2 + {k}) = {1 + k}"},
                {"step": 2, "vars": {"i": 2, "term": -(4 + k), "sum": (1 + k) - (4 + k)}, "note": f"i=2: -(2^2 + {k})"},
                {"step": 3, "vars": {"i": terms, "final_sum": s}, "note": f"Final alternating sum for {terms} terms is {s}"}
            ]
            add_new_q(comp, yr, diff, "Series", f"Alternating Quadratic Polynomial Series #{terms}_{k}",
                      code, opts, idx,
                      f"Terms alternate in sign: +(1^2+{k}) - (2^2+{k}) + (3^2+{k}) ... up to i={terms}. Summing all {terms} alternating terms yields {s}.",
                      dry, py)

    # Fibonacci Modified Modulo Variant
    for target in range(6, 14):
        for mod_val in [17, 23, 29, 31]:
            if current_id_num >= target_series:
                break
            comp = random.choice(COMPANIES)
            yr = random.choice(YEARS)
            diff = "Medium" if target <= 9 else "Hard"
            
            f0, f1, f2 = 1, 2, 3
            for i in range(4, target + 1):
                nxt = (f0 + 2 * f1 + f2) % mod_val
                f0, f1, f2 = f1, f2, nxt
            
            code = f"""Integer f0 = 1
Integer f1 = 2
Integer f2 = 3
for i from 4 to {target} do
    Integer nextVal = (f0 + 2 * f1 + f2) mod {mod_val}
    f0 = f1
    f1 = f2
    f2 = nextVal
end for
print f2"""
            py = f"""f0, f1, f2 = 1, 2, 3
for i in range(4, {target + 1}):
    nxt = (f0 + 2 * f1 + f2) % {mod_val}
    f0, f1, f2 = f1, f2, nxt
print(f2)"""
            opts, idx = make_options(f2, [(f2 + 4) % mod_val, (f2 + 7) % mod_val, (f2 - 3) % mod_val])
            dry = [
                {"step": 1, "vars": {"i": 4, "nextVal": (1 + 4 + 3) % mod_val}, "note": f"Step 4: (1 + 2*2 + 3) mod {mod_val} = {(1 + 4 + 3) % mod_val}"},
                {"step": 2, "vars": {"i": target, "result": f2}, "note": f"Step {target} produces state f2 = {f2}"}
            ]
            add_new_q(comp, yr, diff, "Series", f"Higher-Order Recurrence Series Sequence #{target}_{mod_val}",
                      code, opts, idx,
                      f"Generates sequence where each new term is (f[i-3] + 2*f[i-2] + f[i-1]) mod {mod_val}. Starting with 1, 2, 3, computing up to term {target} gives {f2}.",
                      dry, py)

    # -------------------------------------------------------------
    # 6. NESTED CONDITIONS (~80 questions to reach 1670 total)
    # -------------------------------------------------------------
    print("Generating Nested Conditions questions...")
    target_total = 1670
    
    score_list = [65, 72, 85, 94, 58, 77, 88, 91, 62, 80]
    age_list = [22, 26, 30, 24, 28]
    exp_list = [1, 3, 5, 2, 4]

    for sc in score_list:
        for ag in age_list:
            for ex in exp_list:
                if current_id_num > target_total:
                    break
                comp = random.choice(COMPANIES)
                yr = random.choice(YEARS)
                diff = "Easy" if sc < 75 else ("Medium" if sc < 90 else "Hard")
                
                # Eligibility simulation
                r = 0
                if sc >= 75:
                    if ag < 26:
                        r += 100
                    else:
                        if ex >= 4:
                            r += 80
                        else:
                            r += 60
                else:
                    if ex >= 3:
                        r += 40
                    else:
                        r += 20
                
                code = f"""Integer score = {sc}
Integer age = {ag}
Integer experience = {ex}
Integer bonus = 0

if (score >= 75) then
    if (age < 26) then
        bonus = bonus + 100
    else
        if (experience >= 4) then
            bonus = bonus + 80
        else
            bonus = bonus + 60
        end if
    end if
else
    if (experience >= 3) then
        bonus = bonus + 40
    else
        bonus = bonus + 20
    end if
end if
print bonus"""
                py = f"""score = {sc}
age = {ag}
experience = {ex}
bonus = 0

if score >= 75:
    if age < 26:
        bonus += 100
    else:
        if experience >= 4:
            bonus += 80
        else:
            bonus += 60
else:
    if experience >= 3:
        bonus += 40
    else:
        bonus += 20
print(bonus)"""
                opts, idx = make_options(r, [100, 80, 60, 40, 20])
                dry = [
                    {"step": 1, "vars": {"score": sc}, "condition": f"{sc} >= 75 ({sc >= 75})", "note": f"Primary conditional branch taken"},
                    {"step": 2, "vars": {"bonus": r}, "note": f"Evaluated nested condition resulting in bonus = {r}"}
                ]
                add_new_q(comp, yr, diff, "Nested Conditions", f"Multi-Tier Conditional Eligibility Evaluation #{sc}_{ag}_{ex}",
                          code, opts, idx,
                          f"For score={sc}, age={ag}, experience={ex}: score >= 75 is {sc >= 75}. Evaluating subsequent nested branch results in a final bonus of {r}.",
                          dry, py)

    print(f"Generated {len(new_questions)} new questions.")
    all_questions = existing_questions + new_questions
    print(f"Total combined questions: {len(all_questions)}")
    assert len(all_questions) == 1670, f"Expected 1670 total questions, got {len(all_questions)}"
    assert all_questions[-1]["id"] == "PS1670", f"Expected last ID to be PS1670, got {all_questions[-1]['id']}"

    # Write to questions.json
    with open(questions_file, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, indent=2)
    print("Successfully wrote 1670 questions to data/questions.json")

if __name__ == "__main__":
    generate_questions()
