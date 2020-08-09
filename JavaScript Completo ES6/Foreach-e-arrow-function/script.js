// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
let z = 0;

paragrafos.forEach(function () {
  console.log(paragrafos[z]);

  z++
});
// Mostre o texto dos parágrafos no console
const paragrafos2 = document.getElementsByTagName('p');
console.log(paragrafos2);


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

