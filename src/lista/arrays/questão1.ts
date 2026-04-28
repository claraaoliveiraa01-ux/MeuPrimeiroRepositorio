// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa
let vetor=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let pares =[]
let impares= []
let multi= []

// correr o vetor
for (let i=0; i<vetor.length -1; i++){
    if (vetor [i]%2 ==0){
        pares.push(vetor[i])
    }else if (vetor[i]%2==1){
        impares.push (vetor[i])
    }if (vetor[i]%2==0 && vetor[i]%3==0 && vetor[i]%4==0){
        multi.push(vetor[i])
    }
}
console.log ("Pares: "+pares)
console.log (" Impares: " + impares)
console.log (" Multiplos: "+ multi)