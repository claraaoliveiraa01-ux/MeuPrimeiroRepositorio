export function questao16():void{

// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não.
// Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
// O sistema deve cadastrar animais, listar por tipo (Mamíferos ou Aves)
// e simular a "hora da alimentação" chamando o método de som de cada um.

abstract class Animal{
    private _nome: string
    private _especie: string
    private _idade: number
    private _sexo: string

    constructor(nome:string, especie:string, idade:number, sexo:string){
        this._nome=nome
        this._especie=especie
        this._idade=idade
        this._sexo=sexo
    }

    public get nome(): string {
        return this._nome
    }

    public set nome(value: string) {
        this._nome = value
    }

    public get especie(): string {
        return this._especie
    }

    public set especie(value: string) {
        this._especie = value
    }

    public get idade(): number {
        return this._idade
    }

    public set idade(value: number) {
        this._idade = value
    }

    public get sexo(): string {
        return this._sexo
    }

    public set sexo(value: string) {
        this._sexo = value
    }

    abstract emitirSom():void
    abstract mover():void
}


class Mamíferos extends Animal{

    private _tipoAlimentacao: number
    private _som: string
    private _movimento: string

    constructor(
        tipoAlimentacao:number,
        som:string,
        movimento:string,
        nome:string,
        especie:string,
        idade:number,
        sexo:string
    ){
        super(nome,especie,idade,sexo)
        this._tipoAlimentacao=tipoAlimentacao
        this._som=som
        this._movimento=movimento
    }

    public get tipoAlimentacao(): number {
        return this._tipoAlimentacao
    }

    public set tipoAlimentacao(value: number) {
        this._tipoAlimentacao = value
    }

    public get som(): string {
        return this._som
    }

    public get movimento(): string {
        return this._movimento
    }

    emitirSom(): void {
        console.log(`Som: ${this.som}`)
    }

    mover(): void {
        console.log(`Movimento: ${this.movimento}`)
    }

    ExibirMamiferos():void {

        console.log(`Informações do Mamífero:
        Nome: ${this.nome}
        Espécie: ${this.especie}
        Idade: ${this.idade}
        Sexo: ${this.sexo}
        Tipo de Alimentação: ${this.tipoAlimentacao}`)

        this.emitirSom()
        this.mover()
    }
}


class Ave extends Animal{

    private _migracao: boolean
    private _som: string
    private _movimento: string

    constructor(
        migracao:boolean,
        som:string,
        movimento:string,
        nome:string,
        especie:string,
        idade:number,
        sexo:string
    ){
        super(nome, especie, idade, sexo)
        this._migracao=migracao
        this._som=som
        this._movimento=movimento
    }

    public get migracao(): boolean {
        return this._migracao
    }

    public set migracao(value: boolean) {
        this._migracao = value
    }

    public get som(): string {
        return this._som
    }

    public get movimento(): string {
        return this._movimento
    }

    emitirSom(): void {
        console.log(`Som: ${this.som}`)
    }

    mover(): void {
        console.log(`Movimento: ${this.movimento}`)
    }

    ExibirAves():void {

        console.log(`Informações da Ave:
        Nome: ${this.nome}
        Espécie: ${this.especie}
        Idade: ${this.idade}
        Sexo: ${this.sexo}
        São migratórias: ${this.migracao ? "Sim" : "Não"}`)

        this.emitirSom()
        this.mover()
    }
}


let animais: Animal[]=[]

let nome:string
let especie:string
let idade:number
let sexo:string
let migracao:string
let alimentacao:number
let som:string
let movimento:string
let quantidade:number
let op:number


quantidade=Number(prompt("Quantos animais deseja cadastrar?"))


for(let i=0; i<quantidade; i++){

    op=Number(prompt("Informe se o animal é 1-Mamífero ou 2-Ave:"))

    if(op==1){

        nome=String(prompt("Informe o nome do mamífero: "))
        especie=String(prompt("Informe a espécie do mamífero: "))
        idade=Number(prompt("Informe a idade do mamífero: "))
        sexo=String(prompt("Informe o sexo do mamífero F/M: ")).toUpperCase()
        alimentacao=Number(prompt("Informe o tipo de alimentação: 1-Carne | 2-Folhas"))
        som=String(prompt("Qual som o mamífero faz? "))
        movimento=String(prompt("Como o mamífero se move? "))

        let mamifero = new Mamíferos(
            alimentacao,
            som,
            movimento,
            nome,
            especie,
            idade,
            sexo
        )

        animais.push(mamifero)
    }

    else if(op==2){

        nome=String(prompt("Informe o nome da ave: "))
        especie=String(prompt("Informe a espécie da ave: "))
        idade=Number(prompt("Informe a idade da ave: "))
        sexo=String(prompt("Informe o sexo da ave F/M: ")).toUpperCase()
        migracao=String(prompt("A ave é migratória? S-Sim/N-Não")).toUpperCase()
        som=String(prompt("Qual som a ave faz? "))
        movimento=String(prompt("Como a ave se move? "))

        let ave = new Ave(
            migracao == "S",
            som,
            movimento,
            nome,
            especie,
            idade,
            sexo
        )

        animais.push(ave)
    }

    else{
        alert("Opção Inválida!")
    }
}


// LISTAR OS ANIMAIS

console.log("===== ANIMAIS CADASTRADOS =====")

for(let animal of animais){

    if(animal instanceof Mamíferos){
        animal.ExibirMamiferos()
    }

    else if(animal instanceof Ave){
        animal.ExibirAves()
    }
}

}