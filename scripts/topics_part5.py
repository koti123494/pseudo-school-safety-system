# Topics 41 to 50:
# 41. Context Managers (with)
# 42. Regular Expressions
# 43. Shallow & Deep Copy
# 44. Mutable vs Immutable & is vs ==
# 45. @staticmethod, @classmethod
# 46. Scope & Namespace & Recursion & Complexity
# 47. Memory Management & GC
# 48. Multithreading vs Multiprocessing vs Asyncio
# 49. JSON, APIs, Database, SQL
# 50. Unit Testing & Logging

topics = [
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
                "options": {"A": "__open__() and __close__()", "B": "__enter__() and __exit__()", "C": "__start__() and __stop__()", "D": "__init__() and __del__()"},
                "correct": "B",
                "explanation": "The context management protocol requires __enter__ and __exit__."
            },
            {
                "id": "PY-TOPIC-041-MCQ-02",
                "question": "What happens if __exit__() returns True when an exception occurs inside the 'with' block?",
                "options": {"A": "Exception is re-raised", "B": "Exception is suppressed and execution continues outside the with block", "C": "Program exits immediately", "D": "Raises TypeError"},
                "correct": "B",
                "explanation": "Returning True from __exit__ tells Python to swallow/suppress the exception."
            },
            {
                "id": "PY-TOPIC-041-MCQ-03",
                "question": "What 3 arguments are passed to __exit__(self, ...) when an exception occurs?",
                "options": {"A": "(file, line, code)", "B": "(exc_type, exc_val, exc_tb)", "C": "(error, message, time)", "D": "(status, code, details)"},
                "correct": "B",
                "explanation": "__exit__ receives exception type, exception value, and traceback object."
            },
            {
                "id": "PY-TOPIC-041-MCQ-04",
                "question": "What decorator from contextlib converts a generator function with 'yield' into a context manager?",
                "options": {"A": "@contextmanager", "B": "@with_statement", "C": "@resource_guard", "D": "@managed"},
                "correct": "A",
                "explanation": "@contextmanager turns a generator yielding once into a context manager."
            },
            {
                "id": "PY-TOPIC-041-MCQ-05",
                "question": "What is the variable bound to in: with open('f.txt') as f:?",
                "options": {"A": "The open function", "B": "The return value of __enter__()", "C": "The file name string", "D": "The return value of __exit__()"},
                "correct": "B",
                "explanation": "The 'as' clause binds the target variable to whatever __enter__() returns."
            },
            {
                "id": "PY-TOPIC-041-MCQ-06",
                "question": "Does __exit__ run if an unhandled exception occurs inside the 'with' block?",
                "options": {"A": "No, it is skipped", "B": "Yes, __exit__ is guaranteed to run, just like a finally block", "C": "Only if using files", "D": "Only in Python 3"},
                "correct": "B",
                "explanation": "__exit__ acts like a finally block and always executes on exit."
            },
            {
                "id": "PY-TOPIC-041-MCQ-07",
                "question": "Can you manage multiple resources in a single 'with' statement?",
                "options": {"A": "No, must nest separate with blocks", "B": "Yes, e.g. with open('a') as a, open('b') as b:", "C": "Only up to 2", "D": "Requires threading"},
                "correct": "B",
                "explanation": "Python supports comma-separated context managers in a single with statement."
            },
            {
                "id": "PY-TOPIC-041-MCQ-08",
                "question": "Which standard library module contains context management utilities like ExitStack and redirect_stdout?",
                "options": {"A": "sys", "B": "os", "C": "contextlib", "D": "functools"},
                "correct": "C",
                "explanation": "contextlib is dedicated to context manager helpers and utilities."
            },
            {
                "id": "PY-TOPIC-041-MCQ-09",
                "question": "What does contextlib.ExitStack allow?",
                "options": {"A": "Managing a dynamic or programmatic number of context managers cleanly", "B": "Printing stack traces", "C": "Exiting programs faster", "D": "Creating memory buffers"},
                "correct": "A",
                "explanation": "ExitStack manages variable collections of context managers programmatically."
            },
            {
                "id": "PY-TOPIC-041-MCQ-10",
                "question": "When threading.Lock is used with 'with lock:', what does __enter__ and __exit__ do?",
                "options": {"A": "Nothing", "B": "__enter__ acquires lock, __exit__ releases lock", "C": "Deletes thread", "D": "Allocates CPU core"},
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
                "options": {"A": "regex_lib", "B": "re", "C": "strings", "D": "pattern"},
                "correct": "B",
                "explanation": "The 're' module is Python's built-in regular expression engine."
            },
            {
                "id": "PY-TOPIC-042-MCQ-02",
                "question": "What is the difference between re.match() and re.search()?",
                "options": {"A": "re.match() matches only at the START of the string; re.search() scans the entire string", "B": "re.search() only matches numbers", "C": "re.match() is case-insensitive", "D": "They are exact synonyms"},
                "correct": "A",
                "explanation": "match() only checks the beginning of the string; search() searches anywhere."
            },
            {
                "id": "PY-TOPIC-042-MCQ-03",
                "question": "Why should regex patterns be written as raw strings like r'\\d+' in Python?",
                "options": {"A": "It makes them run 2x faster", "B": "To prevent Python string literal escaping of backslashes (\\)", "C": "Raw strings are compiled automatically", "D": "Mandatory in Python 3"},
                "correct": "B",
                "explanation": "Raw strings treat backslashes literally, avoiding double-escaping issues."
            },
            {
                "id": "PY-TOPIC-042-MCQ-04",
                "question": "What does '\\d+' match in a regular expression?",
                "options": {"A": "A single letter", "B": "One or more consecutive digits (0-9)", "C": "A dot symbol", "D": "Any word character"},
                "correct": "B",
                "explanation": "\\d matches a numeric digit, and + matches one or more repetitions."
            },
            {
                "id": "PY-TOPIC-042-MCQ-05",
                "question": "What does re.sub() do?",
                "options": {"A": "Subtracts numbers", "B": "Substrings a list", "C": "Replaces pattern occurrences with a replacement string", "D": "Splits a string"},
                "correct": "C",
                "explanation": "re.sub(pattern, replacement, string) performs search-and-replace."
            },
            {
                "id": "PY-TOPIC-042-MCQ-06",
                "question": "What metacharacter anchors a pattern to the very beginning of a string?",
                "options": {"A": "$", "B": "^", "C": "*", "D": "?"},
                "correct": "B",
                "explanation": "^ asserts start of string; $ asserts end of string."
            },
            {
                "id": "PY-TOPIC-042-MCQ-07",
                "question": "What is the benefit of compiling a pattern using re.compile()?",
                "options": {"A": "Permits reusing the pre-compiled regex object efficiently across repeated matches", "B": "Converts regex to C code", "C": "Deletes the pattern from memory", "D": "Bypasses GIL"},
                "correct": "A",
                "explanation": "re.compile() caches the compiled automaton, speeding up repeated lookups."
            },
            {
                "id": "PY-TOPIC-042-MCQ-08",
                "question": "What does the regex quantifier '*' mean?",
                "options": {"A": "Exactly 1 match", "B": "Zero or more matches", "C": "One or more matches", "D": "Optional 0 or 1 match"},
                "correct": "B",
                "explanation": "* matches 0 or more occurrences; + matches 1 or more; ? matches 0 or 1."
            },
            {
                "id": "PY-TOPIC-042-MCQ-09",
                "question": "What flag makes regex matching case-insensitive?",
                "options": {"A": "re.IGNORECASE (or re.I)", "B": "re.CASELESS", "C": "re.NOCASE", "D": "re.LOWER"},
                "correct": "A",
                "explanation": "re.IGNORECASE (or re.I) enables case-insensitive pattern matching."
            },
            {
                "id": "PY-TOPIC-042-MCQ-10",
                "question": "What does group(0) return on a match object returned by re.search()?",
                "options": {"A": "None", "B": "The entire substring matched by the pattern", "C": "The first captured group", "D": "The index position"},
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
                "options": {"A": "A deep copy", "B": "A shallow copy", "C": "Both variables reference the exact same object in memory", "D": "Creates an immutable tuple"},
                "correct": "C",
                "explanation": "Assignment binds an existing object reference to a new name; no copy is made."
            },
            {
                "id": "PY-TOPIC-043-MCQ-02",
                "question": "Which module provides functions for shallow and deep copying?",
                "options": {"A": "clone", "B": "copy", "C": "sys", "D": "dupe"},
                "correct": "B",
                "explanation": "Python's built-in 'copy' module contains copy() and deepcopy()."
            },
            {
                "id": "PY-TOPIC-043-MCQ-03",
                "question": "What is the crucial difference between copy.copy() and copy.deepcopy()?",
                "options": {"A": "copy() is for lists only", "B": "copy() duplicates outer container only; deepcopy() recursively duplicates all nested objects", "C": "deepcopy() deletes the original", "D": "They are exact duplicates"},
                "correct": "B",
                "explanation": "Shallow copy shares nested object references; deep copy clones the entire object graph."
            },
            {
                "id": "PY-TOPIC-043-MCQ-04",
                "question": "What is the output of:\nimport copy\na = [1, [2]]\nb = copy.copy(a)\nb[1].append(3)\nprint(a[1])",
                "options": {"A": "[2]", "B": "[2, 3]", "C": "[3]", "D": "Error"},
                "correct": "B",
                "explanation": "The inner list [2] is shared between a and b, so mutating b[1] affects a[1]."
            },
            {
                "id": "PY-TOPIC-043-MCQ-05",
                "question": "How does deepcopy handle cyclic references (e.g., an object referencing itself)?",
                "options": {"A": "Crashes with RecursionError", "B": "Tracks copied objects in an internal memo dictionary, safely handling cycles without looping", "C": "Silently truncates", "D": "Raises TypeError"},
                "correct": "B",
                "explanation": "deepcopy maintains a memo dict of visited objects to avoid infinite recursion."
            },
            {
                "id": "PY-TOPIC-043-MCQ-06",
                "question": "Which of the following creates a shallow copy of a flat list 'lst'?",
                "options": {"A": "lst[:]", "B": "list(lst)", "C": "lst.copy()", "D": "All of the above"},
                "correct": "D",
                "explanation": "Slicing [:], list constructor, and list.copy() all create shallow copies of a list."
            },
            {
                "id": "PY-TOPIC-043-MCQ-07",
                "question": "What magic method allows a custom class to override its shallow copy behavior?",
                "options": {"A": "__copy__(self)", "B": "__shallow__(self)", "C": "__clone__(self)", "D": "__duplicate__(self)"},
                "correct": "A",
                "explanation": "__copy__() customizes the shallow copying behavior invoked by copy.copy()."
            },
            {
                "id": "PY-TOPIC-043-MCQ-08",
                "question": "What magic method customizes deep copy behavior for a class?",
                "options": {"A": "__deepcopy__(self, memo)", "B": "__recurse_copy__(self)", "C": "__deep__(self)", "D": "__fullcopy__(self)"},
                "correct": "A",
                "explanation": "__deepcopy__(self, memo) customizes deep copying, receiving the memo dictionary."
            },
            {
                "id": "PY-TOPIC-043-MCQ-09",
                "question": "What happens when you deepcopy an immutable object like an int or string?",
                "options": {"A": "A new memory address is allocated", "B": "Python returns the identical object itself as an optimization", "C": "Raises TypeError", "D": "Converts to list"},
                "correct": "B",
                "explanation": "Because immutables cannot change, copying them simply reuses the existing instance."
            },
            {
                "id": "PY-TOPIC-043-MCQ-10",
                "question": "Why is deepcopy significantly slower than shallow copy?",
                "options": {"A": "It must inspect object graphs, check for recursion loops, and allocate new memory for every nested object", "B": "It writes to disk", "C": "It is written in bash", "D": "It uses single threading"},
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
                "options": {"A": "tuple", "B": "str", "C": "list", "D": "frozenset"},
                "correct": "C",
                "explanation": "Lists can be modified in-place, making them mutable."
            },
            {
                "id": "PY-TOPIC-044-MCQ-02",
                "question": "What is the difference between '==' and 'is' in Python?",
                "options": {"A": "== checks memory address, is checks value", "B": "== checks value equality, is checks object identity (same memory address)", "C": "They are exact synonyms", "D": "is is only for strings"},
                "correct": "B",
                "explanation": "== checks if values are equal; 'is' checks if id(a) == id(b)."
            },
            {
                "id": "PY-TOPIC-044-MCQ-03",
                "question": "What range of integers does CPython cache (intern) by default?",
                "options": {"A": "0 to 100", "B": "-5 to 256", "C": "-128 to 127", "D": "All positive numbers"},
                "correct": "B",
                "explanation": "CPython caches small integer singletons from -5 through 256."
            },
            {
                "id": "PY-TOPIC-044-MCQ-04",
                "question": "Why is 'x is None' preferred over 'x == None'?",
                "options": {"A": "None is a singleton object, so checking identity 'is' is faster and cannot be overridden by __eq__", "B": "== causes SyntaxError with None", "C": "is None is deprecated", "D": "PEP 8 forbids =="},
                "correct": "A",
                "explanation": "None is a singleton; 'is None' is faster and immune to custom __eq__ overrides."
            },
            {
                "id": "PY-TOPIC-044-MCQ-05",
                "question": "What is the output of: a = (1, 2); a += (3,); did 'a' mutate in-place?",
                "options": {"A": "Yes, same memory ID", "B": "No, tuples are immutable so a new tuple object was created with a new memory ID", "C": "Tuples cannot use +=", "D": "Raises TypeError"},
                "correct": "B",
                "explanation": "Tuples are immutable; += rebinds 'a' to a newly allocated tuple."
            },
            {
                "id": "PY-TOPIC-044-MCQ-06",
                "question": "Which collection type is IMMUTABLE?",
                "options": {"A": "dict", "B": "set", "C": "frozenset", "D": "bytearray"},
                "correct": "C",
                "explanation": "frozenset is the immutable counterpart of a set."
            },
            {
                "id": "PY-TOPIC-044-MCQ-07",
                "question": "What is String Interning in Python?",
                "options": {"A": "Translating strings to Unicode", "B": "Reusing memory for identical immutable string literals (especially identifier-like strings)", "C": "Converting strings to lists", "D": "Encrypting text"},
                "correct": "B",
                "explanation": "CPython interns certain string literals so they point to identical memory addresses."
            },
            {
                "id": "PY-TOPIC-044-MCQ-08",
                "question": "What happens if a function modifies a mutable argument passed to it?",
                "options": {"A": "Modification affects caller's object because Python uses pass-by-object-reference", "B": "Caller's object is unaffected", "C": "Raises RuntimeError", "D": "Argument is deleted"},
                "correct": "A",
                "explanation": "Passing mutable objects shares the reference; in-place mutations reflect on caller's data."
            },
            {
                "id": "PY-TOPIC-044-MCQ-09",
                "question": "What is the output of: [1] == [1.0] vs [1] is [1.0]?",
                "options": {"A": "True True", "B": "True False", "C": "False False", "D": "False True"},
                "correct": "B",
                "explanation": "Values match (1 == 1.0 is True), but they are separate objects in memory (is is False)."
            },
            {
                "id": "PY-TOPIC-044-MCQ-10",
                "question": "Can an immutable object contain a mutable object (e.g. a tuple containing a list)?",
                "options": {"A": "No, raises TypeError", "B": "Yes, but the tuple itself remains immutable while the list inside can be mutated", "C": "The list becomes immutable", "D": "Only with frozenset"},
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
                "options": {"A": "@classmethod takes cls; @staticmethod takes no implicit first argument", "B": "@staticmethod takes self; @classmethod takes nothing", "C": "@classmethod cannot be inherited", "D": "They are exact synonyms"},
                "correct": "A",
                "explanation": "Class methods receive the class object as cls; static methods receive no implicit parameters."
            },
            {
                "id": "PY-TOPIC-045-MCQ-02",
                "question": "Why is @classmethod preferred over hardcoding ClassName() for alternative constructors?",
                "options": {"A": "It supports polymorphic subclassing; calling on SubClass creates SubClass instances", "B": "It runs in parallel threads", "C": "It skips memory allocation", "D": "It prevents inheritance"},
                "correct": "A",
                "explanation": "cls ensures proper subclass instantiation when inheriting factory methods."
            },
            {
                "id": "PY-TOPIC-045-MCQ-03",
                "question": "Can a @staticmethod access class variables directly without referring to the class name?",
                "options": {"A": "Yes, via cls", "B": "No, because it does not receive cls or self; it must reference ClassName.var explicitly", "C": "Yes, using super()", "D": "Only if marked global"},
                "correct": "B",
                "explanation": "Static methods have no reference to class or instance state unless referenced by name."
            },
            {
                "id": "PY-TOPIC-045-MCQ-04",
                "question": "How are @classmethod and @staticmethod implemented internally in Python?",
                "options": {"A": "As built-in descriptors that customize attribute lookup and binding", "B": "As separate C threads", "C": "As bytecode macros", "D": "As global functions"},
                "correct": "A",
                "explanation": "Both are built-in descriptor types implementing __get__ to customize method binding."
            },
            {
                "id": "PY-TOPIC-045-MCQ-05",
                "question": "Can you call a @classmethod on an instance: obj.my_class_method()?",
                "options": {"A": "No, only on the class", "B": "Yes, Python passes type(obj) as cls automatically", "C": "Causes TypeError", "D": "Only if __init__ is empty"},
                "correct": "B",
                "explanation": "Calling a classmethod on an instance automatically passes the instance's class as cls."
            },
            {
                "id": "PY-TOPIC-045-MCQ-06",
                "question": "When should you prefer a standalone module function over a @staticmethod?",
                "options": {"A": "When the function has no logical association with the class's conceptual namespace", "B": "Always, static methods are deprecated", "C": "When working with numbers", "D": "Never"},
                "correct": "A",
                "explanation": "If a function doesn't conceptually belong to the class, a module-level function is cleaner."
            },
            {
                "id": "PY-TOPIC-045-MCQ-07",
                "question": "Can a classmethod modify instance variables (self.name)?",
                "options": {"A": "Yes, always", "B": "No, because it does not have access to an instance self", "C": "Only if passed self as a secondary parameter", "D": "Both B and C"},
                "correct": "D",
                "explanation": "Classmethods receive only cls; they have no implicit instance self."
            },
            {
                "id": "PY-TOPIC-045-MCQ-08",
                "question": "What is the output of:\nclass A:\n    count = 1\n    @classmethod\n    def inc(cls): cls.count += 1\nA.inc()\nprint(A.count)",
                "options": {"A": "1", "B": "2", "C": "None", "D": "AttributeError"},
                "correct": "B",
                "explanation": "A.inc() increments the class variable count from 1 to 2."
            },
            {
                "id": "PY-TOPIC-045-MCQ-09",
                "question": "Can @staticmethod be overridden by a subclass?",
                "options": {"A": "Yes, like any other class attribute", "B": "No, static methods are sealed", "C": "Only if declared abstract", "D": "Only with super()"},
                "correct": "A",
                "explanation": "Static methods participate in standard class inheritance and can be overridden."
            },
            {
                "id": "PY-TOPIC-045-MCQ-10",
                "question": "Which decorator would you choose for a method that needs to mutate a class variable shared across all instances?",
                "options": {"A": "@staticmethod", "B": "@classmethod", "C": "@property", "D": "@abstractmethod"},
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
                "options": {"A": "Linear, External, Global, Binary", "B": "Local, Enclosing, Global, Built-in", "C": "List, Element, Group, Block", "D": "Logical, Environment, General, Base"},
                "correct": "B",
                "explanation": "LEGB defines Python's name lookup hierarchy: Local -> Enclosing -> Global -> Built-in."
            },
            {
                "id": "PY-TOPIC-046-MCQ-02",
                "question": "What keyword allows an inner nested function to modify a variable in its enclosing (outer) function?",
                "options": {"A": "global", "B": "nonlocal", "C": "outer", "D": "static"},
                "correct": "B",
                "explanation": "'nonlocal' binds a name to the nearest enclosing non-global scope."
            },
            {
                "id": "PY-TOPIC-046-MCQ-03",
                "question": "What is Python's default maximum recursion limit?",
                "options": {"A": "100", "B": "1000", "C": "10,000", "D": "Unlimited"},
                "correct": "B",
                "explanation": "CPython's default recursion limit is typically 1000 (viewable via sys.getrecursionlimit())."
            },
            {
                "id": "PY-TOPIC-046-MCQ-04",
                "question": "What exception is raised when a recursive function fails to hit a base case and exceeds recursion depth?",
                "options": {"A": "StackOverflowError", "B": "RecursionError: maximum recursion depth exceeded", "C": "MemoryError", "D": "InfiniteLoopError"},
                "correct": "B",
                "explanation": "Exceeding recursion limits raises a RecursionError."
            },
            {
                "id": "PY-TOPIC-046-MCQ-05",
                "question": "Does standard Python (CPython) perform automatic Tail-Call Optimization (TCO)?",
                "options": {"A": "Yes, always", "B": "No, Guido van Rossum deliberately rejected TCO to preserve accurate stack traces", "C": "Only with while loops", "D": "Only with lambdas"},
                "correct": "B",
                "explanation": "CPython does not optimize tail-calls, keeping stack traces complete for debugging."
            },
            {
                "id": "PY-TOPIC-046-MCQ-06",
                "question": "What sorting algorithm is used by Python's built-in sorted() and list.sort()?",
                "options": {"A": "QuickSort", "B": "MergeSort", "C": "Timsort (hybrid of MergeSort and InsertionSort)", "D": "HeapSort"},
                "correct": "C",
                "explanation": "Python uses Timsort, a hybrid sorting algorithm invented by Tim Peters."
            },
            {
                "id": "PY-TOPIC-046-MCQ-07",
                "question": "What is the worst-case time complexity of Timsort?",
                "options": {"A": "O(n^2)", "B": "O(n log n)", "C": "O(n)", "D": "O(log n)"},
                "correct": "B",
                "explanation": "Timsort guarantees O(n log n) worst-case time and O(n) best-case time on already-sorted data."
            },
            {
                "id": "PY-TOPIC-046-MCQ-08",
                "question": "What is the space complexity of a naive recursive Fibonacci calculation without memoization?",
                "options": {"A": "O(1)", "B": "O(n) due to call stack depth", "C": "O(2^n)", "D": "O(n^2)"},
                "correct": "B",
                "explanation": "The maximum call stack depth is n, resulting in O(n) auxiliary space complexity."
            },
            {
                "id": "PY-TOPIC-046-MCQ-09",
                "question": "How can you safely increase Python's recursion limit in a script?",
                "options": {"A": "sys.setrecursionlimit(limit)", "B": "os.set_stack(limit)", "C": "recursion.expand(limit)", "D": "config.limit = limit"},
                "correct": "A",
                "explanation": "sys.setrecursionlimit(n) sets the maximum stack depth."
            },
            {
                "id": "PY-TOPIC-046-MCQ-10",
                "question": "What is the output of:\nx = 10\ndef f():\n    # print(x)\n    x = 20\n    return x\nprint(f())",
                "options": {"A": "10", "B": "20", "C": "UnboundLocalError", "D": "None"},
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
                "options": {"A": "Mark-and-Sweep garbage collection", "B": "Reference Counting", "C": "Manual malloc/free", "D": "Compacting collector"},
                "correct": "B",
                "explanation": "CPython immediately frees memory when an object's reference count drops to zero."
            },
            {
                "id": "PY-TOPIC-047-MCQ-02",
                "question": "Why is the cyclic garbage collector necessary in addition to reference counting in CPython?",
                "options": {"A": "Reference counting is slow", "B": "Reference counting cannot collect circular references (where objects reference each other)", "C": "Reference counting only works for integers", "D": "To support multi-threading"},
                "correct": "B",
                "explanation": "Cyclic references keep refcounts above 0 even when objects are unreachable from the root scope."
            },
            {
                "id": "PY-TOPIC-047-MCQ-03",
                "question": "How many generations does Python's cyclic garbage collector maintain?",
                "options": {"A": "1", "B": "2", "C": "3 (Generation 0, 1, and 2)", "D": "10"},
                "correct": "C",
                "explanation": "Python's cyclic GC uses 3 generational pools based on the weak generational hypothesis."
            },
            {
                "id": "PY-TOPIC-047-MCQ-04",
                "question": "Why does sys.getrefcount(obj) always report a count 1 higher than expected?",
                "options": {"A": "CPython adds 1 for the global table", "B": "Passing the object to getrefcount() creates a temporary reference as the function argument", "C": "Due to GIL", "D": "Python bug"},
                "correct": "B",
                "explanation": "Passing obj into getrefcount(obj) introduces an extra reference parameter on the call stack."
            },
            {
                "id": "PY-TOPIC-047-MCQ-05",
                "question": "What does the Global Interpreter Lock (GIL) do in CPython?",
                "options": {"A": "Prevents file modifications", "B": "A mutex that allows only one native thread to execute Python bytecode at a time, protecting memory structures", "C": "Encrypts Python memory", "D": "Locks CPU frequency"},
                "correct": "B",
                "explanation": "The GIL ensures thread-safe memory management in CPython by synchronizing bytecode execution."
            },
            {
                "id": "PY-TOPIC-047-MCQ-06",
                "question": "What is PyMalloc in CPython internals?",
                "options": {"A": "A special small-object memory allocator that manages allocations <= 512 bytes efficiently", "B": "A pip plugin", "C": "A replacement for virtualenv", "D": "A database cache"},
                "correct": "A",
                "explanation": "PyMalloc optimizes allocation and deallocation for small objects (<= 512 bytes) inside arenas and pools."
            },
            {
                "id": "PY-TOPIC-047-MCQ-07",
                "question": "Which module allows creating references to objects that do NOT prevent them from being garbage collected?",
                "options": {"A": "softref", "B": "weakref", "C": "temp_ref", "D": "lightref"},
                "correct": "B",
                "explanation": "The 'weakref' module creates weak references that do not increment the reference count."
            },
            {
                "id": "PY-TOPIC-047-MCQ-08",
                "question": "What function manually triggers a full garbage collection cycle?",
                "options": {"A": "sys.clean()", "B": "gc.collect()", "C": "memory.free()", "D": "del all"},
                "correct": "B",
                "explanation": "gc.collect() runs an explicit sweep across all generations."
            },
            {
                "id": "PY-TOPIC-047-MCQ-09",
                "question": "What major change was introduced in Python 3.13 regarding the GIL (PEP 703)?",
                "options": {"A": "GIL was made permanent", "B": "Experimental support for free-threaded Python with the GIL disabled (--disable-gil)", "C": "GIL was rewritten in Java", "D": "GIL only runs on Linux"},
                "correct": "B",
                "explanation": "PEP 703 added experimental free-threaded builds without the GIL in Python 3.13."
            },
            {
                "id": "PY-TOPIC-047-MCQ-10",
                "question": "What does 'del x' do in Python?",
                "options": {"A": "Deletes the object directly from RAM immediately", "B": "Unbinds the name 'x' from the namespace and decrements the object's reference count by 1", "C": "Sets x to None", "D": "Kills process"},
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
                "options": {"A": "Threads are slower than functions", "B": "The Global Interpreter Lock (GIL) limits execution to one thread of Python bytecode at a time", "C": "Python threads cannot access RAM", "D": "CPython doesn't support threads"},
                "correct": "B",
                "explanation": "The GIL prevents multi-core parallelism for CPU-bound Python bytecode across threads."
            },
            {
                "id": "PY-TOPIC-048-MCQ-02",
                "question": "Which module should you use to achieve true parallel CPU execution across multiple processor cores?",
                "options": {"A": "threading", "B": "multiprocessing", "C": "asyncio", "D": "concurrent.futures.ThreadPoolExecutor"},
                "correct": "B",
                "explanation": "multiprocessing spawns separate OS processes, each with its own interpreter and GIL."
            },
            {
                "id": "PY-TOPIC-048-MCQ-03",
                "question": "What is the concurrency model used by asyncio?",
                "options": {"A": "Preemptive multi-threading", "B": "Single-threaded cooperative multitasking driven by an event loop", "C": "Kernel process fork", "D": "Hardware GPU SIMD"},
                "correct": "B",
                "explanation": "asyncio runs a single-threaded event loop where tasks yield control voluntarily via await."
            },
            {
                "id": "PY-TOPIC-048-MCQ-04",
                "question": "What keywords were introduced in Python 3.5 for defining native coroutines in asyncio?",
                "options": {"A": "coroutine / yield", "B": "async def / await", "C": "thread / join", "D": "task / dispatch"},
                "correct": "B",
                "explanation": "async def defines coroutines and await yields execution until a future resolves."
            },
            {
                "id": "PY-TOPIC-048-MCQ-05",
                "question": "For a web crawler making 10,000 HTTP requests simultaneously, which concurrency approach is most resource-efficient?",
                "options": {"A": "10,000 OS processes with multiprocessing", "B": "10,000 threads with threading", "C": "asyncio with an asynchronous HTTP client (e.g., aiohttp / httpx)", "D": "A sequential for loop"},
                "correct": "C",
                "explanation": "Asyncio handles thousands of concurrent I/O network connections with minimal RAM overhead."
            },
            {
                "id": "PY-TOPIC-048-MCQ-06",
                "question": "What happens if you execute a blocking time.sleep(5) call inside an asyncio coroutine?",
                "options": {"A": "Only that coroutine pauses", "B": "The entire event loop blocks, freezing all other concurrent asyncio tasks for 5 seconds", "C": "Asyncio spawns a thread", "D": "Raises RuntimeError"},
                "correct": "B",
                "explanation": "Blocking calls stall the single-threaded event loop; use await asyncio.sleep() instead."
            },
            {
                "id": "PY-TOPIC-048-MCQ-07",
                "question": "How do processes communicate with each other in the multiprocessing module?",
                "options": {"A": "Shared global variables", "B": "IPC mechanisms like Pipes, Queues, and Manager objects using serialization (pickle)", "C": "Direct pointers", "D": "Cookies"},
                "correct": "B",
                "explanation": "Separate processes do not share memory and must communicate via IPC channels."
            },
            {
                "id": "PY-TOPIC-048-MCQ-08",
                "question": "What is a 'Daemon Thread' in Python?",
                "options": {"A": "A thread that runs with root privileges", "B": "A background thread that terminates automatically when all non-daemon main threads exit", "C": "A corrupted thread", "D": "A thread with no target"},
                "correct": "B",
                "explanation": "Python programs exit immediately once all non-daemon threads have completed."
            },
            {
                "id": "PY-TOPIC-048-MCQ-09",
                "question": "What high-level standard library module unifies ThreadPoolExecutor and ProcessPoolExecutor under a shared interface?",
                "options": {"A": "concurrent.futures", "B": "parallel.pool", "C": "multitask", "D": "dispatch"},
                "correct": "A",
                "explanation": "concurrent.futures provides high-level executor pools with Future objects."
            },
            {
                "id": "PY-TOPIC-048-MCQ-10",
                "question": "Why is 'if __name__ == \"__main__\":' required when spawning processes on Windows in multiprocessing?",
                "options": {"A": "To prevent infinite process spawn loops because Windows uses spawn instead of fork", "B": "To import pip", "C": "To format logs", "D": "Windows syntax requirement"},
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
                "options": {"A": "dumps() serializes to a string; dump() writes directly to an open file-like stream", "B": "dump() is for numbers only", "C": "dumps() deletes the dictionary", "D": "They are exact synonyms"},
                "correct": "A",
                "explanation": "json.dumps() returns a string (dump-string); json.dump() writes to a file object."
            },
            {
                "id": "PY-TOPIC-049-MCQ-02",
                "question": "What does json.loads() do?",
                "options": {"A": "Loads a JSON file from disk", "B": "Parses a valid JSON-formatted string into Python native data types (dict, list, etc.)", "C": "Downloads JSON from web", "D": "Converts Python to YAML"},
                "correct": "B",
                "explanation": "loads (load-string) parses a JSON string into Python objects."
            },
            {
                "id": "PY-TOPIC-049-MCQ-03",
                "question": "Which Python built-in database module allows working with SQL databases without installing third-party drivers?",
                "options": {"A": "pymysql", "B": "sqlite3", "C": "psycopg2", "D": "oracle"},
                "correct": "B",
                "explanation": "sqlite3 is bundled directly with Python's standard library."
            },
            {
                "id": "PY-TOPIC-049-MCQ-04",
                "question": "Why should you NEVER use string formatting like f'SELECT * FROM users WHERE id = {user_id}' in SQL queries?",
                "options": {"A": "It is slow", "B": "It opens severe SQL Injection security vulnerabilities; use parameterized queries (? placeholders) instead", "C": "Causes SyntaxError", "D": "SQL doesn't support f-strings"},
                "correct": "B",
                "explanation": "String concatenation allows attackers to inject malicious SQL commands."
            },
            {
                "id": "PY-TOPIC-049-MCQ-05",
                "question": "What HTTP library is the de facto standard in Python for consuming REST APIs?",
                "options": {"A": "http_fetch", "B": "requests", "C": "netio", "D": "curl_py"},
                "correct": "B",
                "explanation": "'requests' (and modern 'httpx') is the most widely adopted HTTP library for REST APIs."
            },
            {
                "id": "PY-TOPIC-049-MCQ-06",
                "question": "What Python data type does a JSON 'null' value deserialize into?",
                "options": {"A": "False", "B": "None", "C": "0", "D": "'' (empty string)"},
                "correct": "B",
                "explanation": "JSON null maps to Python None."
            },
            {
                "id": "PY-TOPIC-049-MCQ-07",
                "question": "What method must be called on a database connection to save INSERT or UPDATE changes permanently?",
                "options": {"A": "conn.save()", "B": "conn.commit()", "C": "conn.flush()", "D": "conn.sync()"},
                "correct": "B",
                "explanation": "conn.commit() commits the active transaction to disk."
            },
            {
                "id": "PY-TOPIC-049-MCQ-08",
                "question": "What error occurs if you try to json.dumps() a Python set or custom class object directly?",
                "options": {"A": "Converts automatically to string", "B": "TypeError: Object of type ... is not JSON serializable", "C": "ValueError", "D": "Silent crash"},
                "correct": "B",
                "explanation": "Sets and custom objects lack default JSON representations, raising a TypeError."
            },
            {
                "id": "PY-TOPIC-049-MCQ-09",
                "question": "What database URL creates a temporary in-memory SQLite database that disappears on script exit?",
                "options": {"A": "sqlite3.connect(':memory:')", "B": "sqlite3.connect('temp.db')", "C": "sqlite3.connect(None)", "D": "sqlite3.connect('ram')"},
                "correct": "A",
                "explanation": "Passing ':memory:' creates a fast in-RAM database."
            },
            {
                "id": "PY-TOPIC-049-MCQ-10",
                "question": "What parameter in json.dumps() sorts dictionary keys alphabetically in the resulting JSON output?",
                "options": {"A": "sort_keys=True", "B": "ordered=True", "C": "alphabetical=True", "D": "keys_order='asc'"},
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
                "options": {"A": "pytest", "B": "unittest", "C": "testpy", "D": "asserts"},
                "correct": "B",
                "explanation": "unittest is Python's built-in testing framework."
            },
            {
                "id": "PY-TOPIC-050-MCQ-02",
                "question": "What naming convention must test methods follow in a unittest.TestCase class?",
                "options": {"A": "Must end with _test", "B": "Must start with test_ (e.g., test_addition)", "C": "Must be marked with @test", "D": "Any name works"},
                "correct": "B",
                "explanation": "The test runner discovers methods whose names start with the prefix 'test_'."
            },
            {
                "id": "PY-TOPIC-050-MCQ-03",
                "question": "What is the correct order of Python logging levels from lowest to highest severity?",
                "options": {"A": "INFO < DEBUG < WARNING < ERROR < CRITICAL", "B": "DEBUG < INFO < WARNING < ERROR < CRITICAL", "C": "WARNING < INFO < DEBUG < ERROR < CRITICAL", "D": "DEBUG < WARNING < INFO < ERROR < CRITICAL"},
                "correct": "B",
                "explanation": "The ascending severity order is DEBUG (10), INFO (20), WARNING (30), ERROR (40), CRITICAL (50)."
            },
            {
                "id": "PY-TOPIC-050-MCQ-04",
                "question": "What is the default threshold logging level if no configuration is specified?",
                "options": {"A": "DEBUG", "B": "INFO", "C": "WARNING", "D": "ERROR"},
                "correct": "C",
                "explanation": "By default, the root logger only outputs events of severity WARNING and above."
            },
            {
                "id": "PY-TOPIC-050-MCQ-05",
                "question": "Why is the logging module preferred over print() in production applications?",
                "options": {"A": "print() is deprecated", "B": "logging provides timestamps, severity levels, file output, rotation, and can be silenced without code changes", "C": "logging runs in C", "D": "print() causes memory leaks"},
                "correct": "B",
                "explanation": "Logging provides centralized configuration, formatting, filtering, and destination routing."
            },
            {
                "id": "PY-TOPIC-050-MCQ-06",
                "question": "In unittest, which fixture method runs BEFORE every individual test method?",
                "options": {"A": "setUpClass()", "B": "setUp()", "C": "beforeEach()", "D": "init()"},
                "correct": "B",
                "explanation": "setUp() is invoked immediately before calling each test method."
            },
            {
                "id": "PY-TOPIC-050-MCQ-07",
                "question": "In unittest, which fixture method runs AFTER every individual test method?",
                "options": {"A": "tearDown()", "B": "tearDownClass()", "C": "afterEach()", "D": "cleanup()"},
                "correct": "A",
                "explanation": "tearDown() runs immediately after each test method to clean up resources."
            },
            {
                "id": "PY-TOPIC-050-MCQ-08",
                "question": "What is the industry-standard third-party test runner preferred for its concise 'assert' syntax and powerful fixtures?",
                "options": {"A": "pytest", "B": "nose", "C": "testrail", "D": "pycheck"},
                "correct": "A",
                "explanation": "pytest is the most popular test framework in the Python ecosystem."
            },
            {
                "id": "PY-TOPIC-050-MCQ-09",
                "question": "How do you test that a piece of code raises a ValueError using unittest?",
                "options": {"A": "try-except block manually", "B": "with self.assertRaises(ValueError):", "C": "self.expectError(ValueError)", "D": "assert ValueError"},
                "correct": "B",
                "explanation": "self.assertRaises used as a context manager checks for expected exceptions."
            },
            {
                "id": "PY-TOPIC-050-MCQ-10",
                "question": "What does logging.getLogger(__name__) do?",
                "options": {"A": "Returns a unique logger scoped to the current module's namespace", "B": "Deletes the root logger", "C": "Prints the file name", "D": "Configures stdout"},
                "correct": "A",
                "explanation": "Using __name__ structures loggers hierarchically according to the module namespace."
            }
        ]
    }
]
