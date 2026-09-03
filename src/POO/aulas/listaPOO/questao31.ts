export function questao31():void{
    // 31.0 projeto socioambiental "Flor&Ser" abriu inscrições para propostas de reflorestamento no campus do IFS Tobias Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor) deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As subclasses Projeto Verde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via polimorfismo.
// Requisitos mínimos:
// ⚫ nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// Cálculo de média com laço sobre os projetos cadastrados.
// Filtro e exibição dos projetos acima da média.
// Chamada polimórfica a descricaoCategoria() na exibição final.


abstract class Projeto{
    private _titulo: string
    private _coordenador: string
    private _nota: number


    constructor(tit: string,coor: string,nota:number){
        this._titulo = tit
        this._coordenador = coor
        this._nota = nota


    }
    get nota():number{
        return this._nota
    }
    set nota(valor:number){
        if(valor>=0 && valor<=10){
            this._nota=valor
        }
        else{
            console.log("Valor invalido")
        }
    }
    abstract descricaoCategoria():void


}
    class ProjetoVerde extends Projeto{
        constructor(tit:string, coor:string, nota:number){
            super(tit, coor, nota)
        }
    public descricaoCategoria(): void{
        console.log("Bem vindo ao projeto verde, filho do projeto original")
        }
    }
   


    class ProjetoCultural extends Projeto{
    constructor(tit:string, coor:string, nota:number){
        super(tit, coor, nota)
    }
    public descricaoCategoria():void{
          console.log("Projeto Cultural - Conscientização")
    }
}



}