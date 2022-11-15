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

import {
  sendData
} from './api.js';

const modalForm = document.querySelector('.img-upload__form');
const uploadFileElement = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const modalCloseElement = document.querySelector('#upload-cancel');
const bodyElement = document.body;
const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const modalSubmitButton = document.querySelector('#upload-submit');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');

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

const blocModalSubmitButton = function () {
  modalSubmitButton.disabled = true;
  modalSubmitButton.textContent = 'Публикуется...';
};

const unblockModalSubmitButton = function () {
  modalSubmitButton.disabled = false;
  modalSubmitButton.textContent = 'Опубликовать';
};

const messageClickHandler = function () {
  hideMessage();
};

const messageEscKeydownHandler = function (evt) {
  if (isEscapeKey(evt)){
    evt.preventDefault();
    hideMessage();
  }
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('click', messageClickHandler);
  document.removeEventListener('keydown', messageEscKeydownHandler);
}

const renderSuccessMessage = function () {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  successMessage.querySelector('.success__button').addEventListener('click', messageClickHandler);
  document.addEventListener('keydown', messageEscKeydownHandler);
  document.addEventListener('click', (evt) => {
    const clickOnMessage = evt.composedPath().includes(successMessage.querySelector('.success'));
    if (!clickOnMessage) {
      messageClickHandler();
    }
  });
};

const renderFailMessage = function () {
  const failMessage = failMessageTemplate.cloneNode(true);
  document.body.append(failMessage);
  failMessage.querySelector('.error__button').addEventListener('click', messageClickHandler);
  document.addEventListener('keydown', messageEscKeydownHandler);
  document.addEventListener('click', (evt) => {
    const clickOnMessage = evt.composedPath().includes(failMessage.querySelector('.error'));
    if (!clickOnMessage) {
      messageClickHandler();
    }
  });
};

const setModalFormSubmit = function (onSuccess) {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blocModalSubmitButton();
    sendData(
      () => {
        onSuccess();
        unblockModalSubmitButton();
        modalForm.reset();
        renderSuccessMessage();
      },
      () => {
        renderFailMessage();
        unblockModalSubmitButton();
      },
      new FormData(evt.target),
    );
  });
};

export {
  closeModalElement,
  setModalFormSubmit
};
