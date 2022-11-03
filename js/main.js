import {
  getPhotoDescription
} from './data.js';

import {
  renderPictureList
} from './pictures.js';

import {
  openModalElement,
  closeModalElement,
} from './modal.js';

const pictureData = getPhotoDescription();
renderPictureList(pictureData);
openModalElement();
closeModalElement();


