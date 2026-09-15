export function questao14():void{// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.
class Livro{
    private _titulo: string
    private _autor: string
    private _anoPublicacao: number
    private _disponibilidade: boolean
    get titulo(): string {
        return this._titulo
    }
    set titulo(value: string) {
        this._titulo = value
    }
   
    get autor(): string {
        return this._autor
    }
    set autor(value: string) {
        this._autor = value
    }
   
    get anoPublicacao(): number {
        return this._anoPublicacao
    }
    set anoPublicacao(value: number) {
        this._anoPublicacao = value
    }


    get disponibilidade(): boolean {
        return this._disponibilidade
    }
    set disponibilidade(value: boolean) {
        this._disponibilidade = value
    }
    constructor(titulo:string, autor:string, anoPublicacao:number,disponibilidade:boolean){
        this._titulo=titulo
        this._autor=autor
        this._anoPublicacao=anoPublicacao
        this._disponibilidade=disponibilidade
    }
    listarLivros():void{
        console.log(`Livro: ${this.titulo}| Autor: ${this._autor}| Ano publicação: ${this._anoPublicacao} Disponibilidade: ${this._disponibilidade}`)
    }
}
let listarLivros:Livro[]=[]
let novoLivro:Livro
let continuar:number=0
continuar=Number(prompt("Informe quantos livros quer cadastrar: "))
for(let i=0; i<continuar; i++){
    let tit:string, aut:string=""
    let disp:string
    let ano:number
    let disponibilidade:boolean
    tit=String(prompt("Informe o titulo do livro: "))
    aut=String(prompt("Informe o autor do livro:"))
    ano=Number(prompt("Informe o ano de publicação: " ))
    disp=String(prompt("Tem disponibilidade? S-sim N-não: "))?.toUpperCase();


    if(disp == "S"){
        disponibilidade=true
    }else{
        disponibilidade=false
    }
    novoLivro =new Livro(tit, aut, ano, disponibilidade)
    listarLivros.push(novoLivro)
}
for(let i=0; i<listarLivros.length; i++){
    listarLivros[i].listarLivros()
}}
