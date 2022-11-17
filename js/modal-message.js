import { isEscapeKey } from './util.js';
import { openModalAndAddEscapeEventListener } from './modal.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const failMessageTemplate = document.querySelector('#error').content.querySelector('.error');

function hideMessage () {
  const successMessageElement = document.querySelector('.success');
  const errorMessageElement = document.querySelector('.error');

  if (successMessageElement) {
    successMessageElement.remove();
  }
  if (errorMessageElement) {
    openModalAndAddEscapeEventListener();
    errorMessageElement.remove();
  }
  document.removeEventListener('click', messageClickHandler);
  document.removeEventListener('keydown', messageEscKeydownHandler);
  window.removeEventListener('click', documentSuccessHandler);
  window.removeEventListener('click', documentErrorHandler);
}

function messageClickHandler () {
  hideMessage();
}

function messageEscKeydownHandler (evt) {
  if (isEscapeKey(evt)){
    evt.preventDefault();
    hideMessage();
  }
}

function documentSuccessHandler (evt) {
  const parentNodeElement = evt.target.parentNode;
  if (parentNodeElement.classList.contains('success__inner') || parentNodeElement.classList.contains('success')) {
    return;
  }
  messageClickHandler();
}

function documentErrorHandler (evt) {
  const parentNodeElement = evt.target.parentNode;
  if (parentNodeElement.classList.contains('error__inner') || parentNodeElement.classList.contains('error')) {
    return;
  }
  messageClickHandler();
}

function renderSuccessMessage () {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  successMessage.querySelector('.success__button').addEventListener('click', messageClickHandler);
  document.addEventListener('keydown', messageEscKeydownHandler);
  window.addEventListener('click', documentSuccessHandler);
}

function renderFailMessage () {
  const failMessage = failMessageTemplate.cloneNode(true);
  document.body.append(failMessage);
  failMessage.querySelector('.error__button').addEventListener('click', messageClickHandler);
  document.addEventListener('keydown', messageEscKeydownHandler);
  window.addEventListener('click', documentErrorHandler);
}

export { renderSuccessMessage, renderFailMessage };
