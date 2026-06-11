// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.
let salarioTotalF = 0
let maiorSalario = 0
let nomeMaiorSalario= ""
let contMasculino = 0
let contFeminino = 0
let qntFuncionarios = 0
let percentualFem=0
let percentualMasc=0
let salarioT=0

let op=0
while(op!=-1){
let nome:string=String(prompt("Informe o nome do funcionário: "))
let horaT:number=Number(prompt("Informe a quantidade de horas trabalhadas: "))
let salarioH:number = Number(prompt("Informe seu salario por hora: "))
let sexo:string = String(prompt("Informe seu sexo: F-feminino e M-masculino")).toLocaleUpperCase()

    salarioT=salarioH*horaT
    salarioTotalF=salarioTotalF+salarioT
    qntFuncionarios++
if(salarioT>maiorSalario){
    maiorSalario=salarioT
    nomeMaiorSalario=nome
}
if(sexo==="F"){
    contFeminino++
}if(sexo==="M"){
    contMasculino++
}
percentualFem=(contFeminino/qntFuncionarios)*100
percentualMasc=(contMasculino/qntFuncionarios)*100
op= Number(prompt("Para encerrar o programa digite -1."))
}
console.log ("O salario total dos funcionário é: "+salarioTotalF)
console.log("O maior salario foi: "+maiorSalario + " O nome de quem recebeu o maior salario é: "+ nomeMaiorSalario)
console.log ("A quantidade de mulheres é: "+contFeminino+ " A quantidade de homens é: "+contMasculino)
console.log("O percentual de mulheres é: "+ percentualFem +"%" + " O percentual masculino é: "+percentualMasc)
