const texto = "Casa bonita é a casa amarela da esquina com a rua ACASALAR"

const regex = /casa/ig
const regex2 = /casa bonita/i

// Quando nao passamos global utilizando o match ele trará o que achou, o index e a string em que foi procurada
console.log(texto.match(regex))
console.log(texto.match(regex2))
console.log(texto.match(/a b/))
console.log(texto.match(/a c/))
console.log(texto.match(/a a/))