import request from '../utils/request';

export async function fetch(date) {
  return request(`/api/archives${date}`);
}
