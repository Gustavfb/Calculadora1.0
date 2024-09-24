const main = document.querySelector("main"); //pega a tag main do arquivo index.html
const root = document.querySelector(":root"); // pega o elemento root das cores principais do CSS
const input = document.querySelector("input"); // pega o input principal em que sera digitado os numeros
const resultInput = document.getElementById("result");

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

//o input recebe um evento, que é ativado ao pressionar uma tecla"keydown""
//previne que a tecla clicada seja inserida, para poder controlar a entrada ev.preventDefault
//confere se a tecla clicada(ev.key) esta incluida nas teclas permitidas(allowedKeys)
//manualmente adiciona a tecla no input
input.addEventListener("keydown", function (ev) {
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
});

//adiciona o evento calculate ao botao "equal" quando ele for clicado
document.getElementById("equal").addEventListener("click", calculate);
//função calculate
function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value); //eval calcula o resultado dentro do javascript, tomar cuidado ao utilizar o EVAL, pode ser perigoso
  resultInput.value = result; //atribui ao resultInput o result
  resultInput.classList.remove("error");
}

// Selecionando todos os elementos com a classe .charKey
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  // Adicionando um evento de clique a cada botão charKey
  charKeyBtn.addEventListener("click", function () {
    // Obtendo o valor associado ao botão através do atributo data-value
    value = charKeyBtn.dataset.value;
    // Adicionando o valor ao campo de entrada (input)
    input.value += value;
  });
});

//seleciona o botao C com id "clear" e adiciona o valor "" assim limpando o input
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.getElementById("themeSwitcher").addEventListener("click", function () {
  //elemento main previamente atribuido valor de "dark", vai verificar se o dataset.theme é de fato "dark"
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9"); //pega a cor de fundo definida anteriormente no CSS e troca pra branco
    root.style.setProperty("--border-color", "#aaa"); //altera a cor da borda para um cinza mais escuro
    root.style.setProperty("--font-color", "#212529"); //altera a cor da fonte de texto para preto
    root.style.setProperty("--primary-color", "#00285a"); //altera a cor dos botoes para azul escuro

    main.dataset.theme = "light";
  } else {
    //se estiver no tema "light" ele passa pro dark
    root.style.setProperty("--bg-color", "#212529"); //pega a cor de fundo definida anteriormente no CSS e troca pra preto
    root.style.setProperty("--border-color", "#666"); //altera a cor da borda para um cinza mais claro
    root.style.setProperty("--font-color", "#f1f5f9"); //altera a cor da fonte de texto para branco
    root.style.setProperty("--primary-color", "#28C2EE"); //altera a cor dos botoes para azul claro

    main.dataset.theme = "dark";
  }
});

// Selecionando o botão com o ID 'copyToClipboard' e adicionando um evento de clique
document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    // Armazenando a referência do botão que foi clicado
    const button = ev.currentTarget;

    // Verificando se o texto do botão é "Copy"
    if (button.innerText === "Copy") {
      // Alterando o texto do botão para "Copyed"
      button.innerText = "Copyed";
      // Adicionando a classe 'success' para estilizar o botão como copiado
      button.classList.add("success");

      // Copiando o texto do campo resultInput para a área de transferência
      navigator.clipboard.writeText(resultInput.value);
    } else {
      // Se o texto não for "Copy", revertendo para "Copy"
      button.innerText = "Copy";
      // Removendo a classe 'success' para restaurar a aparência original
      button.classList.remove("success");
    }
  });
