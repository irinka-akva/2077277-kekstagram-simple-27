import './modal.js';

import {
  closeModalElement,
  setModalFormSubmit
} from './modal.js';

import './scale.js';

import './effects.js';

import {
  getData
} from './api.js';

import {
  renderPictureList
} from './pictures.js';

setModalFormSubmit(closeModalElement);
getData(renderPictureList);
