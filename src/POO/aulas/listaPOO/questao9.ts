export function questao9():void{
    // 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

class Estoque {
    nomeProduto:string
    preco:number
    quantidade:number

    constructor(nomeProduto:string, preco:number, quantidade:number){
        this.nomeProduto = nomeProduto
        this.preco = preco
        this.quantidade = quantidade
    }

    ValorTotal(preco:number, quantidade:number):number{
        let valoT= preco * quantidade
        return valoT
    }
}

let nomeProduto:string = String(prompt("Informe o nome do Produto: "))
let preco:number = Number(prompt("Informe o valor do produto: "))
let quantidadeEstoque:number = Number(prompt("Digite a quantidade de produtos em estoque:  "))

let produto = new Estoque(nomeProduto, preco, quantidadeEstoque )

console.log(`DADOS DO PRODUTO:
        Nome do produto: ${nomeProduto}
        preço: ${preco}
        Quantidade de produtos em estoque: ${quantidadeEstoque}
        Valor total em estoque: ${produto.ValorTotal(preco, quantidadeEstoque)}`)}