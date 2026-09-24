export function questao15():void{
// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

// 16. Herança Polimorfismo Encapsulamento

abstract class Funcionario{

    public nome: string

    constructor(nome:string){
        this.nome=nome
    }

    abstract calcularSalario():number

    exibirSalario():void{
        console.log(`O nome é ${this.nome} e o salário é ${this.calcularSalario()}`)
    }
}


class FuncionarioAssalariado extends Funcionario{

    salarioFixo:number

    constructor(nome:string, salarioFixo:number){
        super(nome)
        this.salarioFixo=salarioFixo
    }

    calcularSalario():number{
        return this.salarioFixo
    }
}


class FuncionarioHorista extends Funcionario{

    valorHoras:number
    qntHoras:number

    constructor(nome:string, valorHoras:number, qntHoras:number){
        super(nome)
        this.valorHoras=valorHoras
        this.qntHoras=qntHoras
    }

    calcularSalario():number{
        let salarioFinal = this.valorHoras * this.qntHoras
        return salarioFinal
    }
}


let nomeFuncAss:string
let salarioFixoFuncAss:number

let nomeFuncHora:string
let valorporHora:number
let quantHoras:number

let funcionarioASS:FuncionarioAssalariado
let funcionarioHOR:FuncionarioHorista

let tipoFuncionario:number = Number(prompt("Informe o tipo de Funcionário que você é: 1-Assalariado e 2-Horista"))


if(tipoFuncionario==1){

    nomeFuncAss = String(prompt("Informe seu nome: "))

    salarioFixoFuncAss = Number(prompt("Informe seu salário fixo: "))

    funcionarioASS = new FuncionarioAssalariado(
        nomeFuncAss,
        salarioFixoFuncAss
    )

    funcionarioASS.exibirSalario()
}


else if(tipoFuncionario==2){

    nomeFuncHora = String(prompt("Informe seu nome: "))

    valorporHora = Number(prompt("Informe quanto você recebe por hora: "))

    quantHoras = Number(prompt("Informe a quantidade de horas trabalhadas: "))

    funcionarioHOR = new FuncionarioHorista(
        nomeFuncHora,
        valorporHora,
        quantHoras
    )

    funcionarioHOR.exibirSalario()
}


else{
    alert("Opção inválida!")
}}