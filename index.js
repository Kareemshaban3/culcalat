

const Calculator = document.getElementById("calculator-container");
const display = document.getElementById("displayArea");

Calculator.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  display.textContent = "";
}

function addToDisplayArea(value) {
  display.textContent = display.textContent + value;
}

function deleteOneValue() {
  let currentContent = display.textContent;
  display.textContent = currentContent.slice(0, -1);
}

function evaluate() {
  try {
    let calculator = math.evaluate(display.textContent);
    display.textContent = calculator;
  } catch (error) {
    display.textContent = " error";
  }
}
