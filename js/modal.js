import { isEscapeKey, isActiveBlock } from './util.js';
import { resetScaleInput, zoomOutButtonClickHandler, zoomInButtonClickHandler } from './scale.js';
import { resetEffect, formChangeHandler } from './effects.js';
import { sendData } from './api.js';
import { renderSuccessMessage, renderFailMessage } from './modal-message.js';

const modalForm = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const bodyElement = document.body;
const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const modalSubmitButton = document.querySelector('#upload-submit');

function openModalElement () {
  isActiveBlock(userModalElement, 'remove', 'hidden');
  isActiveBlock(bodyElement, 'add', 'modal-open');
}

function closeModalElement () {
  isActiveBlock(userModalElement, 'add', 'hidden');
  isActiveBlock(bodyElement, 'remove', 'modal-open');
}

function resetAndCloseModalElement () {
  modalForm.reset();
  resetScaleInput();
  resetEffect();
  closeModalElement();
}

function closeModalByEscape (evt) {
  evt.preventDefault();
  resetAndCloseModalElement();
}

function openModalAndAddEscapeEventListener () {
  openModalElement();
  document.addEventListener('keydown', imgEventUploadHandler);
}

function closeModalAndRemoveEscapeEventListener () {
  closeModalElement();
  document.removeEventListener('keydown', imgEventUploadHandler);
}

function clearFormHandlerState () {
  modalCloseElement.removeEventListener('click', imgEventUploadHandler);
  document.removeEventListener('keydown', imgEventUploadHandler);
  zoomOutButton.removeEventListener('click', zoomOutButtonClickHandler);
  zoomInButton.removeEventListener ('click', zoomInButtonClickHandler);
  modalForm.removeEventListener('change', formChangeHandler);
}

function imgEventUploadHandler (evt) {
  switch (evt.type) {
    case 'click':
      resetAndCloseModalElement();
      clearFormHandlerState();
      break;
    case 'keydown':
      if (!isEscapeKey(evt)) {
        return;
      }
      closeModalByEscape(evt);
      clearFormHandlerState();
      break;
    default:
      resetAndCloseModalElement();
      break;
  }
}

function imgUploadHandler () {
  openModalElement();
  modalCloseElement.addEventListener('click', imgEventUploadHandler);
  document.addEventListener('keydown', imgEventUploadHandler);
  zoomOutButton.addEventListener ('click', zoomOutButtonClickHandler);
  zoomInButton.addEventListener ('click', zoomInButtonClickHandler);
  modalForm.addEventListener('change', formChangeHandler);
}

uploadFileElement.addEventListener('change', imgUploadHandler);

function blocModalSubmitButton () {
  modalSubmitButton.disabled = true;
  modalSubmitButton.textContent = 'Публикуется...';
}

function unblockModalSubmitButton () {
  modalSubmitButton.disabled = false;
  modalSubmitButton.textContent = 'Опубликовать';
}

function setModalFormSubmit () {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blocModalSubmitButton();
    sendData(
      () => {
        renderSuccessMessage();
        resetAndCloseModalElement();
        clearFormHandlerState();
        unblockModalSubmitButton();
      },
      () => {
        closeModalAndRemoveEscapeEventListener();
        renderFailMessage();
        unblockModalSubmitButton();
      },
      new FormData(evt.target),
    );
  });
}

export { setModalFormSubmit, openModalAndAddEscapeEventListener };
