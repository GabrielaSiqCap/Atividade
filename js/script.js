const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += ` #${i}`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "  <h2>Resposta da Atividade</h2>";
  for (let i = 0; i <= document.getElementById(`num`).value; i += 2) {
    document.getElementById("resposta").innerHTML += ` #${i}`;
    console.log(i);
  }
};

//-------------------------------------------------------------------------------------

const exercicio3 = () => {
  let numInform = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (numInform <= 1) {
    error.innerText = ` O número ${numInform} não é primo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei variavel para primo

    for (let i = 2; i < numInform; i++) {
      if (numInform % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (result.innerText = `O número ${numInform} é primo!`)
      : (error.innerText = `O número ${numInform} não é primo!`);
  }
};

//-------------------------------------------------------------------------------------

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  resultado.innerText = "";
  erro.innerText = "";
  if (num < 0) {
    erro.innerText = `Informe apenas números positivos!`;
    resultado.innerText = "";
  } else {
    for (let i = 0; i <= 10; i++) {
      resultado.innerHTML += `${num} X ${i} = ${num * i} <br>`;
      console.log(i);
    }
  }
};

//-------------------------------------------------------------------------------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let contador = 0;
  let resultado = document.getElementById("resultado");

  resultado.innerText = "";
  while (num >= contador) {
    if (contador % 2 !== 0) resultado.innerText += `${contador}. `;
    contador++;
  }
};

//-------------------------------------------------------------------------------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  //   let resposta = document.getElementById("resposta");

  let soma = 0;
  let contd = 0;

  result.innerText = "";

  while (contd <= num) {
    if (contd % 2 == 0) {
      soma += contd;
    }
    contd++;
  }
  result.innerHTML = `A soma dos números pares é: ${soma}`;
  // resposta.innerHTML += `<p>A soma dos números pares é: ${soma}</p>`;
};

//-------------------------------------------------------------------------------------

const exercicio7 = () => {
  let respos = document.getElementById("resposta");
  respos.innerText = "";
  respos.innerHTML = `<h2>Resposta da Atividade</h2>`;
  var contador = 10;

  while (contador >= 1) {
    respos.innerHTML += `#${contador} `;
    contador--;
  }
};

//-------------------------------------------------------------------------------------

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

//-------------------------------------------------------------------------------------

const exercicio9 = () => {
  let resposta = document.getElementById("resposta");
  resposta.innerText = "";
  resposta.innerHTML = `<h2>Resposta da Atividade</h2>`;
  let soma = 0;

  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  resposta.innerHTML = `A soma dos números de 1 a 100: ${soma}`;
};

//-------------------------------------------------------------------------------------

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  result.innerHTML = "";
  let contador = 0;
  let soma = 0;

  if (num <= 0) {
    error.innerText = "Informe apenas números positivos!";
  } else {
    while (contador <= num) {
      soma += contador;
      contador++;
    }
    result.innerHTML += `A soma é: ${soma}<br>`;
    result.innerHTML += `A média da soma de 0 ao número ${num} é: ${
      soma / num
    }`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio11 = () => {
  let respos = document.getElementById("resposta");
  respos.innerText = "";

  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
      respos.innerText += ` #${i} `;
    }
  }
};

//-------------------------------------------------------------------------------------
/*
  "1"+"2" = 12  // soma de textos
  parseInt(1 + 2) = 3
  "a"+"b" = ab 

*/
const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let soma = 0;
  let nrDigitos = num.length;

  result.innerText = "";

  if (parseInt(num) <= 9) {
    erro.innerHTML = `Favor, informar números com mais de um dígito!`;
  } else {
    erro.innerHTML = "";
    for (let i = 0; i < nrDigitos; i++) {
      soma += parseInt(num[i]);
    }
    result.innerText = `A soma dos digitos do numero ${num} é ${soma}`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "Favor informar apenas números positivos!";
  } else {
    //result.innerHTML = verificaPrimo(num1);
    for (let i = num1; i <= num2; i++) {
      let teste = verificaPrimo(i);
      if (teste == true) {
        result.innerHTML += ` ${i}`;
      }
    }
  }
};

function verificaPrimo(num) {
  let primo = true; //declarei variavel para primo
  for (let i = 2; i < num; i++) {
    if (num % i == 0) primo = false; // % resto da divisão
  }
  return primo;
}

//-------------------------------------------------------------------------------------

const exercicio14 = () => {
  let lado1 = document.getElementById("num1").value;
  let lado2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  result.innerHTML = "";
  erro.innerText = "";
  let area = lado1 * lado2;

  if (lado2 <= 0 || lado1 <= 0) {
    erro.innerText =
      "Favor, informar apenas valores positivos, pois não existem medidas negativas!";
  } else if (lado1 == lado2 || lado2 == lado1) {
    result.innerHTML = `A área do quadrilátero de lados de ${lado1}cm é de: ${area} cm*2 !`;
  } else {
    result.innerHTML = `A área do retângulo de lados de ${lado1} e ${lado2}, é de: ${area} uniddaes² !`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  result.innerHTML = "";
  erro.innerText = "";
  let areaCir = math.PI * raio * 2;

  if (raio <= 0) {
    erro.innerText =
      "Favor, informar apenas valores positivos, pois não existem medidas negativas!";
  } else {
    result.innerHTML = `A área do círculo com raio ${raio} é de: ${areaCir} uniddaes² !`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";
  let areaTriang = (base * altura) / 2;

  if (altura <= 0 || base <= 0) {
    error.innerText =
      "Favor, informar apenas valores positivos, pois não existem medidas negativas!";
  } else {
    error.innerText = "";
    result.innerHTML = `A área do triângulo de base ${base} e altura ${altura} é de ${areaTriang} uniddaes² !`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value;
  let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";
  let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;

  if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
    error.innerText =
      "Favor, informar apenas valores positivos, pois não existem medidas negativas!";
  } else {
    error.innerText = "";
    result.innerHTML = `A área do trapézio é de ${areaTrapezio} uniddaes² !`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio19 = () => {
  let dataInf = document.getElementById("data").value;
  let dataAtual = new Date();
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  result.innerHTML = "";
  error.innerText = "";

  if (dataInf == "") {
    error.innerText = "Favor informar uma data";
  } else {
    error.innerText = "";
    dataInf = new Date(dataInf);

    let diferenca = dataAtual.getTime() - dataInf.getTime();
    // result.innerText = diferenca;
    const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    result.innerText += `Idade: ${idade} Anos`;
  }
};

//-------------------------------------------------------------------------------------

const exercicio20 = () => {
let frase = document.getElementById("frase").value;
let error = document.getElementById("erro");
let result = document.getElementById("resultado");
error.innerText = "";
result.innerText = "";

let inversa = "";

if (frase === "") {
  error.innerText = "Favor informar uma frase!";
  result.innerText = "";
} else {
  error.innerText = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    inversa += frase[i];
  }
  result.innerText = `${inversa}`;
}
};

//-------------------------------------------------------------------------------------

// const exercicio21 = () => {
// let frase = document.getElementById("frase").value;
// let error = document.getElementById("erro");
// let result = document.getElementById("resultado");
// error.innerText = "";
// result.innerText = "";

// if (frase == "") {
//   error.innerText = "Favor informar uma frase!";
//   result.innerText = "";
// } else {
//   error.innerText = "";
  
// }
// };

//-------------------------------------------------------------------------------------

// const exercicio22 = () => { 
//   let num = document.getElementById("num");
//   let resposta = document.getElementById("resposta");
//   let resultado = document.getElementById("resultado");
//   let error = document.getElementById("erro");
//   error.innerText = "";
//   resultado.innerText = "";
// };