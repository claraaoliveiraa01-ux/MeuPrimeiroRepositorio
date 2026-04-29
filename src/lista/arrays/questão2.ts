// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.
let notasLidas=[]
let qntnotas=0
let notasMaiorM=[]
let somaNota=0
let media=0
let op=0
while (op!=-1){
let nota = Number(prompt("Digite uma nota:"))
notasLidas.push(nota)
qntnotas++
somaNota=somaNota+nota
media=somaNota/qntnotas
op=(Number(prompt("Informe uma opção: 0 para continar ou -1 para encerrar:")))
}
for (let i = 0; i < notasLidas.length; i++) {
    if (notasLidas[i] > media) {
        notasMaiorM.push(notasLidas[i])
}}
let ordem=notasLidas
let inversa=notasLidas.reverse();

console.log("Quantidade de notas lidas: "+qntnotas)
console.log("Notas lidas: "+ordem)
console.log("Ordem inversa: "+inversa)
console.log("Soma das notas: "+somaNota)
console.log("Media das notas: "+media)
console.log("Notas maiores que a media: "+notasMaiorM)