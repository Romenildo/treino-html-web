/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

const FourOperation = (a,b) =>{
	console.log(`Sum = ${a+b} \n subtraction = ${a-b} \n multiplication = ${a*b} \n Division = ${(a/b).toFixed(2)}`)
}


FourOperation(5,9)
