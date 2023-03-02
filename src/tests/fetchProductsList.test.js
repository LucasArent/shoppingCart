import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
it('fetchProductsList é uma função', async () => {
expect.assertions(1);
const result = await fetchProductsList();
expect(typeof result).toBe('function')
});

it('Teste se, ao chamar a função fetchProductsList com o argumento computador', async () => {
const searchTerm = 'computador';
jest.spyOn(global, 'fetch');
await fetchProductsList(searchTerm);
expect(fetch).toHaveBeenCalled();
expect(fetch).toHaveBeenCalledWith(https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm});
global.fetch.mockRestore();
});

it('Teste se o retorno da função fetchProductsList com o argumento computador', async () => {
const searchTerm = 'computador';
const expected = computadorSearch;
jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(expected) }));
const result = await fetchProductsList(searchTerm);
expect(result).toEqual(expected);
global.fetch.mockRestore();
});

it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com mensagem', async () => {
expect.assertions(1);
await expect(fetchProductsList()).rejects.toThrow('Termo de busca não informado');
});
});
