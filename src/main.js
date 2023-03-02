import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

function displayProducts() {
  fetchProductsList('computador')
    .then(products => {
      const productsSection = document.querySelector('.products');
      products.forEach(product => {
        const productElement = createProductElement(product);
        productsSection.appendChild(productElement);
      });
    })
    .catch(error => console.log(error.message));
}

displayProducts();

document.querySelector('.cep-button').addEventListener('click', searchCep);
console.log(displayProducts)
