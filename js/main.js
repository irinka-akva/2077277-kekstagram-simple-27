function getRandomInteger (a, b) {
  if (a < 0 || b < 0) {return NaN;}
  if (a !== 'number' || b !== 'number') {return NaN;}
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomInteger (2, 15);


function checkStringLength (currentString, maxLength) {
  return currentString.length <= maxLength;
}

checkStringLength('hello!', 100);


