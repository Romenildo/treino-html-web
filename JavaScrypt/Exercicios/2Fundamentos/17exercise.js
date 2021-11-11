/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

const forPay = [
	{nome: "Jornal online", categoria: "Informação", preco: 89.99},
	{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]

const prices = e=>e.preco
const reducer = (before, after)=>before+after

const sumAll = arr => arr.map(prices).reduce(reducer)

console.log(sumAll(forPay))
