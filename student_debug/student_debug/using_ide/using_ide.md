How to **debug JavaScript using VS Code**. This guide assumes you're working with Node.js and want to debug backend JavaScript files (not browser-based code).

---

## 🧰 Prerequisites

- [ ] Install [VS Code](https://code.visualstudio.com/)
- [ ] Install Node.js (recommended: 18+)
- [ ] Create a simple JavaScript project

---

## 🛠️ Step 1: Set up a simple JavaScript file

Create a file called `app.js`:

```js
function greet(name) {
  const message = `Hello, ${name}!`;
  return message;
}

function main() {
  const result = greet('VS Code');
  console.log(result);
}

main();

```

---

## 🐞 Step 2: Add a breakpoint

1. Open `app.js` in VS Code.
2. Click in the left margin (next to the line number) where you want to **pause** execution—e.g., on `const message = ...`.
   - A **red dot** appears—that’s a **breakpoint**.

---

## 🧪 Step 3: Run and debug the file

There are two main ways to debug:

### ▶️ Option A: Use the built-in “Run and Debug”

1. Click the **Run and Debug** icon on the left sidebar (looks like a play button with a bug).
2. Click **"Run and Debug"** (if it's your first time).
3. Select **"Node.js"** if prompted.

VS Code will:
- Start the debugger
- Stop at your breakpoint
- Let you inspect variables, step through lines, etc.

### Option B: Use `launch.json` 

---

## 🧭 Step 4: Use the Debugger Interface

When the program hits your breakpoint, you can:

- Hover over variables to see their values
- Use the **Debug Console** to type JS commands in real time
- Use controls at the top:
  - ▶️ Continue
  - ⏭ Step over
  - ⏬ Step into
  - ⏹ Stop

---
### Tips:
- Use **`console.log()`** (print) alongside breakpoints for quick checks
- Add **watch expressions** to track specific variables
- Set **conditional breakpoints** (right-click a breakpoint)

---

