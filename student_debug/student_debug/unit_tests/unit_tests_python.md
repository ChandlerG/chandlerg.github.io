Python unit testing tutorial using `pytest`**

---

## ✅ Prerequisites

Make sure you have:
- Python installed (3.7+ recommended)
- A code editor (like VS Code)

---

## 🛠️ Step 1: Set up your project folder

```bash
mkdir simple_pytest_demo
cd simple_pytest_demo
```

(You can also create a virtual environment if you want: `python -m venv .venv && source .venv/bin/activate` on Unix or `.\.venv\Scripts\activate` on Windows.)

---

## 📦 Step 2: Install `pytest`

```bash
pip install pytest
```

---

## 📁 Step 3: Create your Python module

### `math_utils.py` — Your code to test

```python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

---

## 🧪 Step 4: Create your test file

### `test_math_utils.py` — Your test file

```python
from math_utils import add, subtract

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_subtract():
    assert subtract(3, 2) == 1
    assert subtract(5, 10) == -5
```

✅ Important: test file names must start with `test_` and so should your test functions.

---

## ▶️ Step 5: Run your tests

From the terminal, run:

```bash
pytest
```

You’ll see a summary like:

```
============================= test session starts =============================
collected 2 items

test_math_utils.py ..                                                 [100%]

============================== 2 passed in 0.02s ==============================
```

---

## 📝 Summary
- `math_utils.py` = your code
- `test_math_utils.py` = your tests
- `pytest` = test runner
- Tests must be in files named `test_*.py` and functions named `test_*`

---

