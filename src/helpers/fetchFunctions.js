export const fetchProduct = async (findThis) => {
  if (!findThis) {
    throw new Error('ID não informado');
  }

  const response = await fetch(`https://api.mercadolibre.com/items/${findThis}`);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (findThis) => {
  if (!findThis) {
    throw new Error('Termo de busca não informado');
  }

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${findThis}`);
  const data = await response.json(); console.log(data);
  return data.results;
};
// havia ocorrido um erro de Cannot find module '../mocks/fetchSimulator', pesquisei e consegui arrumar pelas dicas do video e github do Stephencattaneo!!
