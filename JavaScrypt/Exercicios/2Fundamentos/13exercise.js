/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/


const pessoa = {
	nome: "Claudia",
  profissao: "Examinadora lux"
}


const transformObjToArray = obj =>{
let newArray=[]
	newArray = Object.keys(obj).map(e=> [e, obj[e]])
	console.log(newArray)
}

transformObjToArray(pessoa)

