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


