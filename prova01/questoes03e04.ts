class Carro{
    private quantidadeCombustivel: number;
    private capacidadeMaxima: number = 50;
    constructor(q:number){
        this.quantidadeCombustivel = q;
    }

    public getQuantidadeCombustivel(): number{
        return this.quantidadeCombustivel;
    }

    public getCapacidadeMaxima(): number{
        return this.capacidadeMaxima;
    }

    public reabastecer(quantidade:number){
        if(this.quantidadeCombustivel < this.capacidadeMaxima * 0.1){
            if(this.quantidadeCombustivel + quantidade > this.capacidadeMaxima){
                throw new Error('Capacidade máxima do tanque ultrapassada');
            }
            this.quantidadeCombustivel += quantidade;
        }
    }
}

class TestaCarro{
    public reabastecerSeNecessario(c:Carro, quantidade:number): void{
        c.reabastecer(quantidade);
    }
}

let c2: Carro = new Carro(1);

let teste2: TestaCarro = new TestaCarro();
teste2.reabastecerSeNecessario(c2, 50);
console.log(c2.getQuantidadeCombustivel());
