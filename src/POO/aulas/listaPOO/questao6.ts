export function questao6():void{
// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo.
// Os métodos são os seguintes: alterarNome, depósito e saque.
// No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios. Por
// fim, faça com que esse sistema interaja com o usuário permitido que ele, depois de cadastrar as suas
// informações, possa usar os métodos disponíveis.
class ContaCorrente{
    numeroDeConta:number
    nome:string
    saldo=0
    constructor(numeroDeConta:number, nome:string){
        this.numeroDeConta=numeroDeConta
        this.nome=nome
    }
    alteraNome(novoNome:string){
        this.nome=novoNome
    }
    depositar(deposito:number){
        this.saldo=this.saldo+deposito
    }sacar(saque:number){
        this.saldo=this.saldo-saque
    }
    }
    let numeroConta=Number(prompt("Informe o numero da conta: "))
    let nomeUsuario=String(prompt("Informe o nome do correntista: "))

    let conta= new ContaCorrente(numeroConta, nomeUsuario)
    let novoNome:string, deposito:number,saque:number
    let op=1
    while(op!=-0){
        op=Number(prompt("Informe a opção: 0-Sair | 1-Alterar nome | 2-Fazer deposito | 3- Fazer saque: "))
        if(op==1){
            novoNome=String(prompt("Informe o novo nome: "))
            conta.alteraNome(novoNome)
            console.log(`Nome alterado com sucesso! `)
        }else if(op==2){
            deposito=Number(prompt("Informe o valor do deposito: "))
            conta.depositar(deposito)
            console.log(`Deposito realizado com sucesso! saldo atual: ${conta.saldo}`)
        }else if (op==3){
            saque=Number(prompt("Informe o valor do saque: "))
            conta.sacar(saque)
            console.log(`Saque realizado com sucesso! saldo atual: ${conta.saldo}`)
        }
    }console.log(`NOME: ${conta.nome}`)
    console.log(`NUMERO DA CONTA" ${conta.numeroDeConta}`)
    console.log(`SALDO: ${conta.saldo}`)
}