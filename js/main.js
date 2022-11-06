import {
  getPhotoDescription
} from './data.js';

import {
  renderPictureList
} from './pictures.js';

import './modal.js';

const pictureData = getPhotoDescription();
renderPictureList(pictureData);
