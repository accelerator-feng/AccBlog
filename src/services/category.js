import request from '../utils/request';

export async function fetch(category) {
  return request(`/api${category}`);
}
