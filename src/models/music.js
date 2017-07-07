import { fetch } from '../services/music';

export default {
  namespace: 'music',

  state: {
    m4a: 'http://ws.stream.qqmusic.qq.com/9063002.m4a?fromtag=46',
    songname: '江南',
    img: 'http://i.gtimg.cn/music/photo/mid_album_90/9/I/000y5gq7449K9I.jpg',
    singername: '林俊杰',
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      NProgress.start();
      const { data } = yield call(fetch, payload);
      const {
        songname,
        m4a,
        albumpic_small,
        singername,
      } = data.showapi_res_body.pagebean.contentlist[0];
      yield put({
        type: 'save',
        payload: {
          songname,
          m4a,
          img: albumpic_small,
          singername,
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      NProgress.done();
      return { ...state, ...action.payload };
    },
  },
};
