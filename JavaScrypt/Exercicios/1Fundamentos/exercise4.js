/*
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/


(function(dividendo,divisor){
	console.log(` ${dividendo} / ${divisor} = ${Math.floor(dividendo/divisor)} com resto = ${dividendo%divisor}`)
})(200,38)

//Feito com uma função auto invocada
