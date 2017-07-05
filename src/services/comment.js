import request from '../utils/request';

export async function push(content) {
  return request('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(content),
  });
}

export async function fetch() {
  return request('/api/comment');
}
