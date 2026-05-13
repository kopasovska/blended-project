//Допоміжні функції
import { refs } from './refs';

export function resetProductsList() {
  refs.productsList.innerHTML = '';
}

export function resetCategoriesButtons() {
  document
    .querySelectorAll('.categories__btn')
    .forEach(btn => btn.classList.remove('categories__btn--active'));
}

export function showNoProductsMessage() {
  refs.notFoundMessage.classList.add('not-found--visible');
}

export function hideNoProductsMessage() {
  refs.notFoundMessage.classList.remove('not-found--visible');
}
