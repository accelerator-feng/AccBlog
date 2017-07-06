import { push, fetch } from '../services/comment';

export default {
  namespace: 'comment',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      NProgress.start();
      const { data } = yield call(fetch, payload);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *push({ payload }, { call, put }) {
      yield call(push, payload);
      yield put({
        type: 'fetch',
        payload: payload.articleId,
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
