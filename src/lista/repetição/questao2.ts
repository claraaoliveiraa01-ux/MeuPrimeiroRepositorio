// 2. Desenvolva a tabuada de um número 

let numero:number = Number(prompt("Digite um número: "))

for(let i=0; i<11 ; i++){
    console.log(numero + "*" + i + "=" + numero*i)
}