/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

*/

const sumTotal = arr => arr.reduce((total,atual)=> total+atual)

console.log(sumTotal([1,2,3,4,5,6,2]))
