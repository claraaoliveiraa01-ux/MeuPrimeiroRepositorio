// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function questao4():void{
class Retangulo {
    comprimento: number;
    largura: number;

    constructor(comprimento: number, largura: number) {
        this.comprimento = comprimento
        this.largura = largura
    }
    calcularArea(): number {
        return this.comprimento * this.largura
    }

    calcularPerimetro(): number {
        return (this.comprimento + this.largura) * 2
    }
}
let comprimento = Number(prompt("Informe o comprimento do local:"))
let largura = Number(prompt("Informe a largura do local:"))

let calculo = new Retangulo(comprimento, largura)

alert(`Medidas do local:
    Comprimento: ${comprimento} m
    Largura: ${largura} m
    Quantidade de pisos necessária: ${calculo.calcularArea()} m²
    Quantidade de rodapés necessária: ${calculo.calcularPerimetro()} m`
)
}