export function questao7():void{
// Repetição
// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome, cargo e salário
// . Crie um método que receba um percentual de aumento e atualize o salário do funcionário, exibindo o seu nome e novo valor.
class Empresa{
    nome:string
    cargo:string
    salario:number
    constructor(nome:string,cargo:string, salario:number){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }
    aumentarSalario(percentual:number){
    this.salario=this.salario+(this.salario*percentual/100)
    console.log(`Funcionário: ${this.nome}`)
    console.log(`Novo salário: R$ ${this.salario}`)
    }
}
let nome: string, cargo: string, salario: number, percentual: number
let continuar = 0
while(continuar != -1){
    nome= String(prompt("Digite o nome do funcionario: "))
    cargo= String(prompt("Informe o cargo do funcionario: "))
    salario= Number(prompt("Informe o salario do funcionario: "))
    
    let empresa=new Empresa(nome,cargo,salario)

    percentual = Number(prompt("Digite o percentual de aumento:"))

    empresa.aumentarSalario(percentual)
    continuar=Number(prompt("Digite -1 para encerrar ou 0 para continuar:"))

}}