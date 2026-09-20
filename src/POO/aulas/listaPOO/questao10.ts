export function questao10():void{
// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico) com as
// seguintes regras:
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
// qualquer momento.
// Cálculo do Humor (Campo Calculado): O humor não deve ser um atributo salvo no construtor. Ele
// deve ser um método getter público (get humor()) que calcula a média ponderada ou simples da
// felicidade do bichinho.
//  Fórmula do Humor: (Saúde + (10 - Fome)) / 2
//  Regra de Negócio do Humor:
// o Média entre 8.0 e 10.0  &quot;Muito Feliz &quot;
// o Média entre 5.0 e 7.9  &quot;Neutro / Ok &quot;
// o Média abaixo de 5.0  &quot;Triste / Transtornado&quot;

class Bichinho {
    nome:string
    fome:number
    saude:number
    idade:number

    constructor(nome:string, fome:number, saude:number, idade:number) {
        this.nome=nome
        this.fome=fome
        this.saude=saude
        this.idade=idade
    }
    alterarNome(novoNome:string){
        this.nome=novoNome
        return this.nome
    }
    alterarFome(novaFome:number){
        this.fome=novaFome
        return this.fome
    }
    alterarSaude(novaSaude:number){
        this.saude = novaSaude
        return this.saude
    }
    alterarIdade(novaIdade: number){
        this.idade = novaIdade
        return this.idade
    }
    get humor(): string {
        let media=(this.saude + (10 - this.fome))/2
        if (media >= 8) {
            return "Muito Feliz"
        }
        else if (media >= 5) {
            return "Neutro / Ok"
        }
        else {
            return "Triste / Transtornado"
        }
    }
}

let nome:string=String(prompt("Informe o nome do seu bichinho: "))
let fome:number=Number(prompt("Informe de 0 a 10 quanto de fome seu bichinho está: "))
let saude:number=Number(prompt("Informe de 0 a 10 quanto de saúde seu bichinho está: "))
let idade:number=Number(prompt("Informe a idade do seu bichinho: "))

let animal = new Bichinho(nome, fome, saude, idade)

let novoNome:string, novaFome: number, novaSaude: number, novaIdade: number
let op = 0

while (op!= 5) {
    op= Number(prompt("Digite uma opção:1-Alterar nome, 2-Alterar fome, 3-Alterar saúde, 4-Alterar idade, 5 - Sair"))

    if (op== 1) {
        novoNome = String(prompt("Informe o novo nome: "))
        animal.alterarNome(novoNome)

        console.log(`Nome alterado com sucesso! Novo nome: ${animal.nome}`)
    }
    else if (op == 2) {
        novaFome = Number(prompt("Informe de 0 a 10 a nova fome: "))
        animal.alterarFome(novaFome)

        console.log(`Fome alterada com sucesso! Nova fome: ${animal.fome}`)
    }

    else if (op == 3) {
        novaSaude = Number(prompt("Informe de 0 a 10 a nova saúde: "))
        animal.alterarSaude(novaSaude)

        console.log(`Saúde alterada com sucesso! Nova saúde: ${animal.saude}`)
    }

    else if (op == 4) {
        novaIdade = Number(prompt("Informe a nova idade do seu bichinho: "))
        animal.alterarIdade(novaIdade)

        console.log(`Idade alterada com sucesso! Nova idade: ${animal.idade}`)
    }

    else if (op == 5) {
        console.log(`Nome: ${animal.nome}
Fome: ${animal.fome}
Saúde: ${animal.saude}
Idade: ${animal.idade}
Humor: ${animal.humor}
`)
    }

    else {
        console.log("OPÇÃO INVÁLIDA!")
    }
}}