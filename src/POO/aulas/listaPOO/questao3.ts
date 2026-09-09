export function questao3():void{
//     3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.
    class Retangulo{
        comprimento:number
        largura:number
        constructor(ladoA:number, ladoB:number){
            this.comprimento=ladoA
            this.largura=ladoB
        }


        mudarLados(novoComprimento: number, novaLargura: number): void {
            this.comprimento = novoComprimento;
            this.largura = novaLargura;
        }
        retornarLados():void{
            console.log(`comprimento:${this.comprimento}, | largura:${this.largura}`)
        }
        calcularA():void{
            console.log(`A ares é:${this.largura*this.comprimento}`)
        }
        calcularP():void{
            console.log(2*(this.comprimento+this.largura))
        }
    }


    let ladoA = Number(prompt("Informe o comprimento:"));
    let ladoB = Number(prompt("Informe a largura:"));
    let ret = new Retangulo(ladoA,ladoB)
    let op
    let novaLargura
    let novoComprimento
    let continuar:number=1
    while(continuar!=-1){
    op = Number((prompt("Informe a opção: 1 para mudar os lados, 2 para retornar os lados, 3 Para calcular Area, e 4 para calcular perimetro")))  
    if(op==1){
    novaLargura = Number(prompt("Informe o comprimento:"));
    novoComprimento=Number(prompt("Informe a largura:"));
    ret.mudarLados(novoComprimento, novaLargura);}
    else if (op==2){
    ret.retornarLados()
    }
    else if(op==3)
    { ret.calcularA();}
    else if(op==4){
    ret.calcularP();
    }
    continuar=Number(prompt("Informe a -1 para encerrar:"))}
}




