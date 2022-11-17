import './modal.js';
import './scale.js';
import './effects.js';
import { setModalFormSubmit } from './modal.js';
import { getData } from './api.js';
import { renderPictureList } from './pictures.js';

setModalFormSubmit();
getData(renderPictureList);
