import { themeSwitcher } from "./themeSwitcher.js";
import { calculate } from "./calculate.js";
import { copyToClipboard } from "./copyToClipboard.js";
import { botoesChar, teclas } from "./dataEntry.js";

const input = document.querySelector("input"); // pega o input principal em que sera digitado os numeros
const main = document.querySelector("main");

//o input recebe um evento, que é ativado ao pressionar uma tecla"keydown""
//previne que a tecla clicada seja inserida, para poder controlar a entrada ev.preventDefault
//confere se a tecla clicada(ev.key) esta incluida nas teclas permitidas(allowedKeys)
//manualmente adiciona a tecla no input
input.addEventListener("keydown", teclas);

//adiciona o evento calculate ao botao "equal" quando ele for clicado
document.getElementById("equal").addEventListener("click", calculate);

// Selecionando todos os elementos com a classe .charKey
document.querySelectorAll(".charKey").forEach(botoesChar); //chama a função botoesChar

//seleciona o botao C com id "clear" e adiciona o valor "" assim limpando o input
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher); //chama a função importada "themeSwitcher"

// Selecionando o botão com o ID 'copyToClipboard' e adicionando um evento de clique
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard); //chama a função copyToClipboard
