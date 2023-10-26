class Transacao{
    private valor: number;
    private data: Date;
    private tipo: string;
    constructor(v:number, d:Date, t:string){
        this.valor = v;
        this.data = d;
        this.tipo = t;
    }

    public salvarTransacao(): void{
        // codigo salvar transacao
    }

    getTipo(): string{
        return this.tipo;
    }

}

class Taxas{
    private valor: number;
    private tipo: string;
    constructor(v:number, t:string){
        this.valor = v;
        this.tipo = t;
    }
    
    public calcularTaxas(){
        switch(this.tipo.toUpperCase()){
            case "DEPOSITO":
                return this.valor * 0.01;
            case "RETIRADA":
                return this.valor * 0.02;
            case "TRANSFERENCIA":
                return this.valor * 0.015;
            default:
            return 0;
        }
    }
}
