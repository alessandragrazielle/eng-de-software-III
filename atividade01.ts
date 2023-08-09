abstract class Publicacao{
    private _id: number;
    private _titulo: string;
    private _autor: string;
    private _resumo: string;
    private _qtdPaginas: number;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPags:number){
        this._id = id;
        this._titulo = titulo;
        this._autor = autor;
        this._resumo = resumo;
        this._qtdPaginas = qtdPags;
    }

    get titulo(){
        return this._titulo;
    }

    get autor(){
        return this._autor;
    }

    abstract informacoes(): string;
}

class Livro extends Publicacao{
    private _genero: string;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPags:number, genero:string){
        super(id, titulo, autor, resumo, qtdPags);
        this._genero = genero;
    }

    informacoes(): string {
        return `Livro: ${this.titulo} \nAutor: ${this.autor} \nGênero: ${this._genero}`;
    }
}

class Artigo extends Publicacao{
    private _palavrasChave: string;

    constructor(id:number, titulo:string, autor:string, resumo:string, qtdPags:number, palavras:string){
        super(id, titulo, autor, resumo, qtdPags);
        this._palavrasChave = palavras;
    }

    informacoes(): string {
        return `Artigo: ${this.titulo} \nAutor: ${this.autor} \nPalavras-Chave: ${this._palavrasChave}`;
    }
}

// adicionando publicacoes
let livro0 = new Livro(1, 'E não sobrou nenhum', 'Agatha Christie', '...', 400, 'Suspense');
let artigo0 = new Artigo(2, 'Inteligência Artificial', 'John Doe', 'Um estudo sobre IA.', 10, 'IA, Aprendizado de Máquina');

// vendo as informacoes
console.log(livro0.informacoes());
console.log(artigo0.informacoes());
