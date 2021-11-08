/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua trêscasos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crientambém um default, que retornará uma mensagem de erro no console.
*/

const checkFruit = fruit => {
	switch(fruit.toLowerCase()){
  	case "maçã":
    	console.log("Não vendemos esta fruta aqui")
      break
     case "kiwi":
    	 console.log("Estamos com escassez de kiwis")
     	 break
     case "melancia":
     	console.log("Aqui está, são 3 reais o quilo")
      break
     default:
     	console.log("Erro no console de entrada")
  }

}

checkFruit("Maçã")
checkFruit("KiWi")
checkFruit("Astralopitecos")
checkFruit("melanCIA")
