// Input Boxes
const inputBox = document.getElementById("inputBox");
const outputBox = document.getElementById("outputBox");

// Buttons
const button = document.querySelector(".calc-buttons");

let expression = "";
let currentInput = "";

button.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  const value = btn.textContent;

  if (btn.classList.contains("number")) {
    handleDecimal(value);
  }

  if (value === "(" || value === ")") {
    handleParentheses(value);
  }

  if (value === "√" || value === "²") {
    applyUnary(value);
  } else if (btn.classList.contains("operator")) {
    handleOperator(value);
  }

  if (btn.classList.contains("sum")) {
    calculator();
  }

  if (value === "AC") {
    clearDisplay();
  }

  if (value === "DEL") {
    deleteLast();
  }

  inputBox.value = expression;
});

function handleDecimal(num) {
  if (num === "." && currentInput.includes(".")) return;
  currentInput += num;
  expression += num;
}

function handleOperator(ope) {
  if (currentInput === "") return;

  previousInput = currentInput;
  currentInput = "";

  if (ope === "x") {
    expression += "*";
  } else {
    expression += ope;
  }
}

function calculator() {
  if (expression === "") return;

  try {
    let result = eval(expression);
    outputBox.value = result;
    currentInput = result.toString();
    expression = result.toString();
    inputBox.value = expression;
  } catch (e) {
    outputBox.value = "Error";
  }
}

function clearDisplay() {
  currentInput = "";
  expression = "";
  inputBox.value = "";
  outputBox.value = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  expression = expression.slice(0, -1);
}

function applyUnary(ope) {
  if (currentInput === "") return;

  const val = parseFloat(currentInput);
  let result;

  if (ope === "√") {
    result = Math.sqrt(val);
  } else if (ope === "²") {
    result = val * val;
  }

  inputBox.value = result.toString();
  currentInput = result.toString();
}

function handleParentheses(paren) {
  expression += paren;
}
