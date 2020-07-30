//OBJETO = APUNHADO DE VARIAVEIS
/*var pessoa = {
  nome: "Gutemberg",
  idade: 24,
  profissao: "Designer",
  possuiFaculdade: false,
};

pessoa.nome; // 'Gutemberg'
pessoa.possuiFaculdade; // false

//MÉTODOS

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
*/
//EXERCICIOS
/*
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: "Gutemberg",
  sobrenome: "Cruz",
  idade: 24,
  altura: 160,
  peso: 47,
  mostrarnome() {
    console.log(this.nome);
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raça: "labrador",
  cor: "preto",
  iade: 10,
  verUmHomem() {
    console.log("Latiu");
  },
};
*/
/*
var nome = "Gutemberg";

nome.length; // 10
nome.charAt(1); // 'n'
nome.replace("te", "to"); // 'Gutoberg'
nome; // 'Gutemberg'

//NUMEROS
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//funcoes
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});
*/
//EXERCICIOS 02
// nomeie 3 propriedades ou métodos de strings
fixed;
length;
slice;
// nomeie 5 propriedades ou métodos de elementos do DOM
addEventListener;
appendChild;
id;
innerHtml;
// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
