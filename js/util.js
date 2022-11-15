import {
  sendData
} from './api.js';

const modalForm = document.querySelector('.img-upload__form');

const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

const isActiveBlock = function (element, method, className) {
  element.classList[method](className);
};

const setModalFormSubmit = function (onSuccess) {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => console.error('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

export {
  isEscapeKey,
  isActiveBlock,
  setModalFormSubmit
};
