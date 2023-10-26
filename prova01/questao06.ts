class Item{
    private id: number;
    private descricao: string;
    private valor: number;
    constructor(id:number, des:string, val:number){
        this.id = id;
        this.descricao = des;
        this.valor = val;
    }

    public getId(): number{
        return this.id;
    }

    public getDescricao(): string{
        return this.descricao;
    }

    public getValor(): number{
        return this.valor;
    }
}

class Produto extends Item{
    private taxa: number;
    constructor(id:number, des:string, val:number, ta:number){
        super(id, des, val);
        this.taxa = ta;
    }

    public getTaxa(): number{
        return this.taxa;
    }
}

class Servico extends Item{
    private horas: number;
    constructor(id:number, des:string, val:number, h:number){
        super(id, des, val);
        this.horas = h;
    }

    public getHoras(): number{
        return this.horas;
    }
}

class Doacao extends Item{
    private bonus: number;
    constructor(id:number, des:string, val:number, bn:number){
        super(id, des, val);
        this.bonus = bn;
    }

    public getBonus(): number{
        return this.bonus;
    }
}

class Totalizacao {
    totalizarServicos(servicos: Servico[]): number {
        let total: number = 0;
        for (let servico of servicos){
            total += servico.getValor() * servico.getHoras();
        }
        return total;
    }

    totalizarDoacoes(doacoes: Doacao[]): number {
        let total: number = 0;
        for (let doacao of doacoes){
            total += doacao.getValor() + doacao.getBonus();
        }
        return total;
    }

    totalizarProdutos(produtos: Produto[]): number {
        let total: number = 0;
        for (let produto of produtos){
            total += produto.getValor() * (1 + produto.getTaxa());
        }
        return total;
    }
}



