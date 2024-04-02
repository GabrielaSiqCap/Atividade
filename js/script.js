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

const exercicio9 = () => {
    let resposta = document.getElementById("resposta");
    resposta.innerText = "";
    resposta.innerHTML = `<h2>Resposta da Atividade</h2>`;
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}