class Perfil {
    private id: number;
    private nomeUsuario: string;
  
    constructor(id: number, nomeUsuario: string) {
      this.nomeUsuario = nomeUsuario;
      this.id = id;
    }

    getNomeUsuario(): string{
        return this.nomeUsuario;
    }
  
    // Outros métodos
}
  
interface Publicavel {
    exibir(): void;
    getAutor(): Perfil;
}
  
class Postagem implements Publicavel {
    private id: string;
    private autor: Perfil;
    private conteudo: string;
    private reacoes: Reacao[] = [];
    private comentarios: Comentario[] = [];
  
    constructor(id: string, autor: Perfil, conteudo: string) {
      this.id = id;
      this.autor = autor;
      this.conteudo = conteudo;
    }
  
    adicionarReacao(reacao: Reacao): void {
      this.reacoes.push(reacao);
    }
  
    adicionarComentario(comentario: Comentario): void {
      this.comentarios.push(comentario);
    }
  
    exibir(): void {
      console.log(`Postagem [${this.id}] de ${this.autor.getNomeUsuario()}: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }

    getId(): string{
        return this.id;
    }
}
  
class Reacao implements Publicavel {
    private tipoReacao: string;
    private postagem: Postagem;
  
    constructor(tipoReacao: string, postagem: Postagem) {
      this.tipoReacao = tipoReacao;
      this.postagem = postagem;
    }
  
    exibir(): void {
      console.log(`Reação [${this.tipoReacao}] de ${this.postagem.getAutor().getNomeUsuario()} na postagem ${this.postagem.getId()}`);
    }
  
    getAutor(): Perfil {
      return this.postagem.getAutor();
    }
}
  
class Comentario implements Publicavel {
    private postagemOriginal: Postagem;
    private autor: Perfil;
    private conteudo: string;
  
    constructor(autor: Perfil, conteudo: string, postagemOriginal: Postagem) {
      this.autor = autor;
      this.conteudo = conteudo;
      this.postagemOriginal = postagemOriginal;
    }
  
    exibir(): void {
      console.log(`Comentário de ${this.autor.getNomeUsuario()} em resposta à postagem [${this.postagemOriginal.getId()}]: ${this.conteudo}`);
    }
  
    getAutor(): Perfil {
      return this.autor;
    }
}
  