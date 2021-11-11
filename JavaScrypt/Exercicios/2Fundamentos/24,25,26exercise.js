/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

const searchSimilarWord = (word, arr) =>{
	const filtedArr = arr.filter(e => e.indexOf(word)>=0)
	console.log(filtedArr)
}

searchSimilarWord("pro",["programação","programado", "indelizado","comprou","inderoprolizatic"])

/*
Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais
*/

const onlyConsonants = text =>{
	text = text.toLowerCase()
	let textWithoutVowal = ''
  
  for(let i in text){
  	if(["a","e","i","o","u"].indexOf(text[i])>=0){
    }else{
    	textWithoutVowal += text[i]
    }
  }
  console.log(textWithoutVowal)
}

onlyConsonants("ROmenildo")


/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
*/


const reverseObj = obj =>{
	const newObj = {}
  	for(let i in obj){
    	newObj[obj[i]] = i
    }
  console.log(newObj)
}

reverseObj({a:"1", b:"2"})


