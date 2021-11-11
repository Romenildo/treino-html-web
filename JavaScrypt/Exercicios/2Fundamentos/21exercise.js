/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado
*/

const luckFunction = number =>{
	const randomNumber = Math.ceil(Math.random()*11)
  const messageWin = `Parabens! O numero sorteado foi ${randomNumber}`
  const messageLose = `Que pena! O número sorteado foi o ${randomNumber}`
  
  console.log(number==randomNumber?messageWin:messageLose)
}

luckFunction(2)
