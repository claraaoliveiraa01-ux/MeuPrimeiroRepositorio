// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.
abstract class Refeitório{
    private _idNumerico: number
    private _nomeC: string
   
    constructor(idNumerico:number, nomeC:string){
        this._idNumerico= idNumerico
        this._nomeC=nomeC
    }
     public get idNumerico(): number {
        return this._idNumerico
    }
    public set idNumerico(value: number) {
        this._idNumerico = value
    }
     public get nomeC(): string {
        return this._nomeC
    }
    public set nomeC(value: string) {
        this._nomeC = value
    }
}class alunos extends Refeitório{
    curso:string
    constructor(idNumerico:number, curso:string, nomeC:string){
        super(idNumerico,nomeC)
        this.curso=curso
    }
}
    class servidores extends Refeitório {
        departamento:string
        constructor(idNumerico:number, nomeC:string, departamento:string) {
            super(idNumerico, nomeC)
            this.departamento=departamento
        }
    }
