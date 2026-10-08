# Topics 11 to 20:
# 11. tuple vs set
# 12. Conditional Statements (if/elif/else)
# 13. Loops (for, while)
# 14. Functions
# 15. *args & **kwargs
# 16. Lambda Functions
# 17. Comprehensions (List/Set/Dict)
# 18. map(), filter(), reduce()
# 19. Exception Handling
# 20. File Handling

topics = [
    {
        "id": "PY-TOPIC-011",
        "topic": "tuple vs set",
        "topicName": "tuple vs set",
        "definition": [
            "Tuples are ordered and immutable sequences accessed by integer indices.",
            "Sets are unordered, mutable collections that strictly enforce unique elements.",
            "Tuples allow duplicate values and can be nested; sets discard duplicates and require hashable elements.",
            "Membership check is O(n) in tuples, but average O(1) in sets due to hashing."
        ],
        "syntax": "# Tuple: ordered, duplicates allowed, immutable\nt = (1, 2, 2, 3)\n\n# Set: unordered, unique only, mutable\ns = {1, 2, 2, 3}  # becomes {1, 2, 3}",
        "examples": [
            {
                "title": "Example 1: Order and Indexing",
                "code": "t = (10, 20, 30)\nprint('Tuple index 0:', t[0])\ns = {10, 20, 30}\n# print(s[0]) -> TypeError: 'set' object is not subscriptable",
                "output": "Tuple index 0: 10",
                "explanation": "Tuples preserve order and support indexing; sets are unordered and do not support indexing."
            },
            {
                "title": "Example 2: Mutability Comparison",
                "code": "s = {1, 2}\ns.add(3)  # Sets are mutable\nprint('Set after add:', s)\nt = (1, 2)\n# t.add(3) -> AttributeError: 'tuple' object has no attribute 'add'",
                "output": "Set after add: {1, 2, 3}",
                "explanation": "Sets can add or remove elements at runtime; tuples have a fixed structure once created."
            },
            {
                "title": "Example 3: Usability as Dict Keys",
                "code": "d = {}\nd[(1, 2)] = 'Tuple Key' # Valid: tuples are hashable\nprint(d[(1, 2)])\n# d[{1, 2}] = 'Set Key' -> TypeError: unhashable type: 'set'",
                "output": "Tuple Key",
                "explanation": "Tuples are hashable and valid dictionary keys; mutable sets cannot be hashed (use frozenset instead)."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-011-MCQ-01",
                "question": "Which statement correctly compares tuples and sets?",
                "options": {"A": "Tuples are mutable; sets are immutable", "B": "Tuples are ordered and allow duplicates; sets are unordered and disallow duplicates", "C": "Both support item indexing like coll[0]", "D": "Neither can store strings"},
                "correct": "B",
                "explanation": "Tuples retain order and duplicates; sets enforce uniqueness and lack order."
            },
            {
                "id": "PY-TOPIC-011-MCQ-02",
                "question": "Can a standard set be used as a key in a Python dictionary?",
                "options": {"A": "Yes, always", "B": "No, because sets are mutable and unhashable", "C": "Only if set contains integers", "D": "Yes, if length <= 5"},
                "correct": "B",
                "explanation": "Sets are mutable so their hash changes; frozenset must be used instead."
            },
            {
                "id": "PY-TOPIC-011-MCQ-03",
                "question": "What is the output of: print(len((1, 1, 1)), len({1, 1, 1}))?",
                "options": {"A": "3 3", "B": "3 1", "C": "1 1", "D": "1 3"},
                "correct": "B",
                "explanation": "The tuple preserves all three elements (len=3), while the set collapses duplicates to a single element (len=1)."
            },
            {
                "id": "PY-TOPIC-011-MCQ-04",
                "question": "Which of these collections is faster for checking membership: 5000 in obj?",
                "options": {"A": "tuple with 10,000 items", "B": "set with 10,000 items", "C": "Both have identical speed", "D": "tuple is faster"},
                "correct": "B",
                "explanation": "Set membership check is O(1) average; tuple membership check is O(n) linear search."
            },
            {
                "id": "PY-TOPIC-011-MCQ-05",
                "question": "Which method exists on a set but NOT on a tuple?",
                "options": {"A": "count()", "B": "index()", "C": "add()", "D": "__len__()"},
                "correct": "C",
                "explanation": "add() mutates the set by inserting an item. Tuples are immutable and lack add()."
            },
            {
                "id": "PY-TOPIC-011-MCQ-06",
                "question": "How can you convert a set 's' into a tuple in Python?",
                "options": {"A": "s.to_tuple()", "B": "tuple(s)", "C": "(s)", "D": "as_tuple(s)"},
                "correct": "B",
                "explanation": "tuple(s) constructs a new tuple from any iterable."
            },
            {
                "id": "PY-TOPIC-011-MCQ-07",
                "question": "What is the immutable counterpart of a set in Python?",
                "options": {"A": "immutableset", "B": "static_set", "C": "frozenset", "D": "fixed_set"},
                "correct": "C",
                "explanation": "frozenset creates an immutable, hashable set."
            },
            {
                "id": "PY-TOPIC-011-MCQ-08",
                "question": "What is the result of slicing a set: {1, 2, 3}[0:2]?",
                "options": {"A": "{1, 2}", "B": "TypeError: 'set' object is not subscriptable", "C": "[1, 2]", "D": "{2, 3}"},
                "correct": "B",
                "explanation": "Sets are not sequence types, so slicing raises a TypeError."
            },
            {
                "id": "PY-TOPIC-011-MCQ-09",
                "question": "Can a tuple contain a set inside it?",
                "options": {"A": "Yes, e.g. ({1, 2}, 3)", "B": "No, sets cannot be nested anywhere", "C": "Only if set is empty", "D": "Raises ValueError"},
                "correct": "A",
                "explanation": "A tuple can store any Python object, including a set: ({1, 2}, 3)."
            },
            {
                "id": "PY-TOPIC-011-MCQ-10",
                "question": "Which collection would you choose to store geographical coordinates (latitude, longitude)?",
                "options": {"A": "set, because coords are fast", "B": "tuple, because order matters and coords are fixed", "C": "list, to keep coords mutable", "D": "dictionary only"},
                "correct": "B",
                "explanation": "Coordinates require strict positional order (lat, lng) and fixed values, making tuples ideal."
            }
        ]
    },
    {
        "id": "PY-TOPIC-012",
        "topic": "Conditional Statements (if/elif/else)",
        "topicName": "Conditional Statements (if/elif/else)",
        "definition": [
            "Conditional statements control the flow of execution based on boolean truth values.",
            "Python uses if, elif (short for else-if), and else keywords followed by colons :.",
            "Indentation strictly determines the block of statements belonging to each branch.",
            "Ternary operator syntax allows compact one-line conditions: x if condition else y."
        ],
        "syntax": "if score >= 90:\n    grade = 'A'\nelif score >= 75:\n    grade = 'B'\nelse:\n    grade = 'C'\n\nstatus = 'Pass' if score >= 40 else 'Fail'",
        "examples": [
            {
                "title": "Example 1: Basic if-elif-else Decision Tree",
                "code": "marks = 82\nif marks >= 90:\n    print('Grade A')\nelif marks >= 80:\n    print('Grade B')\nelse:\n    print('Grade C')",
                "output": "Grade B",
                "explanation": "The first true condition (marks >= 80) executes, and the remaining branches are skipped."
            },
            {
                "title": "Example 2: Ternary Operator (Conditional Expression)",
                "code": "age = 19\nstatus = 'Adult' if age >= 18 else 'Minor'\nprint(status)",
                "output": "Adult",
                "explanation": "Ternary expressions evaluate to the left operand if condition is True, else the right operand."
            },
            {
                "title": "Example 3: Truthy and Falsy Value Checking",
                "code": "items = []\nif items:\n    print('Has items')\nelse:\n    print('Cart is empty')",
                "output": "Cart is empty",
                "explanation": "Empty collections ([], '', {}, set()) evaluate to False directly in boolean checks."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-012-MCQ-01",
                "question": "What is the correct syntax for an else-if branch in Python?",
                "options": {"A": "else if", "B": "elseif", "C": "elif", "D": "elsif"},
                "correct": "C",
                "explanation": "Python uses the keyword 'elif' for else-if branches."
            },
            {
                "id": "PY-TOPIC-012-MCQ-02",
                "question": "What is the output of: x = 10; print('Yes' if x > 5 else 'No')?",
                "options": {"A": "Yes", "B": "No", "C": "True", "D": "SyntaxError"},
                "correct": "A",
                "explanation": "The condition x > 5 is True, so 'Yes' is returned."
            },
            {
                "id": "PY-TOPIC-012-MCQ-03",
                "question": "Which of the following is considered Truthy in an if condition?",
                "options": {"A": "0", "B": "'' (empty string)", "C": "'0'", "D": "None"},
                "correct": "C",
                "explanation": "Any non-empty string, including '0', evaluates to True."
            },
            {
                "id": "PY-TOPIC-012-MCQ-04",
                "question": "What happens if all conditions in an if-elif chain evaluate to False and there is no else clause?",
                "options": {"A": "Raises an exception", "B": "Execution simply continues to the next statement", "C": "Program crashes", "D": "Returns None"},
                "correct": "B",
                "explanation": "If no branch matches and there is no else block, Python passes control to subsequent code."
            },
            {
                "id": "PY-TOPIC-012-MCQ-05",
                "question": "What is the output of:\nx = 5\nif x == 5:\n    pass\nprint('Done')",
                "options": {"A": "Done", "B": "Nothing is printed", "C": "SyntaxError", "D": "IndentationError"},
                "correct": "A",
                "explanation": "'pass' acts as a null statement or placeholder; execution proceeds to print('Done')."
            },
            {
                "id": "PY-TOPIC-012-MCQ-06",
                "question": "What will be printed?\na = True\nb = False\nif a or b and False:\n    print('A')\nelse:\n    print('B')",
                "options": {"A": "A", "B": "B", "C": "Error", "D": "None"},
                "correct": "A",
                "explanation": "'and' has higher precedence than 'or': (b and False) is False, then (True or False) is True, so 'A' prints."
            },
            {
                "id": "PY-TOPIC-012-MCQ-07",
                "question": "What feature was introduced in Python 3.10 as an alternative to long if-elif chains?",
                "options": {"A": "switch-case statements", "B": "match-case (Structural Pattern Matching)", "C": "when-then expressions", "D": "select-case"},
                "correct": "B",
                "explanation": "Python 3.10 introduced structural pattern matching using the 'match' and 'case' keywords."
            },
            {
                "id": "PY-TOPIC-012-MCQ-08",
                "question": "What is the output of: if [False]: print('Yes') else: print('No')?",
                "options": {"A": "Yes", "B": "No", "C": "False", "D": "Error"},
                "correct": "A",
                "explanation": "A list with an element [False] is non-empty, and all non-empty lists evaluate to True."
            },
            {
                "id": "PY-TOPIC-012-MCQ-09",
                "question": "Can you have multiple 'elif' statements attached to a single 'if'?",
                "options": {"A": "Only up to 5", "B": "Yes, arbitrarily many", "C": "No, only one elif is permitted", "D": "Only if there is no else block"},
                "correct": "B",
                "explanation": "You can chain as many elif blocks as needed after an if statement."
            },
            {
                "id": "PY-TOPIC-012-MCQ-10",
                "question": "What is the output of: print('Even' if 7 % 2 == 0 else 'Odd')?",
                "options": {"A": "Even", "B": "Odd", "C": "1", "D": "True"},
                "correct": "B",
                "explanation": "7 % 2 equals 1 (not 0), so the else branch returns 'Odd'."
            }
        ]
    },
    {
        "id": "PY-TOPIC-013",
        "topic": "Loops (for, while)",
        "topicName": "Loops (for, while)",
        "definition": [
            "Loops automate repeated execution of code blocks using for (definite) or while (indefinite) iteration.",
            "for loops iterate over iterable objects such as lists, strings, ranges, and dictionaries.",
            "break terminates the loop immediately, while continue skips to the next iteration.",
            "Python supports an optional else clause on loops that runs only if the loop terminates without break."
        ],
        "syntax": "# For loop with range\nfor i in range(5):\n    print(i)\n\n# While loop\ncount = 0\nwhile count < 3:\n    count += 1",
        "examples": [
            {
                "title": "Example 1: for Loop with range() and step",
                "code": "for i in range(2, 9, 2):\n    print(i, end=' ')",
                "output": "2 4 6 8 ",
                "explanation": "range(start, stop, step) generates integers from 2 up to 8 stepping by 2."
            },
            {
                "title": "Example 2: Loop else Clause with break",
                "code": "for n in [2, 4, 6]:\n    if n % 2 != 0:\n        print('Found odd')\n        break\nelse:\n    print('All numbers are even')",
                "output": "All numbers are even",
                "explanation": "The else block executes only if the loop finishes all iterations without encountering a break."
            },
            {
                "title": "Example 3: enumerate() for Index and Value",
                "code": "fruits = ['apple', 'banana']\nfor idx, item in enumerate(fruits):\n    print(f'{idx}: {item}')",
                "output": "0: apple\n1: banana",
                "explanation": "enumerate() produces index-value tuples, eliminating manual index tracking."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-013-MCQ-01",
                "question": "What is the output of: for i in range(1, 5): print(i, end='')?",
                "options": {"A": "12345", "B": "1234", "C": "01234", "D": "123"},
                "correct": "B",
                "explanation": "range(1, 5) generates values from 1 up to 4 (exclusive of 5)."
            },
            {
                "id": "PY-TOPIC-013-MCQ-02",
                "question": "What does the 'break' statement do inside a loop?",
                "options": {"A": "Restarts the loop from 0", "B": "Skips current iteration", "C": "Exits the innermost loop immediately", "D": "Pauses execution for 1 second"},
                "correct": "C",
                "explanation": "break prematurely terminates the loop."
            },
            {
                "id": "PY-TOPIC-013-MCQ-03",
                "question": "When does the else block of a Python while/for loop execute?",
                "options": {"A": "Whenever a break occurs", "B": "Only if the loop completes normally without a break", "C": "Before the loop starts", "D": "Every iteration"},
                "correct": "B",
                "explanation": "A loop's else clause runs only when the loop terminates naturally (not triggered by break)."
            },
            {
                "id": "PY-TOPIC-013-MCQ-04",
                "question": "What is the output of: x = 0; while x < 3: x += 1; print(x)?",
                "options": {"A": "2", "B": "3", "C": "4", "D": "Infinite loop"},
                "correct": "B",
                "explanation": "x increments from 0 -> 1 -> 2 -> 3; when x reaches 3, condition x < 3 becomes False and loop exits."
            },
            {
                "id": "PY-TOPIC-013-MCQ-05",
                "question": "What does the 'continue' statement do?",
                "options": {"A": "Exits the loop", "B": "Skips the rest of current iteration and moves to next iteration", "C": "Restarts program", "D": "Prints current value"},
                "correct": "B",
                "explanation": "continue bypasses remaining code in the loop body for current iteration."
            },
            {
                "id": "PY-TOPIC-013-MCQ-06",
                "question": "What is the output of: for i in range(5, 0, -2): print(i, end=' ')?",
                "options": {"A": "5 3 1 ", "B": "5 4 3 2 1 ", "C": "5 3 ", "D": "Empty output"},
                "correct": "A",
                "explanation": "Starting at 5, stepping by -2 yields 5, 3, 1 (stops before 0)."
            },
            {
                "id": "PY-TOPIC-013-MCQ-07",
                "question": "Which built-in function allows looping over two lists in parallel?",
                "options": {"A": "parallel()", "B": "combine()", "C": "zip()", "D": "pair()"},
                "correct": "C",
                "explanation": "zip(l1, l2) yields pairs of elements from both iterables simultaneously."
            },
            {
                "id": "PY-TOPIC-013-MCQ-08",
                "question": "What is the output of:\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i, end=' ')",
                "options": {"A": "0 1 2 ", "B": "0 2 ", "C": "1 2 ", "D": "0 "},
                "correct": "B",
                "explanation": "When i == 1, continue skips printing; 0 and 2 are printed."
            },
            {
                "id": "PY-TOPIC-013-MCQ-09",
                "question": "What will happen with: while True: pass?",
                "options": {"A": "Completes in 1 second", "B": "Runs an infinite loop consuming CPU until interrupted", "C": "SyntaxError", "D": "Exits immediately"},
                "correct": "B",
                "explanation": "A while loop with condition True and no break runs indefinitely."
            },
            {
                "id": "PY-TOPIC-013-MCQ-10",
                "question": "What does enumerate(['a', 'b'], start=1) yield on first iteration?",
                "options": {"A": "(0, 'a')", "B": "(1, 'a')", "C": "('a', 1)", "D": "[1, 'a']"},
                "correct": "B",
                "explanation": "Setting start=1 causes index counting to begin at 1."
            }
        ]
    },
    {
        "id": "PY-TOPIC-014",
        "topic": "Functions",
        "topicName": "Functions",
        "definition": [
            "Functions are reusable blocks of organized code defined using the def keyword followed by parentheses.",
            "They accept parameters, perform operations, and return values using the return statement.",
            "If a function does not have an explicit return statement, it implicitly returns None.",
            "Functions support positional arguments, keyword arguments, default parameters, and docstrings."
        ],
        "syntax": "def greet(name, msg='Hello'):\n    \"\"\"Greets a user.\"\"\"\n    return f'{msg}, {name}!'\n\nprint(greet('Koti'))",
        "examples": [
            {
                "title": "Example 1: Function with Return Value and Defaults",
                "code": "def add(a, b=10):\n    return a + b\nprint(add(5))\nprint(add(5, 20))",
                "output": "15\n25",
                "explanation": "Default parameter b=10 is used if no second argument is passed."
            },
            {
                "title": "Example 2: Returning Multiple Values as a Tuple",
                "code": "def min_max(nums):\n    return min(nums), max(nums)\nlow, high = min_max([4, 1, 9, 2])\nprint(f'Low: {low}, High: {high}')",
                "output": "Low: 1, High: 9",
                "explanation": "Returning comma-separated values packages them into a tuple, unpacked by caller."
            },
            {
                "title": "Example 3: Pass-by-Object-Reference",
                "code": "def modify(lst):\n    lst.append(99)\nnums = [1, 2]\nmodify(nums)\nprint(nums)",
                "output": "[1, 2, 99]",
                "explanation": "Mutable objects passed to functions can be mutated in-place by the function."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-014-MCQ-01",
                "question": "What is the return value of a Python function that does not include a return statement?",
                "options": {"A": "0", "B": "False", "C": "None", "D": "undefined"},
                "correct": "C",
                "explanation": "Functions without an explicit return statement return None by default."
            },
            {
                "id": "PY-TOPIC-014-MCQ-02",
                "question": "What is the danger of using a mutable default argument like def append_item(x, lst=[])?",
                "options": {"A": "SyntaxError", "B": "The default list is created once at function definition and shared across all calls", "C": "lst becomes a tuple", "D": "lst is erased after first call"},
                "correct": "B",
                "explanation": "Default arguments evaluate once at module load, so mutable defaults persist mutations between calls."
            },
            {
                "id": "PY-TOPIC-014-MCQ-03",
                "question": "What is a docstring in a Python function?",
                "options": {"A": "A comment starting with #", "B": "A string literal written as the first statement of a function for documentation", "C": "A return type annotation", "D": "A variable name"},
                "correct": "B",
                "explanation": "Triple-quoted strings placed immediately after def act as docstrings accessible via fn.__doc__."
            },
            {
                "id": "PY-TOPIC-014-MCQ-04",
                "question": "What is the output of: def f(a, b=2, c=3): return a+b+c; print(f(1, c=10))?",
                "options": {"A": "13", "B": "16", "C": "6", "D": "TypeError"},
                "correct": "A",
                "explanation": "a=1, default b=2, keyword c=10 -> 1 + 2 + 10 = 13."
            },
            {
                "id": "PY-TOPIC-014-MCQ-05",
                "question": "Can positional arguments appear AFTER keyword arguments in a function call?",
                "options": {"A": "Yes, always", "B": "No, causes SyntaxError: positional argument follows keyword argument", "C": "Only if default values exist", "D": "Only in Python 3.8+"},
                "correct": "B",
                "explanation": "Python requires all positional arguments to precede any keyword arguments in a function call."
            },
            {
                "id": "PY-TOPIC-014-MCQ-06",
                "question": "What does the '/' symbol mean in a function parameter list: def f(a, b, /, c)?",
                "options": {"A": "Division operator", "B": "Parameters before '/' are positional-only", "C": "Parameters after '/' are optional", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "In Python 3.8+, parameters before '/' cannot be passed as keyword arguments."
            },
            {
                "id": "PY-TOPIC-014-MCQ-07",
                "question": "What does the '*' symbol signify when used alone as a parameter: def f(a, *, b)?",
                "options": {"A": "Multiplication", "B": "Parameters after '*' must be passed as keyword-only arguments", "C": "b can be passed any number of times", "D": "Syntax error"},
                "correct": "B",
                "explanation": "Parameters placed after a bare '*' must be supplied using keyword syntax (e.g., f(1, b=2))."
            },
            {
                "id": "PY-TOPIC-014-MCQ-08",
                "question": "What is the output of:\ndef func(x):\n    x = 10\nval = 5\nfunc(val)\nprint(val)",
                "options": {"A": "10", "B": "5", "C": "None", "D": "15"},
                "correct": "B",
                "explanation": "Integers are immutable; reassigning x inside func rebinds local variable x without affecting val."
            },
            {
                "id": "PY-TOPIC-014-MCQ-09",
                "question": "Which keyword is used to declare a variable inside a function as referring to global scope?",
                "options": {"A": "outer", "B": "global", "C": "nonlocal", "D": "static"},
                "correct": "B",
                "explanation": "'global' informs Python that assignments to this variable should target module-level scope."
            },
            {
                "id": "PY-TOPIC-014-MCQ-10",
                "question": "What are type hints in Python function definitions (e.g., def f(x: int) -> str:)?",
                "options": {"A": "Strict compiler type checks that prevent execution on mismatch", "B": "Optional annotations used by static analysis tools and IDEs without runtime enforcement", "C": "Memory optimization instructions", "D": "Deprecated syntax"},
                "correct": "B",
                "explanation": "Python type hints are advisory metadata; they do not enforce runtime type constraints."
            }
        ]
    },
    {
        "id": "PY-TOPIC-015",
        "topic": "*args & **kwargs",
        "topicName": "*args & **kwargs",
        "definition": [
            "*args allows a function to accept any number of positional arguments bundled into a tuple.",
            "**kwargs allows a function to accept any number of keyword arguments bundled into a dictionary.",
            "They provide flexibility for writing wrappers, decorators, and generic function interfaces.",
            "The asterisks (* and **) are the operational operators; 'args' and 'kwargs' are conventional names."
        ],
        "syntax": "def display(*args, **kwargs):\n    print('Positional tuple:', args)\n    print('Keyword dict:', kwargs)\n\ndisplay(1, 2, name='Koti')",
        "examples": [
            {
                "title": "Example 1: Variable Positional Arguments with *args",
                "code": "def sum_all(*numbers):\n    return sum(numbers)\nprint(sum_all(1, 2, 3, 4, 5))\nprint(sum_all(10, 20))",
                "output": "15\n30",
                "explanation": "*numbers gathers all passed positional values into a tuple, which sum() totals."
            },
            {
                "title": "Example 2: Variable Keyword Arguments with **kwargs",
                "code": "def print_info(**details):\n    for key, value in details.items():\n        print(f'{key} = {value}')\nprint_info(role='Developer', exp=3)",
                "output": "role = Developer\nexp = 3",
                "explanation": "**details packs named arguments into a dictionary of key-value pairs."
            },
            {
                "title": "Example 3: Unpacking Collections into Arguments",
                "code": "def calc(a, b, c):\n    return a * b + c\nnums = [2, 3, 4]\nprint(calc(*nums))",
                "output": "10",
                "explanation": "The * operator unpacks elements of list nums into individual positional parameters."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-015-MCQ-01",
                "question": "What data type is *args inside the function body?",
                "options": {"A": "list", "B": "tuple", "C": "set", "D": "generator"},
                "correct": "B",
                "explanation": "*args packages extra positional arguments into an immutable tuple."
            },
            {
                "id": "PY-TOPIC-015-MCQ-02",
                "question": "What data type is **kwargs inside the function body?",
                "options": {"A": "list of pairs", "B": "tuple", "C": "dict", "D": "set"},
                "correct": "C",
                "explanation": "**kwargs packages extra keyword arguments into a standard Python dictionary."
            },
            {
                "id": "PY-TOPIC-015-MCQ-03",
                "question": "What is the correct parameter ordering in a Python function definition?",
                "options": {"A": "def f(*args, **kwargs, a, b)", "B": "def f(standard_args, *args, **kwargs)", "C": "def f(**kwargs, *args, standard_args)", "D": "def f(*args, standard_args, **kwargs)"},
                "correct": "B",
                "explanation": "Standard parameters must come first, followed by *args, then keyword-only args, then **kwargs."
            },
            {
                "id": "PY-TOPIC-015-MCQ-04",
                "question": "What is the output of: def f(*a): return len(a); print(f(1, 2, [3, 4]))?",
                "options": {"A": "4", "B": "3", "C": "2", "D": "TypeError"},
                "correct": "B",
                "explanation": "Three arguments are passed: 1, 2, and the list [3, 4], so len(a) is 3."
            },
            {
                "id": "PY-TOPIC-015-MCQ-05",
                "question": "What happens if you pass a dictionary 'd' to a function using func(**d)?",
                "options": {"A": "Passes d as a single argument", "B": "Unpacks dictionary keys and values as keyword arguments", "C": "Raises TypeError", "D": "Passes only the keys"},
                "correct": "B",
                "explanation": "**d unpacks the dictionary entries into named keyword arguments for the function."
            },
            {
                "id": "PY-TOPIC-015-MCQ-06",
                "question": "Are the names 'args' and 'kwargs' mandatory keywords in Python?",
                "options": {"A": "Yes, using other names causes SyntaxError", "B": "No, only the * and ** prefixes matter; names are conventional", "C": "args is mandatory, kwargs is optional", "D": "Mandatory in Python 3.9+"},
                "correct": "B",
                "explanation": "The asterisk operators define the unpacking behavior; any valid identifier names (e.g. *values) work."
            },
            {
                "id": "PY-TOPIC-015-MCQ-07",
                "question": "What is the output of: def f(**k): return k.get('x', 0); print(f(y=10))?",
                "options": {"A": "10", "B": "0", "C": "KeyError", "D": "None"},
                "correct": "B",
                "explanation": "The key 'x' is not present in kwargs ({'y': 10}), so get() returns the default value 0."
            },
            {
                "id": "PY-TOPIC-015-MCQ-08",
                "question": "Can a function have both *args and **kwargs in its definition?",
                "options": {"A": "Yes, *args must precede **kwargs", "B": "No, only one can be used per function", "C": "Yes, but **kwargs must come first", "D": "Only in class methods"},
                "correct": "A",
                "explanation": "Functions commonly accept def func(*args, **kwargs): to handle arbitrary parameters."
            },
            {
                "id": "PY-TOPIC-015-MCQ-09",
                "question": "What is the output of:\ndef f(a, *b):\n    return a, b\nprint(f(1))",
                "options": {"A": "(1, None)", "B": "(1, ())", "C": "(1, [])", "D": "TypeError"},
                "correct": "B",
                "explanation": "When no extra arguments are passed, *b captures an empty tuple ()."
            },
            {
                "id": "PY-TOPIC-015-MCQ-10",
                "question": "How do you forward all arguments received by a wrapper function to an inner function 'target'?",
                "options": {"A": "target(args, kwargs)", "B": "target(*args, **kwargs)", "C": "target(unpack(args), unpack(kwargs))", "D": "target(&args, &&kwargs)"},
                "correct": "B",
                "explanation": "*args and **kwargs unpack the tuple and dictionary back into arguments for the target call."
            }
        ]
    },
    {
        "id": "PY-TOPIC-016",
        "topic": "Lambda Functions",
        "topicName": "Lambda Functions",
        "definition": [
            "A lambda function is an anonymous, single-line function defined with the lambda keyword.",
            "Syntax: lambda arguments: expression, which evaluates and returns the expression automatically.",
            "Lambda functions cannot contain statements (like pass, return, raise) or multiple expressions.",
            "They are commonly used as short throwaway callbacks in sorted(), map(), and filter()."
        ],
        "syntax": "square = lambda x: x ** 2\nprint(square(5))  # 25\n\n# As sorting key\npairs = [(1, 'one'), (2, 'two')]\npairs.sort(key=lambda p: p[1])",
        "examples": [
            {
                "title": "Example 1: Basic Arithmetic Lambda",
                "code": "multiply = lambda a, b: a * b\nprint(multiply(6, 7))",
                "output": "42",
                "explanation": "The lambda takes arguments a and b, evaluates a * b, and implicitly returns the result."
            },
            {
                "title": "Example 2: Custom Sorting Key",
                "code": "students = [('Raj', 85), ('Anu', 95), ('Kiran', 75)]\nstudents.sort(key=lambda s: s[1])\nprint(students)",
                "output": "[('Kiran', 75), ('Raj', 85), ('Anu', 95)]",
                "explanation": "lambda s: s[1] extracts the score at index 1 as the sorting criterion."
            },
            {
                "title": "Example 3: Conditional Expression in Lambda",
                "code": "check = lambda x: 'Positive' if x > 0 else 'Non-Positive'\nprint(check(10), check(-5))",
                "output": "Positive Non-Positive",
                "explanation": "Lambdas can incorporate ternary if-else expressions on a single line."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-016-MCQ-01",
                "question": "What is a lambda function in Python?",
                "options": {"A": "A multi-threaded function", "B": "An anonymous, inline function consisting of a single expression", "C": "A recursive function generator", "D": "A function that takes no arguments"},
                "correct": "B",
                "explanation": "Lambda defines an anonymous function restricted to a single evaluated expression."
            },
            {
                "id": "PY-TOPIC-016-MCQ-02",
                "question": "Does a lambda function require an explicit 'return' statement?",
                "options": {"A": "Yes, mandatory", "B": "No, writing 'return' inside lambda causes SyntaxError", "C": "Only if returning None", "D": "Optional"},
                "correct": "B",
                "explanation": "Lambdas implicitly return the result of their expression; including 'return' causes a SyntaxError."
            },
            {
                "id": "PY-TOPIC-016-MCQ-03",
                "question": "What is the output of: print((lambda x, y: x + y)(10, 20))?",
                "options": {"A": "1020", "B": "30", "C": "(10, 20)", "D": "<function <lambda>>"},
                "correct": "B",
                "explanation": "The lambda is immediately invoked with arguments 10 and 20, returning 30."
            },
            {
                "id": "PY-TOPIC-016-MCQ-04",
                "question": "Can a lambda function contain loops or print statements?",
                "options": {"A": "Yes, using semicolons", "B": "No, lambdas can only contain a single expression", "C": "Yes, up to 3 statements", "D": "Only while loops"},
                "correct": "B",
                "explanation": "Python lambdas are syntactically restricted to single expressions; statements are disallowed."
            },
            {
                "id": "PY-TOPIC-016-MCQ-05",
                "question": "What is the output of: f = lambda s: s[::-1]; print(f('code'))?",
                "options": {"A": "code", "B": "edoc", "C": "c", "D": "e"},
                "correct": "B",
                "explanation": "s[::-1] reverses the string 'code' into 'edoc'."
            },
            {
                "id": "PY-TOPIC-016-MCQ-06",
                "question": "What does PEP 8 recommend regarding assigning lambdas to variables (f = lambda x: x)?",
                "options": {"A": "It is recommended best practice", "B": "Prefer standard 'def f(x):' definitions instead of assigning lambdas to names", "C": "Lambdas cannot be assigned to variables", "D": "Use lambdas exclusively"},
                "correct": "B",
                "explanation": "PEP 8 advises using def statements instead of variable assignment for named functions."
            },
            {
                "id": "PY-TOPIC-016-MCQ-07",
                "question": "What is the output of: list(map(lambda x: x * 2, [1, 2, 3]))?",
                "options": {"A": "[1, 2, 3]", "B": "[2, 4, 6]", "C": "[2, 2, 2]", "D": "6"},
                "correct": "B",
                "explanation": "map applies the lambda multiplying each list element by 2."
            },
            {
                "id": "PY-TOPIC-016-MCQ-08",
                "question": "What is the type of a lambda function object in Python?",
                "options": {"A": "<class 'lambda'>", "B": "<class 'function'>", "C": "<class 'anonymous'>", "D": "<class 'builtin_function'>"},
                "correct": "B",
                "explanation": "Lambdas create regular function objects identical in type to those created by def."
            },
            {
                "id": "PY-TOPIC-016-MCQ-09",
                "question": "What is the output of: f = lambda: 42; print(f())?",
                "options": {"A": "None", "B": "42", "C": "TypeError: missing arguments", "D": "0"},
                "correct": "B",
                "explanation": "A lambda can take zero arguments and returns its expression 42."
            },
            {
                "id": "PY-TOPIC-016-MCQ-10",
                "question": "What is the output of: sorted([-4, 1, -2, 3], key=lambda x: abs(x))?",
                "options": {"A": "[-4, -2, 1, 3]", "B": "[1, -2, 3, -4]", "C": "[1, 3, -2, -4]", "D": "[-2, 1, 3, -4]"},
                "correct": "B",
                "explanation": "Elements sorted by absolute values: |1|=1, |-2|=2, |3|=3, |-4|=4 gives [1, -2, 3, -4]."
            }
        ]
    },
    {
        "id": "PY-TOPIC-017",
        "topic": "Comprehensions (List/Set/Dict)",
        "topicName": "Comprehensions (List/Set/Dict)",
        "definition": [
            "Comprehensions provide a concise, readable syntax for creating new collections from existing iterables.",
            "List comprehension: [expr for item in iterable if condition], producing a filtered/transformed list.",
            "Set and dict comprehensions use curly braces to build unique sets or key-value pairings.",
            "Comprehensions are generally faster than equivalent for loops due to C-level optimizations."
        ],
        "syntax": "# List comp: [x**2 for x in range(5)]\n# Set comp:  {x % 3 for x in range(10)}\n# Dict comp: {x: x**2 for x in range(4)}",
        "examples": [
            {
                "title": "Example 1: List Comprehension with Filter Condition",
                "code": "evens = [x for x in range(10) if x % 2 == 0]\nprint(evens)",
                "output": "[0, 2, 4, 6, 8]",
                "explanation": "Filters elements from range(10) satisfying the boolean condition x % 2 == 0."
            },
            {
                "title": "Example 2: Dictionary Comprehension",
                "code": "words = ['apple', 'cat', 'banana']\nlengths = {w: len(w) for w in words}\nprint(lengths)",
                "output": "{'apple': 5, 'cat': 3, 'banana': 6}",
                "explanation": "Constructs a dictionary mapping each word to its character length."
            },
            {
                "title": "Example 3: Nested List Comprehension (Matrix Flattening)",
                "code": "matrix = [[1, 2], [3, 4]]\nflat = [val for row in matrix for val in row]\nprint(flat)",
                "output": "[1, 2, 3, 4]",
                "explanation": "Iterates outer rows first, then inner values, flattening the 2D matrix into 1D."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-017-MCQ-01",
                "question": "What is the output of: print([x * 2 for x in [1, 2, 3]])?",
                "options": {"A": "[1, 2, 3, 1, 2, 3]", "B": "[2, 4, 6]", "C": "[2, 2, 2]", "D": "[1, 4, 9]"},
                "correct": "B",
                "explanation": "Multiplies each element by 2, producing [2, 4, 6]."
            },
            {
                "id": "PY-TOPIC-017-MCQ-02",
                "question": "What collection is produced by: {x for x in 'banana'}?",
                "options": {"A": "['b', 'a', 'n']", "B": "{'b', 'a', 'n'}", "C": "{'banana': 6}", "D": "('b', 'a', 'n')"},
                "correct": "B",
                "explanation": "Curly braces with a single expression create a set, keeping only unique characters: {'b', 'a', 'n'}."
            },
            {
                "id": "PY-TOPIC-017-MCQ-03",
                "question": "What does a generator expression (x for x in range(10)) return compared to [x for x in range(10)]?",
                "options": {"A": "A tuple", "B": "A generator object that produces items lazily on demand", "C": "A list", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "Parentheses produce a memory-efficient generator iterator, not a precomputed list."
            },
            {
                "id": "PY-TOPIC-017-MCQ-04",
                "question": "What is the output of: {x: x % 2 == 0 for x in [1, 2, 3]}?",
                "options": {"A": "{1: False, 2: True, 3: False}", "B": "[False, True, False]", "C": "{True: 2, False: [1, 3]}", "D": "{2: True}"},
                "correct": "A",
                "explanation": "Dict comprehension mapping each number to whether it is even."
            },
            {
                "id": "PY-TOPIC-017-MCQ-05",
                "question": "What is the output of: [x if x > 2 else 0 for x in [1, 2, 3, 4]]?",
                "options": {"A": "[3, 4]", "B": "[0, 0, 3, 4]", "C": "[1, 2, 0, 0]", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "Ternary if-else placed before the 'for' assigns 0 for elements <= 2 and x otherwise."
            },
            {
                "id": "PY-TOPIC-017-MCQ-06",
                "question": "Why are comprehensions generally faster than equivalent for-loops appending to lists?",
                "options": {"A": "They bypass Python interpreter", "B": "They run at C-level speed avoiding repeated Python-level .append() method lookups", "C": "They use multi-threading", "D": "They compress data"},
                "correct": "B",
                "explanation": "Comprehensions use dedicated bytecode instructions that append directly in C."
            },
            {
                "id": "PY-TOPIC-017-MCQ-07",
                "question": "What is the output of: print(len([x for x in range(10) if x > 15]))?",
                "options": {"A": "10", "B": "0", "C": "5", "D": "IndexError"},
                "correct": "B",
                "explanation": "No value in range(10) is greater than 15, yielding an empty list [] of length 0."
            },
            {
                "id": "PY-TOPIC-017-MCQ-08",
                "question": "Can you use nested loops in a comprehension?",
                "options": {"A": "Yes, e.g. [(x, y) for x in l1 for y in l2]", "B": "No, only single loops are allowed", "C": "Only in dict comprehensions", "D": "Only with while loops"},
                "correct": "A",
                "explanation": "Multiple for clauses can be chained to create Cartesian products and nested iterations."
            },
            {
                "id": "PY-TOPIC-017-MCQ-09",
                "question": "In Python 3, does a comprehension variable leak into the surrounding scope?",
                "options": {"A": "Yes, it overrides local variables", "B": "No, comprehensions have their own isolated local scope", "C": "Only in while loops", "D": "Yes, in list comprehensions only"},
                "correct": "B",
                "explanation": "In Python 3, all comprehensions have isolated scope and do not leak variables."
            },
            {
                "id": "PY-TOPIC-017-MCQ-10",
                "question": "What is the output of: {i: i*2 for i in range(2)}?",
                "options": {"A": "{0: 0, 1: 2}", "B": "{1: 2, 2: 4}", "C": "{0: 2, 1: 2}", "D": "[0, 2]"},
                "correct": "A",
                "explanation": "Iterates i = 0 (0: 0) and i = 1 (1: 2)."
            }
        ]
    },
    {
        "id": "PY-TOPIC-018",
        "topic": "map(), filter(), reduce()",
        "topicName": "map(), filter(), reduce()",
        "definition": [
            "map(func, iterable) transforms each element in an iterable by applying func to it.",
            "filter(func, iterable) filters elements, keeping only those for which func returns True.",
            "reduce(func, iterable) from functools cumulates iterable elements into a single aggregate value.",
            "map() and filter() return lazy iterators in Python 3 that yield results on demand."
        ],
        "syntax": "from functools import reduce\n\n# map\nm = map(lambda x: x*2, [1, 2, 3])\n# filter\nf = filter(lambda x: x%2 != 0, [1, 2, 3])\n# reduce\nr = reduce(lambda acc, x: acc * x, [1, 2, 3, 4])",
        "examples": [
            {
                "title": "Example 1: map() Transforming Values",
                "code": "names = ['alice', 'bob', 'koti']\ncapitalized = list(map(str.upper, names))\nprint(capitalized)",
                "output": "['ALICE', 'BOB', 'KOTI']",
                "explanation": "map applies str.upper to each string in names."
            },
            {
                "title": "Example 2: filter() Selecting Elements",
                "code": "nums = [10, -5, 20, -1, 0, 8]\npositives = list(filter(lambda x: x > 0, nums))\nprint(positives)",
                "output": "[10, 20, 8]",
                "explanation": "filter keeps only elements where the lambda evaluates to True."
            },
            {
                "title": "Example 3: reduce() Aggregating a Sequence",
                "code": "from functools import reduce\nfactorial = reduce(lambda a, b: a * b, [1, 2, 3, 4, 5])\nprint('5! =', factorial)",
                "output": "5! = 120",
                "explanation": "reduce aggregates elements left-to-right: (((1*2)*3)*4)*5 = 120."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-018-MCQ-01",
                "question": "What does map(func, iterable) return in Python 3?",
                "options": {"A": "A list", "B": "A map iterator object", "C": "A tuple", "D": "None"},
                "correct": "B",
                "explanation": "In Python 3, map() returns a lazy iterator; wrap in list() to get a list."
            },
            {
                "id": "PY-TOPIC-018-MCQ-02",
                "question": "From which standard library module must reduce() be imported in Python 3?",
                "options": {"A": "itertools", "B": "functools", "C": "math", "D": "collections"},
                "correct": "B",
                "explanation": "reduce() was moved to the 'functools' module in Python 3."
            },
            {
                "id": "PY-TOPIC-018-MCQ-03",
                "question": "What happens if None is passed as the function to filter(): filter(None, [0, 1, False, 2, ''])?",
                "options": {"A": "TypeError", "B": "Filters out all falsy elements, keeping truthy ones: [1, 2]", "C": "Returns all elements unchanged", "D": "Returns empty list"},
                "correct": "B",
                "explanation": "Passing None to filter removes all falsy items (0, False, '', None, etc.)."
            },
            {
                "id": "PY-TOPIC-018-MCQ-04",
                "question": "What is the output of: list(map(int, ['10', '20', '30']))?",
                "options": {"A": "['10', '20', '30']", "B": "[10, 20, 30]", "C": "60", "D": "TypeError"},
                "correct": "B",
                "explanation": "int constructor converts each string into an integer."
            },
            {
                "id": "PY-TOPIC-018-MCQ-05",
                "question": "What does reduce(lambda a, b: a + b, [1, 2, 3, 4], 10) evaluate to?",
                "options": {"A": "10", "B": "20", "C": "14", "D": "TypeError"},
                "correct": "B",
                "explanation": "The optional initial value 10 is added first: 10 + 1 + 2 + 3 + 4 = 20."
            },
            {
                "id": "PY-TOPIC-018-MCQ-06",
                "question": "Can map() take multiple iterable arguments simultaneously?",
                "options": {"A": "No, only one iterable", "B": "Yes, function must accept as many arguments as there are iterables", "C": "Only if they have identical memory addresses", "D": "Only up to 2"},
                "correct": "B",
                "explanation": "map(func, l1, l2) feeds items from both iterables into func(a, b)."
            },
            {
                "id": "PY-TOPIC-018-MCQ-07",
                "question": "What is the output of: list(filter(lambda x: x % 2 == 0, [1, 3, 5]))?",
                "options": {"A": "[1, 3, 5]", "B": "[]", "C": "[False, False, False]", "D": "0"},
                "correct": "B",
                "explanation": "No numbers are even, so the resulting filtered list is empty."
            },
            {
                "id": "PY-TOPIC-018-MCQ-08",
                "question": "What is preferred in idiomatic Python over map and filter with lambdas?",
                "options": {"A": "List comprehensions and generator expressions", "B": "While loops", "C": "Recursion", "D": "Global variables"},
                "correct": "A",
                "explanation": "List comprehensions are generally more readable and widely preferred in modern Python."
            },
            {
                "id": "PY-TOPIC-018-MCQ-09",
                "question": "What does reduce() raise if passed an empty iterable without an initializer?",
                "options": {"A": "Returns None", "B": "TypeError: reduce() of empty sequence with no initial value", "C": "ValueError", "D": "ZeroDivisionError"},
                "correct": "B",
                "explanation": "Calling reduce on an empty sequence without an initial value raises a TypeError."
            },
            {
                "id": "PY-TOPIC-018-MCQ-10",
                "question": "What is the output of: list(map(lambda a, b: a + b, [1, 2], [10, 20, 30]))?",
                "options": {"A": "[11, 22]", "B": "[11, 22, 30]", "C": "IndexError", "D": "[10, 20]"},
                "correct": "A",
                "explanation": "map stops as soon as the shortest iterable ([1, 2]) is exhausted."
            }
        ]
    },
    {
        "id": "PY-TOPIC-019",
        "topic": "Exception Handling",
        "topicName": "Exception Handling",
        "definition": [
            "Exception handling manages runtime errors gracefully without terminating the program abruptly.",
            "It uses try, except, else, and finally blocks to catch and handle anticipated errors.",
            "The else block runs only if no exception occurred in the try block.",
            "The finally block always runs regardless of whether an exception was raised, ideal for cleanup."
        ],
        "syntax": "try:\n    res = 10 / divisor\nexcept ZeroDivisionError as e:\n    print('Cannot divide by zero:', e)\nelse:\n    print('Success:', res)\nfinally:\n    print('Cleanup complete')",
        "examples": [
            {
                "title": "Example 1: Catching Specific Exceptions",
                "code": "try:\n    num = int('abc')\nexcept ValueError as e:\n    print('Conversion error handled')\nprint('App continues running')",
                "output": "Conversion error handled\nApp continues running",
                "explanation": "The ValueError is caught by the except block, preventing a program crash."
            },
            {
                "title": "Example 2: The finally and else Clauses",
                "code": "try:\n    val = 10 / 2\nexcept ZeroDivisionError:\n    print('Div by 0')\nelse:\n    print('Result is', val)\nfinally:\n    print('Execution finished')",
                "output": "Result is 5.0\nExecution finished",
                "explanation": "else executes because no error occurred; finally always executes at the end."
            },
            {
                "title": "Example 3: Raising Custom Exceptions",
                "code": "class AgeError(Exception):\n    pass\n\ndef check_age(age):\n    if age < 0:\n        raise AgeError('Age cannot be negative!')\n    return age\n\ntry:\n    check_age(-5)\nexcept AgeError as err:\n    print('Caught:', err)",
                "output": "Caught: Age cannot be negative!",
                "explanation": "Custom exceptions inherit from built-in Exception and are triggered via raise."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-019-MCQ-01",
                "question": "Which block in a try-except construct ALWAYS executes, even if an unhandled error occurs?",
                "options": {"A": "except", "B": "else", "C": "finally", "D": "catch"},
                "correct": "C",
                "explanation": "The finally block is guaranteed to execute regardless of how the try block exits."
            },
            {
                "id": "PY-TOPIC-019-MCQ-02",
                "question": "When does the 'else' block in a try-except-else-finally construct execute?",
                "options": {"A": "When an exception is caught", "B": "Only when NO exceptions occurred in the try block", "C": "Every time after finally", "D": "If try block raises an unhandled error"},
                "correct": "B",
                "explanation": "The else block runs only if the try block completed successfully without exceptions."
            },
            {
                "id": "PY-TOPIC-019-MCQ-03",
                "question": "Which base class should all custom user-defined exceptions inherit from?",
                "options": {"A": "BaseException", "B": "Exception", "C": "Error", "D": "StandardError"},
                "correct": "B",
                "explanation": "User-defined exceptions should inherit from Exception (BaseException includes KeyboardInterrupt)."
            },
            {
                "id": "PY-TOPIC-019-MCQ-04",
                "question": "What is the keyword used to explicitly trigger an exception in Python?",
                "options": {"A": "throw", "B": "raise", "C": "fire", "D": "trigger"},
                "correct": "B",
                "explanation": "Python uses 'raise' to trigger exceptions (unlike Java/JS which use 'throw')."
            },
            {
                "id": "PY-TOPIC-019-MCQ-05",
                "question": "What happens if a bare 'except:' clause is used without specifying exception type?",
                "options": {"A": "SyntaxError", "B": "Catches all exceptions, including SystemExit and KeyboardInterrupt (Ctrl+C)", "C": "Only catches ValueError", "D": "Does nothing"},
                "correct": "B",
                "explanation": "A bare except catches BaseException, inadvertently suppressing Ctrl+C interrupts."
            },
            {
                "id": "PY-TOPIC-019-MCQ-06",
                "question": "What is the output of:\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('Zero')\nexcept ArithmeticError:\n    print('Arithmetic')",
                "options": {"A": "Zero", "B": "Arithmetic", "C": "Both Zero and Arithmetic", "D": "Error"},
                "correct": "A",
                "explanation": "Python matches except handlers top-to-bottom and executes only the first matching handler."
            },
            {
                "id": "PY-TOPIC-019-MCQ-07",
                "question": "What does a bare 'raise' statement inside an except block do?",
                "options": {"A": "Raises RuntimeError", "B": "Re-raises the currently active exception", "C": "Clears the exception", "D": "Raises TypeError"},
                "correct": "B",
                "explanation": "A standalone 'raise' re-propagates the active exception up the call stack."
            },
            {
                "id": "PY-TOPIC-019-MCQ-08",
                "question": "How can you catch multiple exception types in a single except line?",
                "options": {"A": "except ValueError, TypeError:", "B": "except (ValueError, TypeError):", "C": "except ValueError or TypeError:", "D": "except [ValueError, TypeError]:"},
                "correct": "B",
                "explanation": "Multiple exceptions must be grouped inside parentheses as a tuple."
            },
            {
                "id": "PY-TOPIC-019-MCQ-09",
                "question": "What exception is raised when accessing a non-existent index in a list?",
                "options": {"A": "KeyError", "B": "IndexError", "C": "LookupError", "D": "ValueError"},
                "correct": "B",
                "explanation": "Accessing a sequence index out of bounds raises an IndexError."
            },
            {
                "id": "PY-TOPIC-019-MCQ-10",
                "question": "What exception is raised when trying to open a file that does not exist in 'r' mode?",
                "options": {"A": "IOError", "B": "FileNotFoundError", "C": "FileMissingError", "D": "PathError"},
                "correct": "B",
                "explanation": "In Python 3.3+, attempting to read a non-existent file raises FileNotFoundError."
            }
        ]
    },
    {
        "id": "PY-TOPIC-020",
        "topic": "File Handling",
        "topicName": "File Handling",
        "definition": [
            "File handling allows Python programs to read, write, and manipulate persistent data on disk.",
            "Files are opened using open(filename, mode) with modes like 'r' (read), 'w' (write), 'a' (append), and 'b' (binary).",
            "The 'with' statement is best practice because it automatically closes the file even if exceptions occur.",
            "Common file methods include read(), readline(), readlines(), write(), writelines(), and seek()."
        ],
        "syntax": "# Safe file reading with context manager\nwith open('data.txt', 'r', encoding='utf-8') as f:\n    content = f.read()\n\n# Writing to a file\nwith open('out.txt', 'w') as f:\n    f.write('Hello World\\n')",
        "examples": [
            {
                "title": "Example 1: Writing and Reading with 'with'",
                "code": "with open('demo.txt', 'w') as f:\n    f.write('Python File IO\\nLine 2')\n\nwith open('demo.txt', 'r') as f:\n    print(f.read())",
                "output": "Python File IO\nLine 2",
                "explanation": "'with' automatically calls f.close() when the block exits."
            },
            {
                "title": "Example 2: Reading Line by Line Efficiently",
                "code": "lines = ['Alpha\\n', 'Beta\\n']\nfor line in lines:\n    print(line.strip())",
                "output": "Alpha\nBeta",
                "explanation": "Iterating over file object yields lines one at a time, conserving memory for large files."
            },
            {
                "title": "Example 3: Appending to a File ('a' mode)",
                "code": "mode = 'a'\n# Appending preserves existing content rather than truncating it\nprint('Mode a appends to end of file without overwriting')",
                "output": "Mode a appends to end of file without overwriting",
                "explanation": "Mode 'w' truncates the file to 0 bytes on open; mode 'a' writes new data at the end."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-020-MCQ-01",
                "question": "Why is using 'with open(...) as f:' preferred over manually calling f.close()?",
                "options": {"A": "It makes reading faster", "B": "It automatically guarantees file closure even if an exception occurs", "C": "It encrypts file content", "D": "It prevents file deletion"},
                "correct": "B",
                "explanation": "The with statement uses the context management protocol to ensure file handle cleanup."
            },
            {
                "id": "PY-TOPIC-020-MCQ-02",
                "question": "What is the difference between open mode 'w' and open mode 'a'?",
                "options": {"A": "'w' appends, 'a' overwrites", "B": "'w' overwrites/truncates existing file, 'a' appends to end", "C": "'w' is for words, 'a' is for all", "D": "They are identical"},
                "correct": "B",
                "explanation": "Mode 'w' truncates the file on open, erasing past contents; mode 'a' appends new data."
            },
            {
                "id": "PY-TOPIC-020-MCQ-03",
                "question": "What does file.readline() return when the end of file (EOF) is reached?",
                "options": {"A": "None", "B": "'' (empty string)", "C": "EOFError", "D": "False"},
                "correct": "B",
                "explanation": "readline() returns an empty string '' when it reaches the end of the file."
            },
            {
                "id": "PY-TOPIC-020-MCQ-04",
                "question": "What does file.seek(0) do?",
                "options": {"A": "Deletes first line", "B": "Moves the file cursor pointer to the beginning of the file", "C": "Reads first character", "D": "Flushes buffer"},
                "correct": "B",
                "explanation": "seek(offset) repositions the file stream pointer (0 resets to beginning)."
            },
            {
                "id": "PY-TOPIC-020-MCQ-05",
                "question": "Which method returns all remaining lines of a file as a list of strings?",
                "options": {"A": "read()", "B": "readlines()", "C": "readline()", "D": "readall()"},
                "correct": "B",
                "explanation": "readlines() reads the entire file into a list where each element is a line."
            },
            {
                "id": "PY-TOPIC-020-MCQ-06",
                "question": "What mode character must be appended to open binary files like images or PDFs?",
                "options": {"A": "'x'", "B": "'b'", "C": "'bin'", "D": "'raw'"},
                "correct": "B",
                "explanation": "Append 'b' (e.g., 'rb', 'wb') to indicate binary mode."
            },
            {
                "id": "PY-TOPIC-020-MCQ-07",
                "question": "What happens if you open a non-existent file in mode 'x' (open('new.txt', 'x'))?",
                "options": {"A": "Creates the new file successfully", "B": "Raises FileNotFoundError", "C": "Opens in read-only mode", "D": "Causes syntax error"},
                "correct": "A",
                "explanation": "Mode 'x' is exclusive creation; it succeeds if the file is new, and raises FileExistsError if it already exists."
            },
            {
                "id": "PY-TOPIC-020-MCQ-08",
                "question": "What does file.tell() return?",
                "options": {"A": "Total line count", "B": "Current byte position of the file pointer", "C": "File name", "D": "File permissions"},
                "correct": "B",
                "explanation": "tell() returns the current integer byte position within the file stream."
            },
            {
                "id": "PY-TOPIC-020-MCQ-09",
                "question": "What does file.flush() do?",
                "options": {"A": "Empties file contents", "B": "Forces internal write buffers to be flushed to physical disk storage", "C": "Closes file", "D": "Deletes file"},
                "correct": "B",
                "explanation": "flush() flushes the write buffer to disk without closing the file handle."
            },
            {
                "id": "PY-TOPIC-020-MCQ-10",
                "question": "Which standard library module provides high-level object-oriented file path operations?",
                "options": {"A": "os.path", "B": "pathlib", "C": "filepath", "D": "sys.files"},
                "correct": "B",
                "explanation": "pathlib provides modern object-oriented filesystem path management."
            }
        ]
    }
]
