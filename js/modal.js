import {
  isEscapeKey,
  isActiveBlock
} from './util.js';

import {
  resetScaleInput,
  zoomOutButtonClickHandler,
  zoomInButtonClickHandler
} from './scale.js';

import {
  resetEffect,
  formChangeHandler
} from './effects.js';

const modalForm = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const bodyElement = document.body;
const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');

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
  resetScaleInput();
  resetEffect();
  closeModalElement();
};

const closeModalByEscape = function (evt) {
  evt.preventDefault();
  resetAndCloseModalElement();
};

const imgEventUploadHandler = function (evt) {
  switch (evt.type) {
    case 'click':
      resetAndCloseModalElement();
      modalCloseElement.removeEventListener('click', imgEventUploadHandler);
      document.removeEventListener('keydown', imgEventUploadHandler);
      zoomInButton.removeEventListener('click', zoomInButtonClickHandler);
      zoomOutButton.removeEventListener('click', zoomOutButtonClickHandler);
      modalForm.removeEventListener('change', formChangeHandler);
      break;
    case 'keydown':
      if (!isEscapeKey(evt)) {
        return;
      }
      closeModalByEscape(evt);
      modalCloseElement.removeEventListener('click', imgEventUploadHandler);
      document.removeEventListener('keydown', imgEventUploadHandler);
      zoomInButton.removeEventListener('click', zoomInButtonClickHandler);
      zoomOutButton.removeEventListener('click', zoomOutButtonClickHandler);
      modalForm.removeEventListener('change', formChangeHandler);
      break;
    default:
      resetAndCloseModalElement();
      break;
  }
};

const imgUploadHandler = function () {
  openModalElement();
  modalCloseElement.addEventListener('click', imgEventUploadHandler);
  document.addEventListener('keydown', imgEventUploadHandler);
  zoomOutButton.addEventListener ('click', zoomOutButtonClickHandler);
  zoomInButton.addEventListener ('click', zoomInButtonClickHandler);
  modalForm.addEventListener('change', formChangeHandler);
};

uploadFileElement.addEventListener('change', imgUploadHandler);
