export function quetao1():void{
let num:number = Number(prompt("Informe um numero: "))
let cont:number = 0
let somatorio:number = 0
while(num !=0){
    cont++
    somatorio = somatorio+num
}
console.log("Contador: "+ cont);
console.log("Somatório: " + somatorio);}