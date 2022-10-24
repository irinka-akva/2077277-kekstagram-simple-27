const photoDescriptions = [
  'Happy moments',
  'My cat',
  'Rainbow',
  'Flowers',
  'Good morning',
  'Happiness',
  'Sunrise',
  'Best friends',
  'Family',
  'Surprise',
  'Contemporary art',
  'Animals',
  'Interesting day',
  'Dog',
  'Successful photo',
  'Rose',
  'Memories',
  'Pleasant atmosphere',
  'Miracle',
  'Fruits',
  'Autumn',
  'Rainy day',
  'Trip to the village',
  'Delicious pie',
  'Beautiful cake'
];

const rangeForLikes = {
  min: 15,
  max: 200,
};

const PHOTO_COUNT = 25;

const getRandomPositiveInteger = function (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {return NaN;
  }
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const checkStringLength = function (currentString, maxLength) {
  return currentString.length <= maxLength;
};

checkStringLength('hello!', 100);

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger (0, elements.length - 1)];
};

const createPhotoDescription = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(photoDescriptions),
    likes: getRandomPositiveInteger (rangeForLikes.min, rangeForLikes.max),
    comments: getRandomPositiveInteger (0, 200),
  };
};

const getPhotoDescription = function () {return Array.from ({length: PHOTO_COUNT}, (_, pictureIndex) => createPhotoDescription(++pictureIndex));};

getPhotoDescription();

