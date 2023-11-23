// criação de uma classe especifica para os dados pessoais
class Conta {
    private saldo: number;
    private numeroConta: string;
  
    constructor(numeroConta: string, saldoInicial: number) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
      }
      this.saldo -= valor;
    }
}
  
  class DadosPessoais {
    private nome: string;
    private cpf: string;
    private endereco: string;
  
    constructor(nome: string, cpf: string, endereco: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.endereco = endereco;
    }
}
  
class ContaCliente {
    private conta: Conta;
    private dadosPessoais: DadosPessoais;
  
    constructor(
      numeroConta: string,
      saldoInicial: number,
      nome: string,
      cpf: string,
      endereco: string
    ) {
      this.conta = new Conta(numeroConta, saldoInicial);
      this.dadosPessoais = new DadosPessoais(nome, cpf, endereco);
    }
}