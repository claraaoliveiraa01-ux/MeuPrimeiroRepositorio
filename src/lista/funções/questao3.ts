// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***;

let numero: number = Number(prompt("Informe o numero: "))

function triangulo(numero: number) {
    for (let i = 1; i <= numero; i++) { 
        let linha: string = ""

        for (let j = 1; j <= i; j++) { 
            linha += "*"
        }

        console.log(linha)
    }
}

triangulo(numero)