# Topics 1 to 10:
# 1. Python Basics
# 2. Variables & Data Types
# 3. Operators
# 4. Strings
# 5. Lists
# 6. Tuples
# 7. Sets
# 8. Dictionaries
# 9. list vs tuple
# 10. list vs set

topics = [
    {
        "id": "PY-TOPIC-001",
        "topic": "Python Basics",
        "topicName": "Python Basics",
        "definition": [
            "Python is a high-level, interpreted, dynamically typed programming language created by Guido van Rossum.",
            "It emphasizes code readability with clean syntax and mandatory indentation instead of curly braces.",
            "Python supports multiple paradigms including procedural, object-oriented, and functional programming.",
            "It comes with a large standard library often described as 'batteries included'."
        ],
        "syntax": "# Basic Python syntax structure\nprint('Hello, Python!')\nx = 10\nif x > 5:\n    print('x is greater than 5')",
        "examples": [
            {
                "title": "Example 1: Printing Output and Comments",
                "code": "# Printing text and numbers\nprint('Welcome to Python')\nprint('Result:', 10 + 25)",
                "output": "Welcome to Python\nResult: 35",
                "explanation": "print() displays values to the console and comments start with the '#' symbol."
            },
            {
                "title": "Example 2: Dynamic Typing",
                "code": "val = 42\nprint(type(val))\nval = 'Now a String'\nprint(type(val))",
                "output": "<class 'int'>\n<class 'str'>",
                "explanation": "In Python, variable types do not need explicit declaration and can change at runtime."
            },
            {
                "title": "Example 3: Basic User Input and Formatting",
                "code": "name = 'Koti'\nage = 22\nprint(f'User: {name}, Age: {age}')",
                "output": "User: Koti, Age: 22",
                "explanation": "F-strings allow embedding expressions inside string literals using curly braces."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-001-MCQ-01",
                "question": "Who created Python and in which year was it first released?",
                "options": {"A": "James Gosling, 1995", "B": "Guido van Rossum, 1991", "C": "Dennis Ritchie, 1972", "D": "Bjarne Stroustrup, 1985"},
                "correct": "B",
                "explanation": "Guido van Rossum released Python in February 1991."
            },
            {
                "id": "PY-TOPIC-001-MCQ-02",
                "question": "Which file extension is used to save Python source code files?",
                "options": {"A": ".py", "B": ".python", "C": ".p", "D": ".pyt"},
                "correct": "A",
                "explanation": "Standard Python source files use the .py extension."
            },
            {
                "id": "PY-TOPIC-001-MCQ-03",
                "question": "How is a block of code defined in Python instead of using curly braces {}?",
                "options": {"A": "Parentheses ()", "B": "Square brackets []", "C": "Indentation (whitespace)", "D": "Semicolons ;"},
                "correct": "C",
                "explanation": "Python strictly enforces indentation to delimit code blocks."
            },
            {
                "id": "PY-TOPIC-001-MCQ-04",
                "question": "What is the output of print(type(3.14)) in Python?",
                "options": {"A": "<class 'double'>", "B": "<class 'float'>", "C": "<class 'number'>", "D": "<class 'decimal'>"},
                "correct": "B",
                "explanation": "Real numbers with decimals in Python belong to the float class."
            },
            {
                "id": "PY-TOPIC-001-MCQ-05",
                "question": "Which character is used for writing single-line comments in Python?",
                "options": {"A": "//", "B": "/*", "C": "#", "D": "--"},
                "correct": "C",
                "explanation": "The hash '#' symbol denotes a single-line comment in Python."
            },
            {
                "id": "PY-TOPIC-001-MCQ-06",
                "question": "What does PEP 8 stand for in Python ecosystem?",
                "options": {"A": "Python Execution Protocol 8", "B": "Python Enhancement Proposal 8 (Style Guide)", "C": "Python Error Prevention 8", "D": "Python Extension Package 8"},
                "correct": "B",
                "explanation": "PEP 8 is the official style guide for writing readable Python code."
            },
            {
                "id": "PY-TOPIC-001-MCQ-07",
                "question": "Which of the following is an invalid identifier name in Python?",
                "options": {"A": "_total_sum", "B": "score_2026", "C": "2nd_value", "D": "totalCost"},
                "correct": "C",
                "explanation": "Variable and function names cannot start with a numeric digit."
            },
            {
                "id": "PY-TOPIC-001-MCQ-08",
                "question": "What is the output of print(bool('False')) in Python?",
                "options": {"A": "False", "B": "True", "C": "None", "D": "TypeError"},
                "correct": "B",
                "explanation": "Any non-empty string in Python evaluates to boolean True."
            },
            {
                "id": "PY-TOPIC-001-MCQ-09",
                "question": "Python source code is compiled into which intermediate format before execution?",
                "options": {"A": "Machine code (.exe)", "B": "Bytecode (.pyc)", "C": "Assembly code", "D": "Binary binary"},
                "correct": "B",
                "explanation": "The CPython interpreter compiles .py code into bytecode (.pyc) executed on PVM."
            },
            {
                "id": "PY-TOPIC-001-MCQ-10",
                "question": "What happens if you execute: print('A', 'B', sep='-')?",
                "options": {"A": "A B", "B": "A-B", "C": "AB", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "The sep parameter specifies the separator between items passed to print()."
            }
        ]
    },
    {
        "id": "PY-TOPIC-002",
        "topic": "Variables & Data Types",
        "topicName": "Variables & Data Types",
        "definition": [
            "Variables are symbolic names that act as references to objects stored in Python's memory.",
            "Python has built-in primitive types: int, float, complex, bool, str, and NoneType.",
            "You do not declare types explicitly; Python determines data type dynamically at runtime.",
            "Type casting can be done using constructor functions like int(), float(), and str()."
        ],
        "syntax": "age = 25          # int\ngpa = 8.75        # float\nactive = True     # bool\nname = 'Alice'    # str\nres = None        # NoneType",
        "examples": [
            {
                "title": "Example 1: Multiple Assignment and Types",
                "code": "a, b, c = 10, 3.14, 'Code'\nprint(type(a), type(b), type(c))",
                "output": "<class 'int'> <class 'float'> <class 'str'>",
                "explanation": "Python supports assigning multiple variables on a single line."
            },
            {
                "title": "Example 2: Type Casting (Explicit Conversion)",
                "code": "s = '100'\nnum = int(s)\nprint(num + 50, type(num))",
                "output": "150 <class 'int'>",
                "explanation": "int() converts string representation of an integer to an integer number."
            },
            {
                "title": "Example 3: Checking NoneType and Truthiness",
                "code": "result = None\nprint(result is None)\nprint(bool(result), bool(0), bool(10))",
                "output": "True\nFalse False True",
                "explanation": "None represents absence of value. None and 0 are falsy; non-zero numbers are truthy."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-002-MCQ-01",
                "question": "What is the data type of the expression: type(10 / 2)?",
                "options": {"A": "<class 'int'>", "B": "<class 'float'>", "C": "<class 'double'>", "D": "<class 'number'>"},
                "correct": "B",
                "explanation": "The single slash division operator '/' always returns a float in Python 3."
            },
            {
                "id": "PY-TOPIC-002-MCQ-02",
                "question": "Which of the following values is evaluated as False in a boolean context?",
                "options": {"A": "'0'", "B": "[0]", "C": "[]", "D": "(0,)"},
                "correct": "C",
                "explanation": "An empty list [] evaluates to False; non-empty strings and containers evaluate to True."
            },
            {
                "id": "PY-TOPIC-002-MCQ-03",
                "question": "What will be the output of: x = 5; print(id(x) == id(5))?",
                "options": {"A": "True", "B": "False", "C": "Error", "D": "None"},
                "correct": "A",
                "explanation": "Python caches small integers (-5 to 256), so both refer to the exact same memory address."
            },
            {
                "id": "PY-TOPIC-002-MCQ-04",
                "question": "What is the maximum limit for an integer value in Python 3?",
                "options": {"A": "2^31 - 1", "B": "2^63 - 1", "C": "2^64 - 1", "D": "Limited only by available machine memory"},
                "correct": "D",
                "explanation": "Python 3 supports arbitrarily large integers limited only by RAM."
            },
            {
                "id": "PY-TOPIC-002-MCQ-05",
                "question": "What is the output of: int('101', 2)?",
                "options": {"A": "101", "B": "5", "C": "2", "D": "ValueError"},
                "correct": "B",
                "explanation": "The second parameter specifies base 2 (binary), and binary 101 equals decimal 5."
            },
            {
                "id": "PY-TOPIC-002-MCQ-06",
                "question": "What is the type of variable x after: x = 3 + 4j?",
                "options": {"A": "<class 'complex'>", "B": "<class 'imaginary'>", "C": "<class 'float'>", "D": "<class 'tuple'>"},
                "correct": "A",
                "explanation": "Numbers with 'j' represent complex numbers with real and imaginary parts."
            },
            {
                "id": "PY-TOPIC-002-MCQ-07",
                "question": "Which built-in function returns the memory address of an object in Python?",
                "options": {"A": "loc()", "B": "address()", "C": "id()", "D": "pointer()"},
                "correct": "C",
                "explanation": "id() returns the unique integer identity (memory address in CPython) of an object."
            },
            {
                "id": "PY-TOPIC-002-MCQ-08",
                "question": "What is the result of float('inf') > 10**100 in Python?",
                "options": {"A": "False", "B": "True", "C": "OverflowError", "D": "TypeError"},
                "correct": "B",
                "explanation": "float('inf') represents positive infinity, which is greater than any finite number."
            },
            {
                "id": "PY-TOPIC-002-MCQ-09",
                "question": "What is the output of: x = None; print(type(x))?",
                "options": {"A": "<class 'None'>", "B": "<class 'NoneType'>", "C": "<class 'null'>", "D": "<class 'void'>"},
                "correct": "B",
                "explanation": "The singleton None is an instance of the class NoneType."
            },
            {
                "id": "PY-TOPIC-002-MCQ-10",
                "question": "What does a = b = c = 10 do in Python?",
                "options": {"A": "Assigns 10 to a, b, and c referencing the same integer object", "B": "Causes SyntaxError", "C": "Only assigns 10 to c", "D": "Creates a tuple (10, 10, 10)"},
                "correct": "A",
                "explanation": "Chained assignment assigns the same object reference to all variables."
            }
        ]
    },
    {
        "id": "PY-TOPIC-003",
        "topic": "Operators",
        "topicName": "Operators",
        "definition": [
            "Operators in Python are symbols used to perform operations on variables and values.",
            "They include arithmetic (+, -, *, /, //, %, **), comparison (==, !=, >, <), and logical (and, or, not).",
            "Special Python operators include identity operators (is, is not) and membership operators (in, not in).",
            "Floor division '//' truncates decimals, while exponentiation '**' raises numbers to a power."
        ],
        "syntax": "sum_val = 10 + 3\nfloor_div = 10 // 3   # 3\npower = 2 ** 4        # 16\nis_in = 3 in [1, 2, 3] # True",
        "examples": [
            {
                "title": "Example 1: Arithmetic and Floor Division",
                "code": "a, b = 17, 5\nprint('Div:', a / b)\nprint('Floor Div:', a // b)\nprint('Modulus:', a % b)",
                "output": "Div: 3.4\nFloor Div: 3\nModulus: 2",
                "explanation": "Division / yields float, // returns quotient rounded down, % returns remainder."
            },
            {
                "title": "Example 2: Identity (is) vs Equality (==)",
                "code": "l1 = [1, 2]\nl2 = [1, 2]\nprint(l1 == l2)\nprint(l1 is l2)",
                "output": "True\nFalse",
                "explanation": "== checks if values are equal, while 'is' checks if both variables point to the same memory object."
            },
            {
                "title": "Example 3: Logical Operators with Short-Circuiting",
                "code": "x = 10 or 20\ny = 0 or 30\nz = 5 and 15\nprint(x, y, z)",
                "output": "10 30 15",
                "explanation": "'or' returns first truthy operand, 'and' returns first falsy or last truthy operand."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-003-MCQ-01",
                "question": "What is the output of: print(2 ** 3 ** 2)?",
                "options": {"A": "64", "B": "512", "C": "36", "D": "256"},
                "correct": "B",
                "explanation": "The exponentiation operator ** has right-to-left associativity: 3**2 = 9, then 2**9 = 512."
            },
            {
                "id": "PY-TOPIC-003-MCQ-02",
                "question": "What is the output of: print(-7 // 2)?",
                "options": {"A": "-3", "B": "-4", "C": "-3.5", "D": "3"},
                "correct": "B",
                "explanation": "Floor division rounds down towards negative infinity, so -3.5 floors to -4."
            },
            {
                "id": "PY-TOPIC-003-MCQ-03",
                "question": "Which operator checks if an item exists within a collection or sequence?",
                "options": {"A": "exists", "B": "in", "C": "has", "D": "contains"},
                "correct": "B",
                "explanation": "'in' is Python's membership operator."
            },
            {
                "id": "PY-TOPIC-003-MCQ-04",
                "question": "What is the value of: 10 > 5 == True?",
                "options": {"A": "True", "B": "False", "C": "TypeError", "D": "1"},
                "correct": "B",
                "explanation": "Operator chaining transforms this into (10 > 5) and (5 == True). Since 5 != True, the result is False."
            },
            {
                "id": "PY-TOPIC-003-MCQ-05",
                "question": "What is the output of: print(5 & 3) in Python?",
                "options": {"A": "7", "B": "1", "C": "2", "D": "15"},
                "correct": "B",
                "explanation": "Bitwise AND: 5 (101) & 3 (011) = 001 (1 in decimal)."
            },
            {
                "id": "PY-TOPIC-003-MCQ-06",
                "question": "What is the output of: print(not 0)?",
                "options": {"A": "0", "B": "1", "C": "True", "D": "False"},
                "correct": "C",
                "explanation": "0 is falsy, so 'not 0' yields boolean True."
            },
            {
                "id": "PY-TOPIC-003-MCQ-07",
                "question": "What is the output of: print(bool([] == False))?",
                "options": {"A": "True", "B": "False", "C": "None", "D": "Error"},
                "correct": "B",
                "explanation": "An empty list is falsy in condition checks, but [] does not equal the boolean object False directly."
            },
            {
                "id": "PY-TOPIC-003-MCQ-08",
                "question": "What is the result of the bitwise shift: 4 << 2?",
                "options": {"A": "1", "B": "8", "C": "16", "D": "32"},
                "correct": "C",
                "explanation": "Left shifting 4 (100) by 2 bits gives 10000 in binary (16 in decimal, equivalent to 4 * 2^2)."
            },
            {
                "id": "PY-TOPIC-003-MCQ-09",
                "question": "What does the expression 'a is not b' evaluate?",
                "options": {"A": "Checks if values are unequal", "B": "Checks if variables point to different objects in memory", "C": "Checks if types differ", "D": "Syntax error"},
                "correct": "B",
                "explanation": "'is not' is the negative identity operator comparing memory IDs."
            },
            {
                "id": "PY-TOPIC-003-MCQ-10",
                "question": "What is the output of: print(True + True * 3)?",
                "options": {"A": "4", "B": "6", "C": "True", "D": "TypeError"},
                "correct": "A",
                "explanation": "In arithmetic operations, True acts as integer 1. Multiplication precedes addition: 1 + (1 * 3) = 4."
            }
        ]
    },
    {
        "id": "PY-TOPIC-004",
        "topic": "Strings",
        "topicName": "Strings",
        "definition": [
            "String is a sequence of characters enclosed in single, double, or triple quotes in Python.",
            "Strings are immutable, meaning you cannot modify characters in-place after creation.",
            "They support zero-based indexing from left and negative indexing from right.",
            "Python provides rich built-in methods like split(), join(), replace(), strip(), and format()."
        ],
        "syntax": "s = 'Hello World'\nprint(s[0])       # 'H'\nprint(s[1:5])     # 'ello'\nprint(s.upper())  # 'HELLO WORLD'",
        "examples": [
            {
                "title": "Example 1: Creating and Concatenating Strings",
                "code": "s1 = 'Hello'\ns2 = 'World'\nprint(s1 + ' ' + s2)",
                "output": "Hello World",
                "explanation": "Strings can be created with quotes and joined together using the + operator."
            },
            {
                "title": "Example 2: String Slicing and Reversal",
                "code": "s = 'Python'\nprint(s[0:2])\nprint(s[-1])\nprint(s[::-1])",
                "output": "Py\nn\nnohtyP",
                "explanation": "Slicing [start:stop:step] extracts portions, negative index accesses from end, and [::-1] reverses."
            },
            {
                "title": "Example 3: Common String Methods",
                "code": "s = ' hello world '\nprint(s.strip())\nprint(s.upper())\nprint(s.replace('world', 'Python'))",
                "output": "hello world\n HELLO WORLD \n hello Python ",
                "explanation": "strip() removes whitespace, upper() converts to uppercase, and replace() swaps substrings."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-004-MCQ-01",
                "question": "Which of the following data structures is immutable in Python?",
                "options": {"A": "List", "B": "String", "C": "Set", "D": "Dictionary"},
                "correct": "B",
                "explanation": "Strings in Python are immutable; modifying them creates a new string object."
            },
            {
                "id": "PY-TOPIC-004-MCQ-02",
                "question": "What is the output of: s = 'Python'; print(s[1:4])?",
                "options": {"A": "Pyt", "B": "yth", "C": "ytho", "D": "tho"},
                "correct": "B",
                "explanation": "Slice [1:4] includes index 1 ('y'), 2 ('t'), 3 ('h') and excludes index 4."
            },
            {
                "id": "PY-TOPIC-004-MCQ-03",
                "question": "What is the result of attempting: s = 'hello'; s[0] = 'H'?",
                "options": {"A": "s becomes 'Hello'", "B": "TypeError: 'str' object does not support item assignment", "C": "ValueError", "D": "IndexError"},
                "correct": "B",
                "explanation": "Strings are immutable, so item assignment raises a TypeError."
            },
            {
                "id": "PY-TOPIC-004-MCQ-04",
                "question": "What is the output of: print('-'.join(['a', 'b', 'c']))?",
                "options": {"A": "a b c", "B": "a-b-c", "C": "-a-b-c-", "D": "['a-b-c']"},
                "correct": "B",
                "explanation": "join() merges iterable elements with the separator string between each item."
            },
            {
                "id": "PY-TOPIC-004-MCQ-05",
                "question": "What is the output of: print('apple'.find('p'))?",
                "options": {"A": "0", "B": "1", "C": "2", "D": "-1"},
                "correct": "B",
                "explanation": "find() returns the first index where substring is found (index 1 for 'p')."
            },
            {
                "id": "PY-TOPIC-004-MCQ-06",
                "question": "What will 'Python'.find('z') return?",
                "options": {"A": "ValueError", "B": "-1", "C": "False", "D": "None"},
                "correct": "B",
                "explanation": "find() returns -1 if substring is not found, unlike index() which raises ValueError."
            },
            {
                "id": "PY-TOPIC-004-MCQ-07",
                "question": "What is the output of: print('abc' * 3)?",
                "options": {"A": "abc3", "B": "abcabcabc", "C": "['abc', 'abc', 'abc']", "D": "TypeError"},
                "correct": "B",
                "explanation": "Multiplying a string by an integer repeats the string that many times."
            },
            {
                "id": "PY-TOPIC-004-MCQ-08",
                "question": "What is the output of: print('hello'.capitalize())?",
                "options": {"A": "HELLO", "B": "Hello", "C": "hello", "D": "hEllo"},
                "correct": "B",
                "explanation": "capitalize() converts first character to uppercase and the rest to lowercase."
            },
            {
                "id": "PY-TOPIC-004-MCQ-09",
                "question": "What does '12345'.isdigit() return?",
                "options": {"A": "True", "B": "False", "C": "12345", "D": "int"},
                "correct": "A",
                "explanation": "isdigit() returns True if all characters in the string are digits."
            },
            {
                "id": "PY-TOPIC-004-MCQ-10",
                "question": "What is the output of: print('{0} is {1}'.format('Python', 'awesome'))?",
                "options": {"A": "Python is awesome", "B": "{0} is {1}", "C": "awesome is Python", "D": "TypeError"},
                "correct": "A",
                "explanation": "str.format() substitutes positional index arguments into placeholders."
            }
        ]
    },
    {
        "id": "PY-TOPIC-005",
        "topic": "Lists",
        "topicName": "Lists",
        "definition": [
            "A list is an ordered, mutable sequence of items enclosed in square brackets [].",
            "Lists can contain elements of diverse data types including nested lists.",
            "They support dynamic resizing, element reassignment, indexing, and slicing.",
            "Common list operations include append(), extend(), insert(), pop(), remove(), and sort()."
        ],
        "syntax": "nums = [10, 20, 30]\nnums.append(40)    # [10, 20, 30, 40]\nnums[0] = 99       # [99, 20, 30, 40]\nlast = nums.pop()  # 40",
        "examples": [
            {
                "title": "Example 1: Adding and Removing Elements",
                "code": "nums = [1, 2, 3]\nnums.append(4)\nnums.insert(1, 99)\nval = nums.pop()\nprint(nums, 'Popped:', val)",
                "output": "[1, 99, 2, 3] Popped: 4",
                "explanation": "append adds to end, insert places at specific index, and pop removes and returns last element."
            },
            {
                "title": "Example 2: Slicing and Sorting",
                "code": "data = [5, 2, 8, 1, 9]\ndata.sort()\nprint('Sorted:', data)\nprint('Top 3:', data[-3:])",
                "output": "Sorted: [1, 2, 5, 8, 9]\nTop 3: [5, 8, 9]",
                "explanation": "sort() rearranges items in-place ascending, and negative slice [-3:] gets highest 3 elements."
            },
            {
                "title": "Example 3: List Modification and References",
                "code": "a = [1, 2]\nb = a\nb.append(3)\nprint('a:', a, 'b:', b)",
                "output": "a: [1, 2, 3] b: [1, 2, 3]",
                "explanation": "Assigning lists copies reference, not contents. Modifying b also modifies a."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-005-MCQ-01",
                "question": "What is the time complexity of appending an element to the end of a Python list?",
                "options": {"A": "O(1) amortized", "B": "O(n)", "C": "O(log n)", "D": "O(n^2)"},
                "correct": "A",
                "explanation": "Python lists are dynamic arrays, so append operates in amortized O(1) constant time."
            },
            {
                "id": "PY-TOPIC-005-MCQ-02",
                "question": "What is the difference between append() and extend() on a list?",
                "options": {"A": "append() adds iterable items one by one, extend() adds as single element", "B": "append() adds element as-is, extend() iterates and unpacks elements", "C": "They are exact synonyms", "D": "extend() only works with strings"},
                "correct": "B",
                "explanation": "append([1,2]) inserts nested list, while extend([1,2]) appends elements individually."
            },
            {
                "id": "PY-TOPIC-005-MCQ-03",
                "question": "What will be the output of: a = [1, 2, 3]; a.extend([4, 5]); print(len(a))?",
                "options": {"A": "4", "B": "5", "C": "3", "D": "6"},
                "correct": "B",
                "explanation": "extend() appends 4 and 5 as separate elements, making total length 5."
            },
            {
                "id": "PY-TOPIC-005-MCQ-04",
                "question": "What does nums.pop(0) do in a Python list of size n?",
                "options": {"A": "Removes first item in O(1) time", "B": "Removes first item and shifts rest in O(n) time", "C": "Removes last item", "D": "Raises IndexError"},
                "correct": "B",
                "explanation": "Popping from index 0 requires shifting all remaining n-1 elements left, running in O(n) time."
            },
            {
                "id": "PY-TOPIC-005-MCQ-05",
                "question": "What is the output of: x = [1, 2, 3]; del x[1]; print(x)?",
                "options": {"A": "[1, 3]", "B": "[2, 3]", "C": "[1, 2]", "D": "[3]"},
                "correct": "A",
                "explanation": "del x[1] deletes element at index 1 (value 2)."
            },
            {
                "id": "PY-TOPIC-005-MCQ-06",
                "question": "What happens when you call nums.remove(val) if val does not exist in the list?",
                "options": {"A": "Returns False", "B": "Raises ValueError", "C": "Does nothing", "D": "Returns -1"},
                "correct": "B",
                "explanation": "remove() raises a ValueError when the target value is absent from the list."
            },
            {
                "id": "PY-TOPIC-005-MCQ-07",
                "question": "What is the output of: print([0] * 4)?",
                "options": {"A": "[0, 0, 0, 0]", "B": "[0]", "C": "0", "D": "[4]"},
                "correct": "A",
                "explanation": "List multiplication repeats the elements inside the list."
            },
            {
                "id": "PY-TOPIC-005-MCQ-08",
                "question": "What is the output of: a = [1, 2, 3]; b = a[:]; print(a is b)?",
                "options": {"A": "True", "B": "False", "C": "None", "D": "TypeError"},
                "correct": "B",
                "explanation": "Slicing a[:] creates a new shallow copy of the list, so their memory addresses differ."
            },
            {
                "id": "PY-TOPIC-005-MCQ-09",
                "question": "Which method sorts a list in-place without creating a new list?",
                "options": {"A": "sorted()", "B": "sort()", "C": "order()", "D": "arrange()"},
                "correct": "B",
                "explanation": "list.sort() sorts in-place and returns None; sorted(list) returns a brand new sorted list."
            },
            {
                "id": "PY-TOPIC-005-MCQ-10",
                "question": "What is the output of: print([1, 2, 3].count(4))?",
                "options": {"A": "-1", "B": "0", "C": "False", "D": "ValueError"},
                "correct": "B",
                "explanation": "count() returns the number of occurrences of an element (0 if absent)."
            }
        ]
    },
    {
        "id": "PY-TOPIC-006",
        "topic": "Tuples",
        "topicName": "Tuples",
        "definition": [
            "A tuple is an ordered, immutable sequence of values enclosed in parentheses ().",
            "Once created, elements of a tuple cannot be modified, added, or removed.",
            "Tuples are faster than lists and use less memory due to their fixed size.",
            "They can be used as dictionary keys and set elements if all items inside are hashable."
        ],
        "syntax": "point = (10, 20)\nx, y = point          # Unpacking: x=10, y=20\nsingle = (5,)         # Trailing comma for single-element tuple",
        "examples": [
            {
                "title": "Example 1: Tuple Creation and Unpacking",
                "code": "coord = (100, 200)\nx, y = coord\nprint('x:', x, 'y:', y)",
                "output": "x: 100 y: 200",
                "explanation": "Parentheses enclose tuple values, and tuple unpacking assigns each value to a variable."
            },
            {
                "title": "Example 2: Single-Element Tuple Trailing Comma",
                "code": "t1 = (5)\nt2 = (5,)\nprint(type(t1), type(t2))",
                "output": "<class 'int'> <class 'tuple'>",
                "explanation": "A single element in parentheses without a comma is treated as an integer expression, not a tuple."
            },
            {
                "title": "Example 3: Immutability and Nested Mutability",
                "code": "t = (1, [10, 20])\nt[1].append(30)\nprint(t)",
                "output": "(1, [10, 20, 30])",
                "explanation": "The tuple container cannot change references, but mutable objects inside it (like lists) can be modified."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-006-MCQ-01",
                "question": "How do you create a tuple with exactly one element 10 in Python?",
                "options": {"A": "(10)", "B": "(10,)", "C": "tuple(10)", "D": "[10,]"},
                "correct": "B",
                "explanation": "A trailing comma (10,) is required to distinguish a single-element tuple from parenthesized expression."
            },
            {
                "id": "PY-TOPIC-006-MCQ-02",
                "question": "Can a tuple contain mutable objects like lists inside it?",
                "options": {"A": "No, tuples only allow immutable elements", "B": "Yes, but the list elements cannot be mutated", "C": "Yes, and the list contents can still be mutated", "D": "Raises TypeError on definition"},
                "correct": "C",
                "explanation": "Tuples hold references. The references cannot change, but the mutable object inside can be mutated."
            },
            {
                "id": "PY-TOPIC-006-MCQ-03",
                "question": "Why are tuples preferred over lists for fixed coordinates or dictionary keys?",
                "options": {"A": "Tuples are immutable and therefore hashable (if elements are hashable)", "B": "Tuples support more methods than lists", "C": "Tuples can grow dynamically", "D": "Tuples cannot be indexed"},
                "correct": "A",
                "explanation": "Immutability allows tuples with hashable items to produce a consistent hash value."
            },
            {
                "id": "PY-TOPIC-006-MCQ-04",
                "question": "What is the output of: t = (1, 2, 3); print(t.index(2))?",
                "options": {"A": "0", "B": "1", "C": "2", "D": "None"},
                "correct": "B",
                "explanation": "index() returns the index position of value 2, which is index 1."
            },
            {
                "id": "PY-TOPIC-006-MCQ-05",
                "question": "What will occur if you run: t = (1, 2, 3); t[0] = 99?",
                "options": {"A": "t becomes (99, 2, 3)", "B": "TypeError", "C": "ValueError", "D": "AttributeError"},
                "correct": "B",
                "explanation": "Tuples do not support item assignment because they are immutable."
            },
            {
                "id": "PY-TOPIC-006-MCQ-06",
                "question": "Which of the following methods is valid on a tuple object?",
                "options": {"A": "append()", "B": "pop()", "C": "count()", "D": "reverse()"},
                "correct": "C",
                "explanation": "Tuples only have two built-in methods: count() and index()."
            },
            {
                "id": "PY-TOPIC-006-MCQ-07",
                "question": "What is the output of: a, *b = (1, 2, 3, 4); print(b)?",
                "options": {"A": "(2, 3, 4)", "B": "[2, 3, 4]", "C": "2", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "Extended unpacking with * gathers remaining elements into a list: [2, 3, 4]."
            },
            {
                "id": "PY-TOPIC-006-MCQ-08",
                "question": "What is the output of: print((1, 2) + (3, 4))?",
                "options": {"A": "(4, 6)", "B": "(1, 2, 3, 4)", "C": "((1, 2), (3, 4))", "D": "TypeError"},
                "correct": "B",
                "explanation": "The + operator concatenates two tuples into a new tuple."
            },
            {
                "id": "PY-TOPIC-006-MCQ-09",
                "question": "Can a tuple containing a list like (1, [2, 3]) be used as a dictionary key?",
                "options": {"A": "Yes, because the outer container is a tuple", "B": "No, because the list inside is unhashable", "C": "Only if converted to string", "D": "Yes, always"},
                "correct": "B",
                "explanation": "An object used as a dictionary key must be fully hashable; a tuple with a list raises TypeError: unhashable type."
            },
            {
                "id": "PY-TOPIC-006-MCQ-10",
                "question": "What does tuple('cat') evaluate to?",
                "options": {"A": "('cat')", "B": "('c', 'a', 't')", "C": "['c', 'a', 't']", "D": "('cat',)"},
                "correct": "B",
                "explanation": "Passing a string to tuple() unpacks each character into a tuple element."
            }
        ]
    },
    {
        "id": "PY-TOPIC-007",
        "topic": "Sets",
        "topicName": "Sets",
        "definition": [
            "A set is an unordered collection of unique, hashable items enclosed in curly braces {}.",
            "Sets automatically eliminate duplicate values and do not record element positions.",
            "They support mathematical set operations like union, intersection, difference, and symmetric difference.",
            "Membership testing ('in') in a set runs in average O(1) time using an internal hash table."
        ],
        "syntax": "s = {1, 2, 3, 2, 1}   # {1, 2, 3}\ns.add(4)             # adds 4\nempty_set = set()    # Note: {} creates an empty dict",
        "examples": [
            {
                "title": "Example 1: Removing Duplicates and Membership",
                "code": "nums = [1, 2, 2, 3, 3, 4]\nunique = set(nums)\nprint(unique, 2 in unique)",
                "output": "{1, 2, 3, 4} True",
                "explanation": "Converting an iterable to a set removes duplicates, and 'in' checks membership in O(1) time."
            },
            {
                "title": "Example 2: Set Operations (Union & Intersection)",
                "code": "a = {1, 2, 3}\nb = {3, 4, 5}\nprint('Union:', a | b)\nprint('Intersection:', a & b)",
                "output": "Union: {1, 2, 3, 4, 5}\nIntersection: {3}",
                "explanation": "Pipe | computes union of all elements, ampersand & finds common elements."
            },
            {
                "title": "Example 3: Difference and Symmetric Difference",
                "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint('Diff (a-b):', a - b)\nprint('Sym Diff (a^b):', a ^ b)",
                "output": "Diff (a-b): {1}\nSym Diff (a^b): {1, 4}",
                "explanation": "- finds elements only in a, and ^ finds elements in either set but not both."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-007-MCQ-01",
                "question": "How do you create an empty set in Python?",
                "options": {"A": "{}", "B": "set()", "C": "[]", "D": "set({})"},
                "correct": "B",
                "explanation": "{} creates an empty dictionary. set() is required to create an empty set."
            },
            {
                "id": "PY-TOPIC-007-MCQ-02",
                "question": "What is the average time complexity of checking 'x in my_set' in Python?",
                "options": {"A": "O(n)", "B": "O(1)", "C": "O(log n)", "D": "O(n^2)"},
                "correct": "B",
                "explanation": "Sets are implemented with hash tables, providing average O(1) constant time lookups."
            },
            {
                "id": "PY-TOPIC-007-MCQ-03",
                "question": "What is the output of: print(len({1, 1, 2, 2, 3, 3}))?",
                "options": {"A": "6", "B": "3", "C": "1", "D": "TypeError"},
                "correct": "B",
                "explanation": "Sets only store unique elements, so duplicates are discarded leaving {1, 2, 3} of length 3."
            },
            {
                "id": "PY-TOPIC-007-MCQ-04",
                "question": "Can a set contain a list as one of its elements: {[1, 2], 3}?",
                "options": {"A": "Yes, sets can store any data type", "B": "No, raises TypeError: unhashable type: 'list'", "C": "Yes, but the list becomes immutable", "D": "Only if list is sorted"},
                "correct": "B",
                "explanation": "Set elements must be hashable. Lists are mutable and unhashable, causing a TypeError."
            },
            {
                "id": "PY-TOPIC-007-MCQ-05",
                "question": "What is the difference between remove() and discard() in sets?",
                "options": {"A": "remove() raises KeyError if element missing, discard() does not", "B": "discard() raises KeyError, remove() does not", "C": "discard() only removes numbers", "D": "They behave identically"},
                "correct": "A",
                "explanation": "set.remove(x) raises KeyError if x is missing; set.discard(x) silently ignores absent items."
            },
            {
                "id": "PY-TOPIC-007-MCQ-06",
                "question": "What does a.symmetric_difference(b) calculate?",
                "options": {"A": "Elements present in both sets", "B": "Elements present in either set, but not both", "C": "Elements in a that are not in b", "D": "All elements combined"},
                "correct": "B",
                "explanation": "Symmetric difference (a ^ b) yields elements present in exactly one of the sets."
            },
            {
                "id": "PY-TOPIC-007-MCQ-07",
                "question": "What is a frozenset in Python?",
                "options": {"A": "A set stored on disk", "B": "An immutable, hashable version of a set", "C": "A set that only holds integers", "D": "A sorted set"},
                "correct": "B",
                "explanation": "frozenset is an immutable set that cannot be modified and can be used as dictionary keys."
            },
            {
                "id": "PY-TOPIC-007-MCQ-08",
                "question": "What is the output of: print({1, 2} <= {1, 2, 3})?",
                "options": {"A": "True", "B": "False", "C": "TypeError", "D": "{-1}"},
                "correct": "A",
                "explanation": "The <= operator tests whether the left set is a subset of the right set."
            },
            {
                "id": "PY-TOPIC-007-MCQ-09",
                "question": "Can you access elements of a set using indexing like s[0]?",
                "options": {"A": "Yes, sets support 0-based indexing", "B": "No, raises TypeError: 'set' object is not subscriptable", "C": "Only if set is converted to frozenset", "D": "Returns the minimum element"},
                "correct": "B",
                "explanation": "Sets are unordered collections, so index-based access is not supported."
            },
            {
                "id": "PY-TOPIC-007-MCQ-10",
                "question": "What is the output of: print({True, 1, 1.0})?",
                "options": {"A": "{True, 1, 1.0}", "B": "{True}", "C": "{1}", "D": "{True, 1}"},
                "correct": "B",
                "explanation": "In Python, True == 1 == 1.0 and they share identical hash values, so only the first inserted element is kept."
            }
        ]
    },
    {
        "id": "PY-TOPIC-008",
        "topic": "Dictionaries",
        "topicName": "Dictionaries",
        "definition": [
            "A dictionary is a mutable collection of key-value pairs enclosed in curly braces {key: value}.",
            "Keys must be unique and immutable (hashable), while values can be of any data type.",
            "As of Python 3.7+, dictionaries maintain insertion order of keys by default.",
            "Key operations include get(), keys(), values(), items(), update(), and pop()."
        ],
        "syntax": "user = {'name': 'Koti', 'role': 'Admin'}\nprint(user['name'])         # 'Koti'\nuser['city'] = 'Bengaluru'   # Add/update key\nage = user.get('age', 25)   # Default value if missing",
        "examples": [
            {
                "title": "Example 1: Creating and Accessing Dictionary",
                "code": "student = {'id': 101, 'name': 'Rahul', 'score': 92}\nprint(student['name'])\nprint(student.get('grade', 'N/A'))",
                "output": "Rahul\nN/A",
                "explanation": "Square brackets access existing keys, while get() safely returns a default value if key is missing."
            },
            {
                "title": "Example 2: Iterating Over Items",
                "code": "prices = {'pen': 10, 'book': 50}\nfor item, price in prices.items():\n    print(f'{item}: Rs.{price}')",
                "output": "pen: Rs.10\nbook: Rs.50",
                "explanation": "items() returns key-value tuples that can be unpacked directly in a for loop."
            },
            {
                "title": "Example 3: Dictionary Update and Merge (Python 3.9+)",
                "code": "d1 = {'a': 1, 'b': 2}\nd2 = {'b': 99, 'c': 3}\nmerged = d1 | d2\nprint(merged)",
                "output": "{'a': 1, 'b': 99, 'c': 3}",
                "explanation": "The merge operator | combines dictionaries, overwriting values from left with matching keys from right."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-008-MCQ-01",
                "question": "What is the average time complexity for key lookup in a Python dictionary?",
                "options": {"A": "O(1)", "B": "O(n)", "C": "O(log n)", "D": "O(n^2)"},
                "correct": "A",
                "explanation": "Dictionaries use hash tables, achieving average O(1) constant time lookup."
            },
            {
                "id": "PY-TOPIC-008-MCQ-02",
                "question": "What happens if you access a missing key using d['missing_key']?",
                "options": {"A": "Returns None", "B": "Raises KeyError", "C": "Returns False", "D": "Inserts key with value None"},
                "correct": "B",
                "explanation": "Accessing an absent key with square brackets raises a KeyError; use get() for a safe fallback."
            },
            {
                "id": "PY-TOPIC-008-MCQ-03",
                "question": "Which of the following data types CANNOT be used as a dictionary key?",
                "options": {"A": "tuple with integers", "B": "string", "C": "list", "D": "frozenset"},
                "correct": "C",
                "explanation": "Dictionary keys must be hashable. Lists are mutable and unhashable."
            },
            {
                "id": "PY-TOPIC-008-MCQ-04",
                "question": "What is the output of: d = {'a': 1}; print(d.get('b', 100))?",
                "options": {"A": "None", "B": "KeyError", "C": "100", "D": "0"},
                "correct": "C",
                "explanation": "get(key, default) returns the specified default value (100) when key is not found."
            },
            {
                "id": "PY-TOPIC-008-MCQ-05",
                "question": "Starting from Python 3.7, how do standard dictionaries handle key order?",
                "options": {"A": "Alphabetical order", "B": "Preserves insertion order", "C": "Unordered and random", "D": "Sorted by hash value"},
                "correct": "B",
                "explanation": "Python 3.7+ guarantees that standard dictionaries preserve insertion order."
            },
            {
                "id": "PY-TOPIC-008-MCQ-06",
                "question": "What does d.setdefault('count', 0) do if 'count' is already present with value 5?",
                "options": {"A": "Overwrites value to 0", "B": "Returns 5 and leaves dictionary unchanged", "C": "Raises KeyError", "D": "Deletes key"},
                "correct": "B",
                "explanation": "setdefault() only sets the default value if the key does not already exist; otherwise returns current value."
            },
            {
                "id": "PY-TOPIC-008-MCQ-07",
                "question": "What will be the output of: d = {1: 'A', 1.0: 'B'}; print(len(d), d[1])?",
                "options": {"A": "2 'A'", "B": "1 'B'", "C": "2 'B'", "D": "1 'A'"},
                "correct": "B",
                "explanation": "1 and 1.0 have equal values and identical hashes, so 1.0 overwrites key 1, leaving length 1 and value 'B'."
            },
            {
                "id": "PY-TOPIC-008-MCQ-08",
                "question": "Which method removes all items from a dictionary?",
                "options": {"A": "delete()", "B": "clear()", "C": "remove_all()", "D": "flush()"},
                "correct": "B",
                "explanation": "dict.clear() empties all key-value pairs from the dictionary in-place."
            },
            {
                "id": "PY-TOPIC-008-MCQ-09",
                "question": "What is the output of: d = {'x': 10, 'y': 20}; print(list(d))?",
                "options": {"A": "['x', 'y']", "B": "[10, 20]", "C": "[('x', 10), ('y', 20)]", "D": "['x': 10, 'y': 20]"},
                "correct": "A",
                "explanation": "Iterating over a dictionary (or converting to list) yields its keys."
            },
            {
                "id": "PY-TOPIC-008-MCQ-10",
                "question": "What does dict.pop(key) return when called on an existing key?",
                "options": {"A": "The key", "B": "The value associated with that key", "C": "A tuple of (key, value)", "D": "True"},
                "correct": "B",
                "explanation": "pop(key) removes the key and returns its corresponding value."
            }
        ]
    },
    {
        "id": "PY-TOPIC-009",
        "topic": "list vs tuple",
        "topicName": "list vs tuple",
        "definition": [
            "Lists are mutable and enclosed in square brackets [], allowing items to be modified or appended.",
            "Tuples are immutable and enclosed in parentheses (), preventing modifications after creation.",
            "Tuples require less memory and offer faster iteration speeds than lists.",
            "Tuples with hashable elements can be used as dictionary keys, whereas lists cannot."
        ],
        "syntax": "# List (mutable)\nmy_list = [1, 2, 3]\nmy_list[0] = 10\n\n# Tuple (immutable)\nmy_tuple = (1, 2, 3)\n# my_tuple[0] = 10 -> TypeError!",
        "examples": [
            {
                "title": "Example 1: Mutability Demonstration",
                "code": "lst = [1, 2]\ntpl = (1, 2)\nlst.append(3)\nprint('List mutated:', lst)\n# tpl.append(3) would fail",
                "output": "List mutated: [1, 2, 3]",
                "explanation": "Lists allow adding and mutating elements in-place; tuples cannot be changed."
            },
            {
                "title": "Example 2: Memory Footprint Comparison",
                "code": "import sys\nl = [1, 2, 3, 4, 5]\nt = (1, 2, 3, 4, 5)\nprint('List size:', sys.getsizeof(l))\nprint('Tuple size:', sys.getsizeof(t))",
                "output": "List size: 104\nTuple size: 80",
                "explanation": "Tuples allocate exact memory because they cannot grow, making them more memory efficient."
            },
            {
                "title": "Example 3: Usability as Dictionary Keys",
                "code": "d = {}\nt = (10, 20)\nd[t] = 'Success'\nprint(d[t])\n# l = [10, 20]; d[l] = 'Fail' -> raises TypeError",
                "output": "Success",
                "explanation": "Tuples are hashable and valid as dictionary keys; mutable lists cannot be hashed."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-009-MCQ-01",
                "question": "What is the primary difference between a list and a tuple in Python?",
                "options": {"A": "Lists are ordered while tuples are unordered", "B": "Lists are mutable while tuples are immutable", "C": "Lists only store numbers", "D": "Tuples cannot be indexed"},
                "correct": "B",
                "explanation": "The fundamental difference is that lists can be modified after creation, while tuples cannot."
            },
            {
                "id": "PY-TOPIC-009-MCQ-02",
                "question": "Why does a tuple consume less memory than an identical list?",
                "options": {"A": "Tuples compress values internally", "B": "Lists over-allocate memory to support dynamic append() operations", "C": "Tuples only hold 16-bit pointers", "D": "Lists store types separately"},
                "correct": "B",
                "explanation": "Lists over-allocate memory slots for fast resizing, whereas tuples allocate exact memory for fixed size."
            },
            {
                "id": "PY-TOPIC-009-MCQ-03",
                "question": "Which data structure can be safely used as a key in a dictionary?",
                "options": {"A": "A list [1, 2]", "B": "A tuple (1, 2)", "C": "A set {1, 2}", "D": "A dictionary {'a': 1}"},
                "correct": "B",
                "explanation": "A tuple containing hashable elements is immutable and hashable, making it valid as a dict key."
            },
            {
                "id": "PY-TOPIC-009-MCQ-04",
                "question": "What is the return type of: (1, 2, 3) + (4,)?",
                "options": {"A": "list", "B": "tuple", "C": "set", "D": "generator"},
                "correct": "B",
                "explanation": "Concatenating two tuples with + produces a new tuple: (1, 2, 3, 4)."
            },
            {
                "id": "PY-TOPIC-009-MCQ-05",
                "question": "Which syntax creates a list and which creates a tuple?",
                "options": {"A": "[] creates list, () creates tuple", "B": "{} creates list, [] creates tuple", "C": "() creates list, [] creates tuple", "D": "set() creates list, tuple() creates tuple"},
                "correct": "A",
                "explanation": "Square brackets define lists; parentheses define tuples."
            },
            {
                "id": "PY-TOPIC-009-MCQ-06",
                "question": "If you have a collection of 7 days of the week that never changes, which type is best practice?",
                "options": {"A": "list", "B": "tuple", "C": "queue", "D": "stack"},
                "correct": "B",
                "explanation": "Tuples convey intentional immutability for constant data that should never change."
            },
            {
                "id": "PY-TOPIC-009-MCQ-07",
                "question": "What is the output of: a = [1, 2]; t = (a, 3); a[0] = 99; print(t)?",
                "options": {"A": "([99, 2], 3)", "B": "([1, 2], 3)", "C": "TypeError", "D": "(99, 3)"},
                "correct": "A",
                "explanation": "The tuple holds a reference to list a. Mutating the list reflects when inspecting the tuple."
            },
            {
                "id": "PY-TOPIC-009-MCQ-08",
                "question": "Can you convert a list 'l' into a tuple in Python?",
                "options": {"A": "Yes, using tuple(l)", "B": "No, casting is unsupported", "C": "Only if list is sorted", "D": "Yes, using l.to_tuple()"},
                "correct": "A",
                "explanation": "Calling the built-in constructor tuple(l) creates a tuple containing the list's items."
            },
            {
                "id": "PY-TOPIC-009-MCQ-09",
                "question": "Which operation is supported by BOTH list and tuple?",
                "options": {"A": ".append()", "B": ".pop()", "C": "Indexing and slicing [0:2]", "D": ".extend()"},
                "correct": "C",
                "explanation": "Both lists and tuples are ordered sequences supporting indexing and slicing."
            },
            {
                "id": "PY-TOPIC-009-MCQ-10",
                "question": "What happens when you execute: x = [1, 2]; x += [3] vs y = (1, 2); y += (3,)?",
                "options": {"A": "Both mutate in-place", "B": "x mutates in-place (same ID), y creates a new tuple object (new ID)", "C": "Both create new objects", "D": "y raises an error"},
                "correct": "B",
                "explanation": "List += modifies the list in-place (calls extend), while tuple += rebinds y to a newly allocated tuple."
            }
        ]
    },
    {
        "id": "PY-TOPIC-010",
        "topic": "list vs set",
        "topicName": "list vs set",
        "definition": [
            "Lists are ordered and allow duplicate elements, accessed via numeric indices.",
            "Sets are unordered, enforce uniqueness with zero duplicates, and do not support indexing.",
            "Membership testing 'x in collection' is O(n) for lists but average O(1) for sets.",
            "Sets use internal hash tables and require all elements to be hashable."
        ],
        "syntax": "# List: allows duplicates, maintains order\nl = [1, 2, 2, 3]\n\n# Set: unique only, unordered\ns = {1, 2, 2, 3}  # results in {1, 2, 3}",
        "examples": [
            {
                "title": "Example 1: Duplicate Handling and Ordering",
                "code": "lst = [3, 1, 2, 2, 1]\nst = set(lst)\nprint('List:', lst)\nprint('Set:', st)",
                "output": "List: [3, 1, 2, 2, 1]\nSet: {1, 2, 3}",
                "explanation": "Lists preserve exact insertion order and duplicates, while sets eliminate duplicates."
            },
            {
                "title": "Example 2: Fast Lookup Performance Difference",
                "code": "data_list = list(range(1000))\ndata_set = set(data_list)\nprint(999 in data_list)  # O(n)\nprint(999 in data_set)   # O(1)",
                "output": "True\nTrue",
                "explanation": "Searching a list checks items linearly (O(n)), while a set computes hash and checks in O(1)."
            },
            {
                "title": "Example 3: Mathematical Operations Support",
                "code": "s1 = {1, 2, 3}\ns2 = {2, 3, 4}\nprint('Common:', s1 & s2)\n# Lists do not support & or | operators",
                "output": "Common: {2, 3}",
                "explanation": "Sets natively support intersection &, union |, and difference -; lists do not."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-010-MCQ-01",
                "question": "What is the time complexity of checking if an item exists in a set vs in a list?",
                "options": {"A": "Set: O(1) avg, List: O(n)", "B": "Set: O(n), List: O(1)", "C": "Both are O(1)", "D": "Both are O(log n)"},
                "correct": "A",
                "explanation": "Sets use hash tables for O(1) average lookup; lists scan sequentially in O(n) time."
            },
            {
                "id": "PY-TOPIC-010-MCQ-02",
                "question": "Can a set contain duplicate values in Python?",
                "options": {"A": "Yes, if allowed by setting allow_duplicates=True", "B": "No, sets strictly enforce uniqueness", "C": "Only if elements are strings", "D": "Yes, up to 2 duplicates"},
                "correct": "B",
                "explanation": "Sets only store distinct unique elements."
            },
            {
                "id": "PY-TOPIC-010-MCQ-03",
                "question": "How do you remove duplicates from a list 'nums' in the fewest lines of code?",
                "options": {"A": "nums.unique()", "B": "list(set(nums))", "C": "remove_duplicates(nums)", "D": "nums.distinct()"},
                "correct": "B",
                "explanation": "list(set(nums)) filters out duplicates by converting through a set."
            },
            {
                "id": "PY-TOPIC-010-MCQ-04",
                "question": "Why does attempting s[0] on a set raise a TypeError?",
                "options": {"A": "Sets do not contain items", "B": "Sets are unordered collections without positional indices", "C": "Sets are immutable", "D": "Set indices start at 1"},
                "correct": "B",
                "explanation": "Sets do not have a defined order or sequence index, making subscript access invalid."
            },
            {
                "id": "PY-TOPIC-010-MCQ-05",
                "question": "Which collection allows storing another list inside it?",
                "options": {"A": "List: [[1, 2], [3, 4]]", "B": "Set: {[1, 2], [3, 4]}", "C": "Both list and set", "D": "Neither"},
                "correct": "A",
                "explanation": "Lists can store mutable lists. Sets require hashable elements, so storing lists inside raises TypeError."
            },
            {
                "id": "PY-TOPIC-010-MCQ-06",
                "question": "What is the output of: print(len(set([1, 2, 2, 3, 3, 3])))?",
                "options": {"A": "6", "B": "3", "C": "1", "D": "5"},
                "correct": "B",
                "explanation": "Converting the 6-element list to a set retains only {1, 2, 3}, which has length 3."
            },
            {
                "id": "PY-TOPIC-010-MCQ-07",
                "question": "Which operation is supported by set but NOT supported by list directly?",
                "options": {"A": "Iterating with for loop", "B": "len() function", "C": "Intersection using '&' operator", "D": "in operator"},
                "correct": "C",
                "explanation": "The & operator is defined for set intersection; lists do not support the bitwise & operator."
            },
            {
                "id": "PY-TOPIC-010-MCQ-08",
                "question": "When should you prefer a list over a set?",
                "options": {"A": "When element order and duplicate occurrences matter", "B": "When fast lookup is the only requirement", "C": "When performing union operations", "D": "When finding distinct values"},
                "correct": "A",
                "explanation": "Lists preserve exact positional ordering and allow duplicates."
            },
            {
                "id": "PY-TOPIC-010-MCQ-09",
                "question": "What happens if you convert a set back to a list using list(my_set)?",
                "options": {"A": "The list elements are always guaranteed in ascending order", "B": "The list elements may appear in an arbitrary order", "C": "Raises TypeError", "D": "Returns an empty list"},
                "correct": "B",
                "explanation": "Since sets do not maintain sequence order, list(my_set) order is arbitrary."
            },
            {
                "id": "PY-TOPIC-010-MCQ-10",
                "question": "What is the space overhead of a set compared to a list with identical unique elements?",
                "options": {"A": "Sets consume less memory than lists", "B": "Sets consume more memory than lists due to hash table buckets and sparse array", "C": "Memory consumption is identical", "D": "Sets take zero memory"},
                "correct": "B",
                "explanation": "Hash tables require sparse bucket arrays to keep collision rates low, increasing memory usage."
            }
        ]
    }
]
