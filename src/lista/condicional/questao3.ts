// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let num1:number = Number(prompt("Informe o primeiro número: "))
let num2:number = Number(prompt("Informe o segundo número: "))
let opc:number = Number(prompt("Escolha uma opção: 1-Soma, 2-Subtracao, 3-Multiplicação, 4-Divisão: "))

switch(opc){
    case 1:
        let soma = num1+num2
        console.log("a soma é: "+soma)
    break
    case 2:
        let Subtracao = num1-num2
        console.log("O valor da subtração é: "+Subtracao)
    break
    case 3:
        let Multiplicacao = num1 * num2
        console.log("O valor da multiplicação é:" +Multiplicacao)
    break
    case 4: 
        let divisao = num1 / num2
        console.log("O valor da divisão é: "+divisao)
    break
    default:
        console.log("opcão inválida.")
}