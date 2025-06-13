const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  if (isResultDisplayed) {
    display.value = "";
    isResultDisplayed = false;
  }
  display.value += value;
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
    isResultDisplayed = true; // set flag so next input starts fresh
  } catch (err) {
    display.value = "Error";
    isResultDisplayed = true;
  }
}

function addToHistory(entry) {
  const history = document.getElementById("history");
  const listItem = document.createElement("li");
  listItem.textContent = entry;
  history.prepend(listItem); // Add latest on top
}
