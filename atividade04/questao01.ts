/* a herança de classes não é justificada aqui pois a classe filha tem precondições mais fortes que a classe mãe, ou seja, ela aceita menos valores de entrada, o que pode gerar problemas na aplicação*/

// solução usando composição:
class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }
}

class ContaPoupanca {
    private contaBase: ContaBancaria;

    constructor(saldoInicial: number) {
        this.contaBase = new ContaBancaria(saldoInicial);
    }

    depositar(valor: number): void {
        this.contaBase.depositar(valor);
    }

    sacar(valor: number): void {
        if (valor > 1000) {
            throw new Error("Não pode sacar mais de 1000 em uma poupança");
        }
        this.contaBase.sacar(valor);
    }

} 