const buttons = document.querySelectorAll(
  ".button"
);

const result = document.querySelector(".result");

for (const btn of buttons) {
  btn.addEventListener("click", () => {
    buttonClick(btn.innerText);
  });
}

let operation = null;
let firstNumber = null;

let nextButtonClear = false;

function buttonClick(type) {
  // Removing intial 0 and first Value
  if (result.innerText === "0")
    result.innerText = "";
  if (nextButtonClear) {
    result.innerText = "";
    nextButtonClear = false;
  }
  switch (type) {
    case "0":
      result.innerText += type;
      break;
    case "1":
      result.innerText += type;
      break;
    case "2":
      result.innerText += type;
      break;
    case "3":
      result.innerText += type;
      break;
    case "4":
      result.innerText += type;
      break;
    case "5":
      result.innerText += type;
      break;
    case "6":
      result.innerText += type;
      break;
    case "7":
      result.innerText += type;
      break;
    case "8":
      result.innerText += type;
      break;
    case "9":
      result.innerText += type;
      break;
    case "C":
      result.innerText = "0";
      firstNumber = null;
      operation = null;
      break;
    case "/":
      operation = "/";
      firstNumber = +result.innerText;
      nextButtonClear = true;
      break;
    case "*":
      operation = "*";
      firstNumber = +result.innerText;
      nextButtonClear = true;
      break;
    case "+":
      operation = "+";
      firstNumber = +result.innerText;
      nextButtonClear = true;
      break;
    case "-":
      operation = "-";
      firstNumber = +result.innerText;
      nextButtonClear = true;
      break;
    case "=":
      const secondNumber = +result.innerText;

      if (operation === "/") {
        result.innerText =
          firstNumber / secondNumber;
      } else if (operation === "*") {
        result.innerText =
          firstNumber * secondNumber;
      } else if (operation === "+") {
        result.innerText =
          firstNumber + secondNumber;
      } else if (operation === "-") {
        result.innerText =
          firstNumber - secondNumber;
      }
  }
}
