//Логіка сторінки Home
import { refs } from './js/refs';
import { currentPage } from './js/constants';
import { getCategories } from './js/products-api';
import { getProducts } from './js/products-api';
import { renderCategories } from './js/render-function';
import { renderProducts } from './js/render-function';
import {
  onCategoryClickHandler,
  onProductClickHandler,
  onCloseModalButtonClickHandler,
  onSearchFormSubmitHandler,
} from './js/handlers';

const categories = await getCategories();
renderCategories(categories);

const products = await getProducts(currentPage);
renderProducts(products.products);

refs.categoriesList.addEventListener('click', onCategoryClickHandler);

refs.productsList.addEventListener('click', onProductClickHandler);

refs.closeModalButton.addEventListener('click', onCloseModalButtonClickHandler);

refs.searchForm.addEventListener('submit', onSearchFormSubmitHandler);
