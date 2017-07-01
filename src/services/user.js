import request from '../utils/request';

export async function login(loginInfo) {
  return request('/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  });
}

export async function register(registerInfo) {
  return request('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerInfo),
  });
}

export async function query(username) {
  return request(`/api/user?username=${username}`);
}

export async function logout() {
  return request('/api/session', {
    method: 'DELETE',
    headers: {},
  });
}

export async function checkLogin() {
  return request('/api/session/loginStatus');
}
