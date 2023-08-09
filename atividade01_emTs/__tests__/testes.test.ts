import { Livro, Artigo } from '../atividade01'; 
import 'jest';

describe('Livro', () => {
  test('informacoes() retorna informações corretas para Livro', () => {
    const livro = new Livro(1, 'Título do Livro', 'Autor do Livro', 'Resumo do Livro', 200, 'Ficção');
    const expected = 'Livro: Título do Livro \nAutor: Autor do Livro \nGênero: Ficção';
    expect(livro.informacoes()).toBe(expected);
  });
});

/*
describe('Artigo', () => {
  test('informacoes() retorna informações corretas para Artigo', () => {
    const artigo = new Artigo(2, 'Título do Artigo', 'Autor do Artigo', 'Resumo do Artigo', 10, 'Tecnologia');
    const expected = 'Artigo: Título do Artigo \nAutor: Autor do Artigo \nPalavras-Chave: Tecnologia';
    expect(artigo.informacoes()).toBe(expected);
  });
});*/