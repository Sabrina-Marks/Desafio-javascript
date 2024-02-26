// Exercicio 1
var valor1 = 10
var valor2 = 2

if(valor1>=valor2){
    console.log(valor1)
}else {
    console.log(valor2)
}

//Exercicio 2
const nascimentoA = 2005
const anoAtual = 2024
var idadeAprovção = anoAtual-nascimentoA
if(idadeAprovção<16){
    console.log("não pode votar")
} else {
console.log("pode votar")
}
//Exercicio 3
var senha = "1234"
if(senha==="1234") {
console.log("ACESSO PERMITIDO")
}else {
    console.log("ACESSO NEGADO")
}

//Exercicio 4
var macaUnidade = 0.30
var macaDuzia = 0.25
var pessoa = 1
if(pessoa>=12){
    console.log(macaDuzia*pessoa)
}else{
    console.log(macaUnidade*pessoa)
}