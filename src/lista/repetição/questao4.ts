// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
let numeroP=0
let numeroI=0
let op=0
while(op!=-1){
    let valores:number=(Number(prompt("Informe um numero: ")))
    if(valores%2==0){
        numeroP++
    }else{
        numeroI++
    }
    op=(Number(prompt("Informe um numero ou -1 para encerrar: ")))
}
console.log("A quantidadede de pares é: "+numeroP)
console.log("A quantidadede de impares é: "+numeroI)