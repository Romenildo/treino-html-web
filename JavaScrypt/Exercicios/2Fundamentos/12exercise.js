/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro
*/

const filterNumbers = arr =>{
	const newArr = arr.filter(e=>typeof e == "number")
  return newArr
}

console.log(filterNumbers([1,"computer","Welcome", 6, 10, true, "hello"]))

console.log(filterNumbers(["a", "b"]))
