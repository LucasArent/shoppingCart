import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });

  it('a estrutura de dados retornado é correta ao chamar a função fetchProductsList', async () => {
    const computadorArgument = await fetchProductsList('computador')
    expect(computadorArgument).toEqual(computadorSearch)
  });

  it('retorna um erro se a função fetchProductsList não tiver argumento', async () => {
    const withoutArgument = await fetchProductsList()
    expect(withoutArgument).rejects.toThrow('Termo de busca não informado')
  });
});
