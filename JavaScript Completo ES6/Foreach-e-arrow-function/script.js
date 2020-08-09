// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('[src ^= "imagem"]')
console.log(imagens2);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#]')
console.log(linksInternos)
// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao');
const oH2 = animaisDescricao.querySelector('h2');
console.log(oH2)
// Selecione o último p do site
const ultimoParagrafo = document.querySelector('p:last-child')
console.log(ultimoParagrafo)