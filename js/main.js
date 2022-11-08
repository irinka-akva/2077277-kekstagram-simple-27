import {
  getPhotoDescription
} from './data.js';

import {
  renderPictureList
} from './pictures.js';

import './modal.js';

import './scale.js';

import './effects.js';

const pictureData = getPhotoDescription();
renderPictureList(pictureData);


