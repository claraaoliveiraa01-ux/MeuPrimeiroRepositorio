// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total


let num:number = 1
let contN = 0
let somaN = 0
while(num != 0 ){
num = Number(prompt("Digite um número, ou digite 0 para encerrar: "))
    
    contN = contN + 1 
    somaN = somaN + num
}

console.log("A quantidade de numeros digitados é: "+(contN-1))
console.log("A soma dos numeros é: "+ somaN)