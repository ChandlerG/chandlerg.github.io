Node.js tutorial for **unit testing** using **Mocha** and **Chai**, two testing tools for JavaScript:

---

## ✅ Prerequisites
Make sure you have:
- Node.js installed
- A code editor (e.g., VS Code)

---

## 🛠️ Step 1: Set up a Node.js project

```bash
mkdir simple-unit-test
cd simple-unit-test
npm init -y
```

This creates a `package.json` file for your project.

---

## 📦 Step 2: Install Mocha and Chai

```bash
npm install --save-dev mocha chai
```

- **Mocha** is a test runner.
- **Chai** is an assertion library.

---

## 📁 Step 3: Create your project files

### `math.js` — Your module to test

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

---

### `test/math.test.js` — Your test file

```js
const { expect } = require('chai');
const { add, subtract } = require('../math');

describe('Math Functions', () => {
  describe('add()', () => {
    it('should return 5 for add(2, 3)', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('should return -1 for add(-2, 1)', () => {
      expect(add(-2, 1)).to.equal(-1);
    });
  });

  describe('subtract()', () => {
    it('should return 1 for subtract(3, 2)', () => {
      expect(subtract(3, 2)).to.equal(1);
    });

    it('should return -3 for subtract(2, 5)', () => {
      expect(subtract(2, 5)).to.equal(-3);
    });
  });
});
```

---

## 🧪 Step 4: Run your tests

First, edit your `package.json` to include a test script:

```json
"scripts": {
  "test": "mocha"
}
```

Now run:

```bash
npm test
```

✅ You should see your test results in the terminal.

---

## 📝 Summary
- `math.js` contains your logic.
- `math.test.js` contains your unit tests.
- Mocha runs the tests; Chai checks if values are what you expect.

---

