import {getPhotoDescription} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fullPicturesList = getPhotoDescription;
const picturesListFragment = document.createDocumentFragment();

const renderPicturesList = function () {
  fullPicturesList.forEach(({url, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesListFragment.append(pictureElement);
  });
};

picturesList.append(picturesListFragment);

export {renderPicturesList};

