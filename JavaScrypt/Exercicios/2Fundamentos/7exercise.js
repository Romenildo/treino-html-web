/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

const multiply = (number1,number2)=>{
let total=0;
	for(number2;number2>0;number2--){
  	total += number1
  }
  return total
}

console.log(multiply(4,3))
