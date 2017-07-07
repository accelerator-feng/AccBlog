import request from '../utils/request';

export async function fetch(songname) {
  return request(
    `https://ali-qqmusic.showapi.com/search?keyword=${songname}&page=1`,
    {
      headers: {
        Authorization: 'APPCODE 6b19d2639aa34bea9e0030ae4e7aa510',
      },
      credentials: 'same-origin',
    },
  );
}
