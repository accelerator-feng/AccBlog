import { routerRedux } from 'dva/router';
import { init, show, showPage } from '../services/article';

export default {
  namespace: 'article',

  state: {
    article: { title: 'loading...', time: '2017-01-01', author: 'Yin Feng' },
    articles: [{ _id: 1 }, { _id: 2 }],
  },

  effects: {
    *init({ payload }, { put }) {
      NProgress.start();
      const { data } = yield init();
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *show({ payload }, { call, put }) {
      yield put({
        type: 'init',
      });
      const { data } = yield call(show, payload);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *showPage({ payload }, { call, put }) {
      NProgress.start();
      const { data } = yield call(showPage, payload);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *push({ payload }, { put }) {
      yield put(
        routerRedux.push({
          pathname: payload,
        }),
      );
    },
  },

  reducers: {
    save(state, action) {
      NProgress.done();
      return { ...state, ...action.payload };
    },
  },
};
