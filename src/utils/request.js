import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.error) {
    const error = new Error(response.error);
    error.response = response;
    throw error;
  }
  return response;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(parseJSON)
    .then(checkStatus)
    .then(data => ({ data }))
    .catch(err => ({ err: err.message }));
}
