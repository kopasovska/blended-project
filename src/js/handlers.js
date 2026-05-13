// Функції, які передаються колбеками в addEventListners
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  getProductByID,
  getProducts,
  getProductsByCategory,
  searchProducts,
} from './products-api';
import { renderProductCard, renderProducts } from './render-function';
import {
  hideNoProductsMessage,
  resetCategoriesButtons,
  resetProductsList,
  showNoProductsMessage,
} from './helpers';
import { openModalWindow, closeModalWindow } from './modal';
import { currentPage } from './constants';

export async function onCategoryClickHandler(event) {
  if (event.target.tagName != 'BUTTON') return;

  hideNoProductsMessage();
  resetCategoriesButtons();
  resetProductsList();
  event.target.classList.add('categories__btn--active');

  const categoryName = event.target.textContent;
  let products = null;

  if (categoryName === 'All') {
    products = await getProducts();
  } else {
    products = await getProductsByCategory(categoryName);
  }

  if (products.total === 0) {
    showNoProductsMessage();
  } else {
    renderProducts(products.products);
  }
}

export async function onProductClickHandler(event) {
  const item = event.target.closest('.products__item');
  if (!item) return;

  const productId = item.dataset.id;
  openModalWindow();
  const product = await getProductByID(productId);
  renderProductCard(product);
}

export function onCloseModalButtonClickHandler() {
  closeModalWindow();
}

export async function onSearchFormSubmitHandler(event) {
  event.preventDefault();
  hideNoProductsMessage();

  const searchQuery = event.target.elements.searchValue.value.trim();
  if (searchQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Your query can not be empty!',
      backgroundColor: '#ef4040',
      titleColor: '#fff',
      messageColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '1.5',
      messageSize: '16px',
      messageLineHeight: '1.5',
      icon: 'fa fa-exclamation-circle',
      iconColor: '#fff',
      position: 'topRight',
    });
    return;
  } else {
    const products = await searchProducts(searchQuery, currentPage);
    if (products.total === 0) {
      showNoProductsMessage();
    } else {
      resetProductsList();
      renderProducts(products.products);
    }
  }
}
