export function questao1():void{
    class Bola {
    cor:string
    circunferencia:number
    material:string
    constructor(cor:string, circunferencia:number, material: string){
        this.cor=cor
        this.circunferencia=circunferencia
        this.material=material
    }
    trocarCor(novaCor:string):void{
        this.cor=novaCor
    }
    mostrarCor():void{
        console.log(`A cor da bola é: ${this.cor}`)
    }
}
let corBola:string, circunferenciaB:number, materialB:string,novaCorB:string
corBola= String(prompt("Informe a cor da bola: "))
circunferenciaB=Number(prompt("Informe a circunferencia da bola: "))
materialB=String(prompt("Informe o material da bola: "))
novaCorB=String(prompt("Informe a nova cor: "))
let bola= new Bola(corBola,circunferenciaB,materialB)
bola.trocarCor(novaCorB)
bola.mostrarCor()}