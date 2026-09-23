// 45. Repetição Encapsulamento
// Validador de Senhas e Segurança de Acesso
// Crie uma classe UsuarioSistema com os atributos privados login e senha. O setter da senha deve
// aplicar uma regra de segurança estrita: a senha precisa ter pelo menos 6 caracteres e não pode ser
// igual ao login. Caso a regra seja descumprida, o método deve exibir uma mensagem de erro e não
// alterar o atributo. O programa deve rodar em um laço de repetição solicitando que o usuário cadastre
// suas credenciais até que ele forneça uma senha válida que atenda a todos os requisitos de segurança
// do sistema.
class UsuarioSistema{
    private _login: null
    private _senha: null
    constructor(login:null, senha:null){
        this._login=login
        this._senha=senha
    }
     public get login(): null {
        return this._login
    }
    public set login(value: null) {
        this._login = value
    }
    public get senha(): null {
        return this._senha
    }
    public set senha(novasenha: null) {
         if (novasenha.length < 6) {
            console.log("Erro:a senha deve ter pelo menos 6 caracteres.")
        }

        if (novasenha === this._login) {
            console.log("Erro: a senha não pode ser igual ao login.")
            return 
        }

        this._senha = novasenha
        console.log("Senha cadastrada com sucesso!")
    }
    }
    let login = prompt("Digite seu login:") ?? ""
    let senha = ""
    let usuario = new UsuarioSistema(login, senha)
