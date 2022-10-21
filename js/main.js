function getRandomPositiveInteger (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {return NaN;
  }
  const lower = Math.ceil(Math.min(minNumber, maxNumber));
  const upper = Math.floor(Math.max(minNumber, maxNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger (2.3, 15.8);


function checkStringLength (currentString, maxLength) {
  return currentString.length <= maxLength;
}

checkStringLength('hello!', 100);


const descriptionFoto = [
  'Happy moments',
  'My cat',
  'Rainbow',
  'Flowers',
  'Good morning',
  'Happyness',
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

const likesNumber = {
  min: 15,
  max: 200,
};

const PHOTOS_NUMBER = 25;

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger (0, elements.length - 1)];
};

const createFotoDescription = function (index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(descriptionFoto),
    likes: getRandomPositiveInteger (likesNumber.min, likesNumber.max),
    comments: getRandomPositiveInteger (0, 200),
  };
};

const fotoDescription = Array.from ({length: PHOTOS_NUMBER}, (_, pictureIndex) => createFotoDescription(pictureIndex + 1));

fotoDescription();
