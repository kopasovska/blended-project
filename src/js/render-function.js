//Функцію для створення, рендеру або видалення розмітки

import { resetProductCard } from './modal';
import { refs } from './refs';

function categoriesMarkup(categories) {
  categories.splice(0, 0, 'All');
  const markup = categories
    .map(
      category =>
        `<li class="categories__item">
      <button class="categories__btn" type="button">${category}</button>
    </li>`
    )
    .join('');
  return markup;
}

export function renderCategories(categories) {
  refs.categoriesList.insertAdjacentHTML(
    'beforeend',
    categoriesMarkup(categories)
  );
}

function productsMarkup(products) {
  const markup = products
    .map(
      product =>
        `<li class="products__item" data-id="${product.id}">
       <img class="products__image" src="${product.thumbnail}" alt="${product.title}" />
       <p class="products__title">${product.title}</p>
       <p class="products__brand">
         <span class="products__brand--bold">Brand:</span>
         ${product.brand}
       </p>
       <p class="products__category">
       <span class="products__brand--bold">Category:</span>
       ${product.category}
       </p>
       <p class="products__price">Price: ${product.price}$</p>
     </li>`
    )
    .join('');
  return markup;
}

export function renderProducts(products) {
  refs.productsList.insertAdjacentHTML('beforeend', productsMarkup(products));
}

function productMarkup(product) {
  const {
    images: [image],
    title,
    description,
    tags,
    shippingInformation,
    returnPolicy,
    price,
  } = product;
  const markup = `<img class="modal-product__img" src="${image}" alt="${title}" />
           <div class="modal-product__content">
             <p class="modal-product__title">${title}</p>
             <ul class="modal-product__tags">${tags.join(', ')}</ul>
             <p class="modal-product__description"${description}</p>
             <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
             <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
             <p class="modal-product__price">Price: ${price}$</p>
           </div>`;
  return markup;
}

export function renderProductCard(product) {
  resetProductCard();
  refs.productCard.insertAdjacentHTML('beforeend', productMarkup(product));
}
