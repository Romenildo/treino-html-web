/*
Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela
*/

const contWords = text=>{
	const separedWords = text.split(' ')
  console.log(separedWords.length)
  
}

contWords("hoje é um novo dia de um novo tempo tabi tabi")
