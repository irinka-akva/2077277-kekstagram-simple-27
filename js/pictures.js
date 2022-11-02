const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictureList = function (pictureData) {
  const pictureListFragment = document.createDocumentFragment();
  pictureData.forEach(({url, comments, likes}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureListFragment.append(pictureElement);
    pictureList.append(pictureListFragment);
  });
};

export {renderPictureList};

