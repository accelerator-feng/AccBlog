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
        type: 'load',
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
      yield put({
        type: 'comment/fetch',
        payload,
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
    load(state, action) {
      NProgress.done();
      return { ...state, ...action.payload };
    },
    save(state, action) {
      NProgress.done();
      return { ...state, previous: null, next: null, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const pattern = new RegExp(/\/article\/([a-zA-Z0-9_]+)/);
        if (pattern.test(pathname)) {
          const payload = RegExp.$1;
          NProgress.start();
          dispatch({ type: 'show', payload });
        }
      });
    },
  },
};
