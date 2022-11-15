const ALERT_SHOW_TIME = 10000;

const showAlert = function (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '300px';
  alertContainer.style.top = '0px';
  alertContainer.style.right = '300px';
  alertContainer.style.padding = '50px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const getData = function (onSuccess) {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then ((response) => response.json())
    .then ((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Ошибка загрузки данных!');
    });
};

const sendData = function (onSuccess, onFail, body) {
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
};

export {
  getData,
  sendData
};
