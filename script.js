let screenValue = "";

const input = document.getElementById("name"); //text box/display element

// updates value if user manually inputs
input.addEventListener("input", function () {
  screenValue = input.value;
});

let stored = ""; //store number
let operand = ""; // store operator

let numbers = document.querySelectorAll(".number"); // get all number elements
let operators = document.querySelectorAll(".operator"); // get all operator elements

let add = (x, y) => {
  return x + y;
};

let subtract = (x, y) => {
  return x - y;
};

let multiply = (x, y) => {
  return x * y;
};

let divide = (x, y) => {
  return x / y;
};

// updates value if user presses on screen button
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (stored != "" && input.value == "") {
      input.value = "";
    }
    input.value += this.value;
    screenValue = input.value;
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (operand != "") {
      // if operand exists
      opera(stored, screenValue, operand);
      operand = this.value;
    } else {
      stored = screenValue;
      operand = this.value;
      input.value = "";
    }
  });
}

//12 + 7 - 5 * 3 = should yield 42.

let opera = (storedNumber, currentNumber, op) => {
  let storedInt = parseInt(storedNumber);
  let currentInt = parseInt(currentNumber);

  if (op == "+") {
    input.value = add(storedInt, currentInt);
    stored = input.value;
    operand = "";
  } else if (op == "-") {
    input.value = subtract(storedInt, currentInt);
    stored = input.value;
    operand = "";
  } else if (op == "*") {
    input.value = multiply(storedInt, currentInt);
    stored = input.value;
    operand = "";
  } else if (op == "/") {
    input.value = divide(storedInt, currentInt);
    stored = input.value;
    operand = "";
  }
};

let wipe = () => {
  stored = "";
  operand = "";
  screenValue = "";
  input.value = "";
};
