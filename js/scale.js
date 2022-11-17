const scaleInput = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

function scalePhotoPreview (value = DEFAULT_SCALE) {
  photoPreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
}

function zoomOutButtonClickHandler () {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scalePhotoPreview(newValue);
}

function zoomInButtonClickHandler () {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scalePhotoPreview(newValue);
}

function resetScaleInput () {
  scalePhotoPreview();
}

export { resetScaleInput, zoomOutButtonClickHandler, zoomInButtonClickHandler};
