import request from '../utils/request';

export async function login(loginInfo) {
  return request('/api/session', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  });
}

export async function register(registerInfo) {
  return request('/api/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerInfo),
  });
}

export async function find(username) {
  return request(`/api/user/${username}`);
}
