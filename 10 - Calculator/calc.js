// Input Boxes
const inputBox = document.getElementById("inputBox");
const outBox = document.getElementById("outputBox");

// Buttons
const button = document.querySelector(".calc-buttons");

let currentInput = "";
let previousInput = "";
let operator = null;

button.addEventListener("click", (event) => {
  if (!event.target.matches("button")) return;

  const value = event.target.textContent;
  console.log(value);

  if (event.target.classlist.contains("number")) {
    handleDecimal(value);
  }

  if (event.target.classlist.contains("operator")) {
    handleOperator(value);
  }

  if (event.target.classList.contains("sum")) {
    calculator();
  }

  if (value === "AC") {
    clearDisplay();
  }

  if (value === "DEL") {
    deleteLasT();
  }
});

function handleDecimal(num) {
  if (num === "." && currentInput.includes(".")) return;
  currentInput += num;
  inputBox.value = currentInput;
}

function handleOperator(ope) {
  if (currentInput === "") return;

  previousInput = currentInput;
  currentInput = "";

  if (ope === "x") operator = "*";
  else operator = ope;

  outBox.value = previousInput + " " + ope;
}

function calculator() {
  if (!previousInput || !currentInput || !operator) return;

  const val1 = parseFloat(previousInput);
  const val2 = parseFloat(currentInput);

  let result;

  switch (operator) {
    case "+":
      result = val1 + val2;
      break;
    case "-":
      result = val1 - val2;
      break;
    case "*":
      result = val1 * val2;
      break;
    case "/":
      result = val2 !== 0 ? val1 / val2 : "Error";
      break;
    default:
      return;
  }

  inputBox.value = result;
  outBox.value = "";

  currentInput = result.toString();
  previousInput = "";
  operator = null;
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  previousInput = "";
  inputBox.value = "";
  outBox.value = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  inputBox.value = currentInput;
}
