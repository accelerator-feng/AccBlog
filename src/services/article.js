import request from '../utils/request';

export async function init() {
  return request('/api/index');
}

export async function show(id) {
  return request(`/api/article/${id}`);
}

export async function showPage(page) {
  return request(`/api/article/page/${page}`);
}
