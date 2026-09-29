
export function questao30(): void {

    class Passagem {
        private _nome: string
        private _cpf: string
        private _valorBase: number

        constructor(nome: string, cpf: string, valorBase: number) {
            this._nome = nome
            this._cpf = cpf
            this._valorBase = valorBase
        }

        public get nome(): string {
            return this._nome
        }

        public get cpf(): string {
            return this._cpf
        }

        public get valorBase(): number {
            return this._valorBase
        }

        calcularValor(): number {
            return this._valorBase
        }

        relatorio(): void {
            console.log(`Nome: ${this.nome} CPF: ${this.cpf} Valor: R$ ${this.calcularValor().toFixed(2)}`)
        }
    }

    class PassagemComum extends Passagem {

        calcularValor(): number {
            return this.valorBase
        }

        relatorio(): void {
            console.log(`Passagem Comum Nome: ${this.nome} CPF: ${this.cpf} Valor: R$ ${this.calcularValor().toFixed(2)}`)
        }
    }

    class PassagemEstudantil extends Passagem {

        calcularValor(): number {
            return this.valorBase * 0.5
        }

        relatorio(): void {
            console.log(`Passagem Estudantil Nome: ${this.nome} CPF: ${this.cpf} Valor com desconto: R$ ${this.calcularValor().toFixed(2)}`)
        }
    }

    let ListaPassagem: Passagem[] = []

    let nome: string
    let cpf: string
    let valorBase = 50
    let opcao = 0

    let passagemComum: PassagemComum
    let passagemEstudantil: PassagemEstudantil

    while (opcao != 3) {

        opcao = Number(prompt(`Informe o tipo de passagem:
        1 - Comum
        2 - Estudantil
        3 - Sair`))

        if (opcao == 1) {

            nome = String(prompt("Informe seu nome:"))
            cpf = String(prompt("Digite seu CPF:"))

            passagemComum = new PassagemComum(nome, cpf, valorBase)

            ListaPassagem.push(passagemComum)

        }
        else if (opcao == 2) {

            nome = String(prompt("Informe seu nome:"))
            cpf = String(prompt("Digite seu CPF:"))

            passagemEstudantil = new PassagemEstudantil(nome, cpf, valorBase)

            ListaPassagem.push(passagemEstudantil)
        }
         opcao = Number(prompt(`Informe o tipo de passagem:
        1 - Comum
        2 - Estudantil
        3 - Sair`))
    }

    let faturamentoTotal = 0

    console.log("PASSAGENS VENDIDAS:")

    for (let i = 0; i < ListaPassagem.length; i++) {

        ListaPassagem[i].relatorio()

        faturamentoTotal += ListaPassagem[i].calcularValor()
    }

    console.log(`Faturamento total do dia: R$ ${faturamentoTotal.toFixed(2)}`)
}