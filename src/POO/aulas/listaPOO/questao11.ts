export function questao11():void{
// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

class Pedidos{
    private _nomeCliente:string
    private _pedido:string
    private _valor:number

    constructor(nomeCliente:string, nomePedido:string, valor:number){
        this._nomeCliente=nomeCliente
        this._pedido=nomePedido
        this._valor=valor
    }
    public get nomeCliente(){
        return this._nomeCliente
    }
    public set nomeCliente(value: string) {
        this._nomeCliente = value
    }
    public get pedido(): string {
        return this._pedido
    }
    public set pedido(value: string) {
        this._pedido = value
    }
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }
    exibirResumo(){
    console.log(`PEDIDO:
    Nome do Cliente: ${this._nomeCliente} 
    Nome Pedido: ${this._pedido}
    Valor: ${this._valor} `
)
    }
}
let op=Number(prompt("Escolha uma opção: 1-Fazer Pedido  2-Encerrar"))

while(op!==2){
        let nomeCliente=String(prompt("Informe o nome do cliente: "))
        let nomePedido=String(prompt("Informe o seu pedido: "))
        let valor=Number(prompt("Informe o valor: "))

        let novoPedido = new Pedidos (nomeCliente, nomePedido, valor)
        novoPedido.exibirResumo()

        op=Number(prompt("Escolha uma opção: 1-Fazer Pedido  2-Encerrar"))
    }

}