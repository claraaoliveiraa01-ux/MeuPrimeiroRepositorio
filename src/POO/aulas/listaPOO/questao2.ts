export function questao2():void{// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
class Quadrado{
    tamanho:number
    constructor(tamanho:number){
        this.tamanho=tamanho
    }
    mudarValor(novoT:number){
        this.tamanho=novoT
    }
    retornaValor(){
        return this.tamanho
    }
    calcularArea(){
        let area=this.tamanho**2
        console.log(`O tamanho da área é: ${area}`)
    }
}
let tamanho:number, novoT:number, quadrado
tamanho=Number(prompt("Informe o tamanho dos lados: "))
novoT=Number(prompt("Informe o novo tamanho: "))
quadrado=new Quadrado(tamanho)
quadrado.mudarValor(novoT)
quadrado.retornaValor()
quadrado.calcularArea()
console.log("O novo tamanho é: " + quadrado.retornaValor())
console.log("O tamanho antigo é: "+tamanho)
}