export function copyToClipboard(ev) {
  const resultInput = document.getElementById("result");
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
}
