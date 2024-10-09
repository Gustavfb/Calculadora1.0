import { calculate } from "./calculate.js";

function botoesChar(charKeyBtn) {
  // Adicionando um evento de clique a cada botão charKey
  charKeyBtn.addEventListener("click", function () {
    // Obtendo o valor associado ao botão através do atributo data-value
    let value = charKeyBtn.dataset.value;
    // Adicionando o valor ao campo de entrada (input)
    input.value += value;
  });
}

//cria um array para definir quais caracteres serao permitidos ao usuario digitar
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

function teclas(ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  if (ev.key === "Backspace") {
    //pega o valor atual e diminui o ultimo caractere, o .slice serve para cortar
    input.value = input.value.slice(0, -1);
  }
  if (ev.key === "Enter") {
    calculate();
  }
}

export { botoesChar, teclas };
