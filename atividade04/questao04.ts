/*exemplo de uma biblioteca onde há uma classe mãe chamada ItemBiblioteca e duas classes filhas chamadas Livro e DVD. porém, não é permitido emprestimo para DVD*/
class ItemBiblioteca {
    private titulo: string;
  
    constructor(titulo: string) {
      this.titulo = titulo;
    }
  
    emprestar(): void {
      console.log(`${this.titulo} emprestado.`);
    }
}
  
class Livro extends ItemBiblioteca {
    private autor: string;
  
    constructor(titulo: string, autor: string) {
      super(titulo);
      this.autor = autor;
    }
}
  
class DVD extends ItemBiblioteca {
    private diretor: string;
  
    constructor(titulo: string, diretor: string) {
      super(titulo);
      this.diretor = diretor;
    }

    emprestar(): void {
      throw new Error("Empréstimo não permitido para DVDs.");
    }
}


// solucao, usando uma classe para emprestimo
class ItemBiblioteca {
    titulo: string;
  
    constructor(titulo: string) {
      this.titulo = titulo;
    }
}
  
class Emprestimo {
    emprestar(item: ItemBiblioteca): void {
        if(item instanceof DVD){
            throw new Error('Empréstimo não permitido para DVDs')
        }
      
        console.log(`${item.titulo} emprestado.`);
    }
}
  
class Livro extends ItemBiblioteca {
    private autor: string;
    private emprestimo: Emprestimo;
  
    constructor(titulo: string, autor: string) {
      super(titulo);
      this.autor = autor;
      this.emprestimo = new Emprestimo();
    }
  
    emprestar(): void {
      this.emprestimo.emprestar(this);
    }
}
  
class DVD extends ItemBiblioteca {
    private diretor: string;
    private emprestimo: Emprestimo;
  
    constructor(titulo: string, diretor: string) {
      super(titulo);
      this.diretor = diretor;
      this.emprestimo = new Emprestimo();
    }
  
    emprestar(): void {
        this.emprestimo.emprestar(this);
    }
}