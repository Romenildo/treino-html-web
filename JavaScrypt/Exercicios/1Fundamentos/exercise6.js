/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples= (capitalInicial=0,taxa=0,tempo=0) => capitalInicial+(capitalInicial* taxa* tempo)

const jurosComposto = (capitalInicial, taxa, tempo) => (capitalInicial*(Math.pow(1+taxa,tempo))).toFixed(2)

console.log(jurosSimples(500.00, 0.08, 12))
console.log(jurosComposto(500.00, 0.08, 12))
