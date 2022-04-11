const input = document.getElementById("name"); //text box element
const display = document.getElementById("display"); // display element

let stored = ""; //store number
let operand = ""; // store operator

//initialize visual elements

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multi = document.querySelector(".multi");
let divider = document.querySelector(".divide");

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

let toggle = true; // toggle false in order to let numberListener know to wipe text on subsequent input, then toggle true

// updates value if user presses on screen button
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (toggle == false) {
      // if toggle false, reset text on next button press
      input.value = "";
      toggle = true;
    }
    // some additional visual functionality
    plus.style.cssText =
      "color:black; transition: color .5s linear; font-size:60px; transition: font-size .5s linear";
    minus.style.cssText =
      "color:black; transition: color .5s linear; font-size:60px; transition: font-size .5s linear";
    multi.style.cssText =
      "color:black; transition: color .5s linear; font-size:60px; transition: font-size .5s linear";
    divider.style.cssText =
      "color:black; transition: color .5s linear; font-size:60px; transition: font-size .5s linear";
    input.value += this.value;
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    // if there is already an operator
    if (operand != "") {
      toggle = false;
      opera(stored, input.value, operand); // evaluate the operator
      operand = this.value; // store the pressed operator
    } else {
      display.innerText = input.value + " " + this.value;
      toggle = false;
      stored = input.value;
      operand = this.value;
    }
  });

  operators[i].addEventListener("click", function () {
    //some additional visual functionality
    if (this.value == "+") {
      plus.style.cssText =
        "color:red; transition: color .5s linear; font-size:80px; transition: font-size .5s linear";
    } else if (this.value == "-") {
      minus.style.cssText =
        "color:blue; transition: color .5s linear; font-size:80px; transition: font-size .5s linear";
    } else if (this.value == "*") {
      multi.style.cssText =
        "color:green; transition: color .5s linear; font-size:80px; transition: font-size .5s linear";
    } else if (this.value == "/") {
      divider.style.cssText =
        "color:yellow; transition: color .5s linear; font-size:80px; transition: font-size .5s linear";
    }
  });
}

//12 + 7 - 5 * 3 = should yield 42.

let opera = (storedNumber, currentNumber, op) => {
  if (storedNumber.includes(".") || currentNumber.includes(".")) {
    // if dealing with decimals
    let storedInt = parseFloat(storedNumber);
    let currentInt = parseFloat(currentNumber);

    if (op == "+") {
      input.value = add(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "-") {
      input.value = subtract(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "*") {
      input.value = multiply(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "/") {
      input.value = divide(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    }
  } else {
    // if not deicmals
    let storedInt = parseInt(storedNumber);
    let currentInt = parseInt(currentNumber);

    if (op == "+") {
      input.value = add(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "-") {
      input.value = subtract(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "*") {
      input.value = multiply(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    } else if (op == "/") {
      input.value = divide(storedInt, currentInt);
      stored = input.value;
      display.innerText = input.value;
      operand = "";
    }
  }
};

let wipe = () => {
  //clear calculator
  stored = "";
  operand = "";
  input.value = "";
  toggle = true;
  display.innerText = "";
};

let equalToggle = () => (toggle = false);
