let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let res = document.getElementById("resultado") as HTMLSpanElement;

let teset: boolean = true;

function calcular(n1: number, n2: number) {
  console.log(numero1, numero2);
  return n1 + n2;
}

botao.addEventListener("click", function () {
  res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
