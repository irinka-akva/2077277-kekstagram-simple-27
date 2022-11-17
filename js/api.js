const ALERT_SHOW_TIME = 10000;

function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0px';
  alertContainer.style.top = '0px';
  alertContainer.style.bottom = '0px';
  alertContainer.style.right = '0px';
  alertContainer.style.height = '600px';
  alertContainer.style.width = '600px';
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '300px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.verticalAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

function getData (onSuccess) {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then ((response) => response.json())
    .then ((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных!');
    });
}

function sendData (onSuccess, onFail, body) {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export { getData, sendData };
