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

const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

const isActiveBlock = function (element, method, className) {
  element.classList[method](className);
};

export {
  getRandomPositiveInteger,
  getRandomArrayElement,
  isEscapeKey,
  isActiveBlock
};

