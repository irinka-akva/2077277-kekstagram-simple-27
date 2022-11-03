import {
  getPhotoDescription
} from './data.js';

import {
  renderPictureList
} from './pictures.js';

const pictureData = getPhotoDescription();
renderPictureList(pictureData);

