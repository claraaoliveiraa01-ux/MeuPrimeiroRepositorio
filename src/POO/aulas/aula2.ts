class funcionario{
    //atributos
    nome: string;
    cargo:string;
    salario:number;
    //costrutor
    constructor(n:string, c:string, s:number){
        this.nome = n;
        this.cargo = c;
        this.salario = s;
    }
    //Metodos
    exibirResumo():void{
        console.log("funcionario: ${this.mome} | Cargo : $ {this.cargo} | Salaro: $ {this.salario}");
    }
  }  let continuar:string = ""
  while(continuar!= "N"){
  let n:string, c:string, s:number
  n=String(prompt("Informe o nome do Funcionário: "))
  c=String(prompt("Infome o cargo: "))
  s=Number(prompt("Informe o seu Salario:"))
  let novoFunc = new funcionario(n,c,s)
  novoFunc.exibirResumo()
  continuar=String(prompt("Deseja continuar? S-sim N-não")).toUpperCase()}