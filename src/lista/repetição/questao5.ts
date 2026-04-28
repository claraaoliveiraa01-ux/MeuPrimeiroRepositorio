// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.

//  Função classificarVenda(valor):
// o Se valor < 1000: Retorna "Bronze"
// o Se valor entre 1000 e 5000: Retorna "Prata"
// o Se valor > 5000: Retorna "Ouro"

//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria "Ouro"

function classificarVenda (valor:number):any{
    if(valor < 1000){
        console.log("Bronze")
    }
    else if(valor >= 1000 && valor <= 5000){
        console.log("Prata")
    }
    else{
        console.log("ouro")
        qntVendedorO++
    }
}

let maiorV = 0
let contV = 0
let totalVendas = 0
let qntVendedorO=0

for(let i=0; i<5; i++){
    let venda:number = Number(prompt("Informe o valor da sua venda: "))
    classificarVenda(venda)
    totalVendas = totalVendas + venda
    
    if(venda > maiorV){
        maiorV = venda
    }
}

console.log ("O total de vendas da equipe é: "+totalVendas)
console.log("A maior venda foi: "+maiorV)
console.log("A quantidade de vendedores que atingiram a categoria ouro foi: "+qntVendedorO)
