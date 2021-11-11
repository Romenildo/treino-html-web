/*
Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/


const contCharacterInString = (char, string) =>{
	let cont=0
	for(let indice in string){
  	if(char === string[indice]){
    	cont++
    }
  }
  console.log(cont)
}

contCharacterInString("a", "tabi tabi no majo")
