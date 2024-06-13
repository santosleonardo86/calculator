const display = document.querySelector('.display');
const btnInput = document.querySelectorAll('.btn-input');
const btnEspecial = document.querySelectorAll('.btn-especial');
const btnDot = document.querySelector('.btn-dot');
const btnClear = document.querySelector('.btn-clear');
const btnClearOne = document.querySelector('.btn-clear-one');
const btnEqual = document.querySelector('.btn-equal');
const btnDiv = document.querySelector('.btn-div');
const btnMult = document.querySelector('.btn-mult');
const btnSubt = document.querySelector('.btn-subt');
const btnSum = document.querySelector('.btn-sum');
const btnPercentage = document.querySelector('.btn-percentage');

const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

function operate(op, num1, num2) {
  let valor1, valor2, operator, resultado;

  for (let i = 0; i < btnInput.length; i++) {
    btnInput[i].onclick = () => display.value += btnInput[i].textContent;

    function attValor1() {
      num1 = display.value;
      valor1 = Number(num1);
      console.log(valor1, 'Valor 1');
    };

    btnInput[i].addEventListener('click', attValor1, false);

    op = [btnDiv, btnMult, btnSubt, btnSum];

    for (let i = 0; i < op.length; i++) {
      operator = op[i]

      operator.addEventListener('click', () => {
        display.value = '';
        console.log(op[i].innerText);
        attValor2();
      });
    }

    function attValor2() {
      btnInput[i].removeEventListener('click', attValor1)

      btnInput[i].addEventListener('click', () => {
        num2 = display.value;
        valor2 = Number(num2);
        console.log(valor2, 'Valor 2');
      });
    };
  };

  for (let i = 0; i < btnEspecial.length; i++) {
    btnEspecial[i].addEventListener('click', () => {
      btnEqual.addEventListener('click', () => {
        let teste = op
        if (valor1 !== '' && valor2 !== '' && op !== '') {
          teste = ''
          if (i == 0) resultado = div(valor1, valor2);
          else if (i == 1) resultado = mult(valor1, valor2);
          else if (i == 2) resultado = subt(valor1, valor2);
          else if (i == 3) resultado = add(valor1, valor2);
          valor2 = ''
          valor1 = resultado
          display.value = parseFloat(resultado.toFixed(2));

          console.log(valor1, 'Teste');
          console.log(valor2, 'Teste2');
        }
      })
    });
  }

  const calcPercentage = () => { let percentage = display.value / 100; display.value = percentage; valor1 = percentage; }
  const clearDisplay = () => { display.value = ''; operate() };
  const clearOne = () => display.value !== '' ? display.value = display.value.slice(0, -1) : 'Não deu!';

  btnPercentage.addEventListener('click', calcPercentage);
  btnClearOne.addEventListener('click', clearOne);
  btnClear.addEventListener('click', clearDisplay);
};

operate();



