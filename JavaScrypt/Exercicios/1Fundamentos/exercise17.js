/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

const calculedSalary = (workPlan, currentSalary) => {
	switch(workPlan.toUpperCase()){
  	case "A":
    	return currentSalary + currentSalary * 0.1
      
    case "B":
    	return currentSalary + currentSalary * 0.15
      
    case "C":
    	return currentSalary + currentSalary * 0.20
      
    default:
    	return "plano invalido"
  }
}

console.log(calculedSalary("A", 100.00))
console.log(calculedSalary("B", 100.00))
console.log(calculedSalary("C", 100.00))

