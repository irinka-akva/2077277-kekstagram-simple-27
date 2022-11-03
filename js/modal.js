import {isEscapeKey} from './util.js';

const modalForm = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const bodyElement = document.body;

const onModalEscKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    modalForm.reset();
    userModalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');

  }
};

const openModalElement = function () {
  uploadFileElement.addEventListener('change', () => {
    userModalElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');

    document.addEventListener('keydown', onModalEscKeydown);
  });
};

const closeModalElement = function () {
  modalCloseElement.addEventListener('click', () => {
    userModalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');

    document.removeEventListener('keydown', onModalEscKeydown);
  });
};

export {
  openModalElement,
  closeModalElement,
};
