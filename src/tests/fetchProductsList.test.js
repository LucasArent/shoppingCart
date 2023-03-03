import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import product from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('Teste se o retorno da função fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const compArgument = await fetchProductsList('computador');
    expect(compArgument).toStrictEqual(product);
    });

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem "Termo de busca não informado"', async () => {
    await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
  });
});

  // it('...', () => {
  // });
