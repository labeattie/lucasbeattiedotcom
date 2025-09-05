let current = '';

function press(num) {
  current += num;
  document.getElementById('display').value = current;
}

function operate(op) {
  current += ` ${op} `;
  document.getElementById('display').value = current;
}

function calculate() {
  try {
    current = eval(current).toString();
    document.getElementById('display').value = current;
  } catch {
    document.getElementById('display').value = "Error";
  }
}

function clearDisplay() {
  current = '';
  document.getElementById('display').value = '';
}
