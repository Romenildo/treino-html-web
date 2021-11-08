/*
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”
*/

const calculaBhaskara = (grau2,grau1,num)  =>{
	const [a,b,c] = [grau2[0]=="-"?-grau2[1]:grau2[0], grau1[0]=="-"?-grau1[1]:grau1[0], num]
  const delta = b**2 - 4*a*c
  
  if(delta < 0){
  	return "Delta é negativo" 
    
  }else{
  	return {	x1: ((-b+Math.pow(delta,0.5))/2*a).toFixed(2),
    					x2: ((-b-Math.pow(delta,0.5))/2*a).toFixed(2) }
  }
}

console.log(calculaBhaskara("2x2","-4x",-6))
console.log(calculaBhaskara("1x2","-3x",-54))
console.log(calculaBhaskara("7x2", "3x", 4))
	
