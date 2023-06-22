alert("Hello World!, este é um calculador e verificador de valores");

let numero1 = prompt("Digite o primeiro valor:");
checkValue(numero1);

let numero2 = prompt("Digite o segundo valor:");
checkValue(numero2);

function checkValue(numero) {
  if (numero === null || numero.trim() === "") {
    alert("Nenhum valor foi inserido");
  } else if (!isNaN(numero)) {
    if (numero % 2 === 0) {
      alert("É um número par");
    } else {
      alert("É um número ímpar");
    }
  } else if (numero === "true" || numero === "false") {
    alert("É um booleano");
  } else {
    alert("É uma string");
  }
}

numero1 = Number(numero1);
numero2 = Number(numero2);

const resultado = math(numero1, numero2);

function math(numero1, numero2) {
  const soma = (numero1 + numero2).toFixed(2);
  const subtracao = (numero1 - numero2).toFixed(2);
  const multiplicacao = (numero1 * numero2).toFixed(2);
  const divisao = (numero1 / numero2).toFixed(2);

  window.alert(`A soma é: ${soma}\nA subtração é: ${subtracao}\nA multiplicação é: ${multiplicacao}\nA divisão é: ${divisao}`);

  return { soma, subtracao, multiplicacao, divisao };
}
