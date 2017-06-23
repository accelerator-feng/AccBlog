import fetch from '../utils/request';

export default {
  namespace: 'article',

  state: {},

  effects: {
    *init({ payload }, { call, put }) {
      const { data } = yield call(fetch, 'api/init');
      console.log(data);
      yield put({
        type: 'load',
        payload: data,
      });
    },
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, `api/article/page/${payload}`);
      yield put({
        type: 'load',
        payload: data,
      });
    },
  },

  reducers: {
    load(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
