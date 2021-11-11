/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado
*/

const duplicateValueInArray = (value, times) =>{
	const auxArray = []
  for(let i = 0; i < times; i++){
  	auxArray.push(value)
  }
  return auxArray
}

console.log(duplicateValueInArray("Whoa",4))

/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/
const lineWithPlus = size =>{
const auxArray = []
	for(let i = 0; i<size;i++){
  	auxArray.push("+")
  }
  
  const string = auxArray.reduce((anterior,proximo)=>anterior+proximo)
  return string
}

console.log(lineWithPlus(30))


/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array
*/

const firstAndLast = array =>{
	const newArray = [array[0],array[array.length-1]]
  return newArray
}

console.log(firstAndLast([1,2,6,1,2,121,4,9]))
















