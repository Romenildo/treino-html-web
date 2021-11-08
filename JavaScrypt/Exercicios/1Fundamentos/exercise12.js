//12) Faça um algoritmo que calcule o fatorial de um número.


function fatorial(num){
	let result=1;
  
	for(let i = 1; i <= num; i++){
  	result *= i 
  }
  return result
}

console.log(fatorial(4))
