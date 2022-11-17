const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

function isActiveBlock (element, method, className) {
  element.classList[method](className);
}

export { isEscapeKey, isActiveBlock };
