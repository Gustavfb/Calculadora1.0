//função calculate
export function calculate() {
  const resultInput = document.getElementById("result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value); //eval calcula o resultado dentro do javascript, tomar cuidado ao utilizar o EVAL, pode ser perigoso
  resultInput.value = result; //atribui ao resultInput o result
  resultInput.classList.remove("error");
}
