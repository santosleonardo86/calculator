const display = document.querySelector('.display');
const btnInput = document.querySelectorAll('.btn-input');
const calculation = document.getElementById('calculation');
const ctnLinhas = document.getElementById('ctn-linhas');
const btnEspecial = document.querySelectorAll('.btn-especial');
const btnDot = document.querySelector('.btn-dot');
const btnClear = document.querySelector('.btn-clear');
const btnClearOne = document.querySelector('.btn-clear-one');
const btnEqual = document.querySelector('.btn-equal');
const btnPercentage = document.querySelector('.btn-percentage');

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(op, num1, num2) {
  let valor1, valor2, resultado;
  op = btnEspecial;

  for (let i = 0; i < btnInput.length; i++) {
    btnInput[i].onclick = () => display.value += btnInput[i].textContent;

    function attValor1() { num1 = display.value; valor1 = Number(num1); };
    btnInput[i].addEventListener('click', attValor1, false);


    for (let i = 0; i < op.length; i++) {
      op[i].addEventListener('click', () => {
        display.value = '';
        attValor2();
      });
    };

    function attValor2() {
      btnInput[i].removeEventListener('click', attValor1)

      btnInput[i].addEventListener('click', () => {
        num2 = display.value;
        valor2 = Number(num2);
      });
    };
  };

  for (let i = 0; i < op.length; i++) {
    op[i].addEventListener('click', () => {
      calculation.style.display = 'block'
      calculation.innerHTML = `${valor1} ${op[i].innerText}`

      btnEqual.addEventListener('click', () => {
        if (valor1 !== '' && valor2 !== '' && op !== '') {
          if (i == 0) { resultado = div(valor1, valor2); }
          else if (i == 1) { resultado = mult(valor1, valor2); }
          else if (i == 2) { resultado = subt(valor1, valor2); }
          else if (i == 3) { resultado = add(valor1, valor2); }

          calculation.innerHTML = `${valor1} ${op[i].innerText} ${valor2} =`
          valor2 = ''
          valor1 = resultado
          display.value = parseFloat(resultado.toFixed(2));
        };
      });
    });
  };

  const calcPercentage = () => { let percentage = display.value / 100; display.value = percentage; valor1 = percentage; };
  const clearDisplay = () => { display.value = ''; calculation.style.display = 'none'; operate(); };
  const clearOne = () => display.value !== '' ? display.value = display.value.slice(0, -1) : 'Não deu!';

  btnPercentage.addEventListener('click', calcPercentage);
  btnClearOne.addEventListener('click', clearOne);
  btnClear.addEventListener('click', clearDisplay);
};

operate();