const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn-input')
const btnClear = document.querySelector('.btn-clear');
const btnClearOne = document.querySelector('.btn-clear-one');
const btnEqual = document.querySelector('.btn-equal')

display.focus()

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    display.value += buttons[i].textContent;
  }
}

function result() {
  let calculo = eval(display.value);
  display.value = parseFloat(calculo.toFixed(2));
}

function clearDisplay() {
  display.value = ''
}

function clearOne() {
  if (display.value !== '') display.value = display.value.slice(0, -1)
}

display.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    result();
  }
})

display.addEventListener('input', () => {
  display.value = display.value.replace(/,/g, ".")
  display.value = display.value.replace(/[a-zA-Z]|[&\]|#$~'=^"\\:?<>[{}´`]| /g, "")
})

btnEqual.addEventListener('click', result)
btnClear.addEventListener('click', clearDisplay)
btnClearOne.addEventListener('click', clearOne)