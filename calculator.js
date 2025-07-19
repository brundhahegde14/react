function appendToDisplay(value) {
  document.querySelector('#display').value += value;
}

function clearDisplay() {
  document.querySelector('#display').value = '';
}
function calculate() {
  let expression = document.querySelector('#display').value;
  try {
    document.querySelector('#display').value = eval(expression);
  } catch {
    document.querySelector('#display').value = 'Error';
  }
}
