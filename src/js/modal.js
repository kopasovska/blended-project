//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
import { refs } from './refs';

export function openModalWindow() {
  refs.modalWindow.classList.add('modal--is-open');
}

export function closeModalWindow() {
  refs.modalWindow.classList.remove('modal--is-open');
}

export function resetProductCard() {
  refs.productCard.innerHTML = '';
}
