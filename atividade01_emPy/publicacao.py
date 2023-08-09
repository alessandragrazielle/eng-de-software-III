from abc import ABC, abstractmethod

class Publicacao(ABC):
    def __init__(self, id, titulo, autor, resumo, qtdPags):
        self._id = id
        self._titulo = titulo
        self._autor = autor
        self._resumo = resumo
        self._qtdPaginas = qtdPags

    @property
    def titulo(self):
        return self._titulo

    @property
    def autor(self):
        return self._autor

    @abstractmethod
    def informacoes(self):
        pass

class Livro(Publicacao):
    def __init__(self, id, titulo, autor, resumo, qtdPags, genero):
        super().__init__(id, titulo, autor, resumo, qtdPags)
        self._genero = genero

    def informacoes(self):
        return f"Livro: {self.titulo}\nAutor: {self.autor}\nGênero: {self._genero}"

class Artigo(Publicacao):
    def __init__(self, id, titulo, autor, resumo, qtdPags, palavras):
        super().__init__(id, titulo, autor, resumo, qtdPags)
        self._palavrasChave = palavras

    def informacoes(self):
        return f"Artigo: {self.titulo}\nAutor: {self.autor}\nPalavras-Chave: {self._palavrasChave}"

# adicionando publicacoes
livro0 = Livro(1, 'E não sobrou nenhum', 'Agatha Christie', '...', 400, 'Suspense')
artigo0 = Artigo(2, 'Inteligência Artificial', 'John Doe', 'Um estudo sobre IA.', 10, 'IA, Aprendizado de Máquina')

# vendo as informacoes
print(livro0.informacoes())
print(artigo0.informacoes())
