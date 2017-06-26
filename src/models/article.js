import fetch from '../utils/request';

export default {
  namespace: 'article',

  state: {},

  effects: {
    *init({ payload }, { call, put }) {
      const { data } = yield call(fetch, '/api/index');
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *show({ payload }, { call, put }) {
      yield put({
        type: 'init',
      });
      const { data } = yield call(fetch, `/api/show/${payload}`);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, `api/article/page/${payload}`);
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
