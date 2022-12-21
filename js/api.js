export function getData(onSuccess, onFail) {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onFail(response);
      }
    })
    .catch((error) => onFail(error))
    .then((data) => onSuccess(data));
}

