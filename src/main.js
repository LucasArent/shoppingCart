import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, savedCartProducts } from './helpers/shopFunctions';

function displayProducts() {
  const loaded = document.createElement('p');
  loaded.innerHTML = 'carregando...';
  loaded.classList.add('loading');
  document.body.appendChild(loaded);

  fetchProductsList('computador')
    .then((products) => {
      const productsSection = document.querySelector('.products');
      products.forEach((product) => {
        const productElement = createProductElement(product);
        productsSection.appendChild(productElement);
      });
    })
    .catch((error) => {
      console.log(error.message);
      const erro = document.createElement('p');
      erro.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
      erro.classList.add('error');
      document.body.appendChild(erro);
    })
    .finally(() => {
      document.querySelector('.loading').remove();
    });
}

displayProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);

savedCartProducts();