/*
Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares
*/


const filterPairs = arr =>{
	return arr.filter((e,i) =>e%2==0 && i%2==0)
}

console.log(filterPairs([1,3,2,5,3,4,5,6,7,2,4,6,10]))
