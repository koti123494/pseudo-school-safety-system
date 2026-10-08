# Topics 31 to 40:
# 31. Polymorphism
# 32. Encapsulation
# 33. Abstraction
# 34. super()
# 35. Access Modifiers
# 36. Magic/Dunder Methods
# 37. MRO
# 38. Iterators
# 39. Generators & yield
# 40. Decorators

topics = [
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
                "options": {"A": "Many forms", "B": "Single inheritance", "C": "Multiple threads", "D": "Hidden data"},
                "correct": "A",
                "explanation": "Polymorphism comes from Greek meaning 'having multiple forms'."
            },
            {
                "id": "PY-TOPIC-031-MCQ-02",
                "question": "What is 'Duck Typing' in Python?",
                "options": {"A": "A type-checking library", "B": "Checking an object for required methods at runtime rather than verifying its explicit class type", "C": "Creating classes named Duck", "D": "Static compilation typing"},
                "correct": "B",
                "explanation": "Duck typing focuses on whether an object can perform the requested action, not its ancestry."
            },
            {
                "id": "PY-TOPIC-031-MCQ-03",
                "question": "How does the built-in len() function achieve polymorphism across diverse data types?",
                "options": {"A": "Hardcoded type switches in C", "B": "By delegating internally to the object's __len__() magic method", "C": "Converting everything to lists", "D": "Using multi-threading"},
                "correct": "B",
                "explanation": "len(obj) calls obj.__len__(), enabling any custom class to define its own length behavior."
            },
            {
                "id": "PY-TOPIC-031-MCQ-04",
                "question": "Which of the following demonstrates compile-time polymorphism in Python?",
                "options": {"A": "Operator overloading", "B": "Method overriding", "C": "Python only resolves polymorphism dynamically at runtime", "D": "Virtual tables"},
                "correct": "C",
                "explanation": "Python is dynamically interpreted, resolving polymorphic dispatch at runtime."
            },
            {
                "id": "PY-TOPIC-031-MCQ-05",
                "question": "What happens if a polymorphic function calls obj.speak() on an object that lacks a 'speak' method?",
                "options": {"A": "Returns None", "B": "Raises AttributeError: '...' object has no attribute 'speak'", "C": "Calls parent method automatically", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "If the attribute does not exist on the object, Python raises an AttributeError."
            },
            {
                "id": "PY-TOPIC-031-MCQ-06",
                "question": "Which Python protocol enables iteration polymorphism (for item in obj:)?",
                "options": {"A": "__iter__() and __next__()", "B": "__loop__()", "C": "__repeat__()", "D": "__step__()"},
                "correct": "A",
                "explanation": "The iterator protocol relies on __iter__() and __next__()."
            },
            {
                "id": "PY-TOPIC-031-MCQ-07",
                "question": "Can two unrelated classes (no shared parent class) behave polymorphically in Python?",
                "options": {"A": "No, they must share an abstract base class", "B": "Yes, Duck Typing allows any classes implementing the same method names to be used interchangeably", "C": "Only if defined in the same file", "D": "Only with decorators"},
                "correct": "B",
                "explanation": "Duck typing does not require a shared base class; having compatible methods is sufficient."
            },
            {
                "id": "PY-TOPIC-031-MCQ-08",
                "question": "What is Operator Overloading in Python?",
                "options": {"A": "Running too many math operations causing overflow", "B": "Redefining built-in operators (+, -, *, ==) for user-defined classes using dunder methods", "C": "Overwriting keyword names", "D": "Using lambda expressions"},
                "correct": "B",
                "explanation": "Operator overloading maps operator symbols to special dunder methods like __add__ and __eq__."
            },
            {
                "id": "PY-TOPIC-031-MCQ-09",
                "question": "Which magic method must be implemented to overload the '+' operator for a custom class?",
                "options": {"A": "__plus__", "B": "__add__", "C": "__sum__", "D": "__append__"},
                "correct": "B",
                "explanation": "Implementing __add__(self, other) overloads the '+' binary addition operator."
            },
            {
                "id": "PY-TOPIC-031-MCQ-10",
                "question": "What is the primary benefit of polymorphism in software architecture?",
                "options": {"A": "Decouples client code from concrete implementations, making systems extensible and modular", "B": "Reduces variable counts", "C": "Increases execution speed by 10x", "D": "Compresses memory"},
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
                "options": {"A": "Hardware memory encryption", "B": "Name Mangling (renamed to _ClassName__attribute)", "C": "Strict C-style private lock", "D": "Deletion of the attribute"},
                "correct": "B",
                "explanation": "Double underscores activate name mangling, transforming the name to prevent collision in subclasses."
            },
            {
                "id": "PY-TOPIC-032-MCQ-02",
                "question": "What is the convention for indicating an attribute is 'protected' (intended for internal use only)?",
                "options": {"A": "Single leading underscore (e.g., _internal_var)", "B": "Double trailing underscore (var__)", "C": "protected keyword", "D": "All uppercase names"},
                "correct": "A",
                "explanation": "A single leading underscore is the universal Python convention indicating non-public API."
            },
            {
                "id": "PY-TOPIC-032-MCQ-03",
                "question": "How do you access a private attribute '__val' of object 'obj' from class 'Test' from outside the class?",
                "options": {"A": "obj.__val", "B": "obj._Test__val", "C": "obj.get(__val)", "D": "It is completely impossible"},
                "correct": "B",
                "explanation": "Name mangling renames __val to _Test__val, which remains accessible if referenced explicitly."
            },
            {
                "id": "PY-TOPIC-032-MCQ-04",
                "question": "What decorator is used to define a getter method that can be accessed like a regular attribute?",
                "options": {"A": "@getter", "B": "@property", "C": "@attribute", "D": "@accessor"},
                "correct": "B",
                "explanation": "The @property decorator turns a method into a read-only property."
            },
            {
                "id": "PY-TOPIC-032-MCQ-05",
                "question": "What decorator defines a setter corresponding to a property named 'score'?",
                "options": {"A": "@set_score", "B": "@score.setter", "C": "@property.set", "D": "@setter(score)"},
                "correct": "B",
                "explanation": "@score.setter defines the write logic when assigning to obj.score = val."
            },
            {
                "id": "PY-TOPIC-032-MCQ-06",
                "question": "Why does Python avoid Java-style getVar() and setVar() methods for simple attributes?",
                "options": {"A": "Python prefers direct attribute access initially, upgrading seamlessly to @property if validation is needed later", "B": "Python cannot call methods", "C": "get/set are reserved words", "D": "It wastes memory"},
                "correct": "A",
                "explanation": "@property preserves backward-compatible attribute access without breaking public API."
            },
            {
                "id": "PY-TOPIC-032-MCQ-07",
                "question": "What happens if a user tries to assign a value to a property that has a getter but NO setter?",
                "options": {"A": "The value is set silently", "B": "AttributeError: can't set attribute", "C": "ValueError", "D": "A new variable is created"},
                "correct": "B",
                "explanation": "A property without a setter is read-only, raising AttributeError upon assignment."
            },
            {
                "id": "PY-TOPIC-032-MCQ-08",
                "question": "What is the famous Python philosophy regarding access protection: 'We are all consenting adults here'?",
                "options": {"A": "Strict security should be enforced at all costs", "B": "Conventions and documentation are preferred over rigid compiler-enforced restrictions", "C": "Every variable must be public", "D": "Python is only for adult developers"},
                "correct": "B",
                "explanation": "Python trusts developers to respect conventions rather than imposing impenetrable language barriers."
            },
            {
                "id": "PY-TOPIC-032-MCQ-09",
                "question": "What decorator defines a deleter for a property 'name'?",
                "options": {"A": "@name.deleter", "B": "@delete(name)", "C": "@property.del", "D": "@name.remove"},
                "correct": "A",
                "explanation": "@name.deleter handles operations when 'del obj.name' is executed."
            },
            {
                "id": "PY-TOPIC-032-MCQ-10",
                "question": "Can attributes with single leading underscores be accessed from outside the class?",
                "options": {"A": "No, interpreter blocks it", "B": "Yes, Python allows access; the underscore is purely an advisory convention", "C": "Only inside the same package", "D": "Raises PermissionError"},
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
                "code": "from abc import ABC, abstractmethod\nclass Worker(ABC):\n    @abstractmethod\n    def work(self): pass\n# Instantiating Worker directly raises TypeError\nprint('Direct instantiation of abstract class is blocked by Python')"
            ,
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
                "options": {"A": "abstract", "B": "abc", "C": "interface", "D": "typing"},
                "correct": "B",
                "explanation": "The 'abc' (Abstract Base Classes) module provides ABC and @abstractmethod."
            },
            {
                "id": "PY-TOPIC-033-MCQ-02",
                "question": "What happens if you attempt to instantiate an abstract class that has abstract methods?",
                "options": {"A": "Creates empty object", "B": "Raises TypeError: Can't instantiate abstract class with abstract methods", "C": "Compiles with warning", "D": "Returns None"},
                "correct": "B",
                "explanation": "Python blocks instantiation of abstract classes missing concrete implementations."
            },
            {
                "id": "PY-TOPIC-033-MCQ-03",
                "question": "Can an abstract method contain an actual implementation body in Python?",
                "options": {"A": "No, it must be empty or pass", "B": "Yes, it can contain default logic callable via super().method() in subclasses", "C": "Only print statements", "D": "Forbidden by compiler"},
                "correct": "B",
                "explanation": "Abstract methods can have code bodies that derived classes can invoke via super()."
            },
            {
                "id": "PY-TOPIC-033-MCQ-04",
                "question": "If a subclass of an abstract class implements only 2 out of 3 abstract methods, can it be instantiated?",
                "options": {"A": "Yes, partially", "B": "No, it remains an abstract class and cannot be instantiated", "C": "Only if default values exist", "D": "Only in Python 3.11+"},
                "correct": "B",
                "explanation": "All abstract methods must be implemented; otherwise the subclass is still considered abstract."
            },
            {
                "id": "PY-TOPIC-033-MCQ-05",
                "question": "What is the difference between an Abstract Class and an Interface in modern Python?",
                "options": {"A": "They are identical in Python; Python uses ABCs (and typing.Protocol) to serve both purposes", "B": "Python has an explicit 'interface' keyword", "C": "Interfaces cannot have names", "D": "ABCs cannot have normal methods"},
                "correct": "A",
                "explanation": "Python does not have an 'interface' keyword; ABCs and Protocols serve as interfaces."
            },
            {
                "id": "PY-TOPIC-033-MCQ-06",
                "question": "What is typing.Protocol in Python 3.8+ (PEP 544)?",
                "options": {"A": "Network socket protocol", "B": "Structural subtyping (static duck typing) where classes match interfaces without explicitly inheriting", "C": "Encryption algorithm", "D": "HTTP client"},
                "correct": "B",
                "explanation": "Protocol enables static duck typing without explicit inheritance."
            },
            {
                "id": "PY-TOPIC-033-MCQ-07",
                "question": "Can an abstract class define normal, non-abstract concrete methods?",
                "options": {"A": "No, all methods must be abstract", "B": "Yes, abstract classes can mix concrete methods with abstract ones", "C": "Only static methods", "D": "Only __init__"},
                "correct": "B",
                "explanation": "Abstract classes frequently provide common concrete base methods alongside abstract ones."
            },
            {
                "id": "PY-TOPIC-033-MCQ-08",
                "question": "What decorator marks a method as abstract?",
                "options": {"A": "@abstract", "B": "@abstractmethod", "C": "@pure_virtual", "D": "@interface"},
                "correct": "B",
                "explanation": "The @abstractmethod decorator from abc marks methods as required overrides."
            },
            {
                "id": "PY-TOPIC-033-MCQ-09",
                "question": "How do you register an unrelated class as a 'virtual subclass' of an ABC without inheriting from it?",
                "options": {"A": "MyABC.register(TargetClass)", "B": "TargetClass.bind(MyABC)", "C": "TargetClass.__implements__ = MyABC", "D": "abc.link(TargetClass)"},
                "correct": "A",
                "explanation": "ABC.register(cls) makes issubclass() and isinstance() return True without actual inheritance."
            },
            {
                "id": "PY-TOPIC-033-MCQ-10",
                "question": "Why is Abstraction critical in large enterprise software development?",
                "options": {"A": "Reduces database costs", "B": "Enforces architectural boundaries, decoupling high-level policy from low-level details", "C": "Makes compilation faster", "D": "Eliminates unit tests"},
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
                "options": {"A": "super(ClassName, self)", "B": "super()", "C": "this.super()", "D": "base()"},
                "correct": "B",
                "explanation": "Python 3 introduced the zero-argument super() which automatically infers class and instance."
            },
            {
                "id": "PY-TOPIC-034-MCQ-02",
                "question": "In multiple inheritance, does super() always call the direct parent listed first?",
                "options": {"A": "Yes, always the first parent class", "B": "No, it calls the NEXT class in the object's Method Resolution Order (MRO)", "C": "It calls all parent classes simultaneously", "D": "It calls root object class"},
                "correct": "B",
                "explanation": "super() delegates along the computed MRO, which may be a sibling class rather than a direct parent."
            },
            {
                "id": "PY-TOPIC-034-MCQ-03",
                "question": "What is the advantage of using super().__init__() over directly calling Parent.__init__(self)?",
                "options": {"A": "It runs faster", "B": "It supports cooperative multiple inheritance without hardcoding parent class names", "C": "It allocates less RAM", "D": "It skips parent validation"},
                "correct": "B",
                "explanation": "super() prevents duplicate execution and avoids hardcoding class names."
            },
            {
                "id": "PY-TOPIC-034-MCQ-04",
                "question": "What happens if a class calls super().method() but none of its ancestors implement 'method'?",
                "options": {"A": "Returns None silently", "B": "Raises AttributeError", "C": "Passes through to built-in print", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "If no class in the MRO chain contains the method, an AttributeError is raised."
            },
            {
                "id": "PY-TOPIC-034-MCQ-05",
                "question": "Can super() be used inside a @classmethod?",
                "options": {"A": "No, super() only works with instances", "B": "Yes, super() resolves the next class in the class's MRO correctly", "C": "Only if passed self", "D": "Only in Python 3.12"},
                "correct": "B",
                "explanation": "super() works inside class methods by binding to cls."
            },
            {
                "id": "PY-TOPIC-034-MCQ-06",
                "question": "What does super(Child, self) do?",
                "options": {"A": "Explicit Python 2 legacy form specifying start class Child and instance self", "B": "Raises TypeError in Python 3", "C": "Creates an unbound super object", "D": "Calls Child's constructor"},
                "correct": "A",
                "explanation": "super(Child, self) is the explicit syntax equivalent to zero-argument super() in Python 3."
            },
            {
                "id": "PY-TOPIC-034-MCQ-07",
                "question": "Can you use super() in a class that does not explicitly inherit from any parent class?",
                "options": {"A": "No, causes error", "B": "Yes, because every class implicitly inherits from 'object'", "C": "Only in abstract classes", "D": "Only with static methods"},
                "correct": "B",
                "explanation": "All classes inherit from object, so super() resolves to the object base class."
            },
            {
                "id": "PY-TOPIC-034-MCQ-08",
                "question": "Why is cooperative multiple inheritance with super() sometimes called 'dependency injection by MRO'?",
                "options": {"A": "Because classes don't need to know who is next in line; the caller's MRO determines the dispatch chain", "B": "Because it uses pip", "C": "Because it injects bytecode", "D": "Because it writes to disk"},
                "correct": "A",
                "explanation": "The runtime MRO dictates the next handler in line, decoupling classes from explicit parents."
            },
            {
                "id": "PY-TOPIC-034-MCQ-09",
                "question": "What is the output of:\nclass A:\n    def f(self): return 1\nclass B(A):\n    def f(self): return super().f() + 1\nprint(B().f())",
                "options": {"A": "1", "B": "2", "C": "0", "D": "TypeError"},
                "correct": "B",
                "explanation": "super().f() returns 1; 1 + 1 equals 2."
            },
            {
                "id": "PY-TOPIC-034-MCQ-10",
                "question": "Does super() create a new instance of the parent class?",
                "options": {"A": "Yes, allocates a temporary parent object", "B": "No, it returns a proxy descriptor object bound to the existing instance", "C": "Creates a deepcopy of self", "D": "Returns a dictionary"},
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
                "options": {"A": "public self.var = 10", "B": "self.var = 10 (no leading underscore)", "C": "self._var = 10", "D": "var: public = 10"},
                "correct": "B",
                "explanation": "Attributes with standard names and no leading underscores are public by default."
            },
            {
                "id": "PY-TOPIC-035-MCQ-02",
                "question": "What does a single leading underscore (e.g., _salary) indicate to fellow developers?",
                "options": {"A": "Compiler throws an error if accessed outside", "B": "A convention signaling protected/internal use; avoid accessing from outside", "C": "The variable is a static constant", "D": "The variable is deleted after __init__"},
                "correct": "B",
                "explanation": "Single leading underscore indicates protected internal use by convention."
            },
            {
                "id": "PY-TOPIC-035-MCQ-03",
                "question": "What is the transformation applied by name mangling to '__key' in class 'Vault'?",
                "options": {"A": "_key_Vault", "B": "_Vault__key", "C": "__Vault_key", "D": "Vault.__key"},
                "correct": "B",
                "explanation": "Double leading underscores are mangled into _ClassName__attribute."
            },
            {
                "id": "PY-TOPIC-035-MCQ-04",
                "question": "Do double leading AND trailing underscores (e.g., __init__, __str__) undergo name mangling?",
                "options": {"A": "Yes, always", "B": "No, double leading and trailing underscores denote special magic/dunder methods and are not mangled", "C": "Only in subclasses", "D": "Only __init__ is exempt"},
                "correct": "B",
                "explanation": "Names with both leading and trailing double underscores (__name__) are reserved dunder identifiers."
            },
            {
                "id": "PY-TOPIC-035-MCQ-05",
                "question": "Are private variables in Python truly private and inaccessible from outside code?",
                "options": {"A": "Yes, Python uses kernel-level memory locks", "B": "No, they can still be accessed via their mangled name (_ClassName__attr)", "C": "Only accessible if password is provided", "D": "Yes, causes Segmentation Fault on external read"},
                "correct": "B",
                "explanation": "Python does not strictly prevent access; name mangling avoids naming accidents, not deliberate inspection."
            },
            {
                "id": "PY-TOPIC-035-MCQ-06",
                "question": "What is the primary motivation behind Python's name mangling mechanism?",
                "options": {"A": "To secure confidential corporate data from hackers", "B": "To prevent subclasses from accidentally overriding parent private attributes", "C": "To compress variable names in bytecode", "D": "To speed up dictionary lookups"},
                "correct": "B",
                "explanation": "Name mangling is designed to prevent naming conflicts in inheritance hierarchies."
            },
            {
                "id": "PY-TOPIC-035-MCQ-07",
                "question": "What happens when you import a module with wildcard (from mod import *) regarding names starting with an underscore?",
                "options": {"A": "They are imported first", "B": "Names starting with an underscore are NOT imported by default", "C": "Raises ImportError", "D": "Overwrites existing globals"},
                "correct": "B",
                "explanation": "Wildcard imports skip names starting with an underscore (unless listed in __all__)."
            },
            {
                "id": "PY-TOPIC-035-MCQ-08",
                "question": "Can methods also be made private using double underscores (e.g. def __helper(self):)?",
                "options": {"A": "No, only variables can be private", "B": "Yes, methods are mangled to _ClassName__helper just like attributes", "C": "Causes SyntaxError", "D": "Only static methods"},
                "correct": "B",
                "explanation": "Methods are attributes too, so name mangling applies equally to private method definitions."
            },
            {
                "id": "PY-TOPIC-035-MCQ-09",
                "question": "Which access modifier keyword is built into Python syntax?",
                "options": {"A": "private", "B": "protected", "C": "public", "D": "None of the above (Python uses naming conventions instead)"},
                "correct": "D",
                "explanation": "Python does not have keywords for access specifiers; it relies entirely on naming conventions."
            },
            {
                "id": "PY-TOPIC-035-MCQ-10",
                "question": "What is the output of:\nclass A:\n    __x = 10\nprint(hasattr(A, '__x'), hasattr(A, '_A__x'))",
                "options": {"A": "True False", "B": "False True", "C": "True True", "D": "False False"},
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
                "options": {"A": "Dynamic underlying runtime", "B": "Double underscore (names starting and ending with __)", "C": "Data under register", "D": "Duplicate entity identifier"},
                "correct": "B",
                "explanation": "Dunder is shorthand for 'Double Underscore' (e.g. __init__)."
            },
            {
                "id": "PY-TOPIC-036-MCQ-02",
                "question": "What is the difference between __str__ and __repr__?",
                "options": {"A": "__str__ is for machines, __repr__ is for humans", "B": "__str__ is for readable user-friendly output, __repr__ is for unambiguous developer debugging output", "C": "__repr__ only returns numbers", "D": "They are identical"},
                "correct": "B",
                "explanation": "__str__ targets readability for end-users, while __repr__ targets unambiguous debugging."
            },
            {
                "id": "PY-TOPIC-036-MCQ-03",
                "question": "If a class implements __repr__ but does NOT implement __str__, what happens when str(obj) is called?",
                "options": {"A": "Raises AttributeError", "B": "Python falls back to calling __repr__", "C": "Returns empty string", "D": "Returns memory address"},
                "correct": "B",
                "explanation": "Python falls back to __repr__ if __str__ is not defined on the class."
            },
            {
                "id": "PY-TOPIC-036-MCQ-04",
                "question": "Which magic method allows an object to be indexed using square brackets: obj[key]?",
                "options": {"A": "__index__", "B": "__getitem__", "C": "__get__", "D": "__subscript__"},
                "correct": "B",
                "explanation": "__getitem__(self, key) implements evaluation of self[key]."
            },
            {
                "id": "PY-TOPIC-036-MCQ-05",
                "question": "Which magic method allows an instance of a class to be invoked like a function: obj()?",
                "options": {"A": "__invoke__", "B": "__call__", "C": "__run__", "D": "__execute__"},
                "correct": "B",
                "explanation": "__call__ makes instances callable like functions."
            },
            {
                "id": "PY-TOPIC-036-MCQ-06",
                "question": "Which magic method is called when evaluating the equality operator 'a == b'?",
                "options": {"A": "__equal__", "B": "__eq__", "C": "__cmp__", "D": "__same__"},
                "correct": "B",
                "explanation": "__eq__(self, other) implements the equality comparison '=='."
            },
            {
                "id": "PY-TOPIC-036-MCQ-07",
                "question": "What must __len__() return?",
                "options": {"A": "Any non-negative integer >= 0", "B": "Any number", "C": "A float", "D": "None"},
                "correct": "A",
                "explanation": "__len__() must return an integer >= 0; negative or non-integer values raise TypeError."
            },
            {
                "id": "PY-TOPIC-036-MCQ-08",
                "question": "Which method enables hashing an object so it can be stored in sets or as dictionary keys?",
                "options": {"A": "__hash__", "B": "__id__", "C": "__key__", "D": "__crc__"},
                "correct": "A",
                "explanation": "__hash__() returns an integer hash value used by hash tables."
            },
            {
                "id": "PY-TOPIC-036-MCQ-09",
                "question": "What magic method is called by the boolean test: bool(obj) or if obj:?",
                "options": {"A": "__truth__", "B": "__bool__ (falling back to __len__ if not defined)", "C": "__is_true__", "D": "__eval__"},
                "correct": "B",
                "explanation": "bool() checks __bool__(); if absent, it checks whether __len__() > 0."
            },
            {
                "id": "PY-TOPIC-036-MCQ-10",
                "question": "Which magic method handles attribute assignment (obj.attr = val)?",
                "options": {"A": "__setattribute__", "B": "__setattr__", "C": "__assign__", "D": "__write__"},
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
                "code": "# class O: pass\n# class A(O): pass\n# class B(A, O): pass # Valid\n# class Bad(O, A): pass # TypeError: Cannot create consistent MRO\nprint('Python rejects class hierarchies that violate C3 linearization')"
            ,
                "output": "Python rejects class hierarchies that violate C3 linearization",
                "explanation": "Listing parent before child in base class tuple violates C3 order and raises TypeError."
            }
        ],
        "mcqs": [
            {
                "id": "PY-TOPIC-037-MCQ-01",
                "question": "What does MRO stand for in Python?",
                "options": {"A": "Memory Resolution Object", "B": "Method Resolution Order", "C": "Module Runtime Organization", "D": "Multiple Routing Operator"},
                "correct": "B",
                "explanation": "MRO stands for Method Resolution Order."
            },
            {
                "id": "PY-TOPIC-037-MCQ-02",
                "question": "Which algorithm does Python 3 use to compute the MRO of classes?",
                "options": {"A": "Depth-First Search (DFS)", "B": "Breadth-First Search (BFS)", "C": "C3 Linearization Algorithm", "D": "Dijkstra's Algorithm"},
                "correct": "C",
                "explanation": "Python 2.3+ and Python 3 use the C3 Linearization algorithm to compute the MRO."
            },
            {
                "id": "PY-TOPIC-037-MCQ-03",
                "question": "How can you view the MRO of a class named 'MyClass' in code?",
                "options": {"A": "MyClass.mro() or MyClass.__mro__", "B": "mro(MyClass)", "C": "inspect.order(MyClass)", "D": "MyClass.hierarchy()"},
                "correct": "A",
                "explanation": "Both the mro() method and the __mro__ attribute expose the class resolution tuple."
            },
            {
                "id": "PY-TOPIC-037-MCQ-04",
                "question": "What is the final class at the end of every Python 3 class's MRO?",
                "options": {"A": "None", "B": "type", "C": "object", "D": "BaseClass"},
                "correct": "C",
                "explanation": "'object' is the root of the class tree and the final entry in every MRO."
            },
            {
                "id": "PY-TOPIC-037-MCQ-05",
                "question": "What exception is raised when defining a class with an inconsistent inheritance hierarchy that violates C3 linearization?",
                "options": {"A": "RecursionError", "B": "TypeError: Cannot create a consistent method resolution order (MRO)", "C": "ValueError", "D": "SyntaxError"},
                "correct": "B",
                "explanation": "Inconsistent class relationships raise TypeError at class definition time."
            },
            {
                "id": "PY-TOPIC-037-MCQ-06",
                "question": "In class D(B, C), where B and C both inherit from A, what is D's MRO?",
                "options": {"A": "D -> B -> A -> C -> object", "B": "D -> B -> C -> A -> object", "C": "D -> C -> B -> A -> object", "D": "D -> A -> B -> C -> object"},
                "correct": "B",
                "explanation": "C3 linearization evaluates D -> B -> C -> A -> object, keeping grandparent A after both children."
            },
            {
                "id": "PY-TOPIC-037-MCQ-07",
                "question": "What principle of C3 linearization ensures that subclasses appear before their base classes in the MRO?",
                "options": {"A": "Local Precedence Order", "B": "Monotonicity", "C": "Strict Hierarchy", "D": "Preservation"},
                "correct": "B",
                "explanation": "Monotonicity guarantees that a class always precedes its superclasses in the lookup chain."
            },
            {
                "id": "PY-TOPIC-037-MCQ-08",
                "question": "What does super() use under the hood to determine which class method to invoke next?",
                "options": {"A": "The __bases__ tuple only", "B": "The instance's __class__.__mro__ list", "C": "Alphabetical order", "D": "sys.modules"},
                "correct": "B",
                "explanation": "super() walks the object's computed __mro__ to find the next class."
            },
            {
                "id": "PY-TOPIC-037-MCQ-09",
                "question": "What is the output of:\nclass A: pass\nprint(A.__mro__)",
                "options": {"A": "(<class '__main__.A'>,)", "B": "(<class '__main__.A'>, <class 'object'>)", "C": "TypeError", "D": "[A, object]"},
                "correct": "B",
                "explanation": "A's __mro__ is a tuple containing class A followed by class object."
            },
            {
                "id": "PY-TOPIC-037-MCQ-10",
                "question": "Why did Python switch from old-style DFS to C3 linearization in Python 2.3?",
                "options": {"A": "DFS had diamond problem anomalies where a grandparent method was called before an overridden sibling method", "B": "DFS was too slow", "C": "DFS did not support recursion", "D": "DFS was incompatible with C"},
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
                "options": {"A": "__start__() and __step__()", "B": "__iter__() and __next__()", "C": "__enter__() and __exit__()", "D": "__get__() and __set__()"},
                "correct": "B",
                "explanation": "The iterator protocol requires __iter__() to return the iterator and __next__() to yield items."
            },
            {
                "id": "PY-TOPIC-038-MCQ-02",
                "question": "What exception signals that an iterator has exhausted all elements?",
                "options": {"A": "IndexError", "B": "StopIteration", "C": "EndIterError", "D": "EOFError"},
                "correct": "B",
                "explanation": "__next__() raises StopIteration when there are no more items."
            },
            {
                "id": "PY-TOPIC-038-MCQ-03",
                "question": "Is a Python list an iterator?",
                "options": {"A": "Yes, lists are iterators", "B": "No, a list is an iterable; calling iter(list) produces an iterator", "C": "Only when passed to for loops", "D": "Only sorted lists"},
                "correct": "B",
                "explanation": "Lists are iterables, not iterators (lists lack a __next__ method)."
            },
            {
                "id": "PY-TOPIC-038-MCQ-04",
                "question": "What does next(it, 'DONE') do when the iterator 'it' is exhausted?",
                "options": {"A": "Raises StopIteration", "B": "Returns 'DONE' without raising an exception", "C": "Resets the iterator", "D": "Returns None"},
                "correct": "B",
                "explanation": "The second parameter acts as a default value returned upon reaching the end."
            },
            {
                "id": "PY-TOPIC-038-MCQ-05",
                "question": "Can an exhausted iterator be reused or rewound back to the start?",
                "options": {"A": "Yes, using it.reset()", "B": "No, iterators are one-way streams; a new iterator must be created using iter()", "C": "Yes, calling next(it, reverse=True)", "D": "Automatically on next loop"},
                "correct": "B",
                "explanation": "Iterators consume data forward only; once exhausted, you must create a new iterator."
            },
            {
                "id": "PY-TOPIC-038-MCQ-06",
                "question": "What does an iterator's __iter__() method return by convention?",
                "options": {"A": "A new list", "B": "self (the iterator itself)", "C": "The first element", "D": "None"},
                "correct": "B",
                "explanation": "An iterator's __iter__() simply returns self so that iterators are themselves iterable."
            },
            {
                "id": "PY-TOPIC-038-MCQ-07",
                "question": "Which standard library module contains powerful building blocks for creating complex iterators?",
                "options": {"A": "collections", "B": "itertools", "C": "functools", "D": "operator"},
                "correct": "B",
                "explanation": "itertools provides high-performance iterator functions (count, cycle, chain, islice, etc.)."
            },
            {
                "id": "PY-TOPIC-038-MCQ-08",
                "question": "What is the memory advantage of using an iterator over loading a 10 GB file into a list?",
                "options": {"A": "Iterators compress data on disk", "B": "Iterators yield one item at a time in memory, using O(1) constant RAM regardless of total dataset size", "C": "Iterators use GPU memory", "D": "Zero difference"},
                "correct": "B",
                "explanation": "Iterators evaluate lazily, consuming minimal constant memory."
            },
            {
                "id": "PY-TOPIC-038-MCQ-09",
                "question": "What happens if you pass an integer to iter(42)?",
                "options": {"A": "Yields 42", "B": "TypeError: 'int' object is not iterable", "C": "Yields numbers 0 to 41", "D": "Returns None"},
                "correct": "B",
                "explanation": "Integers do not implement __iter__ or sequence indexing, raising TypeError."
            },
            {
                "id": "PY-TOPIC-038-MCQ-10",
                "question": "What does itertools.count(start=5, step=2) produce?",
                "options": {"A": "A finite range from 5 to 7", "B": "An infinite iterator yielding 5, 7, 9, 11, ...", "C": "A list of numbers", "D": "Error"},
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
                "options": {"A": "return", "B": "yield", "C": "generate", "D": "produce"},
                "correct": "B",
                "explanation": "The presence of the 'yield' keyword marks the function as a generator."
            },
            {
                "id": "PY-TOPIC-039-MCQ-02",
                "question": "What happens to a generator function's local variables when it hits a 'yield' statement?",
                "options": {"A": "They are deleted from memory", "B": "Their state is preserved and paused until the next value is requested", "C": "They are returned as a tuple", "D": "They become global"},
                "correct": "B",
                "explanation": "Yield pauses execution, preserving the stack frame and local variables for the next call."
            },
            {
                "id": "PY-TOPIC-039-MCQ-03",
                "question": "What is returned when you call a generator function: gen = my_func()?",
                "options": {"A": "The first yielded value", "B": "A generator object iterator (execution has not started yet)", "C": "None", "D": "A list of all values"},
                "correct": "B",
                "explanation": "Calling a generator function returns a generator object without running code until next() is called."
            },
            {
                "id": "PY-TOPIC-039-MCQ-04",
                "question": "What does a 'return' statement inside a generator function do in Python 3.3+?",
                "options": {"A": "Yields the returned value", "B": "Terminates the generator, raising StopIteration with the return value as the exception message", "C": "Causes SyntaxError", "D": "Restarts generator"},
                "correct": "B",
                "explanation": "'return' exits the generator, raising StopIteration carrying the return value."
            },
            {
                "id": "PY-TOPIC-039-MCQ-05",
                "question": "What syntax creates a Generator Expression?",
                "options": {"A": "[x for x in iterable]", "B": "(x for x in iterable)", "C": "{x for x in iterable}", "D": "<x for x in iterable>"},
                "correct": "B",
                "explanation": "Parentheses enclosing comprehension syntax define a generator expression."
            },
            {
                "id": "PY-TOPIC-039-MCQ-06",
                "question": "What does the 'yield from' statement do?",
                "options": {"A": "Yields values from another iterable or subgenerator directly", "B": "Stops generation", "C": "Returns multiple values at once as a list", "D": "Deletes the generator"},
                "correct": "A",
                "explanation": "'yield from iterable' forwards all values from another iterable to the caller."
            },
            {
                "id": "PY-TOPIC-039-MCQ-07",
                "question": "Which method sends a value INTO a running generator at its yield point?",
                "options": {"A": "gen.push(val)", "B": "gen.send(val)", "C": "gen.feed(val)", "D": "gen.put(val)"},
                "correct": "B",
                "explanation": "gen.send(value) passes data back into the generator at the paused yield expression."
            },
            {
                "id": "PY-TOPIC-039-MCQ-08",
                "question": "What method closes and terminates a generator before it naturally finishes?",
                "options": {"A": "gen.kill()", "B": "gen.close()", "C": "gen.stop()", "D": "gen.exit()"},
                "correct": "B",
                "explanation": "gen.close() raises GeneratorExit inside the generator to release resources."
            },
            {
                "id": "PY-TOPIC-039-MCQ-09",
                "question": "What is the output of:\ndef f():\n    yield 1\n    yield 2\nprint(list(f()))",
                "options": {"A": "[1, 2]", "B": "1 2", "C": "<generator object>", "D": "(1, 2)"},
                "correct": "A",
                "explanation": "Passing a generator to list() consumes it into a list: [1, 2]."
            },
            {
                "id": "PY-TOPIC-039-MCQ-10",
                "question": "Why are generators particularly valuable when processing massive log files or data streams?",
                "options": {"A": "They process data with O(1) memory by streaming records line-by-line without loading entire files", "B": "They bypass disk read operations", "C": "They automatically parse JSON", "D": "They use multi-threading"},
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
                "options": {"A": "func = decorator_name(func)", "B": "decorator_name = func()", "C": "func.decorate()", "D": "import decorator_name"},
                "correct": "A",
                "explanation": "@decorator syntax is shorthand for reassigning func = decorator(func)."
            },
            {
                "id": "PY-TOPIC-040-MCQ-02",
                "question": "Why is @functools.wraps(func) recommended inside custom decorators?",
                "options": {"A": "To make execution faster", "B": "To preserve the original function's metadata (__name__, __doc__, annotations)", "C": "To prevent recursion errors", "D": "To enable multi-threading"},
                "correct": "B",
                "explanation": "Without @wraps, the decorated function inherits the wrapper's name and loses its original docstring."
            },
            {
                "id": "PY-TOPIC-040-MCQ-03",
                "question": "How can a decorator wrapper handle functions with arbitrary arguments and keyword arguments?",
                "options": {"A": "def wrapper(a, b=None):", "B": "def wrapper(*args, **kwargs):", "C": "def wrapper(all_args):", "D": "def wrapper():"},
                "correct": "B",
                "explanation": "*args and **kwargs allow the wrapper to forward any combination of parameters seamlessly."
            },
            {
                "id": "PY-TOPIC-040-MCQ-04",
                "question": "In what order are stacked decorators executed on a function?\n@dec1\n@dec2\ndef func(): pass",
                "options": {"A": "dec1 is applied first, then dec2", "B": "dec2 is applied first, then dec1 wraps that result (equivalent to dec1(dec2(func)))", "C": "In random order", "D": "They execute simultaneously"},
                "correct": "B",
                "explanation": "Decorators apply inside-out from bottom to top: dec1(dec2(func))."
            },
            {
                "id": "PY-TOPIC-040-MCQ-05",
                "question": "Can a Python class act as a decorator?",
                "options": {"A": "No, only functions can decorate", "B": "Yes, by implementing the __call__ magic method on the class", "C": "Only if inheriting from DecoratorBase", "D": "Only in Python 3.10+"},
                "correct": "B",
                "explanation": "Any callable object implementing __call__ can serve as a decorator."
            },
            {
                "id": "PY-TOPIC-040-MCQ-06",
                "question": "How do you write a decorator that accepts its own parameters (e.g. @repeat(num=3))?",
                "options": {"A": "Use three nested functions (outer factory -> decorator -> wrapper)", "B": "Decorators cannot accept parameters", "C": "Pass arguments directly to wrapper", "D": "Use global variables"},
                "correct": "A",
                "explanation": "An outer function captures arguments and returns the decorator, which in turn returns the wrapper."
            },
            {
                "id": "PY-TOPIC-040-MCQ-07",
                "question": "Which built-in decorator from functools caches function results to avoid repeated expensive calculations?",
                "options": {"A": "@functools.memoize", "B": "@functools.lru_cache", "C": "@functools.store", "D": "@functools.buffer"},
                "correct": "B",
                "explanation": "@lru_cache (Least Recently Used cache) memoizes function returns based on arguments."
            },
            {
                "id": "PY-TOPIC-040-MCQ-08",
                "question": "What is a closure in Python, and how does it relate to decorators?",
                "options": {"A": "A function that has been deleted", "B": "An inner function that retains access to variables from its enclosing lexical scope even after that scope has closed", "C": "A file handle", "D": "A database transaction"},
                "correct": "B",
                "explanation": "Wrappers rely on closures to retain references to the original decorated function."
            },
            {
                "id": "PY-TOPIC-040-MCQ-09",
                "question": "What is a Class Decorator?",
                "options": {"A": "A decorator applied directly above 'class ClassName:' that inspects or modifies the class object itself", "B": "A method inside a class", "C": "CSS styles for Python", "D": "Deprecated syntax"},
                "correct": "A",
                "explanation": "Class decorators take a class as input and can mutate its attributes or return a proxy class."
            },
            {
                "id": "PY-TOPIC-040-MCQ-10",
                "question": "What is the output of:\ndef dec(f): return lambda: f() * 2\n@dec\ndef val(): return 5\nprint(val())",
                "options": {"A": "5", "B": "10", "C": "2", "D": "TypeError"},
                "correct": "B",
                "explanation": "dec wraps val with a lambda returning f() * 2, so 5 * 2 = 10."
            }
        ]
    }
]
