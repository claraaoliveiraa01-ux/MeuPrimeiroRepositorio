export function questao8():void{
// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

class Funcionario{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
    exibirFuncionario():void{       
    console.log(`INFORMAÇÕES:
    Nome: ${this.nome}
    Cargo: ${this.cargo}
    Salário: ${this.salario}`)
    }    
}

let listarFuncionarios:Funcionario[]=[]
let quantidade = Number(prompt("Quantos funcionários deseja cadastrar?"))

for (let i = 0; i < quantidade; i++) {
        let nome=String(prompt("Informe o nome do Funcionário:"))
        let cargo=String(prompt("Informe o cargo do Funcionário: "))
        let salario=Number(prompt("Informe o valor do salário: "))


        let novoFuncionario = new Funcionario(nome, cargo, salario)
        listarFuncionarios.push(novoFuncionario)
        novoFuncionario.exibirFuncionario()
    }

}