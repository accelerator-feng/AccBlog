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

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {}) {
  if (options.method === 'POST') {
    options.headers['x-csrf-token'] = getCookie('csrfToken'); // eslint-disable-line
  }
  return fetch(url, Object.assign(options, { credentials: 'include' }))
    .then(parseJSON)
    .then(checkStatus)
    .then(data => ({ data }))
    .catch(err => ({ err: err.message }));
}
