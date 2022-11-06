import {
  isEscapeKey,
  isActiveBlock
} from './util.js';

const modalForm = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const bodyElement = document.body;

const openModalElement = function () {
  isActiveBlock(userModalElement, 'remove', 'hidden');
  isActiveBlock(bodyElement, 'add', 'modal-open');
};

const closeModalElement = function () {
  isActiveBlock(userModalElement, 'add', 'hidden');
  isActiveBlock(bodyElement, 'remove', 'modal-open');
};

const resetAndCloseModalElement = function () {
  modalForm.reset();
  closeModalElement();
};

const closeModalByEscape = function (evt) {
  evt.preventDefault();
  resetAndCloseModalElement();
};

const handlerEventUploadImg = function (evt) {
  switch (evt.type) {
    case 'click':
      resetAndCloseModalElement();
      modalCloseElement.removeEventListener('click', handlerEventUploadImg);
      document.removeEventListener('keydown', handlerEventUploadImg);
      break;
    case 'keydown':
      if (!isEscapeKey(evt)) {
        return;
      }
      closeModalByEscape(evt);
      modalCloseElement.removeEventListener('click', handlerEventUploadImg);
      document.removeEventListener('keydown', handlerEventUploadImg);
      break;
    default:
      resetAndCloseModalElement();
      break;
  }
};

const handlerUploadImg = function () {
  openModalElement();
  modalCloseElement.addEventListener('click', handlerEventUploadImg);
  document.addEventListener('keydown', handlerEventUploadImg);
};

uploadFileElement.addEventListener('change', handlerUploadImg);
