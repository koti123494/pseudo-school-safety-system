# Topics 21 to 30:
# 21. Modules & Packages
# 22. pip & Virtual Environment
# 23. OOP Concepts
# 24. Classes & Objects & self
# 25. Constructor (__init__)
# 26. Instance vs Class Variables
# 27. Instance vs Class vs Static Methods
# 28. Inheritance
# 29. Types of Inheritance
# 30. Method Overriding & Overloading

topics = [
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
                "options": {"A": "To declare a function as main", "B": "To ensure code only runs when executed directly, not when imported as a module", "C": "To compile the file into bytecode", "D": "To import standard libraries"},
                "correct": "B",
                "explanation": "When a module is imported, __name__ is set to the module's name instead of '__main__'."
            },
            {
                "id": "PY-TOPIC-021-MCQ-02",
                "question": "What file was historically required inside a folder to make Python treat it as a package?",
                "options": {"A": "__main__.py", "B": "__init__.py", "C": "__package__.py", "D": "package.json"},
                "correct": "B",
                "explanation": "__init__.py marks directories as regular Python packages and initializes package-level variables."
            },
            {
                "id": "PY-TOPIC-021-MCQ-03",
                "question": "Where does Python search for modules when an 'import' statement is encountered?",
                "options": {"A": "Only in the current directory", "B": "In directories listed in sys.path", "C": "In Windows registry", "D": "In the desktop folder"},
                "correct": "B",
                "explanation": "sys.path contains the list of directories Python searches for modules."
            },
            {
                "id": "PY-TOPIC-021-MCQ-04",
                "question": "Why is wildcard import (from math import *) generally discouraged in production code?",
                "options": {"A": "It slows down CPU calculation", "B": "It pollutes the current namespace and can overwrite existing names unpredictably", "C": "It is deprecated in Python 3", "D": "It throws ImportError"},
                "correct": "B",
                "explanation": "Wildcard imports make it unclear where names originated and risk name collisions."
            },
            {
                "id": "PY-TOPIC-021-MCQ-05",
                "question": "Which built-in function returns a list of all valid attributes and methods of a module?",
                "options": {"A": "help()", "B": "dir()", "C": "inspect()", "D": "list()"},
                "correct": "B",
                "explanation": "dir(module) lists all attributes and symbols defined inside that module."
            },
            {
                "id": "PY-TOPIC-021-MCQ-06",
                "question": "What happens when a module is imported multiple times in the same application process?",
                "options": {"A": "It is executed on every import", "B": "It is executed once and cached in sys.modules", "C": "Raises ModuleExistsError", "D": "Causes memory leak"},
                "correct": "B",
                "explanation": "Python caches imported modules in sys.modules, reusing them on subsequent imports."
            },
            {
                "id": "PY-TOPIC-021-MCQ-07",
                "question": "How can you force Python to re-execute and reload an already imported module?",
                "options": {"A": "reimport(module)", "B": "importlib.reload(module)", "C": "del module; import module", "D": "sys.refresh(module)"},
                "correct": "B",
                "explanation": "importlib.reload() forces re-execution of an existing module."
            },
            {
                "id": "PY-TOPIC-021-MCQ-08",
                "question": "What is the difference between relative and absolute imports in Python?",
                "options": {"A": "Relative imports use dots (from . import utils) based on current module location", "B": "Absolute imports are slower", "C": "Relative imports work outside packages", "D": "They are identical"},
                "correct": "A",
                "explanation": "Leading dots in relative imports specify navigation within the package hierarchy."
            },
            {
                "id": "PY-TOPIC-021-MCQ-09",
                "question": "What variable defined inside a module controls what symbols are exported on 'from module import *'?",
                "options": {"A": "__public__", "B": "__all__", "C": "__export__", "D": "__symbols__"},
                "correct": "B",
                "explanation": "__all__ is a list of strings defining names exported during wildcard import."
            },
            {
                "id": "PY-TOPIC-021-MCQ-10",
                "question": "What is a namespace package introduced in Python 3.3 (PEP 420)?",
                "options": {"A": "A package that does not require an __init__.py file", "B": "A package stored in cloud storage", "C": "A compiled C module", "D": "A package without files"},
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
                "options": {"A": "Python Installation Program", "B": "Pip Installs Packages (recursive acronym)", "C": "Package Index Python", "D": "Python Interface Protocol"},
                "correct": "B",
                "explanation": "pip is a recursive acronym for 'Pip Installs Packages'."
            },
            {
                "id": "PY-TOPIC-022-MCQ-02",
                "question": "Which standard command creates a new virtual environment named 'venv'?",
                "options": {"A": "python create venv", "B": "python -m venv venv", "C": "pip new venv", "D": "virtualenv make"},
                "correct": "B",
                "explanation": "'python -m venv venv' invokes the built-in venv module to create an environment directory."
            },
            {
                "id": "PY-TOPIC-022-MCQ-03",
                "question": "How do you install all packages listed in a requirements.txt file?",
                "options": {"A": "pip install requirements.txt", "B": "pip install -r requirements.txt", "C": "pip setup requirements.txt", "D": "python install requirements.txt"},
                "correct": "B",
                "explanation": "The -r flag directs pip to install dependencies from a requirements file."
            },
            {
                "id": "PY-TOPIC-022-MCQ-04",
                "question": "What command generates a list of all currently installed packages and their exact versions?",
                "options": {"A": "pip list -v", "B": "pip show", "C": "pip freeze", "D": "pip dump"},
                "correct": "C",
                "explanation": "pip freeze outputs installed packages in the standard package==version format."
            },
            {
                "id": "PY-TOPIC-022-MCQ-05",
                "question": "Why should you never commit the virtual environment folder (e.g. .venv) to git?",
                "options": {"A": "It contains binary executables and machine-specific file paths", "B": "It is encrypted", "C": "Git cannot handle folders", "D": "It deletes python installation"},
                "correct": "A",
                "explanation": "Virtual environments contain machine-dependent paths and platform binaries; commit requirements.txt instead."
            },
            {
                "id": "PY-TOPIC-022-MCQ-06",
                "question": "On Windows, which script activates a virtual environment named 'myenv'?",
                "options": {"A": "source myenv/bin/activate", "B": "myenv\\Scripts\\activate", "C": "run myenv", "D": "activate.exe"},
                "correct": "B",
                "explanation": "On Windows, activation scripts reside inside the Scripts/ folder."
            },
            {
                "id": "PY-TOPIC-022-MCQ-07",
                "question": "What command deactivates the current active virtual environment?",
                "options": {"A": "exit", "B": "stop", "C": "deactivate", "D": "quit()"},
                "correct": "C",
                "explanation": "The shell function 'deactivate' restores the system's default environment and PATH."
            },
            {
                "id": "PY-TOPIC-022-MCQ-08",
                "question": "What is PyPI?",
                "options": {"A": "Python Programming Interface", "B": "The Python Package Index (official third-party software repository)", "C": "A Python compiler", "D": "A math library for pi calculations"},
                "correct": "B",
                "explanation": "PyPI (Python Package Index) is the official public repository for third-party Python packages."
            },
            {
                "id": "PY-TOPIC-022-MCQ-09",
                "question": "How do you upgrade an existing package to its latest version using pip?",
                "options": {"A": "pip update package_name", "B": "pip install --upgrade package_name", "C": "pip refresh package_name", "D": "pip latest package_name"},
                "correct": "B",
                "explanation": "The --upgrade (or -U) flag updates installed packages to the newest version."
            },
            {
                "id": "PY-TOPIC-022-MCQ-10",
                "question": "What does a '.whl' file represent in Python packaging?",
                "options": {"A": "A Python wheel (pre-built binary distribution package)", "B": "A raw source code archive", "C": "A Windows Help file", "D": "A white-box test script"},
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
                "options": {"A": "Encapsulation", "B": "Polymorphism", "C": "Compilation", "D": "Abstraction"},
                "correct": "C",
                "explanation": "Compilation is a language implementation process, not an OOP pillar."
            },
            {
                "id": "PY-TOPIC-023-MCQ-02",
                "question": "What is the relationship between a Class and an Object in OOP?",
                "options": {"A": "An Object is a blueprint for a Class", "B": "A Class is a template/blueprint; an Object is an instance created from it", "C": "They are synonymous terms", "D": "A Class is created at runtime from an Object"},
                "correct": "B",
                "explanation": "Classes define the schema; objects are concrete runtime instances."
            },
            {
                "id": "PY-TOPIC-023-MCQ-03",
                "question": "Which OOP concept hides internal complexity and exposes only essential features?",
                "options": {"A": "Inheritance", "B": "Abstraction", "C": "Association", "D": "Aggregation"},
                "correct": "B",
                "explanation": "Abstraction hides background details and only displays essential functionality to users."
            },
            {
                "id": "PY-TOPIC-023-MCQ-04",
                "question": "Which OOP principle allows one class to acquire properties and methods of another class?",
                "options": {"A": "Polymorphism", "B": "Inheritance", "C": "Encapsulation", "D": "Composition"},
                "correct": "B",
                "explanation": "Inheritance enables code reuse by deriving child classes from parents."
            },
            {
                "id": "PY-TOPIC-023-MCQ-05",
                "question": "What is polymorphism in Python?",
                "options": {"A": "Creating multiple objects of a class", "B": "The ability of different classes to respond to the same method call in their own specific way", "C": "Writing multiple scripts in one file", "D": "Converting data types"},
                "correct": "B",
                "explanation": "Polymorphism allows different types to be treated through a uniform interface."
            },
            {
                "id": "PY-TOPIC-023-MCQ-06",
                "question": "What is Encapsulation?",
                "options": {"A": "Restricting access to methods and bundling state together", "B": "Running code in multiple threads", "C": "Inheriting from multiple parents", "D": "Overriding constructors"},
                "correct": "A",
                "explanation": "Encapsulation wraps data and methods into a single unit while restricting direct external access."
            },
            {
                "id": "PY-TOPIC-023-MCQ-07",
                "question": "What design philosophy describes Python's dynamic typing: 'If it walks like a duck and quacks like a duck, it is a duck'?",
                "options": {"A": "Strong encapsulation", "B": "Duck Typing", "C": "Static dispatch", "D": "Nominal subtyping"},
                "correct": "B",
                "explanation": "Duck typing relies on an object's methods and properties rather than its explicit class hierarchy."
            },
            {
                "id": "PY-TOPIC-023-MCQ-08",
                "question": "Is Python strictly an Object-Oriented language?",
                "options": {"A": "Yes, everything must be inside a class", "B": "No, Python is a multi-paradigm language supporting procedural and functional styles too", "C": "Python has no OOP support", "D": "Only starting in Python 3"},
                "correct": "B",
                "explanation": "Python supports multiple paradigms: OOP, procedural, and functional programming."
            },
            {
                "id": "PY-TOPIC-023-MCQ-09",
                "question": "What is the relationship called when an object contains other objects (e.g. Car 'has-a' Engine)?",
                "options": {"A": "Inheritance (is-a)", "B": "Composition (has-a)", "C": "Polymorphism", "D": "Generalization"},
                "correct": "B",
                "explanation": "Composition models 'has-a' relationships by assembling objects."
            },
            {
                "id": "PY-TOPIC-023-MCQ-10",
                "question": "In Python, is everything (including integers, functions, and modules) an object?",
                "options": {"A": "No, primitives like int and float are not objects", "B": "Yes, in Python virtually all entities are first-class objects", "C": "Only classes are objects", "D": "Functions are not objects"},
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
                "options": {"A": "The class definition itself", "B": "The specific instance of the class calling the method", "C": "A global variable", "D": "The parent class"},
                "correct": "B",
                "explanation": "self represents the current object instance invoking the method."
            },
            {
                "id": "PY-TOPIC-024-MCQ-02",
                "question": "Is the name 'self' a mandatory keyword in Python syntax?",
                "options": {"A": "Yes, changing it causes SyntaxError", "B": "No, it is a strong PEP 8 convention; any identifier name can be used as the first parameter", "C": "Mandatory only in __init__", "D": "Mandatory in Python 3"},
                "correct": "B",
                "explanation": "While 'self' is the universal convention, any parameter name (like 'this') works syntactically."
            },
            {
                "id": "PY-TOPIC-024-MCQ-03",
                "question": "When you call obj.method(arg), what is actually executed under the hood?",
                "options": {"A": "method(obj, arg)", "B": "Class.method(obj, arg)", "C": "self.method(arg)", "D": "call(obj, method, arg)"},
                "correct": "B",
                "explanation": "Python translates obj.method(arg) to Class.method(obj, arg), binding obj to self."
            },
            {
                "id": "PY-TOPIC-024-MCQ-04",
                "question": "What happens if you define an instance method without the 'self' parameter and call it on an object?",
                "options": {"A": "It executes normally", "B": "TypeError: method() takes 0 positional arguments but 1 was given", "C": "It becomes a static method automatically", "D": "AttributeError"},
                "correct": "B",
                "explanation": "Python automatically supplies the instance as the first argument, causing an argument count mismatch."
            },
            {
                "id": "PY-TOPIC-024-MCQ-05",
                "question": "Where are an instance's attributes stored internally in CPython?",
                "options": {"A": "In a tuple", "B": "In the instance's __dict__ attribute", "C": "In an external database", "D": "In a binary array"},
                "correct": "B",
                "explanation": "Each instance has a __dict__ mapping attribute names to their values."
            },
            {
                "id": "PY-TOPIC-024-MCQ-06",
                "question": "How do you check if an object is an instance of a particular class?",
                "options": {"A": "isinstance(obj, ClassName)", "B": "obj.isClass(ClassName)", "C": "type(obj) == ClassName only", "D": "hasinstance(obj, ClassName)"},
                "correct": "A",
                "explanation": "isinstance() checks if an object is an instance of a class or any of its subclasses."
            },
            {
                "id": "PY-TOPIC-024-MCQ-07",
                "question": "What built-in function checks if an object has a given attribute?",
                "options": {"A": "hasattr(obj, 'attr')", "B": "getattr(obj, 'attr')", "C": "contains(obj, 'attr')", "D": "obj.has('attr')"},
                "correct": "A",
                "explanation": "hasattr() returns True if the specified attribute string exists on the object."
            },
            {
                "id": "PY-TOPIC-024-MCQ-08",
                "question": "Can you dynamically add a new attribute to an existing Python object at runtime?",
                "options": {"A": "No, class schemas are locked", "B": "Yes, e.g. obj.new_attr = 42", "C": "Only if defined in __init__", "D": "Only with __slots__"},
                "correct": "B",
                "explanation": "Python objects are dynamic; setting obj.attr = val adds the entry to obj.__dict__."
            },
            {
                "id": "PY-TOPIC-024-MCQ-09",
                "question": "What does __slots__ do when declared inside a class?",
                "options": {"A": "Restricts valid attributes to a fixed set and removes __dict__, saving substantial memory", "B": "Enforces type checking", "C": "Generates getters and setters", "D": "Prevents inheritance"},
                "correct": "A",
                "explanation": "__slots__ optimizes memory by allocating a fixed array instead of a dynamic dictionary."
            },
            {
                "id": "PY-TOPIC-024-MCQ-10",
                "question": "What is the output of:\nclass A:\n    pass\na = A()\nprint(type(a) is A)",
                "options": {"A": "False", "B": "True", "C": "None", "D": "TypeError"},
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
                "options": {"A": "The newly created object", "B": "None (returning any other value raises TypeError)", "C": "self", "D": "boolean True"},
                "correct": "B",
                "explanation": "__init__ must return None; returning a value raises TypeError: __init__() should return None."
            },
            {
                "id": "PY-TOPIC-025-MCQ-02",
                "question": "Which method is the actual object allocator in Python, called BEFORE __init__?",
                "options": {"A": "__construct__", "B": "__new__", "C": "__create__", "D": "__alloc__"},
                "correct": "B",
                "explanation": "__new__ is the static method responsible for allocating the new instance in memory."
            },
            {
                "id": "PY-TOPIC-025-MCQ-03",
                "question": "Can a class have multiple overloaded __init__ methods with different parameters in Python?",
                "options": {"A": "Yes, standard OOP overloading applies", "B": "No, the latest defined __init__ simply overwrites any previous definitions", "C": "Only if decorated with @overload", "D": "Yes, up to 3"},
                "correct": "B",
                "explanation": "Python does not support traditional method overloading; defining another __init__ replaces the earlier one."
            },
            {
                "id": "PY-TOPIC-025-MCQ-04",
                "question": "How do you achieve constructor overloading behavior in Python idiomatic design?",
                "options": {"A": "Using default parameter values or @classmethod alternative constructors", "B": "Writing multiple class blocks", "C": "Using duplicate __init__ names", "D": "It is impossible"},
                "correct": "A",
                "explanation": "Default arguments and @classmethod factory methods (e.g. from_dict) provide flexible initialization."
            },
            {
                "id": "PY-TOPIC-025-MCQ-05",
                "question": "What happens if a class does not define an __init__ method?",
                "options": {"A": "Objects cannot be instantiated", "B": "It automatically inherits the default __init__ from base 'object' class", "C": "SyntaxError", "D": "Causes crash at runtime"},
                "correct": "B",
                "explanation": "Every Python class inherits from object, which provides a default no-argument __init__."
            },
            {
                "id": "PY-TOPIC-025-MCQ-06",
                "question": "What is the output of:\nclass A:\n    def __init__(self):\n        print('Init', end=' ')\na1 = A()\na2 = A()",
                "options": {"A": "Init ", "B": "Init Init ", "C": "Nothing", "D": "Error"},
                "correct": "B",
                "explanation": "__init__ runs once for each created instance, printing 'Init ' twice."
            },
            {
                "id": "PY-TOPIC-025-MCQ-07",
                "question": "How should a subclass call its parent class's __init__ method?",
                "options": {"A": "parent.__init__()", "B": "super().__init__(*args)", "C": "this.__init__()", "D": "base.init()"},
                "correct": "B",
                "explanation": "super().__init__() calls the parent class constructor following MRO."
            },
            {
                "id": "PY-TOPIC-025-MCQ-08",
                "question": "Can __init__ accept *args and **kwargs?",
                "options": {"A": "No, only fixed parameters", "B": "Yes, enabling flexible parameter passing", "C": "Only in Python 3.10+", "D": "Only **kwargs"},
                "correct": "B",
                "explanation": "__init__ is a regular method and accepts *args and **kwargs for flexible initialization."
            },
            {
                "id": "PY-TOPIC-025-MCQ-09",
                "question": "What error occurs if you call A() when __init__(self, x) requires an argument x?",
                "options": {"A": "ValueError", "B": "TypeError: missing 1 required positional argument: 'x'", "C": "IndexError", "D": "AttributeError"},
                "correct": "B",
                "explanation": "Omitting required arguments to __init__ raises a TypeError."
            },
            {
                "id": "PY-TOPIC-025-MCQ-10",
                "question": "What is the purpose of the __del__ method in Python?",
                "options": {"A": "It is an alternative constructor", "B": "It is a destructor called when the object is about to be garbage collected", "C": "Deletes attributes", "D": "Clears dictionary"},
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
                "options": {"A": "Inside the __init__ method using self", "B": "Directly inside the class body outside any method", "C": "In the global scope", "D": "In a separate config file"},
                "correct": "B",
                "explanation": "Class variables are declared directly inside the class definition."
            },
            {
                "id": "PY-TOPIC-026-MCQ-02",
                "question": "What happens when you execute 'instance.class_var = new_val'?",
                "options": {"A": "Modifies class variable for all instances", "B": "Creates an instance variable on that specific object shadowing the class variable", "C": "Raises AttributeError", "D": "Deletes the variable"},
                "correct": "B",
                "explanation": "Assignment on an instance creates a local instance attribute, hiding the class attribute on that instance."
            },
            {
                "id": "PY-TOPIC-026-MCQ-03",
                "question": "How should a class variable be modified to ensure the change is visible to all instances?",
                "options": {"A": "self.class_var = val", "B": "ClassName.class_var = val", "C": "global class_var = val", "D": "update(class_var)"},
                "correct": "B",
                "explanation": "Accessing and reassigning via the class name updates the shared class attribute."
            },
            {
                "id": "PY-TOPIC-026-MCQ-04",
                "question": "What is the danger of using a mutable class variable like 'items = []'?",
                "options": {"A": "SyntaxError", "B": "Mutating instance.items.append(x) mutates the single list shared across all instances", "C": "Items are erased on every instance creation", "D": "Only stores strings"},
                "correct": "B",
                "explanation": "Because class variables are shared, mutating a shared mutable object affects all instances."
            },
            {
                "id": "PY-TOPIC-026-MCQ-05",
                "question": "What is the output of:\nclass A:\n    x = 1\na = A()\nA.x = 2\nprint(a.x)",
                "options": {"A": "1", "B": "2", "C": "None", "D": "AttributeError"},
                "correct": "B",
                "explanation": "'a' does not have its own 'x', so it falls back to looking up A.x, which is now 2."
            },
            {
                "id": "PY-TOPIC-026-MCQ-06",
                "question": "In attribute lookup order, which has higher priority on an instance?",
                "options": {"A": "Class attribute", "B": "Instance attribute (in instance.__dict__)", "C": "Global variable", "D": "Built-in attribute"},
                "correct": "B",
                "explanation": "Python checks instance.__dict__ first before falling back to Class.__dict__."
            },
            {
                "id": "PY-TOPIC-026-MCQ-07",
                "question": "Can you access a class variable using the Class name directly without creating an object?",
                "options": {"A": "Yes, e.g. ClassName.variable", "B": "No, an object must be instantiated first", "C": "Only inside methods", "D": "Only with staticmethod"},
                "correct": "A",
                "explanation": "Class variables exist on the class object and do not require instantiation."
            },
            {
                "id": "PY-TOPIC-026-MCQ-08",
                "question": "What is the output of:\nclass Test:\n    count = 0\nt1 = Test()\nt1.count += 1\nprint(Test.count, t1.count)",
                "options": {"A": "1 1", "B": "0 1", "C": "0 0", "D": "1 0"},
                "correct": "B",
                "explanation": "t1.count += 1 evaluates t1.count (0) + 1 = 1, and assigns to instance variable t1.count. Test.count remains 0."
            },
            {
                "id": "PY-TOPIC-026-MCQ-09",
                "question": "Where are class variables stored internally?",
                "options": {"A": "In ClassName.__dict__", "B": "In sys.modules", "C": "In globals()", "D": "In the instance buffer"},
                "correct": "A",
                "explanation": "Class variables are entries in the class object's mappingproxy (__dict__)."
            },
            {
                "id": "PY-TOPIC-026-MCQ-10",
                "question": "Which of the following is typically stored as a class variable?",
                "options": {"A": "User's individual password", "B": "Constants, default configurations, or shared instance counters", "C": "Customer's credit card number", "D": "Temporary loop variables"},
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
                "options": {"A": "self (the instance)", "B": "cls (the class itself)", "C": "None", "D": "super"},
                "correct": "B",
                "explanation": "@classmethod receives the class object as its first argument, conventionally named cls."
            },
            {
                "id": "PY-TOPIC-027-MCQ-02",
                "question": "Does a @staticmethod receive an implicit first argument like self or cls?",
                "options": {"A": "Yes, it receives self", "B": "Yes, it receives cls", "C": "No, it receives neither and behaves like a regular function scoped inside the class", "D": "It receives global scope"},
                "correct": "C",
                "explanation": "Static methods receive only the explicit arguments passed to them."
            },
            {
                "id": "PY-TOPIC-027-MCQ-03",
                "question": "What is the primary use case for a @classmethod?",
                "options": {"A": "Writing mathematical utilities", "B": "Alternative constructors (factory methods) and accessing/modifying class state", "C": "Speeding up CPU execution", "D": "Creating private variables"},
                "correct": "B",
                "explanation": "Class methods are most commonly used to write alternative factory constructors."
            },
            {
                "id": "PY-TOPIC-027-MCQ-04",
                "question": "Can an instance method call a class method or static method?",
                "options": {"A": "Yes, using self.method_name() or ClassName.method_name()", "B": "No, forbidden in Python", "C": "Only with super()", "D": "Only static methods"},
                "correct": "A",
                "explanation": "Instances can access class and static methods directly through self or the class name."
            },
            {
                "id": "PY-TOPIC-027-MCQ-05",
                "question": "Can you call a @staticmethod through an instance object: obj.my_static()?",
                "options": {"A": "No, only via ClassName.my_static()", "B": "Yes, Python allows calling static methods via both class and instance", "C": "Raises TypeError", "D": "Only if __init__ returned self"},
                "correct": "B",
                "explanation": "Static methods can be called on either the class or an instance."
            },
            {
                "id": "PY-TOPIC-027-MCQ-06",
                "question": "What decorator marks a method as receiving the class object as its first parameter?",
                "options": {"A": "@class", "B": "@classmethod", "C": "@static", "D": "@instancemethod"},
                "correct": "B",
                "explanation": "The built-in decorator @classmethod binds the class to the method."
            },
            {
                "id": "PY-TOPIC-027-MCQ-07",
                "question": "Why is 'cls(args)' preferred over 'ClassName(args)' inside a @classmethod factory?",
                "options": {"A": "It runs faster", "B": "It ensures that if the class is subclassed, the factory returns an instance of the subclass", "C": "It bypasses __init__", "D": "It uses less memory"},
                "correct": "B",
                "explanation": "Using cls respects inheritance polymorphism, instantiating the correct subclass."
            },
            {
                "id": "PY-TOPIC-027-MCQ-08",
                "question": "Can a static method modify instance variables (self.x)?",
                "options": {"A": "Yes, always", "B": "No, because it does not receive self", "C": "Only if passed self explicitly as an argument", "D": "Both B and C are correct"},
                "correct": "D",
                "explanation": "Static methods have no implicit self; they can only touch an instance if passed one explicitly."
            },
            {
                "id": "PY-TOPIC-027-MCQ-09",
                "question": "Which method type should you choose for a helper function that doesn't read or write any class or instance attributes?",
                "options": {"A": "Instance method", "B": "@classmethod", "C": "@staticmethod (or module-level function)", "D": "Abstract method"},
                "correct": "C",
                "explanation": "Self-contained helpers that do not require state are best implemented as static methods."
            },
            {
                "id": "PY-TOPIC-027-MCQ-10",
                "question": "What is the output of:\nclass A:\n    @staticmethod\n    def f(x):\n        return x * 2\nprint(A.f(5))",
                "options": {"A": "10", "B": "TypeError", "C": "None", "D": "5"},
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
                "options": {"A": "class Child extends Parent:", "B": "class Child(Parent):", "C": "class Child : Parent:", "D": "class Child inherits Parent:"},
                "correct": "B",
                "explanation": "Python specifies base classes in parentheses after the class name."
            },
            {
                "id": "PY-TOPIC-028-MCQ-02",
                "question": "What is the ultimate root base class of all objects in Python 3?",
                "options": {"A": "Base", "B": "object", "C": "Root", "D": "Type"},
                "correct": "B",
                "explanation": "All classes in Python 3 inherit directly or indirectly from 'object'."
            },
            {
                "id": "PY-TOPIC-028-MCQ-03",
                "question": "Which built-in function checks whether one class is a derived subclass of another?",
                "options": {"A": "isinstance()", "B": "issubclass(Child, Parent)", "C": "childof()", "D": "hasparent()"},
                "correct": "B",
                "explanation": "issubclass(sub, sup) tests class inheritance relationships."
            },
            {
                "id": "PY-TOPIC-028-MCQ-04",
                "question": "What happens if a child class defines a method with the exact same name as a method in its parent class?",
                "options": {"A": "SyntaxError", "B": "Method overriding: the child's version executes when called on child instances", "C": "Both methods execute together", "D": "Parent method is permanently deleted"},
                "correct": "B",
                "explanation": "The child class overrides the parent method."
            },
            {
                "id": "PY-TOPIC-028-MCQ-05",
                "question": "If class B inherits from class A, does isinstance(B(), A) evaluate to True?",
                "options": {"A": "Yes, an instance of a subclass is also an instance of its parent classes", "B": "No, only isinstance(B(), B) is True", "C": "Raises TypeError", "D": "Only if A has no methods"},
                "correct": "A",
                "explanation": "isinstance() respects the inheritance tree, returning True for parent classes."
            },
            {
                "id": "PY-TOPIC-028-MCQ-06",
                "question": "What attribute reveals the direct base classes of a class?",
                "options": {"A": "ClassName.__bases__", "B": "ClassName.__parents__", "C": "ClassName.__super__", "D": "ClassName.__root__"},
                "correct": "A",
                "explanation": "__bases__ is a tuple containing the immediate base classes of the class."
            },
            {
                "id": "PY-TOPIC-028-MCQ-07",
                "question": "Does Python support private inheritance (inheriting without exposing methods)?",
                "options": {"A": "Yes, using private keyword", "B": "No, all inheritance in Python is public", "C": "Only with __slots__", "D": "Yes, in Python 3.12"},
                "correct": "B",
                "explanation": "Python does not have C++-style access specifiers for inheritance; all inheritance is public."
            },
            {
                "id": "PY-TOPIC-028-MCQ-08",
                "question": "What is the primary benefit of inheritance in software design?",
                "options": {"A": "Code reuse and establishing polymorphic hierarchies", "B": "Reducing memory usage to zero", "C": "Faster internet networking", "D": "Eliminating variables"},
                "correct": "A",
                "explanation": "Inheritance promotes code reuse and simplifies polymorphic interfaces."
            },
            {
                "id": "PY-TOPIC-028-MCQ-09",
                "question": "What design guideline suggests 'favor composition over inheritance'?",
                "options": {"A": "Deep inheritance hierarchies become fragile and rigid; composition offers greater flexibility", "B": "Inheritance is deprecated", "C": "Composition runs on GPU", "D": "Classes cannot inherit more than once"},
                "correct": "A",
                "explanation": "Composition ('has-a') is often looser and more maintainable than rigid inheritance ('is-a')."
            },
            {
                "id": "PY-TOPIC-028-MCQ-10",
                "question": "What is the output of:\nclass P:\n    x = 10\nclass C(P):\n    pass\nprint(C.x)",
                "options": {"A": "10", "B": "None", "C": "AttributeError", "D": "0"},
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
                "options": {"A": "Multilevel inheritance", "B": "Multiple inheritance", "C": "Hierarchical inheritance", "D": "Single inheritance"},
                "correct": "B",
                "explanation": "Multiple inheritance allows a class to inherit from multiple parent classes (class C(A, B))."
            },
            {
                "id": "PY-TOPIC-029-MCQ-02",
                "question": "Does Java support multiple class inheritance, and does Python support it?",
                "options": {"A": "Java supports it; Python does not", "B": "Python natively supports multiple class inheritance; Java does not (classes only)", "C": "Neither supports it", "D": "Both support it identically"},
                "correct": "B",
                "explanation": "Python natively supports multiple inheritance for classes using the C3 linearization algorithm."
            },
            {
                "id": "PY-TOPIC-029-MCQ-03",
                "question": "What is the classic problem associated with multiple inheritance often called?",
                "options": {"A": "The Circle of Death", "B": "The Diamond Problem", "C": "The Pyramid Trap", "D": "The Triangle Hazard"},
                "correct": "B",
                "explanation": "The Diamond Problem occurs when two parent classes inherit from the same grandparent."
            },
            {
                "id": "PY-TOPIC-029-MCQ-04",
                "question": "What is Multilevel Inheritance?",
                "options": {"A": "A class inheriting from multiple unrelated classes", "B": "A chain of inheritance where a derived class acts as a base class for another class (A -> B -> C)", "C": "One class having multiple methods", "D": "Multiple instances of a class"},
                "correct": "B",
                "explanation": "Multilevel inheritance forms an ancestral hierarchy across tiers."
            },
            {
                "id": "PY-TOPIC-029-MCQ-05",
                "question": "What type of inheritance is represented by: class Dog(Animal) and class Cat(Animal)?",
                "options": {"A": "Hierarchical inheritance", "B": "Multiple inheritance", "C": "Cyclic inheritance", "D": "Singular inheritance"},
                "correct": "A",
                "explanation": "Hierarchical inheritance features multiple sibling subclasses deriving from a common base."
            },
            {
                "id": "PY-TOPIC-029-MCQ-06",
                "question": "Can a class in Python inherit from itself directly: class A(A)?",
                "options": {"A": "Yes", "B": "No, raises NameError or TypeError: cycle in class hierarchy", "C": "Only if abstract", "D": "Only with super()"},
                "correct": "B",
                "explanation": "Cyclic inheritance is illegal and causes an error."
            },
            {
                "id": "PY-TOPIC-029-MCQ-07",
                "question": "What is Hybrid Inheritance?",
                "options": {"A": "Inheriting between C++ and Python", "B": "A combination of two or more different inheritance types in a single class hierarchy", "C": "Inheriting without methods", "D": "Inheritance involving modules"},
                "correct": "B",
                "explanation": "Hybrid inheritance blends multiple forms (e.g. multiple + hierarchical)."
            },
            {
                "id": "PY-TOPIC-029-MCQ-08",
                "question": "In class C(A, B), which parent's method is searched first if both define method m()?",
                "options": {"A": "Class B", "B": "Class A (left-to-right order)", "C": "Random", "D": "Raises ambiguity error"},
                "correct": "B",
                "explanation": "Python searches left-to-right following MRO, checking A before B."
            },
            {
                "id": "PY-TOPIC-029-MCQ-09",
                "question": "What algorithm resolves method lookups in Python's multiple inheritance?",
                "options": {"A": "Dijkstra's Algorithm", "B": "C3 Linearization (MRO)", "C": "Depth-First Search exclusively", "D": "Breadth-First Search exclusively"},
                "correct": "B",
                "explanation": "Python 2.3+ uses the C3 Linearization algorithm to compute a deterministic MRO."
            },
            {
                "id": "PY-TOPIC-029-MCQ-10",
                "question": "What is a 'Mixin' class in Python multiple inheritance design?",
                "options": {"A": "A standalone class meant to provide optional functionality to other classes without being instantiated on its own", "B": "A class with no methods", "C": "A replacement for modules", "D": "A database ORM"},
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
                "options": {"A": "Yes, identical behavior", "B": "No, writing another method with the same name overwrites the previous definition", "C": "Only in subclasses", "D": "Only with numbers"},
                "correct": "B",
                "explanation": "In Python, method definitions bind the name to the latest function object, replacing any prior definition."
            },
            {
                "id": "PY-TOPIC-030-MCQ-02",
                "question": "What is Method Overriding in Python?",
                "options": {"A": "Defining two methods with the same name in the same class", "B": "Redefining a method in a child class that already exists in the parent class", "C": "Deleting a method", "D": "Renaming a method at runtime"},
                "correct": "B",
                "explanation": "Overriding allows a child class to supply its own implementation of an inherited parent method."
            },
            {
                "id": "PY-TOPIC-030-MCQ-03",
                "question": "How can you invoke the parent class's version of an overridden method from the child class?",
                "options": {"A": "super().method_name()", "B": "parent.method_name()", "C": "this.super.method_name()", "D": "base.method_name()"},
                "correct": "A",
                "explanation": "super().method() executes the parent class implementation."
            },
            {
                "id": "PY-TOPIC-030-MCQ-04",
                "question": "Which module in Python's standard library provides the @singledispatch decorator for function overloading based on argument type?",
                "options": {"A": "itertools", "B": "functools", "C": "typing", "D": "operator"},
                "correct": "B",
                "explanation": "functools.singledispatch transforms a function into a generic function supporting type-based dispatch."
            },
            {
                "id": "PY-TOPIC-030-MCQ-05",
                "question": "What is the output of:\nclass A:\n    def f(self, x):\n        return x\n    def f(self, x, y):\n        return x + y\na = A()\nprint(a.f(5, 10))",
                "options": {"A": "15", "B": "5", "C": "TypeError: f() takes 1 positional argument", "D": "SyntaxError"},
                "correct": "A",
                "explanation": "The second definition f(self, x, y) replaced the first, successfully accepting (5, 10) and returning 15."
            },
            {
                "id": "PY-TOPIC-030-MCQ-06",
                "question": "In the code from the previous question, what happens if you call a.f(5)?",
                "options": {"A": "Returns 5", "B": "TypeError: missing 1 required positional argument: 'y'", "C": "Returns 0", "D": "Returns None"},
                "correct": "B",
                "explanation": "Because the single-argument version was overwritten, calling a.f(5) fails to supply required parameter y."
            },
            {
                "id": "PY-TOPIC-030-MCQ-07",
                "question": "What is the recommended idiomatic way to handle varying numbers of arguments in a Python method?",
                "options": {"A": "Write multiple definitions", "B": "Use default parameter values (e.g. param=None) or *args", "C": "Use eval()", "D": "Pass a string"},
                "correct": "B",
                "explanation": "Default values and *args offer clean, flexible parameter handling without multiple definitions."
            },
            {
                "id": "PY-TOPIC-030-MCQ-08",
                "question": "Can static methods be overridden in subclasses in Python?",
                "options": {"A": "Yes, a subclass can define a static method of the same name", "B": "No, static methods cannot be touched", "C": "Only if decorated with @classmethod", "D": "Raises RuntimeError"},
                "correct": "A",
                "explanation": "Static methods are regular attributes and can be overridden by a subclass."
            },
            {
                "id": "PY-TOPIC-030-MCQ-09",
                "question": "What does the @typing.overload decorator do in Python?",
                "options": {"A": "Performs runtime overloading checks", "B": "Provides type signatures solely for static type checkers (Mypy) without implementing runtime behavior", "C": "Overloads operators", "D": "Speeds up code"},
                "correct": "B",
                "explanation": "typing.overload is purely an annotation tool for type checkers; it has no runtime implementation effect."
            },
            {
                "id": "PY-TOPIC-030-MCQ-10",
                "question": "When overriding a method in a subclass, is it mandatory to keep the exact same number of parameters as the parent class?",
                "options": {"A": "Yes, mandatory or SyntaxError", "B": "No, Python does not enforce signature matching, though violating it may break Liskov Substitution Principle", "C": "Mandatory only in __init__", "D": "Enforced by compiler"},
                "correct": "B",
                "explanation": "Python allows differing signatures, but doing so can violate LSP design principles."
            }
        ]
    }
]
