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
        let salarioFinal = this.valorHoras* this.qntHoras
        return salarioFinal
       
    }}
    let funcionarioASS = new FuncionarioAssalariado("Ana", 3500);
    let funcionarioHOR = new FuncionarioHorista("João", 5, 20);
 
funcionarioASS.exibirSalario();
funcionarioHOR.exibirSalario();
}