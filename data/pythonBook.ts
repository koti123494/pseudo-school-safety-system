// AUTO-GENERATED PYTHON BOOK DATA - 50 TOPICS, 150 EXAMPLES, 500 PLACEMENT MCQs
// Conforms to exact specifications requested by user.

export interface PythonBookExample {
  title: string;
  code: string;
  output: string;
  explanation: string;
}

export interface PythonBookMCQ {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: "A" | "B" | "C" | "D";
  explanation: string;
}

export interface PythonTopic {
  id: string;
  topic: string;
  topicName: string;
  definition: [string, string, string, string];
  syntax: string;
  examples: PythonBookExample[];
  mcqs: PythonBookMCQ[];
}

export const pythonBookTopics: PythonTopic[] = [
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
        "options": {
          "A": "James Gosling, 1995",
          "B": "Guido van Rossum, 1991",
          "C": "Dennis Ritchie, 1972",
          "D": "Bjarne Stroustrup, 1985"
        },
        "correct": "B",
        "explanation": "Guido van Rossum released Python in February 1991."
      },
      {
        "id": "PY-TOPIC-001-MCQ-02",
        "question": "Which file extension is used to save Python source code files?",
        "options": {
          "A": ".py",
          "B": ".python",
          "C": ".p",
          "D": ".pyt"
        },
        "correct": "A",
        "explanation": "Standard Python source files use the .py extension."
      },
      {
        "id": "PY-TOPIC-001-MCQ-03",
        "question": "How is a block of code defined in Python instead of using curly braces {}?",
        "options": {
          "A": "Parentheses ()",
          "B": "Square brackets []",
          "C": "Indentation (whitespace)",
          "D": "Semicolons ;"
        },
        "correct": "C",
        "explanation": "Python strictly enforces indentation to delimit code blocks."
      },
      {
        "id": "PY-TOPIC-001-MCQ-04",
        "question": "What is the output of print(type(3.14)) in Python?",
        "options": {
          "A": "<class 'double'>",
          "B": "<class 'float'>",
          "C": "<class 'number'>",
          "D": "<class 'decimal'>"
        },
        "correct": "B",
        "explanation": "Real numbers with decimals in Python belong to the float class."
      },
      {
        "id": "PY-TOPIC-001-MCQ-05",
        "question": "Which character is used for writing single-line comments in Python?",
        "options": {
          "A": "//",
          "B": "/*",
          "C": "#",
          "D": "--"
        },
        "correct": "C",
        "explanation": "The hash '#' symbol denotes a single-line comment in Python."
      },
      {
        "id": "PY-TOPIC-001-MCQ-06",
        "question": "What does PEP 8 stand for in Python ecosystem?",
        "options": {
          "A": "Python Execution Protocol 8",
          "B": "Python Enhancement Proposal 8 (Style Guide)",
          "C": "Python Error Prevention 8",
          "D": "Python Extension Package 8"
        },
        "correct": "B",
        "explanation": "PEP 8 is the official style guide for writing readable Python code."
      },
      {
        "id": "PY-TOPIC-001-MCQ-07",
        "question": "Which of the following is an invalid identifier name in Python?",
        "options": {
          "A": "_total_sum",
          "B": "score_2026",
          "C": "2nd_value",
          "D": "totalCost"
        },
        "correct": "C",
        "explanation": "Variable and function names cannot start with a numeric digit."
      },
      {
        "id": "PY-TOPIC-001-MCQ-08",
        "question": "What is the output of print(bool('False')) in Python?",
        "options": {
          "A": "False",
          "B": "True",
          "C": "None",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "Any non-empty string in Python evaluates to boolean True."
      },
      {
        "id": "PY-TOPIC-001-MCQ-09",
        "question": "Python source code is compiled into which intermediate format before execution?",
        "options": {
          "A": "Machine code (.exe)",
          "B": "Bytecode (.pyc)",
          "C": "Assembly code",
          "D": "Binary binary"
        },
        "correct": "B",
        "explanation": "The CPython interpreter compiles .py code into bytecode (.pyc) executed on PVM."
      },
      {
        "id": "PY-TOPIC-001-MCQ-10",
        "question": "What happens if you execute: print('A', 'B', sep='-')?",
        "options": {
          "A": "A B",
          "B": "A-B",
          "C": "AB",
          "D": "SyntaxError"
        },
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
        "options": {
          "A": "<class 'int'>",
          "B": "<class 'float'>",
          "C": "<class 'double'>",
          "D": "<class 'number'>"
        },
        "correct": "B",
        "explanation": "The single slash division operator '/' always returns a float in Python 3."
      },
      {
        "id": "PY-TOPIC-002-MCQ-02",
        "question": "Which of the following values is evaluated as False in a boolean context?",
        "options": {
          "A": "'0'",
          "B": "[0]",
          "C": "[]",
          "D": "(0,)"
        },
        "correct": "C",
        "explanation": "An empty list [] evaluates to False; non-empty strings and containers evaluate to True."
      },
      {
        "id": "PY-TOPIC-002-MCQ-03",
        "question": "What will be the output of: x = 5; print(id(x) == id(5))?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "Error",
          "D": "None"
        },
        "correct": "A",
        "explanation": "Python caches small integers (-5 to 256), so both refer to the exact same memory address."
      },
      {
        "id": "PY-TOPIC-002-MCQ-04",
        "question": "What is the maximum limit for an integer value in Python 3?",
        "options": {
          "A": "2^31 - 1",
          "B": "2^63 - 1",
          "C": "2^64 - 1",
          "D": "Limited only by available machine memory"
        },
        "correct": "D",
        "explanation": "Python 3 supports arbitrarily large integers limited only by RAM."
      },
      {
        "id": "PY-TOPIC-002-MCQ-05",
        "question": "What is the output of: int('101', 2)?",
        "options": {
          "A": "101",
          "B": "5",
          "C": "2",
          "D": "ValueError"
        },
        "correct": "B",
        "explanation": "The second parameter specifies base 2 (binary), and binary 101 equals decimal 5."
      },
      {
        "id": "PY-TOPIC-002-MCQ-06",
        "question": "What is the type of variable x after: x = 3 + 4j?",
        "options": {
          "A": "<class 'complex'>",
          "B": "<class 'imaginary'>",
          "C": "<class 'float'>",
          "D": "<class 'tuple'>"
        },
        "correct": "A",
        "explanation": "Numbers with 'j' represent complex numbers with real and imaginary parts."
      },
      {
        "id": "PY-TOPIC-002-MCQ-07",
        "question": "Which built-in function returns the memory address of an object in Python?",
        "options": {
          "A": "loc()",
          "B": "address()",
          "C": "id()",
          "D": "pointer()"
        },
        "correct": "C",
        "explanation": "id() returns the unique integer identity (memory address in CPython) of an object."
      },
      {
        "id": "PY-TOPIC-002-MCQ-08",
        "question": "What is the result of float('inf') > 10**100 in Python?",
        "options": {
          "A": "False",
          "B": "True",
          "C": "OverflowError",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "float('inf') represents positive infinity, which is greater than any finite number."
      },
      {
        "id": "PY-TOPIC-002-MCQ-09",
        "question": "What is the output of: x = None; print(type(x))?",
        "options": {
          "A": "<class 'None'>",
          "B": "<class 'NoneType'>",
          "C": "<class 'null'>",
          "D": "<class 'void'>"
        },
        "correct": "B",
        "explanation": "The singleton None is an instance of the class NoneType."
      },
      {
        "id": "PY-TOPIC-002-MCQ-10",
        "question": "What does a = b = c = 10 do in Python?",
        "options": {
          "A": "Assigns 10 to a, b, and c referencing the same integer object",
          "B": "Causes SyntaxError",
          "C": "Only assigns 10 to c",
          "D": "Creates a tuple (10, 10, 10)"
        },
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
        "options": {
          "A": "64",
          "B": "512",
          "C": "36",
          "D": "256"
        },
        "correct": "B",
        "explanation": "The exponentiation operator ** has right-to-left associativity: 3**2 = 9, then 2**9 = 512."
      },
      {
        "id": "PY-TOPIC-003-MCQ-02",
        "question": "What is the output of: print(-7 // 2)?",
        "options": {
          "A": "-3",
          "B": "-4",
          "C": "-3.5",
          "D": "3"
        },
        "correct": "B",
        "explanation": "Floor division rounds down towards negative infinity, so -3.5 floors to -4."
      },
      {
        "id": "PY-TOPIC-003-MCQ-03",
        "question": "Which operator checks if an item exists within a collection or sequence?",
        "options": {
          "A": "exists",
          "B": "in",
          "C": "has",
          "D": "contains"
        },
        "correct": "B",
        "explanation": "'in' is Python's membership operator."
      },
      {
        "id": "PY-TOPIC-003-MCQ-04",
        "question": "What is the value of: 10 > 5 == True?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "TypeError",
          "D": "1"
        },
        "correct": "B",
        "explanation": "Operator chaining transforms this into (10 > 5) and (5 == True). Since 5 != True, the result is False."
      },
      {
        "id": "PY-TOPIC-003-MCQ-05",
        "question": "What is the output of: print(5 & 3) in Python?",
        "options": {
          "A": "7",
          "B": "1",
          "C": "2",
          "D": "15"
        },
        "correct": "B",
        "explanation": "Bitwise AND: 5 (101) & 3 (011) = 001 (1 in decimal)."
      },
      {
        "id": "PY-TOPIC-003-MCQ-06",
        "question": "What is the output of: print(not 0)?",
        "options": {
          "A": "0",
          "B": "1",
          "C": "True",
          "D": "False"
        },
        "correct": "C",
        "explanation": "0 is falsy, so 'not 0' yields boolean True."
      },
      {
        "id": "PY-TOPIC-003-MCQ-07",
        "question": "What is the output of: print(bool([] == False))?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "None",
          "D": "Error"
        },
        "correct": "B",
        "explanation": "An empty list is falsy in condition checks, but [] does not equal the boolean object False directly."
      },
      {
        "id": "PY-TOPIC-003-MCQ-08",
        "question": "What is the result of the bitwise shift: 4 << 2?",
        "options": {
          "A": "1",
          "B": "8",
          "C": "16",
          "D": "32"
        },
        "correct": "C",
        "explanation": "Left shifting 4 (100) by 2 bits gives 10000 in binary (16 in decimal, equivalent to 4 * 2^2)."
      },
      {
        "id": "PY-TOPIC-003-MCQ-09",
        "question": "What does the expression 'a is not b' evaluate?",
        "options": {
          "A": "Checks if values are unequal",
          "B": "Checks if variables point to different objects in memory",
          "C": "Checks if types differ",
          "D": "Syntax error"
        },
        "correct": "B",
        "explanation": "'is not' is the negative identity operator comparing memory IDs."
      },
      {
        "id": "PY-TOPIC-003-MCQ-10",
        "question": "What is the output of: print(True + True * 3)?",
        "options": {
          "A": "4",
          "B": "6",
          "C": "True",
          "D": "TypeError"
        },
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
        "options": {
          "A": "List",
          "B": "String",
          "C": "Set",
          "D": "Dictionary"
        },
        "correct": "B",
        "explanation": "Strings in Python are immutable; modifying them creates a new string object."
      },
      {
        "id": "PY-TOPIC-004-MCQ-02",
        "question": "What is the output of: s = 'Python'; print(s[1:4])?",
        "options": {
          "A": "Pyt",
          "B": "yth",
          "C": "ytho",
          "D": "tho"
        },
        "correct": "B",
        "explanation": "Slice [1:4] includes index 1 ('y'), 2 ('t'), 3 ('h') and excludes index 4."
      },
      {
        "id": "PY-TOPIC-004-MCQ-03",
        "question": "What is the result of attempting: s = 'hello'; s[0] = 'H'?",
        "options": {
          "A": "s becomes 'Hello'",
          "B": "TypeError: 'str' object does not support item assignment",
          "C": "ValueError",
          "D": "IndexError"
        },
        "correct": "B",
        "explanation": "Strings are immutable, so item assignment raises a TypeError."
      },
      {
        "id": "PY-TOPIC-004-MCQ-04",
        "question": "What is the output of: print('-'.join(['a', 'b', 'c']))?",
        "options": {
          "A": "a b c",
          "B": "a-b-c",
          "C": "-a-b-c-",
          "D": "['a-b-c']"
        },
        "correct": "B",
        "explanation": "join() merges iterable elements with the separator string between each item."
      },
      {
        "id": "PY-TOPIC-004-MCQ-05",
        "question": "What is the output of: print('apple'.find('p'))?",
        "options": {
          "A": "0",
          "B": "1",
          "C": "2",
          "D": "-1"
        },
        "correct": "B",
        "explanation": "find() returns the first index where substring is found (index 1 for 'p')."
      },
      {
        "id": "PY-TOPIC-004-MCQ-06",
        "question": "What will 'Python'.find('z') return?",
        "options": {
          "A": "ValueError",
          "B": "-1",
          "C": "False",
          "D": "None"
        },
        "correct": "B",
        "explanation": "find() returns -1 if substring is not found, unlike index() which raises ValueError."
      },
      {
        "id": "PY-TOPIC-004-MCQ-07",
        "question": "What is the output of: print('abc' * 3)?",
        "options": {
          "A": "abc3",
          "B": "abcabcabc",
          "C": "['abc', 'abc', 'abc']",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "Multiplying a string by an integer repeats the string that many times."
      },
      {
        "id": "PY-TOPIC-004-MCQ-08",
        "question": "What is the output of: print('hello'.capitalize())?",
        "options": {
          "A": "HELLO",
          "B": "Hello",
          "C": "hello",
          "D": "hEllo"
        },
        "correct": "B",
        "explanation": "capitalize() converts first character to uppercase and the rest to lowercase."
      },
      {
        "id": "PY-TOPIC-004-MCQ-09",
        "question": "What does '12345'.isdigit() return?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "12345",
          "D": "int"
        },
        "correct": "A",
        "explanation": "isdigit() returns True if all characters in the string are digits."
      },
      {
        "id": "PY-TOPIC-004-MCQ-10",
        "question": "What is the output of: print('{0} is {1}'.format('Python', 'awesome'))?",
        "options": {
          "A": "Python is awesome",
          "B": "{0} is {1}",
          "C": "awesome is Python",
          "D": "TypeError"
        },
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
        "options": {
          "A": "O(1) amortized",
          "B": "O(n)",
          "C": "O(log n)",
          "D": "O(n^2)"
        },
        "correct": "A",
        "explanation": "Python lists are dynamic arrays, so append operates in amortized O(1) constant time."
      },
      {
        "id": "PY-TOPIC-005-MCQ-02",
        "question": "What is the difference between append() and extend() on a list?",
        "options": {
          "A": "append() adds iterable items one by one, extend() adds as single element",
          "B": "append() adds element as-is, extend() iterates and unpacks elements",
          "C": "They are exact synonyms",
          "D": "extend() only works with strings"
        },
        "correct": "B",
        "explanation": "append([1,2]) inserts nested list, while extend([1,2]) appends elements individually."
      },
      {
        "id": "PY-TOPIC-005-MCQ-03",
        "question": "What will be the output of: a = [1, 2, 3]; a.extend([4, 5]); print(len(a))?",
        "options": {
          "A": "4",
          "B": "5",
          "C": "3",
          "D": "6"
        },
        "correct": "B",
        "explanation": "extend() appends 4 and 5 as separate elements, making total length 5."
      },
      {
        "id": "PY-TOPIC-005-MCQ-04",
        "question": "What does nums.pop(0) do in a Python list of size n?",
        "options": {
          "A": "Removes first item in O(1) time",
          "B": "Removes first item and shifts rest in O(n) time",
          "C": "Removes last item",
          "D": "Raises IndexError"
        },
        "correct": "B",
        "explanation": "Popping from index 0 requires shifting all remaining n-1 elements left, running in O(n) time."
      },
      {
        "id": "PY-TOPIC-005-MCQ-05",
        "question": "What is the output of: x = [1, 2, 3]; del x[1]; print(x)?",
        "options": {
          "A": "[1, 3]",
          "B": "[2, 3]",
          "C": "[1, 2]",
          "D": "[3]"
        },
        "correct": "A",
        "explanation": "del x[1] deletes element at index 1 (value 2)."
      },
      {
        "id": "PY-TOPIC-005-MCQ-06",
        "question": "What happens when you call nums.remove(val) if val does not exist in the list?",
        "options": {
          "A": "Returns False",
          "B": "Raises ValueError",
          "C": "Does nothing",
          "D": "Returns -1"
        },
        "correct": "B",
        "explanation": "remove() raises a ValueError when the target value is absent from the list."
      },
      {
        "id": "PY-TOPIC-005-MCQ-07",
        "question": "What is the output of: print([0] * 4)?",
        "options": {
          "A": "[0, 0, 0, 0]",
          "B": "[0]",
          "C": "0",
          "D": "[4]"
        },
        "correct": "A",
        "explanation": "List multiplication repeats the elements inside the list."
      },
      {
        "id": "PY-TOPIC-005-MCQ-08",
        "question": "What is the output of: a = [1, 2, 3]; b = a[:]; print(a is b)?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "None",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "Slicing a[:] creates a new shallow copy of the list, so their memory addresses differ."
      },
      {
        "id": "PY-TOPIC-005-MCQ-09",
        "question": "Which method sorts a list in-place without creating a new list?",
        "options": {
          "A": "sorted()",
          "B": "sort()",
          "C": "order()",
          "D": "arrange()"
        },
        "correct": "B",
        "explanation": "list.sort() sorts in-place and returns None; sorted(list) returns a brand new sorted list."
      },
      {
        "id": "PY-TOPIC-005-MCQ-10",
        "question": "What is the output of: print([1, 2, 3].count(4))?",
        "options": {
          "A": "-1",
          "B": "0",
          "C": "False",
          "D": "ValueError"
        },
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
        "options": {
          "A": "(10)",
          "B": "(10,)",
          "C": "tuple(10)",
          "D": "[10,]"
        },
        "correct": "B",
        "explanation": "A trailing comma (10,) is required to distinguish a single-element tuple from parenthesized expression."
      },
      {
        "id": "PY-TOPIC-006-MCQ-02",
        "question": "Can a tuple contain mutable objects like lists inside it?",
        "options": {
          "A": "No, tuples only allow immutable elements",
          "B": "Yes, but the list elements cannot be mutated",
          "C": "Yes, and the list contents can still be mutated",
          "D": "Raises TypeError on definition"
        },
        "correct": "C",
        "explanation": "Tuples hold references. The references cannot change, but the mutable object inside can be mutated."
      },
      {
        "id": "PY-TOPIC-006-MCQ-03",
        "question": "Why are tuples preferred over lists for fixed coordinates or dictionary keys?",
        "options": {
          "A": "Tuples are immutable and therefore hashable (if elements are hashable)",
          "B": "Tuples support more methods than lists",
          "C": "Tuples can grow dynamically",
          "D": "Tuples cannot be indexed"
        },
        "correct": "A",
        "explanation": "Immutability allows tuples with hashable items to produce a consistent hash value."
      },
      {
        "id": "PY-TOPIC-006-MCQ-04",
        "question": "What is the output of: t = (1, 2, 3); print(t.index(2))?",
        "options": {
          "A": "0",
          "B": "1",
          "C": "2",
          "D": "None"
        },
        "correct": "B",
        "explanation": "index() returns the index position of value 2, which is index 1."
      },
      {
        "id": "PY-TOPIC-006-MCQ-05",
        "question": "What will occur if you run: t = (1, 2, 3); t[0] = 99?",
        "options": {
          "A": "t becomes (99, 2, 3)",
          "B": "TypeError",
          "C": "ValueError",
          "D": "AttributeError"
        },
        "correct": "B",
        "explanation": "Tuples do not support item assignment because they are immutable."
      },
      {
        "id": "PY-TOPIC-006-MCQ-06",
        "question": "Which of the following methods is valid on a tuple object?",
        "options": {
          "A": "append()",
          "B": "pop()",
          "C": "count()",
          "D": "reverse()"
        },
        "correct": "C",
        "explanation": "Tuples only have two built-in methods: count() and index()."
      },
      {
        "id": "PY-TOPIC-006-MCQ-07",
        "question": "What is the output of: a, *b = (1, 2, 3, 4); print(b)?",
        "options": {
          "A": "(2, 3, 4)",
          "B": "[2, 3, 4]",
          "C": "2",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "Extended unpacking with * gathers remaining elements into a list: [2, 3, 4]."
      },
      {
        "id": "PY-TOPIC-006-MCQ-08",
        "question": "What is the output of: print((1, 2) + (3, 4))?",
        "options": {
          "A": "(4, 6)",
          "B": "(1, 2, 3, 4)",
          "C": "((1, 2), (3, 4))",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "The + operator concatenates two tuples into a new tuple."
      },
      {
        "id": "PY-TOPIC-006-MCQ-09",
        "question": "Can a tuple containing a list like (1, [2, 3]) be used as a dictionary key?",
        "options": {
          "A": "Yes, because the outer container is a tuple",
          "B": "No, because the list inside is unhashable",
          "C": "Only if converted to string",
          "D": "Yes, always"
        },
        "correct": "B",
        "explanation": "An object used as a dictionary key must be fully hashable; a tuple with a list raises TypeError: unhashable type."
      },
      {
        "id": "PY-TOPIC-006-MCQ-10",
        "question": "What does tuple('cat') evaluate to?",
        "options": {
          "A": "('cat')",
          "B": "('c', 'a', 't')",
          "C": "['c', 'a', 't']",
          "D": "('cat',)"
        },
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
        "options": {
          "A": "{}",
          "B": "set()",
          "C": "[]",
          "D": "set({})"
        },
        "correct": "B",
        "explanation": "{} creates an empty dictionary. set() is required to create an empty set."
      },
      {
        "id": "PY-TOPIC-007-MCQ-02",
        "question": "What is the average time complexity of checking 'x in my_set' in Python?",
        "options": {
          "A": "O(n)",
          "B": "O(1)",
          "C": "O(log n)",
          "D": "O(n^2)"
        },
        "correct": "B",
        "explanation": "Sets are implemented with hash tables, providing average O(1) constant time lookups."
      },
      {
        "id": "PY-TOPIC-007-MCQ-03",
        "question": "What is the output of: print(len({1, 1, 2, 2, 3, 3}))?",
        "options": {
          "A": "6",
          "B": "3",
          "C": "1",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "Sets only store unique elements, so duplicates are discarded leaving {1, 2, 3} of length 3."
      },
      {
        "id": "PY-TOPIC-007-MCQ-04",
        "question": "Can a set contain a list as one of its elements: {[1, 2], 3}?",
        "options": {
          "A": "Yes, sets can store any data type",
          "B": "No, raises TypeError: unhashable type: 'list'",
          "C": "Yes, but the list becomes immutable",
          "D": "Only if list is sorted"
        },
        "correct": "B",
        "explanation": "Set elements must be hashable. Lists are mutable and unhashable, causing a TypeError."
      },
      {
        "id": "PY-TOPIC-007-MCQ-05",
        "question": "What is the difference between remove() and discard() in sets?",
        "options": {
          "A": "remove() raises KeyError if element missing, discard() does not",
          "B": "discard() raises KeyError, remove() does not",
          "C": "discard() only removes numbers",
          "D": "They behave identically"
        },
        "correct": "A",
        "explanation": "set.remove(x) raises KeyError if x is missing; set.discard(x) silently ignores absent items."
      },
      {
        "id": "PY-TOPIC-007-MCQ-06",
        "question": "What does a.symmetric_difference(b) calculate?",
        "options": {
          "A": "Elements present in both sets",
          "B": "Elements present in either set, but not both",
          "C": "Elements in a that are not in b",
          "D": "All elements combined"
        },
        "correct": "B",
        "explanation": "Symmetric difference (a ^ b) yields elements present in exactly one of the sets."
      },
      {
        "id": "PY-TOPIC-007-MCQ-07",
        "question": "What is a frozenset in Python?",
        "options": {
          "A": "A set stored on disk",
          "B": "An immutable, hashable version of a set",
          "C": "A set that only holds integers",
          "D": "A sorted set"
        },
        "correct": "B",
        "explanation": "frozenset is an immutable set that cannot be modified and can be used as dictionary keys."
      },
      {
        "id": "PY-TOPIC-007-MCQ-08",
        "question": "What is the output of: print({1, 2} <= {1, 2, 3})?",
        "options": {
          "A": "True",
          "B": "False",
          "C": "TypeError",
          "D": "{-1}"
        },
        "correct": "A",
        "explanation": "The <= operator tests whether the left set is a subset of the right set."
      },
      {
        "id": "PY-TOPIC-007-MCQ-09",
        "question": "Can you access elements of a set using indexing like s[0]?",
        "options": {
          "A": "Yes, sets support 0-based indexing",
          "B": "No, raises TypeError: 'set' object is not subscriptable",
          "C": "Only if set is converted to frozenset",
          "D": "Returns the minimum element"
        },
        "correct": "B",
        "explanation": "Sets are unordered collections, so index-based access is not supported."
      },
      {
        "id": "PY-TOPIC-007-MCQ-10",
        "question": "What is the output of: print({True, 1, 1.0})?",
        "options": {
          "A": "{True, 1, 1.0}",
          "B": "{True}",
          "C": "{1}",
          "D": "{True, 1}"
        },
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
        "options": {
          "A": "O(1)",
          "B": "O(n)",
          "C": "O(log n)",
          "D": "O(n^2)"
        },
        "correct": "A",
        "explanation": "Dictionaries use hash tables, achieving average O(1) constant time lookup."
      },
      {
        "id": "PY-TOPIC-008-MCQ-02",
        "question": "What happens if you access a missing key using d['missing_key']?",
        "options": {
          "A": "Returns None",
          "B": "Raises KeyError",
          "C": "Returns False",
          "D": "Inserts key with value None"
        },
        "correct": "B",
        "explanation": "Accessing an absent key with square brackets raises a KeyError; use get() for a safe fallback."
      },
      {
        "id": "PY-TOPIC-008-MCQ-03",
        "question": "Which of the following data types CANNOT be used as a dictionary key?",
        "options": {
          "A": "tuple with integers",
          "B": "string",
          "C": "list",
          "D": "frozenset"
        },
        "correct": "C",
        "explanation": "Dictionary keys must be hashable. Lists are mutable and unhashable."
      },
      {
        "id": "PY-TOPIC-008-MCQ-04",
        "question": "What is the output of: d = {'a': 1}; print(d.get('b', 100))?",
        "options": {
          "A": "None",
          "B": "KeyError",
          "C": "100",
          "D": "0"
        },
        "correct": "C",
        "explanation": "get(key, default) returns the specified default value (100) when key is not found."
      },
      {
        "id": "PY-TOPIC-008-MCQ-05",
        "question": "Starting from Python 3.7, how do standard dictionaries handle key order?",
        "options": {
          "A": "Alphabetical order",
          "B": "Preserves insertion order",
          "C": "Unordered and random",
          "D": "Sorted by hash value"
        },
        "correct": "B",
        "explanation": "Python 3.7+ guarantees that standard dictionaries preserve insertion order."
      },
      {
        "id": "PY-TOPIC-008-MCQ-06",
        "question": "What does d.setdefault('count', 0) do if 'count' is already present with value 5?",
        "options": {
          "A": "Overwrites value to 0",
          "B": "Returns 5 and leaves dictionary unchanged",
          "C": "Raises KeyError",
          "D": "Deletes key"
        },
        "correct": "B",
        "explanation": "setdefault() only sets the default value if the key does not already exist; otherwise returns current value."
      },
      {
        "id": "PY-TOPIC-008-MCQ-07",
        "question": "What will be the output of: d = {1: 'A', 1.0: 'B'}; print(len(d), d[1])?",
        "options": {
          "A": "2 'A'",
          "B": "1 'B'",
          "C": "2 'B'",
          "D": "1 'A'"
        },
        "correct": "B",
        "explanation": "1 and 1.0 have equal values and identical hashes, so 1.0 overwrites key 1, leaving length 1 and value 'B'."
      },
      {
        "id": "PY-TOPIC-008-MCQ-08",
        "question": "Which method removes all items from a dictionary?",
        "options": {
          "A": "delete()",
          "B": "clear()",
          "C": "remove_all()",
          "D": "flush()"
        },
        "correct": "B",
        "explanation": "dict.clear() empties all key-value pairs from the dictionary in-place."
      },
      {
        "id": "PY-TOPIC-008-MCQ-09",
        "question": "What is the output of: d = {'x': 10, 'y': 20}; print(list(d))?",
        "options": {
          "A": "['x', 'y']",
          "B": "[10, 20]",
          "C": "[('x', 10), ('y', 20)]",
          "D": "['x': 10, 'y': 20]"
        },
        "correct": "A",
        "explanation": "Iterating over a dictionary (or converting to list) yields its keys."
      },
      {
        "id": "PY-TOPIC-008-MCQ-10",
        "question": "What does dict.pop(key) return when called on an existing key?",
        "options": {
          "A": "The key",
          "B": "The value associated with that key",
          "C": "A tuple of (key, value)",
          "D": "True"
        },
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
        "options": {
          "A": "Lists are ordered while tuples are unordered",
          "B": "Lists are mutable while tuples are immutable",
          "C": "Lists only store numbers",
          "D": "Tuples cannot be indexed"
        },
        "correct": "B",
        "explanation": "The fundamental difference is that lists can be modified after creation, while tuples cannot."
      },
      {
        "id": "PY-TOPIC-009-MCQ-02",
        "question": "Why does a tuple consume less memory than an identical list?",
        "options": {
          "A": "Tuples compress values internally",
          "B": "Lists over-allocate memory to support dynamic append() operations",
          "C": "Tuples only hold 16-bit pointers",
          "D": "Lists store types separately"
        },
        "correct": "B",
        "explanation": "Lists over-allocate memory slots for fast resizing, whereas tuples allocate exact memory for fixed size."
      },
      {
        "id": "PY-TOPIC-009-MCQ-03",
        "question": "Which data structure can be safely used as a key in a dictionary?",
        "options": {
          "A": "A list [1, 2]",
          "B": "A tuple (1, 2)",
          "C": "A set {1, 2}",
          "D": "A dictionary {'a': 1}"
        },
        "correct": "B",
        "explanation": "A tuple containing hashable elements is immutable and hashable, making it valid as a dict key."
      },
      {
        "id": "PY-TOPIC-009-MCQ-04",
        "question": "What is the return type of: (1, 2, 3) + (4,)?",
        "options": {
          "A": "list",
          "B": "tuple",
          "C": "set",
          "D": "generator"
        },
        "correct": "B",
        "explanation": "Concatenating two tuples with + produces a new tuple: (1, 2, 3, 4)."
      },
      {
        "id": "PY-TOPIC-009-MCQ-05",
        "question": "Which syntax creates a list and which creates a tuple?",
        "options": {
          "A": "[] creates list, () creates tuple",
          "B": "{} creates list, [] creates tuple",
          "C": "() creates list, [] creates tuple",
          "D": "set() creates list, tuple() creates tuple"
        },
        "correct": "A",
        "explanation": "Square brackets define lists; parentheses define tuples."
      },
      {
        "id": "PY-TOPIC-009-MCQ-06",
        "question": "If you have a collection of 7 days of the week that never changes, which type is best practice?",
        "options": {
          "A": "list",
          "B": "tuple",
          "C": "queue",
          "D": "stack"
        },
        "correct": "B",
        "explanation": "Tuples convey intentional immutability for constant data that should never change."
      },
      {
        "id": "PY-TOPIC-009-MCQ-07",
        "question": "What is the output of: a = [1, 2]; t = (a, 3); a[0] = 99; print(t)?",
        "options": {
          "A": "([99, 2], 3)",
          "B": "([1, 2], 3)",
          "C": "TypeError",
          "D": "(99, 3)"
        },
        "correct": "A",
        "explanation": "The tuple holds a reference to list a. Mutating the list reflects when inspecting the tuple."
      },
      {
        "id": "PY-TOPIC-009-MCQ-08",
        "question": "Can you convert a list 'l' into a tuple in Python?",
        "options": {
          "A": "Yes, using tuple(l)",
          "B": "No, casting is unsupported",
          "C": "Only if list is sorted",
          "D": "Yes, using l.to_tuple()"
        },
        "correct": "A",
        "explanation": "Calling the built-in constructor tuple(l) creates a tuple containing the list's items."
      },
      {
        "id": "PY-TOPIC-009-MCQ-09",
        "question": "Which operation is supported by BOTH list and tuple?",
        "options": {
          "A": ".append()",
          "B": ".pop()",
          "C": "Indexing and slicing [0:2]",
          "D": ".extend()"
        },
        "correct": "C",
        "explanation": "Both lists and tuples are ordered sequences supporting indexing and slicing."
      },
      {
        "id": "PY-TOPIC-009-MCQ-10",
        "question": "What happens when you execute: x = [1, 2]; x += [3] vs y = (1, 2); y += (3,)?",
        "options": {
          "A": "Both mutate in-place",
          "B": "x mutates in-place (same ID), y creates a new tuple object (new ID)",
          "C": "Both create new objects",
          "D": "y raises an error"
        },
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
        "options": {
          "A": "Set: O(1) avg, List: O(n)",
          "B": "Set: O(n), List: O(1)",
          "C": "Both are O(1)",
          "D": "Both are O(log n)"
        },
        "correct": "A",
        "explanation": "Sets use hash tables for O(1) average lookup; lists scan sequentially in O(n) time."
      },
      {
        "id": "PY-TOPIC-010-MCQ-02",
        "question": "Can a set contain duplicate values in Python?",
        "options": {
          "A": "Yes, if allowed by setting allow_duplicates=True",
          "B": "No, sets strictly enforce uniqueness",
          "C": "Only if elements are strings",
          "D": "Yes, up to 2 duplicates"
        },
        "correct": "B",
        "explanation": "Sets only store distinct unique elements."
      },
      {
        "id": "PY-TOPIC-010-MCQ-03",
        "question": "How do you remove duplicates from a list 'nums' in the fewest lines of code?",
        "options": {
          "A": "nums.unique()",
          "B": "list(set(nums))",
          "C": "remove_duplicates(nums)",
          "D": "nums.distinct()"
        },
        "correct": "B",
        "explanation": "list(set(nums)) filters out duplicates by converting through a set."
      },
      {
        "id": "PY-TOPIC-010-MCQ-04",
        "question": "Why does attempting s[0] on a set raise a TypeError?",
        "options": {
          "A": "Sets do not contain items",
          "B": "Sets are unordered collections without positional indices",
          "C": "Sets are immutable",
          "D": "Set indices start at 1"
        },
        "correct": "B",
        "explanation": "Sets do not have a defined order or sequence index, making subscript access invalid."
      },
      {
        "id": "PY-TOPIC-010-MCQ-05",
        "question": "Which collection allows storing another list inside it?",
        "options": {
          "A": "List: [[1, 2], [3, 4]]",
          "B": "Set: {[1, 2], [3, 4]}",
          "C": "Both list and set",
          "D": "Neither"
        },
        "correct": "A",
        "explanation": "Lists can store mutable lists. Sets require hashable elements, so storing lists inside raises TypeError."
      },
      {
        "id": "PY-TOPIC-010-MCQ-06",
        "question": "What is the output of: print(len(set([1, 2, 2, 3, 3, 3])))?",
        "options": {
          "A": "6",
          "B": "3",
          "C": "1",
          "D": "5"
        },
        "correct": "B",
        "explanation": "Converting the 6-element list to a set retains only {1, 2, 3}, which has length 3."
      },
      {
        "id": "PY-TOPIC-010-MCQ-07",
        "question": "Which operation is supported by set but NOT supported by list directly?",
        "options": {
          "A": "Iterating with for loop",
          "B": "len() function",
          "C": "Intersection using '&' operator",
          "D": "in operator"
        },
        "correct": "C",
        "explanation": "The & operator is defined for set intersection; lists do not support the bitwise & operator."
      },
      {
        "id": "PY-TOPIC-010-MCQ-08",
        "question": "When should you prefer a list over a set?",
        "options": {
          "A": "When element order and duplicate occurrences matter",
          "B": "When fast lookup is the only requirement",
          "C": "When performing union operations",
          "D": "When finding distinct values"
        },
        "correct": "A",
        "explanation": "Lists preserve exact positional ordering and allow duplicates."
      },
      {
        "id": "PY-TOPIC-010-MCQ-09",
        "question": "What happens if you convert a set back to a list using list(my_set)?",
        "options": {
          "A": "The list elements are always guaranteed in ascending order",
          "B": "The list elements may appear in an arbitrary order",
          "C": "Raises TypeError",
          "D": "Returns an empty list"
        },
        "correct": "B",
        "explanation": "Since sets do not maintain sequence order, list(my_set) order is arbitrary."
      },
      {
        "id": "PY-TOPIC-010-MCQ-10",
        "question": "What is the space overhead of a set compared to a list with identical unique elements?",
        "options": {
          "A": "Sets consume less memory than lists",
          "B": "Sets consume more memory than lists due to hash table buckets and sparse array",
          "C": "Memory consumption is identical",
          "D": "Sets take zero memory"
        },
        "correct": "B",
        "explanation": "Hash tables require sparse bucket arrays to keep collision rates low, increasing memory usage."
      }
    ]
  },
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
        "options": {
          "A": "Tuples are mutable; sets are immutable",
          "B": "Tuples are ordered and allow duplicates; sets are unordered and disallow duplicates",
          "C": "Both support item indexing like coll[0]",
          "D": "Neither can store strings"
        },
        "correct": "B",
        "explanation": "Tuples retain order and duplicates; sets enforce uniqueness and lack order."
      },
      {
        "id": "PY-TOPIC-011-MCQ-02",
        "question": "Can a standard set be used as a key in a Python dictionary?",
        "options": {
          "A": "Yes, always",
          "B": "No, because sets are mutable and unhashable",
          "C": "Only if set contains integers",
          "D": "Yes, if length <= 5"
        },
        "correct": "B",
        "explanation": "Sets are mutable so their hash changes; frozenset must be used instead."
      },
      {
        "id": "PY-TOPIC-011-MCQ-03",
        "question": "What is the output of: print(len((1, 1, 1)), len({1, 1, 1}))?",
        "options": {
          "A": "3 3",
          "B": "3 1",
          "C": "1 1",
          "D": "1 3"
        },
        "correct": "B",
        "explanation": "The tuple preserves all three elements (len=3), while the set collapses duplicates to a single element (len=1)."
      },
      {
        "id": "PY-TOPIC-011-MCQ-04",
        "question": "Which of these collections is faster for checking membership: 5000 in obj?",
        "options": {
          "A": "tuple with 10,000 items",
          "B": "set with 10,000 items",
          "C": "Both have identical speed",
          "D": "tuple is faster"
        },
        "correct": "B",
        "explanation": "Set membership check is O(1) average; tuple membership check is O(n) linear search."
      },
      {
        "id": "PY-TOPIC-011-MCQ-05",
        "question": "Which method exists on a set but NOT on a tuple?",
        "options": {
          "A": "count()",
          "B": "index()",
          "C": "add()",
          "D": "__len__()"
        },
        "correct": "C",
        "explanation": "add() mutates the set by inserting an item. Tuples are immutable and lack add()."
      },
      {
        "id": "PY-TOPIC-011-MCQ-06",
        "question": "How can you convert a set 's' into a tuple in Python?",
        "options": {
          "A": "s.to_tuple()",
          "B": "tuple(s)",
          "C": "(s)",
          "D": "as_tuple(s)"
        },
        "correct": "B",
        "explanation": "tuple(s) constructs a new tuple from any iterable."
      },
      {
        "id": "PY-TOPIC-011-MCQ-07",
        "question": "What is the immutable counterpart of a set in Python?",
        "options": {
          "A": "immutableset",
          "B": "static_set",
          "C": "frozenset",
          "D": "fixed_set"
        },
        "correct": "C",
        "explanation": "frozenset creates an immutable, hashable set."
      },
      {
        "id": "PY-TOPIC-011-MCQ-08",
        "question": "What is the result of slicing a set: {1, 2, 3}[0:2]?",
        "options": {
          "A": "{1, 2}",
          "B": "TypeError: 'set' object is not subscriptable",
          "C": "[1, 2]",
          "D": "{2, 3}"
        },
        "correct": "B",
        "explanation": "Sets are not sequence types, so slicing raises a TypeError."
      },
      {
        "id": "PY-TOPIC-011-MCQ-09",
        "question": "Can a tuple contain a set inside it?",
        "options": {
          "A": "Yes, e.g. ({1, 2}, 3)",
          "B": "No, sets cannot be nested anywhere",
          "C": "Only if set is empty",
          "D": "Raises ValueError"
        },
        "correct": "A",
        "explanation": "A tuple can store any Python object, including a set: ({1, 2}, 3)."
      },
      {
        "id": "PY-TOPIC-011-MCQ-10",
        "question": "Which collection would you choose to store geographical coordinates (latitude, longitude)?",
        "options": {
          "A": "set, because coords are fast",
          "B": "tuple, because order matters and coords are fixed",
          "C": "list, to keep coords mutable",
          "D": "dictionary only"
        },
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
        "options": {
          "A": "else if",
          "B": "elseif",
          "C": "elif",
          "D": "elsif"
        },
        "correct": "C",
        "explanation": "Python uses the keyword 'elif' for else-if branches."
      },
      {
        "id": "PY-TOPIC-012-MCQ-02",
        "question": "What is the output of: x = 10; print('Yes' if x > 5 else 'No')?",
        "options": {
          "A": "Yes",
          "B": "No",
          "C": "True",
          "D": "SyntaxError"
        },
        "correct": "A",
        "explanation": "The condition x > 5 is True, so 'Yes' is returned."
      },
      {
        "id": "PY-TOPIC-012-MCQ-03",
        "question": "Which of the following is considered Truthy in an if condition?",
        "options": {
          "A": "0",
          "B": "'' (empty string)",
          "C": "'0'",
          "D": "None"
        },
        "correct": "C",
        "explanation": "Any non-empty string, including '0', evaluates to True."
      },
      {
        "id": "PY-TOPIC-012-MCQ-04",
        "question": "What happens if all conditions in an if-elif chain evaluate to False and there is no else clause?",
        "options": {
          "A": "Raises an exception",
          "B": "Execution simply continues to the next statement",
          "C": "Program crashes",
          "D": "Returns None"
        },
        "correct": "B",
        "explanation": "If no branch matches and there is no else block, Python passes control to subsequent code."
      },
      {
        "id": "PY-TOPIC-012-MCQ-05",
        "question": "What is the output of:\nx = 5\nif x == 5:\n    pass\nprint('Done')",
        "options": {
          "A": "Done",
          "B": "Nothing is printed",
          "C": "SyntaxError",
          "D": "IndentationError"
        },
        "correct": "A",
        "explanation": "'pass' acts as a null statement or placeholder; execution proceeds to print('Done')."
      },
      {
        "id": "PY-TOPIC-012-MCQ-06",
        "question": "What will be printed?\na = True\nb = False\nif a or b and False:\n    print('A')\nelse:\n    print('B')",
        "options": {
          "A": "A",
          "B": "B",
          "C": "Error",
          "D": "None"
        },
        "correct": "A",
        "explanation": "'and' has higher precedence than 'or': (b and False) is False, then (True or False) is True, so 'A' prints."
      },
      {
        "id": "PY-TOPIC-012-MCQ-07",
        "question": "What feature was introduced in Python 3.10 as an alternative to long if-elif chains?",
        "options": {
          "A": "switch-case statements",
          "B": "match-case (Structural Pattern Matching)",
          "C": "when-then expressions",
          "D": "select-case"
        },
        "correct": "B",
        "explanation": "Python 3.10 introduced structural pattern matching using the 'match' and 'case' keywords."
      },
      {
        "id": "PY-TOPIC-012-MCQ-08",
        "question": "What is the output of: if [False]: print('Yes') else: print('No')?",
        "options": {
          "A": "Yes",
          "B": "No",
          "C": "False",
          "D": "Error"
        },
        "correct": "A",
        "explanation": "A list with an element [False] is non-empty, and all non-empty lists evaluate to True."
      },
      {
        "id": "PY-TOPIC-012-MCQ-09",
        "question": "Can you have multiple 'elif' statements attached to a single 'if'?",
        "options": {
          "A": "Only up to 5",
          "B": "Yes, arbitrarily many",
          "C": "No, only one elif is permitted",
          "D": "Only if there is no else block"
        },
        "correct": "B",
        "explanation": "You can chain as many elif blocks as needed after an if statement."
      },
      {
        "id": "PY-TOPIC-012-MCQ-10",
        "question": "What is the output of: print('Even' if 7 % 2 == 0 else 'Odd')?",
        "options": {
          "A": "Even",
          "B": "Odd",
          "C": "1",
          "D": "True"
        },
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
        "options": {
          "A": "12345",
          "B": "1234",
          "C": "01234",
          "D": "123"
        },
        "correct": "B",
        "explanation": "range(1, 5) generates values from 1 up to 4 (exclusive of 5)."
      },
      {
        "id": "PY-TOPIC-013-MCQ-02",
        "question": "What does the 'break' statement do inside a loop?",
        "options": {
          "A": "Restarts the loop from 0",
          "B": "Skips current iteration",
          "C": "Exits the innermost loop immediately",
          "D": "Pauses execution for 1 second"
        },
        "correct": "C",
        "explanation": "break prematurely terminates the loop."
      },
      {
        "id": "PY-TOPIC-013-MCQ-03",
        "question": "When does the else block of a Python while/for loop execute?",
        "options": {
          "A": "Whenever a break occurs",
          "B": "Only if the loop completes normally without a break",
          "C": "Before the loop starts",
          "D": "Every iteration"
        },
        "correct": "B",
        "explanation": "A loop's else clause runs only when the loop terminates naturally (not triggered by break)."
      },
      {
        "id": "PY-TOPIC-013-MCQ-04",
        "question": "What is the output of: x = 0; while x < 3: x += 1; print(x)?",
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "Infinite loop"
        },
        "correct": "B",
        "explanation": "x increments from 0 -> 1 -> 2 -> 3; when x reaches 3, condition x < 3 becomes False and loop exits."
      },
      {
        "id": "PY-TOPIC-013-MCQ-05",
        "question": "What does the 'continue' statement do?",
        "options": {
          "A": "Exits the loop",
          "B": "Skips the rest of current iteration and moves to next iteration",
          "C": "Restarts program",
          "D": "Prints current value"
        },
        "correct": "B",
        "explanation": "continue bypasses remaining code in the loop body for current iteration."
      },
      {
        "id": "PY-TOPIC-013-MCQ-06",
        "question": "What is the output of: for i in range(5, 0, -2): print(i, end=' ')?",
        "options": {
          "A": "5 3 1 ",
          "B": "5 4 3 2 1 ",
          "C": "5 3 ",
          "D": "Empty output"
        },
        "correct": "A",
        "explanation": "Starting at 5, stepping by -2 yields 5, 3, 1 (stops before 0)."
      },
      {
        "id": "PY-TOPIC-013-MCQ-07",
        "question": "Which built-in function allows looping over two lists in parallel?",
        "options": {
          "A": "parallel()",
          "B": "combine()",
          "C": "zip()",
          "D": "pair()"
        },
        "correct": "C",
        "explanation": "zip(l1, l2) yields pairs of elements from both iterables simultaneously."
      },
      {
        "id": "PY-TOPIC-013-MCQ-08",
        "question": "What is the output of:\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i, end=' ')",
        "options": {
          "A": "0 1 2 ",
          "B": "0 2 ",
          "C": "1 2 ",
          "D": "0 "
        },
        "correct": "B",
        "explanation": "When i == 1, continue skips printing; 0 and 2 are printed."
      },
      {
        "id": "PY-TOPIC-013-MCQ-09",
        "question": "What will happen with: while True: pass?",
        "options": {
          "A": "Completes in 1 second",
          "B": "Runs an infinite loop consuming CPU until interrupted",
          "C": "SyntaxError",
          "D": "Exits immediately"
        },
        "correct": "B",
        "explanation": "A while loop with condition True and no break runs indefinitely."
      },
      {
        "id": "PY-TOPIC-013-MCQ-10",
        "question": "What does enumerate(['a', 'b'], start=1) yield on first iteration?",
        "options": {
          "A": "(0, 'a')",
          "B": "(1, 'a')",
          "C": "('a', 1)",
          "D": "[1, 'a']"
        },
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
        "options": {
          "A": "0",
          "B": "False",
          "C": "None",
          "D": "undefined"
        },
        "correct": "C",
        "explanation": "Functions without an explicit return statement return None by default."
      },
      {
        "id": "PY-TOPIC-014-MCQ-02",
        "question": "What is the danger of using a mutable default argument like def append_item(x, lst=[])?",
        "options": {
          "A": "SyntaxError",
          "B": "The default list is created once at function definition and shared across all calls",
          "C": "lst becomes a tuple",
          "D": "lst is erased after first call"
        },
        "correct": "B",
        "explanation": "Default arguments evaluate once at module load, so mutable defaults persist mutations between calls."
      },
      {
        "id": "PY-TOPIC-014-MCQ-03",
        "question": "What is a docstring in a Python function?",
        "options": {
          "A": "A comment starting with #",
          "B": "A string literal written as the first statement of a function for documentation",
          "C": "A return type annotation",
          "D": "A variable name"
        },
        "correct": "B",
        "explanation": "Triple-quoted strings placed immediately after def act as docstrings accessible via fn.__doc__."
      },
      {
        "id": "PY-TOPIC-014-MCQ-04",
        "question": "What is the output of: def f(a, b=2, c=3): return a+b+c; print(f(1, c=10))?",
        "options": {
          "A": "13",
          "B": "16",
          "C": "6",
          "D": "TypeError"
        },
        "correct": "A",
        "explanation": "a=1, default b=2, keyword c=10 -> 1 + 2 + 10 = 13."
      },
      {
        "id": "PY-TOPIC-014-MCQ-05",
        "question": "Can positional arguments appear AFTER keyword arguments in a function call?",
        "options": {
          "A": "Yes, always",
          "B": "No, causes SyntaxError: positional argument follows keyword argument",
          "C": "Only if default values exist",
          "D": "Only in Python 3.8+"
        },
        "correct": "B",
        "explanation": "Python requires all positional arguments to precede any keyword arguments in a function call."
      },
      {
        "id": "PY-TOPIC-014-MCQ-06",
        "question": "What does the '/' symbol mean in a function parameter list: def f(a, b, /, c)?",
        "options": {
          "A": "Division operator",
          "B": "Parameters before '/' are positional-only",
          "C": "Parameters after '/' are optional",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "In Python 3.8+, parameters before '/' cannot be passed as keyword arguments."
      },
      {
        "id": "PY-TOPIC-014-MCQ-07",
        "question": "What does the '*' symbol signify when used alone as a parameter: def f(a, *, b)?",
        "options": {
          "A": "Multiplication",
          "B": "Parameters after '*' must be passed as keyword-only arguments",
          "C": "b can be passed any number of times",
          "D": "Syntax error"
        },
        "correct": "B",
        "explanation": "Parameters placed after a bare '*' must be supplied using keyword syntax (e.g., f(1, b=2))."
      },
      {
        "id": "PY-TOPIC-014-MCQ-08",
        "question": "What is the output of:\ndef func(x):\n    x = 10\nval = 5\nfunc(val)\nprint(val)",
        "options": {
          "A": "10",
          "B": "5",
          "C": "None",
          "D": "15"
        },
        "correct": "B",
        "explanation": "Integers are immutable; reassigning x inside func rebinds local variable x without affecting val."
      },
      {
        "id": "PY-TOPIC-014-MCQ-09",
        "question": "Which keyword is used to declare a variable inside a function as referring to global scope?",
        "options": {
          "A": "outer",
          "B": "global",
          "C": "nonlocal",
          "D": "static"
        },
        "correct": "B",
        "explanation": "'global' informs Python that assignments to this variable should target module-level scope."
      },
      {
        "id": "PY-TOPIC-014-MCQ-10",
        "question": "What are type hints in Python function definitions (e.g., def f(x: int) -> str:)?",
        "options": {
          "A": "Strict compiler type checks that prevent execution on mismatch",
          "B": "Optional annotations used by static analysis tools and IDEs without runtime enforcement",
          "C": "Memory optimization instructions",
          "D": "Deprecated syntax"
        },
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
        "options": {
          "A": "list",
          "B": "tuple",
          "C": "set",
          "D": "generator"
        },
        "correct": "B",
        "explanation": "*args packages extra positional arguments into an immutable tuple."
      },
      {
        "id": "PY-TOPIC-015-MCQ-02",
        "question": "What data type is **kwargs inside the function body?",
        "options": {
          "A": "list of pairs",
          "B": "tuple",
          "C": "dict",
          "D": "set"
        },
        "correct": "C",
        "explanation": "**kwargs packages extra keyword arguments into a standard Python dictionary."
      },
      {
        "id": "PY-TOPIC-015-MCQ-03",
        "question": "What is the correct parameter ordering in a Python function definition?",
        "options": {
          "A": "def f(*args, **kwargs, a, b)",
          "B": "def f(standard_args, *args, **kwargs)",
          "C": "def f(**kwargs, *args, standard_args)",
          "D": "def f(*args, standard_args, **kwargs)"
        },
        "correct": "B",
        "explanation": "Standard parameters must come first, followed by *args, then keyword-only args, then **kwargs."
      },
      {
        "id": "PY-TOPIC-015-MCQ-04",
        "question": "What is the output of: def f(*a): return len(a); print(f(1, 2, [3, 4]))?",
        "options": {
          "A": "4",
          "B": "3",
          "C": "2",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "Three arguments are passed: 1, 2, and the list [3, 4], so len(a) is 3."
      },
      {
        "id": "PY-TOPIC-015-MCQ-05",
        "question": "What happens if you pass a dictionary 'd' to a function using func(**d)?",
        "options": {
          "A": "Passes d as a single argument",
          "B": "Unpacks dictionary keys and values as keyword arguments",
          "C": "Raises TypeError",
          "D": "Passes only the keys"
        },
        "correct": "B",
        "explanation": "**d unpacks the dictionary entries into named keyword arguments for the function."
      },
      {
        "id": "PY-TOPIC-015-MCQ-06",
        "question": "Are the names 'args' and 'kwargs' mandatory keywords in Python?",
        "options": {
          "A": "Yes, using other names causes SyntaxError",
          "B": "No, only the * and ** prefixes matter; names are conventional",
          "C": "args is mandatory, kwargs is optional",
          "D": "Mandatory in Python 3.9+"
        },
        "correct": "B",
        "explanation": "The asterisk operators define the unpacking behavior; any valid identifier names (e.g. *values) work."
      },
      {
        "id": "PY-TOPIC-015-MCQ-07",
        "question": "What is the output of: def f(**k): return k.get('x', 0); print(f(y=10))?",
        "options": {
          "A": "10",
          "B": "0",
          "C": "KeyError",
          "D": "None"
        },
        "correct": "B",
        "explanation": "The key 'x' is not present in kwargs ({'y': 10}), so get() returns the default value 0."
      },
      {
        "id": "PY-TOPIC-015-MCQ-08",
        "question": "Can a function have both *args and **kwargs in its definition?",
        "options": {
          "A": "Yes, *args must precede **kwargs",
          "B": "No, only one can be used per function",
          "C": "Yes, but **kwargs must come first",
          "D": "Only in class methods"
        },
        "correct": "A",
        "explanation": "Functions commonly accept def func(*args, **kwargs): to handle arbitrary parameters."
      },
      {
        "id": "PY-TOPIC-015-MCQ-09",
        "question": "What is the output of:\ndef f(a, *b):\n    return a, b\nprint(f(1))",
        "options": {
          "A": "(1, None)",
          "B": "(1, ())",
          "C": "(1, [])",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "When no extra arguments are passed, *b captures an empty tuple ()."
      },
      {
        "id": "PY-TOPIC-015-MCQ-10",
        "question": "How do you forward all arguments received by a wrapper function to an inner function 'target'?",
        "options": {
          "A": "target(args, kwargs)",
          "B": "target(*args, **kwargs)",
          "C": "target(unpack(args), unpack(kwargs))",
          "D": "target(&args, &&kwargs)"
        },
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
        "options": {
          "A": "A multi-threaded function",
          "B": "An anonymous, inline function consisting of a single expression",
          "C": "A recursive function generator",
          "D": "A function that takes no arguments"
        },
        "correct": "B",
        "explanation": "Lambda defines an anonymous function restricted to a single evaluated expression."
      },
      {
        "id": "PY-TOPIC-016-MCQ-02",
        "question": "Does a lambda function require an explicit 'return' statement?",
        "options": {
          "A": "Yes, mandatory",
          "B": "No, writing 'return' inside lambda causes SyntaxError",
          "C": "Only if returning None",
          "D": "Optional"
        },
        "correct": "B",
        "explanation": "Lambdas implicitly return the result of their expression; including 'return' causes a SyntaxError."
      },
      {
        "id": "PY-TOPIC-016-MCQ-03",
        "question": "What is the output of: print((lambda x, y: x + y)(10, 20))?",
        "options": {
          "A": "1020",
          "B": "30",
          "C": "(10, 20)",
          "D": "<function <lambda>>"
        },
        "correct": "B",
        "explanation": "The lambda is immediately invoked with arguments 10 and 20, returning 30."
      },
      {
        "id": "PY-TOPIC-016-MCQ-04",
        "question": "Can a lambda function contain loops or print statements?",
        "options": {
          "A": "Yes, using semicolons",
          "B": "No, lambdas can only contain a single expression",
          "C": "Yes, up to 3 statements",
          "D": "Only while loops"
        },
        "correct": "B",
        "explanation": "Python lambdas are syntactically restricted to single expressions; statements are disallowed."
      },
      {
        "id": "PY-TOPIC-016-MCQ-05",
        "question": "What is the output of: f = lambda s: s[::-1]; print(f('code'))?",
        "options": {
          "A": "code",
          "B": "edoc",
          "C": "c",
          "D": "e"
        },
        "correct": "B",
        "explanation": "s[::-1] reverses the string 'code' into 'edoc'."
      },
      {
        "id": "PY-TOPIC-016-MCQ-06",
        "question": "What does PEP 8 recommend regarding assigning lambdas to variables (f = lambda x: x)?",
        "options": {
          "A": "It is recommended best practice",
          "B": "Prefer standard 'def f(x):' definitions instead of assigning lambdas to names",
          "C": "Lambdas cannot be assigned to variables",
          "D": "Use lambdas exclusively"
        },
        "correct": "B",
        "explanation": "PEP 8 advises using def statements instead of variable assignment for named functions."
      },
      {
        "id": "PY-TOPIC-016-MCQ-07",
        "question": "What is the output of: list(map(lambda x: x * 2, [1, 2, 3]))?",
        "options": {
          "A": "[1, 2, 3]",
          "B": "[2, 4, 6]",
          "C": "[2, 2, 2]",
          "D": "6"
        },
        "correct": "B",
        "explanation": "map applies the lambda multiplying each list element by 2."
      },
      {
        "id": "PY-TOPIC-016-MCQ-08",
        "question": "What is the type of a lambda function object in Python?",
        "options": {
          "A": "<class 'lambda'>",
          "B": "<class 'function'>",
          "C": "<class 'anonymous'>",
          "D": "<class 'builtin_function'>"
        },
        "correct": "B",
        "explanation": "Lambdas create regular function objects identical in type to those created by def."
      },
      {
        "id": "PY-TOPIC-016-MCQ-09",
        "question": "What is the output of: f = lambda: 42; print(f())?",
        "options": {
          "A": "None",
          "B": "42",
          "C": "TypeError: missing arguments",
          "D": "0"
        },
        "correct": "B",
        "explanation": "A lambda can take zero arguments and returns its expression 42."
      },
      {
        "id": "PY-TOPIC-016-MCQ-10",
        "question": "What is the output of: sorted([-4, 1, -2, 3], key=lambda x: abs(x))?",
        "options": {
          "A": "[-4, -2, 1, 3]",
          "B": "[1, -2, 3, -4]",
          "C": "[1, 3, -2, -4]",
          "D": "[-2, 1, 3, -4]"
        },
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
        "options": {
          "A": "[1, 2, 3, 1, 2, 3]",
          "B": "[2, 4, 6]",
          "C": "[2, 2, 2]",
          "D": "[1, 4, 9]"
        },
        "correct": "B",
        "explanation": "Multiplies each element by 2, producing [2, 4, 6]."
      },
      {
        "id": "PY-TOPIC-017-MCQ-02",
        "question": "What collection is produced by: {x for x in 'banana'}?",
        "options": {
          "A": "['b', 'a', 'n']",
          "B": "{'b', 'a', 'n'}",
          "C": "{'banana': 6}",
          "D": "('b', 'a', 'n')"
        },
        "correct": "B",
        "explanation": "Curly braces with a single expression create a set, keeping only unique characters: {'b', 'a', 'n'}."
      },
      {
        "id": "PY-TOPIC-017-MCQ-03",
        "question": "What does a generator expression (x for x in range(10)) return compared to [x for x in range(10)]?",
        "options": {
          "A": "A tuple",
          "B": "A generator object that produces items lazily on demand",
          "C": "A list",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "Parentheses produce a memory-efficient generator iterator, not a precomputed list."
      },
      {
        "id": "PY-TOPIC-017-MCQ-04",
        "question": "What is the output of: {x: x % 2 == 0 for x in [1, 2, 3]}?",
        "options": {
          "A": "{1: False, 2: True, 3: False}",
          "B": "[False, True, False]",
          "C": "{True: 2, False: [1, 3]}",
          "D": "{2: True}"
        },
        "correct": "A",
        "explanation": "Dict comprehension mapping each number to whether it is even."
      },
      {
        "id": "PY-TOPIC-017-MCQ-05",
        "question": "What is the output of: [x if x > 2 else 0 for x in [1, 2, 3, 4]]?",
        "options": {
          "A": "[3, 4]",
          "B": "[0, 0, 3, 4]",
          "C": "[1, 2, 0, 0]",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "Ternary if-else placed before the 'for' assigns 0 for elements <= 2 and x otherwise."
      },
      {
        "id": "PY-TOPIC-017-MCQ-06",
        "question": "Why are comprehensions generally faster than equivalent for-loops appending to lists?",
        "options": {
          "A": "They bypass Python interpreter",
          "B": "They run at C-level speed avoiding repeated Python-level .append() method lookups",
          "C": "They use multi-threading",
          "D": "They compress data"
        },
        "correct": "B",
        "explanation": "Comprehensions use dedicated bytecode instructions that append directly in C."
      },
      {
        "id": "PY-TOPIC-017-MCQ-07",
        "question": "What is the output of: print(len([x for x in range(10) if x > 15]))?",
        "options": {
          "A": "10",
          "B": "0",
          "C": "5",
          "D": "IndexError"
        },
        "correct": "B",
        "explanation": "No value in range(10) is greater than 15, yielding an empty list [] of length 0."
      },
      {
        "id": "PY-TOPIC-017-MCQ-08",
        "question": "Can you use nested loops in a comprehension?",
        "options": {
          "A": "Yes, e.g. [(x, y) for x in l1 for y in l2]",
          "B": "No, only single loops are allowed",
          "C": "Only in dict comprehensions",
          "D": "Only with while loops"
        },
        "correct": "A",
        "explanation": "Multiple for clauses can be chained to create Cartesian products and nested iterations."
      },
      {
        "id": "PY-TOPIC-017-MCQ-09",
        "question": "In Python 3, does a comprehension variable leak into the surrounding scope?",
        "options": {
          "A": "Yes, it overrides local variables",
          "B": "No, comprehensions have their own isolated local scope",
          "C": "Only in while loops",
          "D": "Yes, in list comprehensions only"
        },
        "correct": "B",
        "explanation": "In Python 3, all comprehensions have isolated scope and do not leak variables."
      },
      {
        "id": "PY-TOPIC-017-MCQ-10",
        "question": "What is the output of: {i: i*2 for i in range(2)}?",
        "options": {
          "A": "{0: 0, 1: 2}",
          "B": "{1: 2, 2: 4}",
          "C": "{0: 2, 1: 2}",
          "D": "[0, 2]"
        },
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
        "options": {
          "A": "A list",
          "B": "A map iterator object",
          "C": "A tuple",
          "D": "None"
        },
        "correct": "B",
        "explanation": "In Python 3, map() returns a lazy iterator; wrap in list() to get a list."
      },
      {
        "id": "PY-TOPIC-018-MCQ-02",
        "question": "From which standard library module must reduce() be imported in Python 3?",
        "options": {
          "A": "itertools",
          "B": "functools",
          "C": "math",
          "D": "collections"
        },
        "correct": "B",
        "explanation": "reduce() was moved to the 'functools' module in Python 3."
      },
      {
        "id": "PY-TOPIC-018-MCQ-03",
        "question": "What happens if None is passed as the function to filter(): filter(None, [0, 1, False, 2, ''])?",
        "options": {
          "A": "TypeError",
          "B": "Filters out all falsy elements, keeping truthy ones: [1, 2]",
          "C": "Returns all elements unchanged",
          "D": "Returns empty list"
        },
        "correct": "B",
        "explanation": "Passing None to filter removes all falsy items (0, False, '', None, etc.)."
      },
      {
        "id": "PY-TOPIC-018-MCQ-04",
        "question": "What is the output of: list(map(int, ['10', '20', '30']))?",
        "options": {
          "A": "['10', '20', '30']",
          "B": "[10, 20, 30]",
          "C": "60",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "int constructor converts each string into an integer."
      },
      {
        "id": "PY-TOPIC-018-MCQ-05",
        "question": "What does reduce(lambda a, b: a + b, [1, 2, 3, 4], 10) evaluate to?",
        "options": {
          "A": "10",
          "B": "20",
          "C": "14",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "The optional initial value 10 is added first: 10 + 1 + 2 + 3 + 4 = 20."
      },
      {
        "id": "PY-TOPIC-018-MCQ-06",
        "question": "Can map() take multiple iterable arguments simultaneously?",
        "options": {
          "A": "No, only one iterable",
          "B": "Yes, function must accept as many arguments as there are iterables",
          "C": "Only if they have identical memory addresses",
          "D": "Only up to 2"
        },
        "correct": "B",
        "explanation": "map(func, l1, l2) feeds items from both iterables into func(a, b)."
      },
      {
        "id": "PY-TOPIC-018-MCQ-07",
        "question": "What is the output of: list(filter(lambda x: x % 2 == 0, [1, 3, 5]))?",
        "options": {
          "A": "[1, 3, 5]",
          "B": "[]",
          "C": "[False, False, False]",
          "D": "0"
        },
        "correct": "B",
        "explanation": "No numbers are even, so the resulting filtered list is empty."
      },
      {
        "id": "PY-TOPIC-018-MCQ-08",
        "question": "What is preferred in idiomatic Python over map and filter with lambdas?",
        "options": {
          "A": "List comprehensions and generator expressions",
          "B": "While loops",
          "C": "Recursion",
          "D": "Global variables"
        },
        "correct": "A",
        "explanation": "List comprehensions are generally more readable and widely preferred in modern Python."
      },
      {
        "id": "PY-TOPIC-018-MCQ-09",
        "question": "What does reduce() raise if passed an empty iterable without an initializer?",
        "options": {
          "A": "Returns None",
          "B": "TypeError: reduce() of empty sequence with no initial value",
          "C": "ValueError",
          "D": "ZeroDivisionError"
        },
        "correct": "B",
        "explanation": "Calling reduce on an empty sequence without an initial value raises a TypeError."
      },
      {
        "id": "PY-TOPIC-018-MCQ-10",
        "question": "What is the output of: list(map(lambda a, b: a + b, [1, 2], [10, 20, 30]))?",
        "options": {
          "A": "[11, 22]",
          "B": "[11, 22, 30]",
          "C": "IndexError",
          "D": "[10, 20]"
        },
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
        "options": {
          "A": "except",
          "B": "else",
          "C": "finally",
          "D": "catch"
        },
        "correct": "C",
        "explanation": "The finally block is guaranteed to execute regardless of how the try block exits."
      },
      {
        "id": "PY-TOPIC-019-MCQ-02",
        "question": "When does the 'else' block in a try-except-else-finally construct execute?",
        "options": {
          "A": "When an exception is caught",
          "B": "Only when NO exceptions occurred in the try block",
          "C": "Every time after finally",
          "D": "If try block raises an unhandled error"
        },
        "correct": "B",
        "explanation": "The else block runs only if the try block completed successfully without exceptions."
      },
      {
        "id": "PY-TOPIC-019-MCQ-03",
        "question": "Which base class should all custom user-defined exceptions inherit from?",
        "options": {
          "A": "BaseException",
          "B": "Exception",
          "C": "Error",
          "D": "StandardError"
        },
        "correct": "B",
        "explanation": "User-defined exceptions should inherit from Exception (BaseException includes KeyboardInterrupt)."
      },
      {
        "id": "PY-TOPIC-019-MCQ-04",
        "question": "What is the keyword used to explicitly trigger an exception in Python?",
        "options": {
          "A": "throw",
          "B": "raise",
          "C": "fire",
          "D": "trigger"
        },
        "correct": "B",
        "explanation": "Python uses 'raise' to trigger exceptions (unlike Java/JS which use 'throw')."
      },
      {
        "id": "PY-TOPIC-019-MCQ-05",
        "question": "What happens if a bare 'except:' clause is used without specifying exception type?",
        "options": {
          "A": "SyntaxError",
          "B": "Catches all exceptions, including SystemExit and KeyboardInterrupt (Ctrl+C)",
          "C": "Only catches ValueError",
          "D": "Does nothing"
        },
        "correct": "B",
        "explanation": "A bare except catches BaseException, inadvertently suppressing Ctrl+C interrupts."
      },
      {
        "id": "PY-TOPIC-019-MCQ-06",
        "question": "What is the output of:\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('Zero')\nexcept ArithmeticError:\n    print('Arithmetic')",
        "options": {
          "A": "Zero",
          "B": "Arithmetic",
          "C": "Both Zero and Arithmetic",
          "D": "Error"
        },
        "correct": "A",
        "explanation": "Python matches except handlers top-to-bottom and executes only the first matching handler."
      },
      {
        "id": "PY-TOPIC-019-MCQ-07",
        "question": "What does a bare 'raise' statement inside an except block do?",
        "options": {
          "A": "Raises RuntimeError",
          "B": "Re-raises the currently active exception",
          "C": "Clears the exception",
          "D": "Raises TypeError"
        },
        "correct": "B",
        "explanation": "A standalone 'raise' re-propagates the active exception up the call stack."
      },
      {
        "id": "PY-TOPIC-019-MCQ-08",
        "question": "How can you catch multiple exception types in a single except line?",
        "options": {
          "A": "except ValueError, TypeError:",
          "B": "except (ValueError, TypeError):",
          "C": "except ValueError or TypeError:",
          "D": "except [ValueError, TypeError]:"
        },
        "correct": "B",
        "explanation": "Multiple exceptions must be grouped inside parentheses as a tuple."
      },
      {
        "id": "PY-TOPIC-019-MCQ-09",
        "question": "What exception is raised when accessing a non-existent index in a list?",
        "options": {
          "A": "KeyError",
          "B": "IndexError",
          "C": "LookupError",
          "D": "ValueError"
        },
        "correct": "B",
        "explanation": "Accessing a sequence index out of bounds raises an IndexError."
      },
      {
        "id": "PY-TOPIC-019-MCQ-10",
        "question": "What exception is raised when trying to open a file that does not exist in 'r' mode?",
        "options": {
          "A": "IOError",
          "B": "FileNotFoundError",
          "C": "FileMissingError",
          "D": "PathError"
        },
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
        "options": {
          "A": "It makes reading faster",
          "B": "It automatically guarantees file closure even if an exception occurs",
          "C": "It encrypts file content",
          "D": "It prevents file deletion"
        },
        "correct": "B",
        "explanation": "The with statement uses the context management protocol to ensure file handle cleanup."
      },
      {
        "id": "PY-TOPIC-020-MCQ-02",
        "question": "What is the difference between open mode 'w' and open mode 'a'?",
        "options": {
          "A": "'w' appends, 'a' overwrites",
          "B": "'w' overwrites/truncates existing file, 'a' appends to end",
          "C": "'w' is for words, 'a' is for all",
          "D": "They are identical"
        },
        "correct": "B",
        "explanation": "Mode 'w' truncates the file on open, erasing past contents; mode 'a' appends new data."
      },
      {
        "id": "PY-TOPIC-020-MCQ-03",
        "question": "What does file.readline() return when the end of file (EOF) is reached?",
        "options": {
          "A": "None",
          "B": "'' (empty string)",
          "C": "EOFError",
          "D": "False"
        },
        "correct": "B",
        "explanation": "readline() returns an empty string '' when it reaches the end of the file."
      },
      {
        "id": "PY-TOPIC-020-MCQ-04",
        "question": "What does file.seek(0) do?",
        "options": {
          "A": "Deletes first line",
          "B": "Moves the file cursor pointer to the beginning of the file",
          "C": "Reads first character",
          "D": "Flushes buffer"
        },
        "correct": "B",
        "explanation": "seek(offset) repositions the file stream pointer (0 resets to beginning)."
      },
      {
        "id": "PY-TOPIC-020-MCQ-05",
        "question": "Which method returns all remaining lines of a file as a list of strings?",
        "options": {
          "A": "read()",
          "B": "readlines()",
          "C": "readline()",
          "D": "readall()"
        },
        "correct": "B",
        "explanation": "readlines() reads the entire file into a list where each element is a line."
      },
      {
        "id": "PY-TOPIC-020-MCQ-06",
        "question": "What mode character must be appended to open binary files like images or PDFs?",
        "options": {
          "A": "'x'",
          "B": "'b'",
          "C": "'bin'",
          "D": "'raw'"
        },
        "correct": "B",
        "explanation": "Append 'b' (e.g., 'rb', 'wb') to indicate binary mode."
      },
      {
        "id": "PY-TOPIC-020-MCQ-07",
        "question": "What happens if you open a non-existent file in mode 'x' (open('new.txt', 'x'))?",
        "options": {
          "A": "Creates the new file successfully",
          "B": "Raises FileNotFoundError",
          "C": "Opens in read-only mode",
          "D": "Causes syntax error"
        },
        "correct": "A",
        "explanation": "Mode 'x' is exclusive creation; it succeeds if the file is new, and raises FileExistsError if it already exists."
      },
      {
        "id": "PY-TOPIC-020-MCQ-08",
        "question": "What does file.tell() return?",
        "options": {
          "A": "Total line count",
          "B": "Current byte position of the file pointer",
          "C": "File name",
          "D": "File permissions"
        },
        "correct": "B",
        "explanation": "tell() returns the current integer byte position within the file stream."
      },
      {
        "id": "PY-TOPIC-020-MCQ-09",
        "question": "What does file.flush() do?",
        "options": {
          "A": "Empties file contents",
          "B": "Forces internal write buffers to be flushed to physical disk storage",
          "C": "Closes file",
          "D": "Deletes file"
        },
        "correct": "B",
        "explanation": "flush() flushes the write buffer to disk without closing the file handle."
      },
      {
        "id": "PY-TOPIC-020-MCQ-10",
        "question": "Which standard library module provides high-level object-oriented file path operations?",
        "options": {
          "A": "os.path",
          "B": "pathlib",
          "C": "filepath",
          "D": "sys.files"
        },
        "correct": "B",
        "explanation": "pathlib provides modern object-oriented filesystem path management."
      }
    ]
  },
  {
    "id": "PY-TOPIC-021",
    "topic": "Modules & Packages",
    "topicName": "Modules & Packages",
    "definition": [
      "A module is a single Python file (.py) containing functions, classes, and executable statements.",
      "A package is a folder containing multiple modules, historically marked with an __init__.py file.",
      "Code is reused using import statements: import module_name or from module_name import function.",
      "The special variable __name__ equals '__main__' when a file is executed directly as a script."
    ],
    "syntax": "# Importing a module\nimport math\nprint(math.sqrt(16))\n\n# Direct import with alias\nfrom datetime import datetime as dt\n\n# Execution guard\nif __name__ == '__main__':\n    print('Running directly')",
    "examples": [
      {
        "title": "Example 1: Importing and Using Built-in Module",
        "code": "import math\nprint('Pi:', round(math.pi, 2))\nprint('Factorial of 5:', math.factorial(5))",
        "output": "Pi: 3.14\nFactorial of 5: 120",
        "explanation": "Modules group related functions together under a shared namespace to avoid collisions."
      },
      {
        "title": "Example 2: Selective Import with Alias",
        "code": "from random import randint as r_int\nval = r_int(1, 10)\nprint('Random in 1..10:', val >= 1 and val <= 10)",
        "output": "Random in 1..10: True",
        "explanation": "'from ... import ... as ...' renames imported items locally for cleaner code."
      },
      {
        "title": "Example 3: Module Entry-Point Guard (__name__)",
        "code": "def run():\n    return 'Execution logic'\nif __name__ == '__main__':\n    print(run())",
        "output": "Execution logic",
        "explanation": "The guard ensures run() is called only when the file is run directly, not when imported."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-021-MCQ-01",
        "question": "What is the purpose of the '__name__ == \"__main__\"' check in a Python script?",
        "options": {
          "A": "To declare a function as main",
          "B": "To ensure code only runs when executed directly, not when imported as a module",
          "C": "To compile the file into bytecode",
          "D": "To import standard libraries"
        },
        "correct": "B",
        "explanation": "When a module is imported, __name__ is set to the module's name instead of '__main__'."
      },
      {
        "id": "PY-TOPIC-021-MCQ-02",
        "question": "What file was historically required inside a folder to make Python treat it as a package?",
        "options": {
          "A": "__main__.py",
          "B": "__init__.py",
          "C": "__package__.py",
          "D": "package.json"
        },
        "correct": "B",
        "explanation": "__init__.py marks directories as regular Python packages and initializes package-level variables."
      },
      {
        "id": "PY-TOPIC-021-MCQ-03",
        "question": "Where does Python search for modules when an 'import' statement is encountered?",
        "options": {
          "A": "Only in the current directory",
          "B": "In directories listed in sys.path",
          "C": "In Windows registry",
          "D": "In the desktop folder"
        },
        "correct": "B",
        "explanation": "sys.path contains the list of directories Python searches for modules."
      },
      {
        "id": "PY-TOPIC-021-MCQ-04",
        "question": "Why is wildcard import (from math import *) generally discouraged in production code?",
        "options": {
          "A": "It slows down CPU calculation",
          "B": "It pollutes the current namespace and can overwrite existing names unpredictably",
          "C": "It is deprecated in Python 3",
          "D": "It throws ImportError"
        },
        "correct": "B",
        "explanation": "Wildcard imports make it unclear where names originated and risk name collisions."
      },
      {
        "id": "PY-TOPIC-021-MCQ-05",
        "question": "Which built-in function returns a list of all valid attributes and methods of a module?",
        "options": {
          "A": "help()",
          "B": "dir()",
          "C": "inspect()",
          "D": "list()"
        },
        "correct": "B",
        "explanation": "dir(module) lists all attributes and symbols defined inside that module."
      },
      {
        "id": "PY-TOPIC-021-MCQ-06",
        "question": "What happens when a module is imported multiple times in the same application process?",
        "options": {
          "A": "It is executed on every import",
          "B": "It is executed once and cached in sys.modules",
          "C": "Raises ModuleExistsError",
          "D": "Causes memory leak"
        },
        "correct": "B",
        "explanation": "Python caches imported modules in sys.modules, reusing them on subsequent imports."
      },
      {
        "id": "PY-TOPIC-021-MCQ-07",
        "question": "How can you force Python to re-execute and reload an already imported module?",
        "options": {
          "A": "reimport(module)",
          "B": "importlib.reload(module)",
          "C": "del module; import module",
          "D": "sys.refresh(module)"
        },
        "correct": "B",
        "explanation": "importlib.reload() forces re-execution of an existing module."
      },
      {
        "id": "PY-TOPIC-021-MCQ-08",
        "question": "What is the difference between relative and absolute imports in Python?",
        "options": {
          "A": "Relative imports use dots (from . import utils) based on current module location",
          "B": "Absolute imports are slower",
          "C": "Relative imports work outside packages",
          "D": "They are identical"
        },
        "correct": "A",
        "explanation": "Leading dots in relative imports specify navigation within the package hierarchy."
      },
      {
        "id": "PY-TOPIC-021-MCQ-09",
        "question": "What variable defined inside a module controls what symbols are exported on 'from module import *'?",
        "options": {
          "A": "__public__",
          "B": "__all__",
          "C": "__export__",
          "D": "__symbols__"
        },
        "correct": "B",
        "explanation": "__all__ is a list of strings defining names exported during wildcard import."
      },
      {
        "id": "PY-TOPIC-021-MCQ-10",
        "question": "What is a namespace package introduced in Python 3.3 (PEP 420)?",
        "options": {
          "A": "A package that does not require an __init__.py file",
          "B": "A package stored in cloud storage",
          "C": "A compiled C module",
          "D": "A package without files"
        },
        "correct": "A",
        "explanation": "PEP 420 introduced implicit namespace packages spanning multiple directories without __init__.py."
      }
    ]
  },
  {
    "id": "PY-TOPIC-022",
    "topic": "pip & Virtual Environment",
    "topicName": "pip & Virtual Environment",
    "definition": [
      "pip is the default package manager for Python used to install, update, and remove packages from PyPI.",
      "A virtual environment is an isolated Python runtime directory with its own packages and interpreter.",
      "Virtual environments prevent dependency version conflicts between different projects.",
      "The venv module creates environments, and pip freeze exports dependencies to requirements.txt."
    ],
    "syntax": "# In terminal / command prompt:\n# Create virtual environment:\npython -m venv myenv\n\n# Activate (Windows):\nmyenv\\Scripts\\activate\n\n# Install and export dependencies:\npip install requests\npip freeze > requirements.txt",
    "examples": [
      {
        "title": "Example 1: Using requirements.txt Format",
        "code": "# Common requirements.txt contents:\nreqs = ['fastapi==0.110.0', 'pydantic>=2.0', 'requests>=2.31.0']\nfor r in reqs:\n    print('Dependency:', r)",
        "output": "Dependency: fastapi==0.110.0\nDependency: pydantic>=2.0\nDependency: requests>=2.31.0",
        "explanation": "requirements.txt pins package versions for reproducible deployments across machines."
      },
      {
        "title": "Example 2: Checking Installed Module Location in Python",
        "code": "import sys\nprint('Virtual env active:', hasattr(sys, 'real_prefix') or (sys.base_prefix != sys.prefix))",
        "output": "Virtual env active: False",
        "explanation": "Comparing sys.prefix to sys.base_prefix detects if code is running inside a virtual environment."
      },
      {
        "title": "Example 3: Inspecting pip Packages Programmatically",
        "code": "import importlib.util\nhas_json = importlib.util.find_spec('json') is not None\nprint('json module available:', has_json)",
        "output": "json module available: True",
        "explanation": "importlib.util.find_spec() checks package availability without throwing an unhandled exception."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-022-MCQ-01",
        "question": "What does 'pip' stand for in Python?",
        "options": {
          "A": "Python Installation Program",
          "B": "Pip Installs Packages (recursive acronym)",
          "C": "Package Index Python",
          "D": "Python Interface Protocol"
        },
        "correct": "B",
        "explanation": "pip is a recursive acronym for 'Pip Installs Packages'."
      },
      {
        "id": "PY-TOPIC-022-MCQ-02",
        "question": "Which standard command creates a new virtual environment named 'venv'?",
        "options": {
          "A": "python create venv",
          "B": "python -m venv venv",
          "C": "pip new venv",
          "D": "virtualenv make"
        },
        "correct": "B",
        "explanation": "'python -m venv venv' invokes the built-in venv module to create an environment directory."
      },
      {
        "id": "PY-TOPIC-022-MCQ-03",
        "question": "How do you install all packages listed in a requirements.txt file?",
        "options": {
          "A": "pip install requirements.txt",
          "B": "pip install -r requirements.txt",
          "C": "pip setup requirements.txt",
          "D": "python install requirements.txt"
        },
        "correct": "B",
        "explanation": "The -r flag directs pip to install dependencies from a requirements file."
      },
      {
        "id": "PY-TOPIC-022-MCQ-04",
        "question": "What command generates a list of all currently installed packages and their exact versions?",
        "options": {
          "A": "pip list -v",
          "B": "pip show",
          "C": "pip freeze",
          "D": "pip dump"
        },
        "correct": "C",
        "explanation": "pip freeze outputs installed packages in the standard package==version format."
      },
      {
        "id": "PY-TOPIC-022-MCQ-05",
        "question": "Why should you never commit the virtual environment folder (e.g. .venv) to git?",
        "options": {
          "A": "It contains binary executables and machine-specific file paths",
          "B": "It is encrypted",
          "C": "Git cannot handle folders",
          "D": "It deletes python installation"
        },
        "correct": "A",
        "explanation": "Virtual environments contain machine-dependent paths and platform binaries; commit requirements.txt instead."
      },
      {
        "id": "PY-TOPIC-022-MCQ-06",
        "question": "On Windows, which script activates a virtual environment named 'myenv'?",
        "options": {
          "A": "source myenv/bin/activate",
          "B": "myenv\\Scripts\\activate",
          "C": "run myenv",
          "D": "activate.exe"
        },
        "correct": "B",
        "explanation": "On Windows, activation scripts reside inside the Scripts/ folder."
      },
      {
        "id": "PY-TOPIC-022-MCQ-07",
        "question": "What command deactivates the current active virtual environment?",
        "options": {
          "A": "exit",
          "B": "stop",
          "C": "deactivate",
          "D": "quit()"
        },
        "correct": "C",
        "explanation": "The shell function 'deactivate' restores the system's default environment and PATH."
      },
      {
        "id": "PY-TOPIC-022-MCQ-08",
        "question": "What is PyPI?",
        "options": {
          "A": "Python Programming Interface",
          "B": "The Python Package Index (official third-party software repository)",
          "C": "A Python compiler",
          "D": "A math library for pi calculations"
        },
        "correct": "B",
        "explanation": "PyPI (Python Package Index) is the official public repository for third-party Python packages."
      },
      {
        "id": "PY-TOPIC-022-MCQ-09",
        "question": "How do you upgrade an existing package to its latest version using pip?",
        "options": {
          "A": "pip update package_name",
          "B": "pip install --upgrade package_name",
          "C": "pip refresh package_name",
          "D": "pip latest package_name"
        },
        "correct": "B",
        "explanation": "The --upgrade (or -U) flag updates installed packages to the newest version."
      },
      {
        "id": "PY-TOPIC-022-MCQ-10",
        "question": "What does a '.whl' file represent in Python packaging?",
        "options": {
          "A": "A Python wheel (pre-built binary distribution package)",
          "B": "A raw source code archive",
          "C": "A Windows Help file",
          "D": "A white-box test script"
        },
        "correct": "A",
        "explanation": "Wheel (.whl) is the standard built-package format that installs much faster than source archives (.tar.gz)."
      }
    ]
  },
  {
    "id": "PY-TOPIC-023",
    "topic": "OOP Concepts",
    "topicName": "OOP Concepts",
    "definition": [
      "Object-Oriented Programming (OOP) models software around data and behavior bundled into objects.",
      "The four foundational pillars of OOP are Inheritance, Polymorphism, Encapsulation, and Abstraction.",
      "A Class serves as a blueprint or template, while an Object is an instantiated entity of that class.",
      "OOP improves code modularity, reusability, maintainability, and scalability in large systems."
    ],
    "syntax": "# 4 Pillars of OOP:\n# 1. Encapsulation: Bundling data + methods, restricting access\n# 2. Abstraction: Hiding internal complexity behind interfaces\n# 3. Inheritance: Reusing attributes/methods from parent classes\n# 4. Polymorphism: Uniform interface for different data types",
    "examples": [
      {
        "title": "Example 1: Class and Object Instantiation",
        "code": "class Car:\n    def __init__(self, brand):\n        self.brand = brand\nc1 = Car('Tesla')\nprint('Brand:', c1.brand)",
        "output": "Brand: Tesla",
        "explanation": "Car is the class blueprint; c1 is an instance holding its own brand attribute."
      },
      {
        "title": "Example 2: Demonstrating Inheritance and Polymorphism",
        "code": "class Animal:\n    def speak(self):\n        return 'Generic sound'\nclass Dog(Animal):\n    def speak(self):\n        return 'Bark'\nprint(Dog().speak())",
        "output": "Bark",
        "explanation": "Dog inherits from Animal and overrides speak() polymorphically."
      },
      {
        "title": "Example 3: Encapsulation with Protected Attributes",
        "code": "class Account:\n    def __init__(self, balance):\n        self._balance = balance  # Protected\nacc = Account(5000)\nprint('Balance:', acc._balance)",
        "output": "Balance: 5000",
        "explanation": "A single leading underscore signals to developers that an attribute is protected/internal."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-023-MCQ-01",
        "question": "Which of the following is NOT one of the 4 core pillars of OOP?",
        "options": {
          "A": "Encapsulation",
          "B": "Polymorphism",
          "C": "Compilation",
          "D": "Abstraction"
        },
        "correct": "C",
        "explanation": "Compilation is a language implementation process, not an OOP pillar."
      },
      {
        "id": "PY-TOPIC-023-MCQ-02",
        "question": "What is the relationship between a Class and an Object in OOP?",
        "options": {
          "A": "An Object is a blueprint for a Class",
          "B": "A Class is a template/blueprint; an Object is an instance created from it",
          "C": "They are synonymous terms",
          "D": "A Class is created at runtime from an Object"
        },
        "correct": "B",
        "explanation": "Classes define the schema; objects are concrete runtime instances."
      },
      {
        "id": "PY-TOPIC-023-MCQ-03",
        "question": "Which OOP concept hides internal complexity and exposes only essential features?",
        "options": {
          "A": "Inheritance",
          "B": "Abstraction",
          "C": "Association",
          "D": "Aggregation"
        },
        "correct": "B",
        "explanation": "Abstraction hides background details and only displays essential functionality to users."
      },
      {
        "id": "PY-TOPIC-023-MCQ-04",
        "question": "Which OOP principle allows one class to acquire properties and methods of another class?",
        "options": {
          "A": "Polymorphism",
          "B": "Inheritance",
          "C": "Encapsulation",
          "D": "Composition"
        },
        "correct": "B",
        "explanation": "Inheritance enables code reuse by deriving child classes from parents."
      },
      {
        "id": "PY-TOPIC-023-MCQ-05",
        "question": "What is polymorphism in Python?",
        "options": {
          "A": "Creating multiple objects of a class",
          "B": "The ability of different classes to respond to the same method call in their own specific way",
          "C": "Writing multiple scripts in one file",
          "D": "Converting data types"
        },
        "correct": "B",
        "explanation": "Polymorphism allows different types to be treated through a uniform interface."
      },
      {
        "id": "PY-TOPIC-023-MCQ-06",
        "question": "What is Encapsulation?",
        "options": {
          "A": "Restricting access to methods and bundling state together",
          "B": "Running code in multiple threads",
          "C": "Inheriting from multiple parents",
          "D": "Overriding constructors"
        },
        "correct": "A",
        "explanation": "Encapsulation wraps data and methods into a single unit while restricting direct external access."
      },
      {
        "id": "PY-TOPIC-023-MCQ-07",
        "question": "What design philosophy describes Python's dynamic typing: 'If it walks like a duck and quacks like a duck, it is a duck'?",
        "options": {
          "A": "Strong encapsulation",
          "B": "Duck Typing",
          "C": "Static dispatch",
          "D": "Nominal subtyping"
        },
        "correct": "B",
        "explanation": "Duck typing relies on an object's methods and properties rather than its explicit class hierarchy."
      },
      {
        "id": "PY-TOPIC-023-MCQ-08",
        "question": "Is Python strictly an Object-Oriented language?",
        "options": {
          "A": "Yes, everything must be inside a class",
          "B": "No, Python is a multi-paradigm language supporting procedural and functional styles too",
          "C": "Python has no OOP support",
          "D": "Only starting in Python 3"
        },
        "correct": "B",
        "explanation": "Python supports multiple paradigms: OOP, procedural, and functional programming."
      },
      {
        "id": "PY-TOPIC-023-MCQ-09",
        "question": "What is the relationship called when an object contains other objects (e.g. Car 'has-a' Engine)?",
        "options": {
          "A": "Inheritance (is-a)",
          "B": "Composition (has-a)",
          "C": "Polymorphism",
          "D": "Generalization"
        },
        "correct": "B",
        "explanation": "Composition models 'has-a' relationships by assembling objects."
      },
      {
        "id": "PY-TOPIC-023-MCQ-10",
        "question": "In Python, is everything (including integers, functions, and modules) an object?",
        "options": {
          "A": "No, primitives like int and float are not objects",
          "B": "Yes, in Python virtually all entities are first-class objects",
          "C": "Only classes are objects",
          "D": "Functions are not objects"
        },
        "correct": "B",
        "explanation": "Python treats numbers, strings, functions, and classes as first-class objects inheriting from object."
      }
    ]
  },
  {
    "id": "PY-TOPIC-024",
    "topic": "Classes & Objects & self",
    "topicName": "Classes & Objects & self",
    "definition": [
      "A class is defined with the class keyword and acts as a blueprint for creating objects.",
      "The self parameter represents the specific instance of the class being operated upon.",
      "Python passes the instance object automatically as the first argument when invoking instance methods.",
      "Attributes bound to self (self.x = 10) are unique to each individual object instance."
    ],
    "syntax": "class Person:\n    def __init__(self, name):\n        self.name = name  # Instance attribute\n\n    def introduce(self):\n        return f'I am {self.name}'\n\np = Person('Koti')\nprint(p.introduce())",
    "examples": [
      {
        "title": "Example 1: Defining Class and Calling Method",
        "code": "class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\nc = Counter()\nc.increment()\nprint('Count:', c.count)",
        "output": "Count: 1",
        "explanation": "c.increment() is syntactic sugar for Counter.increment(c), passing c as self."
      },
      {
        "title": "Example 2: Multiple Instances with Separate State",
        "code": "class Item:\n    def __init__(self, name):\n        self.name = name\ni1 = Item('Phone')\ni2 = Item('Laptop')\nprint(i1.name, i2.name)",
        "output": "Phone Laptop",
        "explanation": "Each instance has its own self dictionary (__dict__) maintaining isolated state."
      },
      {
        "title": "Example 3: Accessing Instance Attributes via __dict__",
        "code": "class User:\n    def __init__(self, u_id):\n        self.u_id = u_id\nu = User(99)\nprint(u.__dict__)",
        "output": "{'u_id': 99}",
        "explanation": "Python stores instance variables in an internal dictionary accessible via __dict__."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-024-MCQ-01",
        "question": "What does 'self' represent in a Python class method?",
        "options": {
          "A": "The class definition itself",
          "B": "The specific instance of the class calling the method",
          "C": "A global variable",
          "D": "The parent class"
        },
        "correct": "B",
        "explanation": "self represents the current object instance invoking the method."
      },
      {
        "id": "PY-TOPIC-024-MCQ-02",
        "question": "Is the name 'self' a mandatory keyword in Python syntax?",
        "options": {
          "A": "Yes, changing it causes SyntaxError",
          "B": "No, it is a strong PEP 8 convention; any identifier name can be used as the first parameter",
          "C": "Mandatory only in __init__",
          "D": "Mandatory in Python 3"
        },
        "correct": "B",
        "explanation": "While 'self' is the universal convention, any parameter name (like 'this') works syntactically."
      },
      {
        "id": "PY-TOPIC-024-MCQ-03",
        "question": "When you call obj.method(arg), what is actually executed under the hood?",
        "options": {
          "A": "method(obj, arg)",
          "B": "Class.method(obj, arg)",
          "C": "self.method(arg)",
          "D": "call(obj, method, arg)"
        },
        "correct": "B",
        "explanation": "Python translates obj.method(arg) to Class.method(obj, arg), binding obj to self."
      },
      {
        "id": "PY-TOPIC-024-MCQ-04",
        "question": "What happens if you define an instance method without the 'self' parameter and call it on an object?",
        "options": {
          "A": "It executes normally",
          "B": "TypeError: method() takes 0 positional arguments but 1 was given",
          "C": "It becomes a static method automatically",
          "D": "AttributeError"
        },
        "correct": "B",
        "explanation": "Python automatically supplies the instance as the first argument, causing an argument count mismatch."
      },
      {
        "id": "PY-TOPIC-024-MCQ-05",
        "question": "Where are an instance's attributes stored internally in CPython?",
        "options": {
          "A": "In a tuple",
          "B": "In the instance's __dict__ attribute",
          "C": "In an external database",
          "D": "In a binary array"
        },
        "correct": "B",
        "explanation": "Each instance has a __dict__ mapping attribute names to their values."
      },
      {
        "id": "PY-TOPIC-024-MCQ-06",
        "question": "How do you check if an object is an instance of a particular class?",
        "options": {
          "A": "isinstance(obj, ClassName)",
          "B": "obj.isClass(ClassName)",
          "C": "type(obj) == ClassName only",
          "D": "hasinstance(obj, ClassName)"
        },
        "correct": "A",
        "explanation": "isinstance() checks if an object is an instance of a class or any of its subclasses."
      },
      {
        "id": "PY-TOPIC-024-MCQ-07",
        "question": "What built-in function checks if an object has a given attribute?",
        "options": {
          "A": "hasattr(obj, 'attr')",
          "B": "getattr(obj, 'attr')",
          "C": "contains(obj, 'attr')",
          "D": "obj.has('attr')"
        },
        "correct": "A",
        "explanation": "hasattr() returns True if the specified attribute string exists on the object."
      },
      {
        "id": "PY-TOPIC-024-MCQ-08",
        "question": "Can you dynamically add a new attribute to an existing Python object at runtime?",
        "options": {
          "A": "No, class schemas are locked",
          "B": "Yes, e.g. obj.new_attr = 42",
          "C": "Only if defined in __init__",
          "D": "Only with __slots__"
        },
        "correct": "B",
        "explanation": "Python objects are dynamic; setting obj.attr = val adds the entry to obj.__dict__."
      },
      {
        "id": "PY-TOPIC-024-MCQ-09",
        "question": "What does __slots__ do when declared inside a class?",
        "options": {
          "A": "Restricts valid attributes to a fixed set and removes __dict__, saving substantial memory",
          "B": "Enforces type checking",
          "C": "Generates getters and setters",
          "D": "Prevents inheritance"
        },
        "correct": "A",
        "explanation": "__slots__ optimizes memory by allocating a fixed array instead of a dynamic dictionary."
      },
      {
        "id": "PY-TOPIC-024-MCQ-10",
        "question": "What is the output of:\nclass A:\n    pass\na = A()\nprint(type(a) is A)",
        "options": {
          "A": "False",
          "B": "True",
          "C": "None",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "type(a) returns <class 'A'>, which is identical to A."
      }
    ]
  },
  {
    "id": "PY-TOPIC-025",
    "topic": "Constructor (__init__)",
    "topicName": "Constructor (__init__)",
    "definition": [
      "__init__ is the initializer method automatically invoked when a new object instance is created.",
      "It initializes the instance's state and attributes by binding them to self.",
      "Technically, __new__ is the actual constructor that creates the instance, while __init__ initializes it.",
      "__init__ must always return None; returning any other value raises a TypeError."
    ],
    "syntax": "class Student:\n    def __init__(self, name, roll_no):\n        self.name = name\n        self.roll_no = roll_no\n\ns = Student('Koti', 101)",
    "examples": [
      {
        "title": "Example 1: Initializing Object Attributes",
        "code": "class Book:\n    def __init__(self, title, price=299):\n        self.title = title\n        self.price = price\nb = Book('Python Mastery')\nprint(f'{b.title}: Rs.{b.price}')",
        "output": "Python Mastery: Rs.299",
        "explanation": "__init__ sets up title and default price upon creation."
      },
      {
        "title": "Example 2: Validating Inputs in __init__",
        "code": "class BankAccount:\n    def __init__(self, balance):\n        if balance < 0:\n            raise ValueError('Balance cannot be negative')\n        self.balance = balance\nacc = BankAccount(1000)\nprint('Balance initialized:', acc.balance)",
        "output": "Balance initialized: 1000",
        "explanation": "__init__ can validate inputs and raise exceptions if arguments are invalid."
      },
      {
        "title": "Example 3: Difference Between __new__ and __init__",
        "code": "# __new__ creates the object in memory\n# __init__ populates object fields\nprint('__new__ creates instance -> __init__ initializes it')",
        "output": "__new__ creates instance -> __init__ initializes it",
        "explanation": "__new__ is the allocator returning the new object, which is then passed to __init__."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-025-MCQ-01",
        "question": "What is the return type of the __init__ method?",
        "options": {
          "A": "The newly created object",
          "B": "None (returning any other value raises TypeError)",
          "C": "self",
          "D": "boolean True"
        },
        "correct": "B",
        "explanation": "__init__ must return None; returning a value raises TypeError: __init__() should return None."
      },
      {
        "id": "PY-TOPIC-025-MCQ-02",
        "question": "Which method is the actual object allocator in Python, called BEFORE __init__?",
        "options": {
          "A": "__construct__",
          "B": "__new__",
          "C": "__create__",
          "D": "__alloc__"
        },
        "correct": "B",
        "explanation": "__new__ is the static method responsible for allocating the new instance in memory."
      },
      {
        "id": "PY-TOPIC-025-MCQ-03",
        "question": "Can a class have multiple overloaded __init__ methods with different parameters in Python?",
        "options": {
          "A": "Yes, standard OOP overloading applies",
          "B": "No, the latest defined __init__ simply overwrites any previous definitions",
          "C": "Only if decorated with @overload",
          "D": "Yes, up to 3"
        },
        "correct": "B",
        "explanation": "Python does not support traditional method overloading; defining another __init__ replaces the earlier one."
      },
      {
        "id": "PY-TOPIC-025-MCQ-04",
        "question": "How do you achieve constructor overloading behavior in Python idiomatic design?",
        "options": {
          "A": "Using default parameter values or @classmethod alternative constructors",
          "B": "Writing multiple class blocks",
          "C": "Using duplicate __init__ names",
          "D": "It is impossible"
        },
        "correct": "A",
        "explanation": "Default arguments and @classmethod factory methods (e.g. from_dict) provide flexible initialization."
      },
      {
        "id": "PY-TOPIC-025-MCQ-05",
        "question": "What happens if a class does not define an __init__ method?",
        "options": {
          "A": "Objects cannot be instantiated",
          "B": "It automatically inherits the default __init__ from base 'object' class",
          "C": "SyntaxError",
          "D": "Causes crash at runtime"
        },
        "correct": "B",
        "explanation": "Every Python class inherits from object, which provides a default no-argument __init__."
      },
      {
        "id": "PY-TOPIC-025-MCQ-06",
        "question": "What is the output of:\nclass A:\n    def __init__(self):\n        print('Init', end=' ')\na1 = A()\na2 = A()",
        "options": {
          "A": "Init ",
          "B": "Init Init ",
          "C": "Nothing",
          "D": "Error"
        },
        "correct": "B",
        "explanation": "__init__ runs once for each created instance, printing 'Init ' twice."
      },
      {
        "id": "PY-TOPIC-025-MCQ-07",
        "question": "How should a subclass call its parent class's __init__ method?",
        "options": {
          "A": "parent.__init__()",
          "B": "super().__init__(*args)",
          "C": "this.__init__()",
          "D": "base.init()"
        },
        "correct": "B",
        "explanation": "super().__init__() calls the parent class constructor following MRO."
      },
      {
        "id": "PY-TOPIC-025-MCQ-08",
        "question": "Can __init__ accept *args and **kwargs?",
        "options": {
          "A": "No, only fixed parameters",
          "B": "Yes, enabling flexible parameter passing",
          "C": "Only in Python 3.10+",
          "D": "Only **kwargs"
        },
        "correct": "B",
        "explanation": "__init__ is a regular method and accepts *args and **kwargs for flexible initialization."
      },
      {
        "id": "PY-TOPIC-025-MCQ-09",
        "question": "What error occurs if you call A() when __init__(self, x) requires an argument x?",
        "options": {
          "A": "ValueError",
          "B": "TypeError: missing 1 required positional argument: 'x'",
          "C": "IndexError",
          "D": "AttributeError"
        },
        "correct": "B",
        "explanation": "Omitting required arguments to __init__ raises a TypeError."
      },
      {
        "id": "PY-TOPIC-025-MCQ-10",
        "question": "What is the purpose of the __del__ method in Python?",
        "options": {
          "A": "It is an alternative constructor",
          "B": "It is a destructor called when the object is about to be garbage collected",
          "C": "Deletes attributes",
          "D": "Clears dictionary"
        },
        "correct": "B",
        "explanation": "__del__ is the finalizer/destructor called when an object's reference count drops to zero."
      }
    ]
  },
  {
    "id": "PY-TOPIC-026",
    "topic": "Instance vs Class Variables",
    "topicName": "Instance vs Class Variables",
    "definition": [
      "Class variables are defined directly in the class body and shared across all instances of that class.",
      "Instance variables are bound to self inside methods, making each copy distinct per object.",
      "Modifying a class variable via ClassName.var affects all instances observing that attribute.",
      "Assigning self.var = val creates an instance variable that shadows the class variable for that specific instance."
    ],
    "syntax": "class Employee:\n    company = 'TCS'  # Class variable (shared)\n\n    def __init__(self, name):\n        self.name = name  # Instance variable (unique)",
    "examples": [
      {
        "title": "Example 1: Shared Class Variable",
        "code": "class Dog:\n    species = 'Canine' # Class var\n    def __init__(self, name):\n        self.name = name # Instance var\nd1 = Dog('Buddy')\nd2 = Dog('Rocky')\nprint(d1.species, d2.species)",
        "output": "Canine Canine",
        "explanation": "Both instances share the single class-level attribute 'species'."
      },
      {
        "title": "Example 2: Shadowing Class Variables",
        "code": "class Config:\n    theme = 'dark'\nc1 = Config()\nc2 = Config()\nc1.theme = 'light'  # Shadows on c1 only\nprint('c1:', c1.theme, 'c2:', c2.theme)",
        "output": "c1: light c2: dark",
        "explanation": "Assigning to c1.theme inserts 'theme' into c1.__dict__, shadowing the class attribute without mutating it for c2."
      },
      {
        "title": "Example 3: Modifying Class Variable via Class Name",
        "code": "class Counter:\n    total = 0\n    def __init__(self):\n        Counter.total += 1\nCounter()\nCounter()\nprint('Total instances:', Counter.total)",
        "output": "Total instances: 2",
        "explanation": "Modifying Counter.total increments the shared attribute for all callers."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-026-MCQ-01",
        "question": "Where are class variables declared in Python?",
        "options": {
          "A": "Inside the __init__ method using self",
          "B": "Directly inside the class body outside any method",
          "C": "In the global scope",
          "D": "In a separate config file"
        },
        "correct": "B",
        "explanation": "Class variables are declared directly inside the class definition."
      },
      {
        "id": "PY-TOPIC-026-MCQ-02",
        "question": "What happens when you execute 'instance.class_var = new_val'?",
        "options": {
          "A": "Modifies class variable for all instances",
          "B": "Creates an instance variable on that specific object shadowing the class variable",
          "C": "Raises AttributeError",
          "D": "Deletes the variable"
        },
        "correct": "B",
        "explanation": "Assignment on an instance creates a local instance attribute, hiding the class attribute on that instance."
      },
      {
        "id": "PY-TOPIC-026-MCQ-03",
        "question": "How should a class variable be modified to ensure the change is visible to all instances?",
        "options": {
          "A": "self.class_var = val",
          "B": "ClassName.class_var = val",
          "C": "global class_var = val",
          "D": "update(class_var)"
        },
        "correct": "B",
        "explanation": "Accessing and reassigning via the class name updates the shared class attribute."
      },
      {
        "id": "PY-TOPIC-026-MCQ-04",
        "question": "What is the danger of using a mutable class variable like 'items = []'?",
        "options": {
          "A": "SyntaxError",
          "B": "Mutating instance.items.append(x) mutates the single list shared across all instances",
          "C": "Items are erased on every instance creation",
          "D": "Only stores strings"
        },
        "correct": "B",
        "explanation": "Because class variables are shared, mutating a shared mutable object affects all instances."
      },
      {
        "id": "PY-TOPIC-026-MCQ-05",
        "question": "What is the output of:\nclass A:\n    x = 1\na = A()\nA.x = 2\nprint(a.x)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "None",
          "D": "AttributeError"
        },
        "correct": "B",
        "explanation": "'a' does not have its own 'x', so it falls back to looking up A.x, which is now 2."
      },
      {
        "id": "PY-TOPIC-026-MCQ-06",
        "question": "In attribute lookup order, which has higher priority on an instance?",
        "options": {
          "A": "Class attribute",
          "B": "Instance attribute (in instance.__dict__)",
          "C": "Global variable",
          "D": "Built-in attribute"
        },
        "correct": "B",
        "explanation": "Python checks instance.__dict__ first before falling back to Class.__dict__."
      },
      {
        "id": "PY-TOPIC-026-MCQ-07",
        "question": "Can you access a class variable using the Class name directly without creating an object?",
        "options": {
          "A": "Yes, e.g. ClassName.variable",
          "B": "No, an object must be instantiated first",
          "C": "Only inside methods",
          "D": "Only with staticmethod"
        },
        "correct": "A",
        "explanation": "Class variables exist on the class object and do not require instantiation."
      },
      {
        "id": "PY-TOPIC-026-MCQ-08",
        "question": "What is the output of:\nclass Test:\n    count = 0\nt1 = Test()\nt1.count += 1\nprint(Test.count, t1.count)",
        "options": {
          "A": "1 1",
          "B": "0 1",
          "C": "0 0",
          "D": "1 0"
        },
        "correct": "B",
        "explanation": "t1.count += 1 evaluates t1.count (0) + 1 = 1, and assigns to instance variable t1.count. Test.count remains 0."
      },
      {
        "id": "PY-TOPIC-026-MCQ-09",
        "question": "Where are class variables stored internally?",
        "options": {
          "A": "In ClassName.__dict__",
          "B": "In sys.modules",
          "C": "In globals()",
          "D": "In the instance buffer"
        },
        "correct": "A",
        "explanation": "Class variables are entries in the class object's mappingproxy (__dict__)."
      },
      {
        "id": "PY-TOPIC-026-MCQ-10",
        "question": "Which of the following is typically stored as a class variable?",
        "options": {
          "A": "User's individual password",
          "B": "Constants, default configurations, or shared instance counters",
          "C": "Customer's credit card number",
          "D": "Temporary loop variables"
        },
        "correct": "B",
        "explanation": "Class variables are best suited for constants and state shared across all instances."
      }
    ]
  },
  {
    "id": "PY-TOPIC-027",
    "topic": "Instance vs Class vs Static Methods",
    "topicName": "Instance vs Class vs Static Methods",
    "definition": [
      "Instance methods take self as the first parameter and can access and modify both instance and class state.",
      "Class methods are decorated with @classmethod, take cls as the first parameter, and can modify class state.",
      "Static methods are decorated with @staticmethod, take neither self nor cls, and act as utility functions.",
      "Class methods are commonly used as factory methods, while static methods provide self-contained helpers."
    ],
    "syntax": "class Demo:\n    def inst_method(self):       # Bound to instance\n        return 'instance'\n\n    @classmethod\n    def cls_method(cls):        # Bound to class\n        return 'class'\n\n    @staticmethod\n    def stat_method():           # Utility function\n        return 'static'",
    "examples": [
      {
        "title": "Example 1: Comparing All Three Method Types",
        "code": "class Sample:\n    val = 'Class'\n    def instance_m(self):\n        return f'Self: {self}'\n    @classmethod\n    def class_m(cls):\n        return f'Cls: {cls.val}'\n    @staticmethod\n    def static_m(x, y):\n        return x + y\nprint(Sample.class_m())\nprint(Sample.static_m(10, 20))",
        "output": "Cls: Class\n30",
        "explanation": "Class methods access cls; static methods take ordinary arguments without referencing class or instance."
      },
      {
        "title": "Example 2: Factory Method Using @classmethod",
        "code": "class Date:\n    def __init__(self, year, month, day):\n        self.year, self.month, self.day = year, month, day\n    @classmethod\n    def from_string(cls, date_str):\n        y, m, d = map(int, date_str.split('-'))\n        return cls(y, m, d)\nd = Date.from_string('2026-10-08')\nprint(d.year, d.month, d.day)",
        "output": "2026 10 8",
        "explanation": "Factory methods use cls(...) to construct instances, supporting inheritance cleanly."
      },
      {
        "title": "Example 3: Utility Function Using @staticmethod",
        "code": "class MathUtils:\n    @staticmethod\n    def is_even(num):\n        return num % 2 == 0\nprint(MathUtils.is_even(8), MathUtils.is_even(7))",
        "output": "True False",
        "explanation": "Static methods group logically related utilities under the class namespace."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-027-MCQ-01",
        "question": "What is the first parameter automatically passed to a @classmethod?",
        "options": {
          "A": "self (the instance)",
          "B": "cls (the class itself)",
          "C": "None",
          "D": "super"
        },
        "correct": "B",
        "explanation": "@classmethod receives the class object as its first argument, conventionally named cls."
      },
      {
        "id": "PY-TOPIC-027-MCQ-02",
        "question": "Does a @staticmethod receive an implicit first argument like self or cls?",
        "options": {
          "A": "Yes, it receives self",
          "B": "Yes, it receives cls",
          "C": "No, it receives neither and behaves like a regular function scoped inside the class",
          "D": "It receives global scope"
        },
        "correct": "C",
        "explanation": "Static methods receive only the explicit arguments passed to them."
      },
      {
        "id": "PY-TOPIC-027-MCQ-03",
        "question": "What is the primary use case for a @classmethod?",
        "options": {
          "A": "Writing mathematical utilities",
          "B": "Alternative constructors (factory methods) and accessing/modifying class state",
          "C": "Speeding up CPU execution",
          "D": "Creating private variables"
        },
        "correct": "B",
        "explanation": "Class methods are most commonly used to write alternative factory constructors."
      },
      {
        "id": "PY-TOPIC-027-MCQ-04",
        "question": "Can an instance method call a class method or static method?",
        "options": {
          "A": "Yes, using self.method_name() or ClassName.method_name()",
          "B": "No, forbidden in Python",
          "C": "Only with super()",
          "D": "Only static methods"
        },
        "correct": "A",
        "explanation": "Instances can access class and static methods directly through self or the class name."
      },
      {
        "id": "PY-TOPIC-027-MCQ-05",
        "question": "Can you call a @staticmethod through an instance object: obj.my_static()?",
        "options": {
          "A": "No, only via ClassName.my_static()",
          "B": "Yes, Python allows calling static methods via both class and instance",
          "C": "Raises TypeError",
          "D": "Only if __init__ returned self"
        },
        "correct": "B",
        "explanation": "Static methods can be called on either the class or an instance."
      },
      {
        "id": "PY-TOPIC-027-MCQ-06",
        "question": "What decorator marks a method as receiving the class object as its first parameter?",
        "options": {
          "A": "@class",
          "B": "@classmethod",
          "C": "@static",
          "D": "@instancemethod"
        },
        "correct": "B",
        "explanation": "The built-in decorator @classmethod binds the class to the method."
      },
      {
        "id": "PY-TOPIC-027-MCQ-07",
        "question": "Why is 'cls(args)' preferred over 'ClassName(args)' inside a @classmethod factory?",
        "options": {
          "A": "It runs faster",
          "B": "It ensures that if the class is subclassed, the factory returns an instance of the subclass",
          "C": "It bypasses __init__",
          "D": "It uses less memory"
        },
        "correct": "B",
        "explanation": "Using cls respects inheritance polymorphism, instantiating the correct subclass."
      },
      {
        "id": "PY-TOPIC-027-MCQ-08",
        "question": "Can a static method modify instance variables (self.x)?",
        "options": {
          "A": "Yes, always",
          "B": "No, because it does not receive self",
          "C": "Only if passed self explicitly as an argument",
          "D": "Both B and C are correct"
        },
        "correct": "D",
        "explanation": "Static methods have no implicit self; they can only touch an instance if passed one explicitly."
      },
      {
        "id": "PY-TOPIC-027-MCQ-09",
        "question": "Which method type should you choose for a helper function that doesn't read or write any class or instance attributes?",
        "options": {
          "A": "Instance method",
          "B": "@classmethod",
          "C": "@staticmethod (or module-level function)",
          "D": "Abstract method"
        },
        "correct": "C",
        "explanation": "Self-contained helpers that do not require state are best implemented as static methods."
      },
      {
        "id": "PY-TOPIC-027-MCQ-10",
        "question": "What is the output of:\nclass A:\n    @staticmethod\n    def f(x):\n        return x * 2\nprint(A.f(5))",
        "options": {
          "A": "10",
          "B": "TypeError",
          "C": "None",
          "D": "5"
        },
        "correct": "A",
        "explanation": "A.f(5) directly invokes the static method passing 5, returning 10."
      }
    ]
  },
  {
    "id": "PY-TOPIC-028",
    "topic": "Inheritance",
    "topicName": "Inheritance",
    "definition": [
      "Inheritance allows a child (derived) class to inherit attributes and methods from a parent (base) class.",
      "It promotes code reusability and models real-world 'is-a' relationships (e.g., Dog is an Animal).",
      "The child class specifies the parent class name in parentheses during definition: class Child(Parent):.",
      "All classes in Python 3 implicitly inherit from the root built-in class object."
    ],
    "syntax": "class Parent:\n    def speak(self):\n        return 'Parent speaking'\n\nclass Child(Parent):  # Inherits from Parent\n    def play(self):\n        return 'Child playing'",
    "examples": [
      {
        "title": "Example 1: Basic Inheritance and Method Reuse",
        "code": "class Vehicle:\n    def start(self):\n        return 'Engine started'\nclass Bike(Vehicle):\n    pass\nb = Bike()\nprint(b.start())",
        "output": "Engine started",
        "explanation": "Bike inherits the start() method directly from Vehicle without reimplementing it."
      },
      {
        "title": "Example 2: Adding New Methods to Derived Class",
        "code": "class Person:\n    def __init__(self, name):\n        self.name = name\nclass Student(Person):\n    def study(self):\n        return f'{self.name} is studying'\ns = Student('Koti')\nprint(s.study())",
        "output": "Koti is studying",
        "explanation": "Student inherits Person's __init__ and adds a new study() method."
      },
      {
        "title": "Example 3: Checking Subclass Relationships",
        "code": "class A:\n    pass\nclass B(A):\n    pass\nprint(issubclass(B, A))\nprint(isinstance(B(), A))",
        "output": "True\nTrue",
        "explanation": "issubclass() checks class hierarchy; isinstance() checks object instances against parent classes."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-028-MCQ-01",
        "question": "What is the syntax for creating a subclass 'Child' that inherits from 'Parent'?",
        "options": {
          "A": "class Child extends Parent:",
          "B": "class Child(Parent):",
          "C": "class Child : Parent:",
          "D": "class Child inherits Parent:"
        },
        "correct": "B",
        "explanation": "Python specifies base classes in parentheses after the class name."
      },
      {
        "id": "PY-TOPIC-028-MCQ-02",
        "question": "What is the ultimate root base class of all objects in Python 3?",
        "options": {
          "A": "Base",
          "B": "object",
          "C": "Root",
          "D": "Type"
        },
        "correct": "B",
        "explanation": "All classes in Python 3 inherit directly or indirectly from 'object'."
      },
      {
        "id": "PY-TOPIC-028-MCQ-03",
        "question": "Which built-in function checks whether one class is a derived subclass of another?",
        "options": {
          "A": "isinstance()",
          "B": "issubclass(Child, Parent)",
          "C": "childof()",
          "D": "hasparent()"
        },
        "correct": "B",
        "explanation": "issubclass(sub, sup) tests class inheritance relationships."
      },
      {
        "id": "PY-TOPIC-028-MCQ-04",
        "question": "What happens if a child class defines a method with the exact same name as a method in its parent class?",
        "options": {
          "A": "SyntaxError",
          "B": "Method overriding: the child's version executes when called on child instances",
          "C": "Both methods execute together",
          "D": "Parent method is permanently deleted"
        },
        "correct": "B",
        "explanation": "The child class overrides the parent method."
      },
      {
        "id": "PY-TOPIC-028-MCQ-05",
        "question": "If class B inherits from class A, does isinstance(B(), A) evaluate to True?",
        "options": {
          "A": "Yes, an instance of a subclass is also an instance of its parent classes",
          "B": "No, only isinstance(B(), B) is True",
          "C": "Raises TypeError",
          "D": "Only if A has no methods"
        },
        "correct": "A",
        "explanation": "isinstance() respects the inheritance tree, returning True for parent classes."
      },
      {
        "id": "PY-TOPIC-028-MCQ-06",
        "question": "What attribute reveals the direct base classes of a class?",
        "options": {
          "A": "ClassName.__bases__",
          "B": "ClassName.__parents__",
          "C": "ClassName.__super__",
          "D": "ClassName.__root__"
        },
        "correct": "A",
        "explanation": "__bases__ is a tuple containing the immediate base classes of the class."
      },
      {
        "id": "PY-TOPIC-028-MCQ-07",
        "question": "Does Python support private inheritance (inheriting without exposing methods)?",
        "options": {
          "A": "Yes, using private keyword",
          "B": "No, all inheritance in Python is public",
          "C": "Only with __slots__",
          "D": "Yes, in Python 3.12"
        },
        "correct": "B",
        "explanation": "Python does not have C++-style access specifiers for inheritance; all inheritance is public."
      },
      {
        "id": "PY-TOPIC-028-MCQ-08",
        "question": "What is the primary benefit of inheritance in software design?",
        "options": {
          "A": "Code reuse and establishing polymorphic hierarchies",
          "B": "Reducing memory usage to zero",
          "C": "Faster internet networking",
          "D": "Eliminating variables"
        },
        "correct": "A",
        "explanation": "Inheritance promotes code reuse and simplifies polymorphic interfaces."
      },
      {
        "id": "PY-TOPIC-028-MCQ-09",
        "question": "What design guideline suggests 'favor composition over inheritance'?",
        "options": {
          "A": "Deep inheritance hierarchies become fragile and rigid; composition offers greater flexibility",
          "B": "Inheritance is deprecated",
          "C": "Composition runs on GPU",
          "D": "Classes cannot inherit more than once"
        },
        "correct": "A",
        "explanation": "Composition ('has-a') is often looser and more maintainable than rigid inheritance ('is-a')."
      },
      {
        "id": "PY-TOPIC-028-MCQ-10",
        "question": "What is the output of:\nclass P:\n    x = 10\nclass C(P):\n    pass\nprint(C.x)",
        "options": {
          "A": "10",
          "B": "None",
          "C": "AttributeError",
          "D": "0"
        },
        "correct": "A",
        "explanation": "C inherits class variable x from P, so C.x resolves to 10."
      }
    ]
  },
  {
    "id": "PY-TOPIC-029",
    "topic": "Types of Inheritance",
    "topicName": "Types of Inheritance",
    "definition": [
      "Python supports 5 types of inheritance: Single, Multiple, Multilevel, Hierarchical, and Hybrid.",
      "Single: One child inherits from one parent. Multiple: One child inherits from multiple parents.",
      "Multilevel: A child inherits from a parent which in turn inherits from a grandparent.",
      "Hierarchical: Multiple children inherit from a single parent; Hybrid combines two or more types."
    ],
    "syntax": "# 1. Single:       class B(A)\n# 2. Multiple:     class C(A, B)\n# 3. Multilevel:   class C(B) where class B(A)\n# 4. Hierarchical: class B(A) and class C(A)\n# 5. Hybrid:       Combination of above",
    "examples": [
      {
        "title": "Example 1: Multiple Inheritance",
        "code": "class Flyer:\n    def fly(self):\n        return 'Flying'\nclass Swimmer:\n    def swim(self):\n        return 'Swimming'\nclass Duck(Flyer, Swimmer):\n    pass\nd = Duck()\nprint(d.fly(), d.swim())",
        "output": "Flying Swimming",
        "explanation": "Duck inherits methods from both Flyer and Swimmer parent classes."
      },
      {
        "title": "Example 2: Multilevel Inheritance",
        "code": "class Grandparent:\n    def origin(self):\n        return 'Heritage'\nclass Parent(Grandparent):\n    pass\nclass Child(Parent):\n    pass\nprint(Child().origin())",
        "output": "Heritage",
        "explanation": "Child accesses origin() passed through the generational chain."
      },
      {
        "title": "Example 3: Hierarchical Inheritance",
        "code": "class Animal:\n    def live(self):\n        return True\nclass Cat(Animal):\n    pass\nclass Dog(Animal):\n    pass\nprint(Cat().live(), Dog().live())",
        "output": "True True",
        "explanation": "Both Cat and Dog inherit directly from a shared Animal base class."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-029-MCQ-01",
        "question": "Which type of inheritance occurs when a single class derives from two or more parent classes?",
        "options": {
          "A": "Multilevel inheritance",
          "B": "Multiple inheritance",
          "C": "Hierarchical inheritance",
          "D": "Single inheritance"
        },
        "correct": "B",
        "explanation": "Multiple inheritance allows a class to inherit from multiple parent classes (class C(A, B))."
      },
      {
        "id": "PY-TOPIC-029-MCQ-02",
        "question": "Does Java support multiple class inheritance, and does Python support it?",
        "options": {
          "A": "Java supports it; Python does not",
          "B": "Python natively supports multiple class inheritance; Java does not (classes only)",
          "C": "Neither supports it",
          "D": "Both support it identically"
        },
        "correct": "B",
        "explanation": "Python natively supports multiple inheritance for classes using the C3 linearization algorithm."
      },
      {
        "id": "PY-TOPIC-029-MCQ-03",
        "question": "What is the classic problem associated with multiple inheritance often called?",
        "options": {
          "A": "The Circle of Death",
          "B": "The Diamond Problem",
          "C": "The Pyramid Trap",
          "D": "The Triangle Hazard"
        },
        "correct": "B",
        "explanation": "The Diamond Problem occurs when two parent classes inherit from the same grandparent."
      },
      {
        "id": "PY-TOPIC-029-MCQ-04",
        "question": "What is Multilevel Inheritance?",
        "options": {
          "A": "A class inheriting from multiple unrelated classes",
          "B": "A chain of inheritance where a derived class acts as a base class for another class (A -> B -> C)",
          "C": "One class having multiple methods",
          "D": "Multiple instances of a class"
        },
        "correct": "B",
        "explanation": "Multilevel inheritance forms an ancestral hierarchy across tiers."
      },
      {
        "id": "PY-TOPIC-029-MCQ-05",
        "question": "What type of inheritance is represented by: class Dog(Animal) and class Cat(Animal)?",
        "options": {
          "A": "Hierarchical inheritance",
          "B": "Multiple inheritance",
          "C": "Cyclic inheritance",
          "D": "Singular inheritance"
        },
        "correct": "A",
        "explanation": "Hierarchical inheritance features multiple sibling subclasses deriving from a common base."
      },
      {
        "id": "PY-TOPIC-029-MCQ-06",
        "question": "Can a class in Python inherit from itself directly: class A(A)?",
        "options": {
          "A": "Yes",
          "B": "No, raises NameError or TypeError: cycle in class hierarchy",
          "C": "Only if abstract",
          "D": "Only with super()"
        },
        "correct": "B",
        "explanation": "Cyclic inheritance is illegal and causes an error."
      },
      {
        "id": "PY-TOPIC-029-MCQ-07",
        "question": "What is Hybrid Inheritance?",
        "options": {
          "A": "Inheriting between C++ and Python",
          "B": "A combination of two or more different inheritance types in a single class hierarchy",
          "C": "Inheriting without methods",
          "D": "Inheritance involving modules"
        },
        "correct": "B",
        "explanation": "Hybrid inheritance blends multiple forms (e.g. multiple + hierarchical)."
      },
      {
        "id": "PY-TOPIC-029-MCQ-08",
        "question": "In class C(A, B), which parent's method is searched first if both define method m()?",
        "options": {
          "A": "Class B",
          "B": "Class A (left-to-right order)",
          "C": "Random",
          "D": "Raises ambiguity error"
        },
        "correct": "B",
        "explanation": "Python searches left-to-right following MRO, checking A before B."
      },
      {
        "id": "PY-TOPIC-029-MCQ-09",
        "question": "What algorithm resolves method lookups in Python's multiple inheritance?",
        "options": {
          "A": "Dijkstra's Algorithm",
          "B": "C3 Linearization (MRO)",
          "C": "Depth-First Search exclusively",
          "D": "Breadth-First Search exclusively"
        },
        "correct": "B",
        "explanation": "Python 2.3+ uses the C3 Linearization algorithm to compute a deterministic MRO."
      },
      {
        "id": "PY-TOPIC-029-MCQ-10",
        "question": "What is a 'Mixin' class in Python multiple inheritance design?",
        "options": {
          "A": "A standalone class meant to provide optional functionality to other classes without being instantiated on its own",
          "B": "A class with no methods",
          "C": "A replacement for modules",
          "D": "A database ORM"
        },
        "correct": "A",
        "explanation": "Mixins bundle modular features meant to be mixed into classes via multiple inheritance."
      }
    ]
  },
  {
    "id": "PY-TOPIC-030",
    "topic": "Method Overriding & Overloading",
    "topicName": "Method Overriding & Overloading",
    "definition": [
      "Method Overriding occurs when a child class provides a specialized implementation of a parent method.",
      "Method Overloading (same method name with different parameters) is NOT natively supported in Python.",
      "Defining multiple methods with the same name simply overwrites the previous definition with the latest.",
      "Overloading behavior is achieved using default arguments, *args/**kwargs, or functools.singledispatch."
    ],
    "syntax": "# Method Overriding:\nclass Parent:\n    def greet(self):\n        return 'Hello from Parent'\n\nclass Child(Parent):\n    def greet(self):  # Overrides parent method\n        return 'Hello from Child'\n\n# Simulating Overloading:\ndef add(a, b=0, c=0):\n    return a + b + c",
    "examples": [
      {
        "title": "Example 1: Method Overriding in Action",
        "code": "class Shape:\n    def area(self):\n        return 0\nclass Square(Shape):\n    def __init__(self, s):\n        self.s = s\n    def area(self):\n        return self.s ** 2\nprint('Square area:', Square(4).area())",
        "output": "Square area: 16",
        "explanation": "Square overrides the area() method to compute the area of a square."
      },
      {
        "title": "Example 2: Calling Overridden Method via super()",
        "code": "class Parent:\n    def info(self):\n        return 'Base'\nclass Child(Parent):\n    def info(self):\n        return super().info() + ' -> Extended'\nprint(Child().info())",
        "output": "Base -> Extended",
        "explanation": "super().info() calls the parent method from within the overriding child method."
      },
      {
        "title": "Example 3: Simulating Overloading with Variable Arguments",
        "code": "class Calculator:\n    def add(self, *args):\n        return sum(args)\ncalc = Calculator()\nprint(calc.add(2, 3), calc.add(1, 2, 3, 4))",
        "output": "5 10",
        "explanation": "Using *args allows a single method to accept varying numbers of arguments."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-030-MCQ-01",
        "question": "Does standard Python natively support method overloading like Java or C++?",
        "options": {
          "A": "Yes, identical behavior",
          "B": "No, writing another method with the same name overwrites the previous definition",
          "C": "Only in subclasses",
          "D": "Only with numbers"
        },
        "correct": "B",
        "explanation": "In Python, method definitions bind the name to the latest function object, replacing any prior definition."
      },
      {
        "id": "PY-TOPIC-030-MCQ-02",
        "question": "What is Method Overriding in Python?",
        "options": {
          "A": "Defining two methods with the same name in the same class",
          "B": "Redefining a method in a child class that already exists in the parent class",
          "C": "Deleting a method",
          "D": "Renaming a method at runtime"
        },
        "correct": "B",
        "explanation": "Overriding allows a child class to supply its own implementation of an inherited parent method."
      },
      {
        "id": "PY-TOPIC-030-MCQ-03",
        "question": "How can you invoke the parent class's version of an overridden method from the child class?",
        "options": {
          "A": "super().method_name()",
          "B": "parent.method_name()",
          "C": "this.super.method_name()",
          "D": "base.method_name()"
        },
        "correct": "A",
        "explanation": "super().method() executes the parent class implementation."
      },
      {
        "id": "PY-TOPIC-030-MCQ-04",
        "question": "Which module in Python's standard library provides the @singledispatch decorator for function overloading based on argument type?",
        "options": {
          "A": "itertools",
          "B": "functools",
          "C": "typing",
          "D": "operator"
        },
        "correct": "B",
        "explanation": "functools.singledispatch transforms a function into a generic function supporting type-based dispatch."
      },
      {
        "id": "PY-TOPIC-030-MCQ-05",
        "question": "What is the output of:\nclass A:\n    def f(self, x):\n        return x\n    def f(self, x, y):\n        return x + y\na = A()\nprint(a.f(5, 10))",
        "options": {
          "A": "15",
          "B": "5",
          "C": "TypeError: f() takes 1 positional argument",
          "D": "SyntaxError"
        },
        "correct": "A",
        "explanation": "The second definition f(self, x, y) replaced the first, successfully accepting (5, 10) and returning 15."
      },
      {
        "id": "PY-TOPIC-030-MCQ-06",
        "question": "In the code from the previous question, what happens if you call a.f(5)?",
        "options": {
          "A": "Returns 5",
          "B": "TypeError: missing 1 required positional argument: 'y'",
          "C": "Returns 0",
          "D": "Returns None"
        },
        "correct": "B",
        "explanation": "Because the single-argument version was overwritten, calling a.f(5) fails to supply required parameter y."
      },
      {
        "id": "PY-TOPIC-030-MCQ-07",
        "question": "What is the recommended idiomatic way to handle varying numbers of arguments in a Python method?",
        "options": {
          "A": "Write multiple definitions",
          "B": "Use default parameter values (e.g. param=None) or *args",
          "C": "Use eval()",
          "D": "Pass a string"
        },
        "correct": "B",
        "explanation": "Default values and *args offer clean, flexible parameter handling without multiple definitions."
      },
      {
        "id": "PY-TOPIC-030-MCQ-08",
        "question": "Can static methods be overridden in subclasses in Python?",
        "options": {
          "A": "Yes, a subclass can define a static method of the same name",
          "B": "No, static methods cannot be touched",
          "C": "Only if decorated with @classmethod",
          "D": "Raises RuntimeError"
        },
        "correct": "A",
        "explanation": "Static methods are regular attributes and can be overridden by a subclass."
      },
      {
        "id": "PY-TOPIC-030-MCQ-09",
        "question": "What does the @typing.overload decorator do in Python?",
        "options": {
          "A": "Performs runtime overloading checks",
          "B": "Provides type signatures solely for static type checkers (Mypy) without implementing runtime behavior",
          "C": "Overloads operators",
          "D": "Speeds up code"
        },
        "correct": "B",
        "explanation": "typing.overload is purely an annotation tool for type checkers; it has no runtime implementation effect."
      },
      {
        "id": "PY-TOPIC-030-MCQ-10",
        "question": "When overriding a method in a subclass, is it mandatory to keep the exact same number of parameters as the parent class?",
        "options": {
          "A": "Yes, mandatory or SyntaxError",
          "B": "No, Python does not enforce signature matching, though violating it may break Liskov Substitution Principle",
          "C": "Mandatory only in __init__",
          "D": "Enforced by compiler"
        },
        "correct": "B",
        "explanation": "Python allows differing signatures, but doing so can violate LSP design principles."
      }
    ]
  },
  {
    "id": "PY-TOPIC-031",
    "topic": "Polymorphism",
    "topicName": "Polymorphism",
    "definition": [
      "Polymorphism allows different classes to share the same interface while providing unique implementations.",
      "In Python, polymorphism is deeply tied to Duck Typing: 'if it behaves like a duck, treat it like one'.",
      "It enables writing flexible code where functions can operate on any object implementing expected methods.",
      "Polymorphism is demonstrated through method overriding and operator overloading (e.g. + on strings vs integers)."
    ],
    "syntax": "# Polymorphic function accepting any object with a 'speak' method:\ndef make_sound(entity):\n    return entity.speak()\n\nprint(make_sound(Dog()))   # 'Bark'\nprint(make_sound(Cat()))   # 'Meow'",
    "examples": [
      {
        "title": "Example 1: Polymorphism with Duck Typing",
        "code": "class CreditCard:\n    def pay(self, amt): return f'Paid {amt} via Credit Card'\nclass UPI:\n    def pay(self, amt): return f'Paid {amt} via UPI'\ndef checkout(payment_method, amt):\n    return payment_method.pay(amt)\nprint(checkout(UPI(), 500))",
        "output": "Paid 500 via UPI",
        "explanation": "checkout() doesn't care about the object's class inheritance, only that it provides pay()."
      },
      {
        "title": "Example 2: Operator Polymorphism (+ operator)",
        "code": "print(10 + 20)          # Integer addition\nprint('Py' + 'thon')    # String concatenation\nprint([1] + [2, 3])     # List concatenation",
        "output": "30\nPython\n[1, 2, 3]",
        "explanation": "The + operator behaves polymorphically according to the operands passed."
      },
      {
        "title": "Example 3: Built-in Polymorphic Functions (len())",
        "code": "print(len('Python'))       # 6 chars\nprint(len([1, 2, 3, 4]))   # 4 elements\nprint(len({'a': 1}))       # 1 key",
        "output": "6\n4\n1",
        "explanation": "len() delegates to each object's __len__() method polymorphically."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-031-MCQ-01",
        "question": "What does the term 'Polymorphism' literally mean?",
        "options": {
          "A": "Many forms",
          "B": "Single inheritance",
          "C": "Multiple threads",
          "D": "Hidden data"
        },
        "correct": "A",
        "explanation": "Polymorphism comes from Greek meaning 'having multiple forms'."
      },
      {
        "id": "PY-TOPIC-031-MCQ-02",
        "question": "What is 'Duck Typing' in Python?",
        "options": {
          "A": "A type-checking library",
          "B": "Checking an object for required methods at runtime rather than verifying its explicit class type",
          "C": "Creating classes named Duck",
          "D": "Static compilation typing"
        },
        "correct": "B",
        "explanation": "Duck typing focuses on whether an object can perform the requested action, not its ancestry."
      },
      {
        "id": "PY-TOPIC-031-MCQ-03",
        "question": "How does the built-in len() function achieve polymorphism across diverse data types?",
        "options": {
          "A": "Hardcoded type switches in C",
          "B": "By delegating internally to the object's __len__() magic method",
          "C": "Converting everything to lists",
          "D": "Using multi-threading"
        },
        "correct": "B",
        "explanation": "len(obj) calls obj.__len__(), enabling any custom class to define its own length behavior."
      },
      {
        "id": "PY-TOPIC-031-MCQ-04",
        "question": "Which of the following demonstrates compile-time polymorphism in Python?",
        "options": {
          "A": "Operator overloading",
          "B": "Method overriding",
          "C": "Python only resolves polymorphism dynamically at runtime",
          "D": "Virtual tables"
        },
        "correct": "C",
        "explanation": "Python is dynamically interpreted, resolving polymorphic dispatch at runtime."
      },
      {
        "id": "PY-TOPIC-031-MCQ-05",
        "question": "What happens if a polymorphic function calls obj.speak() on an object that lacks a 'speak' method?",
        "options": {
          "A": "Returns None",
          "B": "Raises AttributeError: '...' object has no attribute 'speak'",
          "C": "Calls parent method automatically",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "If the attribute does not exist on the object, Python raises an AttributeError."
      },
      {
        "id": "PY-TOPIC-031-MCQ-06",
        "question": "Which Python protocol enables iteration polymorphism (for item in obj:)?",
        "options": {
          "A": "__iter__() and __next__()",
          "B": "__loop__()",
          "C": "__repeat__()",
          "D": "__step__()"
        },
        "correct": "A",
        "explanation": "The iterator protocol relies on __iter__() and __next__()."
      },
      {
        "id": "PY-TOPIC-031-MCQ-07",
        "question": "Can two unrelated classes (no shared parent class) behave polymorphically in Python?",
        "options": {
          "A": "No, they must share an abstract base class",
          "B": "Yes, Duck Typing allows any classes implementing the same method names to be used interchangeably",
          "C": "Only if defined in the same file",
          "D": "Only with decorators"
        },
        "correct": "B",
        "explanation": "Duck typing does not require a shared base class; having compatible methods is sufficient."
      },
      {
        "id": "PY-TOPIC-031-MCQ-08",
        "question": "What is Operator Overloading in Python?",
        "options": {
          "A": "Running too many math operations causing overflow",
          "B": "Redefining built-in operators (+, -, *, ==) for user-defined classes using dunder methods",
          "C": "Overwriting keyword names",
          "D": "Using lambda expressions"
        },
        "correct": "B",
        "explanation": "Operator overloading maps operator symbols to special dunder methods like __add__ and __eq__."
      },
      {
        "id": "PY-TOPIC-031-MCQ-09",
        "question": "Which magic method must be implemented to overload the '+' operator for a custom class?",
        "options": {
          "A": "__plus__",
          "B": "__add__",
          "C": "__sum__",
          "D": "__append__"
        },
        "correct": "B",
        "explanation": "Implementing __add__(self, other) overloads the '+' binary addition operator."
      },
      {
        "id": "PY-TOPIC-031-MCQ-10",
        "question": "What is the primary benefit of polymorphism in software architecture?",
        "options": {
          "A": "Decouples client code from concrete implementations, making systems extensible and modular",
          "B": "Reduces variable counts",
          "C": "Increases execution speed by 10x",
          "D": "Compresses memory"
        },
        "correct": "A",
        "explanation": "Polymorphism enables open-closed design: adding new classes without altering existing consuming code."
      }
    ]
  },
  {
    "id": "PY-TOPIC-032",
    "topic": "Encapsulation",
    "topicName": "Encapsulation",
    "definition": [
      "Encapsulation bundles data (attributes) and behavior (methods) into a single unified class structure.",
      "It restricts direct external modification of internal state to prevent unauthorized or invalid changes.",
      "Python enforces access control through naming conventions: single underscore (_x) for protected, double (__x) for private.",
      "Properties (@property) provide pythonic getters and setters with data validation and computed attributes."
    ],
    "syntax": "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # Private attribute\n\n    @property\n    def balance(self):\n        return self.__balance\n\n    @balance.setter\n    def balance(self, value):\n        if value < 0: raise ValueError('Invalid balance')\n        self.__balance = value",
    "examples": [
      {
        "title": "Example 1: Private Attributes with Name Mangling",
        "code": "class Secret:\n    def __init__(self, val):\n        self.__val = val  # Private\ns = Secret(42)\n# print(s.__val) -> AttributeError\nprint(s._Secret__val)  # Name mangled access",
        "output": "42",
        "explanation": "Double underscores trigger name mangling to _ClassName__attr to avoid accidental collisions."
      },
      {
        "title": "Example 2: Using @property for Controlled Access",
        "code": "class Temperature:\n    def __init__(self, c):\n        self._c = c\n    @property\n    def fahrenheit(self):\n        return (self._c * 9/5) + 32\nt = Temperature(25)\nprint('25C in F:', t.fahrenheit)",
        "output": "25C in F: 77.0",
        "explanation": "@property exposes method execution via normal attribute read syntax."
      },
      {
        "title": "Example 3: Validation inside Property Setter",
        "code": "class User:\n    def __init__(self, age):\n        self.age = age\n    @property\n    def age(self):\n        return self._age\n    @age.setter\n    def age(self, val):\n        if val < 0:\n            raise ValueError('Age cannot be negative')\n        self._age = val\nu = User(20)\nprint('Age:', u.age)",
        "output": "Age: 20",
        "explanation": "The setter intercepts assignment, allowing validation before setting internal state."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-032-MCQ-01",
        "question": "What mechanism does Python use when an attribute is prefixed with two leading underscores (e.g., __balance)?",
        "options": {
          "A": "Hardware memory encryption",
          "B": "Name Mangling (renamed to _ClassName__attribute)",
          "C": "Strict C-style private lock",
          "D": "Deletion of the attribute"
        },
        "correct": "B",
        "explanation": "Double underscores activate name mangling, transforming the name to prevent collision in subclasses."
      },
      {
        "id": "PY-TOPIC-032-MCQ-02",
        "question": "What is the convention for indicating an attribute is 'protected' (intended for internal use only)?",
        "options": {
          "A": "Single leading underscore (e.g., _internal_var)",
          "B": "Double trailing underscore (var__)",
          "C": "protected keyword",
          "D": "All uppercase names"
        },
        "correct": "A",
        "explanation": "A single leading underscore is the universal Python convention indicating non-public API."
      },
      {
        "id": "PY-TOPIC-032-MCQ-03",
        "question": "How do you access a private attribute '__val' of object 'obj' from class 'Test' from outside the class?",
        "options": {
          "A": "obj.__val",
          "B": "obj._Test__val",
          "C": "obj.get(__val)",
          "D": "It is completely impossible"
        },
        "correct": "B",
        "explanation": "Name mangling renames __val to _Test__val, which remains accessible if referenced explicitly."
      },
      {
        "id": "PY-TOPIC-032-MCQ-04",
        "question": "What decorator is used to define a getter method that can be accessed like a regular attribute?",
        "options": {
          "A": "@getter",
          "B": "@property",
          "C": "@attribute",
          "D": "@accessor"
        },
        "correct": "B",
        "explanation": "The @property decorator turns a method into a read-only property."
      },
      {
        "id": "PY-TOPIC-032-MCQ-05",
        "question": "What decorator defines a setter corresponding to a property named 'score'?",
        "options": {
          "A": "@set_score",
          "B": "@score.setter",
          "C": "@property.set",
          "D": "@setter(score)"
        },
        "correct": "B",
        "explanation": "@score.setter defines the write logic when assigning to obj.score = val."
      },
      {
        "id": "PY-TOPIC-032-MCQ-06",
        "question": "Why does Python avoid Java-style getVar() and setVar() methods for simple attributes?",
        "options": {
          "A": "Python prefers direct attribute access initially, upgrading seamlessly to @property if validation is needed later",
          "B": "Python cannot call methods",
          "C": "get/set are reserved words",
          "D": "It wastes memory"
        },
        "correct": "A",
        "explanation": "@property preserves backward-compatible attribute access without breaking public API."
      },
      {
        "id": "PY-TOPIC-032-MCQ-07",
        "question": "What happens if a user tries to assign a value to a property that has a getter but NO setter?",
        "options": {
          "A": "The value is set silently",
          "B": "AttributeError: can't set attribute",
          "C": "ValueError",
          "D": "A new variable is created"
        },
        "correct": "B",
        "explanation": "A property without a setter is read-only, raising AttributeError upon assignment."
      },
      {
        "id": "PY-TOPIC-032-MCQ-08",
        "question": "What is the famous Python philosophy regarding access protection: 'We are all consenting adults here'?",
        "options": {
          "A": "Strict security should be enforced at all costs",
          "B": "Conventions and documentation are preferred over rigid compiler-enforced restrictions",
          "C": "Every variable must be public",
          "D": "Python is only for adult developers"
        },
        "correct": "B",
        "explanation": "Python trusts developers to respect conventions rather than imposing impenetrable language barriers."
      },
      {
        "id": "PY-TOPIC-032-MCQ-09",
        "question": "What decorator defines a deleter for a property 'name'?",
        "options": {
          "A": "@name.deleter",
          "B": "@delete(name)",
          "C": "@property.del",
          "D": "@name.remove"
        },
        "correct": "A",
        "explanation": "@name.deleter handles operations when 'del obj.name' is executed."
      },
      {
        "id": "PY-TOPIC-032-MCQ-10",
        "question": "Can attributes with single leading underscores be accessed from outside the class?",
        "options": {
          "A": "No, interpreter blocks it",
          "B": "Yes, Python allows access; the underscore is purely an advisory convention",
          "C": "Only inside the same package",
          "D": "Raises PermissionError"
        },
        "correct": "B",
        "explanation": "Single underscore attributes are accessible; the underscore signals internal implementation."
      }
    ]
  },
  {
    "id": "PY-TOPIC-033",
    "topic": "Abstraction",
    "topicName": "Abstraction",
    "definition": [
      "Abstraction hides internal implementation details while exposing a clear, clean public interface.",
      "Abstract classes cannot be instantiated directly and define a contract that derived classes must fulfill.",
      "Python implements abstraction via the abc module using ABC class and @abstractmethod decorator.",
      "Any subclass inheriting from an abstract base class must override all abstract methods before instantiation."
    ],
    "syntax": "from abc import ABC, abstractmethod\n\nclass PaymentGateway(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass",
    "examples": [
      {
        "title": "Example 1: Defining and Implementing an Abstract Class",
        "code": "from abc import ABC, abstractmethod\nclass Database(ABC):\n    @abstractmethod\n    def connect(self): pass\nclass Postgres(Database):\n    def connect(self): return 'Connected to Postgres'\nprint(Postgres().connect())",
        "output": "Connected to Postgres",
        "explanation": "Postgres fulfills the contract by implementing the abstract connect() method."
      },
      {
        "title": "Example 2: Attempting to Instantiate Incomplete Subclass",
        "code": "from abc import ABC, abstractmethod\nclass Worker(ABC):\n    @abstractmethod\n    def work(self): pass\n# Instantiating Worker directly raises TypeError\nprint('Direct instantiation of abstract class is blocked by Python')",
        "output": "Direct instantiation of abstract class is blocked by Python",
        "explanation": "Subclasses that fail to implement abstract methods cannot be instantiated."
      },
      {
        "title": "Example 3: Abstract Property with @property",
        "code": "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @property\n    @abstractmethod\n    def area(self): pass\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    @property\n    def area(self): return 3.14 * self.r ** 2\nprint('Circle area:', Circle(10).area)",
        "output": "Circle area: 314.0",
        "explanation": "Combining @property with @abstractmethod enforces property implementation in subclasses."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-033-MCQ-01",
        "question": "Which standard library module is used to create abstract base classes in Python?",
        "options": {
          "A": "abstract",
          "B": "abc",
          "C": "interface",
          "D": "typing"
        },
        "correct": "B",
        "explanation": "The 'abc' (Abstract Base Classes) module provides ABC and @abstractmethod."
      },
      {
        "id": "PY-TOPIC-033-MCQ-02",
        "question": "What happens if you attempt to instantiate an abstract class that has abstract methods?",
        "options": {
          "A": "Creates empty object",
          "B": "Raises TypeError: Can't instantiate abstract class with abstract methods",
          "C": "Compiles with warning",
          "D": "Returns None"
        },
        "correct": "B",
        "explanation": "Python blocks instantiation of abstract classes missing concrete implementations."
      },
      {
        "id": "PY-TOPIC-033-MCQ-03",
        "question": "Can an abstract method contain an actual implementation body in Python?",
        "options": {
          "A": "No, it must be empty or pass",
          "B": "Yes, it can contain default logic callable via super().method() in subclasses",
          "C": "Only print statements",
          "D": "Forbidden by compiler"
        },
        "correct": "B",
        "explanation": "Abstract methods can have code bodies that derived classes can invoke via super()."
      },
      {
        "id": "PY-TOPIC-033-MCQ-04",
        "question": "If a subclass of an abstract class implements only 2 out of 3 abstract methods, can it be instantiated?",
        "options": {
          "A": "Yes, partially",
          "B": "No, it remains an abstract class and cannot be instantiated",
          "C": "Only if default values exist",
          "D": "Only in Python 3.11+"
        },
        "correct": "B",
        "explanation": "All abstract methods must be implemented; otherwise the subclass is still considered abstract."
      },
      {
        "id": "PY-TOPIC-033-MCQ-05",
        "question": "What is the difference between an Abstract Class and an Interface in modern Python?",
        "options": {
          "A": "They are identical in Python; Python uses ABCs (and typing.Protocol) to serve both purposes",
          "B": "Python has an explicit 'interface' keyword",
          "C": "Interfaces cannot have names",
          "D": "ABCs cannot have normal methods"
        },
        "correct": "A",
        "explanation": "Python does not have an 'interface' keyword; ABCs and Protocols serve as interfaces."
      },
      {
        "id": "PY-TOPIC-033-MCQ-06",
        "question": "What is typing.Protocol in Python 3.8+ (PEP 544)?",
        "options": {
          "A": "Network socket protocol",
          "B": "Structural subtyping (static duck typing) where classes match interfaces without explicitly inheriting",
          "C": "Encryption algorithm",
          "D": "HTTP client"
        },
        "correct": "B",
        "explanation": "Protocol enables static duck typing without explicit inheritance."
      },
      {
        "id": "PY-TOPIC-033-MCQ-07",
        "question": "Can an abstract class define normal, non-abstract concrete methods?",
        "options": {
          "A": "No, all methods must be abstract",
          "B": "Yes, abstract classes can mix concrete methods with abstract ones",
          "C": "Only static methods",
          "D": "Only __init__"
        },
        "correct": "B",
        "explanation": "Abstract classes frequently provide common concrete base methods alongside abstract ones."
      },
      {
        "id": "PY-TOPIC-033-MCQ-08",
        "question": "What decorator marks a method as abstract?",
        "options": {
          "A": "@abstract",
          "B": "@abstractmethod",
          "C": "@pure_virtual",
          "D": "@interface"
        },
        "correct": "B",
        "explanation": "The @abstractmethod decorator from abc marks methods as required overrides."
      },
      {
        "id": "PY-TOPIC-033-MCQ-09",
        "question": "How do you register an unrelated class as a 'virtual subclass' of an ABC without inheriting from it?",
        "options": {
          "A": "MyABC.register(TargetClass)",
          "B": "TargetClass.bind(MyABC)",
          "C": "TargetClass.__implements__ = MyABC",
          "D": "abc.link(TargetClass)"
        },
        "correct": "A",
        "explanation": "ABC.register(cls) makes issubclass() and isinstance() return True without actual inheritance."
      },
      {
        "id": "PY-TOPIC-033-MCQ-10",
        "question": "Why is Abstraction critical in large enterprise software development?",
        "options": {
          "A": "Reduces database costs",
          "B": "Enforces architectural boundaries, decoupling high-level policy from low-level details",
          "C": "Makes compilation faster",
          "D": "Eliminates unit tests"
        },
        "correct": "B",
        "explanation": "Abstraction decouples callers from concrete implementations, supporting interchangeable components."
      }
    ]
  },
  {
    "id": "PY-TOPIC-034",
    "topic": "super()",
    "topicName": "super()",
    "definition": [
      "super() returns a proxy object that delegates method calls to a parent or sibling class in the MRO.",
      "In Python 3, zero-argument super() automatically resolves the current class and instance context.",
      "It is most commonly used in derived class __init__ methods to ensure proper base class initialization.",
      "In multiple inheritance hierarchies, super() is critical for cooperative method chaining along the MRO."
    ],
    "syntax": "class Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)  # Calls Parent.__init__\n        self.age = age",
    "examples": [
      {
        "title": "Example 1: Calling Parent Constructor with super()",
        "code": "class Person:\n    def __init__(self, name):\n        self.name = name\nclass Employee(Person):\n    def __init__(self, name, emp_id):\n        super().__init__(name)\n        self.emp_id = emp_id\ne = Employee('Koti', 501)\nprint(e.name, e.emp_id)",
        "output": "Koti 501",
        "explanation": "super().__init__(name) initializes the inherited name attribute on the Person class."
      },
      {
        "title": "Example 2: Cooperative Multiple Inheritance with super()",
        "code": "class A:\n    def ping(self): return 'A'\nclass B(A):\n    def ping(self): return 'B -> ' + super().ping()\nprint(B().ping())",
        "output": "B -> A",
        "explanation": "super().ping() invokes the next class in the Method Resolution Order (class A)."
      },
      {
        "title": "Example 3: Extending Method Behavior with super()",
        "code": "class Logger:\n    def log(self, msg): return [msg]\nclass TimestampLogger(Logger):\n    def log(self, msg):\n        logs = super().log(msg)\n        return logs + ['Logged at 12:00']\nprint(TimestampLogger().log('Task Done'))",
        "output": "['Task Done', 'Logged at 12:00']",
        "explanation": "super() allows enhancing base functionality without rewriting parent logic."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-034-MCQ-01",
        "question": "What is the simplified syntax for super() inside an instance method in Python 3?",
        "options": {
          "A": "super(ClassName, self)",
          "B": "super()",
          "C": "this.super()",
          "D": "base()"
        },
        "correct": "B",
        "explanation": "Python 3 introduced the zero-argument super() which automatically infers class and instance."
      },
      {
        "id": "PY-TOPIC-034-MCQ-02",
        "question": "In multiple inheritance, does super() always call the direct parent listed first?",
        "options": {
          "A": "Yes, always the first parent class",
          "B": "No, it calls the NEXT class in the object's Method Resolution Order (MRO)",
          "C": "It calls all parent classes simultaneously",
          "D": "It calls root object class"
        },
        "correct": "B",
        "explanation": "super() delegates along the computed MRO, which may be a sibling class rather than a direct parent."
      },
      {
        "id": "PY-TOPIC-034-MCQ-03",
        "question": "What is the advantage of using super().__init__() over directly calling Parent.__init__(self)?",
        "options": {
          "A": "It runs faster",
          "B": "It supports cooperative multiple inheritance without hardcoding parent class names",
          "C": "It allocates less RAM",
          "D": "It skips parent validation"
        },
        "correct": "B",
        "explanation": "super() prevents duplicate execution and avoids hardcoding class names."
      },
      {
        "id": "PY-TOPIC-034-MCQ-04",
        "question": "What happens if a class calls super().method() but none of its ancestors implement 'method'?",
        "options": {
          "A": "Returns None silently",
          "B": "Raises AttributeError",
          "C": "Passes through to built-in print",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "If no class in the MRO chain contains the method, an AttributeError is raised."
      },
      {
        "id": "PY-TOPIC-034-MCQ-05",
        "question": "Can super() be used inside a @classmethod?",
        "options": {
          "A": "No, super() only works with instances",
          "B": "Yes, super() resolves the next class in the class's MRO correctly",
          "C": "Only if passed self",
          "D": "Only in Python 3.12"
        },
        "correct": "B",
        "explanation": "super() works inside class methods by binding to cls."
      },
      {
        "id": "PY-TOPIC-034-MCQ-06",
        "question": "What does super(Child, self) do?",
        "options": {
          "A": "Explicit Python 2 legacy form specifying start class Child and instance self",
          "B": "Raises TypeError in Python 3",
          "C": "Creates an unbound super object",
          "D": "Calls Child's constructor"
        },
        "correct": "A",
        "explanation": "super(Child, self) is the explicit syntax equivalent to zero-argument super() in Python 3."
      },
      {
        "id": "PY-TOPIC-034-MCQ-07",
        "question": "Can you use super() in a class that does not explicitly inherit from any parent class?",
        "options": {
          "A": "No, causes error",
          "B": "Yes, because every class implicitly inherits from 'object'",
          "C": "Only in abstract classes",
          "D": "Only with static methods"
        },
        "correct": "B",
        "explanation": "All classes inherit from object, so super() resolves to the object base class."
      },
      {
        "id": "PY-TOPIC-034-MCQ-08",
        "question": "Why is cooperative multiple inheritance with super() sometimes called 'dependency injection by MRO'?",
        "options": {
          "A": "Because classes don't need to know who is next in line; the caller's MRO determines the dispatch chain",
          "B": "Because it uses pip",
          "C": "Because it injects bytecode",
          "D": "Because it writes to disk"
        },
        "correct": "A",
        "explanation": "The runtime MRO dictates the next handler in line, decoupling classes from explicit parents."
      },
      {
        "id": "PY-TOPIC-034-MCQ-09",
        "question": "What is the output of:\nclass A:\n    def f(self): return 1\nclass B(A):\n    def f(self): return super().f() + 1\nprint(B().f())",
        "options": {
          "A": "1",
          "B": "2",
          "C": "0",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "super().f() returns 1; 1 + 1 equals 2."
      },
      {
        "id": "PY-TOPIC-034-MCQ-10",
        "question": "Does super() create a new instance of the parent class?",
        "options": {
          "A": "Yes, allocates a temporary parent object",
          "B": "No, it returns a proxy descriptor object bound to the existing instance",
          "C": "Creates a deepcopy of self",
          "D": "Returns a dictionary"
        },
        "correct": "B",
        "explanation": "super() creates a proxy descriptor that looks up methods along the MRO of the current instance."
      }
    ]
  },
  {
    "id": "PY-TOPIC-035",
    "topic": "Access Modifiers",
    "topicName": "Access Modifiers",
    "definition": [
      "Access modifiers define the accessibility and visibility of class members (variables and methods).",
      "Public members (no underscore) can be accessed freely from anywhere inside and outside the class.",
      "Protected members (single leading underscore, _var) are intended for internal class and subclass use.",
      "Private members (double leading underscore, __var) undergo name mangling to prevent outside access."
    ],
    "syntax": "class AccessDemo:\n    def __init__(self):\n        self.public = 'Everyone'     # Public\n        self._protected = 'Family'   # Protected\n        self.__private = 'Secret'    # Private (mangled)",
    "examples": [
      {
        "title": "Example 1: Public, Protected, and Private Attributes",
        "code": "class Sample:\n    def __init__(self):\n        self.x = 10     # Public\n        self._y = 20    # Protected\n        self.__z = 30   # Private\ns = Sample()\nprint('Public:', s.x, '| Protected:', s._y)\nprint('Private via mangling:', s._Sample__z)",
        "output": "Public: 10 | Protected: 20\nPrivate via mangling: 30",
        "explanation": "Public is open, protected is conventional, and private is mangled with _ClassName prefix."
      },
      {
        "title": "Example 2: Name Collision Prevention in Subclasses",
        "code": "class Parent:\n    def __init__(self):\n        self.__data = 'Parent Data'\nclass Child(Parent):\n    def __init__(self):\n        super().__init__()\n        self.__data = 'Child Data'\nc = Child()\nprint(c._Parent__data, c._Child__data)",
        "output": "Parent Data Child Data",
        "explanation": "Name mangling keeps Parent.__data and Child.__data distinct, preventing accidental overwrite."
      },
      {
        "title": "Example 3: Private Methods",
        "code": "class Engine:\n    def start(self):\n        self.__ignite()\n        return 'Engine active'\n    def __ignite(self):\n        pass\nprint(Engine().start())",
        "output": "Engine active",
        "explanation": "Private methods (__ignite) hide internal helper operations from external callers."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-035-MCQ-01",
        "question": "How do you declare a public attribute in Python?",
        "options": {
          "A": "public self.var = 10",
          "B": "self.var = 10 (no leading underscore)",
          "C": "self._var = 10",
          "D": "var: public = 10"
        },
        "correct": "B",
        "explanation": "Attributes with standard names and no leading underscores are public by default."
      },
      {
        "id": "PY-TOPIC-035-MCQ-02",
        "question": "What does a single leading underscore (e.g., _salary) indicate to fellow developers?",
        "options": {
          "A": "Compiler throws an error if accessed outside",
          "B": "A convention signaling protected/internal use; avoid accessing from outside",
          "C": "The variable is a static constant",
          "D": "The variable is deleted after __init__"
        },
        "correct": "B",
        "explanation": "Single leading underscore indicates protected internal use by convention."
      },
      {
        "id": "PY-TOPIC-035-MCQ-03",
        "question": "What is the transformation applied by name mangling to '__key' in class 'Vault'?",
        "options": {
          "A": "_key_Vault",
          "B": "_Vault__key",
          "C": "__Vault_key",
          "D": "Vault.__key"
        },
        "correct": "B",
        "explanation": "Double leading underscores are mangled into _ClassName__attribute."
      },
      {
        "id": "PY-TOPIC-035-MCQ-04",
        "question": "Do double leading AND trailing underscores (e.g., __init__, __str__) undergo name mangling?",
        "options": {
          "A": "Yes, always",
          "B": "No, double leading and trailing underscores denote special magic/dunder methods and are not mangled",
          "C": "Only in subclasses",
          "D": "Only __init__ is exempt"
        },
        "correct": "B",
        "explanation": "Names with both leading and trailing double underscores (__name__) are reserved dunder identifiers."
      },
      {
        "id": "PY-TOPIC-035-MCQ-05",
        "question": "Are private variables in Python truly private and inaccessible from outside code?",
        "options": {
          "A": "Yes, Python uses kernel-level memory locks",
          "B": "No, they can still be accessed via their mangled name (_ClassName__attr)",
          "C": "Only accessible if password is provided",
          "D": "Yes, causes Segmentation Fault on external read"
        },
        "correct": "B",
        "explanation": "Python does not strictly prevent access; name mangling avoids naming accidents, not deliberate inspection."
      },
      {
        "id": "PY-TOPIC-035-MCQ-06",
        "question": "What is the primary motivation behind Python's name mangling mechanism?",
        "options": {
          "A": "To secure confidential corporate data from hackers",
          "B": "To prevent subclasses from accidentally overriding parent private attributes",
          "C": "To compress variable names in bytecode",
          "D": "To speed up dictionary lookups"
        },
        "correct": "B",
        "explanation": "Name mangling is designed to prevent naming conflicts in inheritance hierarchies."
      },
      {
        "id": "PY-TOPIC-035-MCQ-07",
        "question": "What happens when you import a module with wildcard (from mod import *) regarding names starting with an underscore?",
        "options": {
          "A": "They are imported first",
          "B": "Names starting with an underscore are NOT imported by default",
          "C": "Raises ImportError",
          "D": "Overwrites existing globals"
        },
        "correct": "B",
        "explanation": "Wildcard imports skip names starting with an underscore (unless listed in __all__)."
      },
      {
        "id": "PY-TOPIC-035-MCQ-08",
        "question": "Can methods also be made private using double underscores (e.g. def __helper(self):)?",
        "options": {
          "A": "No, only variables can be private",
          "B": "Yes, methods are mangled to _ClassName__helper just like attributes",
          "C": "Causes SyntaxError",
          "D": "Only static methods"
        },
        "correct": "B",
        "explanation": "Methods are attributes too, so name mangling applies equally to private method definitions."
      },
      {
        "id": "PY-TOPIC-035-MCQ-09",
        "question": "Which access modifier keyword is built into Python syntax?",
        "options": {
          "A": "private",
          "B": "protected",
          "C": "public",
          "D": "None of the above (Python uses naming conventions instead)"
        },
        "correct": "D",
        "explanation": "Python does not have keywords for access specifiers; it relies entirely on naming conventions."
      },
      {
        "id": "PY-TOPIC-035-MCQ-10",
        "question": "What is the output of:\nclass A:\n    __x = 10\nprint(hasattr(A, '__x'), hasattr(A, '_A__x'))",
        "options": {
          "A": "True False",
          "B": "False True",
          "C": "True True",
          "D": "False False"
        },
        "correct": "B",
        "explanation": "__x was mangled into _A__x, so '__x' is absent on A while '_A__x' exists."
      }
    ]
  },
  {
    "id": "PY-TOPIC-036",
    "topic": "Magic/Dunder Methods",
    "topicName": "Magic/Dunder Methods",
    "definition": [
      "Magic methods (also called dunder methods, short for double underscore) begin and end with __.",
      "They let user-defined classes hook into Python's built-in operators, protocols, and expressions.",
      "__str__ provides human-readable string representation, while __repr__ provides unambiguous debugging output.",
      "Examples include __len__, __getitem__, __eq__, __add__, __iter__, __enter__, and __call__."
    ],
    "syntax": "class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __str__(self):\n        return f'Vector({self.x}, {self.y})'",
    "examples": [
      {
        "title": "Example 1: __str__ and __repr__ for Custom Classes",
        "code": "class Book:\n    def __init__(self, title):\n        self.title = title\n    def __str__(self):\n        return f'Book: {self.title}'\n    def __repr__(self):\n        return f\"Book('{self.title}')\"\nb = Book('Python Guide')\nprint(str(b), repr(b))",
        "output": "Book: Python Guide Book('Python Guide')",
        "explanation": "__str__ is user-facing; __repr__ is unambiguous and developer-oriented."
      },
      {
        "title": "Example 2: Making Objects Callable with __call__",
        "code": "class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, val):\n        return val * self.factor\ntriple = Multiplier(3)\nprint(triple(10))",
        "output": "30",
        "explanation": "__call__ allows instances to be invoked with parentheses just like functions."
      },
      {
        "title": "Example 3: Container Emulation with __len__ and __getitem__",
        "code": "class Deck:\n    def __init__(self):\n        self.cards = ['A', 'K', 'Q', 'J']\n    def __len__(self):\n        return len(self.cards)\n    def __getitem__(self, i):\n        return self.cards[i]\nd = Deck()\nprint(len(d), d[0], d[-1])",
        "output": "4 A J",
        "explanation": "Implementing __len__ and __getitem__ gives full slicing and indexing support automatically."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-036-MCQ-01",
        "question": "What does 'dunder' stand for in Python terminology?",
        "options": {
          "A": "Dynamic underlying runtime",
          "B": "Double underscore (names starting and ending with __)",
          "C": "Data under register",
          "D": "Duplicate entity identifier"
        },
        "correct": "B",
        "explanation": "Dunder is shorthand for 'Double Underscore' (e.g. __init__)."
      },
      {
        "id": "PY-TOPIC-036-MCQ-02",
        "question": "What is the difference between __str__ and __repr__?",
        "options": {
          "A": "__str__ is for machines, __repr__ is for humans",
          "B": "__str__ is for readable user-friendly output, __repr__ is for unambiguous developer debugging output",
          "C": "__repr__ only returns numbers",
          "D": "They are identical"
        },
        "correct": "B",
        "explanation": "__str__ targets readability for end-users, while __repr__ targets unambiguous debugging."
      },
      {
        "id": "PY-TOPIC-036-MCQ-03",
        "question": "If a class implements __repr__ but does NOT implement __str__, what happens when str(obj) is called?",
        "options": {
          "A": "Raises AttributeError",
          "B": "Python falls back to calling __repr__",
          "C": "Returns empty string",
          "D": "Returns memory address"
        },
        "correct": "B",
        "explanation": "Python falls back to __repr__ if __str__ is not defined on the class."
      },
      {
        "id": "PY-TOPIC-036-MCQ-04",
        "question": "Which magic method allows an object to be indexed using square brackets: obj[key]?",
        "options": {
          "A": "__index__",
          "B": "__getitem__",
          "C": "__get__",
          "D": "__subscript__"
        },
        "correct": "B",
        "explanation": "__getitem__(self, key) implements evaluation of self[key]."
      },
      {
        "id": "PY-TOPIC-036-MCQ-05",
        "question": "Which magic method allows an instance of a class to be invoked like a function: obj()?",
        "options": {
          "A": "__invoke__",
          "B": "__call__",
          "C": "__run__",
          "D": "__execute__"
        },
        "correct": "B",
        "explanation": "__call__ makes instances callable like functions."
      },
      {
        "id": "PY-TOPIC-036-MCQ-06",
        "question": "Which magic method is called when evaluating the equality operator 'a == b'?",
        "options": {
          "A": "__equal__",
          "B": "__eq__",
          "C": "__cmp__",
          "D": "__same__"
        },
        "correct": "B",
        "explanation": "__eq__(self, other) implements the equality comparison '=='."
      },
      {
        "id": "PY-TOPIC-036-MCQ-07",
        "question": "What must __len__() return?",
        "options": {
          "A": "Any non-negative integer >= 0",
          "B": "Any number",
          "C": "A float",
          "D": "None"
        },
        "correct": "A",
        "explanation": "__len__() must return an integer >= 0; negative or non-integer values raise TypeError."
      },
      {
        "id": "PY-TOPIC-036-MCQ-08",
        "question": "Which method enables hashing an object so it can be stored in sets or as dictionary keys?",
        "options": {
          "A": "__hash__",
          "B": "__id__",
          "C": "__key__",
          "D": "__crc__"
        },
        "correct": "A",
        "explanation": "__hash__() returns an integer hash value used by hash tables."
      },
      {
        "id": "PY-TOPIC-036-MCQ-09",
        "question": "What magic method is called by the boolean test: bool(obj) or if obj:?",
        "options": {
          "A": "__truth__",
          "B": "__bool__ (falling back to __len__ if not defined)",
          "C": "__is_true__",
          "D": "__eval__"
        },
        "correct": "B",
        "explanation": "bool() checks __bool__(); if absent, it checks whether __len__() > 0."
      },
      {
        "id": "PY-TOPIC-036-MCQ-10",
        "question": "Which magic method handles attribute assignment (obj.attr = val)?",
        "options": {
          "A": "__setattribute__",
          "B": "__setattr__",
          "C": "__assign__",
          "D": "__write__"
        },
        "correct": "B",
        "explanation": "__setattr__(self, name, value) intercepts every attribute assignment."
      }
    ]
  },
  {
    "id": "PY-TOPIC-037",
    "topic": "MRO",
    "topicName": "MRO",
    "definition": [
      "MRO (Method Resolution Order) is the deterministic order in which Python searches base classes for attributes.",
      "Python uses the C3 Linearization algorithm to calculate a consistent, predictable lookup hierarchy.",
      "You can inspect any class's MRO using ClassName.mro() or ClassName.__mro__.",
      "MRO guarantees monotonicity (subclass precedes base) and preserves local precedence order (left-to-right)."
    ],
    "syntax": "# Inspecting MRO:\nclass A: pass\nclass B(A): pass\nprint(B.mro())  # [<class 'B'>, <class 'A'>, <class 'object'>]",
    "examples": [
      {
        "title": "Example 1: Classic Diamond Inheritance MRO",
        "code": "class A:\n    def greet(self): return 'A'\nclass B(A):\n    def greet(self): return 'B'\nclass C(A):\n    def greet(self): return 'C'\nclass D(B, C):\n    pass\nprint(D().greet())\nprint([cls.__name__ for cls in D.mro()])",
        "output": "B\n['D', 'B', 'C', 'A', 'object']",
        "explanation": "D checks B first, then C, then A, and finally object. B takes precedence over C."
      },
      {
        "title": "Example 2: Left-to-Right Precedence",
        "code": "class X: pass\nclass Y: pass\nclass Z(X, Y): pass\nprint([c.__name__ for c in Z.mro()])",
        "output": "['Z', 'X', 'Y', 'object']",
        "explanation": "Direct base classes listed in class definition are prioritized left-to-right (X before Y)."
      },
      {
        "title": "Example 3: Illegal Hierarchy Raising TypeError",
        "code": "# class O: pass\n# class A(O): pass\n# class B(A, O): pass # Valid\n# class Bad(O, A): pass # TypeError: Cannot create consistent MRO\nprint('Python rejects class hierarchies that violate C3 linearization')",
        "output": "Python rejects class hierarchies that violate C3 linearization",
        "explanation": "Listing parent before child in base class tuple violates C3 order and raises TypeError."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-037-MCQ-01",
        "question": "What does MRO stand for in Python?",
        "options": {
          "A": "Memory Resolution Object",
          "B": "Method Resolution Order",
          "C": "Module Runtime Organization",
          "D": "Multiple Routing Operator"
        },
        "correct": "B",
        "explanation": "MRO stands for Method Resolution Order."
      },
      {
        "id": "PY-TOPIC-037-MCQ-02",
        "question": "Which algorithm does Python 3 use to compute the MRO of classes?",
        "options": {
          "A": "Depth-First Search (DFS)",
          "B": "Breadth-First Search (BFS)",
          "C": "C3 Linearization Algorithm",
          "D": "Dijkstra's Algorithm"
        },
        "correct": "C",
        "explanation": "Python 2.3+ and Python 3 use the C3 Linearization algorithm to compute the MRO."
      },
      {
        "id": "PY-TOPIC-037-MCQ-03",
        "question": "How can you view the MRO of a class named 'MyClass' in code?",
        "options": {
          "A": "MyClass.mro() or MyClass.__mro__",
          "B": "mro(MyClass)",
          "C": "inspect.order(MyClass)",
          "D": "MyClass.hierarchy()"
        },
        "correct": "A",
        "explanation": "Both the mro() method and the __mro__ attribute expose the class resolution tuple."
      },
      {
        "id": "PY-TOPIC-037-MCQ-04",
        "question": "What is the final class at the end of every Python 3 class's MRO?",
        "options": {
          "A": "None",
          "B": "type",
          "C": "object",
          "D": "BaseClass"
        },
        "correct": "C",
        "explanation": "'object' is the root of the class tree and the final entry in every MRO."
      },
      {
        "id": "PY-TOPIC-037-MCQ-05",
        "question": "What exception is raised when defining a class with an inconsistent inheritance hierarchy that violates C3 linearization?",
        "options": {
          "A": "RecursionError",
          "B": "TypeError: Cannot create a consistent method resolution order (MRO)",
          "C": "ValueError",
          "D": "SyntaxError"
        },
        "correct": "B",
        "explanation": "Inconsistent class relationships raise TypeError at class definition time."
      },
      {
        "id": "PY-TOPIC-037-MCQ-06",
        "question": "In class D(B, C), where B and C both inherit from A, what is D's MRO?",
        "options": {
          "A": "D -> B -> A -> C -> object",
          "B": "D -> B -> C -> A -> object",
          "C": "D -> C -> B -> A -> object",
          "D": "D -> A -> B -> C -> object"
        },
        "correct": "B",
        "explanation": "C3 linearization evaluates D -> B -> C -> A -> object, keeping grandparent A after both children."
      },
      {
        "id": "PY-TOPIC-037-MCQ-07",
        "question": "What principle of C3 linearization ensures that subclasses appear before their base classes in the MRO?",
        "options": {
          "A": "Local Precedence Order",
          "B": "Monotonicity",
          "C": "Strict Hierarchy",
          "D": "Preservation"
        },
        "correct": "B",
        "explanation": "Monotonicity guarantees that a class always precedes its superclasses in the lookup chain."
      },
      {
        "id": "PY-TOPIC-037-MCQ-08",
        "question": "What does super() use under the hood to determine which class method to invoke next?",
        "options": {
          "A": "The __bases__ tuple only",
          "B": "The instance's __class__.__mro__ list",
          "C": "Alphabetical order",
          "D": "sys.modules"
        },
        "correct": "B",
        "explanation": "super() walks the object's computed __mro__ to find the next class."
      },
      {
        "id": "PY-TOPIC-037-MCQ-09",
        "question": "What is the output of:\nclass A: pass\nprint(A.__mro__)",
        "options": {
          "A": "(<class '__main__.A'>,)",
          "B": "(<class '__main__.A'>, <class 'object'>)",
          "C": "TypeError",
          "D": "[A, object]"
        },
        "correct": "B",
        "explanation": "A's __mro__ is a tuple containing class A followed by class object."
      },
      {
        "id": "PY-TOPIC-037-MCQ-10",
        "question": "Why did Python switch from old-style DFS to C3 linearization in Python 2.3?",
        "options": {
          "A": "DFS had diamond problem anomalies where a grandparent method was called before an overridden sibling method",
          "B": "DFS was too slow",
          "C": "DFS did not support recursion",
          "D": "DFS was incompatible with C"
        },
        "correct": "A",
        "explanation": "Old-style depth-first lookup could prematurely visit ancestors before specialized subclasses in diamond hierarchies."
      }
    ]
  },
  {
    "id": "PY-TOPIC-038",
    "topic": "Iterators",
    "topicName": "Iterators",
    "definition": [
      "An iterable is any object capable of returning its members one at a time (implements __iter__).",
      "An iterator is a stateful object that produces successive values via __next__() until StopIteration is raised.",
      "Calling iter(iterable) returns an iterator; calling next(iterator) retrieves the next element.",
      "Iterators save memory by computing values lazily on-the-fly rather than loading everything into RAM."
    ],
    "syntax": "# Iterator Protocol:\nclass MyRange:\n    def __init__(self, limit):\n        self.cur = 0\n        self.limit = limit\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.cur >= self.limit:\n            raise StopIteration\n        val = self.cur\n        self.cur += 1\n        return val",
    "examples": [
      {
        "title": "Example 1: Using iter() and next() Manually",
        "code": "nums = [10, 20]\nit = iter(nums)\nprint(next(it))\nprint(next(it))\n# next(it) -> raises StopIteration",
        "output": "10\n20",
        "explanation": "iter() retrieves the iterator and next() advances it step-by-step."
      },
      {
        "title": "Example 2: How 'for' Loops Work Internally",
        "code": "data = ['a', 'b']\nit = iter(data)\nwhile True:\n    try:\n        item = next(it)\n        print(item, end=' ')\n    except StopIteration:\n        break",
        "output": "a b ",
        "explanation": "Python's for loop is syntactic sugar over a while loop catching StopIteration."
      },
      {
        "title": "Example 3: next() with Default Fallback Value",
        "code": "it = iter([1])\nprint(next(it, 'Default'))\nprint(next(it, 'Default'))",
        "output": "1\nDefault",
        "explanation": "Passing a second argument to next() provides a safe fallback instead of raising StopIteration."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-038-MCQ-01",
        "question": "What two methods must a Python class implement to satisfy the Iterator protocol?",
        "options": {
          "A": "__start__() and __step__()",
          "B": "__iter__() and __next__()",
          "C": "__enter__() and __exit__()",
          "D": "__get__() and __set__()"
        },
        "correct": "B",
        "explanation": "The iterator protocol requires __iter__() to return the iterator and __next__() to yield items."
      },
      {
        "id": "PY-TOPIC-038-MCQ-02",
        "question": "What exception signals that an iterator has exhausted all elements?",
        "options": {
          "A": "IndexError",
          "B": "StopIteration",
          "C": "EndIterError",
          "D": "EOFError"
        },
        "correct": "B",
        "explanation": "__next__() raises StopIteration when there are no more items."
      },
      {
        "id": "PY-TOPIC-038-MCQ-03",
        "question": "Is a Python list an iterator?",
        "options": {
          "A": "Yes, lists are iterators",
          "B": "No, a list is an iterable; calling iter(list) produces an iterator",
          "C": "Only when passed to for loops",
          "D": "Only sorted lists"
        },
        "correct": "B",
        "explanation": "Lists are iterables, not iterators (lists lack a __next__ method)."
      },
      {
        "id": "PY-TOPIC-038-MCQ-04",
        "question": "What does next(it, 'DONE') do when the iterator 'it' is exhausted?",
        "options": {
          "A": "Raises StopIteration",
          "B": "Returns 'DONE' without raising an exception",
          "C": "Resets the iterator",
          "D": "Returns None"
        },
        "correct": "B",
        "explanation": "The second parameter acts as a default value returned upon reaching the end."
      },
      {
        "id": "PY-TOPIC-038-MCQ-05",
        "question": "Can an exhausted iterator be reused or rewound back to the start?",
        "options": {
          "A": "Yes, using it.reset()",
          "B": "No, iterators are one-way streams; a new iterator must be created using iter()",
          "C": "Yes, calling next(it, reverse=True)",
          "D": "Automatically on next loop"
        },
        "correct": "B",
        "explanation": "Iterators consume data forward only; once exhausted, you must create a new iterator."
      },
      {
        "id": "PY-TOPIC-038-MCQ-06",
        "question": "What does an iterator's __iter__() method return by convention?",
        "options": {
          "A": "A new list",
          "B": "self (the iterator itself)",
          "C": "The first element",
          "D": "None"
        },
        "correct": "B",
        "explanation": "An iterator's __iter__() simply returns self so that iterators are themselves iterable."
      },
      {
        "id": "PY-TOPIC-038-MCQ-07",
        "question": "Which standard library module contains powerful building blocks for creating complex iterators?",
        "options": {
          "A": "collections",
          "B": "itertools",
          "C": "functools",
          "D": "operator"
        },
        "correct": "B",
        "explanation": "itertools provides high-performance iterator functions (count, cycle, chain, islice, etc.)."
      },
      {
        "id": "PY-TOPIC-038-MCQ-08",
        "question": "What is the memory advantage of using an iterator over loading a 10 GB file into a list?",
        "options": {
          "A": "Iterators compress data on disk",
          "B": "Iterators yield one item at a time in memory, using O(1) constant RAM regardless of total dataset size",
          "C": "Iterators use GPU memory",
          "D": "Zero difference"
        },
        "correct": "B",
        "explanation": "Iterators evaluate lazily, consuming minimal constant memory."
      },
      {
        "id": "PY-TOPIC-038-MCQ-09",
        "question": "What happens if you pass an integer to iter(42)?",
        "options": {
          "A": "Yields 42",
          "B": "TypeError: 'int' object is not iterable",
          "C": "Yields numbers 0 to 41",
          "D": "Returns None"
        },
        "correct": "B",
        "explanation": "Integers do not implement __iter__ or sequence indexing, raising TypeError."
      },
      {
        "id": "PY-TOPIC-038-MCQ-10",
        "question": "What does itertools.count(start=5, step=2) produce?",
        "options": {
          "A": "A finite range from 5 to 7",
          "B": "An infinite iterator yielding 5, 7, 9, 11, ...",
          "C": "A list of numbers",
          "D": "Error"
        },
        "correct": "B",
        "explanation": "itertools.count generates an infinite sequence of evenly spaced values."
      }
    ]
  },
  {
    "id": "PY-TOPIC-039",
    "topic": "Generators & yield",
    "topicName": "Generators & yield",
    "definition": [
      "A generator is a special function that yields values one at a time using the yield keyword instead of return.",
      "When yield is reached, the function's execution state, local variables, and instruction pointer are paused.",
      "Generators automatically implement the iterator protocol (__iter__ and __next__) without boilerplate.",
      "Generator expressions ((x**2 for x in data)) offer compact, memory-efficient generator syntax."
    ],
    "syntax": "# Generator function:\ndef count_up_to(max_val):\n    n = 1\n    while n <= max_val:\n        yield n\n        n += 1\n\ngen = count_up_to(3)\nfor num in gen:\n    print(num)",
    "examples": [
      {
        "title": "Example 1: Generating Infinite Fibonacci Numbers Lazily",
        "code": "def fib():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\nf = fib()\nfirst_5 = [next(f) for _ in range(5)]\nprint('Fibonacci:', first_5)",
        "output": "Fibonacci: [0, 1, 1, 2, 3]",
        "explanation": "The generator pauses between yields, creating an infinite series on-demand with zero RAM overload."
      },
      {
        "title": "Example 2: Generator Expression vs List Comprehension",
        "code": "import sys\nlist_comp = [x for x in range(1000)]\ngen_exp = (x for x in range(1000))\nprint('List size:', sys.getsizeof(list_comp))\nprint('Gen size:', sys.getsizeof(gen_exp))",
        "output": "List size: 8856\nGen size: 192",
        "explanation": "Generators retain tiny fixed memory footprints regardless of the volume of yielded items."
      },
      {
        "title": "Example 3: Subgenerator Delegation with yield from",
        "code": "def sub_gen():\n    yield 1\n    yield 2\ndef main_gen():\n    yield 'start'\n    yield from sub_gen()\n    yield 'end'\nprint(list(main_gen()))",
        "output": "['start', 1, 2, 'end']",
        "explanation": "'yield from' delegates generation to another iterable or subgenerator cleanly."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-039-MCQ-01",
        "question": "What keyword turns a standard Python function into a generator function?",
        "options": {
          "A": "return",
          "B": "yield",
          "C": "generate",
          "D": "produce"
        },
        "correct": "B",
        "explanation": "The presence of the 'yield' keyword marks the function as a generator."
      },
      {
        "id": "PY-TOPIC-039-MCQ-02",
        "question": "What happens to a generator function's local variables when it hits a 'yield' statement?",
        "options": {
          "A": "They are deleted from memory",
          "B": "Their state is preserved and paused until the next value is requested",
          "C": "They are returned as a tuple",
          "D": "They become global"
        },
        "correct": "B",
        "explanation": "Yield pauses execution, preserving the stack frame and local variables for the next call."
      },
      {
        "id": "PY-TOPIC-039-MCQ-03",
        "question": "What is returned when you call a generator function: gen = my_func()?",
        "options": {
          "A": "The first yielded value",
          "B": "A generator object iterator (execution has not started yet)",
          "C": "None",
          "D": "A list of all values"
        },
        "correct": "B",
        "explanation": "Calling a generator function returns a generator object without running code until next() is called."
      },
      {
        "id": "PY-TOPIC-039-MCQ-04",
        "question": "What does a 'return' statement inside a generator function do in Python 3.3+?",
        "options": {
          "A": "Yields the returned value",
          "B": "Terminates the generator, raising StopIteration with the return value as the exception message",
          "C": "Causes SyntaxError",
          "D": "Restarts generator"
        },
        "correct": "B",
        "explanation": "'return' exits the generator, raising StopIteration carrying the return value."
      },
      {
        "id": "PY-TOPIC-039-MCQ-05",
        "question": "What syntax creates a Generator Expression?",
        "options": {
          "A": "[x for x in iterable]",
          "B": "(x for x in iterable)",
          "C": "{x for x in iterable}",
          "D": "<x for x in iterable>"
        },
        "correct": "B",
        "explanation": "Parentheses enclosing comprehension syntax define a generator expression."
      },
      {
        "id": "PY-TOPIC-039-MCQ-06",
        "question": "What does the 'yield from' statement do?",
        "options": {
          "A": "Yields values from another iterable or subgenerator directly",
          "B": "Stops generation",
          "C": "Returns multiple values at once as a list",
          "D": "Deletes the generator"
        },
        "correct": "A",
        "explanation": "'yield from iterable' forwards all values from another iterable to the caller."
      },
      {
        "id": "PY-TOPIC-039-MCQ-07",
        "question": "Which method sends a value INTO a running generator at its yield point?",
        "options": {
          "A": "gen.push(val)",
          "B": "gen.send(val)",
          "C": "gen.feed(val)",
          "D": "gen.put(val)"
        },
        "correct": "B",
        "explanation": "gen.send(value) passes data back into the generator at the paused yield expression."
      },
      {
        "id": "PY-TOPIC-039-MCQ-08",
        "question": "What method closes and terminates a generator before it naturally finishes?",
        "options": {
          "A": "gen.kill()",
          "B": "gen.close()",
          "C": "gen.stop()",
          "D": "gen.exit()"
        },
        "correct": "B",
        "explanation": "gen.close() raises GeneratorExit inside the generator to release resources."
      },
      {
        "id": "PY-TOPIC-039-MCQ-09",
        "question": "What is the output of:\ndef f():\n    yield 1\n    yield 2\nprint(list(f()))",
        "options": {
          "A": "[1, 2]",
          "B": "1 2",
          "C": "<generator object>",
          "D": "(1, 2)"
        },
        "correct": "A",
        "explanation": "Passing a generator to list() consumes it into a list: [1, 2]."
      },
      {
        "id": "PY-TOPIC-039-MCQ-10",
        "question": "Why are generators particularly valuable when processing massive log files or data streams?",
        "options": {
          "A": "They process data with O(1) memory by streaming records line-by-line without loading entire files",
          "B": "They bypass disk read operations",
          "C": "They automatically parse JSON",
          "D": "They use multi-threading"
        },
        "correct": "A",
        "explanation": "Generators stream items one at a time, preventing Out-Of-Memory crashes on large datasets."
      }
    ]
  },
  {
    "id": "PY-TOPIC-040",
    "topic": "Decorators",
    "topicName": "Decorators",
    "definition": [
      "A decorator is a callable that takes a function as input, extends its behavior, and returns a modified function.",
      "They use the @decorator_name syntactic sugar placed directly above function or method definitions.",
      "Decorators follow the Higher-Order Function concept and rely on closures to preserve state.",
      "functools.wraps preserves the decorated function's original name, docstring, and signature metadata."
    ],
    "syntax": "import functools\n\ndef my_decorator(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        # Code before\n        res = func(*args, **kwargs)\n        # Code after\n        return res\n    return wrapper\n\n@my_decorator\ndef greet():\n    return 'Hello'",
    "examples": [
      {
        "title": "Example 1: Timing Function Execution with a Decorator",
        "code": "def log_call(func):\n    def wrapper(*args, **kwargs):\n        print(f'Calling: {func.__name__}')\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_call\ndef add(a, b):\n    return a + b\nprint('Result:', add(5, 3))",
        "output": "Calling: add\nResult: 8",
        "explanation": "The decorator intercepts the add() call, logs the event, and returns the computed result."
      },
      {
        "title": "Example 2: Preserving Metadata with functools.wraps",
        "code": "import functools\ndef track(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n@track\ndef calculate():\n    \"\"\"Calculates sum.\"\"\"\n    return 42\nprint(calculate.__name__, calculate.__doc__)",
        "output": "calculate Calculates sum.",
        "explanation": "@wraps preserves calculate's __name__ and __doc__ instead of exposing wrapper metadata."
      },
      {
        "title": "Example 3: Decorator with Arguments",
        "code": "def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(times - 1): func(*args, **kwargs)\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n@repeat(2)\ndef hello(): print('Hi', end=' ')\nhello()",
        "output": "Hi Hi ",
        "explanation": "An outer function accepting arguments returns the actual decorator, allowing configurable behavior."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-040-MCQ-01",
        "question": "What is @decorator_name syntactic sugar equivalent to?",
        "options": {
          "A": "func = decorator_name(func)",
          "B": "decorator_name = func()",
          "C": "func.decorate()",
          "D": "import decorator_name"
        },
        "correct": "A",
        "explanation": "@decorator syntax is shorthand for reassigning func = decorator(func)."
      },
      {
        "id": "PY-TOPIC-040-MCQ-02",
        "question": "Why is @functools.wraps(func) recommended inside custom decorators?",
        "options": {
          "A": "To make execution faster",
          "B": "To preserve the original function's metadata (__name__, __doc__, annotations)",
          "C": "To prevent recursion errors",
          "D": "To enable multi-threading"
        },
        "correct": "B",
        "explanation": "Without @wraps, the decorated function inherits the wrapper's name and loses its original docstring."
      },
      {
        "id": "PY-TOPIC-040-MCQ-03",
        "question": "How can a decorator wrapper handle functions with arbitrary arguments and keyword arguments?",
        "options": {
          "A": "def wrapper(a, b=None):",
          "B": "def wrapper(*args, **kwargs):",
          "C": "def wrapper(all_args):",
          "D": "def wrapper():"
        },
        "correct": "B",
        "explanation": "*args and **kwargs allow the wrapper to forward any combination of parameters seamlessly."
      },
      {
        "id": "PY-TOPIC-040-MCQ-04",
        "question": "In what order are stacked decorators executed on a function?\n@dec1\n@dec2\ndef func(): pass",
        "options": {
          "A": "dec1 is applied first, then dec2",
          "B": "dec2 is applied first, then dec1 wraps that result (equivalent to dec1(dec2(func)))",
          "C": "In random order",
          "D": "They execute simultaneously"
        },
        "correct": "B",
        "explanation": "Decorators apply inside-out from bottom to top: dec1(dec2(func))."
      },
      {
        "id": "PY-TOPIC-040-MCQ-05",
        "question": "Can a Python class act as a decorator?",
        "options": {
          "A": "No, only functions can decorate",
          "B": "Yes, by implementing the __call__ magic method on the class",
          "C": "Only if inheriting from DecoratorBase",
          "D": "Only in Python 3.10+"
        },
        "correct": "B",
        "explanation": "Any callable object implementing __call__ can serve as a decorator."
      },
      {
        "id": "PY-TOPIC-040-MCQ-06",
        "question": "How do you write a decorator that accepts its own parameters (e.g. @repeat(num=3))?",
        "options": {
          "A": "Use three nested functions (outer factory -> decorator -> wrapper)",
          "B": "Decorators cannot accept parameters",
          "C": "Pass arguments directly to wrapper",
          "D": "Use global variables"
        },
        "correct": "A",
        "explanation": "An outer function captures arguments and returns the decorator, which in turn returns the wrapper."
      },
      {
        "id": "PY-TOPIC-040-MCQ-07",
        "question": "Which built-in decorator from functools caches function results to avoid repeated expensive calculations?",
        "options": {
          "A": "@functools.memoize",
          "B": "@functools.lru_cache",
          "C": "@functools.store",
          "D": "@functools.buffer"
        },
        "correct": "B",
        "explanation": "@lru_cache (Least Recently Used cache) memoizes function returns based on arguments."
      },
      {
        "id": "PY-TOPIC-040-MCQ-08",
        "question": "What is a closure in Python, and how does it relate to decorators?",
        "options": {
          "A": "A function that has been deleted",
          "B": "An inner function that retains access to variables from its enclosing lexical scope even after that scope has closed",
          "C": "A file handle",
          "D": "A database transaction"
        },
        "correct": "B",
        "explanation": "Wrappers rely on closures to retain references to the original decorated function."
      },
      {
        "id": "PY-TOPIC-040-MCQ-09",
        "question": "What is a Class Decorator?",
        "options": {
          "A": "A decorator applied directly above 'class ClassName:' that inspects or modifies the class object itself",
          "B": "A method inside a class",
          "C": "CSS styles for Python",
          "D": "Deprecated syntax"
        },
        "correct": "A",
        "explanation": "Class decorators take a class as input and can mutate its attributes or return a proxy class."
      },
      {
        "id": "PY-TOPIC-040-MCQ-10",
        "question": "What is the output of:\ndef dec(f): return lambda: f() * 2\n@dec\ndef val(): return 5\nprint(val())",
        "options": {
          "A": "5",
          "B": "10",
          "C": "2",
          "D": "TypeError"
        },
        "correct": "B",
        "explanation": "dec wraps val with a lambda returning f() * 2, so 5 * 2 = 10."
      }
    ]
  },
  {
    "id": "PY-TOPIC-041",
    "topic": "Context Managers (with)",
    "topicName": "Context Managers (with)",
    "definition": [
      "Context managers manage resources cleanly by ensuring setup and teardown happen reliably.",
      "They are used with the with statement, automatically releasing resources even if an error occurs.",
      "A context manager implements the __enter__ and __exit__ dunder methods.",
      "The contextlib module provides the @contextmanager decorator to create them using generator functions."
    ],
    "syntax": "# Class-based Context Manager:\nclass ManagedResource:\n    def __enter__(self):\n        print('Acquire resource')\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print('Release resource')\n        return False  # Do not suppress exceptions",
    "examples": [
      {
        "title": "Example 1: Custom Timer Context Manager",
        "code": "import time\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        self.elapsed = time.time() - self.start\nwith Timer() as t:\n    _ = sum(range(1000))\nprint('Measured elapsed time successfully')",
        "output": "Measured elapsed time successfully",
        "explanation": "__enter__ runs before the with block and __exit__ runs immediately after."
      },
      {
        "title": "Example 2: Using contextlib.@contextmanager",
        "code": "from contextlib import contextmanager\n@contextmanager\ndef tag(name):\n    print(f'<{name}>', end='')\n    yield\n    print(f'</{name}>')\nwith tag('b'):\n    print('Bold Text', end='')",
        "output": "<b>Bold Text</b>",
        "explanation": "Code before yield acts as __enter__; code after yield runs during __exit__."
      },
      {
        "title": "Example 3: Suppressing Exceptions with contextlib.suppress",
        "code": "from contextlib import suppress\nwith suppress(FileNotFoundError):\n    open('does_not_exist.txt', 'r')\nprint('FileNotFoundError silently handled')",
        "output": "FileNotFoundError silently handled",
        "explanation": "suppress catches and suppresses specified exceptions within the with block."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-041-MCQ-01",
        "question": "Which two methods constitute the Python context management protocol?",
        "options": {
          "A": "__open__() and __close__()",
          "B": "__enter__() and __exit__()",
          "C": "__start__() and __stop__()",
          "D": "__init__() and __del__()"
        },
        "correct": "B",
        "explanation": "The context management protocol requires __enter__ and __exit__."
      },
      {
        "id": "PY-TOPIC-041-MCQ-02",
        "question": "What happens if __exit__() returns True when an exception occurs inside the 'with' block?",
        "options": {
          "A": "Exception is re-raised",
          "B": "Exception is suppressed and execution continues outside the with block",
          "C": "Program exits immediately",
          "D": "Raises TypeError"
        },
        "correct": "B",
        "explanation": "Returning True from __exit__ tells Python to swallow/suppress the exception."
      },
      {
        "id": "PY-TOPIC-041-MCQ-03",
        "question": "What 3 arguments are passed to __exit__(self, ...) when an exception occurs?",
        "options": {
          "A": "(file, line, code)",
          "B": "(exc_type, exc_val, exc_tb)",
          "C": "(error, message, time)",
          "D": "(status, code, details)"
        },
        "correct": "B",
        "explanation": "__exit__ receives exception type, exception value, and traceback object."
      },
      {
        "id": "PY-TOPIC-041-MCQ-04",
        "question": "What decorator from contextlib converts a generator function with 'yield' into a context manager?",
        "options": {
          "A": "@contextmanager",
          "B": "@with_statement",
          "C": "@resource_guard",
          "D": "@managed"
        },
        "correct": "A",
        "explanation": "@contextmanager turns a generator yielding once into a context manager."
      },
      {
        "id": "PY-TOPIC-041-MCQ-05",
        "question": "What is the variable bound to in: with open('f.txt') as f:?",
        "options": {
          "A": "The open function",
          "B": "The return value of __enter__()",
          "C": "The file name string",
          "D": "The return value of __exit__()"
        },
        "correct": "B",
        "explanation": "The 'as' clause binds the target variable to whatever __enter__() returns."
      },
      {
        "id": "PY-TOPIC-041-MCQ-06",
        "question": "Does __exit__ run if an unhandled exception occurs inside the 'with' block?",
        "options": {
          "A": "No, it is skipped",
          "B": "Yes, __exit__ is guaranteed to run, just like a finally block",
          "C": "Only if using files",
          "D": "Only in Python 3"
        },
        "correct": "B",
        "explanation": "__exit__ acts like a finally block and always executes on exit."
      },
      {
        "id": "PY-TOPIC-041-MCQ-07",
        "question": "Can you manage multiple resources in a single 'with' statement?",
        "options": {
          "A": "No, must nest separate with blocks",
          "B": "Yes, e.g. with open('a') as a, open('b') as b:",
          "C": "Only up to 2",
          "D": "Requires threading"
        },
        "correct": "B",
        "explanation": "Python supports comma-separated context managers in a single with statement."
      },
      {
        "id": "PY-TOPIC-041-MCQ-08",
        "question": "Which standard library module contains context management utilities like ExitStack and redirect_stdout?",
        "options": {
          "A": "sys",
          "B": "os",
          "C": "contextlib",
          "D": "functools"
        },
        "correct": "C",
        "explanation": "contextlib is dedicated to context manager helpers and utilities."
      },
      {
        "id": "PY-TOPIC-041-MCQ-09",
        "question": "What does contextlib.ExitStack allow?",
        "options": {
          "A": "Managing a dynamic or programmatic number of context managers cleanly",
          "B": "Printing stack traces",
          "C": "Exiting programs faster",
          "D": "Creating memory buffers"
        },
        "correct": "A",
        "explanation": "ExitStack manages variable collections of context managers programmatically."
      },
      {
        "id": "PY-TOPIC-041-MCQ-10",
        "question": "When threading.Lock is used with 'with lock:', what does __enter__ and __exit__ do?",
        "options": {
          "A": "Nothing",
          "B": "__enter__ acquires lock, __exit__ releases lock",
          "C": "Deletes thread",
          "D": "Allocates CPU core"
        },
        "correct": "B",
        "explanation": "Locks automatically acquire in __enter__ and release in __exit__."
      }
    ]
  },
  {
    "id": "PY-TOPIC-042",
    "topic": "Regular Expressions",
    "topicName": "Regular Expressions",
    "definition": [
      "Regular expressions (regex) are patterns used to match, search, and manipulate text strings.",
      "Python's re module provides search(), match(), findall(), finditer(), sub(), and compile().",
      "Special characters like \\d (digit), \\w (word char), \\s (whitespace), ^ (start), and $ (end) define patterns.",
      "Raw strings (r'\\d+') are best practice to prevent backslashes from being treated as escape sequences."
    ],
    "syntax": "import re\n\npattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'\nis_email = re.match(pattern, 'user@example.com')\nreplaced = re.sub(r'\\d+', 'X', 'Item 123 Costs 45')",
    "examples": [
      {
        "title": "Example 1: Finding All Digits with findall()",
        "code": "import re\ntext = 'Order 402 with 15 items total 99 dollars'\nnumbers = re.findall(r'\\d+', text)\nprint('Extracted numbers:', numbers)",
        "output": "Extracted numbers: ['402', '15', '99']",
        "explanation": "re.findall() returns all non-overlapping matches as a list of strings."
      },
      {
        "title": "Example 2: Substitution with re.sub()",
        "code": "import re\ns = 'Price: $50 and $100'\nclean = re.sub(r'\\$\\d+', '[PRICE]', s)\nprint(clean)",
        "output": "Price: [PRICE] and [PRICE]",
        "explanation": "re.sub() replaces all pattern occurrences with the replacement string."
      },
      {
        "title": "Example 3: Capturing Groups and match.group()",
        "code": "import re\nm = re.search(r'(\\w+)@(\\w+\\.\\w+)', 'Contact: dev@koti.com')\nif m:\n    print('User:', m.group(1), '| Domain:', m.group(2))",
        "output": "User: dev | Domain: koti.com",
        "explanation": "Parentheses define capturing groups accessible via group(1), group(2), etc."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-042-MCQ-01",
        "question": "Which Python standard library module is used for regular expressions?",
        "options": {
          "A": "regex_lib",
          "B": "re",
          "C": "strings",
          "D": "pattern"
        },
        "correct": "B",
        "explanation": "The 're' module is Python's built-in regular expression engine."
      },
      {
        "id": "PY-TOPIC-042-MCQ-02",
        "question": "What is the difference between re.match() and re.search()?",
        "options": {
          "A": "re.match() matches only at the START of the string; re.search() scans the entire string",
          "B": "re.search() only matches numbers",
          "C": "re.match() is case-insensitive",
          "D": "They are exact synonyms"
        },
        "correct": "A",
        "explanation": "match() only checks the beginning of the string; search() searches anywhere."
      },
      {
        "id": "PY-TOPIC-042-MCQ-03",
        "question": "Why should regex patterns be written as raw strings like r'\\d+' in Python?",
        "options": {
          "A": "It makes them run 2x faster",
          "B": "To prevent Python string literal escaping of backslashes (\\)",
          "C": "Raw strings are compiled automatically",
          "D": "Mandatory in Python 3"
        },
        "correct": "B",
        "explanation": "Raw strings treat backslashes literally, avoiding double-escaping issues."
      },
      {
        "id": "PY-TOPIC-042-MCQ-04",
        "question": "What does '\\d+' match in a regular expression?",
        "options": {
          "A": "A single letter",
          "B": "One or more consecutive digits (0-9)",
          "C": "A dot symbol",
          "D": "Any word character"
        },
        "correct": "B",
        "explanation": "\\d matches a numeric digit, and + matches one or more repetitions."
      },
      {
        "id": "PY-TOPIC-042-MCQ-05",
        "question": "What does re.sub() do?",
        "options": {
          "A": "Subtracts numbers",
          "B": "Substrings a list",
          "C": "Replaces pattern occurrences with a replacement string",
          "D": "Splits a string"
        },
        "correct": "C",
        "explanation": "re.sub(pattern, replacement, string) performs search-and-replace."
      },
      {
        "id": "PY-TOPIC-042-MCQ-06",
        "question": "What metacharacter anchors a pattern to the very beginning of a string?",
        "options": {
          "A": "$",
          "B": "^",
          "C": "*",
          "D": "?"
        },
        "correct": "B",
        "explanation": "^ asserts start of string; $ asserts end of string."
      },
      {
        "id": "PY-TOPIC-042-MCQ-07",
        "question": "What is the benefit of compiling a pattern using re.compile()?",
        "options": {
          "A": "Permits reusing the pre-compiled regex object efficiently across repeated matches",
          "B": "Converts regex to C code",
          "C": "Deletes the pattern from memory",
          "D": "Bypasses GIL"
        },
        "correct": "A",
        "explanation": "re.compile() caches the compiled automaton, speeding up repeated lookups."
      },
      {
        "id": "PY-TOPIC-042-MCQ-08",
        "question": "What does the regex quantifier '*' mean?",
        "options": {
          "A": "Exactly 1 match",
          "B": "Zero or more matches",
          "C": "One or more matches",
          "D": "Optional 0 or 1 match"
        },
        "correct": "B",
        "explanation": "* matches 0 or more occurrences; + matches 1 or more; ? matches 0 or 1."
      },
      {
        "id": "PY-TOPIC-042-MCQ-09",
        "question": "What flag makes regex matching case-insensitive?",
        "options": {
          "A": "re.IGNORECASE (or re.I)",
          "B": "re.CASELESS",
          "C": "re.NOCASE",
          "D": "re.LOWER"
        },
        "correct": "A",
        "explanation": "re.IGNORECASE (or re.I) enables case-insensitive pattern matching."
      },
      {
        "id": "PY-TOPIC-042-MCQ-10",
        "question": "What does group(0) return on a match object returned by re.search()?",
        "options": {
          "A": "None",
          "B": "The entire substring matched by the pattern",
          "C": "The first captured group",
          "D": "The index position"
        },
        "correct": "B",
        "explanation": "group(0) returns the complete matched text; group(1) returns the first parenthesized capture."
      }
    ]
  },
  {
    "id": "PY-TOPIC-043",
    "topic": "Shallow & Deep Copy",
    "topicName": "Shallow & Deep Copy",
    "definition": [
      "Assignment (b = a) merely creates a new reference pointing to the identical object in memory.",
      "A shallow copy (copy.copy or list[:]) creates a new container but shares references to nested child objects.",
      "A deep copy (copy.deepcopy) recursively duplicates the container AND all nested objects within it.",
      "The standard copy module provides copy() for shallow copying and deepcopy() for deep copying."
    ],
    "syntax": "import copy\n\n# Shallow copy:\ns_copy = copy.copy(original)\n\n# Deep copy:\nd_copy = copy.deepcopy(original)",
    "examples": [
      {
        "title": "Example 1: Reference Assignment vs Shallow Copy",
        "code": "import copy\norig = [[1, 2], [3, 4]]\nshallow = copy.copy(orig)\nshallow[0][0] = 99\nprint('Orig affected:', orig[0][0])",
        "output": "Orig affected: 99",
        "explanation": "Shallow copy creates an outer list, but the inner nested lists are shared references."
      },
      {
        "title": "Example 2: Deep Copy Full Isolation",
        "code": "import copy\norig = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(orig)\ndeep[0][0] = 777\nprint('Orig:', orig[0][0], '| Deep:', deep[0][0])",
        "output": "Orig: 1 | Deep: 777",
        "explanation": "deepcopy recursively duplicates nested objects, completely isolating changes."
      },
      {
        "title": "Example 3: Shallow Copy via Slicing for Flat Lists",
        "code": "flat = [1, 2, 3]\nclone = flat[:]\nclone.append(4)\nprint('Original flat list:', flat, '| Clone:', clone)",
        "output": "Original flat list: [1, 2, 3] | Clone: [1, 2, 3, 4]",
        "explanation": "For flat lists without nested mutable objects, shallow copying (slicing) provides complete safety."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-043-MCQ-01",
        "question": "What is the result of simple assignment: b = a?",
        "options": {
          "A": "A deep copy",
          "B": "A shallow copy",
          "C": "Both variables reference the exact same object in memory",
          "D": "Creates an immutable tuple"
        },
        "correct": "C",
        "explanation": "Assignment binds an existing object reference to a new name; no copy is made."
      },
      {
        "id": "PY-TOPIC-043-MCQ-02",
        "question": "Which module provides functions for shallow and deep copying?",
        "options": {
          "A": "clone",
          "B": "copy",
          "C": "sys",
          "D": "dupe"
        },
        "correct": "B",
        "explanation": "Python's built-in 'copy' module contains copy() and deepcopy()."
      },
      {
        "id": "PY-TOPIC-043-MCQ-03",
        "question": "What is the crucial difference between copy.copy() and copy.deepcopy()?",
        "options": {
          "A": "copy() is for lists only",
          "B": "copy() duplicates outer container only; deepcopy() recursively duplicates all nested objects",
          "C": "deepcopy() deletes the original",
          "D": "They are exact duplicates"
        },
        "correct": "B",
        "explanation": "Shallow copy shares nested object references; deep copy clones the entire object graph."
      },
      {
        "id": "PY-TOPIC-043-MCQ-04",
        "question": "What is the output of:\nimport copy\na = [1, [2]]\nb = copy.copy(a)\nb[1].append(3)\nprint(a[1])",
        "options": {
          "A": "[2]",
          "B": "[2, 3]",
          "C": "[3]",
          "D": "Error"
        },
        "correct": "B",
        "explanation": "The inner list [2] is shared between a and b, so mutating b[1] affects a[1]."
      },
      {
        "id": "PY-TOPIC-043-MCQ-05",
        "question": "How does deepcopy handle cyclic references (e.g., an object referencing itself)?",
        "options": {
          "A": "Crashes with RecursionError",
          "B": "Tracks copied objects in an internal memo dictionary, safely handling cycles without looping",
          "C": "Silently truncates",
          "D": "Raises TypeError"
        },
        "correct": "B",
        "explanation": "deepcopy maintains a memo dict of visited objects to avoid infinite recursion."
      },
      {
        "id": "PY-TOPIC-043-MCQ-06",
        "question": "Which of the following creates a shallow copy of a flat list 'lst'?",
        "options": {
          "A": "lst[:]",
          "B": "list(lst)",
          "C": "lst.copy()",
          "D": "All of the above"
        },
        "correct": "D",
        "explanation": "Slicing [:], list constructor, and list.copy() all create shallow copies of a list."
      },
      {
        "id": "PY-TOPIC-043-MCQ-07",
        "question": "What magic method allows a custom class to override its shallow copy behavior?",
        "options": {
          "A": "__copy__(self)",
          "B": "__shallow__(self)",
          "C": "__clone__(self)",
          "D": "__duplicate__(self)"
        },
        "correct": "A",
        "explanation": "__copy__() customizes the shallow copying behavior invoked by copy.copy()."
      },
      {
        "id": "PY-TOPIC-043-MCQ-08",
        "question": "What magic method customizes deep copy behavior for a class?",
        "options": {
          "A": "__deepcopy__(self, memo)",
          "B": "__recurse_copy__(self)",
          "C": "__deep__(self)",
          "D": "__fullcopy__(self)"
        },
        "correct": "A",
        "explanation": "__deepcopy__(self, memo) customizes deep copying, receiving the memo dictionary."
      },
      {
        "id": "PY-TOPIC-043-MCQ-09",
        "question": "What happens when you deepcopy an immutable object like an int or string?",
        "options": {
          "A": "A new memory address is allocated",
          "B": "Python returns the identical object itself as an optimization",
          "C": "Raises TypeError",
          "D": "Converts to list"
        },
        "correct": "B",
        "explanation": "Because immutables cannot change, copying them simply reuses the existing instance."
      },
      {
        "id": "PY-TOPIC-043-MCQ-10",
        "question": "Why is deepcopy significantly slower than shallow copy?",
        "options": {
          "A": "It must inspect object graphs, check for recursion loops, and allocate new memory for every nested object",
          "B": "It writes to disk",
          "C": "It is written in bash",
          "D": "It uses single threading"
        },
        "correct": "A",
        "explanation": "Deep copying traverses the entire object tree and duplicates every mutable component."
      }
    ]
  },
  {
    "id": "PY-TOPIC-044",
    "topic": "Mutable vs Immutable & is vs ==",
    "topicName": "Mutable vs Immutable & is vs ==",
    "definition": [
      "Mutable objects (list, dict, set) can change their contents in-place without changing memory ID.",
      "Immutable objects (int, float, str, tuple, frozenset) cannot be modified; operations produce new objects.",
      "The '==' operator checks value equality (whether two objects have equivalent content).",
      "The 'is' operator checks identity (whether both variables point to the exact same memory location)."
    ],
    "syntax": "# Equality vs Identity:\na = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)  # True (same values)\nprint(a is b)  # False (different objects in RAM)\n\n# Checking None:\nif result is None: pass",
    "examples": [
      {
        "title": "Example 1: Identity (is) vs Equality (==)",
        "code": "x = [1, 2]\ny = [1, 2]\nprint('== check:', x == y)\nprint('is check:', x is y)",
        "output": "== check: True\nis check: False",
        "explanation": "== compares values (both are [1, 2]), but 'is' verifies memory address (id(x) != id(y))."
      },
      {
        "title": "Example 2: In-Place Mutation of Lists vs Strings",
        "code": "lst = [1]\nold_id = id(lst)\nlst.append(2)\nprint('List ID unchanged:', id(lst) == old_id)",
        "output": "List ID unchanged: True",
        "explanation": "Mutable objects retain the same memory identity when modified in-place."
      },
      {
        "title": "Example 3: Integer Interning and Small Integer Caching",
        "code": "a = 256\nb = 256\nprint('256 is 256:', a is b)\n# CPython pre-allocates small integers between -5 and 256",
        "output": "256 is 256: True",
        "explanation": "CPython caches small integers from -5 to 256 as singleton references."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-044-MCQ-01",
        "question": "Which of the following data types is MUTABLE in Python?",
        "options": {
          "A": "tuple",
          "B": "str",
          "C": "list",
          "D": "frozenset"
        },
        "correct": "C",
        "explanation": "Lists can be modified in-place, making them mutable."
      },
      {
        "id": "PY-TOPIC-044-MCQ-02",
        "question": "What is the difference between '==' and 'is' in Python?",
        "options": {
          "A": "== checks memory address, is checks value",
          "B": "== checks value equality, is checks object identity (same memory address)",
          "C": "They are exact synonyms",
          "D": "is is only for strings"
        },
        "correct": "B",
        "explanation": "== checks if values are equal; 'is' checks if id(a) == id(b)."
      },
      {
        "id": "PY-TOPIC-044-MCQ-03",
        "question": "What range of integers does CPython cache (intern) by default?",
        "options": {
          "A": "0 to 100",
          "B": "-5 to 256",
          "C": "-128 to 127",
          "D": "All positive numbers"
        },
        "correct": "B",
        "explanation": "CPython caches small integer singletons from -5 through 256."
      },
      {
        "id": "PY-TOPIC-044-MCQ-04",
        "question": "Why is 'x is None' preferred over 'x == None'?",
        "options": {
          "A": "None is a singleton object, so checking identity 'is' is faster and cannot be overridden by __eq__",
          "B": "== causes SyntaxError with None",
          "C": "is None is deprecated",
          "D": "PEP 8 forbids =="
        },
        "correct": "A",
        "explanation": "None is a singleton; 'is None' is faster and immune to custom __eq__ overrides."
      },
      {
        "id": "PY-TOPIC-044-MCQ-05",
        "question": "What is the output of: a = (1, 2); a += (3,); did 'a' mutate in-place?",
        "options": {
          "A": "Yes, same memory ID",
          "B": "No, tuples are immutable so a new tuple object was created with a new memory ID",
          "C": "Tuples cannot use +=",
          "D": "Raises TypeError"
        },
        "correct": "B",
        "explanation": "Tuples are immutable; += rebinds 'a' to a newly allocated tuple."
      },
      {
        "id": "PY-TOPIC-044-MCQ-06",
        "question": "Which collection type is IMMUTABLE?",
        "options": {
          "A": "dict",
          "B": "set",
          "C": "frozenset",
          "D": "bytearray"
        },
        "correct": "C",
        "explanation": "frozenset is the immutable counterpart of a set."
      },
      {
        "id": "PY-TOPIC-044-MCQ-07",
        "question": "What is String Interning in Python?",
        "options": {
          "A": "Translating strings to Unicode",
          "B": "Reusing memory for identical immutable string literals (especially identifier-like strings)",
          "C": "Converting strings to lists",
          "D": "Encrypting text"
        },
        "correct": "B",
        "explanation": "CPython interns certain string literals so they point to identical memory addresses."
      },
      {
        "id": "PY-TOPIC-044-MCQ-08",
        "question": "What happens if a function modifies a mutable argument passed to it?",
        "options": {
          "A": "Modification affects caller's object because Python uses pass-by-object-reference",
          "B": "Caller's object is unaffected",
          "C": "Raises RuntimeError",
          "D": "Argument is deleted"
        },
        "correct": "A",
        "explanation": "Passing mutable objects shares the reference; in-place mutations reflect on caller's data."
      },
      {
        "id": "PY-TOPIC-044-MCQ-09",
        "question": "What is the output of: [1] == [1.0] vs [1] is [1.0]?",
        "options": {
          "A": "True True",
          "B": "True False",
          "C": "False False",
          "D": "False True"
        },
        "correct": "B",
        "explanation": "Values match (1 == 1.0 is True), but they are separate objects in memory (is is False)."
      },
      {
        "id": "PY-TOPIC-044-MCQ-10",
        "question": "Can an immutable object contain a mutable object (e.g. a tuple containing a list)?",
        "options": {
          "A": "No, raises TypeError",
          "B": "Yes, but the tuple itself remains immutable while the list inside can be mutated",
          "C": "The list becomes immutable",
          "D": "Only with frozenset"
        },
        "correct": "B",
        "explanation": "A tuple container holds fixed references, but mutable items inside it can be altered."
      }
    ]
  },
  {
    "id": "PY-TOPIC-045",
    "topic": "@staticmethod, @classmethod",
    "topicName": "@staticmethod, @classmethod",
    "definition": [
      "@classmethod binds a method to the class itself, receiving cls as its first parameter.",
      "@staticmethod creates a utility function scoped within the class without receiving self or cls.",
      "Class methods can access and modify class state and are ideal for alternative constructors.",
      "Static methods know nothing about class state and are used for self-contained helper functions."
    ],
    "syntax": "class Demo:\n    @classmethod\n    def from_config(cls, cfg):\n        return cls(cfg['name'])\n\n    @staticmethod\n    def validate(val):\n        return val > 0",
    "examples": [
      {
        "title": "Example 1: Alternative Constructor with @classmethod",
        "code": "class Person:\n    def __init__(self, name, age):\n        self.name, self.age = name, age\n    @classmethod\n    def from_birth_year(cls, name, year):\n        return cls(name, 2026 - year)\np = Person.from_birth_year('Rahul', 2000)\nprint(p.name, p.age)",
        "output": "Rahul 26",
        "explanation": "The classmethod dynamically passes the class (cls) to construct a new Person."
      },
      {
        "title": "Example 2: Pure Utility with @staticmethod",
        "code": "class Temperature:\n    @staticmethod\n    def c_to_f(c):\n        return (c * 9/5) + 32\nprint('0 C in F:', Temperature.c_to_f(0))",
        "output": "0 C in F: 32.0",
        "explanation": "The static method performs temperature conversion without requiring instance or class state."
      },
      {
        "title": "Example 3: Subclassing with @classmethod",
        "code": "class Base:\n    @classmethod\n    def create(cls):\n        return cls()\nclass Sub(Base):\n    pass\ns = Sub.create()\nprint('Instance type:', type(s).__name__)",
        "output": "Instance type: Sub",
        "explanation": "Because cls is passed, calling Sub.create() returns an instance of Sub, not Base."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-045-MCQ-01",
        "question": "What is the primary technical difference between @classmethod and @staticmethod?",
        "options": {
          "A": "@classmethod takes cls; @staticmethod takes no implicit first argument",
          "B": "@staticmethod takes self; @classmethod takes nothing",
          "C": "@classmethod cannot be inherited",
          "D": "They are exact synonyms"
        },
        "correct": "A",
        "explanation": "Class methods receive the class object as cls; static methods receive no implicit parameters."
      },
      {
        "id": "PY-TOPIC-045-MCQ-02",
        "question": "Why is @classmethod preferred over hardcoding ClassName() for alternative constructors?",
        "options": {
          "A": "It supports polymorphic subclassing; calling on SubClass creates SubClass instances",
          "B": "It runs in parallel threads",
          "C": "It skips memory allocation",
          "D": "It prevents inheritance"
        },
        "correct": "A",
        "explanation": "cls ensures proper subclass instantiation when inheriting factory methods."
      },
      {
        "id": "PY-TOPIC-045-MCQ-03",
        "question": "Can a @staticmethod access class variables directly without referring to the class name?",
        "options": {
          "A": "Yes, via cls",
          "B": "No, because it does not receive cls or self; it must reference ClassName.var explicitly",
          "C": "Yes, using super()",
          "D": "Only if marked global"
        },
        "correct": "B",
        "explanation": "Static methods have no reference to class or instance state unless referenced by name."
      },
      {
        "id": "PY-TOPIC-045-MCQ-04",
        "question": "How are @classmethod and @staticmethod implemented internally in Python?",
        "options": {
          "A": "As built-in descriptors that customize attribute lookup and binding",
          "B": "As separate C threads",
          "C": "As bytecode macros",
          "D": "As global functions"
        },
        "correct": "A",
        "explanation": "Both are built-in descriptor types implementing __get__ to customize method binding."
      },
      {
        "id": "PY-TOPIC-045-MCQ-05",
        "question": "Can you call a @classmethod on an instance: obj.my_class_method()?",
        "options": {
          "A": "No, only on the class",
          "B": "Yes, Python passes type(obj) as cls automatically",
          "C": "Causes TypeError",
          "D": "Only if __init__ is empty"
        },
        "correct": "B",
        "explanation": "Calling a classmethod on an instance automatically passes the instance's class as cls."
      },
      {
        "id": "PY-TOPIC-045-MCQ-06",
        "question": "When should you prefer a standalone module function over a @staticmethod?",
        "options": {
          "A": "When the function has no logical association with the class's conceptual namespace",
          "B": "Always, static methods are deprecated",
          "C": "When working with numbers",
          "D": "Never"
        },
        "correct": "A",
        "explanation": "If a function doesn't conceptually belong to the class, a module-level function is cleaner."
      },
      {
        "id": "PY-TOPIC-045-MCQ-07",
        "question": "Can a classmethod modify instance variables (self.name)?",
        "options": {
          "A": "Yes, always",
          "B": "No, because it does not have access to an instance self",
          "C": "Only if passed self as a secondary parameter",
          "D": "Both B and C"
        },
        "correct": "D",
        "explanation": "Classmethods receive only cls; they have no implicit instance self."
      },
      {
        "id": "PY-TOPIC-045-MCQ-08",
        "question": "What is the output of:\nclass A:\n    count = 1\n    @classmethod\n    def inc(cls): cls.count += 1\nA.inc()\nprint(A.count)",
        "options": {
          "A": "1",
          "B": "2",
          "C": "None",
          "D": "AttributeError"
        },
        "correct": "B",
        "explanation": "A.inc() increments the class variable count from 1 to 2."
      },
      {
        "id": "PY-TOPIC-045-MCQ-09",
        "question": "Can @staticmethod be overridden by a subclass?",
        "options": {
          "A": "Yes, like any other class attribute",
          "B": "No, static methods are sealed",
          "C": "Only if declared abstract",
          "D": "Only with super()"
        },
        "correct": "A",
        "explanation": "Static methods participate in standard class inheritance and can be overridden."
      },
      {
        "id": "PY-TOPIC-045-MCQ-10",
        "question": "Which decorator would you choose for a method that needs to mutate a class variable shared across all instances?",
        "options": {
          "A": "@staticmethod",
          "B": "@classmethod",
          "C": "@property",
          "D": "@abstractmethod"
        },
        "correct": "B",
        "explanation": "@classmethod receives cls, making it suitable for managing class-level state."
      }
    ]
  },
  {
    "id": "PY-TOPIC-046",
    "topic": "Scope & Namespace & Recursion & Complexity",
    "topicName": "Scope & Namespace & Recursion & Complexity",
    "definition": [
      "Python resolves variable names using the LEGB rule: Local, Enclosing, Global, and Built-in.",
      "The global keyword rebinds module-level names, while nonlocal rebinds names in enclosing functions.",
      "Recursion is a technique where a function calls itself, requiring a base case to avoid RecursionError.",
      "Time and space complexity measure resource consumption as input size grows using Big-O notation."
    ],
    "syntax": "# LEGB and nonlocal:\nx = 'global'\ndef outer():\n    x = 'enclosing'\n    def inner():\n        nonlocal x\n        x = 'modified enclosing'\n    inner()",
    "examples": [
      {
        "title": "Example 1: Demonstrating LEGB Scope and nonlocal",
        "code": "def outer():\n    val = 10\n    def inner():\n        nonlocal val\n        val += 5\n    inner()\n    return val\nprint('Modified enclosing val:', outer())",
        "output": "Modified enclosing val: 15",
        "explanation": "nonlocal allows inner() to modify the variable in the enclosing outer() function scope."
      },
      {
        "title": "Example 2: Recursive Factorial with Base Case",
        "code": "def fact(n):\n    if n <= 1: return 1  # Base case\n    return n * fact(n - 1)  # Recursive case\nprint('Factorial of 5:', fact(5))",
        "output": "Factorial of 5: 120",
        "explanation": "fact() calls itself until reaching the base case n <= 1, running in O(n) time."
      },
      {
        "title": "Example 3: Big-O Complexity Comparisons",
        "code": "# O(1): Constant time dictionary lookup\n# O(n): Linear search in unsorted list\n# O(n log n): Timsort (list.sort())\nprint('Python uses Timsort with O(n log n) worst-case time')",
        "output": "Python uses Timsort with O(n log n) worst-case time",
        "explanation": "Understanding Big-O helps choose the optimal data structure and algorithm."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-046-MCQ-01",
        "question": "What does the LEGB rule stand for in Python scope resolution?",
        "options": {
          "A": "Linear, External, Global, Binary",
          "B": "Local, Enclosing, Global, Built-in",
          "C": "List, Element, Group, Block",
          "D": "Logical, Environment, General, Base"
        },
        "correct": "B",
        "explanation": "LEGB defines Python's name lookup hierarchy: Local -> Enclosing -> Global -> Built-in."
      },
      {
        "id": "PY-TOPIC-046-MCQ-02",
        "question": "What keyword allows an inner nested function to modify a variable in its enclosing (outer) function?",
        "options": {
          "A": "global",
          "B": "nonlocal",
          "C": "outer",
          "D": "static"
        },
        "correct": "B",
        "explanation": "'nonlocal' binds a name to the nearest enclosing non-global scope."
      },
      {
        "id": "PY-TOPIC-046-MCQ-03",
        "question": "What is Python's default maximum recursion limit?",
        "options": {
          "A": "100",
          "B": "1000",
          "C": "10,000",
          "D": "Unlimited"
        },
        "correct": "B",
        "explanation": "CPython's default recursion limit is typically 1000 (viewable via sys.getrecursionlimit())."
      },
      {
        "id": "PY-TOPIC-046-MCQ-04",
        "question": "What exception is raised when a recursive function fails to hit a base case and exceeds recursion depth?",
        "options": {
          "A": "StackOverflowError",
          "B": "RecursionError: maximum recursion depth exceeded",
          "C": "MemoryError",
          "D": "InfiniteLoopError"
        },
        "correct": "B",
        "explanation": "Exceeding recursion limits raises a RecursionError."
      },
      {
        "id": "PY-TOPIC-046-MCQ-05",
        "question": "Does standard Python (CPython) perform automatic Tail-Call Optimization (TCO)?",
        "options": {
          "A": "Yes, always",
          "B": "No, Guido van Rossum deliberately rejected TCO to preserve accurate stack traces",
          "C": "Only with while loops",
          "D": "Only with lambdas"
        },
        "correct": "B",
        "explanation": "CPython does not optimize tail-calls, keeping stack traces complete for debugging."
      },
      {
        "id": "PY-TOPIC-046-MCQ-06",
        "question": "What sorting algorithm is used by Python's built-in sorted() and list.sort()?",
        "options": {
          "A": "QuickSort",
          "B": "MergeSort",
          "C": "Timsort (hybrid of MergeSort and InsertionSort)",
          "D": "HeapSort"
        },
        "correct": "C",
        "explanation": "Python uses Timsort, a hybrid sorting algorithm invented by Tim Peters."
      },
      {
        "id": "PY-TOPIC-046-MCQ-07",
        "question": "What is the worst-case time complexity of Timsort?",
        "options": {
          "A": "O(n^2)",
          "B": "O(n log n)",
          "C": "O(n)",
          "D": "O(log n)"
        },
        "correct": "B",
        "explanation": "Timsort guarantees O(n log n) worst-case time and O(n) best-case time on already-sorted data."
      },
      {
        "id": "PY-TOPIC-046-MCQ-08",
        "question": "What is the space complexity of a naive recursive Fibonacci calculation without memoization?",
        "options": {
          "A": "O(1)",
          "B": "O(n) due to call stack depth",
          "C": "O(2^n)",
          "D": "O(n^2)"
        },
        "correct": "B",
        "explanation": "The maximum call stack depth is n, resulting in O(n) auxiliary space complexity."
      },
      {
        "id": "PY-TOPIC-046-MCQ-09",
        "question": "How can you safely increase Python's recursion limit in a script?",
        "options": {
          "A": "sys.setrecursionlimit(limit)",
          "B": "os.set_stack(limit)",
          "C": "recursion.expand(limit)",
          "D": "config.limit = limit"
        },
        "correct": "A",
        "explanation": "sys.setrecursionlimit(n) sets the maximum stack depth."
      },
      {
        "id": "PY-TOPIC-046-MCQ-10",
        "question": "What is the output of:\nx = 10\ndef f():\n    # print(x)\n    x = 20\n    return x\nprint(f())",
        "options": {
          "A": "10",
          "B": "20",
          "C": "UnboundLocalError",
          "D": "None"
        },
        "correct": "B",
        "explanation": "x is assigned locally inside f(), so f() returns 20 without error."
      }
    ]
  },
  {
    "id": "PY-TOPIC-047",
    "topic": "Memory Management & GC",
    "topicName": "Memory Management & GC",
    "definition": [
      "Python manages memory automatically using private heap space controlled by Python's memory manager.",
      "Reference counting is CPython's primary memory management system; objects are deallocated when count reaches 0.",
      "A cyclic garbage collector (gc module) detects and cleans up circular reference cycles in generational passes.",
      "The Global Interpreter Lock (GIL) serializes thread access to CPython's internal memory management data structures."
    ],
    "syntax": "import sys\nimport gc\n\n# Reference count check\nobj = [1, 2, 3]\nprint(sys.getrefcount(obj))  # Returns ref count\n\n# Manual GC trigger\ngc.collect()",
    "examples": [
      {
        "title": "Example 1: Reference Counting with sys.getrefcount",
        "code": "import sys\na = [10, 20]\n# getrefcount temporarily creates an extra reference when called\nprint('Ref count >= 2:', sys.getrefcount(a) >= 2)",
        "output": "Ref count >= 2: True",
        "explanation": "Variables referencing an object increment its counter; dropping below 1 triggers deallocation."
      },
      {
        "title": "Example 2: Cyclic Reference Handling with gc Module",
        "code": "import gc\nclass Node:\n    def __init__(self): self.ref = None\nn1, n2 = Node(), Node()\nn1.ref = n2\nn2.ref = n1  # Circular reference\ndel n1, n2\ncleaned = gc.collect()\nprint('Garbage collector cycle cleanup executed')",
        "output": "Garbage collector cycle cleanup executed",
        "explanation": "Cyclic references prevent reference count from hitting 0; the cyclic GC detects and collects them."
      },
      {
        "title": "Example 3: Disabling and Enabling GC",
        "code": "import gc\ngc.disable()\nprint('GC enabled:', gc.isenabled())\ngc.enable()\nprint('GC enabled after re-enabling:', gc.isenabled())",
        "output": "GC enabled: False\nGC enabled after re-enabling: True",
        "explanation": "The garbage collector can be temporarily paused for latency-critical operations."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-047-MCQ-01",
        "question": "What is CPython's PRIMARY mechanism for memory management?",
        "options": {
          "A": "Mark-and-Sweep garbage collection",
          "B": "Reference Counting",
          "C": "Manual malloc/free",
          "D": "Compacting collector"
        },
        "correct": "B",
        "explanation": "CPython immediately frees memory when an object's reference count drops to zero."
      },
      {
        "id": "PY-TOPIC-047-MCQ-02",
        "question": "Why is the cyclic garbage collector necessary in addition to reference counting in CPython?",
        "options": {
          "A": "Reference counting is slow",
          "B": "Reference counting cannot collect circular references (where objects reference each other)",
          "C": "Reference counting only works for integers",
          "D": "To support multi-threading"
        },
        "correct": "B",
        "explanation": "Cyclic references keep refcounts above 0 even when objects are unreachable from the root scope."
      },
      {
        "id": "PY-TOPIC-047-MCQ-03",
        "question": "How many generations does Python's cyclic garbage collector maintain?",
        "options": {
          "A": "1",
          "B": "2",
          "C": "3 (Generation 0, 1, and 2)",
          "D": "10"
        },
        "correct": "C",
        "explanation": "Python's cyclic GC uses 3 generational pools based on the weak generational hypothesis."
      },
      {
        "id": "PY-TOPIC-047-MCQ-04",
        "question": "Why does sys.getrefcount(obj) always report a count 1 higher than expected?",
        "options": {
          "A": "CPython adds 1 for the global table",
          "B": "Passing the object to getrefcount() creates a temporary reference as the function argument",
          "C": "Due to GIL",
          "D": "Python bug"
        },
        "correct": "B",
        "explanation": "Passing obj into getrefcount(obj) introduces an extra reference parameter on the call stack."
      },
      {
        "id": "PY-TOPIC-047-MCQ-05",
        "question": "What does the Global Interpreter Lock (GIL) do in CPython?",
        "options": {
          "A": "Prevents file modifications",
          "B": "A mutex that allows only one native thread to execute Python bytecode at a time, protecting memory structures",
          "C": "Encrypts Python memory",
          "D": "Locks CPU frequency"
        },
        "correct": "B",
        "explanation": "The GIL ensures thread-safe memory management in CPython by synchronizing bytecode execution."
      },
      {
        "id": "PY-TOPIC-047-MCQ-06",
        "question": "What is PyMalloc in CPython internals?",
        "options": {
          "A": "A special small-object memory allocator that manages allocations <= 512 bytes efficiently",
          "B": "A pip plugin",
          "C": "A replacement for virtualenv",
          "D": "A database cache"
        },
        "correct": "A",
        "explanation": "PyMalloc optimizes allocation and deallocation for small objects (<= 512 bytes) inside arenas and pools."
      },
      {
        "id": "PY-TOPIC-047-MCQ-07",
        "question": "Which module allows creating references to objects that do NOT prevent them from being garbage collected?",
        "options": {
          "A": "softref",
          "B": "weakref",
          "C": "temp_ref",
          "D": "lightref"
        },
        "correct": "B",
        "explanation": "The 'weakref' module creates weak references that do not increment the reference count."
      },
      {
        "id": "PY-TOPIC-047-MCQ-08",
        "question": "What function manually triggers a full garbage collection cycle?",
        "options": {
          "A": "sys.clean()",
          "B": "gc.collect()",
          "C": "memory.free()",
          "D": "del all"
        },
        "correct": "B",
        "explanation": "gc.collect() runs an explicit sweep across all generations."
      },
      {
        "id": "PY-TOPIC-047-MCQ-09",
        "question": "What major change was introduced in Python 3.13 regarding the GIL (PEP 703)?",
        "options": {
          "A": "GIL was made permanent",
          "B": "Experimental support for free-threaded Python with the GIL disabled (--disable-gil)",
          "C": "GIL was rewritten in Java",
          "D": "GIL only runs on Linux"
        },
        "correct": "B",
        "explanation": "PEP 703 added experimental free-threaded builds without the GIL in Python 3.13."
      },
      {
        "id": "PY-TOPIC-047-MCQ-10",
        "question": "What does 'del x' do in Python?",
        "options": {
          "A": "Deletes the object directly from RAM immediately",
          "B": "Unbinds the name 'x' from the namespace and decrements the object's reference count by 1",
          "C": "Sets x to None",
          "D": "Kills process"
        },
        "correct": "B",
        "explanation": "'del' removes the variable name; actual deallocation only occurs if the reference count reaches 0."
      }
    ]
  },
  {
    "id": "PY-TOPIC-048",
    "topic": "Multithreading vs Multiprocessing vs Asyncio",
    "topicName": "Multithreading vs Multiprocessing vs Asyncio",
    "definition": [
      "Multithreading uses threading module for I/O-bound concurrency sharing a single memory space under GIL.",
      "Multiprocessing uses multiprocessing module to spawn separate OS processes, achieving true multi-core CPU parallelism.",
      "Asyncio uses async/await event loops for single-threaded cooperative multitasking, ideal for high-concurrency network I/O.",
      "Choose multiprocessing for CPU-heavy tasks; choose asyncio or multithreading for I/O-bound operations."
    ],
    "syntax": "# Threading (I/O bound)\nfrom threading import Thread\nt = Thread(target=fetch_url)\n\n# Multiprocessing (CPU bound)\nfrom multiprocessing import Process\np = Process(target=compute_prime)\n\n# Asyncio (High concurrency I/O)\nimport asyncio\nasync def main(): await asyncio.sleep(1)",
    "examples": [
      {
        "title": "Example 1: Multiprocessing for CPU Parallelism",
        "code": "from multiprocessing import Pool\ndef square(n): return n * n\n# with Pool(4) as p:\n#     res = p.map(square, [1, 2, 3, 4])\nprint('Multiprocessing bypasses GIL by running separate processes')",
        "output": "Multiprocessing bypasses GIL by running separate processes",
        "explanation": "Separate processes have their own Python interpreters and memory spaces, bypassing the GIL."
      },
      {
        "title": "Example 2: Asyncio Coroutines with async/await",
        "code": "import asyncio\nasync def task(id):\n    return f'Task {id} complete'\nasync def runner():\n    results = await asyncio.gather(task(1), task(2))\n    return results\nprint(asyncio.run(runner()))",
        "output": "['Task 1 complete', 'Task 2 complete']",
        "explanation": "asyncio.gather runs multiple asynchronous coroutines cooperatively on a single thread."
      },
      {
        "title": "Example 3: Threading for Concurrent I/O Simulation",
        "code": "import threading\ndef worker():\n    pass\nt = threading.Thread(target=worker)\nt.start()\nt.join()\nprint('Thread completed successfully')",
        "output": "Thread completed successfully",
        "explanation": "Threads share memory and run concurrently while waiting for I/O operations."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-048-MCQ-01",
        "question": "Why does standard multithreading NOT speed up pure CPU-bound mathematical tasks in CPython?",
        "options": {
          "A": "Threads are slower than functions",
          "B": "The Global Interpreter Lock (GIL) limits execution to one thread of Python bytecode at a time",
          "C": "Python threads cannot access RAM",
          "D": "CPython doesn't support threads"
        },
        "correct": "B",
        "explanation": "The GIL prevents multi-core parallelism for CPU-bound Python bytecode across threads."
      },
      {
        "id": "PY-TOPIC-048-MCQ-02",
        "question": "Which module should you use to achieve true parallel CPU execution across multiple processor cores?",
        "options": {
          "A": "threading",
          "B": "multiprocessing",
          "C": "asyncio",
          "D": "concurrent.futures.ThreadPoolExecutor"
        },
        "correct": "B",
        "explanation": "multiprocessing spawns separate OS processes, each with its own interpreter and GIL."
      },
      {
        "id": "PY-TOPIC-048-MCQ-03",
        "question": "What is the concurrency model used by asyncio?",
        "options": {
          "A": "Preemptive multi-threading",
          "B": "Single-threaded cooperative multitasking driven by an event loop",
          "C": "Kernel process fork",
          "D": "Hardware GPU SIMD"
        },
        "correct": "B",
        "explanation": "asyncio runs a single-threaded event loop where tasks yield control voluntarily via await."
      },
      {
        "id": "PY-TOPIC-048-MCQ-04",
        "question": "What keywords were introduced in Python 3.5 for defining native coroutines in asyncio?",
        "options": {
          "A": "coroutine / yield",
          "B": "async def / await",
          "C": "thread / join",
          "D": "task / dispatch"
        },
        "correct": "B",
        "explanation": "async def defines coroutines and await yields execution until a future resolves."
      },
      {
        "id": "PY-TOPIC-048-MCQ-05",
        "question": "For a web crawler making 10,000 HTTP requests simultaneously, which concurrency approach is most resource-efficient?",
        "options": {
          "A": "10,000 OS processes with multiprocessing",
          "B": "10,000 threads with threading",
          "C": "asyncio with an asynchronous HTTP client (e.g., aiohttp / httpx)",
          "D": "A sequential for loop"
        },
        "correct": "C",
        "explanation": "Asyncio handles thousands of concurrent I/O network connections with minimal RAM overhead."
      },
      {
        "id": "PY-TOPIC-048-MCQ-06",
        "question": "What happens if you execute a blocking time.sleep(5) call inside an asyncio coroutine?",
        "options": {
          "A": "Only that coroutine pauses",
          "B": "The entire event loop blocks, freezing all other concurrent asyncio tasks for 5 seconds",
          "C": "Asyncio spawns a thread",
          "D": "Raises RuntimeError"
        },
        "correct": "B",
        "explanation": "Blocking calls stall the single-threaded event loop; use await asyncio.sleep() instead."
      },
      {
        "id": "PY-TOPIC-048-MCQ-07",
        "question": "How do processes communicate with each other in the multiprocessing module?",
        "options": {
          "A": "Shared global variables",
          "B": "IPC mechanisms like Pipes, Queues, and Manager objects using serialization (pickle)",
          "C": "Direct pointers",
          "D": "Cookies"
        },
        "correct": "B",
        "explanation": "Separate processes do not share memory and must communicate via IPC channels."
      },
      {
        "id": "PY-TOPIC-048-MCQ-08",
        "question": "What is a 'Daemon Thread' in Python?",
        "options": {
          "A": "A thread that runs with root privileges",
          "B": "A background thread that terminates automatically when all non-daemon main threads exit",
          "C": "A corrupted thread",
          "D": "A thread with no target"
        },
        "correct": "B",
        "explanation": "Python programs exit immediately once all non-daemon threads have completed."
      },
      {
        "id": "PY-TOPIC-048-MCQ-09",
        "question": "What high-level standard library module unifies ThreadPoolExecutor and ProcessPoolExecutor under a shared interface?",
        "options": {
          "A": "concurrent.futures",
          "B": "parallel.pool",
          "C": "multitask",
          "D": "dispatch"
        },
        "correct": "A",
        "explanation": "concurrent.futures provides high-level executor pools with Future objects."
      },
      {
        "id": "PY-TOPIC-048-MCQ-10",
        "question": "Why is 'if __name__ == \"__main__\":' required when spawning processes on Windows in multiprocessing?",
        "options": {
          "A": "To prevent infinite process spawn loops because Windows uses spawn instead of fork",
          "B": "To import pip",
          "C": "To format logs",
          "D": "Windows syntax requirement"
        },
        "correct": "A",
        "explanation": "Windows re-imports the main script to bootstrap child processes; the guard prevents infinite loops."
      }
    ]
  },
  {
    "id": "PY-TOPIC-049",
    "topic": "JSON, APIs, Database, SQL",
    "topicName": "JSON, APIs, Database, SQL",
    "definition": [
      "The json module serializes Python objects to JSON (dumps/dump) and parses JSON into Python (loads/load).",
      "HTTP REST APIs are consumed using requests or urllib, handling GET, POST, status codes, and headers.",
      "SQLite is built directly into Python via the sqlite3 module, requiring zero external server configuration.",
      "Parameterized SQL queries (? or :name placeholders) prevent SQL injection vulnerabilities."
    ],
    "syntax": "import json\nimport sqlite3\n\n# JSON conversion\ndata = json.loads('{\"name\": \"Koti\"}')\njson_str = json.dumps(data)\n\n# SQLite connection\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE users (id INT, name TEXT)')",
    "examples": [
      {
        "title": "Example 1: JSON dumps and loads",
        "code": "import json\nuser = {'id': 1, 'active': True}\njson_str = json.dumps(user)\nparsed = json.loads(json_str)\nprint('Serialized:', json_str)\nprint('Parsed type:', type(parsed).__name__)",
        "output": "Serialized: {\"id\": 1, \"active\": true}\nParsed type: dict",
        "explanation": "dumps() serializes a Python dictionary to a JSON string; loads() parses it back into a dictionary."
      },
      {
        "title": "Example 2: In-Memory SQLite Queries with Parameterization",
        "code": "import sqlite3\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\ncur.execute('CREATE TABLE students (id INT, name TEXT)')\ncur.execute('INSERT INTO students VALUES (?, ?)', (101, 'Koti'))\nconn.commit()\ncur.execute('SELECT * FROM students')\nprint('Row fetched:', cur.fetchone())",
        "output": "Row fetched: (101, 'Koti')",
        "explanation": "Parameter substitution using ? placeholders guarantees safety against SQL injection attacks."
      },
      {
        "title": "Example 3: Reading and Writing JSON Files",
        "code": "import json\ndata = {'framework': 'FastAPI', 'language': 'Python'}\nformatted = json.dumps(data, indent=2)\nprint(formatted)",
        "output": "{\n  \"framework\": \"FastAPI\",\n  \"language\": \"Python\"\n}",
        "explanation": "The indent parameter formats JSON strings with clean indentation for human readability."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-049-MCQ-01",
        "question": "What is the difference between json.dumps() and json.dump()?",
        "options": {
          "A": "dumps() serializes to a string; dump() writes directly to an open file-like stream",
          "B": "dump() is for numbers only",
          "C": "dumps() deletes the dictionary",
          "D": "They are exact synonyms"
        },
        "correct": "A",
        "explanation": "json.dumps() returns a string (dump-string); json.dump() writes to a file object."
      },
      {
        "id": "PY-TOPIC-049-MCQ-02",
        "question": "What does json.loads() do?",
        "options": {
          "A": "Loads a JSON file from disk",
          "B": "Parses a valid JSON-formatted string into Python native data types (dict, list, etc.)",
          "C": "Downloads JSON from web",
          "D": "Converts Python to YAML"
        },
        "correct": "B",
        "explanation": "loads (load-string) parses a JSON string into Python objects."
      },
      {
        "id": "PY-TOPIC-049-MCQ-03",
        "question": "Which Python built-in database module allows working with SQL databases without installing third-party drivers?",
        "options": {
          "A": "pymysql",
          "B": "sqlite3",
          "C": "psycopg2",
          "D": "oracle"
        },
        "correct": "B",
        "explanation": "sqlite3 is bundled directly with Python's standard library."
      },
      {
        "id": "PY-TOPIC-049-MCQ-04",
        "question": "Why should you NEVER use string formatting like f'SELECT * FROM users WHERE id = {user_id}' in SQL queries?",
        "options": {
          "A": "It is slow",
          "B": "It opens severe SQL Injection security vulnerabilities; use parameterized queries (? placeholders) instead",
          "C": "Causes SyntaxError",
          "D": "SQL doesn't support f-strings"
        },
        "correct": "B",
        "explanation": "String concatenation allows attackers to inject malicious SQL commands."
      },
      {
        "id": "PY-TOPIC-049-MCQ-05",
        "question": "What HTTP library is the de facto standard in Python for consuming REST APIs?",
        "options": {
          "A": "http_fetch",
          "B": "requests",
          "C": "netio",
          "D": "curl_py"
        },
        "correct": "B",
        "explanation": "'requests' (and modern 'httpx') is the most widely adopted HTTP library for REST APIs."
      },
      {
        "id": "PY-TOPIC-049-MCQ-06",
        "question": "What Python data type does a JSON 'null' value deserialize into?",
        "options": {
          "A": "False",
          "B": "None",
          "C": "0",
          "D": "'' (empty string)"
        },
        "correct": "B",
        "explanation": "JSON null maps to Python None."
      },
      {
        "id": "PY-TOPIC-049-MCQ-07",
        "question": "What method must be called on a database connection to save INSERT or UPDATE changes permanently?",
        "options": {
          "A": "conn.save()",
          "B": "conn.commit()",
          "C": "conn.flush()",
          "D": "conn.sync()"
        },
        "correct": "B",
        "explanation": "conn.commit() commits the active transaction to disk."
      },
      {
        "id": "PY-TOPIC-049-MCQ-08",
        "question": "What error occurs if you try to json.dumps() a Python set or custom class object directly?",
        "options": {
          "A": "Converts automatically to string",
          "B": "TypeError: Object of type ... is not JSON serializable",
          "C": "ValueError",
          "D": "Silent crash"
        },
        "correct": "B",
        "explanation": "Sets and custom objects lack default JSON representations, raising a TypeError."
      },
      {
        "id": "PY-TOPIC-049-MCQ-09",
        "question": "What database URL creates a temporary in-memory SQLite database that disappears on script exit?",
        "options": {
          "A": "sqlite3.connect(':memory:')",
          "B": "sqlite3.connect('temp.db')",
          "C": "sqlite3.connect(None)",
          "D": "sqlite3.connect('ram')"
        },
        "correct": "A",
        "explanation": "Passing ':memory:' creates a fast in-RAM database."
      },
      {
        "id": "PY-TOPIC-049-MCQ-10",
        "question": "What parameter in json.dumps() sorts dictionary keys alphabetically in the resulting JSON output?",
        "options": {
          "A": "sort_keys=True",
          "B": "ordered=True",
          "C": "alphabetical=True",
          "D": "keys_order='asc'"
        },
        "correct": "A",
        "explanation": "sort_keys=True ensures keys are serialized in deterministic alphabetical order."
      }
    ]
  },
  {
    "id": "PY-TOPIC-050",
    "topic": "Unit Testing & Logging",
    "topicName": "Unit Testing & Logging",
    "definition": [
      "Unit testing validates individual units of source code to catch bugs early and prevent regressions.",
      "Python includes the unittest framework, while pytest is the popular industry-standard testing tool.",
      "The logging module replaces print() with configurable levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.",
      "Logging supports handlers (file, console), formatting (timestamps, line numbers), and log rotation."
    ],
    "syntax": "# Logging:\nimport logging\nlogging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')\nlogging.info('Application started')\n\n# Unittest:\nimport unittest\nclass TestApp(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(1 + 1, 2)",
    "examples": [
      {
        "title": "Example 1: unittest.TestCase Suite",
        "code": "import unittest\ndef multiply(a, b): return a * b\nclass TestMath(unittest.TestCase):\n    def test_mult(self):\n        self.assertEqual(multiply(3, 4), 12)\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestMath)\nres = unittest.TextTestRunner(verbosity=0).run(suite)\nprint('Tests run:', res.testsRun, '| Passed:', res.wasSuccessful())",
        "output": "Tests run: 1 | Passed: True",
        "explanation": "TestCase provides assertion methods like assertEqual(), assertTrue(), and assertRaises()."
      },
      {
        "title": "Example 2: Using the logging Module with Levels",
        "code": "import logging\nlogger = logging.getLogger('demo')\nlogger.setLevel(logging.INFO)\n# Demonstrating logging levels\nlevels = ['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']\nprint('Available logging levels:', ', '.join(levels))",
        "output": "Available logging levels: DEBUG, INFO, WARNING, ERROR, CRITICAL",
        "explanation": "Log messages are categorized into 5 standardized severity levels."
      },
      {
        "title": "Example 3: Testing Exceptions with assertRaises",
        "code": "import unittest\nclass TestDivide(unittest.TestCase):\n    def test_zero_div(self):\n        with self.assertRaises(ZeroDivisionError):\n            _ = 10 / 0\nsuite = unittest.TestLoader().loadTestsFromTestCase(TestDivide)\nres = unittest.TextTestRunner(verbosity=0).run(suite)\nprint('Exception test passed:', res.wasSuccessful())",
        "output": "Exception test passed: True",
        "explanation": "self.assertRaises() validates that code under test raises expected exceptions."
      }
    ],
    "mcqs": [
      {
        "id": "PY-TOPIC-050-MCQ-01",
        "question": "Which built-in module provides a comprehensive test framework inspired by JUnit?",
        "options": {
          "A": "pytest",
          "B": "unittest",
          "C": "testpy",
          "D": "asserts"
        },
        "correct": "B",
        "explanation": "unittest is Python's built-in testing framework."
      },
      {
        "id": "PY-TOPIC-050-MCQ-02",
        "question": "What naming convention must test methods follow in a unittest.TestCase class?",
        "options": {
          "A": "Must end with _test",
          "B": "Must start with test_ (e.g., test_addition)",
          "C": "Must be marked with @test",
          "D": "Any name works"
        },
        "correct": "B",
        "explanation": "The test runner discovers methods whose names start with the prefix 'test_'."
      },
      {
        "id": "PY-TOPIC-050-MCQ-03",
        "question": "What is the correct order of Python logging levels from lowest to highest severity?",
        "options": {
          "A": "INFO < DEBUG < WARNING < ERROR < CRITICAL",
          "B": "DEBUG < INFO < WARNING < ERROR < CRITICAL",
          "C": "WARNING < INFO < DEBUG < ERROR < CRITICAL",
          "D": "DEBUG < WARNING < INFO < ERROR < CRITICAL"
        },
        "correct": "B",
        "explanation": "The ascending severity order is DEBUG (10), INFO (20), WARNING (30), ERROR (40), CRITICAL (50)."
      },
      {
        "id": "PY-TOPIC-050-MCQ-04",
        "question": "What is the default threshold logging level if no configuration is specified?",
        "options": {
          "A": "DEBUG",
          "B": "INFO",
          "C": "WARNING",
          "D": "ERROR"
        },
        "correct": "C",
        "explanation": "By default, the root logger only outputs events of severity WARNING and above."
      },
      {
        "id": "PY-TOPIC-050-MCQ-05",
        "question": "Why is the logging module preferred over print() in production applications?",
        "options": {
          "A": "print() is deprecated",
          "B": "logging provides timestamps, severity levels, file output, rotation, and can be silenced without code changes",
          "C": "logging runs in C",
          "D": "print() causes memory leaks"
        },
        "correct": "B",
        "explanation": "Logging provides centralized configuration, formatting, filtering, and destination routing."
      },
      {
        "id": "PY-TOPIC-050-MCQ-06",
        "question": "In unittest, which fixture method runs BEFORE every individual test method?",
        "options": {
          "A": "setUpClass()",
          "B": "setUp()",
          "C": "beforeEach()",
          "D": "init()"
        },
        "correct": "B",
        "explanation": "setUp() is invoked immediately before calling each test method."
      },
      {
        "id": "PY-TOPIC-050-MCQ-07",
        "question": "In unittest, which fixture method runs AFTER every individual test method?",
        "options": {
          "A": "tearDown()",
          "B": "tearDownClass()",
          "C": "afterEach()",
          "D": "cleanup()"
        },
        "correct": "A",
        "explanation": "tearDown() runs immediately after each test method to clean up resources."
      },
      {
        "id": "PY-TOPIC-050-MCQ-08",
        "question": "What is the industry-standard third-party test runner preferred for its concise 'assert' syntax and powerful fixtures?",
        "options": {
          "A": "pytest",
          "B": "nose",
          "C": "testrail",
          "D": "pycheck"
        },
        "correct": "A",
        "explanation": "pytest is the most popular test framework in the Python ecosystem."
      },
      {
        "id": "PY-TOPIC-050-MCQ-09",
        "question": "How do you test that a piece of code raises a ValueError using unittest?",
        "options": {
          "A": "try-except block manually",
          "B": "with self.assertRaises(ValueError):",
          "C": "self.expectError(ValueError)",
          "D": "assert ValueError"
        },
        "correct": "B",
        "explanation": "self.assertRaises used as a context manager checks for expected exceptions."
      },
      {
        "id": "PY-TOPIC-050-MCQ-10",
        "question": "What does logging.getLogger(__name__) do?",
        "options": {
          "A": "Returns a unique logger scoped to the current module's namespace",
          "B": "Deletes the root logger",
          "C": "Prints the file name",
          "D": "Configures stdout"
        },
        "correct": "A",
        "explanation": "Using __name__ structures loggers hierarchically according to the module namespace."
      }
    ]
  }
];

export const totalTopicsCount = pythonBookTopics.length;
export const totalMCQsCount = 500;

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return pythonBookTopics.find((t) => t.id === id);
}

export function getPythonTopicByName(name: string): PythonTopic | undefined {
  if (!name) return undefined;
  const target = name.trim().toLowerCase();
  return pythonBookTopics.find(
    (t) => t.topic.toLowerCase() === target || t.topicName.toLowerCase() === target
  );
}

export function searchPythonTopics(query: string): PythonTopic[] {
  if (!query || !query.trim()) return pythonBookTopics;
  const q = query.trim().toLowerCase();
  return pythonBookTopics.filter(
    (t) =>
      t.topic.toLowerCase().includes(q) ||
      t.topicName.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q) ||
      t.definition.some((d) => d.toLowerCase().includes(q))
  );
}
