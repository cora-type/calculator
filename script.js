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
    input.value += this.value;
    screenValue = input.value;
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if ((operators[i] = "+")) {
      stored = screenValue;
      operand = this.value;
      screenValue = "";
      input.value = "";
    }
  });
}

let opera = (storedNumber, currentNumber, op) => {
  let storedInt = parseInt(storedNumber);
  let currentInt = parseInt(currentNumber);

  if (op == "+") {
    input.value = add(storedInt, currentInt);
    stored = input.value;
    operand = "";
  } else if (op == "-") {
    input.value = subtract(storedInt, currentInt);
  } else if (op == "*") {
    input.value = multiply(storedInt, currentInt);
  } else if (op == "/") {
    input.value = divide(storedInt, currentInt);
  }
};

let wipe = () => {
  stored = "";
  operand = "";
  screenValue = "";
  input.value = "";
};
