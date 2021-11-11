/*
Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

const simpleAverage = arr => {
	const size = arr.length
	return (arr.reduce((b,a)=>b+a))/size
}

console.log(simpleAverage([7,7,8,8]))

/*
Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

const triangleBase = (base, high) => parseFloat((base*high/2).toFixed(2))

console.log(triangleBase(7,9))

/*
Criar uma função que receba um array de números e retorne o menor número desse array
*/

const smallestInArray = arr => {
	arr.sort()
  console.log(arr[0])
}

smallestInArray([7,6,4,7,4,6,8,3,5,3,56,2,5,7,8])
