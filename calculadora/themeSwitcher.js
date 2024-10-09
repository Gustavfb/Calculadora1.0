export function themeSwitcher() {
  const root = document.querySelector(":root"); // pega o elemento root das cores principais do CSS
  const main = document.querySelector("main"); //pega a tag main do arquivo index.html

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
}
