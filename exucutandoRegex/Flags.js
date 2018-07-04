// g - global - Busca todas as ocorrencias dentro do texto. Se não for passado, o comando para ao encontrar a primeira ocorrencia
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado'

// Match - Funcao para busca utilizando regex
console.log(texto.match(/C|ab/)) 
console.log(texto.match(/c|ab/i)) 
console.log(texto.match(/C|ab/g)) 
console.log(texto.match(/c|ab/ig)) 

