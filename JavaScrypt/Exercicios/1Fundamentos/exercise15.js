/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const checkCars = car => {
	switch(car.toLowerCase()){
  	case "hatch":
    	console.log("Compra Efetuada com Sucesso")
      break
     case "sedan":
     case "caminhonete":
     case "motocicleta":
     	console.log("Tem certeza que não prefere este modelo?")
      break
     default:
     	console.log("Não trabalhamos com este tipo de automòvel aqui")
  }

}

checkCars("hatCH")
checkCars("sedan")
checkCars("motocicleta")
checkCars("mercedes")
