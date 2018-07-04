const texto = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F'

// Funcao RegExp cria um espressao regular
const regexNove = RegExp('9', 'i')
console.log(regexNove)
console.log("Métodos do RegExp...")
// test - Testa se a expressão existe dentro do texto passado como parâmetro. Retornará True/False
console.log(regexNove.test(texto))
// exec - Executa a expressão e retorna o que achou
console.log(regexNove.exec(texto))


const regexLetras = /[A-F]/g
console.log("Metodos da String...")
// match - Executa a expressão e retorna o que achou
console.log(texto.match(regexLetras))
// search - Retorna o index do primeiro elemento achado no texto
console.log(texto.search(regexLetras))
// replace - Substitui o achou com o segundo paramentro passado na funcao.
console.log(texto.replace(regexLetras, 'Achei'))
