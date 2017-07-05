import { push, fetch } from '../services/comment';

export default {
  namespace: 'comment',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      NProgress.start();
      const { data } = yield call(fetch);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *push({ payload }, { call, put }) {
      yield call(push, payload);
      yield put({
        type: 'fetch',
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
