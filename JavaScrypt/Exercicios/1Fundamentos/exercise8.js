/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

const estatistica = (jogos) => {
	let arrJogos = jogos.split(" ")
  arrJogos = arrJogos.map((value)=>parseInt(value)) //transformar para int os elementos do array
  
  console.log(arrJogos)
  let [melhor, pior,vezesMelhor, posPior] = [arrJogos[0],arrJogos[0],0,0]
  
  for(let i in arrJogos){
  	if(arrJogos[i] > melhor){
    	melhor = arrJogos[i]
      vezesMelhor++
    } else if(arrJogos[i]<=pior){
    	pior = arrJogos[i]
      posPior = i
    }
  }
  return [vezesMelhor, parseInt(posPior)+1]

}

console.log(estatistica("10 20 20 8 25 3 0 30 1"))
