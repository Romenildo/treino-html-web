/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

const between = (number, minimun, maximun, included)=>{
	
  const checkIncluded = number>=minimun && number<=maximun?true:false
  const checkNotIncluded = number>minimun && number<maximun?true:false
  
  return included?checkIncluded:checkNotIncluded
}

console.log(between(10,0,100,true))
console.log(between(10,50,100,false))

console.log(between(50,50,100,false))
console.log(between(,50,100,true))
