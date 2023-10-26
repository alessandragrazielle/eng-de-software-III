class Cliente{
    private nome: string;
    constructor(n:string){
        this.nome = n;
    }

    public getCliente() {
        return this.nome;
    }
}

class Pedido{
    private valorTotal: number;
    private pedidos:string[] = [];

    public processarPedido(pedido): void{
        this.pedidos.push(pedido)
    }

    public getValorTotal(): number{
        return this.valorTotal;
    }

    public calcularDesconto(pedido:Pedido){
        return pedido.getValorTotal() * 0.1;
    }
}

