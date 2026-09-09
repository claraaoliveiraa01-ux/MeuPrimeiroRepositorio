export function questao5():void{
// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.
class Pessoa{
    nome:string
    idade:number
    peso:number
    altura:number
    constructor(nome:string, idade:number, peso:number, altura:number){
        this.nome=nome
        this.idade=idade
        this.peso=peso
        this.altura=altura
    }
    envelhecer() { 
        this.idade++ 
        if (this.idade < 21) { this.crescer() } }
   engordar(ganharP:number){
    let novoP
    novoP=this.peso+ganharP
    this.peso=novoP
    console.log(`seu novo peso é: ${this.peso}`)
}emagrecer(perderP:number){
    let novoP
    novoP=this.peso-perderP
    this.peso=novoP
    console.log(`seu novo peso é: ${this.peso}`)
}
crescer() {
    this.altura += 0.5
}
}
let nome=String(prompt("Informe o nome:"))
let idade=Number(prompt("Informe a idade: "))
let peso=Number(prompt("Informe o peso: "))
let altura=Number(prompt("Informe a altura: "))
let pessoa = new Pessoa(nome, idade, peso, altura)
 let novoComprimento
    let continuar:Number=1
    while(continuar!=-1){
    let op=Number(prompt("Informe a opção: 1 para envelhecer, 2 para engordar, 3 para emagrecer"))
    if(op==1){
        pessoa.envelhecer()
    } 
    else if(op==2){
    let ganharP=Number(prompt("Informe quantos kg vc ganhou: "))
    pessoa.engordar(ganharP)
    }
    else if (op==3){
      let perderP=Number(prompt("Informe quantos kg vc perdeu: "))  
      pessoa.emagrecer(perderP)
    }
     continuar=Number(prompt("Informe -1 para encerrar"))
    }
console.log("Nome:", pessoa.nome)
console.log("Idade:", pessoa.idade)
console.log("Peso:", pessoa.peso)
console.log("Altura:", pessoa.altura)
}
