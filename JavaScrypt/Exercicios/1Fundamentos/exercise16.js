/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas
*/


const calculator = (value1, signal, value2) => {

	switch(signal){
  	case "+":
    	return value1 + value2
    case "-":
    	return value1 - value2
    case "*":
    case ".":
    	return value1 * value2
    case "/":
    	if(value2 == 0){
      	return "Impossivel dividir por zero"
      }
      return value1/value2
    default:
    	return "Operação Invalida"
  }

}

console.log(calculator(2, "+", 7 ))
console.log(calculator(5, "-", 7 ))
console.log(calculator(9, "*", 7 ))
console.log(calculator(8, "/", 0 ))
console.log(calculator(0, "/", 10 ))
console.log(calculator(10, "/", 2 ))
console.log(calculator(2,"multiplica",7 ))
